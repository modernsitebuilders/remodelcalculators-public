'use client';

import React, { useState } from 'react';
import { Calculator, Home, Ruler, Package, FileText, ChevronRight, ChevronLeft } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';

const SidingCalculator = () => {
  const [step, setStep] = useState(1);
  const [projectData, setProjectData] = useState({
    // Project Info
    complexity: 'simple',
    
    // Measurements
    walls: [{ width: 0, height: 0 }],
    gables: [],
    includeGables: false,
    dormers: [],
    
    // Openings
    windows: 0,
    doors: 0,
    garageDoors: 0,
    garageDoorSize: 128,
    
    // Siding Selection
    sidingType: 'vinyl',
    vinylProfile: 'double4',
    fiberCementWidth: '7.25',
    woodType: 'cedar-lap-6',
    
    // Accessories
    soffit: { length: 0, depth: 12, type: 'triple4' },
    fascia: { length: 0, width: 8 },
    corners: { inside: 0, outside: 0 },
    includeSoffit: false,
    includeFascia: false,
    includeCorners: false,
    
    // Additional
    includeUnderlayment: true,
    underlaymentType: 'tyvek',
    climate: 'normal'
  });

  const [results, setResults] = useState(null);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');

  // Prevent scroll from changing number inputs
  const preventScrollChange = (e) => {
    e.target.blur();
  };

  // Siding specifications database
  const sidingSpecs = {
    vinyl: {
      double4: { exposure: 4, piecesPerSquare: 24, squaresPerBox: 2, name: 'Double 4"' },
      double45: { exposure: 4.5, piecesPerSquare: 22, squaresPerBox: 2, name: 'Double 4.5"' },
      double5: { exposure: 5, piecesPerSquare: 20, squaresPerBox: 2, name: 'Double 5"' },
      double6: { exposure: 6, piecesPerSquare: 17, squaresPerBox: 2, name: 'Double 6"' },
      insulated: { exposure: 6, piecesPerSquare: 6, squaresPerBox: 1, name: 'Insulated Double 6"' }
    },
    fiberCement: {
      '5.25': { exposure: 4, planksPerSquare: 25, coverage: 4, name: '5-1/4" (4" exposure)' },
      '6.25': { exposure: 5, planksPerSquare: 20, coverage: 5, name: '6-1/4" (5" exposure)' },
      '7.25': { exposure: 6, planksPerSquare: 17, coverage: 6, name: '7-1/4" (6" exposure)' },
      '8.25': { exposure: 7, planksPerSquare: 14, coverage: 7, name: '8-1/4" (7" exposure)' },
      '12': { exposure: 10.75, planksPerSquare: 9, coverage: 10.75, name: '12" (10-3/4" exposure)' }
    },
    wood: {
      'cedar-lap-6': { exposure: 4.5, boardFoot: 1.33, name: 'Cedar 6" Lap' },
      'cedar-lap-8': { exposure: 6.5, boardFoot: 1.23, name: 'Cedar 8" Lap' },
      'cedar-lap-10': { exposure: 8.5, boardFoot: 1.18, name: 'Cedar 10" Lap' },
      'shake-18': { exposure: 7.5, bundlesPerSquare: 5, name: '18" Shakes (7.5" exposure)' },
      'shingle-16': { exposure: 7.5, bundlesPerSquare: 4, name: '16" Shingles (7.5" wall)' }
    }
  };

  const wasteFactors = {
    simple: 0.10,
    gabled: 0.125,
    complex: 0.15
  };

  const validationRules = {
  'wall0-width': [
    CommonRules.unrealistic(4, 100, 'Wall width')
  ],
  'wall0-height': [
    {
      condition: (val) => parseFloat(val) < 7,
      message: 'Wall height <7 feet is uncommon for exterior walls',
      type: ValidationTypes.WARNING
    },
    CommonRules.unrealistic(6, 40, 'Wall height')
  ],
  'gable0-width': [
    {
      condition: (val, allVals) => {
        const gableWidth = parseFloat(val);
        const wallWidth = parseFloat(allVals['wall0-width']) || 0;
        return gableWidth > 0 && wallWidth > 0 && gableWidth > wallWidth * 1.5;
      },
      message: 'Gable width significantly exceeds wall width - verify measurement',
      type: ValidationTypes.WARNING
    }
  ],
  garageDoors: [
    CommonRules.unrealistic(0, 6, 'Number of garage doors')
  ],
  windows: [
    {
      condition: (val) => parseFloat(val) > 50,
      message: 'Large number of windows (>50) - verify count',
      type: ValidationTypes.INFO
    }
  ]
};

// Dynamic getValues based on walls/gables arrays
const getValues = () => {
  const values = { garageDoors, windows, doors: projectData.doors };
  projectData.walls.forEach((wall, index) => {
    values[`wall${index}-width`] = wall.width;
    values[`wall${index}-height`] = wall.height;
  });
  if (projectData.includeGables) {
    projectData.gables.forEach((gable, index) => {
      values[`gable${index}-width`] = gable.width;
      values[`gable${index}-height`] = gable.height;
    });
  }
  return values;
};

const { validate, ValidationDisplay } = useValidation(validationRules);

  const gableWasteFactor = 0.30;

  const calculateMaterials = () => {
    // Calculate total wall area
    let totalWallArea = 0;
    projectData.walls.forEach(wall => {
      totalWallArea += wall.width * wall.height;
    });

    // Calculate gable area with special waste factor - only if checkbox is checked
    let totalGableArea = 0;
    let gableAreaWithWaste = 0;
    if (projectData.includeGables) {
      projectData.gables.forEach(gable => {
        const area = (gable.width * gable.height) / 2;
        totalGableArea += area;
        gableAreaWithWaste += area * (1 + gableWasteFactor);
      });
    }

    // Total area before deductions
    const totalAreaBeforeDeductions = totalWallArea + totalGableArea;

    // Deductions (only garage doors over 25 sq ft)
    let deductions = 0;
    if (projectData.garageDoors > 0 && projectData.garageDoorSize > 25) {
      deductions = projectData.garageDoors * projectData.garageDoorSize;
    }

    // Net area
    const netArea = totalAreaBeforeDeductions - deductions;

    // Apply waste factor to walls only (gables already calculated with waste)
    const wasteFactor = wasteFactors[projectData.complexity];
    const wallAreaWithWaste = (totalWallArea - deductions) * (1 + wasteFactor);
    const totalAreaWithWaste = wallAreaWithWaste + gableAreaWithWaste;

    // Calculate siding materials
    let sidingResults = {};
    
    if (projectData.sidingType === 'vinyl') {
      const spec = sidingSpecs.vinyl[projectData.vinylProfile];
      const squares = Math.ceil(totalAreaWithWaste / 100);
      const boxes = Math.ceil(squares / spec.squaresPerBox);
      const totalPieces = squares * spec.piecesPerSquare;
      
      sidingResults = {
        squares: squares,
        boxes: boxes,
        pieces: totalPieces,
        profileName: spec.name
      };
    } else if (projectData.sidingType === 'fiberCement') {
      const spec = sidingSpecs.fiberCement[projectData.fiberCementWidth];
      const squares = Math.ceil(totalAreaWithWaste / 100);
      const planks = squares * spec.planksPerSquare;
      const weight = squares * 250; // Average weight per square
      
      sidingResults = {
        squares: squares,
        planks: planks,
        weight: weight,
        profileName: spec.name
      };
    } else if (projectData.sidingType === 'wood') {
      const spec = sidingSpecs.wood[projectData.woodType];
      const squares = Math.ceil(totalAreaWithWaste / 100);
      
      if (spec.boardFoot) {
        const boardFeet = squares * 100 * spec.boardFoot;
        sidingResults = {
          squares: squares,
          boardFeet: Math.ceil(boardFeet),
          profileName: spec.name
        };
      } else {
        const bundles = squares * spec.bundlesPerSquare;
        sidingResults = {
          squares: squares,
          bundles: bundles,
          profileName: spec.name
        };
      }
    }

    // Calculate accessories
    const accessories = calculateAccessories();

    // Calculate fasteners
    const fasteners = calculateFasteners(totalAreaWithWaste);

    // Calculate underlayment
    const underlayment = calculateUnderlayment(totalAreaWithWaste);

    setResults({
      areas: {
        totalWall: totalWallArea,
        totalGable: totalGableArea,
        totalBeforeDeductions: totalAreaBeforeDeductions,
        deductions: deductions,
        netArea: netArea,
        totalWithWaste: totalAreaWithWaste,
        wasteFactor: wasteFactor
      },
      siding: sidingResults,
      accessories: accessories,
      fasteners: fasteners,
      underlayment: underlayment
    });

    setStep(5);

    // Track the calculation
    trackCalculation('siding', {
      complexity: projectData.complexity,
      wallsCount: projectData.walls.length,
      gablesCount: projectData.gables.length,
      includeGables: projectData.includeGables,
      windows: projectData.windows,
      doors: projectData.doors,
      garageDoors: projectData.garageDoors,
      garageDoorSize: projectData.garageDoorSize,
      sidingType: projectData.sidingType,
      vinylProfile: projectData.sidingType === 'vinyl' ? projectData.vinylProfile : null,
      fiberCementWidth: projectData.sidingType === 'fiberCement' ? projectData.fiberCementWidth : null,
      woodType: projectData.sidingType === 'wood' ? projectData.woodType : null,
      includeSoffit: projectData.includeSoffit,
      includeFascia: projectData.includeFascia,
      includeCorners: projectData.includeCorners,
      includeUnderlayment: projectData.includeUnderlayment,
      underlaymentType: projectData.underlaymentType,
      climate: projectData.climate
    }, {
      totalWallArea: totalWallArea,
      totalGableArea: totalGableArea,
      totalBeforeDeductions: totalAreaBeforeDeductions,
      deductions: deductions,
      netArea: netArea,
      totalWithWaste: totalAreaWithWaste,
      wasteFactor: wasteFactor * 100,
      sidingSquares: sidingResults.squares,
      sidingBoxes: sidingResults.boxes,
      sidingPieces: sidingResults.pieces,
      sidingPlanks: sidingResults.planks,
      sidingBoardFeet: sidingResults.boardFeet,
      sidingBundles: sidingResults.bundles,
      sidingWeight: sidingResults.weight,
      starterStrip: accessories?.starterStrip?.pieces,
      jChannel: accessories?.jChannel?.pieces,
      cornerPosts: accessories?.corners,
      soffitPanels: accessories?.soffit?.panels,
      fasciaPieces: accessories?.fascia?.pieces,
      nails: fasteners?.nails?.total,
      underlaymentRolls: underlayment?.rolls
    });
};  

  const handleCopyCalculation = async () => {
    if (!results) return;
    
    // Prepare inputs
    const inputsData = {
      'Project complexity': projectData.complexity,
      'Number of walls': projectData.walls.length,
      'Siding type': projectData.sidingType.replace(/([A-Z])/g, ' $1').trim()
    };
    
    if (projectData.sidingType === 'vinyl') {
      inputsData['Vinyl profile'] = sidingSpecs.vinyl[projectData.vinylProfile].name;
    } else if (projectData.sidingType === 'fiberCement') {
      inputsData['Plank width'] = `${projectData.fiberCementWidth}"`;
    } else if (projectData.sidingType === 'wood') {
      inputsData['Wood type'] = projectData.woodType.replace(/-/g, ' ');
    }
    
    if (projectData.includeGables) {
      inputsData['Gables'] = `${projectData.gables.length} gables`;
    }
    
    inputsData['Windows'] = projectData.windows;
    inputsData['Doors'] = projectData.doors;
    inputsData['Garage doors'] = projectData.garageDoors;
    
    // Prepare outputs
    const outputs = {
      'Wall area': `${results.areas.totalWall.toFixed(0)} sq ft`,
      'Gable area': `${results.areas.totalGable.toFixed(0)} sq ft`,
      'Net area': `${results.areas.netArea.toFixed(0)} sq ft`,
      'Total with waste': `${results.areas.totalWithWaste.toFixed(0)} sq ft (${(results.areas.totalWithWaste / 100).toFixed(2)} squares)`,
      'Siding squares': results.siding.squares
    };
    
    if (results.siding.boxes) outputs['Boxes/Cartons'] = results.siding.boxes;
    if (results.siding.planks) outputs['Planks'] = results.siding.planks;
    if (results.starterStrip) outputs['Starter strip'] = `${results.starterStrip} pieces`;
    if (results.jChannel) outputs['J-Channel'] = `${results.jChannel} pieces`;
    if (results.cornerPosts) outputs['Corner posts'] = `Inside: ${results.cornerPosts.inside}, Outside: ${results.cornerPosts.outside}`;
    if (results.nails) outputs['Nails'] = `${results.nails.toLocaleString()} nails`;
    if (results.underlaymentRolls) outputs['Underlayment'] = `${results.underlaymentRolls} rolls`;
    
    const note = `Waste factor: ${(results.areas.wasteFactor * 100).toFixed(1)}% walls, 30% gables. Per ASTM installation standards.`;
    
    const success = await copyCalculation('Siding Calculator', inputsData, outputs, note);
    
    if (success) {
      setCopyButtonText('✓ Copied!');
      setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
    } else {
      alert('Unable to copy. Please copy results manually.');
    }
  };

  const calculateAccessories = () => {  
    const accessories = {};

    // Starter strip - calculate perimeter
    const perimeterLength = projectData.walls.reduce((sum, wall) => sum + wall.width, 0);
    const starterWithWaste = perimeterLength * 1.10;
    accessories.starterStrip = {
      linearFeet: Math.ceil(starterWithWaste),
      pieces: Math.ceil(starterWithWaste / 12.5),
      cartons: Math.ceil(starterWithWaste / 500)
    };

    // J-channel - windows, doors, soffit edges
    const windowPerimeter = projectData.windows * 15;
    const doorPerimeter = projectData.doors * 20;
    const soffitEdges = projectData.includeSoffit ? projectData.soffit.length : 0;
    const totalJChannel = (windowPerimeter + doorPerimeter + soffitEdges) * 1.10;
    accessories.jChannel = {
      linearFeet: Math.ceil(totalJChannel),
      pieces: Math.ceil(totalJChannel / 12.5),
      cartons: Math.ceil(totalJChannel / 500)
    };

    // Corner posts - only if checkbox is checked
    if (projectData.includeCorners) {
      accessories.insideCorners = {
        pieces: projectData.corners.inside,
        cartons: Math.ceil(projectData.corners.inside / 10)
      };
      accessories.outsideCorners = {
        pieces: projectData.corners.outside,
        cartons: Math.ceil(projectData.corners.outside / 10)
      };
    }

    // Soffit - only if checkbox is checked
    if (projectData.includeSoffit && projectData.soffit.length > 0) {
      const soffitArea = projectData.soffit.length * (projectData.soffit.depth / 12);
      const soffitWithWaste = soffitArea * 1.10;
      
      if (projectData.soffit.type === 'triple4') {
        accessories.soffit = {
          area: Math.ceil(soffitArea),
          panels: Math.ceil(soffitWithWaste / 12),
          cartons: Math.ceil(soffitWithWaste / 192),
          type: 'Triple 4" (12" wide)'
        };
      } else {
        accessories.soffit = {
          area: Math.ceil(soffitArea),
          panels: Math.ceil(soffitWithWaste / 16),
          cartons: Math.ceil(soffitWithWaste / 320),
          type: 'Double 5" (16" wide)'
        };
      }

      // F-channel for soffit
      accessories.fChannel = {
        linearFeet: Math.ceil(projectData.soffit.length * 1.10),
        pieces: Math.ceil(projectData.soffit.length * 1.10 / 12.5),
        cartons: Math.ceil(projectData.soffit.length * 1.10 / 500)
      };
    }

    // Fascia - only if checkbox is checked
    if (projectData.includeFascia && projectData.fascia.length > 0) {
      accessories.fascia = {
        linearFeet: Math.ceil(projectData.fascia.length * 1.10),
        pieces: Math.ceil(projectData.fascia.length * 1.10 / 12.5),
        cartons: Math.ceil(projectData.fascia.length * 1.10 / 300),
        width: `${projectData.fascia.width}"`
      };
    }

    return accessories;
  };

  const calculateFasteners = (area) => {
    const fasteners = {};

    if (projectData.sidingType === 'vinyl') {
      const nailsNeeded = Math.ceil(area * 1.15 * 1.10);
      const nailsPerPound = 577; // 1.5" aluminum nails
      const pounds = Math.ceil(nailsNeeded / nailsPerPound);
      
      fasteners.nails = {
        quantity: nailsNeeded,
        pounds: pounds,
        type: 'Aluminum, 1-1/2" with 5/16" head'
      };
    } else if (projectData.sidingType === 'fiberCement') {
      const nailsNeeded = Math.ceil(area * 1.75 * 1.10);
      
      fasteners.nails = {
        quantity: nailsNeeded,
        type: 'Hot-dipped galvanized or stainless steel, 6d (2") ring shank'
      };
    } else if (projectData.sidingType === 'wood') {
      const nailsNeeded = Math.ceil(area * 1.25 * 1.10);
      
      fasteners.nails = {
        quantity: nailsNeeded,
        type: 'Stainless steel or aluminum, 7d (2-1/8") ring shank'
      };
    }

    // Caulk estimate
    const windowsAndDoors = projectData.windows + projectData.doors;
    fasteners.caulk = {
      tubes: Math.ceil(windowsAndDoors * 1.2),
      type: '100% acrylic latex (fiber cement) or polyurethane'
    };

    return fasteners;
  };

  const calculateUnderlayment = (area) => {
    if (!projectData.includeUnderlayment) return null;

    const areaWithOverlap = area * 1.10;
    let rollCoverage, rollsNeeded, rollSize;

    if (projectData.underlaymentType === 'tyvek') {
      rollCoverage = 900; // 9' x 100'
      rollSize = "9' x 100'";
    } else {
      rollCoverage = 400; // 15# felt
      rollSize = "36\" x 144'";
    }

    rollsNeeded = Math.ceil(areaWithOverlap / rollCoverage);

    return {
      rolls: rollsNeeded,
      coverage: rollCoverage,
      type: projectData.underlaymentType === 'tyvek' ? 'Tyvek House Wrap' : '15# Felt Paper',
      rollSize: rollSize
    };
  };

  const updateProjectData = (field, value) => {
    setProjectData(prev => {
      const updated = { ...prev, [field]: value };
      // Auto-add first gable when checkbox is enabled
      if (field === 'includeGables' && value === true && updated.gables.length === 0) {
        updated.gables = [{ width: 0, height: 0 }];
      }
      return updated;
    });
  };

  const updateWall = (index, field, value) => {
    const newWalls = [...projectData.walls];
    newWalls[index][field] = parseFloat(value) || 0;
    setProjectData(prev => ({ ...prev, walls: newWalls }));
  };

  const addWall = () => {
    setProjectData(prev => ({
      ...prev,
      walls: [...prev.walls, { width: 0, height: 0 }]
    }));
  };

  const removeWall = (index) => {
    if (projectData.walls.length > 1) {
      const newWalls = projectData.walls.filter((_, i) => i !== index);
      setProjectData(prev => ({ ...prev, walls: newWalls }));
    }
  };

  const updateGable = (index, field, value) => {
    const newGables = [...projectData.gables];
    newGables[index][field] = parseFloat(value) || 0;
    setProjectData(prev => ({ ...prev, gables: newGables }));
  };

  const addGable = () => {
    setProjectData(prev => ({
      ...prev,
      gables: [...prev.gables, { width: 0, height: 0 }]
    }));
  };

  const removeGable = (index) => {
    const newGables = projectData.gables.filter((_, i) => i !== index);
    setProjectData(prev => ({ ...prev, gables: newGables }));
  };

  const canCalculate = () => {
    const hasWallArea = projectData.walls.some(wall => wall.width > 0 && wall.height > 0);
    return hasWallArea;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="w-8 h-8 text-indigo-600" />
            <h2 className="text-3xl font-bold text-gray-800">Professional Siding Calculator</h2>
          </div>
          <p className="text-gray-600">Industry-standard material calculations based on ASTM specifications</p>
        </div>

        {/* Progress Indicator */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex justify-between items-center">
            {['Project Info', 'Measurements', 'Siding Type', 'Accessories', 'Results'].map((label, idx) => (
              <div key={idx} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  step > idx + 1 ? 'bg-green-500 text-white' :
                  step === idx + 1 ? 'bg-indigo-600 text-white' :
                  'bg-gray-300 text-gray-600'
                }`}>
                  {idx + 1}
                </div>
                <span className={`ml-2 text-sm font-medium ${step === idx + 1 ? 'text-indigo-600' : 'text-gray-600'}`}>
                  {label}
                </span>
                {idx < 4 && <ChevronRight className="w-5 h-5 text-gray-400 mx-2" />}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          {/* Step 1: Project Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Project Information
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Complexity
                </label>
                <p className="text-sm text-gray-500 mb-3">This determines the waste factor applied to calculations</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: 'simple', label: 'Simple', waste: '10%', desc: 'Rectangular house, minimal features' },
                    { value: 'gabled', label: 'Moderate', waste: '12.5%', desc: 'Gables, standard complexity' },
                    { value: 'complex', label: 'Complex', waste: '15%', desc: 'Multiple gables, dormers, angles' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => updateProjectData('complexity', option.value)}
                      className={`p-4 border-2 rounded-lg text-left transition-all cursor-pointer ${
                        projectData.complexity === option.value
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-semibold text-lg">{option.label}</div>
                      <div className="text-sm text-indigo-600 font-medium mt-1">{option.waste} waste factor</div>
                      <div className="text-sm text-gray-600 mt-2">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Climate/Installation Conditions
                </label>
                <select
                  value={projectData.climate}
                  onChange={(e) => updateProjectData('climate', e.target.value)}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="normal">Normal (Above 40°F installation)</option>
                  <option value="cold">Cold Climate (Below 40°F installation)</option>
                  <option value="coastal">Coastal (Within 3,000 ft of saltwater)</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Measurements */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Ruler className="w-6 h-6" />
                Measurements
              </h2>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Do not deduct windows or doors under 25 sq ft. The extra material compensates for cutting waste around openings.
                </p>
              </div>

              {/* Walls */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Wall Sections</h3>
                {projectData.walls.map((wall, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 p-4 bg-gray-50 rounded-lg">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Width (feet)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={wall.width || ''}
                        onChange={(e) => { updateWall(index, 'width', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                        onWheel={preventScrollChange}
                        className={`w-full px-3 py-2 border rounded-lg ${
                          !wall.width ? 'border-orange-400' : 'border-gray-300'
                        }`}
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Height (feet)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={wall.height || ''}
                        onChange={(e) => { updateWall(index, 'height', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                        onWheel={preventScrollChange}
                        className={`w-full px-3 py-2 border rounded-lg ${
                          !wall.height ? 'border-orange-400' : 'border-gray-300'
                        }`}
                        placeholder="0"
                      />
                    </div>
                    <div className="flex items-end">
                      <button
                        onClick={() => removeWall(index)}
                        disabled={projectData.walls.length === 1}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 disabled:bg-gray-300 disabled:cursor-not-allowed cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="col-span-full text-sm text-gray-600">
                      Area: {(wall.width * wall.height).toFixed(1)} sq ft
                    </div>
                  </div>
                ))}
                <button
                  onClick={addWall}
                  className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
                >
                  + Add Wall Section
                </button>
              </div>

              {/* Gables */}
              <div>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg mb-3">
                  <input
                    type="checkbox"
                    checked={projectData.includeGables}
                    onChange={(e) => { updateProjectData('includeGables', e.target.checked); setTimeout(() => validate(getValues()), 100); }}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                  />
                  <label className="text-lg font-semibold text-gray-800 cursor-pointer">
                    Gable Ends
                  </label>
                </div>
                {projectData.includeGables && (
                  <>
                    <p className="text-sm text-gray-600 mb-2">Gables automatically receive 30% waste factor due to angled cuts</p>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-3">
                      <p className="text-sm text-gray-700">
                        <strong>Tip:</strong> Gable height is the triangular portion only - from the top of your rectangular wall to the peak. Do NOT measure from ground to peak (that would double-count the wall area). Add each gable separately if they have different dimensions.
                      </p>
                    </div>
                    {projectData.gables.map((gable, index) => (
                      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3 p-4 bg-gray-50 rounded-lg">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Width (feet)
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            value={gable.width || ''}
                            onChange={(e) => { updateGable(index, 'width', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                            onWheel={preventScrollChange}
                            className={`w-full px-3 py-2 border rounded-lg ${
                              !gable.width ? 'border-orange-400' : 'border-gray-300'
                            }`}
                            placeholder="0"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Height (feet) - Triangle only
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            value={gable.height || ''}
                            onChange={(e) => { updateGable(index, 'height', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                            onWheel={preventScrollChange}
                            className={`w-full px-3 py-2 border rounded-lg ${
                              !gable.height ? 'border-orange-400' : 'border-gray-300'
                            }`}
                            placeholder="0"
                          />
                          <p className="text-xs text-gray-500 mt-1">Top of wall to peak</p>
                        </div>
                        <div className="flex items-end">
                          <button
                            onClick={() => removeGable(index)}
                            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 cursor-pointer"
                          >
                            Remove
                          </button>
                        </div>
                        <div className="col-span-full text-sm text-gray-600">
                          Base area: {((gable.width * gable.height) / 2).toFixed(1)} sq ft | With 30% waste: {(((gable.width * gable.height) / 2) * 1.3).toFixed(1)} sq ft
                        </div>
                      </div>
                    ))}
                    <button
                      onClick={addGable}
                      className="mt-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
                    >
                      + Add Another Gable
                    </button>
                  </>
                )}
              </div>

              {/* Openings */}
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Openings</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Windows
                    </label>
                    <input
                      type="number"
                      value={projectData.windows || ''}
                      onChange={(e) => updateProjectData('windows', parseInt(e.target.value) || 0)}
                      onWheel={preventScrollChange}
                      className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Not deducted from area</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Doors
                    </label>
                    <input
                      type="number"
                      value={projectData.doors || ''}
                      onChange={(e) => updateProjectData('doors', parseInt(e.target.value) || 0)}
                      onWheel={preventScrollChange}
                      className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Not deducted from area</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Number of Garage Doors
                    </label>
                    <input
                      type="number"
                      value={projectData.garageDoors || ''}
                      onChange={(e) => updateProjectData('garageDoors', parseInt(e.target.value) || 0)}
                      onWheel={preventScrollChange}
                      className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                      placeholder="0"
                    />
                    <p className="text-xs text-gray-500 mt-1">Will be deducted (over 25 sq ft)</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Siding Type */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Package className="w-6 h-6" />
                Siding Selection
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Siding Material Type
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { value: 'vinyl', label: 'Vinyl Siding', desc: 'Most common, easy installation' },
                    { value: 'fiberCement', label: 'Fiber Cement', desc: 'James Hardie, durable' },
                    { value: 'wood', label: 'Wood Siding', desc: 'Cedar, natural appearance' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => updateProjectData('sidingType', option.value)}
                      className={`p-4 border-2 rounded-lg text-left transition-all cursor-pointer ${
                        projectData.sidingType === option.value
                          ? 'border-indigo-600 bg-indigo-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <div className="font-semibold text-lg">{option.label}</div>
                      <div className="text-sm text-gray-600 mt-2">{option.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {projectData.sidingType === 'vinyl' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Vinyl Profile
                  </label>
                  <select
                    value={projectData.vinylProfile}
                    onChange={(e) => updateProjectData('vinylProfile', e.target.value)}
                    className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    {Object.entries(sidingSpecs.vinyl).map(([key, spec]) => (
                      <option key={key} value={key}>
                        {spec.name} - {spec.exposure}" exposure - {spec.piecesPerSquare} pieces/square
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {projectData.sidingType === 'fiberCement' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plank Width
                  </label>
                  <select
                    value={projectData.fiberCementWidth}
                    onChange={(e) => updateProjectData('fiberCementWidth', e.target.value)}
                    className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    {Object.entries(sidingSpecs.fiberCement).map(([key, spec]) => (
                      <option key={key} value={key}>
                        {spec.name} - {spec.planksPerSquare} planks/square
                      </option>
                    ))}
                  </select>
                  <p className="text-sm text-gray-600 mt-2">
                    Note: Fiber cement weighs approximately 250 lbs per square
                  </p>
                </div>
              )}

              {projectData.sidingType === 'wood' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Wood Type and Size
                  </label>
                  <select
                    value={projectData.woodType}
                    onChange={(e) => updateProjectData('woodType', e.target.value)}
                    className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  >
                    {Object.entries(sidingSpecs.wood).map(([key, spec]) => (
                      <option key={key} value={key}>
                        {spec.name}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg">
                <input
                  type="checkbox"
                  checked={projectData.includeUnderlayment}
                  onChange={(e) => updateProjectData('includeUnderlayment', e.target.checked)}
                  className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                />
                <label className="text-sm font-medium text-gray-700 cursor-pointer">
                  Include house wrap/underlayment
                </label>
              </div>
              {projectData.includeUnderlayment && (
                <select
                  value={projectData.underlaymentType}
                  onChange={(e) => updateProjectData('underlaymentType', e.target.value)}
                  className="mt-2 w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="tyvek">Tyvek House Wrap (9' x 100' rolls)</option>
                  <option value="felt">15# Felt Paper (36" x 144' rolls)</option>
                </select>
              )}
            </div>
          )}

          {/* Step 4: Accessories */}
          {step === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Package className="w-6 h-6" />
                Accessories & Trim
              </h2>

              <div>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg mb-3">
                  <input
                    type="checkbox"
                    checked={projectData.includeCorners}
                    onChange={(e) => updateProjectData('includeCorners', e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                  />
                  <label className="text-lg font-semibold text-gray-800 cursor-pointer">
                    Corner Posts
                  </label>
                </div>
                {projectData.includeCorners && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Inside Corners
                      </label>
                      <input
                        type="number"
                        value={projectData.corners.inside || ''}
                        onChange={(e) => updateProjectData('corners', { ...projectData.corners, inside: parseInt(e.target.value) || 0 })}
                        onWheel={preventScrollChange}
                        className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                        placeholder="0"
                      />
                      <p className="text-xs text-gray-500 mt-1">10-foot posts, 10 per carton</p>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Outside Corners
                      </label>
                      <input
                        type="number"
                        value={projectData.corners.outside || ''}
                        onChange={(e) => updateProjectData('corners', { ...projectData.corners, outside: parseInt(e.target.value) || 0 })}
                        onWheel={preventScrollChange}
                        className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                        placeholder="0"
                      />
                      <p className="text-xs text-gray-500 mt-1">10-foot posts, 10 per carton</p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg mb-3">
                  <input
                    type="checkbox"
                    checked={projectData.includeSoffit}
                    onChange={(e) => updateProjectData('includeSoffit', e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                  />
                  <label className="text-lg font-semibold text-gray-800 cursor-pointer">
                    Soffit
                  </label>
                </div>
                {projectData.includeSoffit && (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Total Eave Length (feet)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={projectData.soffit.length || ''}
                        onChange={(e) => updateProjectData('soffit', { ...projectData.soffit, length: parseFloat(e.target.value) || 0 })}
                        onWheel={preventScrollChange}
                        className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Soffit Depth (inches)
                      </label>
                      <select
                        value={projectData.soffit.depth}
                        onChange={(e) => updateProjectData('soffit', { ...projectData.soffit, depth: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                      >
                        <option value="12">12"</option>
                        <option value="16">16"</option>
                        <option value="24">24"</option>
                        <option value="36">36"</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Soffit Type
                      </label>
                      <select
                        value={projectData.soffit.type}
                        onChange={(e) => updateProjectData('soffit', { ...projectData.soffit, type: e.target.value })}
                        className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                      >
                        <option value="triple4">Triple 4" (12" wide)</option>
                        <option value="double5">Double 5" (16" wide)</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg mb-3">
                  <input
                    type="checkbox"
                    checked={projectData.includeFascia}
                    onChange={(e) => updateProjectData('includeFascia', e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                  />
                  <label className="text-lg font-semibold text-gray-800 cursor-pointer">
                    Fascia
                  </label>
                </div>
                {projectData.includeFascia && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Total Fascia Length (feet)
                      </label>
                      <input
                        type="number"
                        step="0.1"
                        value={projectData.fascia.length || ''}
                        onChange={(e) => updateProjectData('fascia', { ...projectData.fascia, length: parseFloat(e.target.value) || 0 })}
                        onWheel={preventScrollChange}
                        className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                        placeholder="0"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Fascia Width (inches)
                      </label>
                      <select
                        value={projectData.fascia.width}
                        onChange={(e) => updateProjectData('fascia', { ...projectData.fascia, width: parseInt(e.target.value) })}
                        className="w-full px-3 py-2 border border-yellow-400 rounded-lg"
                      >
                        <option value="6">6"</option>
                        <option value="8">8"</option>
                        <option value="10">10"</option>
                        <option value="12">12"</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 5: Results */}
          {step === 5 && results && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Material Calculations
                </h2>
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
                >
                  Print Report
                </button>
              </div>

              {/* Area Summary */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Area Summary</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <div className="text-gray-600">Wall Area</div>
                    <div className="text-xl font-bold text-gray-800">{results.areas.totalWall.toFixed(0)} sq ft</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Gable Area</div>
                    <div className="text-xl font-bold text-gray-800">{results.areas.totalGable.toFixed(0)} sq ft</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Deductions</div>
                    <div className="text-xl font-bold text-gray-800">-{results.areas.deductions.toFixed(0)} sq ft</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Net Area</div>
                    <div className="text-xl font-bold text-gray-800">{results.areas.netArea.toFixed(0)} sq ft</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-300">
                  <div className="text-gray-600">Total With Waste ({(results.areas.wasteFactor * 100).toFixed(1)}% walls, 30% gables)</div>
                  <div className="text-2xl font-bold text-indigo-600">{results.areas.totalWithWaste.toFixed(0)} sq ft</div>
                  <div className="text-sm text-gray-500 mt-1">
                    = {(results.areas.totalWithWaste / 100).toFixed(2)} squares
                  </div>
                </div>
              </div>

              {/* Siding Materials */}
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Primary Siding Materials</h3>
                <div className="text-sm text-gray-600 mb-2">{results.siding.profileName}</div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="font-medium">Squares Needed</span>
                    <span className="text-xl font-bold">{results.siding.squares}</span>
                  </div>
                  {results.siding.boxes && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">Cartons/Boxes</span>
                      <span className="text-xl font-bold">{results.siding.boxes}</span>
                    </div>
                  )}
                  {results.siding.pieces && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">Total Pieces</span>
                      <span className="text-xl font-bold">{results.siding.pieces}</span>
                    </div>
                  )}
                  {results.siding.planks && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">Total Planks (12')</span>
                      <span className="text-xl font-bold">{results.siding.planks}</span>
                    </div>
                  )}
                  {results.siding.weight && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">Approximate Weight</span>
                      <span className="text-xl font-bold">{results.siding.weight} lbs</span>
                    </div>
                  )}
                  {results.siding.boardFeet && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">Board Feet</span>
                      <span className="text-xl font-bold">{results.siding.boardFeet}</span>
                    </div>
                  )}
                  {results.siding.bundles && (
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-medium">Bundles</span>
                      <span className="text-xl font-bold">{results.siding.bundles}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Accessories */}
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Accessories & Trim</h3>
                <div className="space-y-3 text-sm">
                  {results.accessories.starterStrip && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">Starter Strip</div>
                      <div className="mt-1 text-gray-600">
                        {results.accessories.starterStrip.linearFeet} linear feet | 
                        {results.accessories.starterStrip.pieces} pieces (12.5' each) | 
                        {results.accessories.starterStrip.cartons} cartons
                      </div>
                    </div>
                  )}
                  {results.accessories.jChannel && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">J-Channel</div>
                      <div className="mt-1 text-gray-600">
                        {results.accessories.jChannel.linearFeet} linear feet | 
                        {results.accessories.jChannel.pieces} pieces (12.5' each) | 
                        {results.accessories.jChannel.cartons} cartons
                      </div>
                    </div>
                  )}
                  {results.accessories.insideCorners && results.accessories.insideCorners.pieces > 0 && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">Inside Corner Posts</div>
                      <div className="mt-1 text-gray-600">
                        {results.accessories.insideCorners.pieces} pieces (10' each) | 
                        {results.accessories.insideCorners.cartons} cartons
                      </div>
                    </div>
                  )}
                  {results.accessories.outsideCorners && results.accessories.outsideCorners.pieces > 0 && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">Outside Corner Posts</div>
                      <div className="mt-1 text-gray-600">
                        {results.accessories.outsideCorners.pieces} pieces (10' each) | 
                        {results.accessories.outsideCorners.cartons} cartons
                      </div>
                    </div>
                  )}
                  {results.accessories.soffit && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">Soffit - {results.accessories.soffit.type}</div>
                      <div className="mt-1 text-gray-600">
                        {results.accessories.soffit.area} sq ft | 
                        {results.accessories.soffit.panels} panels | 
                        {results.accessories.soffit.cartons} cartons
                      </div>
                    </div>
                  )}
                  {results.accessories.fChannel && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">F-Channel (for soffit)</div>
                      <div className="mt-1 text-gray-600">
                        {results.accessories.fChannel.linearFeet} linear feet | 
                        {results.accessories.fChannel.pieces} pieces (12.5' each) | 
                        {results.accessories.fChannel.cartons} cartons
                      </div>
                    </div>
                  )}
                  {results.accessories.fascia && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">Fascia - {results.accessories.fascia.width} wide</div>
                      <div className="mt-1 text-gray-600">
                        {results.accessories.fascia.linearFeet} linear feet | 
                        {results.accessories.fascia.pieces} pieces (12.5' each) | 
                        {results.accessories.fascia.cartons} cartons
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Fasteners */}
              <div className="bg-white border border-gray-300 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Fasteners & Supplies</h3>
                <div className="space-y-3 text-sm">
                  {results.fasteners.nails && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">Nails</div>
                      <div className="mt-1 text-gray-600">
                        Quantity: {results.fasteners.nails.quantity} nails
                        {results.fasteners.nails.pounds && ` (≈${results.fasteners.nails.pounds} lbs)`}
                      </div>
                      <div className="mt-1 text-gray-500 text-xs">
                        Type: {results.fasteners.nails.type}
                      </div>
                    </div>
                  )}
                  {results.fasteners.caulk && (
                    <div className="p-3 bg-gray-50 rounded">
                      <div className="font-medium text-gray-800">Caulk/Sealant</div>
                      <div className="mt-1 text-gray-600">
                        {results.fasteners.caulk.tubes} tubes (10.1 oz each)
                      </div>
                      <div className="mt-1 text-gray-500 text-xs">
                        Type: {results.fasteners.caulk.type}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Underlayment */}
              {results.underlayment && (
                <div className="bg-white border border-gray-300 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Underlayment</h3>
                  <div className="p-3 bg-gray-50 rounded">
                    <div className="font-medium text-gray-800">{results.underlayment.type}</div>
                    <div className="mt-1 text-gray-600">
                      {results.underlayment.rolls} rolls ({results.underlayment.rollSize} | {results.underlayment.coverage} sq ft per roll)
                    </div>
                  </div>
                </div>
              )}

              {/* Important Notes */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Important Notes</h3>
                <ul className="text-sm text-gray-700 space-y-1 list-disc list-inside">
                  <li>All calculations include industry-standard waste factors</li>
                  <li>Verify product availability and specifications with your supplier</li>
                  <li>Building codes may require specific materials in your area</li>
                  {projectData.climate === 'coastal' && (
                    <li className="font-medium text-blue-700">Coastal installation: Use stainless steel fasteners only</li>
                  )}
                  {projectData.climate === 'cold' && (
                    <li className="font-medium text-blue-700">Cold climate: Increased expansion gaps applied</li>
                  )}
                  {projectData.sidingType === 'fiberCement' && (
                    <li className="font-medium text-orange-700">Fiber cement requires 1-1/4" minimum overlap per building codes</li>
                  )}
                </ul>
             </div>
              
              {/* Copy Calculation Button */}
<div className="bg-white rounded-lg shadow-lg p-6">
  <div className="flex gap-3">
    <button 
      onClick={handleCopyCalculation}
      className="copy-calc-btn flex-1"
    >
      {copyButtonText}
    </button>
    
    {/* ADD THIS PRINT BUTTON */}
    <button 
      onClick={() => printCalculation('Siding Calculator')}
      className="copy-calc-btn flex-1"
    >
      🖨️ Print Results
    </button>
  </div>
</div>
              
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setStep(Math.max(1, step - 1))}
              disabled={step === 1}
              className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:bg-gray-200 disabled:cursor-not-allowed cursor-pointer flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            {step < 4 && (
              <button
                onClick={() => setStep(step + 1)}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer flex items-center gap-2"
              >
                Next
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {step === 4 && (
              <div className="flex flex-col items-end gap-2">
                {!canCalculate() && (
                  <p className="text-sm text-red-600">Enter at least one wall section with dimensions to calculate</p>
                )}

                <ValidationDisplay />

                <button
                  onClick={calculateMaterials}
                  disabled={!canCalculate()}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 cursor-pointer disabled:bg-gray-300 disabled:cursor-not-allowed"
>
  Calculate Materials
</button>
              </div>
            )}
            {step === 5 && (
              <button
                onClick={() => {
                  setStep(1);
                  setResults(null);
                }}
                className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 cursor-pointer"
              >
                New Calculation
              </button>
            )}
          </div>
        </div>
      </div>
      <FAQSection calculatorId="siding-calculator" />
    </div>
  );
};

export default SidingCalculator;