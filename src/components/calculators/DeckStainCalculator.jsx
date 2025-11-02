'use client';

import React, { useState, useMemo } from 'react';
import { Info, AlertCircle, Droplets, Layers, Calculator } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';

const DeckStainCalculator = () => {
  const [showResults, setShowResults] = useState(false);
  
  const [inputs, setInputs] = useState({
    deckLength: 20,
    deckWidth: 15,
    railingLinearFeet: 50,
    railingStyle: 'traditional_spindles',
    railingPanelHeight: 36,
    numberOfSteps: 4,
    stepWidth: 36,
    treadDepth: 11,
    riserHeight: 7,
    stairRailingLinearFeet: 0,
    includeLandings: false,
    numberOfLandings: 1,
    landingLength: 4,
    landingWidth: 4,
    numberOfBeams: 4,
    beamLength: 20,
    beamSize: '4x6',
    woodType: 'pressure_treated',
    woodCondition: 'new',
    stainType: 'solid',
    coats: 2,
    includeRailing: true,
    includeStairs: false,
    includeBeams: false,
    includeUnderside: false
  });

  const handleReset = () => {
    setInputs({
      deckLength: 20,
      deckWidth: 15,
      railingLinearFeet: 50,
      railingStyle: 'traditional_spindles',
      railingPanelHeight: 36,
      numberOfSteps: 4,
      stepWidth: 36,
      treadDepth: 11,
      riserHeight: 7,
      stairRailingLinearFeet: 0,
      includeLandings: false,
      numberOfLandings: 1,
      landingLength: 4,
      landingWidth: 4,
      numberOfBeams: 4,
      beamLength: 20,
      beamSize: '4x6',
      woodType: 'pressure_treated',
      woodCondition: 'new',
      stainType: 'solid',
      coats: 2,
      includeRailing: true,
      includeStairs: false,
      includeBeams: false,
      includeUnderside: false
    });
    setShowResults(false);
  };

  const woodTypes = {
    pressure_treated: {
      name: 'Pressure Treated Pine',
      coverage: 150,
      absorption: 1.3,
      description: 'High absorption, requires more stain'
    },
    cedar: {
      name: 'Cedar',
      coverage: 175,
      absorption: 1.2,
      description: 'Moderate absorption, good stain retention'
    },
    redwood: {
      name: 'Redwood',
      coverage: 175,
      absorption: 1.2,
      description: 'Moderate absorption, premium wood'
    },
    composite: {
      name: 'Composite/PVC',
      coverage: 300,
      absorption: 0.5,
      description: 'Low absorption, may not need staining'
    },
    hardwood: {
      name: 'Hardwood (Ipe, Mahogany)',
      coverage: 200,
      absorption: 1.0,
      description: 'Dense wood, lower absorption'
    }
  };

  const woodConditions = {
    new: {
      name: 'New/Unstained Wood',
      multiplier: 1.4,
      description: 'Bare wood absorbs more stain on first application'
    },
    weathered: {
      name: 'Weathered (Gray/Faded)',
      multiplier: 1.6,
      description: 'Very absorbent, may need extra coats or wood brightener first'
    },
    previously_stained: {
      name: 'Previously Stained (Good Condition)',
      multiplier: 1.0,
      description: 'Standard coverage, surface is sealed'
    },
    peeling: {
      name: 'Peeling/Failing Stain',
      multiplier: 1.3,
      description: 'Requires stripping, then behaves like new wood'
    }
  };

  const stainTypes = {
    solid: {
      name: 'Solid Color Stain',
      coverage: 150,
      coatsRecommended: 2,
      description: 'Highest opacity, best coverage, hides wood grain'
    },
    semi_solid: {
      name: 'Semi-Solid Stain',
      coverage: 175,
      coatsRecommended: 2,
      description: 'Moderate opacity, some grain visible'
    },
    semi_transparent: {
      name: 'Semi-Transparent Stain',
      coverage: 200,
      coatsRecommended: 2,
      description: 'Light color, grain clearly visible'
    },
    transparent: {
      name: 'Transparent/Clear Sealer',
      coverage: 250,
      coatsRecommended: 2,
      description: 'No color, protects wood only'
    },
    oil_based: {
      name: 'Oil-Based Penetrating',
      coverage: 125,
      coatsRecommended: 1,
      description: 'Deep penetration, single coat typically sufficient'
    }
  };

  const railingStyles = {
    traditional_spindles: {
      name: 'Traditional Spindles/Balusters',
      multiplier: 4.0,
      description: 'Top rail, bottom rail, posts, and many spindles - highest surface area'
    },
    horizontal_cables: {
      name: 'Horizontal Cable Railing',
      multiplier: 1.5,
      description: 'Top rail, posts, and minimal cable hardware'
    },
    glass_panels: {
      name: 'Glass/Acrylic Panels',
      multiplier: 1.0,
      description: 'Frame rails and posts only, panels don\'t need stain'
    },
    solid_panels: {
      name: 'Solid Wood Panels',
      multiplier: 'custom',
      description: 'Top rail, posts, and panel faces - requires panel height'
    }
  };

  const beamSizes = {
    '4x4': { width: 3.5, height: 3.5, name: '4×4 (3.5" × 3.5")' },
    '4x6': { width: 3.5, height: 5.5, name: '4×6 (3.5" × 5.5")' },
    '6x6': { width: 5.5, height: 5.5, name: '6×6 (5.5" × 5.5")' },
    '4x8': { width: 3.5, height: 7.25, name: '4×8 (3.5" × 7.25")' },
    '6x8': { width: 5.5, height: 7.25, name: '6×8 (5.5" × 7.25")' },
    '6x10': { width: 5.5, height: 9.25, name: '6×10 (5.5" × 9.25")' },
    '8x8': { width: 7.25, height: 7.25, name: '8×8 (7.25" × 7.25")' }
  };

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: parseFloat(value) || value
    }));
  };

  const results = useMemo(() => {
    const deckArea = inputs.deckLength * inputs.deckWidth;
    
    // Deck railing calculation
    let deckRailingArea = 0;
    if (inputs.includeRailing) {
      const railingStyle = railingStyles[inputs.railingStyle];
      
      if (railingStyle.multiplier === 'custom') {
        deckRailingArea = (inputs.railingLinearFeet * inputs.railingPanelHeight / 12) + inputs.railingLinearFeet;
      } else {
        deckRailingArea = inputs.railingLinearFeet * railingStyle.multiplier;
      }
    }

    // Stair railing calculation (uses same railing style)
    let stairRailingArea = 0;
    if (inputs.includeStairs && inputs.stairRailingLinearFeet > 0) {
      const railingStyle = railingStyles[inputs.railingStyle];
      
      if (railingStyle.multiplier === 'custom') {
        stairRailingArea = (inputs.stairRailingLinearFeet * inputs.railingPanelHeight / 12) + inputs.stairRailingLinearFeet;
      } else {
        stairRailingArea = inputs.stairRailingLinearFeet * railingStyle.multiplier;
      }
    }

    const totalRailingArea = deckRailingArea + stairRailingArea;
    
    const stairsArea = inputs.includeStairs 
      ? ((inputs.treadDepth + inputs.riserHeight) * inputs.stepWidth * inputs.numberOfSteps) / 144
      : 0;

    // Landing calculation
    const landingsArea = (inputs.includeStairs && inputs.includeLandings)
      ? inputs.numberOfLandings * inputs.landingLength * inputs.landingWidth
      : 0;
    
    // Support beams calculation
    // Typically 3 sides are visible (top and two sides, not bottom)
    let beamsArea = 0;
    if (inputs.includeBeams) {
      const beam = beamSizes[inputs.beamSize];
      const perimeterPerBeam = (beam.width + beam.height + beam.height) / 12; // Convert inches to feet
      beamsArea = inputs.numberOfBeams * inputs.beamLength * perimeterPerBeam;
    }

    // Underside of deck - includes rough boards AND structural members (joists, rim, blocking)
    // Typically 2× the deck surface area
    const undersideArea = inputs.includeUnderside ? deckArea * 2.0 : 0;
    
    const totalArea = deckArea + totalRailingArea + stairsArea + landingsArea + beamsArea + undersideArea;

    const woodType = woodTypes[inputs.woodType];
    const woodCondition = woodConditions[inputs.woodCondition];
    const stainType = stainTypes[inputs.stainType];

    let baseCoverage = Math.min(woodType.coverage, stainType.coverage);
    const effectiveCoverage = baseCoverage / woodCondition.multiplier;

    const gallonsPerCoatRaw = totalArea / effectiveCoverage;
    const gallonsPerCoat = Math.ceil(gallonsPerCoatRaw);
    const totalGallons = gallonsPerCoat * inputs.coats;
    const wasteMultiplier = 1.15;
    const totalWithWaste = Math.ceil(totalGallons * wasteMultiplier);

    return {
      deckArea: Math.round(deckArea),
      deckRailingArea: Math.round(deckRailingArea),
      stairRailingArea: Math.round(stairRailingArea),
      totalRailingArea: Math.round(totalRailingArea),
      stairsArea: Math.round(stairsArea),
      landingsArea: Math.round(landingsArea),
      beamsArea: Math.round(beamsArea),
      undersideArea: Math.round(undersideArea),
      totalArea: Math.round(totalArea),
      effectiveCoverage: Math.round(effectiveCoverage),
      gallonsPerCoatRaw: gallonsPerCoatRaw.toFixed(1),
      gallonsPerCoat,
      totalGallons,
      totalWithWaste
    };
  }, [inputs]);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 text-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Droplets className="w-10 h-10" />
          <h1 className="text-4xl font-bold">Deck Stain Calculator</h1>
        </div>
        <p className="text-amber-100 text-lg">
          Calculate how much stain you need for your deck, railings, and stairs with industry-accurate coverage rates.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Layers className="w-6 h-6 text-amber-600" />
              Deck Dimensions
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deck Length (feet)
                </label>
                <input
                  type="number"
                  value={inputs.deckLength}
                  onChange={(e) => handleInputChange('deckLength', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  min="1"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Deck Width (feet)
                </label>
                <input
                  type="number"
                  value={inputs.deckWidth}
                  onChange={(e) => handleInputChange('deckWidth', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  min="1"
                />
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="checkbox"
                  id="includeRailing"
                  checked={inputs.includeRailing}
                  onChange={(e) => handleInputChange('includeRailing', e.target.checked)}
                  className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
                />
                <label htmlFor="includeRailing" className="text-sm font-medium text-gray-700">
                  Include Railing
                </label>
              </div>

              {inputs.includeRailing && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deck Railing Linear Feet (deck only, not stairs)
                      <span className="text-xs text-gray-500 ml-2">
                        (measure all sides with railing)
                      </span>
                    </label>
                    <input
                      type="number"
                      value={inputs.railingLinearFeet}
                      onChange={(e) => handleInputChange('railingLinearFeet', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      min="0"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Railing Style
                    </label>
                    <select
                      value={inputs.railingStyle}
                      onChange={(e) => handleInputChange('railingStyle', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      {Object.entries(railingStyles).map(([key, style]) => (
                        <option key={key} value={key}>
                          {style.name}
                        </option>
                      ))}
                    </select>
                    <p className="mt-1 text-xs text-gray-500">
                      {railingStyles[inputs.railingStyle].description}
                    </p>
                  </div>

                  {inputs.railingStyle === 'solid_panels' && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Panel Height (inches)
                      </label>
                      <input
                        type="number"
                        value={inputs.railingPanelHeight}
                        onChange={(e) => handleInputChange('railingPanelHeight', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        min="1"
                      />
                      <div className="mt-1 text-xs text-gray-500">Typical: 36-42 inches</div>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="checkbox"
                  id="includeStairs"
                  checked={inputs.includeStairs}
                  onChange={(e) => handleInputChange('includeStairs', e.target.checked)}
                  className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
                />
                <label htmlFor="includeStairs" className="text-sm font-medium text-gray-700">
                  Include Stairs
                </label>
              </div>

              {inputs.includeStairs && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Steps
                    </label>
                    <input
                      type="number"
                      value={inputs.numberOfSteps}
                      onChange={(e) => handleInputChange('numberOfSteps', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Step Width (inches)
                    </label>
                    <input
                      type="number"
                      value={inputs.stepWidth}
                      onChange={(e) => handleInputChange('stepWidth', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      min="1"
                    />
                    <div className="mt-1 text-xs text-gray-500">Typical: 36-48 inches</div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tread Depth (inches)
                      </label>
                      <input
                        type="number"
                        value={inputs.treadDepth}
                        onChange={(e) => handleInputChange('treadDepth', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        min="1"
                      />
                      <div className="mt-1 text-xs text-gray-500">Typical: 10-11"</div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Riser Height (inches)
                      </label>
                      <input
                        type="number"
                        value={inputs.riserHeight}
                        onChange={(e) => handleInputChange('riserHeight', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                        min="1"
                      />
                      <div className="mt-1 text-xs text-gray-500">Typical: 7-8"</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stair Railing Linear Feet (optional)
                    </label>
                    <input
                      type="number"
                      value={inputs.stairRailingLinearFeet}
                      onChange={(e) => handleInputChange('stairRailingLinearFeet', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      min="0"
                    />
                    <div className="mt-1 text-xs text-gray-500">
                      Measure both sides if stairs have railings. Uses same style as deck railing.
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-3 mb-4">
                      <input
                        type="checkbox"
                        id="includeLandings"
                        checked={inputs.includeLandings}
                        onChange={(e) => handleInputChange('includeLandings', e.target.checked)}
                        className="w-4 h-4 text-amber-600 rounded focus:ring-amber-500"
                      />
                      <label htmlFor="includeLandings" className="text-sm font-medium text-gray-700">
                        Include Landing(s)
                      </label>
                    </div>

                    {inputs.includeLandings && (
                      <div className="space-y-3 ml-7">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Number of Landings
                          </label>
                          <input
                            type="number"
                            value={inputs.numberOfLandings}
                            onChange={(e) => handleInputChange('numberOfLandings', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                            min="1"
                          />
                          <div className="mt-1 text-xs text-gray-500">
                            L-shaped stairs = 1 landing, U-shaped = 1-2 landings
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Landing Length (ft)
                            </label>
                            <input
                              type="number"
                              value={inputs.landingLength}
                              onChange={(e) => handleInputChange('landingLength', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              min="1"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Landing Width (ft)
                            </label>
                            <input
                              type="number"
                              value={inputs.landingWidth}
                              onChange={(e) => handleInputChange('landingWidth', e.target.value)}
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                              min="1"
                            />
                          </div>
                        </div>

                        <div className="bg-blue-50 p-2 rounded">
                          <div className="text-xs text-blue-800">
                            <Info className="w-3 h-3 inline mr-1" />
                            {inputs.numberOfLandings} landing(s) × {inputs.landingLength}' × {inputs.landingWidth}' = {results.landingsArea} sq ft
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="checkbox"
                  id="includeBeams"
                  checked={inputs.includeBeams}
                  onChange={(e) => handleInputChange('includeBeams', e.target.checked)}
                  className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
                />
                <label htmlFor="includeBeams" className="text-sm font-medium text-gray-700">
                  Include Visible Support Beams
                </label>
              </div>

              {inputs.includeBeams && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Beams
                    </label>
                    <input
                      type="number"
                      value={inputs.numberOfBeams}
                      onChange={(e) => handleInputChange('numberOfBeams', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Average Beam Length (feet)
                    </label>
                    <input
                      type="number"
                      value={inputs.beamLength}
                      onChange={(e) => handleInputChange('beamLength', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      min="1"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Beam Size
                    </label>
                    <select
                      value={inputs.beamSize}
                      onChange={(e) => handleInputChange('beamSize', e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    >
                      {Object.entries(beamSizes).map(([key, beam]) => (
                        <option key={key} value={key}>
                          {beam.name}
                        </option>
                      ))}
                    </select>
                    <div className="mt-1 text-xs text-gray-500">
                      Calculates 3 visible sides (top and both sides)
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <input
                  type="checkbox"
                  id="includeUnderside"
                  checked={inputs.includeUnderside}
                  onChange={(e) => handleInputChange('includeUnderside', e.target.checked)}
                  className="w-5 h-5 text-amber-600 rounded focus:ring-amber-500"
                />
                <label htmlFor="includeUnderside" className="text-sm font-medium text-gray-700">
                  Include Underside of Deck Boards
                </label>
              </div>

              {inputs.includeUnderside && (
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-start gap-2">
                    <Info className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div className="text-xs text-blue-800">
                      <strong>Note:</strong> Underside calculation includes deck boards (rough surface) PLUS all structural members 
                      (joists, rim joists, blocking). Uses deck area × 2.0 to account for this significant additional surface area.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Wood & Stain Type
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wood Type
                </label>
                <select
                  value={inputs.woodType}
                  onChange={(e) => handleInputChange('woodType', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {Object.entries(woodTypes).map(([key, wood]) => (
                    <option key={key} value={key}>
                      {wood.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {woodTypes[inputs.woodType].description}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wood Condition
                </label>
                <select
                  value={inputs.woodCondition}
                  onChange={(e) => handleInputChange('woodCondition', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {Object.entries(woodConditions).map(([key, condition]) => (
                    <option key={key} value={key}>
                      {condition.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {woodConditions[inputs.woodCondition].description}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stain Type
                </label>
                <select
                  value={inputs.stainType}
                  onChange={(e) => handleInputChange('stainType', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {Object.entries(stainTypes).map(([key, stain]) => (
                    <option key={key} value={key}>
                      {stain.name}
                    </option>
                  ))}
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  {stainTypes[inputs.stainType].description}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Coats
                </label>
                <select
                  value={inputs.coats}
                  onChange={(e) => handleInputChange('coats', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  <option value={1}>1 Coat</option>
                  <option value={2}>2 Coats (Recommended)</option>
                  <option value={3}>3 Coats</option>
                </select>
                <div className="mt-1 text-xs text-gray-500">
                  Recommended: {stainTypes[inputs.stainType].coatsRecommended} coats for this stain type
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4">
            <button
              onClick={() => setShowResults(true)}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Calculate
            </button>
            
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-colors duration-200"
            >
              Start Over
            </button>
          </div>

          {showResults && (
            <>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg shadow-lg p-6 border-2 border-amber-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Results</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Deck Surface:</span>
                    <span className="font-semibold">{results.deckArea} sq ft</span>
                  </div>
                  {inputs.includeRailing && results.deckRailingArea > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Deck Railing:</span>
                      <span className="font-semibold">{results.deckRailingArea} sq ft</span>
                    </div>
                  )}
                  {inputs.includeStairs && results.stairsArea > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Stairs:</span>
                      <span className="font-semibold">{results.stairsArea} sq ft</span>
                    </div>
                  )}
                  {inputs.includeStairs && results.stairRailingArea > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Stair Railing:</span>
                      <span className="font-semibold">{results.stairRailingArea} sq ft</span>
                    </div>
                  )}
                  {inputs.includeLandings && results.landingsArea > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Landing(s):</span>
                      <span className="font-semibold">{results.landingsArea} sq ft</span>
                    </div>
                  )}
                  {inputs.includeBeams && results.beamsArea > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Support Beams:</span>
                      <span className="font-semibold">{results.beamsArea} sq ft</span>
                    </div>
                  )}
                  {inputs.includeUnderside && results.undersideArea > 0 && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Underside + Structure:</span>
                      <span className="font-semibold">{results.undersideArea} sq ft</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center pt-3 border-t-2 border-amber-300">
                    <span className="font-semibold text-gray-800">Total Area:</span>
                    <span className="text-xl font-bold text-amber-700">{results.totalArea} sq ft</span>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-600 mb-2">Coverage Rate (with conditions)</div>
                  <div className="text-lg font-semibold text-gray-800">
                    {results.effectiveCoverage} sq ft per gallon
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Base: {Math.min(woodTypes[inputs.woodType].coverage, stainTypes[inputs.stainType].coverage)} sq ft/gal 
                    × {woodConditions[inputs.woodCondition].name.toLowerCase()} factor
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Calculated per coat:</span>
                    <span>{results.gallonsPerCoatRaw} gal</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Rounded per coat:</span>
                    <span className="font-semibold">{results.gallonsPerCoat} gallons</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">× {inputs.coats} Coats:</span>
                    <span className="font-semibold">{results.totalGallons} gallons</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b-2 border-amber-300">
                    <span className="text-gray-700">+ 15% Waste:</span>
                    <span className="font-semibold">{results.totalWithWaste} gallons</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="font-bold text-gray-800 text-lg">Total Needed:</span>
                    <span className="text-4xl font-bold text-amber-700">{results.totalWithWaste}</span>
                    <span className="text-xl font-bold text-amber-700">gallons</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Pro Tips</h3>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• Clean and prepare deck thoroughly - power wash and let dry 48+ hours</li>
                      <li>• New pressure-treated lumber: wait 3-6 months before staining</li>
                      <li>• Apply when temps are 50-90°F with no rain in forecast for 24-48 hours</li>
                      <li>• Underside includes rough boards + all joists/structure - uses 2× deck surface area</li>
                      <li>• Support beams: typically only 3 sides are visible (top and both sides)</li>
                      <li>• Horizontal surfaces (deck floor) need 2 coats; vertical may need only 1</li>
                      <li>• Railing style dramatically affects stain usage - spindles use 4× more than cables</li>
                      <li>• Test stain on inconspicuous area first to check color and absorption</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Application Method</h3>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li><strong>Brush:</strong> Best for railings, corners, and edges. Most control.</li>
                      <li><strong>Roller:</strong> Fast for large flat surfaces. Use 3/4" nap roller.</li>
                      <li><strong>Pump Sprayer:</strong> Fastest but requires back-brushing for even penetration. More waste.</li>
                      <li><strong>Pad Applicator:</strong> Good compromise between speed and control for deck floor.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="mt-8 bg-gray-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Understanding Coverage Rates</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Why Coverage Varies:</h4>
            <ul className="space-y-1">
              <li>• <strong>Wood Type:</strong> Softwoods absorb more than hardwoods</li>
              <li>• <strong>Wood Condition:</strong> Weathered wood can use 60% more stain</li>
              <li>• <strong>Stain Type:</strong> Solid stains cover better than transparent</li>
              <li>• <strong>Temperature:</strong> Hot weather causes faster drying = less penetration</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Industry Standards:</h4>
            <ul className="space-y-1">
              <li>• Solid stain: 150-200 sq ft/gallon</li>
              <li>• Semi-transparent: 200-300 sq ft/gallon</li>
              <li>• Clear sealer: 250-350 sq ft/gallon</li>
              <li>• Always add 15-20% for waste and touchups</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeckStainCalculator;