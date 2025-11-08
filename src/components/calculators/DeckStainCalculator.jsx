'use client';

import React, { useState, useMemo } from 'react';
import { Info, AlertCircle, Droplets, Layers, Calculator } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';

const DeckStainCalculator = () => {
  const [showResults, setShowResults] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');
  
  const [inputs, setInputs] = useState({
    deckLength: '',
    deckWidth: '',
    railingLinearFeet: '',
    railingStyle: 'traditional_spindles',
    railingPanelHeight: '',
    numberOfSteps: '',
    stepWidth: '',
    treadDepth: '',
    riserHeight: '',
    stairRailingLinearFeet: '',
    includeLandings: false,
    numberOfLandings: '',
    landingLength: '',
    landingWidth: '',
    numberOfBeams: '',
    beamLength: '',
    beamSize: '',
    woodType: 'pressure_treated',
    woodCondition: 'new',
    surfaceTexture: 'smooth',
    stainType: 'solid',
    applicationMethod: 'roller',
    coats: 2,
    includeRailing: false,
    includeStairs: false,
    includeBeams: false,
    includeUnderside: false
  });

  const handleReset = () => {
    setInputs({
      deckLength: '',
      deckWidth: '',
      railingLinearFeet: '',
      railingStyle: 'traditional_spindles',
      railingPanelHeight: 36,
      numberOfSteps: '',
      stepWidth: 36,
      treadDepth: 11,
      riserHeight: 7,
      stairRailingLinearFeet: '',
      includeLandings: false,
      numberOfLandings: '',
      landingLength: '',
      landingWidth: '',
      numberOfBeams: '',
      beamLength: '',
      beamSize: '4x6',
      woodType: 'pressure_treated',
      woodCondition: 'new',
      surfaceTexture: 'smooth',
      stainType: 'solid',
      applicationMethod: 'roller',
      coats: 2,
      includeRailing: false,
      includeStairs: false,
      includeBeams: false,
      includeUnderside: false
    });
    setShowResults(false);
  };

  const woodTypes = {
    pressure_treated: {
      name: 'Pressure Treated Pine',
      coverage: 175,
      description: 'High absorption softwood - most common deck material'
    },
    cedar: {
      name: 'Cedar',
      coverage: 200,
      description: 'Moderate absorption, naturally rot-resistant'
    },
    redwood: {
      name: 'Redwood',
      coverage: 200,
      description: 'Moderate absorption, premium softwood'
    },
    composite: {
      name: 'Composite/PVC',
      coverage: 400,
      description: 'Very low absorption - check manufacturer recommendations'
    },
    hardwood: {
      name: 'Hardwood (Ipe, Mahogany, Cumaru)',
      coverage: 375,
      description: 'Dense tropical hardwood - requires 2-3x less stain than softwoods'
    }
  };

  const woodConditions = {
    new: {
      name: 'New/Bare Wood (Never Stained)',
      multiplier: 1.0,
      description: 'First-time application - wood is thirsty and absorbs more'
    },
    weathered: {
      name: 'Weathered/Gray (UV Damaged)',
      multiplier: 1.5,
      description: 'Most absorbent - UV damage opens grain, may need 40% more stain'
    },
    previously_stained: {
      name: 'Previously Stained (Maintenance Coat)',
      multiplier: 0.6,
      description: 'Refresher coat - covers 50-100% MORE area than first coat'
    },
    peeling: {
      name: 'Peeling/Failing (Requires Stripping)',
      multiplier: 1.0,
      description: 'Must strip completely first - then behaves like new wood'
    }
  };

  const surfaceTextures = {
    smooth: {
      name: 'Smooth/Planed',
      multiplier: 1.0,
      description: 'Standard planed lumber - best coverage'
    },
    rough: {
      name: 'Rough Sawn/Textured',
      multiplier: 1.7,
      description: 'Requires 50-100% more stain due to increased surface area'
    }
  };

  const stainTypes = {
    solid: {
      name: 'Solid Color Stain',
      coverage: 250,
      coatsRecommended: 2,
      description: 'Opaque finish, hides wood grain completely'
    },
    semi_solid: {
      name: 'Semi-Solid Stain',
      coverage: 250,
      coatsRecommended: 2,
      description: 'Heavy pigment with some grain showing through'
    },
    semi_transparent: {
      name: 'Semi-Transparent Stain',
      coverage: 225,
      coatsRecommended: 2,
      description: 'Light color, grain clearly visible'
    },
    transparent: {
      name: 'Transparent/Clear Sealer',
      coverage: 275,
      coatsRecommended: 2,
      description: 'No pigment, protects wood only'
    },
    oil_based_penetrating: {
      name: 'Oil-Based Penetrating (TWP, Ready Seal)',
      coverage: 125,
      coatsRecommended: 1,
      description: 'Deep penetration formulas - lowest coverage, often single coat wet-on-wet'
    }
  };

  const applicationMethods = {
    brush: {
      name: 'Brush',
      wasteFactor: 1.075,
      description: 'Most control, 5-10% waste - best for detailed work'
    },
    roller: {
      name: 'Roller (with back-brushing)',
      wasteFactor: 1.175,
      description: 'Fast for large areas, 15-20% waste - must back-brush'
    },
    pad: {
      name: 'Pad Applicator',
      wasteFactor: 1.125,
      description: 'Good for smooth decks, 10-15% waste'
    },
    spray: {
      name: 'Spray (with back-brushing)',
      wasteFactor: 1.30,
      description: 'Fastest but 25-40% waste from overspray - always back-brush'
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

  const validationRules = {
  deckLength: [
    CommonRules.unrealistic(5, 100, 'Deck length')
  ],
  deckWidth: [
    CommonRules.unrealistic(5, 50, 'Deck width')
  ],
  railingLinearFeet: [
    {
      condition: (val, allVals) => {
        const railing = parseFloat(val);
        const length = parseFloat(allVals.deckLength) || 0;
        const width = parseFloat(allVals.deckWidth) || 0;
        const perimeter = 2 * (length + width);
        return railing > 0 && railing > perimeter * 1.5;
      },
      message: 'Railing length exceeds typical deck perimeter - please verify',
      type: ValidationTypes.WARNING
    }
  ],
  railingPanelHeight: [
    {
      condition: (val) => parseFloat(val) < 36,
      message: '⚠️ IRC requires 36" minimum railing height for decks',
      type: ValidationTypes.ERROR
    },
    CommonRules.tooLarge(48, 'Railing height >48" is uncommon')
  ],
  numberOfSteps: [
    CommonRules.unrealistic(1, 30, 'Number of steps')
  ],
  stepWidth: [
    {
      condition: (val) => parseFloat(val) < 36,
      message: '⚠️ IRC requires 36" minimum stair width',
      type: ValidationTypes.ERROR
    }
  ],
  riserHeight: [
    {
      condition: (val) => parseFloat(val) > 7.75,
      message: '⚠️ IRC limits riser height to 7.75" maximum',
      type: ValidationTypes.ERROR
    }
  ],
  treadDepth: [
    {
      condition: (val) => parseFloat(val) < 10,
      message: '⚠️ IRC requires minimum 10" tread depth',
      type: ValidationTypes.ERROR
    }
  ]
};

const getValues = () => ({
  deckLength: inputs.deckLength,
  deckWidth: inputs.deckWidth,
  railingLinearFeet: inputs.railingLinearFeet,
  railingPanelHeight: inputs.railingPanelHeight,
  numberOfSteps: inputs.numberOfSteps,
  stepWidth: inputs.stepWidth,
  riserHeight: inputs.riserHeight,
  treadDepth: inputs.treadDepth
});

const { validate, ValidationDisplay } = useValidation(validationRules);

 const handleInputChange = (field, value) => {
  setInputs(prev => ({
    ...prev,
    [field]: parseFloat(value) || value
  }));
  // Trigger validation after state update
  setTimeout(() => validate(getValues()), 100);
};

  const results = useMemo(() => {
    const deckArea = (parseFloat(inputs.deckLength) || 0) * (parseFloat(inputs.deckWidth) || 0);

    let deckRailingArea = 0;
    if (inputs.includeRailing && (parseFloat(inputs.railingLinearFeet) || 0) > 0) {
      const railingFeet = parseFloat(inputs.railingLinearFeet) || 0;
      if (railingStyles[inputs.railingStyle].multiplier === 'custom') {
        deckRailingArea = railingFeet * (inputs.railingPanelHeight / 12);
      } else {
        deckRailingArea = railingFeet * (inputs.railingPanelHeight / 12) * railingStyles[inputs.railingStyle].multiplier;
      }
    }

    let stairsArea = 0;
    let stairRailingArea = 0;
    if (inputs.includeStairs && (parseFloat(inputs.numberOfSteps) || 0) > 0) {
      const steps = parseFloat(inputs.numberOfSteps) || 0;
      const treadArea = (inputs.stepWidth / 12) * (inputs.treadDepth / 12) * steps;
      const riserArea = (inputs.stepWidth / 12) * (inputs.riserHeight / 12) * steps;
      stairsArea = treadArea + riserArea;

      if ((parseFloat(inputs.stairRailingLinearFeet) || 0) > 0) {
        const stairRailing = parseFloat(inputs.stairRailingLinearFeet) || 0;
        if (railingStyles[inputs.railingStyle].multiplier === 'custom') {
          stairRailingArea = stairRailing * (inputs.railingPanelHeight / 12);
        } else {
          stairRailingArea = stairRailing * (inputs.railingPanelHeight / 12) * railingStyles[inputs.railingStyle].multiplier;
        }
      }
    }

    let landingsArea = 0;
    if (inputs.includeLandings && (parseFloat(inputs.numberOfLandings) || 0) > 0) {
      landingsArea = (parseFloat(inputs.landingLength) || 0) * (parseFloat(inputs.landingWidth) || 0) * (parseFloat(inputs.numberOfLandings) || 0);
    }

    let beamsArea = 0;
    if (inputs.includeBeams && (parseFloat(inputs.numberOfBeams) || 0) > 0) {
      const beamDimensions = beamSizes[inputs.beamSize];
      const perimeterInches = beamDimensions.width + (2 * beamDimensions.height);
      const perimeterFeet = perimeterInches / 12;
      beamsArea = perimeterFeet * (parseFloat(inputs.beamLength) || 0) * (parseFloat(inputs.numberOfBeams) || 0);
    }

    let undersideArea = 0;
    if (inputs.includeUnderside) {
      undersideArea = deckArea * 2;
    }

    const totalArea = Math.round(deckArea + deckRailingArea + stairsArea + stairRailingArea + landingsArea + beamsArea + undersideArea);

    // Calculate effective coverage with all modifiers
    const baseCoverage = Math.min(
      woodTypes[inputs.woodType].coverage,
      stainTypes[inputs.stainType].coverage
    );

    // Apply surface texture, then wood condition
    const effectiveCoverage = Math.round(
      baseCoverage / 
      (surfaceTextures[inputs.surfaceTexture].multiplier * woodConditions[inputs.woodCondition].multiplier)
    );

    // Calculate gallons per coat - second coats cover approximately 2x the area
    let totalGallonsRaw = 0;
    
    if (inputs.coats >= 1 && totalArea > 0) {
      // First coat uses standard effective coverage
      totalGallonsRaw += totalArea / effectiveCoverage;
    }
    
    if (inputs.coats >= 2 && totalArea > 0) {
      // Second coat covers approximately 2x the area (wood is already saturated)
      // Exception: oil-based penetrating with wet-on-wet doesn't get this benefit
      const secondCoatCoverage = inputs.stainType === 'oil_based_penetrating' 
        ? effectiveCoverage 
        : effectiveCoverage * 2;
      totalGallonsRaw += totalArea / secondCoatCoverage;
    }
    
    if (inputs.coats >= 3 && totalArea > 0) {
      // Third coat also gets 2x benefit
      const thirdCoatCoverage = inputs.stainType === 'oil_based_penetrating'
        ? effectiveCoverage
        : effectiveCoverage * 2;
      totalGallonsRaw += totalArea / thirdCoatCoverage;
    }

    // Apply waste factor based on application method
    const wasteFactor = applicationMethods[inputs.applicationMethod].wasteFactor;
    const totalGallonsWithWaste = totalGallonsRaw * wasteFactor;

    // Round up to nearest 0.5 gallon for purchasing
    const roundedGallons = Math.ceil(totalGallonsWithWaste * 2) / 2;

    return {
      deckArea: Math.round(deckArea),
      deckRailingArea: Math.round(deckRailingArea),
      stairsArea: Math.round(stairsArea),
      stairRailingArea: Math.round(stairRailingArea),
      landingsArea: Math.round(landingsArea),
      beamsArea: Math.round(beamsArea),
      undersideArea: Math.round(undersideArea),
      totalArea,
      baseCoverage,
      effectiveCoverage,
      totalGallonsRaw: totalGallonsRaw.toFixed(2),
      totalWithWaste: roundedGallons || 0,
      wastePercentage: Math.round((wasteFactor - 1) * 100)
    };
}, [inputs]);  

  const handleCopyCalculation = async () => {
    if (!showResults || results.totalArea === 0) return;
    
    // Prepare inputs
    const inputsData = {
      'Deck size': `${inputs.deckLength}' × ${inputs.deckWidth}'`
    };
    
    if (inputs.includeRailing) {
      inputsData['Railing'] = `${inputs.railingLinearFeet} linear feet`;
    }
    if (inputs.includeStairs) {
      inputsData['Stairs'] = `${inputs.numberOfSteps} steps (${inputs.stepWidth}" wide)`;
    }
    if (inputs.includeLandings) {
      inputsData['Landings'] = `${inputs.numberOfLandings} landings`;
    }
    if (inputs.includeBeams) {
      inputsData['Beams'] = `${inputs.numberOfBeams} beams (${inputs.beamLength}' each)`;
    }
    if (inputs.includeUnderside) {
      inputsData['Underside'] = 'Included';
    }
    
    inputsData['Wood type'] = woodTypes[inputs.woodType].name;
    inputsData['Wood condition'] = woodConditions[inputs.woodCondition].name;
    inputsData['Stain type'] = stainTypes[inputs.stainType].name;
    inputsData['Application method'] = applicationMethods[inputs.applicationMethod].name;
    inputsData['Number of coats'] = inputs.coats;
    
    // Prepare outputs
    const outputs = {
      'Total area to stain': `${results.totalArea} square feet`,
      'Stain needed': `${results.totalWithWaste} gallons`,
      'Coverage rate': `${results.effectiveCoverage} sq ft/gallon (per coat)`,
      'Waste factor': `${results.wastePercentage}%`
    };
    
    if (results.deckArea > 0) outputs['Deck surface'] = `${results.deckArea} sq ft`;
    if (results.deckRailingArea > 0) outputs['Deck railing'] = `${results.deckRailingArea} sq ft`;
    if (results.stairsArea > 0) outputs['Stairs'] = `${results.stairsArea} sq ft`;
    if (results.landingsArea > 0) outputs['Landings'] = `${results.landingsArea} sq ft`;
    if (results.beamsArea > 0) outputs['Beams'] = `${results.beamsArea} sq ft`;
    
    const note = `${inputs.coats} coat${inputs.coats > 1 ? 's' : ''}. Coverage adjusted for wood type, condition, and application method.`;
    
    const success = await copyCalculation('Deck Stain Calculator', inputsData, outputs, note);
    
    if (success) {
      setCopyButtonText('✓ Copied!');
      setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
    } else {
      alert('Unable to copy. Please copy results manually.');
    }
  };

  return ( 
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">
            Deck Stain Calculator
          </h2>
          <p className="text-gray-600 text-lg">
            Calculate exact stain quantities based on industry research
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6 text-blue-600" />
                Deck Dimensions
              </h2>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deck Length (feet)
                  </label>
                  <input
                    type="number"
                    value={inputs.deckLength}
                    onChange={(e) => handleInputChange('deckLength', e.target.value)}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      !inputs.deckLength ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter length"
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
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      !inputs.deckWidth ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter width"
                    min="1"
                  />
                </div>
              </div>

              <div className="mt-4 p-3 bg-white rounded-lg">
                <div className="text-sm text-gray-600">Deck Surface Area</div>
                <div className="text-2xl font-bold text-blue-600">
                  {results.deckArea} sq ft
                </div>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Deck Railing
                </h2>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg">
                  <input
                    type="checkbox"
                    checked={inputs.includeRailing}
                    onChange={(e) => handleInputChange('includeRailing', e.target.checked)}
                    className="w-5 h-5 text-purple-600 rounded focus:ring-2 focus:ring-purple-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Include</span>
                </div>
              </div>

              {inputs.includeRailing && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Railing Linear Feet
                    </label>
                    <input
                      type="number"
                      value={inputs.railingLinearFeet}
                      onChange={(e) => handleInputChange('railingLinearFeet', e.target.value)}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent ${
                        inputs.includeRailing && !inputs.railingLinearFeet ? 'border-red-500' : 'border-gray-300'
                      }`}
                      min="0"
                    />
                    <div className="mt-1 text-xs text-gray-500">
                      Measure total perimeter of railing
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Railing Style
                    </label>
                    <select
                      value={inputs.railingStyle}
                      onChange={(e) => handleInputChange('railingStyle', e.target.value)}
                      className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    >
                      {Object.entries(railingStyles).map(([key, style]) => (
                        <option key={key} value={key}>
                          {style.name}
                        </option>
                      ))}
                    </select>
                    <div className="mt-1 text-xs text-gray-500">
                      {railingStyles[inputs.railingStyle].description}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Railing Height (inches)
                    </label>
                    <input
                      type="number"
                      value={inputs.railingPanelHeight}
                      onChange={(e) => handleInputChange('railingPanelHeight', e.target.value)}
                      className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      min="24"
                      max="48"
                    />
                    <div className="mt-1 text-xs text-gray-500">
                      Typically 36-42 inches
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Stairs
                </h2>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg">
                  <input
                    type="checkbox"
                    checked={inputs.includeStairs}
                    onChange={(e) => handleInputChange('includeStairs', e.target.checked)}
                    className="w-5 h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Include</span>
                </div>
              </div>

              {inputs.includeStairs && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Steps
                      </label>
                      <input
                        type="number"
                        value={inputs.numberOfSteps}
                        onChange={(e) => handleInputChange('numberOfSteps', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          inputs.includeStairs && !inputs.numberOfSteps ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min="0"
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
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          inputs.includeStairs && !inputs.stepWidth ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min="24"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tread Depth (inches)
                      </label>
                      <input
                        type="number"
                        value={inputs.treadDepth}
                        onChange={(e) => handleInputChange('treadDepth', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          inputs.includeStairs && !inputs.treadDepth ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min="9"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Riser Height (inches)
                      </label>
                      <input
                        type="number"
                        value={inputs.riserHeight}
                        onChange={(e) => handleInputChange('riserHeight', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                          inputs.includeStairs && !inputs.riserHeight ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min="4"
                        max="8"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Stair Railing Linear Feet (optional)
                    </label>
                    <input
                      type="number"
                      value={inputs.stairRailingLinearFeet}
                      onChange={(e) => handleInputChange('stairRailingLinearFeet', e.target.value)}
                      className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      min="0"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Landings
                </h2>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg">
                  <input
                    type="checkbox"
                    checked={inputs.includeLandings}
                    onChange={(e) => handleInputChange('includeLandings', e.target.checked)}
                    className="w-5 h-5 text-yellow-600 rounded focus:ring-2 focus:ring-yellow-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Include</span>
                </div>
              </div>

              {inputs.includeLandings && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Landings
                    </label>
                    <input
                      type="number"
                      value={inputs.numberOfLandings}
                      onChange={(e) => handleInputChange('numberOfLandings', e.target.value)}
                      className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                        inputs.includeLandings && !inputs.numberOfLandings ? 'border-red-500' : 'border-gray-300'
                      }`}
                      min="0"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Landing Length (feet)
                      </label>
                      <input
                        type="number"
                        value={inputs.landingLength}
                        onChange={(e) => handleInputChange('landingLength', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                          inputs.includeLandings && !inputs.landingLength ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min="1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Landing Width (feet)
                      </label>
                      <input
                        type="number"
                        value={inputs.landingWidth}
                        onChange={(e) => handleInputChange('landingWidth', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent ${
                          inputs.includeLandings && !inputs.landingWidth ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min="1"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Support Beams
                </h2>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg">
                  <input
                    type="checkbox"
                    checked={inputs.includeBeams}
                    onChange={(e) => handleInputChange('includeBeams', e.target.checked)}
                    className="w-5 h-5 text-orange-600 rounded focus:ring-2 focus:ring-orange-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Include</span>
                </div>
              </div>

              {inputs.includeBeams && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Beams
                      </label>
                      <input
                        type="number"
                        value={inputs.numberOfBeams}
                        onChange={(e) => handleInputChange('numberOfBeams', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                          inputs.includeBeams && !inputs.numberOfBeams ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min="0"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Beam Length (feet)
                      </label>
                      <input
                        type="number"
                        value={inputs.beamLength}
                        onChange={(e) => handleInputChange('beamLength', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                          inputs.includeBeams && !inputs.beamLength ? 'border-red-500' : 'border-gray-300'
                        }`}
                        min="1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Beam Size
                    </label>
                    <select
                      value={inputs.beamSize}
                      onChange={(e) => handleInputChange('beamSize', e.target.value)}
                      className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    >
                      {Object.entries(beamSizes).map(([key, size]) => (
                        <option key={key} value={key}>
                          {size.name}
                        </option>
                      ))}
                    </select>
                    <div className="mt-1 text-xs text-gray-500">
                      Only 3 sides are stained (top and both sides)
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-gray-800">
                  Deck Underside + Structure
                </h2>
                <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg">
                  <input
                    type="checkbox"
                    checked={inputs.includeUnderside}
                    onChange={(e) => handleInputChange('includeUnderside', e.target.checked)}
                    className="w-5 h-5 text-red-600 rounded focus:ring-2 focus:ring-red-500"
                  />
                  <span className="text-sm font-medium text-gray-700">Include</span>
                </div>
              </div>

              {inputs.includeUnderside && (
                <div className="p-3 bg-white rounded-lg">
                  <div className="text-xs text-gray-600 mb-2">
                    Includes rough lumber underside + all joists and structure.
                    Calculated as 2× deck surface area due to rough texture.
                  </div>
                  <div className="text-lg font-semibold text-red-600">
                    {results.undersideArea} sq ft
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-amber-50 rounded-lg p-6 border-l-4 border-amber-500">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Droplets className="w-6 h-6 text-amber-600" />
                Wood & Stain Details
              </h2>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wood Type
                </label>
                <select
                  value={inputs.woodType}
                  onChange={(e) => handleInputChange('woodType', e.target.value)}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {Object.entries(woodTypes).map(([key, type]) => (
                    <option key={key} value={key}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <div className="mt-1 text-xs text-gray-500">
                  {woodTypes[inputs.woodType].description}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Wood Condition
                </label>
                <select
                  value={inputs.woodCondition}
                  onChange={(e) => handleInputChange('woodCondition', e.target.value)}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {Object.entries(woodConditions).map(([key, condition]) => (
                    <option key={key} value={key}>
                      {condition.name}
                    </option>
                  ))}
                </select>
                <div className="mt-1 text-xs text-gray-500">
                  {woodConditions[inputs.woodCondition].description}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Surface Texture
                </label>
                <select
                  value={inputs.surfaceTexture}
                  onChange={(e) => handleInputChange('surfaceTexture', e.target.value)}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {Object.entries(surfaceTextures).map(([key, texture]) => (
                    <option key={key} value={key}>
                      {texture.name}
                    </option>
                  ))}
                </select>
                <div className="mt-1 text-xs text-gray-500">
                  {surfaceTextures[inputs.surfaceTexture].description}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stain Type
                </label>
                <select
                  value={inputs.stainType}
                  onChange={(e) => handleInputChange('stainType', e.target.value)}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {Object.entries(stainTypes).map(([key, type]) => (
                    <option key={key} value={key}>
                      {type.name}
                    </option>
                  ))}
                </select>
                <div className="mt-1 text-xs text-gray-500">
                  {stainTypes[inputs.stainType].description}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Application Method
                </label>
                <select
                  value={inputs.applicationMethod}
                  onChange={(e) => handleInputChange('applicationMethod', e.target.value)}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                >
                  {Object.entries(applicationMethods).map(([key, method]) => (
                    <option key={key} value={key}>
                      {method.name}
                    </option>
                  ))}
                </select>
                <div className="mt-1 text-xs text-gray-500">
                  {applicationMethods[inputs.applicationMethod].description}
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of Coats
                </label>
                <select
                  value={inputs.coats}
                  onChange={(e) => handleInputChange('coats', e.target.value)}
                  className="w-full px-4 py-2 border border-yellow-400 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
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

        <div className="space-y-6 mt-6">
          <div className="flex gap-4">
            <ValidationDisplay />
            <button
              onClick={() => {
                // Validate required inputs
                if (!inputs.deckLength || !inputs.deckWidth) {
                  alert('Please enter deck dimensions (length and width) before calculating.');
                  return;
                }
                
                setShowResults(true);
                // Track the calculation
                trackCalculation('deck-stain', inputs, {
                  totalArea: results.totalArea,
                  totalGallons: results.totalWithWaste,
                  effectiveCoverage: results.effectiveCoverage,
                  deckArea: results.deckArea,
                  railingArea: results.deckRailingArea,
                  stairsArea: results.stairsArea,
                  woodType: woodTypes[inputs.woodType].name,
                  stainType: stainTypes[inputs.stainType].name,
                  coats: inputs.coats,
                  applicationMethod: applicationMethods[inputs.applicationMethod].name
                });
              }}
              className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Calculator className="w-5 h-5" />
              Calculate Stain Needed
            </button>
            
            <button
              onClick={handleReset}
              className="flex-1 bg-gray-500 hover:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg shadow-lg transition-colors duration-200"
            >
              Reset Calculator
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
                  <div className="text-sm text-gray-600 mb-2">Effective Coverage Rate</div>
                  <div className="text-lg font-semibold text-gray-800">
                    {results.effectiveCoverage} sq ft per gallon
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Base: {results.baseCoverage} sq ft/gal adjusted for wood condition & surface texture
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
                      onClick={() => printCalculation('Deck Stain Calculator')}
                      className="copy-calc-btn flex-1"
                    >
                      🖨️ Print Results
                    </button>
                  </div>
                </div>

                <div className="mt-8 bg-gray-50 rounded-lg p-6">
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Raw calculation ({inputs.coats} coat{inputs.coats > 1 ? 's' : ''}):</span>
                    <span>{results.totalGallonsRaw} gal</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b-2 border-amber-300">
                    <span className="text-gray-700">+ {results.wastePercentage}% waste ({inputs.applicationMethod}):</span>
                    <span className="font-semibold">+{(results.totalWithWaste - results.totalGallonsRaw).toFixed(2)} gal</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="font-bold text-gray-800 text-lg">Total Stain Needed:</span>
                    <span className="text-4xl font-bold text-amber-700">{results.totalWithWaste}</span>
                    <span className="text-xl font-bold text-amber-700">gallons</span>
                  </div>
                </div>

                <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-sm">
                  <div className="font-semibold text-blue-900 mb-1">About Second Coats:</div>
                  <div className="text-blue-800">
                    {inputs.stainType === 'oil_based_penetrating' 
                      ? 'Oil-based penetrating stains use the same coverage for all coats when applied wet-on-wet (15-30 min between coats).'
                      : 'Second coats cover approximately 2× the area of first coats because wood is already saturated. This calculator accounts for this.'}
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-900 mb-2">Surface Preparation Tips</h3>
                    <ul className="space-y-2 text-sm text-blue-800">
                      <li>• Clean thoroughly - power wash and let dry 48+ hours to 12-15% moisture content</li>
                      <li>• New pressure-treated: wait 3-6 months for chemicals to dry before staining</li>
                      <li>• Use water bead test: if water beads, wood isn't ready. If absorbed in 10 min, proceed</li>
                      <li>• For weathered/gray wood: use deck brightener after cleaning to open grain</li>
                      <li>• Sand with 60-grit max - finer grits close pores and reduce absorption</li>
                      <li>• Test stain on inconspicuous area first to verify color and absorption rate</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 rounded-lg shadow-md p-6 border-l-4 border-amber-500">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-amber-900 mb-2">Application Best Practices</h3>
                    <ul className="space-y-2 text-sm text-amber-800">
                      <li>• <strong>Temperature:</strong> Apply when 50-90°F, no rain forecast for 24-48 hours</li>
                      <li>• <strong>Timing:</strong> Work in shade, avoid 10am-3pm direct sun to prevent flash drying</li>
                      <li>• <strong>Spray method:</strong> ALWAYS back-brush immediately - magic is in the back-brushing</li>
                      <li>• <strong>Roller method:</strong> Must back-brush to work stain into grain - never leave roller texture</li>
                      <li>• <strong>Brush method:</strong> Most material-efficient (lowest waste), best for detailed work</li>
                      <li>• <strong>Coverage:</strong> Don't stretch material thin - adequate saturation prevents premature failure</li>
                      <li>• <strong>Maintenance:</strong> Recoat every 2-3 years (semi-transparent) or 4-5 years (solid)</li>
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
            <h4 className="font-semibold text-gray-800 mb-2">Key Factors That Affect Coverage:</h4>
            <ul className="space-y-1">
              <li>• <strong>Surface Texture:</strong> Rough wood uses 50-100% more stain than smooth</li>
              <li>• <strong>Wood Species:</strong> Softwoods need 2-3× more than dense hardwoods</li>
              <li>• <strong>Wood Condition:</strong> Weathered wood absorbs 40% more than new wood</li>
              <li>• <strong>Previous Coating:</strong> Maintenance coats cover 50-100% more area</li>
              <li>• <strong>Application Method:</strong> Spray wastes 25-40%, brush only 5-10%</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-2">Research-Based Coverage Ranges:</h4>
            <ul className="space-y-1">
              <li>• <strong>Solid stain:</strong> 200-400 sq ft/gal (first coat)</li>
              <li>• <strong>Semi-transparent:</strong> 100-650 sq ft/gal (varies widely)</li>
              <li>• <strong>Transparent/clear:</strong> 150-600 sq ft/gal</li>
              <li>• <strong>Oil-based penetrating:</strong> 75-400 sq ft/gal</li>
              <li>• <strong>Dense hardwoods:</strong> 350-450 sq ft/gal (ipe, cumaru)</li>
              <li>• <strong>Second coats:</strong> Cover approximately 2× first coat area</li>
            </ul>
          </div>
        </div>
        <div className="mt-4 p-4 bg-yellow-100 border border-yellow-300 rounded-lg">
          <p className="text-sm text-yellow-900">
            <strong>Important:</strong> This calculator uses conservative estimates based on industry research showing field coverage is typically 20-40% lower than manufacturer specifications. Coverage rates account for wood absorption, surface texture, condition, and application method waste.
          </p>
        </div>
      </div>
      <FAQSection calculatorId="deck-stain-calculator" />
    </div>
  );
};

export default DeckStainCalculator;