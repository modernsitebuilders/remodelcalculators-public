'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, Info, Package, Ruler, AlertCircle } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';

const ConcreteCalculator = () => {
  // Project Type Selection
  const [projectType, setProjectType] = useState('slab');
  
  // Slab Dimensions
  const [slabLength, setSlabLength] = useState('');
  const [slabWidth, setSlabWidth] = useState('');
  const [slabThickness, setSlabThickness] = useState('4');
  
  // Footing Dimensions
  const [footingLength, setFootingLength] = useState('');
  const [footingWidth, setFootingWidth] = useState('12');
  const [footingDepth, setFootingDepth] = useState('12');
  
  // Post Hole Dimensions
  const [postDiameter, setPostDiameter] = useState('12');
  const [postDepth, setPostDepth] = useState('36');
  const [postCount, setPostCount] = useState('1');
  
  // Stair Dimensions
  const [stairWidth, setStairWidth] = useState('36');
  const [riserHeight, setRiserHeight] = useState('7');
  const [treadDepth, setTreadDepth] = useState('11');
  const [numberOfSteps, setNumberOfSteps] = useState('3');
  
  // Wall Dimensions
  const [wallLength, setWallLength] = useState('');
  const [wallHeight, setWallHeight] = useState('96');
  const [wallThickness, setWallThickness] = useState('8');
  
  // Column Dimensions
  const [columnDiameter, setColumnDiameter] = useState('12');
  const [columnHeight, setColumnHeight] = useState('96');
  const [columnCount, setColumnCount] = useState('1');
  
  // Calculation Options
  const [psiRating, setPsiRating] = useState('3000');
  const [region, setRegion] = useState('standard');
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [customWasteFactor, setCustomWasteFactor] = useState('');
  
  // Results
  const [results, setResults] = useState(null);
  const [showAdditionalMaterials, setShowAdditionalMaterials] = useState(false);

  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');

  // Calculation Constants (from research)
  const BAG_YIELDS = {
    '60': 0.45, // cubic feet
    '80': 0.60  // cubic feet
  };
  
  const CUBIC_FEET_PER_YARD = 27;
  
  const PSI_APPLICATIONS = {
    '2500': 'Sidewalks, garden paths, non-structural',
    '3000': 'Residential driveways, garage floors, standard slabs',
    '4000': 'Commercial garages, industrial floors, heavy equipment',
    '5000': 'Warehouses, factory floors, parking structures'
  };

  // Automatic waste factors based on project type and complexity
  const getWasteFactor = () => {
    if (customWasteFactor !== '') {
      return parseFloat(customWasteFactor);
    }
    
    switch (projectType) {
      case 'slab':
        return 5; // Simple rectangular pours
      case 'footing':
        return 10; // Complex shapes, irregular dimensions
      case 'posthole':
        return 7.5; // Standard cylindrical
      case 'stairs':
        return 10; // Complex forming requirements
      case 'wall':
        return 7.5; // Standard vertical pours
      case 'column':
        return 7.5; // Standard cylindrical
      default:
        return 7.5;
    }
  };

  const calculateConcrete = () => {
    let volumeCubicFeet = 0;
    let projectDescription = '';
    let recommendations = [];

    // Calculate volume based on project type
    switch (projectType) {
      case 'slab':
        const length = parseFloat(slabLength) || 0;
        const width = parseFloat(slabWidth) || 0;
        const thickness = parseFloat(slabThickness) || 0;
        volumeCubicFeet = (length * width * (thickness / 12));
        projectDescription = `${length}' × ${width}' × ${thickness}" slab`;
        
        // Recommendations based on thickness
        if (thickness < 3.5) {
          recommendations.push({
            type: 'warning',
            text: 'IRC requires 3.5" minimum thickness for residential slabs. Consider increasing thickness.'
          });
        }
        if (thickness === 4) {
          recommendations.push({
            type: 'info',
            text: 'Standard 4" thickness suitable for patios, sidewalks, and basement floors.'
          });
        }
        if (thickness >= 6) {
          recommendations.push({
            type: 'info',
            text: 'Heavy-duty thickness suitable for RV parking and heavy vehicle traffic.'
          });
        }
        break;

      case 'footing':
        const ftgLength = parseFloat(footingLength) || 0;
        const ftgWidth = parseFloat(footingWidth) || 0;
        const ftgDepth = parseFloat(footingDepth) || 0;
        volumeCubicFeet = (ftgLength * (ftgWidth / 12) * (ftgDepth / 12));
        projectDescription = `${ftgLength}' long × ${ftgWidth}" wide × ${ftgDepth}" deep footing`;
        
        if (ftgWidth < 12 || ftgDepth < 12) {
          recommendations.push({
            type: 'warning',
            text: 'IRC R403 requires 12" minimum width and depth for footings.'
          });
        }
        break;

      case 'posthole':
        const diameter = parseFloat(postDiameter) || 0;
        const depth = parseFloat(postDepth) || 0;
        const count = parseFloat(postCount) || 0;
        const radius = diameter / 24; // Convert diameter in inches to radius in feet
        volumeCubicFeet = (Math.PI * radius * radius * (depth / 12)) * count;
        projectDescription = `${count} post hole(s) - ${diameter}" diameter × ${depth}" deep`;
        
        if (depth < 24) {
          recommendations.push({
            type: 'warning',
            text: 'Fence posts typically require depth equal to 1/3 of above-ground height (minimum 24-36").'
          });
        }
        break;

      case 'stairs':
        const stairW = parseFloat(stairWidth) || 0;
        const riser = parseFloat(riserHeight) || 0;
        const tread = parseFloat(treadDepth) || 0;
        const steps = parseFloat(numberOfSteps) || 0;
        
        // Approximate volume calculation for stairs
        const avgHeight = (riser * steps) / 2; // Average height
        const totalLength = tread * steps;
        volumeCubicFeet = (stairW / 12) * (totalLength / 12) * (avgHeight / 12);
        projectDescription = `${steps} steps - ${stairW}" wide with ${riser}" risers and ${tread}" treads`;
        
        if (riser > 7.75) {
          recommendations.push({
            type: 'warning',
            text: 'IRC limits residential riser height to 7.75" maximum (7" for commercial).'
          });
        }
        if (tread < 10) {
          recommendations.push({
            type: 'warning',
            text: 'IRC requires minimum 10" tread depth.'
          });
        }
        break;

      case 'wall':
        const wLength = parseFloat(wallLength) || 0;
        const wHeight = parseFloat(wallHeight) || 0;
        const wThickness = parseFloat(wallThickness) || 0;
        volumeCubicFeet = (wLength * (wHeight / 12) * (wThickness / 12));
        projectDescription = `${wLength}' long × ${wHeight}" high × ${wThickness}" thick wall`;
        
        if (wThickness < 6) {
          recommendations.push({
            type: 'warning',
            text: 'Foundation walls require 6" minimum thickness (8" standard for 8\' basement walls).'
          });
        }
        break;

      case 'column':
        const colDiameter = parseFloat(columnDiameter) || 0;
        const colHeight = parseFloat(columnHeight) || 0;
        const colCount = parseFloat(columnCount) || 0;
        const colRadius = colDiameter / 24;
        volumeCubicFeet = (Math.PI * colRadius * colRadius * (colHeight / 12)) * colCount;
        projectDescription = `${colCount} column(s) - ${colDiameter}" diameter × ${colHeight}" high`;
        break;

      default:
        volumeCubicFeet = 0;
    }

    if (volumeCubicFeet === 0) {
      setResults(null);
      return;
    }

    // Apply waste factor (automatic based on project type, or custom)
    const wasteFactor = getWasteFactor();
    const waste = wasteFactor / 100;
    const volumeWithWaste = volumeCubicFeet * (1 + waste);
    
    // Convert to cubic yards
    const cubicYards = volumeWithWaste / CUBIC_FEET_PER_YARD;
    
    // Calculate both bag sizes
    const bags80lb = Math.ceil(volumeWithWaste / BAG_YIELDS['80']);
    const bags60lb = Math.ceil(volumeWithWaste / BAG_YIELDS['60']);
    
    // Additional materials calculations
    const squareFeet = projectType === 'slab' 
      ? (parseFloat(slabLength) || 0) * (parseFloat(slabWidth) || 0)
      : 0;
    
    // Rebar calculation (for slabs): #4 rebar at 18" spacing
    const rebarSpacing = 18; // inches
    const rebarLengthFeet = projectType === 'slab'
      ? Math.ceil(((parseFloat(slabLength) || 0) / (rebarSpacing / 12)) * (parseFloat(slabWidth) || 0) +
                   ((parseFloat(slabWidth) || 0) / (rebarSpacing / 12)) * (parseFloat(slabLength) || 0))
      : 0;
    const rebarPieces20ft = Math.ceil(rebarLengthFeet / 20);
    
    // Gravel base calculation: 4" for residential, 6" for commercial
    const baseThickness = psiRating >= 4000 ? 6 : 4;
    const gravelCubicFeet = squareFeet * (baseThickness / 12);
    const gravelCubicYards = gravelCubicFeet / CUBIC_FEET_PER_YARD;
    
    // Wire mesh calculation (6x6 W1.4xW1.4)
    const wireMeshRolls = Math.ceil(squareFeet / 150); // Standard 5' x 150' roll
    
    // Regional adjustments
    let regionalNotes = [];
    if (region === 'freezethaw') {
      regionalNotes.push('Air entrainment required (6% by volume)');
      regionalNotes.push('Minimum 4,500 PSI strength recommended');
      regionalNotes.push('Footings must extend below frost line (48-60"+)');
    }
    if (region === 'seismic') {
      regionalNotes.push('Increased reinforcement required (SDC C/D)');
      regionalNotes.push('Post-tensioned slabs recommended for residential');
      regionalNotes.push('Special moment frame detailing for structures');
    }
    if (region === 'expansive') {
      regionalNotes.push('Post-tensioned slab foundation recommended');
      regionalNotes.push('Grade beams at 12-16\' spacing with 30" depth');
      regionalNotes.push('Pier and beam systems for severe conditions');
    }

    // PSI recommendations
    if (projectType === 'slab' && psiRating < 3000) {
      recommendations.push({
        type: 'info',
        text: 'Consider 3,000 PSI minimum for driveways and garage floors per building codes.'
      });
    }
    if (projectType === 'footing' && psiRating < 2500) {
      recommendations.push({
        type: 'warning',
        text: 'Minimum 2,500 PSI required for footings and foundations.'
      });
    }

    // Material method recommendation - considers project type, bag count, and volume
    let methodRecommendation = '';
    
    // Projects that require continuous pour
    const requiresContinuousPour = ['stairs', 'wall', 'column'];
    
    if (requiresContinuousPour.includes(projectType) && bags80lb > 15) {
      // Stairs, walls, columns need continuous pour - 15+ bags is impractical
      methodRecommendation = 'Ready-mix concrete is strongly recommended. This project requires a continuous pour for structural integrity, and mixing ' + bags80lb + ' bags would be impractical and risk cold joints.';
    } else if (bags80lb > 25) {
      // Any project over 25 bags (~1 cubic yard) is impractical with bags
      methodRecommendation = 'Ready-mix concrete is recommended. Mixing ' + bags80lb + ' bags by hand would take 4+ hours and risks inconsistent quality.';
    } else if (bags80lb > 15 && cubicYards >= 0.75) {
      // 15-25 bags in the gray zone
      methodRecommendation = 'Consider ready-mix for time savings. While ' + bags80lb + ' bags is manageable, ready-mix ensures consistent quality and saves significant labor.';
    } else if (bags80lb <= 10) {
      // 10 or fewer bags is practical
      methodRecommendation = 'Bagged concrete is practical for this project size (' + bags80lb + ' bags). Cost-effective for small projects under 0.5 cubic yards.';
    } else {
      // 10-15 bags - still manageable but approaching the limit
      methodRecommendation = 'Bagged concrete is feasible (' + bags80lb + ' bags), but ready-mix may be more convenient if available in your area.';
    }

    setResults({
      volumeCubicFeet: volumeCubicFeet.toFixed(2),
      volumeWithWaste: volumeWithWaste.toFixed(2),
      cubicYards: cubicYards.toFixed(2),
      bags80lb,
      bags60lb,
      wasteFactorApplied: wasteFactor.toFixed(1),
      projectDescription,
      psiApplication: PSI_APPLICATIONS[psiRating],
      recommendations,
      regionalNotes,
      methodRecommendation,
      // Additional materials
      squareFeet: squareFeet.toFixed(0),
      rebarPieces20ft,
      rebarLengthFeet: rebarLengthFeet.toFixed(0),
      gravelCubicYards: gravelCubicYards.toFixed(2),
      wireMeshRolls,
      baseThickness
    });
  
  // ADD THIS TRACKING CALL
  trackCalculation('concrete', {
    projectType,
    psiRating,
    region,
    dimensions: projectType === 'slab' ? 
      { length: slabLength, width: slabWidth, thickness: slabThickness } :
      projectType === 'footing' ?
      { length: footingLength, width: footingWidth, depth: footingDepth } :
      { type: projectType }
  }, {
    cubicYards: cubicYards.toFixed(2),
    bags80lb,
    totalCost: null // or calculate if you want
  });
  };
  const handleCalculate = () => {
    calculateConcrete();
  };

  const handleReset = () => {
    // Reset all inputs
    setSlabLength('');
    setSlabWidth('');
    setSlabThickness('4');
    setFootingLength('');
    setFootingWidth('12');
    setFootingDepth('12');
    setPostDiameter('12');
    setPostDepth('36');
    setPostCount('1');
    setStairWidth('36');
    setRiserHeight('7');
    setTreadDepth('11');
    setNumberOfSteps('3');
    setWallLength('');
    setWallHeight('96');
    setWallThickness('8');
    setColumnDiameter('12');
    setColumnHeight('96');
    setColumnCount('1');
    setPsiRating('3000');
    setRegion('standard');
    setShowAdvanced(false);
    setCustomWasteFactor('');
    setResults(null);
    setShowAdditionalMaterials(false);
  };

  const handleCopyCalculation = async () => {
  if (!results) return;
  
  // Prepare inputs object
  const inputs = {
    'Project type': projectType,
    ...(projectType === 'slab' && {
      'Length': `${slabLength} feet`,
      'Width': `${slabWidth} feet`,
      'Thickness': `${slabThickness} inches`
    }),
    ...(projectType === 'footing' && {
      'Length': `${footingLength} feet`,
      'Width': `${footingWidth} inches`,
      'Depth': `${footingDepth} inches`
    }),
    ...(projectType === 'post' && {
      'Post diameter': `${postDiameter} inches`,
      'Post depth': `${postDepth} inches`,
      'Number of posts': postCount
    }),
    'PSI rating': psiRating
  };
  
  // Prepare outputs object
  const outputs = {
    'Concrete needed': `${results.cubicYards} cubic yards`,
    '80lb bags': `${results.bags80lb} bags`,
    '60lb bags': `${results.bags60lb} bags`
  };
  
  // Note text
  const note = `Includes ${results.wasteFactorApplied}% waste factor. Always verify measurements on site.`;
  
  // Call the copy function
  const success = await copyCalculation('Concrete Calculator', inputs, outputs, note);
  
  if (success) {
    setCopyButtonText('✓ Copied!');
    setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
  } else {
    alert('Unable to copy. Please copy results manually.');
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-bold text-gray-800">Professional Concrete Calculator</h2>
          </div>
          <p className="text-gray-600">
            Industry-standard material calculations based on ACI, IBC/IRC, and DOT specifications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Project Type Selection */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Ruler className="w-5 h-5 text-blue-600" />
                Project Type
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  { value: 'slab', label: 'Slab/Patio', desc: 'Driveways, patios, floors' },
                  { value: 'footing', label: 'Footing', desc: 'Foundation footings' },
                  { value: 'posthole', label: 'Post Holes', desc: 'Fence/deck posts' },
                  { value: 'stairs', label: 'Stairs', desc: 'Concrete steps' },
                  { value: 'wall', label: 'Wall', desc: 'Retaining/foundation' },
                  { value: 'column', label: 'Column', desc: 'Cylindrical columns' }
                ].map((type) => (
                  <button
                    key={type.value}
                    onClick={() => setProjectType(type.value)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      projectType === type.value
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="font-semibold text-gray-800">{type.label}</div>
                    <div className="text-sm text-gray-600">{type.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Dimensions Input */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Dimensions</h2>

              {projectType === 'slab' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Length (feet)
                    </label>
                    <input
                      type="number"
                      value={slabLength}
                      onChange={(e) => setSlabLength(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter length"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Width (feet)
                    </label>
                    <input
                      type="number"
                      value={slabWidth}
                      onChange={(e) => setSlabWidth(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter width"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Thickness (inches)
                    </label>
                    <select
                      value={slabThickness}
                      onChange={(e) => setSlabThickness(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="3.5">3.5" - Minimum IRC</option>
                      <option value="4">4" - Standard residential</option>
                      <option value="5">5" - Heavy duty</option>
                      <option value="6">6" - RV/DOT driveway</option>
                      <option value="8">8" - Commercial heavy</option>
                    </select>
                  </div>
                </div>
              )}

              {projectType === 'footing' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Length (feet)
                    </label>
                    <input
                      type="number"
                      value={footingLength}
                      onChange={(e) => setFootingLength(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter length"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Width (inches)
                    </label>
                    <select
                      value={footingWidth}
                      onChange={(e) => setFootingWidth(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="12">12" - IRC minimum</option>
                      <option value="16">16" - 1-story standard</option>
                      <option value="20">20" - 2-story</option>
                      <option value="24">24" - 3-story</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Depth (inches)
                    </label>
                    <select
                      value={footingDepth}
                      onChange={(e) => setFootingDepth(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="12">12" - IRC minimum</option>
                      <option value="6">6" - 1-story thickness</option>
                      <option value="7">7" - 2-story thickness</option>
                      <option value="8">8" - 3-story thickness</option>
                    </select>
                  </div>
                </div>
              )}

              {projectType === 'posthole' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hole Diameter (inches)
                    </label>
                    <select
                      value={postDiameter}
                      onChange={(e) => setPostDiameter(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="8">8" - Small posts</option>
                      <option value="10">10" - Standard 4x4</option>
                      <option value="12">12" - 4x4 posts</option>
                      <option value="16">16" - 6x6 posts</option>
                      <option value="20">20" - Large deck posts</option>
                      <option value="24">24" - Heavy-duty</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Hole Depth (inches)
                    </label>
                    <select
                      value={postDepth}
                      onChange={(e) => setPostDepth(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="24">24" - 6' fence (1/3 rule)</option>
                      <option value="30">30" - Standard deck</option>
                      <option value="36">36" - 8-10' fence</option>
                      <option value="42">42" - Frost protection</option>
                      <option value="48">48" - Deep frost zone</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Posts
                    </label>
                    <input
                      type="number"
                      value={postCount}
                      onChange={(e) => setPostCount(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter count"
                      min="1"
                    />
                  </div>
                </div>
              )}

              {projectType === 'stairs' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stair Width (inches)
                    </label>
                    <input
                      type="number"
                      value={stairWidth}
                      onChange={(e) => setStairWidth(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter width"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Steps
                    </label>
                    <input
                      type="number"
                      value={numberOfSteps}
                      onChange={(e) => setNumberOfSteps(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter count"
                      min="1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Riser Height (inches)
                    </label>
                    <select
                      value={riserHeight}
                      onChange={(e) => setRiserHeight(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="6">6" - Low rise</option>
                      <option value="7">7" - Standard residential</option>
                      <option value="7.5">7.5" - IRC maximum</option>
                      <option value="7.75">7.75" - Absolute IRC max</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Tread Depth (inches)
                    </label>
                    <select
                      value={treadDepth}
                      onChange={(e) => setTreadDepth(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="10">10" - IRC minimum</option>
                      <option value="11">11" - Standard</option>
                      <option value="12">12" - Comfortable</option>
                      <option value="14">14" - Wide tread</option>
                    </select>
                  </div>
                </div>
              )}

              {projectType === 'wall' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Length (feet)
                    </label>
                    <input
                      type="number"
                      value={wallLength}
                      onChange={(e) => setWallLength(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter length"
                      step="0.1"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height (inches)
                    </label>
                    <select
                      value={wallHeight}
                      onChange={(e) => setWallHeight(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="48">48" - 4' retaining</option>
                      <option value="96">96" - 8' foundation</option>
                      <option value="108">108" - 9' basement</option>
                      <option value="120">120" - 10' wall</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Thickness (inches)
                    </label>
                    <select
                      value={wallThickness}
                      onChange={(e) => setWallThickness(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="6">6" - Minimum/short walls</option>
                      <option value="8">8" - Standard foundation</option>
                      <option value="10">10" - Heavy-duty</option>
                      <option value="12">12" - Tall walls</option>
                    </select>
                  </div>
                </div>
              )}

              {projectType === 'column' && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Diameter (inches)
                    </label>
                    <select
                      value={columnDiameter}
                      onChange={(e) => setColumnDiameter(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="8">8" - Small column</option>
                      <option value="10">10" - Standard sono-tube</option>
                      <option value="12">12" - Common column</option>
                      <option value="16">16" - Heavy support</option>
                      <option value="20">20" - Large column</option>
                      <option value="24">24" - Major support</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height (inches)
                    </label>
                    <input
                      type="number"
                      value={columnHeight}
                      onChange={(e) => setColumnHeight(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter height"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Columns
                    </label>
                    <input
                      type="number"
                      value={columnCount}
                      onChange={(e) => setColumnCount(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter count"
                      min="1"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Specifications</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    PSI Strength Rating
                  </label>
                  <select
                    value={psiRating}
                    onChange={(e) => setPsiRating(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="2500">2,500 PSI - Sidewalks, paths</option>
                    <option value="3000">3,000 PSI - Residential standard</option>
                    <option value="4000">4,000 PSI - Commercial/heavy duty</option>
                    <option value="5000">5,000 PSI - Structural/warehouse</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    {PSI_APPLICATIONS[psiRating]}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Regional Conditions
                  </label>
                  <select
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="standard">Standard conditions</option>
                    <option value="freezethaw">Freeze-thaw zone</option>
                    <option value="seismic">Seismic zone (SDC C/D)</option>
                    <option value="expansive">Expansive clay soil</option>
                  </select>
                </div>
              </div>

              {/* Advanced Options */}
              <div className="mt-4">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
                >
                  {showAdvanced ? '− Hide' : '+ Show'} Advanced Options
                </button>
                
                {showAdvanced && (
                  <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Custom Waste Factor (%)
                    </label>
                    <input
                      type="number"
                      value={customWasteFactor}
                      onChange={(e) => setCustomWasteFactor(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={`Auto: ${getWasteFactor()}%`}
                      step="0.5"
                      min="0"
                      max="20"
                    />
                    <p className="text-xs text-gray-500 mt-2">
                      <strong>Leave blank for automatic:</strong> Slabs (5%), Posts/Walls/Columns (7.5%), Footings/Stairs (10%).
                      Override only for difficult site conditions.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  onClick={handleCalculate}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-5 h-5" />
                  Calculate
                </button>
                <button
                  onClick={handleReset}
                  className="w-full px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Start Over
                </button>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="lg:col-span-1">
            {results ? (
              <div className="space-y-4 sticky top-4">
                {/* Project Summary */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg shadow-lg p-6">
                  <h2 className="text-xl font-bold mb-4">Project Summary</h2>
                  <div className="space-y-3">
                    <div className="pb-3 border-b border-blue-400">
                      <div className="text-sm opacity-90">Project Type</div>
                      <div className="font-semibold text-lg">{results.projectDescription}</div>
                    </div>
                    <div className="pb-3 border-b border-blue-400">
                      <div className="text-sm opacity-90">Concrete Volume</div>
                      <div className="font-bold text-2xl">{results.cubicYards} yd³</div>
                      <div className="text-sm opacity-75">{results.volumeWithWaste} cu ft (with {results.wasteFactorApplied}% waste)</div>
                    </div>
                    <div>
                      <div className="text-sm opacity-90">Concrete Strength</div>
                      <div className="font-semibold">{psiRating} PSI</div>
                      <div className="text-xs opacity-75 mt-1">{results.psiApplication}</div>
                    </div>
                  </div>
                </div>
{/* Reinforcement Disclaimer */}
<div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
  <div className="flex">
    <div className="flex-shrink-0">
      <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    </div>
    <div className="ml-3">
      <p className="text-sm text-yellow-700">
        <strong>Note:</strong> This materials list does not account for reinforcement needs (rebar, wire mesh, etc.). 
        Reinforcement may be required depending on your project type, local building codes, soil conditions, and structural requirements. 
        Consult local building codes and a structural engineer for reinforcement specifications.
      </p>
    </div>
  </div>
</div>
                {/* Material Options */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <Package className="w-5 h-5 text-blue-600" />
                    Material Needed
                  </h3>

                  {/* Bagged Concrete */}
                  <div className="mb-4 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                    <div className="font-semibold text-gray-800 mb-3">Bagged Concrete</div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">80 lb bags:</span>
                        <span className="font-bold text-blue-600 text-lg">{results.bags80lb} bags</span>
                      </div>
                      
                      <div className="flex items-center justify-center py-2">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-3 text-sm font-bold text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">60 lb bags:</span>
                        <span className="font-bold text-blue-600 text-lg">{results.bags60lb} bags</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3 italic">
                      Choose one bag size - you don't need both
                    </p>
                  </div>

                  {/* Ready-Mix Concrete */}
                  <div className="p-4 bg-green-50 rounded-lg border-2 border-green-200">
                    <div className="font-semibold text-gray-800 mb-2">Ready-Mix Concrete</div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Volume Needed:</span>
                        <span className="font-bold text-green-600">{results.cubicYards} yd³</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                    <div className="text-sm text-gray-700">
                      <strong>💡 Recommendation:</strong> {results.methodRecommendation}
                    </div>
                 </div>
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
      onClick={() => printCalculation('Concrete Calculator')}
      className="copy-calc-btn flex-1"
    >
      🖨️ Print Results
    </button>
  </div>
</div>

                {/* Additional Materials Toggle */}
                {projectType === 'slab' && results.squareFeet > 0 && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <button
                      onClick={() => setShowAdditionalMaterials(!showAdditionalMaterials)}
                      className="w-full flex items-center justify-between text-left font-bold text-gray-800 mb-3"
                    >
                      <span>Additional Materials</span>
                      <span className="text-2xl">{showAdditionalMaterials ? '−' : '+'}</span>
                    </button>

                    {showAdditionalMaterials && (
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Rebar (#4 @ 18" o.c.):</span>
                          <span className="font-semibold">{results.rebarPieces20ft} × 20' pieces</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Wire Mesh (6×6 W1.4):</span>
                          <span className="font-semibold">{results.wireMeshRolls} rolls</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                          <span className="text-gray-600">Gravel Base ({results.baseThickness}"):</span>
                          <span className="font-semibold">{results.gravelCubicYards} yd³</span>
                        </div>
                        <div className="pt-2 text-xs text-gray-500">
                          Based on ACI 318 and IRC R506 standards
                        </div>
                      </div>
                    )}
                  </div>
                )}
                

                {/* Recommendations */}
                {(results.recommendations.length > 0 || results.regionalNotes.length > 0) && (
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 text-blue-600" />
                      Important Notes
                    </h3>

                    <div className="space-y-2">
                      {results.recommendations.map((rec, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg text-sm ${
                            rec.type === 'warning'
                              ? 'bg-yellow-50 border border-yellow-200 text-yellow-800'
                              : 'bg-blue-50 border border-blue-200 text-blue-800'
                          }`}
                        >
                          <div className="flex items-start gap-2">
                            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{rec.text}</span>
                          </div>
                        </div>
                      ))}

                      {results.regionalNotes.map((note, index) => (
                        <div
                          key={index}
                          className="p-3 rounded-lg text-sm bg-purple-50 border border-purple-200 text-purple-800"
                        >
                          <div className="flex items-start gap-2">
                            <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                            <span>{note}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-8 text-center text-gray-500 sticky top-4">
                <Calculator className="w-16 h-16 mx-auto mb-4 opacity-20" />
                <p>Enter your project dimensions to see results</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Information */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="font-bold text-gray-800 mb-3">About This Calculator</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Industry Standards</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>ACI 318 structural concrete code</li>
                <li>International Building Code (IBC/IRC)</li>
                <li>DOT specifications for driveways</li>
                <li>ASTM material standards</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-700 mb-2">Key Specifications</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>60 lb bag yields 0.45 cu ft</li>
                <li>80 lb bag yields 0.60 cu ft</li>
                <li>1 cubic yard = 27 cubic feet</li>
                <li>Standard waste factor: 5-10%</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t text-xs text-gray-500">
            <p>
              <strong>Professional Note:</strong> This calculator provides estimates based on industry standards. 
              Always consult local building codes, obtain necessary permits, and consider hiring a licensed contractor 
              for structural projects. Actual material requirements may vary based on site conditions, formwork, 
              and installation methods.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcreteCalculator;