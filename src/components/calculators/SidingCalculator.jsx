'use client';

import React, { useState, useRef } from 'react';
import { 
  NumberInput,        
  SelectInput,        
  MaterialCard,       
  SectionCard,        
  InputGrid,          
  CalculateButtons,   
  ResultsButtons      
} from '@/components/calculator';
import { Calculator, Home, Ruler, Package, FileText, ChevronRight, ChevronLeft } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { trackCalculatorInteraction } from '@/utils/buttonTracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';
import { useCalculatorTracking, useCalculatorFlow } from '@/utils/tracking-hooks'; // ← ADDED

const SidingCalculator = () => {
    console.log("SIDING CALCULATOR LOADED - FILE IS CORRECT");  // ADD THIS LINE

  // ← ADDED THESE 2 LINES
  const { trackField, trackAction } = useCalculatorTracking('siding-calculator');
  useCalculatorFlow('siding-calculator');

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
  const resultsRef = useRef(null);

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

  // Format options helpers
  const formatOptions = (optionsObj) => {
    return Object.entries(optionsObj).map(([value, data]) => ({
      value,
      label: data.name || data
    }));
  };

  const complexityOptions = [
    { value: 'simple', label: 'Simple (10% waste)' },
    { value: 'gabled', label: 'Moderate (12.5% waste)' },
    { value: 'complex', label: 'Complex (15% waste)' }
  ];

  const climateOptions = [
    { value: 'normal', label: 'Normal (Above 40°F installation)' },
    { value: 'cold', label: 'Cold Climate (Below 40°F installation)' },
    { value: 'coastal', label: 'Coastal (Within 3,000 ft of saltwater)' }
  ];

  const sidingTypeOptions = [
    { value: 'vinyl', label: 'Vinyl Siding' },
    { value: 'fiberCement', label: 'Fiber Cement' },
    { value: 'wood', label: 'Wood Siding' }
  ];

  const underlaymentOptions = [
    { value: 'tyvek', label: 'Tyvek House Wrap (9\' x 100\' rolls)' },
    { value: 'felt', label: '15# Felt Paper (36" x 144\' rolls)' }
  ];

  const soffitDepthOptions = [
    { value: '12', label: '12"' },
    { value: '16', label: '16"' },
    { value: '24', label: '24"' },
    { value: '36', label: '36"' }
  ];

  const soffitTypeOptions = [
    { value: 'triple4', label: 'Triple 4" (12" wide)' },
    { value: 'double5', label: 'Double 5" (16" wide)' }
  ];

  const fasciaWidthOptions = [
    { value: '6', label: '6"' },
    { value: '8', label: '8"' },
    { value: '10', label: '10"' },
    { value: '12', label: '12"' }
  ];

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
    const values = { 
      garageDoors: projectData.garageDoors, 
      windows: projectData.windows, 
      doors: projectData.doors 
    };
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

    // Auto-scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);

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
    trackCalculatorInteraction.calculate('siding', true);
  };  

  const handleCopyCalculation = async () => {
    trackAction('copy'); // ← ADDED
    if (!results) return;

    trackCalculatorInteraction.copyResults('siding');
    
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

  const handleStartOver = () => {
    trackAction('reset'); // ← ADDED
    trackCalculatorInteraction.startOver('siding');
    setStep(1);
    setProjectData({
      complexity: 'simple',
      walls: [{ width: 0, height: 0 }],
      gables: [],
      includeGables: false,
      dormers: [],
      windows: 0,
      doors: 0,
      garageDoors: 0,
      garageDoorSize: 128,
      sidingType: 'vinyl',
      vinylProfile: 'double4',
      fiberCementWidth: '7.25',
      woodType: 'cedar-lap-6',
      soffit: { length: 0, depth: 12, type: 'triple4' },
      fascia: { length: 0, width: 8 },
      corners: { inside: 0, outside: 0 },
      includeSoffit: false,
      includeFascia: false,
      includeCorners: false,
      includeUnderlayment: true,
      underlaymentType: 'tyvek',
      climate: 'normal'
    });
    setResults(null);
  };

  // Rest of the calculation functions remain the same (calculateAccessories, calculateFasteners, calculateUnderlayment)
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
    // Track key fields
    if (['complexity', 'sidingType', 'climate'].includes(field)) {
      trackField(field, value); // ← ADDED
    }
  };

  const updateWall = (index, field, value) => {
    const newWalls = [...projectData.walls];
    newWalls[index][field] = parseFloat(value) || 0;
    setProjectData(prev => ({ ...prev, walls: newWalls }));
    // Track first wall dimensions
    if (index === 0 && (field === 'width' || field === 'height')) {
      trackField(`wall1_${field}`, value); // ← ADDED
    }
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

  // Custom wall input component for dynamic walls
  const WallInputs = () => (
    <div className="space-y-4">
      {projectData.walls.map((wall, index) => (
        <SectionCard key={index} title={`Wall Section ${index + 1}`} variant="default">
          <InputGrid columns={2}>
            <NumberInput
              label="Width (feet)"
              value={wall.width}
              onChange={(value) => updateWall(index, 'width', value)}
              unit="feet"
              required={true}
              fieldName={`wall${index}-width`}
            />
            <NumberInput
              label="Height (feet)"
              value={wall.height}
              onChange={(value) => updateWall(index, 'height', value)}
              unit="feet"
              required={true}
              fieldName={`wall${index}-height`}
            />
          </InputGrid>
          <div className="text-sm text-gray-600 mt-2">
            Area: {(wall.width * wall.height).toFixed(1)} sq ft
          </div>
          {projectData.walls.length > 1 && (
            <button
              onClick={() => removeWall(index)}
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Remove Wall
            </button>
          )}
        </SectionCard>
      ))}
      <button
        onClick={addWall}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        + Add Wall Section
      </button>
    </div>
  );

  // Custom gable input component
  const GableInputs = () => (
    <div className="space-y-4">
      {projectData.gables.map((gable, index) => (
        <SectionCard key={index} title={`Gable ${index + 1}`} variant="default">
          <InputGrid columns={2}>
            <NumberInput
              label="Width (feet)"
              value={gable.width}
              onChange={(value) => updateGable(index, 'width', value)}
              unit="feet"
              required={true}
              fieldName={`gable${index}-width`}
            />
            <NumberInput
              label="Height (feet) - Triangle only"
              value={gable.height}
              onChange={(value) => updateGable(index, 'height', value)}
              unit="feet"
              required={true}
              fieldName={`gable${index}-height`}
            />
          </InputGrid>
          <div className="text-sm text-gray-600 mt-2">
            Base area: {((gable.width * gable.height) / 2).toFixed(1)} sq ft | 
            With 30% waste: {(((gable.width * gable.height) / 2) * 1.3).toFixed(1)} sq ft
          </div>
          <button
            onClick={() => removeGable(index)}
            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
          >
            Remove Gable
          </button>
        </SectionCard>
      ))}
      <button
        onClick={addGable}
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
      >
        + Add Another Gable
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionCard title="Professional Siding Calculator" icon={Calculator} variant="info">
          <p className="text-gray-600">Industry-standard material calculations based on ASTM specifications</p>
        </SectionCard>

        {/* Progress Indicator */}
        <SectionCard variant="default">
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
        </SectionCard>

        {/* Main Content */}
        <SectionCard variant="default" className="!overflow-visible">
          {/* Step 1: Project Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Home className="w-6 h-6" />
                Project Information
              </h2>

              <SectionCard title="Project Complexity" variant="info">
                <p className="text-sm text-gray-500 mb-3">This determines the waste factor applied to calculations</p>
                <InputGrid columns={3}>
                  {[
                    { value: 'simple', label: 'Simple', waste: '10%', desc: 'Rectangular house, minimal features' },
                    { value: 'gabled', label: 'Moderate', waste: '12.5%', desc: 'Gables, standard complexity' },
                    { value: 'complex', label: 'Complex', waste: '15%', desc: 'Multiple gables, dormers, angles' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateProjectData('complexity', option.value);
                        trackField('complexity', option.value); // ← ADDED
                      }}
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
                </InputGrid>
              </SectionCard>

              <SelectInput
                label="Climate/Installation Conditions"
                value={projectData.climate}
                onChange={(value) => {
                  updateProjectData('climate', value);
                  trackField('climate', value); // ← ADDED
                }}
                options={climateOptions}
              />
            </div>
          )}

          {/* Step 2: Measurements */}
          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Ruler className="w-6 h-6" />
                Measurements
              </h2>

              <SectionCard title="Measurement Tips" variant="info">
                <p className="text-sm text-blue-800">
                  <strong>Tip:</strong> Do not deduct windows or doors under 25 sq ft. The extra material compensates for cutting waste around openings.
                </p>
              </SectionCard>

              {/* Walls */}
              <SectionCard title="Wall Sections" variant="default">
                <WallInputs />
              </SectionCard>

              {/* Gables */}
              <SectionCard title="Gable Ends" variant="default">
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg mb-3">
                  <input
                    type="checkbox"
                    checked={projectData.includeGables}
                    onChange={(e) => { updateProjectData('includeGables', e.target.checked); setTimeout(() => validate(getValues()), 100); }}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                  />
                  <label className="text-lg font-semibold text-gray-800 cursor-pointer">
                    Include Gable Ends
                  </label>
                </div>
                {projectData.includeGables && (
                  <>
                    <p className="text-sm text-gray-600 mb-2">Gables automatically receive 30% waste factor due to angled cuts</p>
                    <SectionCard title="Gable Measurement Tips" variant="warning">
                      <p className="text-sm text-gray-700">
                        <strong>Tip:</strong> Gable height is the triangular portion only - from the top of your rectangular wall to the peak. Do NOT measure from ground to peak (that would double-count the wall area). Add each gable separately if they have different dimensions.
                      </p>
                    </SectionCard>
                    <GableInputs />
                  </>
                )}
              </SectionCard>

              {/* Openings */}
              <SectionCard title="Openings" variant="default">
                <InputGrid columns={3}>
                  <NumberInput
                    label="Number of Windows"
                    value={projectData.windows}
                    onChange={(value) => updateProjectData('windows', parseInt(value) || 0)}
                    required={false}
                    fieldName="windows"
                  />
                  <NumberInput
                    label="Number of Doors"
                    value={projectData.doors}
                    onChange={(value) => updateProjectData('doors', parseInt(value) || 0)}
                    required={false}
                    fieldName="doors"
                  />
                  <NumberInput
                    label="Number of Garage Doors"
                    value={projectData.garageDoors}
                    onChange={(value) => updateProjectData('garageDoors', parseInt(value) || 0)}
                    required={false}
                    fieldName="garageDoors"
                  />
                </InputGrid>
                <div className="text-xs text-gray-500 mt-2">
                  Note: Windows and doors under 25 sq ft are not deducted from area. Garage doors over 25 sq ft will be deducted.
                </div>
              </SectionCard>
            </div>
          )}

          {/* Step 3: Siding Type */}
          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                <Package className="w-6 h-6" />
                Siding Selection
              </h2>

              <SectionCard title="Siding Material Type" variant="default">
                <InputGrid columns={3}>
                  {[
                    { value: 'vinyl', label: 'Vinyl Siding', desc: 'Most common, easy installation' },
                    { value: 'fiberCement', label: 'Fiber Cement', desc: 'James Hardie, durable' },
                    { value: 'wood', label: 'Wood Siding', desc: 'Cedar, natural appearance' }
                  ].map(option => (
                    <button
                      key={option.value}
                      onClick={() => {
                        updateProjectData('sidingType', option.value);
                        trackField('sidingType', option.value); // ← ADDED
                      }}
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
                </InputGrid>
              </SectionCard>

              {projectData.sidingType === 'vinyl' && (
                <SelectInput
                  label="Vinyl Profile"
                  value={projectData.vinylProfile}
                  onChange={(value) => {
                    updateProjectData('vinylProfile', value);
                    trackField('vinylProfile', value); // ← ADDED
                  }}
                  options={formatOptions(sidingSpecs.vinyl)}
                />
              )}

              {projectData.sidingType === 'fiberCement' && (
                <SelectInput
                  label="Plank Width"
                  value={projectData.fiberCementWidth}
                  onChange={(value) => {
                    updateProjectData('fiberCementWidth', value);
                    trackField('fiberCementWidth', value); // ← ADDED
                  }}
                  options={formatOptions(sidingSpecs.fiberCement)}
                />
              )}

              {projectData.sidingType === 'wood' && (
                <SelectInput
                  label="Wood Type and Size"
                  value={projectData.woodType}
                  onChange={(value) => {
                    updateProjectData('woodType', value);
                    trackField('woodType', value); // ← ADDED
                  }}
                  options={formatOptions(sidingSpecs.wood)}
                />
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
                <SelectInput
                  label="Underlayment Type"
                  value={projectData.underlaymentType}
                  onChange={(value) => updateProjectData('underlaymentType', value)}
                  options={underlaymentOptions}
                />
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

              {/* Corner Posts */}
              <SectionCard title="Corner Posts" variant="default">
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg mb-3">
                  <input
                    type="checkbox"
                    checked={projectData.includeCorners}
                    onChange={(e) => updateProjectData('includeCorners', e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                  />
                  <label className="text-lg font-semibold text-gray-800 cursor-pointer">
                    Include Corner Posts
                  </label>
                </div>
                {projectData.includeCorners && (
                  <InputGrid columns={2}>
                    <NumberInput
                      label="Inside Corners"
                      value={projectData.corners.inside}
                      onChange={(value) => updateProjectData('corners', { ...projectData.corners, inside: parseInt(value) || 0 })}
                      required={false}
                      fieldName="insideCorners"
                    />
                    <NumberInput
                      label="Outside Corners"
                      value={projectData.corners.outside}
                      onChange={(value) => updateProjectData('corners', { ...projectData.corners, outside: parseInt(value) || 0 })}
                      required={false}
                      fieldName="outsideCorners"
                    />
                  </InputGrid>
                )}
              </SectionCard>

              {/* Soffit */}
              <SectionCard title="Soffit" variant="default">
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg mb-3">
                  <input
                    type="checkbox"
                    checked={projectData.includeSoffit}
                    onChange={(e) => updateProjectData('includeSoffit', e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                  />
                  <label className="text-lg font-semibold text-gray-800 cursor-pointer">
                    Include Soffit
                  </label>
                </div>
                {projectData.includeSoffit && (
                  <InputGrid columns={3}>
                    <NumberInput
                      label="Total Eave Length (feet)"
                      value={projectData.soffit.length}
                      onChange={(value) => updateProjectData('soffit', { ...projectData.soffit, length: parseFloat(value) || 0 })}
                      unit="feet"
                      required={false}
                      fieldName="soffitLength"
                    />
                    <SelectInput
                      label="Soffit Depth (inches)"
                      value={projectData.soffit.depth.toString()}
                      onChange={(value) => updateProjectData('soffit', { ...projectData.soffit, depth: parseInt(value) })}
                      options={soffitDepthOptions}
                    />
                    <SelectInput
                      label="Soffit Type"
                      value={projectData.soffit.type}
                      onChange={(value) => updateProjectData('soffit', { ...projectData.soffit, type: value })}
                      options={soffitTypeOptions}
                    />
                  </InputGrid>
                )}
              </SectionCard>

              {/* Fascia */}
              <SectionCard title="Fascia" variant="default">
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg mb-3">
                  <input
                    type="checkbox"
                    checked={projectData.includeFascia}
                    onChange={(e) => updateProjectData('includeFascia', e.target.checked)}
                    className="w-4 h-4 text-indigo-600 rounded cursor-pointer"
                  />
                  <label className="text-lg font-semibold text-gray-800 cursor-pointer">
                    Include Fascia
                  </label>
                </div>
                {projectData.includeFascia && (
                  <InputGrid columns={2}>
                    <NumberInput
                      label="Total Fascia Length (feet)"
                      value={projectData.fascia.length}
                      onChange={(value) => updateProjectData('fascia', { ...projectData.fascia, length: parseFloat(value) || 0 })}
                      unit="feet"
                      required={false}
                      fieldName="fasciaLength"
                    />
                    <SelectInput
                      label="Fascia Width (inches)"
                      value={projectData.fascia.width.toString()}
                      onChange={(value) => updateProjectData('fascia', { ...projectData.fascia, width: parseInt(value) })}
                      options={fasciaWidthOptions}
                    />
                  </InputGrid>
                )}
              </SectionCard>
            </div>
          )}

          {/* Step 5: Results */}
          {step === 5 && results && (
            <div ref={resultsRef} className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <FileText className="w-6 h-6" />
                  Material Calculations
                </h2>
              </div>

              {/* Area Summary */}
              <SectionCard title="Area Summary" variant="info">
                <InputGrid columns={4}>
                  <MaterialCard
                    title="Wall Area"
                    value={results.areas.totalWall.toFixed(0)}
                    unit="sq ft"
                    color="blue"
                  />
                  <MaterialCard
                    title="Gable Area"
                    value={results.areas.totalGable.toFixed(0)}
                    unit="sq ft"
                    color="green"
                  />
                  <MaterialCard
                    title="Deductions"
                    value={`-${results.areas.deductions.toFixed(0)}`}
                    unit="sq ft"
                    color="red"
                  />
                  <MaterialCard
                    title="Net Area"
                    value={results.areas.netArea.toFixed(0)}
                    unit="sq ft"
                    color="purple"
                  />
                </InputGrid>
                <div className="mt-4 pt-4 border-t border-blue-300">
                  <div className="text-gray-600">Total With Waste ({(results.areas.wasteFactor * 100).toFixed(1)}% walls, 30% gables)</div>
                  <div className="text-2xl font-bold text-indigo-600">{results.areas.totalWithWaste.toFixed(0)} sq ft</div>
                  <div className="text-sm text-gray-500 mt-1">
                    = {(results.areas.totalWithWaste / 100).toFixed(2)} squares
                  </div>
                </div>
              </SectionCard>

              {/* Siding Materials */}
              <SectionCard title="Primary Siding Materials" variant="default">
                <div className="text-sm text-gray-600 mb-2">{results.siding.profileName}</div>
                <InputGrid columns={2}>
                  <MaterialCard
                    title="Squares Needed"
                    value={results.siding.squares}
                    color="indigo"
                  />
                  {results.siding.boxes && (
                    <MaterialCard
                      title="Cartons/Boxes"
                      value={results.siding.boxes}
                      color="green"
                    />
                  )}
                  {results.siding.pieces && (
                    <MaterialCard
                      title="Total Pieces"
                      value={results.siding.pieces}
                      color="blue"
                    />
                  )}
                  {results.siding.planks && (
                    <MaterialCard
                      title="Total Planks (12')"
                      value={results.siding.planks}
                      color="orange"
                    />
                  )}
                  {results.siding.weight && (
                    <MaterialCard
                      title="Approximate Weight"
                      value={results.siding.weight}
                      unit="lbs"
                      color="red"
                    />
                  )}
                  {results.siding.boardFeet && (
                    <MaterialCard
                      title="Board Feet"
                      value={results.siding.boardFeet}
                      color="teal"
                    />
                  )}
                  {results.siding.bundles && (
                    <MaterialCard
                      title="Bundles"
                      value={results.siding.bundles}
                      color="purple"
                    />
                  )}
                </InputGrid>
              </SectionCard>

              {/* Accessories */}
              {Object.keys(results.accessories).length > 0 && (
                <SectionCard title="Accessories & Trim" variant="default">
                  <InputGrid columns={2}>
                    {results.accessories.starterStrip && (
                      <MaterialCard
                        title="Starter Strip"
                        value={results.accessories.starterStrip.pieces}
                        unit="pieces"
                        subtitle={`${results.accessories.starterStrip.linearFeet} linear feet`}
                        color="blue"
                      />
                    )}
                    {results.accessories.jChannel && (
                      <MaterialCard
                        title="J-Channel"
                        value={results.accessories.jChannel.pieces}
                        unit="pieces"
                        subtitle={`${results.accessories.jChannel.linearFeet} linear feet`}
                        color="green"
                      />
                    )}
                    {results.accessories.insideCorners && results.accessories.insideCorners.pieces > 0 && (
                      <MaterialCard
                        title="Inside Corner Posts"
                        value={results.accessories.insideCorners.pieces}
                        unit="pieces"
                        color="orange"
                      />
                    )}
                    {results.accessories.outsideCorners && results.accessories.outsideCorners.pieces > 0 && (
                      <MaterialCard
                        title="Outside Corner Posts"
                        value={results.accessories.outsideCorners.pieces}
                        unit="pieces"
                        color="red"
                      />
                    )}
                    {results.accessories.soffit && (
                      <MaterialCard
                        title="Soffit Panels"
                        value={results.accessories.soffit.panels}
                        unit="panels"
                        subtitle={results.accessories.soffit.type}
                        color="purple"
                      />
                    )}
                    {results.accessories.fChannel && (
                      <MaterialCard
                        title="F-Channel"
                        value={results.accessories.fChannel.pieces}
                        unit="pieces"
                        subtitle={`${results.accessories.fChannel.linearFeet} linear feet`}
                        color="teal"
                      />
                    )}
                    {results.accessories.fascia && (
                      <MaterialCard
                        title="Fascia"
                        value={results.accessories.fascia.pieces}
                        unit="pieces"
                        subtitle={`${results.accessories.fascia.width} wide`}
                        color="indigo"
                      />
                    )}
                  </InputGrid>
                </SectionCard>
              )}

              {/* Fasteners */}
              {results.fasteners && (
                <SectionCard title="Fasteners & Supplies" variant="default">
                  <InputGrid columns={2}>
                    {results.fasteners.nails && (
                      <MaterialCard
                        title="Nails"
                        value={results.fasteners.nails.quantity.toLocaleString()}
                        unit="nails"
                        subtitle={results.fasteners.nails.type}
                        color="yellow"
                      />
                    )}
                    {results.fasteners.caulk && (
                      <MaterialCard
                        title="Caulk/Sealant"
                        value={results.fasteners.caulk.tubes}
                        unit="tubes"
                        subtitle={results.fasteners.caulk.type}
                        color="blue"
                      />
                    )}
                  </InputGrid>
                </SectionCard>
              )}

              {/* Underlayment */}
              {results.underlayment && (
                <SectionCard title="Underlayment" variant="default">
                  <MaterialCard
                    title={results.underlayment.type}
                    value={results.underlayment.rolls}
                    unit="rolls"
                    subtitle={`${results.underlayment.rollSize} | ${results.underlayment.coverage} sq ft per roll`}
                    color="green"
                  />
                </SectionCard>
              )}

              {/* Important Notes */}
              <SectionCard title="Important Notes" variant="warning">
                <ul className="text-sm space-y-1 list-disc list-inside">
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
              </SectionCard>

              <ValidationDisplay />

              <ResultsButtons
                onCopy={handleCopyCalculation}
                onPrint={() => {
                  trackAction('print'); // ← ADDED
                  trackCalculatorInteraction.print('siding');
                  printCalculation('Siding Calculator');
                }}
                copyButtonText={copyButtonText}
              />
            </div>
          )}
        </SectionCard>  {/* This closes the MAIN content SectionCard */}
        
        {/* Navigation Buttons - Absolutely positioned to guarantee visibility */}
        <div style={{
          position: 'relative',
          height: '80px',
          marginTop: '20px'
        }}>
          <button
            onClick={() => setStep(Math.max(1, step - 1))}
            disabled={step === 1}
            style={{
              position: 'absolute',
              left: '0',
              padding: '10px 20px',
              background: step === 1 ? '#ccc' : '#6b7280',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: step === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            ← Previous
          </button>
          
          {step < 4 && (
            <button
              onClick={() => setStep(step + 1)}
              style={{
                position: 'absolute',
                right: '0',
                padding: '10px 20px',
                background: '#4f46e5',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer'
              }}
            >
              Next →
            </button>
          )}
        </div>
      </div>
      <FAQSection calculatorId="siding-calculator" />
    </div>
  );
};

export default SidingCalculator;