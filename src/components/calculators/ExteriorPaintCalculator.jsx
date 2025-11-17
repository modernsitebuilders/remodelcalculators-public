'use client';
import Link from 'next/link';
import React, { useState, useMemo, useRef } from 'react';
import { Info, Home, Droplets } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { trackCalculatorInteraction } from '@/utils/buttonTracking';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';
import {
  NumberInput,
  SelectInput,
  MaterialCard,
  SectionCard,
  InputGrid,
  CalculateButtons,
  ResultsButtons
} from '@/components/calculator';

const ExteriorPaintCalculator = () => {
  const [inputs, setInputs] = useState({
    squareFeet: '',
    surfaceType: 'vinyl',
    surfaceCondition: 'good',
    applicationMethod: 'roll',
    coats: 2,
    needsPrimer: true
  });

  const [showResults, setShowResults] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');
  const resultsRef = useRef(null);

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

  // Format options for SelectInput
  const formatOptions = (optionsObj) => {
    return Object.entries(optionsObj).map(([value, data]) => ({
      value,
      label: `${data.name} (${data.coverage} sq ft/gal)`
    }));
  };

  const surfaceConditionOptions = [
    { value: 'excellent', label: 'Mostly Sealed - minimal bare spots exposed' },
    { value: 'good', label: 'Mostly Sealed - some bare spots (+10% paint)' },
    { value: 'fair', label: 'Partially Exposed - moderate bare substrate (+25% paint)' },
    { value: 'poor', label: 'Heavily Exposed - extensive bare substrate (+50% paint)' }
  ];

  const applicationMethodOptions = [
    { value: 'roll', label: 'Brush/Roller (10% waste)' },
    { value: 'spray_hvlp', label: 'HVLP Spray (25% waste, 50% faster)' },
    { value: 'spray_airless', label: 'Airless Spray (35% waste, 70% faster)' }
  ];

  const coatsOptions = [
    { value: 2, label: '2 Coats (Recommended for exterior)' },
    { value: 3, label: '3 Coats' }
  ];

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
    
    // Auto-scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
    
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
    trackCalculatorInteraction.calculate('exterior-paint', true);
  };

  const validationRules = {
    squareFeet: [
      CommonRules.unrealistic(100, 20000, 'Surface area'),
      {
        condition: (val) => parseFloat(val) > 10000,
        message: 'Large project (>10,000 sq ft) - consider professional spraying',
        type: ValidationTypes.INFO
      }
    ]
  };

  const getValues = () => ({
    squareFeet: inputs.squareFeet
  });

  const { validate, ValidationDisplay } = useValidation(validationRules);

  const handleReset = () => {
    trackCalculatorInteraction.startOver('exterior-paint');
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
    trackCalculatorInteraction.copyResults('exterior-paint');
    
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
      'Paint gallons needed': `${roundUpToTenth(calculations.totalPaint).toFixed(1)} gallons`,
      'Paint to purchase': `${roundUpToWholeGallon(roundUpToTenth(calculations.totalPaint))} gallons`,
      'Primer gallons needed': `${roundUpToTenth(calculations.primerGallons).toFixed(1)} gallons`,
      'Primer to purchase': `${roundUpToWholeGallon(roundUpToTenth(calculations.primerGallons))} gallons`
    };
    
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
          <SectionCard title="Project Details" icon={Home}>
            <InputGrid columns={1}>
              {/* Square Footage */}
              <NumberInput
                label="Paintable Surface Area (sq ft)"
                value={inputs.squareFeet}
                onChange={(value) => {
                  setInputs({...inputs, squareFeet: Number(value)});
                  setTimeout(() => validate(getValues()), 100);
                }}
                unit="sq ft"
                required={true}
                fieldName="squareFeet"
                helperText="Measure: (Perimeter × Height) + gables + soffits. Many pros don't subtract doors/windows."
              />

              {/* Surface Type */}
              <SelectInput
                label="Surface Type"
                value={inputs.surfaceType}
                onChange={(value) => setInputs({...inputs, surfaceType: value})}
                options={formatOptions(surfaceTypes)}
              />
              <p className="text-xs text-gray-600 -mt-4 bg-gray-50 p-2 rounded">
                {surfaceTypes[inputs.surfaceType].description}
              </p>

              {/* Surface Status - only shown for porous surfaces */}
              {inputs.surfaceType !== 'vinyl' && inputs.surfaceType !== 'aluminum' && (
                <SelectInput
                  label="Surface Status (After Prep)"
                  value={inputs.surfaceCondition}
                  onChange={(value) => setInputs({...inputs, surfaceCondition: value})}
                  options={surfaceConditionOptions}
                  helperText="More exposed bare wood/masonry = more paint absorption"
                />
              )}

              {/* Application Method */}
              <SelectInput
                label="Application Method"
                value={inputs.applicationMethod}
                onChange={(value) => setInputs({...inputs, applicationMethod: value})}
                options={applicationMethodOptions}
                icon={Droplets}
              />
              {inputs.applicationMethod !== 'roll' && (
                <div className="mt-2 bg-orange-50 border border-orange-200 rounded p-3">
                  <p className="text-xs text-orange-800">
                    ⚠️ <strong>Spray Warning:</strong> Spraying uses {inputs.applicationMethod === 'spray_airless' ? '35%' : '25%'} 
                    more paint due to overspray but completes 50-70% faster than rolling.
                  </p>
                </div>
              )}

              {/* Coats */}
              <SelectInput
                label="Number of Coats"
                value={inputs.coats}
                onChange={(value) => setInputs({...inputs, coats: Number(value)})}
                options={coatsOptions}
                helperText="Note: Exterior projects almost always require 2 coats for proper weather protection"
              />

              {/* Primer */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-yellow-400">
                <input
                  type="checkbox"
                  checked={inputs.needsPrimer}
                  onChange={(e) => setInputs({...inputs, needsPrimer: e.target.checked})}
                  className="w-5 h-5 text-blue-600"
                />
                <span className="text-sm font-semibold text-gray-700">
                  Needs Primer (200-300 sq ft/gallon coverage)
                </span>
              </div>
              <p className="text-xs text-gray-500 -mt-2 ml-3">
                Always required for bare wood, masonry, and metal. Can be skipped on previously 
                painted surfaces in good condition with same/darker colors.
              </p>

              <ValidationDisplay />
            </InputGrid>

            {/* Calculate Button */}
            <CalculateButtons
              onCalculate={handleCalculate}
              onStartOver={handleReset}
              showStartOver={showResults}
            />
          </SectionCard>

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
            <div ref={resultsRef} className="space-y-6">
              <div className="flex justify-between items-center border-b-2 border-green-500 pb-2">
                <h2 className="text-2xl font-bold text-gray-800">
                  Material Estimate
                </h2>
              </div>

              {/* Paint Requirements */}
              <MaterialCard
                title="Paint Required"
                value={roundUpToWholeGallon(roundUpToTenth(calculations.firstCoatGallons) + roundUpToTenth(calculations.subsequentCoatsGallons))}
                unit="gallons"
                subtitle="Purchase quantity"
                note="Rounded up to nearest whole gallon"
                color="blue"
              >
                <div className="space-y-3 mt-4">
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
                  <div className="text-sm text-gray-600 bg-white rounded p-2">
                    <div>Effective coverage: {Math.round(calculations.effectiveCoverage)} sq ft/gallon</div>
                    <div>Includes {calculations.wastePercentage}% waste factor</div>
                    <div className="text-xs italic mt-1">* All quantities rounded up to ensure sufficient paint</div>
                  </div>
                </div>
              </MaterialCard>

              {/* Primer Requirements */}
              {inputs.needsPrimer && (
                <MaterialCard
                  title="Primer Required"
                  value={roundUpToWholeGallon(roundUpToTenth(calculations.primerGallons))}
                  unit="gallons"
                  subtitle="Purchase quantity"
                  note="Rounded up to nearest whole gallon"
                  color="purple"
                >
                  <div className="space-y-3 mt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-800 font-semibold">Calculated Total:</span>
                      <span className="text-2xl font-bold text-purple-700">
                        {roundUpToTenth(calculations.primerGallons)} gallons
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Exterior primer covers 25-40% less area than topcoat (includes {calculations.wastePercentage}% waste)
                    </p>
                  </div>
                </MaterialCard>
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
              
              {/* Copy and Print Buttons */}
              <ResultsButtons
                onCopy={handleCopyCalculation}
                onPrint={() => printCalculation('Exterior Paint Calculator')}
                copyButtonText={copyButtonText}
              />
            </div>
          )}
        </div>

        {/* Helpful Guides Section */}
        {showResults && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">Calculation Standards:</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Industry coverage: 250-400 sq ft/gal (varies by surface)</li>
                <li>• Primer coverage: 200-300 sq ft/gal</li>
                <li>• Rough surfaces reduce coverage 30-50%</li>
                <li>• PCA & MPI professional standards</li>
                <li>• Includes waste factors by application method</li>
              </ul>
            </div>
            
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">📚 Helpful Guides:</h3>
              <ul className="text-xs space-y-1.5">
                <li>
                  <Link href="/blog/measure-room-square-footage" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    🎓 How to Measure Your Exterior
                  </Link>
                  <span className="text-gray-500 ml-1">(Start here!)</span>
                </li>
                <li>
                  <Link href="/blog/when-you-need-primer" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    When You Actually Need Primer
                  </Link>
                </li>
                <li>
                  <Link href="/blog/paint-sheen-guide" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Choosing the Right Paint Sheen
                  </Link>
                </li>
                <li>
                  <Link href="/blog/textured-wall-painting" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Painting Textured Surfaces
                  </Link>
                </li>
                <li>
                  <Link href="/blog/dark-to-light-painting" className="text-blue-600 hover:text-blue-800 underline font-medium">
                    Dark to Light Color Changes
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 pt-6 border-t-2 border-gray-200 text-center text-sm text-gray-600">
          <p>
            <strong>Based on professional industry standards</strong> from PCA (Painting Contractors Association) 
            and MPI (Master Painters Institute). Calculations account for surface porosity, texture, and application method.
          </p>
        </div>
      </div>
      <FAQSection calculatorId="exterior-paint-calculator" />
    </div>
  );
};

export default ExteriorPaintCalculator;