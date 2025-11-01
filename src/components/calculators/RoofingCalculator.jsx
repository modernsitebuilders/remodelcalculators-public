'use client';

import React, { useState } from 'react';

const RoofingMaterialsCalculator = () => {
  // State for all inputs
  const [roofLength, setRoofLength] = useState(40);
  const [roofWidth, setRoofWidth] = useState(30);
  const [roofPitch, setRoofPitch] = useState(6);
  const [roofComplexity, setRoofComplexity] = useState('simple');
  const [shingleType, setShingleType] = useState('architectural');
  const [underlaymentType, setUnderlaymentType] = useState('synthetic');
  const [windZone, setWindZone] = useState('standard');
  const [coldClimate, setColdClimate] = useState(false);
  const [atticArea, setAtticArea] = useState(1200);
  const [ridgeLength, setRidgeLength] = useState(40);
  const [hipLength, setHipLength] = useState(0);
  const [valleyLength, setValleyLength] = useState(0);
  const [includeRakeStarter, setIncludeRakeStarter] = useState(true);
  const [showResults, setShowResults] = useState(false);

  // Handler functions
  const handleCalculate = () => {
    setShowResults(true);
  };

  const handleStartOver = () => {
    setRoofLength(40);
    setRoofWidth(30);
    setRoofPitch(6);
    setRoofComplexity('simple');
    setShingleType('architectural');
    setUnderlaymentType('synthetic');
    setWindZone('standard');
    setColdClimate(false);
    setAtticArea(1200);
    setRidgeLength(40);
    setHipLength(0);
    setValleyLength(0);
    setIncludeRakeStarter(true);
    setShowResults(false);
  };

  // Pitch multipliers table
  const pitchMultipliers = {
    1: 1.003, 2: 1.014, 3: 1.031, 4: 1.054, 5: 1.083,
    6: 1.118, 7: 1.158, 8: 1.202, 9: 1.250, 10: 1.302,
    11: 1.357, 12: 1.414, 13: 1.474, 14: 1.537, 15: 1.601,
    16: 1.667, 18: 1.803, 20: 1.941, 24: 2.236
  };

  // Waste factors by complexity
  const wasteFactors = {
    simple: 0.10,
    gable: 0.10,
    hip: 0.15,
    complex: 0.15,
    highly_complex: 0.20
  };

  // Calculate roof area
  const footprint = roofLength * roofWidth;
  const pitchMultiplier = pitchMultipliers[roofPitch] || 1.118;
  const wasteFactor = wasteFactors[roofComplexity] || 0.10;
  const actualRoofArea = footprint * pitchMultiplier;
  const totalWithWaste = actualRoofArea * (1 + wasteFactor);
  const squares = totalWithWaste / 100;

  // Shingle calculations
  let bundlesPerSquare = 3;
  let shingleCoverage = 33.3;
  
  if (shingleType === 'luxury-belmont') {
    bundlesPerSquare = 4;
    shingleCoverage = 25;
  } else if (shingleType === 'luxury-grand-manor') {
    bundlesPerSquare = 5;
    shingleCoverage = 20;
  }
  
  const totalBundles = Math.ceil(squares * bundlesPerSquare);

  // Underlayment calculations
  let underlaymentCoverage = underlaymentType === 'felt15' ? 400 : 
                             underlaymentType === 'felt30' ? 200 : 1000;
  
  // Account for overlaps (10% waste)
  const underlaymentNeeded = totalWithWaste * 1.10;
  const underlaymentRolls = Math.ceil(underlaymentNeeded / underlaymentCoverage);

  // Starter strip calculations
  const eaveLength = roofLength * 2;
  const rakeLengthPerSide = Math.sqrt(Math.pow(roofWidth / 2, 2) * Math.pow(pitchMultiplier, 2));
  const totalRakeLength = rakeLengthPerSide * 4;
  const perimeterLength = eaveLength + (includeRakeStarter ? totalRakeLength : 0);
  const starterCoverage = 120; // Standard coverage per bundle
  const starterBundles = Math.ceil((perimeterLength * 1.10) / starterCoverage);

  // Ridge cap calculations
  const totalRidgeHip = ridgeLength + hipLength + valleyLength;
  const ridgeCapCoverage = 30; // Standard coverage per bundle
  const ridgeCapWaste = roofComplexity === 'complex' || roofComplexity === 'highly_complex' ? 0.125 : 0.10;
  const ridgeCapBundles = Math.ceil((totalRidgeHip * (1 + ridgeCapWaste)) / ridgeCapCoverage);

  // Ice & water shield calculations
  let iceWaterRolls = 0;
  if (coldClimate) {
    const eaveOverhang = 12; // inches
    const wallThickness = 8; // inches
    const requiredCoverage = eaveOverhang + wallThickness + 24; // inches = 44"
    const coursesNeeded = 2; // Two 36" rolls = 72" coverage
    const iceWaterPerEave = 225; // Standard roll coverage in sq ft
    const totalEaveLength = eaveLength;
    const iceWaterSqFt = (totalEaveLength * coursesNeeded * 3); // 3 feet per course
    iceWaterRolls = Math.ceil(iceWaterSqFt / iceWaterPerEave);
    
    // Add valley coverage if valleys exist
    if (valleyLength > 0) {
      const valleySqFt = valleyLength * 3; // 36" wide = 3 feet
      iceWaterRolls += Math.ceil(valleySqFt / iceWaterPerEave);
    }
  }

  // Drip edge calculations
  const totalPerimeter = eaveLength + totalRakeLength;
  const dripEdgePieces = Math.ceil((totalPerimeter * 1.10) / 10); // 10 ft per piece

  // Fastener calculations
  const nailsPerSquare = windZone === 'high' ? 480 : 320;
  const totalShingleNails = Math.ceil(squares * nailsPerSquare);
  const nailBoxes = Math.ceil(totalShingleNails / 7200);
  
  const capNailsPerSquare = windZone === 'high' ? 450 : 225;
  const totalCapNails = Math.ceil(squares * capNailsPerSquare);

  // Ventilation calculations
  const ventRatio = 150; // 1:150 standard ratio
  const requiredNFA = (atticArea / ventRatio) * 144; // Convert to square inches
  const exhaustNFA = requiredNFA / 2;
  const intakeNFA = requiredNFA / 2;
  const ridgeVentNFA = 18; // Square inches per linear foot
  const ridgeVentNeeded = Math.ceil(exhaustNFA / ridgeVentNFA);

  // Pitch adjustment for steep roofs
  let ventAdjustment = 1.0;
  if (roofPitch >= 7 && roofPitch <= 10) {
    ventAdjustment = 1.2;
  } else if (roofPitch >= 11) {
    ventAdjustment = 1.3;
  }
  const adjustedRidgeVent = Math.ceil(ridgeVentNeeded * ventAdjustment);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
            <h1 className="text-3xl font-bold mb-2">Professional Roofing Materials Calculator</h1>
            <p className="text-blue-100">Industry-standard calculations based on IRC, IBC, and manufacturer specifications</p>
          </div>

          <div className={`grid gap-6 p-6 ${showResults ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-3xl mx-auto'}`}>
            {/* Left Column - Inputs */}
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Roof Dimensions
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Length (feet)
                    </label>
                    <input
                      type="number"
                      value={roofLength}
                      onChange={(e) => {
                        const newLength = Number(e.target.value);
                        setRoofLength(newLength);
                        // Auto-update ridge length for convenience (user can override)
                        if (ridgeLength === 0 || ridgeLength === roofLength) {
                          setRidgeLength(newLength);
                        }
                        // Auto-update attic area to match footprint
                        const newFootprint = newLength * roofWidth;
                        if (atticArea === 0 || atticArea === roofLength * roofWidth) {
                          setAtticArea(newFootprint);
                        }
                      }}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Width (feet)
                    </label>
                    <input
                      type="number"
                      value={roofWidth}
                      onChange={(e) => {
                        const newWidth = Number(e.target.value);
                        setRoofWidth(newWidth);
                        // Auto-update attic area to match footprint (user can override)
                        const newFootprint = roofLength * newWidth;
                        if (atticArea === 0 || atticArea === roofLength * roofWidth) {
                          setAtticArea(newFootprint);
                        }
                      }}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Roof Pitch (X/12)
                    </label>
                    <select
                      value={roofPitch}
                      onChange={(e) => setRoofPitch(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {Object.keys(pitchMultipliers).map(pitch => (
                        <option key={pitch} value={pitch}>{pitch}/12 (Multiplier: {pitchMultipliers[pitch]})</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Roof Complexity
                    </label>
                    <select
                      value={roofComplexity}
                      onChange={(e) => {
                        const newComplexity = e.target.value;
                        setRoofComplexity(newComplexity);
                        // Reset hip length if switching to a roof type without hips
                        if (newComplexity === 'simple' || newComplexity === 'gable') {
                          setHipLength(0);
                        }
                        // Reset valley length if switching to simple gable (no valleys)
                        if (newComplexity === 'simple') {
                          setValleyLength(0);
                        }
                      }}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="simple">Simple Gable (10% waste)</option>
                      <option value="gable">Standard Gable with Valleys (10% waste)</option>
                      <option value="hip">Hip Roof (15% waste)</option>
                      <option value="complex">Complex Hip/Valley (15% waste)</option>
                      <option value="highly_complex">Highly Complex (20% waste)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Material Specifications
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Shingle Type
                    </label>
                    <select
                      value={shingleType}
                      onChange={(e) => setShingleType(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="3-tab">3-Tab Shingles (3 bundles/sq)</option>
                      <option value="architectural">Architectural Shingles (3 bundles/sq)</option>
                      <option value="luxury-belmont">Luxury - CertainTeed Belmont (4 bundles/sq)</option>
                      <option value="luxury-grand-manor">Luxury - Grand Manor (5 bundles/sq)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Underlayment Type
                    </label>
                    <select
                      value={underlaymentType}
                      onChange={(e) => setUnderlaymentType(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="felt15">#15 Felt (400 sq ft/roll)</option>
                      <option value="felt30">#30 Felt (200 sq ft/roll)</option>
                      <option value="synthetic">Synthetic (1,000 sq ft/roll)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Wind Zone
                    </label>
                    <select
                      value={windZone}
                      onChange={(e) => setWindZone(e.target.value)}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="standard">Standard (&lt;110 mph) - 4 nails/shingle</option>
                      <option value="high">High Wind (≥110 mph) - 6 nails/shingle</option>
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={coldClimate}
                        onChange={(e) => setColdClimate(e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        Cold Climate (Ice & Water Shield Required)
                      </span>
                    </label>
                  </div>

                  <div>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={includeRakeStarter}
                        onChange={(e) => setIncludeRakeStarter(e.target.checked)}
                        className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                      />
                      <span className="text-sm font-semibold text-slate-700">
                        Include Starter Strip at Rakes
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  Ventilation (Required)
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Attic Floor Area (sq ft) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={atticArea}
                      onChange={(e) => setAtticArea(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-slate-500 mt-1">Required for IRC ventilation compliance. Typically equals footprint (length × width).</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 rounded-lg p-5 border border-slate-200">
                <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                  <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm">4</span>
                  {roofComplexity === 'simple' ? 'Ridge Details' : 'Ridge, Hip & Valley Details'}
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Ridge Length (feet) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="number"
                      value={ridgeLength}
                      onChange={(e) => setRidgeLength(Number(e.target.value))}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-slate-500 mt-1">All roofs have a ridge. For simple gable roofs, typically equals roof length.</p>
                  </div>

                  {/* Only show hip length for hip, complex, and highly complex roofs */}
                  {(roofComplexity === 'hip' || roofComplexity === 'complex' || roofComplexity === 'highly_complex') && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Hip Length (feet) <span className="text-slate-400 text-xs">Optional</span>
                      </label>
                      <input
                        type="number"
                        value={hipLength}
                        onChange={(e) => setHipLength(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-xs text-slate-500 mt-1">For hip roofs - enter total length of all hips</p>
                    </div>
                  )}

                  {/* Only show valley length for roofs with valleys (not simple gable) */}
                  {roofComplexity !== 'simple' && (
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Valley Length (feet) <span className="text-slate-400 text-xs">Optional</span>
                      </label>
                      <input
                        type="number"
                        value={valleyLength}
                        onChange={(e) => setValleyLength(Number(e.target.value))}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-xs text-slate-500 mt-1">Enter total length of all valleys on your roof</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleCalculate}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold py-4 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    Calculate Materials
                  </span>
                </button>
                
                <button
                  onClick={handleStartOver}
                  className="flex-1 bg-slate-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-slate-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Start Over
                  </span>
                </button>
              </div>
            </div>

            {/* Right Column - Results */}
            {showResults ? (
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-5 border-2 border-blue-300">
                  <h2 className="text-xl font-bold text-blue-900 mb-4">Calculation Summary</h2>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-blue-200">
                      <span className="font-semibold text-slate-700">Footprint Area:</span>
                      <span className="text-slate-900">{footprint.toFixed(0)} sq ft</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-blue-200">
                      <span className="font-semibold text-slate-700">Pitch Multiplier:</span>
                      <span className="text-slate-900">{pitchMultiplier.toFixed(3)}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-blue-200">
                      <span className="font-semibold text-slate-700">Actual Roof Area:</span>
                      <span className="text-slate-900">{actualRoofArea.toFixed(0)} sq ft</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-blue-200">
                      <span className="font-semibold text-slate-700">Waste Factor:</span>
                      <span className="text-slate-900">{(wasteFactor * 100).toFixed(0)}%</span>
                    </div>
                    <div className="flex justify-between py-2 bg-blue-200 px-3 rounded font-bold">
                      <span className="text-blue-900">Total with Waste:</span>
                      <span className="text-blue-900">{totalWithWaste.toFixed(0)} sq ft</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-5 border-2 border-slate-300 shadow-lg">
                  <h2 className="text-2xl font-bold text-slate-800 mb-6 pb-3 border-b-2 border-slate-200">
                    Materials Required
                  </h2>

                  <div className="space-y-5">
                    {/* Shingles */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                        <span className="bg-green-500 w-3 h-3 rounded-full mr-2"></span>
                        Shingles
                      </h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <div className="text-slate-600 font-medium">Squares</div>
                          <div className="text-2xl font-bold text-green-700">{squares.toFixed(2)}</div>
                        </div>
                        <div>
                          <div className="text-slate-600 font-medium">Bundles</div>
                          <div className="text-2xl font-bold text-green-700">{totalBundles}</div>
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        {bundlesPerSquare} bundles per square
                      </div>
                    </div>

                    {/* Underlayment */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                        <span className="bg-purple-500 w-3 h-3 rounded-full mr-2"></span>
                        Underlayment
                      </h3>
                      <div className="text-sm">
                        <div className="text-slate-600 font-medium">Rolls</div>
                        <div className="text-2xl font-bold text-purple-700">{underlaymentRolls}</div>
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        {underlaymentCoverage} sq ft per roll (includes 10% waste for overlaps)
                      </div>
                    </div>

                    {/* Starter Strips */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                        <span className="bg-orange-500 w-3 h-3 rounded-full mr-2"></span>
                        Starter Strips
                      </h3>
                      <div className="text-sm">
                        <div className="text-slate-600 font-medium">Bundles</div>
                        <div className="text-2xl font-bold text-orange-700">{starterBundles}</div>
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        {perimeterLength.toFixed(0)} linear feet needed ({includeRakeStarter ? 'eaves + rakes' : 'eaves only'})
                      </div>
                    </div>

                    {/* Ridge Cap */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                        <span className="bg-red-500 w-3 h-3 rounded-full mr-2"></span>
                        Ridge Cap
                      </h3>
                      <div className="text-sm">
                        <div className="text-slate-600 font-medium">Bundles</div>
                        <div className="text-2xl font-bold text-red-700">{ridgeCapBundles}</div>
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        {totalRidgeHip.toFixed(0)} linear feet (ridge + hip + valley)
                      </div>
                    </div>

                    {/* Ice & Water Shield */}
                    {coldClimate && (
                      <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                        <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                          <span className="bg-blue-500 w-3 h-3 rounded-full mr-2"></span>
                          Ice & Water Shield
                        </h3>
                        <div className="text-sm">
                          <div className="text-slate-600 font-medium">Rolls</div>
                          <div className="text-2xl font-bold text-blue-700">{iceWaterRolls}</div>
                        </div>
                        <div className="mt-2 text-xs text-slate-500">
                          225 sq ft per roll (eaves{valleyLength > 0 ? ' + valleys' : ''})
                        </div>
                      </div>
                    )}

                    {/* Drip Edge */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                        <span className="bg-teal-500 w-3 h-3 rounded-full mr-2"></span>
                        Drip Edge
                      </h3>
                      <div className="text-sm">
                        <div className="text-slate-600 font-medium">Pieces (10 ft each)</div>
                        <div className="text-2xl font-bold text-teal-700">{dripEdgePieces}</div>
                      </div>
                      <div className="mt-2 text-xs text-slate-500">
                        {totalPerimeter.toFixed(0)} linear feet total perimeter
                      </div>
                    </div>

                    {/* Fasteners */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                        <span className="bg-yellow-500 w-3 h-3 rounded-full mr-2"></span>
                        Fasteners
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <div className="text-slate-600 font-medium">Roofing Nails (boxes)</div>
                          <div className="text-xl font-bold text-yellow-700">{nailBoxes}</div>
                          <div className="text-xs text-slate-500">
                            {totalShingleNails.toLocaleString()} nails ({nailsPerSquare}/sq) · 7,200/box
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-600 font-medium">Cap Nails</div>
                          <div className="text-xl font-bold text-yellow-700">{totalCapNails.toLocaleString()}</div>
                          <div className="text-xs text-slate-500">
                            For underlayment ({capNailsPerSquare}/sq)
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ventilation */}
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h3 className="font-bold text-lg text-slate-800 mb-3 flex items-center">
                        <span className="bg-indigo-500 w-3 h-3 rounded-full mr-2"></span>
                        Ventilation (IRC 1:150)
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div>
                          <div className="text-slate-600 font-medium">Ridge Vent Needed</div>
                          <div className="text-xl font-bold text-indigo-700">{adjustedRidgeVent} linear feet</div>
                          <div className="text-xs text-slate-500">
                            {exhaustNFA.toFixed(0)} sq in exhaust NFA required
                          </div>
                        </div>
                        <div>
                          <div className="text-slate-600 font-medium">Soffit Vent Required</div>
                          <div className="text-xl font-bold text-indigo-700">{intakeNFA.toFixed(0)} sq in</div>
                          <div className="text-xs text-slate-500">
                            Must equal or exceed exhaust
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Technical Notes */}
                <div className="bg-amber-50 rounded-lg p-4 border border-amber-300">
                  <h3 className="font-bold text-amber-900 mb-2 flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                    </svg>
                    Technical Notes
                  </h3>
                  <ul className="text-xs text-amber-900 space-y-1 ml-7">
                    <li>• All calculations comply with IRC/IBC building codes</li>
                    <li>• Waste factors based on roof complexity per NRCA guidelines</li>
                    <li>• High wind zones (≥110 mph) require 6-nail pattern + hand-sealing</li>
                    <li>• Ice & water shield extends 24" inside exterior wall per IRC R905.2.8.2</li>
                    <li>• Ridge vent assumes 18 sq in NFA per linear foot (industry standard)</li>
                    <li>• Ventilation calculations assume 1:150 ratio per IRC R806</li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <div className="text-center p-8">
                  <svg className="w-24 h-24 mx-auto text-slate-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-xl font-bold text-slate-400 mb-2">Ready to Calculate</h3>
                  <p className="text-slate-500">Enter your roof specifications and click "Calculate Materials" to see results</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-slate-400 text-sm">
          <p>Based on NRCA standards, IRC/IBC codes, and manufacturer specifications from GAF, CertainTeed, Owens Corning, and IKO</p>
        </div>
      </div>
    </div>
  );
};

export default RoofingMaterialsCalculator;