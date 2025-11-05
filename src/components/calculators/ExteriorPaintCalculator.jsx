'use client';

import React, { useState, useMemo } from 'react';
import { Info, Home, Droplets } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';

const ExteriorPaintCalculator = () => {
  const [inputs, setInputs] = useState({
    squareFeet: 2000,
    surfaceType: 'vinyl',
    surfaceCondition: 'good',
    applicationMethod: 'roll',
    coats: 2,
    needsPrimer: true
  });

  const [showResults, setShowResults] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');

  // Helper function to round UP to nearest 0.1 gallon (never round down)
  const roundUpToTenth = (value) => {
    return Math.ceil(value * 10) / 10;
  };

  // Helper function to round UP to nearest whole gallon for purchase
  const roundUpToWholeGallon = (value) => {
    return Math.ceil(value);
  };

  // Surface type characteristics
  const surfaceTypes = {
    vinyl: { 
      name: 'Vinyl Siding', 
      coverage: 375, 
      porosity: 1.0, 
      texture: 1.0,
      description: 'Non-porous, smooth surface. Best coverage rates.'
    },
    wood_new: { 
      name: 'New Wood Siding', 
      coverage: 325, 
      porosity: 1.2, 
      texture: 1.15,
      description: 'Moderate absorption, wood grain texture'
    },
    wood_weathered: { 
      name: 'Weathered Wood', 
      coverage: 225, 
      porosity: 1.5, 
      texture: 1.2,
      description: 'High absorption, open grain. Requires 50-100% more paint'
    },
    brick: { 
      name: 'Brick', 
      coverage: 250, 
      porosity: 1.5, 
      texture: 1.3,
      description: 'High porosity, textured surface'
    },
    stucco_smooth: { 
      name: 'Smooth Stucco', 
      coverage: 275, 
      porosity: 1.4, 
      texture: 1.3,
      description: 'Medium-high absorption, textured'
    },
    stucco_rough: { 
      name: 'Rough Stucco', 
      coverage: 175, 
      porosity: 1.8, 
      texture: 1.8,
      description: 'Very high absorption. Can require 60-100% more paint'
    },
    cement: { 
      name: 'Fiber Cement', 
      coverage: 300, 
      porosity: 1.25, 
      texture: 1.15,
      description: 'Moderate porosity, slight texture'
    },
    aluminum: { 
      name: 'Aluminum/Metal', 
      coverage: 375, 
      porosity: 1.0, 
      texture: 1.0,
      description: 'Non-porous, requires rust-inhibiting primer'
    }
  };

  const calculations = useMemo(() => {
    const surface = surfaceTypes[inputs.surfaceType];
    const baseCoverage = surface.coverage;
    
    // Condition multiplier - non-porous surfaces always use 'excellent'
    const effectiveCondition = (inputs.surfaceType === 'vinyl' || inputs.surfaceType === 'aluminum') 
      ? 'excellent' 
      : inputs.surfaceCondition;
    
    const conditionMultipliers = {
      excellent: 1.0,
      good: 1.1,
      fair: 1.25,
      poor: 1.5
    };
    
    // Application method waste
    const wasteFactors = {
      roll: 1.10,  // 10% waste
      spray_airless: 1.35,  // 35% waste
      spray_hvlp: 1.25  // 25% waste
    };
    
    // Calculate effective coverage per gallon
    const conditionAdjusted = baseCoverage / conditionMultipliers[effectiveCondition];
    const effectiveCoverage = conditionAdjusted;
    
    // Calculate paint needed per coat
    const paintPerCoat = inputs.squareFeet / effectiveCoverage;
    
    // First coat uses more on porous surfaces
    const firstCoatMultiplier = surface.porosity > 1.3 ? 1.3 : 
                                 surface.porosity > 1.1 ? 1.15 : 1.05;
    
    // Apply waste factor to each coat calculation
    const firstCoatGallons = paintPerCoat * firstCoatMultiplier * wasteFactors[inputs.applicationMethod];
    const additionalCoatsGallons = paintPerCoat * (inputs.coats - 1) * wasteFactors[inputs.applicationMethod];
    
    // Total paint (waste already included)
    const totalPaint = firstCoatGallons + additionalCoatsGallons;
    
    // Primer calculation (200-300 sq ft per gallon, waste included)
    const primerCoverage = inputs.surfaceType === 'wood_weathered' ? 200 : 250;
    const primerGallons = inputs.needsPrimer ? 
      (inputs.squareFeet / primerCoverage) * wasteFactors[inputs.applicationMethod] : 0;
    
    return {
      totalPaint: totalPaint,
      primerGallons: primerGallons,
      effectiveCoverage,
      firstCoatGallons: firstCoatGallons,
      subsequentCoatsGallons: additionalCoatsGallons,
      wastePercentage: inputs.applicationMethod === 'spray_airless' ? 35 : 
                       inputs.applicationMethod === 'spray_hvlp' ? 25 : 10
    };
  }, [inputs]);

  const handleCalculate = () => {
    setShowResults(true);
    
    // Track the calculation
    trackCalculation('exterior-paint', inputs, {
      totalPaintGallons: calculations.totalPaint,
      primerGallons: calculations.primerGallons,
      effectiveCoverage: calculations.effectiveCoverage,
      firstCoatGallons: calculations.firstCoatGallons,
      subsequentCoatsGallons: calculations.subsequentCoatsGallons,
      wastePercentage: calculations.wastePercentage,
      surfaceType: surfaceTypes[inputs.surfaceType].name,
      coats: inputs.coats,
      needsPrimer: inputs.needsPrimer
    });
  };

  const handleReset = () => {
    setInputs({
      squareFeet: 2000,
      surfaceType: 'vinyl',
      surfaceCondition: 'good',
      applicationMethod: 'roll',
      coats: 2,
      needsPrimer: true
    });
    setShowResults(false);
  };  

  const handleCopyCalculation = async () => {
    if (!showResults || !calculations) return;
    
    // Prepare inputs
    const inputsData = {
      'Surface area': `${inputs.squareFeet} sq ft`,
      'Surface type': surfaceTypes[inputs.surfaceType].name,
      'Surface condition': inputs.surfaceCondition,
      'Application method': inputs.applicationMethod,
      'Number of coats': inputs.coats,
      'Needs primer': inputs.needsPrimer ? 'Yes' : 'No'
    };
    
    // Prepare outputs
    const outputs = {
      'Paint gallons needed': `${calculations.paintGallonsFormatted} gallons`,
      'Paint to purchase': `${calculations.paintGallonsToPurchase} gallons`,
      'Coverage rate': `${calculations.effectiveCoverage} sq ft/gallon`,
      'Total paint cost': `$${calculations.totalPaintCost}`
    };
    
    if (inputs.needsPrimer) {
      outputs['Primer gallons needed'] = `${calculations.primerGallonsFormatted} gallons`;
      outputs['Primer to purchase'] = `${calculations.primerGallonsToPurchase} gallons`;
      outputs['Total primer cost'] = `$${calculations.totalPrimerCost}`;
    }
    
    outputs['Total project cost'] = `$${calculations.totalProjectCost}`;
    
    const note = `Based on PCA and MPI standards. Accounts for surface porosity, texture, and application method waste.`;
    
    const success = await copyCalculation('Exterior Paint Calculator', inputsData, outputs, note);
    
    if (success) {
      setCopyButtonText('✓ Copied!');
      setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
    } else {
      alert('Unable to copy. Please copy results manually.');
    }
  };

  return (  
    <div className="w-full max-w-6xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="bg-white rounded-2xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Home className="w-10 h-10 text-blue-600" />
            <h2 className="text-4xl font-bold text-gray-800">
              Exterior Paint Calculator
            </h2>
          </div>
          <p className="text-gray-600 text-lg">
            Calculate exactly how much paint and primer you need
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2">
              Project Details
            </h2>

            {/* Square Footage */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Home className="w-4 h-4 inline mr-2" />
                Paintable Surface Area (sq ft)
              </label>
              <input
                type="number"
                value={inputs.squareFeet}
                onChange={(e) => setInputs({...inputs, squareFeet: Number(e.target.value)})}
                onFocus={(e) => e.target.select()}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                min="100"
                step="100"
              />
              <p className="text-xs text-gray-500 mt-1">
                Measure: (Perimeter × Height) + gables + soffits. Many pros don't subtract doors/windows.
              </p>
            </div>

            {/* Surface Type */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Surface Type
              </label>
              <select
                value={inputs.surfaceType}
                onChange={(e) => setInputs({...inputs, surfaceType: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              >
                {Object.entries(surfaceTypes).map(([key, surface]) => (
                  <option key={key} value={key}>
                    {surface.name} ({surface.coverage} sq ft/gal)
                  </option>
                ))}
              </select>
              <p className="text-xs text-gray-600 mt-2 bg-gray-50 p-2 rounded">
                {surfaceTypes[inputs.surfaceType].description}
              </p>
            </div>

            {/* Surface Status - only shown for porous surfaces */}
            {inputs.surfaceType !== 'vinyl' && inputs.surfaceType !== 'aluminum' && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Surface Status (After Prep)
                </label>
                <select
                  value={inputs.surfaceCondition}
                  onChange={(e) => setInputs({...inputs, surfaceCondition: e.target.value})}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
                >
                  <option value="excellent">Mostly Sealed - minimal bare spots exposed</option>
                  <option value="good">Mostly Sealed - some bare spots (+10% paint)</option>
                  <option value="fair">Partially Exposed - moderate bare substrate (+25% paint)</option>
                  <option value="poor">Heavily Exposed - extensive bare substrate (+50% paint)</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  More exposed bare wood/masonry = more paint absorption
                </p>
              </div>
            )}

            {/* Application Method */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                <Droplets className="w-4 h-4 inline mr-2" />
                Application Method
              </label>
              <select
                value={inputs.applicationMethod}
                onChange={(e) => setInputs({...inputs, applicationMethod: e.target.value})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              >
                <option value="roll">Brush/Roller (10% waste)</option>
                <option value="spray_hvlp">HVLP Spray (25% waste, 50% faster)</option>
                <option value="spray_airless">Airless Spray (35% waste, 70% faster)</option>
              </select>
              {inputs.applicationMethod !== 'roll' && (
                <div className="mt-2 bg-orange-50 border border-orange-200 rounded p-3">
                  <p className="text-xs text-orange-800">
                    ⚠️ <strong>Spray Warning:</strong> Spraying uses {inputs.applicationMethod === 'spray_airless' ? '35%' : '25%'} 
                    more paint due to overspray but completes 50-70% faster than rolling.
                  </p>
                </div>
              )}
            </div>

            {/* Coats */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Number of Coats
              </label>
              <select
                value={inputs.coats}
                onChange={(e) => setInputs({...inputs, coats: Number(e.target.value)})}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none text-lg"
              >
                <option value={2}>2 Coats (Recommended for exterior)</option>
                <option value={3}>3 Coats</option>
              </select>
              <p className="text-xs text-gray-500 mt-1">
                Note: Exterior projects almost always require 2 coats for proper weather protection
              </p>
            </div>

            {/* Primer */}
            <div>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={inputs.needsPrimer}
                  onChange={(e) => setInputs({...inputs, needsPrimer: e.target.checked})}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Needs Primer (200-300 sq ft/gallon coverage)
                </span>
              </label>
              <p className="text-xs text-gray-500 mt-2 ml-8">
                Always required for bare wood, masonry, and metal. Can be skipped on previously 
                painted surfaces in good condition with same/darker colors.
              </p>
            </div>

            {/* Calculate Button */}
            <div className="pt-4">
              <button
                onClick={handleCalculate}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Calculate Paint Needed
              </button>
            </div>
          </div>

          {/* Results Section */}
          {!showResults && (
            <div className="space-y-6 flex items-center justify-center">
              <div className="bg-gray-50 rounded-xl p-12 text-center border-2 border-dashed border-gray-300">
                <Droplets className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">
                  Ready to Calculate
                </h3>
                <p className="text-gray-500">
                  Enter your project details and click<br />
                  "Calculate Paint Needed" to see results
                </p>
              </div>
            </div>
          )}

          {showResults && (
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b-2 border-green-500 pb-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  Material Estimate
                </h2>
                <button
                  onClick={handleReset}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-colors"
                >
                  Start Over
                </button>
              </div>

            {/* Paint Requirements */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-2 border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Paint Required</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">First Coat:</span>
                  <span className="text-xl font-bold text-blue-700">
                    {roundUpToTenth(calculations.firstCoatGallons)} gallons
                  </span>
                </div>
                {inputs.coats > 1 && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Additional Coats:</span>
                    <span className="text-xl font-bold text-blue-700">
                      {roundUpToTenth(calculations.subsequentCoatsGallons)} gallons
                    </span>
                  </div>
                )}
                <div className="border-t-2 border-blue-300 pt-3 flex justify-between items-center">
                  <span className="text-gray-800 font-semibold">Calculated Total:</span>
                  <span className="text-2xl font-bold text-blue-900">
                    {(roundUpToTenth(calculations.firstCoatGallons) + roundUpToTenth(calculations.subsequentCoatsGallons)).toFixed(1)} gallons
                  </span>
                </div>
                <div className="bg-green-50 border-2 border-green-400 rounded-lg p-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-bold">Purchase:</span>
                    <span className="text-3xl font-bold text-green-700">
                      {roundUpToWholeGallon(roundUpToTenth(calculations.firstCoatGallons) + roundUpToTenth(calculations.subsequentCoatsGallons))} gallons
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 mt-1">Rounded up to nearest whole gallon</p>
                </div>
                <div className="text-sm text-gray-600 bg-white rounded p-2">
                  <div>Effective coverage: {Math.round(calculations.effectiveCoverage)} sq ft/gallon</div>
                  <div>Includes {calculations.wastePercentage}% waste factor</div>
                  <div className="text-xs italic mt-1">* All quantities rounded up to ensure sufficient paint</div>
                </div>
              </div>
            </div>

            {/* Primer Requirements */}
            {inputs.needsPrimer && (
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border-2 border-purple-200">
                <h3 className="text-xl font-bold text-purple-900 mb-4">Primer Required</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800 font-semibold">Calculated Total:</span>
                    <span className="text-2xl font-bold text-purple-700">
                      {roundUpToTenth(calculations.primerGallons)} gallons
                    </span>
                  </div>
                  <div className="bg-green-50 border-2 border-green-400 rounded-lg p-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-bold">Purchase:</span>
                      <span className="text-3xl font-bold text-green-700">
                        {roundUpToWholeGallon(roundUpToTenth(calculations.primerGallons))} gallons
                      </span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">Rounded up to nearest whole gallon</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Exterior primer covers 25-40% less area than topcoat (includes {calculations.wastePercentage}% waste)
                  </p>
                </div>
              </div>
            )}

            {/* Important Notes */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm text-blue-800 space-y-1">
                  <p><strong>Coverage varies widely:</strong> Smooth surfaces use 350-400 sq ft/gal while rough stucco only covers 150-200 sq ft/gal.</p>
                  <p><strong>First coat uses more:</strong> Porous surfaces absorb 15-50% more paint on the first coat.</p>
                  <p><strong>Spray increases waste:</strong> Airless spraying wastes 35% of paint through overspray vs 10% for rolling.</p>
                  <p><strong>Two coats recommended:</strong> Exterior surfaces need two coats for proper weather protection.</p>
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
      onClick={() => printCalculation('Exterior Paint Calculator')}
      className="copy-calc-btn flex-1"
    >
      🖨️ Print Results
    </button>
  </div>
</div>
            
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200 text-center text-sm text-gray-600">
          <p>
            <strong>Based on professional industry standards</strong> from PCA (Painting Contractors Association) 
            and MPI (Master Painters Institute). Calculations account for surface porosity, texture, and application method.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExteriorPaintCalculator;