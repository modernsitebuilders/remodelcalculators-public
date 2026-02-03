'use client';

import React, { useState, useMemo, useRef } from 'react';
import { Calculator, Info, AlertCircle } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { trackCalculatorInteraction } from '@/utils/buttonTracking';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';
import { useCalculatorTracking, useCalculatorFlow } from '@/utils/tracking-hooks';
import FlagModal from '@/components/FlagModal'; // ← ADDED IMPORT
import { 
  NumberInput,
  SelectInput,
  MaterialCard,
  SectionCard,
  InputGrid,
  CalculateButtons,
  ResultsButtons
} from '@/components/calculator';

const MulchCalculator = () => {
  const { trackField, trackAction } = useCalculatorTracking('mulch-calculator');
  useCalculatorFlow('mulch-calculator');

  // State management
  const [shape, setShape] = useState('rectangle');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [diameter, setDiameter] = useState('');
  const [depth, setDepth] = useState('3');
  const [materialType, setMaterialType] = useState('wood-chips');
  const [purchaseFormat, setPurchaseFormat] = useState('bulk');
  const [bagSize, setBagSize] = useState('2');
  const [includeWaste, setIncludeWaste] = useState(true);
  const [customDepth, setCustomDepth] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');
  const resultsRef = useRef(null);

  // Material weights (lbs per cubic yard)
  const materialWeights = {
    'wood-chips': 700,
    'shredded-bark': 700,
    'bark-nuggets': 700,
    'pine-needles': 1375,
    'straw': 750,
    'compost': 1300,
    'rubber-mulch': 1250,
    'pea-gravel': 2700,
    'river-rock': 2100,
    'lava-rock': 650
  };

  // Depth presets
  const depthPresets = [
    { value: '1', label: '1" - Compost/Fine Mulch' },
    { value: '2', label: '2" - Flower Beds' },
    { value: '3', label: '3" - Trees & Shrubs' },
    { value: '4', label: '4" - Pathways' },
    { value: 'custom', label: 'Custom Depth' }
  ];

  // Material options
  const materialOptions = [
    { value: 'wood-chips', label: 'Wood Chips (600 lbs/yard)' },
    { value: 'shredded-bark', label: 'Shredded Bark (506 lbs/yard)' },
    { value: 'bark-nuggets', label: 'Bark Nuggets (700 lbs/yard)' },
    { value: 'pine-needles', label: 'Pine Needles (1,375 lbs/yard)' },
    { value: 'straw', label: 'Straw (600 lbs/yard)' },
    { value: 'compost', label: 'Compost (1,300 lbs/yard)' },
    { value: 'rubber-mulch', label: 'Rubber Mulch (1,250 lbs/yard)' },
    { value: 'pea-gravel', label: 'Pea Gravel (2,700 lbs/yard)' },
    { value: 'river-rock', label: 'River Rock (1,250 lbs/yard)' },
    { value: 'lava-rock', label: 'Lava Rock (800 lbs/yard)' }
  ];

  // Bag size options
  const bagSizeOptions = [
    { value: '2', label: '2 cu ft (13.5 bags per yard)' },
    { value: '3', label: '3 cu ft (9 bags per yard)' },
    { value: '1.5', label: '1.5 cu ft (18 bags per yard)' }
  ];

  const validationRules = {
    length: [
      CommonRules.unrealistic(1, 500, 'Area length'),
      {
        condition: (val) => parseFloat(val) > 200,
        message: 'Large area (>200 feet) - consider bulk delivery',
        type: ValidationTypes.INFO
      }
    ],
    width: [
      CommonRules.unrealistic(1, 500, 'Area width')
    ],
    diameter: [
      CommonRules.unrealistic(1, 200, 'Circular area diameter')
    ],
    depth: [
      {
        condition: (val) => {
          const d = val === 'custom' ? parseFloat(customDepth) : parseFloat(val);
          return d > 0 && d < 1;
        },
        message: 'Mulch depth <1" is too shallow - minimum 2" recommended',
        type: ValidationTypes.WARNING
      },
      {
        condition: (val) => {
          const d = val === 'custom' ? parseFloat(customDepth) : parseFloat(val);
          return d > 6;
        },
        message: 'Mulch depth >6" may suffocate plant roots',
        type: ValidationTypes.ERROR
      }
    ],
    customDepth: [
      {
        condition: (val) => depth === 'custom' && parseFloat(val) > 8,
        message: 'Excessive mulch depth (>8") - verify measurement',
        type: ValidationTypes.WARNING
      }
    ]
  };

  const getValues = () => ({
    length,
    width,
    diameter,
    depth,
    customDepth
  });

  const { validate, ValidationDisplay } = useValidation(validationRules);

  // Calculate square footage based on shape
  const squareFootage = useMemo(() => {
    if (shape === 'rectangle') {
      const l = parseFloat(length) || 0;
      const w = parseFloat(width) || 0;
      return l * w;
    } else if (shape === 'circle') {
      const d = parseFloat(diameter) || 0;
      const radius = d / 2;
      return Math.PI * radius * radius;
    }
    return 0;
  }, [shape, length, width, diameter]);

  // Get actual depth value
  const actualDepth = useMemo(() => {
    if (depth === 'custom') {
      return parseFloat(customDepth) || 0;
    }
    return parseFloat(depth) || 0;
  }, [depth, customDepth]);

  // Calculate cubic yards needed
  const cubicYards = useMemo(() => {
    if (squareFootage === 0 || actualDepth === 0) return 0;
    const baseYards = (squareFootage * actualDepth) / 324;
    return includeWaste ? baseYards * 1.075 : baseYards;
  }, [squareFootage, actualDepth, includeWaste]);

  // Calculate cubic feet
  const cubicFeet = useMemo(() => {
    return cubicYards * 27;
  }, [cubicYards]);

  // Calculate bags needed
  const bagsNeeded = useMemo(() => {
    const size = parseFloat(bagSize);
    return Math.ceil(cubicFeet / size);
  }, [cubicFeet, bagSize]);

  // Calculate weight
  const estimatedWeight = useMemo(() => {
    const weightPerYard = materialWeights[materialType] || 700;
    return Math.round(cubicYards * weightPerYard);
  }, [cubicYards, materialType]);

  // Coverage at 1 inch
  const coverageAtOneInch = useMemo(() => {
    return Math.round(cubicYards * 324);
  }, [cubicYards]);

  // Truck load estimate
  const truckLoads = useMemo(() => {
    return (cubicYards / 2.5).toFixed(1);
  }, [cubicYards]);

  const hasResults = squareFootage > 0 && actualDepth > 0;

  // Handler functions
  const handleCalculate = () => {
    if (hasResults) {
      setShowResults(true);
      
      // Auto-scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }, 100);

      // Track the calculation
      trackCalculation('mulch', {
        shape: shape,
        length: shape === 'rectangle' ? length : null,
        width: shape === 'rectangle' ? width : null,
        diameter: shape === 'circle' ? diameter : null,
        depth: depth === 'custom' ? customDepth : depth,
        materialType: materialType,
        purchaseFormat: purchaseFormat,
        bagSize: purchaseFormat === 'bagged' ? bagSize : null,
        includeWaste: includeWaste
      }, {
        squareFootage: squareFootage,
        actualDepth: actualDepth,
        cubicFeet: cubicFeet,
        cubicYards: cubicYards,
        bagsNeeded: purchaseFormat === 'bagged' ? bagsNeeded : null,
        estimatedWeight: estimatedWeight,
        coverageAtOneInch: coverageAtOneInch,
        truckLoads: truckLoads,
        wasteFactor: includeWaste ? 5 : 0
      });
    }
    trackCalculatorInteraction.calculate('mulch', true);
  };

  const handleReset = () => {
    trackAction('reset');
    trackCalculatorInteraction.startOver('mulch');
    setLength('');
    setWidth('');
    setDiameter('');
    setDepth('3');
    setMaterialType('wood-chips');
    setPurchaseFormat('bulk');
    setBagSize('2');
    setIncludeWaste(true);
    setCustomDepth('');
    setShowResults(false);
  };

  const handleCopyCalculation = async () => {
    trackAction('copy');
    if (!showResults || !hasResults) return;
    trackCalculatorInteraction.copyResults('mulch');
    
    const inputs = {
      'Shape': shape === 'rectangle' ? 'Rectangle' : 'Circle'
    };
    
    if (shape === 'rectangle') {
      inputs['Length'] = `${length} feet`;
      inputs['Width'] = `${width} feet`;
    } else {
      inputs['Diameter'] = `${diameter} feet`;
    }
    
    inputs['Depth'] = `${actualDepth} inches`;
    inputs['Material type'] = materialType.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
    inputs['Purchase format'] = purchaseFormat === 'bulk' ? 'Bulk (cubic yards)' : 'Bagged';
    
    const outputs = {
      'Area covered': `${squareFootage.toFixed(1)} square feet`,
      'Cubic yards needed': `${cubicYards.toFixed(2)} cubic yards`,
      'Cubic feet': `${cubicFeet.toFixed(1)} cubic feet`
    };
    
    if (purchaseFormat === 'bags') {
      outputs['Bags needed'] = `${bagsNeeded} bags (${bagSize} cu ft each)`;
    }
    
    outputs['Estimated weight'] = `${estimatedWeight.toLocaleString()} lbs (${(estimatedWeight / 2000).toFixed(2)} tons)`;
    outputs['Truck loads'] = `~${truckLoads} loads`;
    
    const note = includeWaste 
      ? 'Includes 5% waste factor. Keep mulch 3-6 inches from plant stems.' 
      : 'No waste factor applied. Consider adding 5% for irregular areas.';
    
    const success = await copyCalculation('Mulch Calculator', inputs, outputs, note);
    
    if (success) {
      setCopyButtonText('✓ Copied!');
      setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
    } else {
      alert('Unable to copy. Please copy results manually.');
    }
  };

  // Capture current calculator state for flag report
  const captureInputs = () => ({
    shape,
    length,
    width,
    diameter,
    depth,
    materialType,
    purchaseFormat,
    bagSize,
    includeWaste,
    customDepth,
    squareFootage,
    actualDepth,
    cubicYards,
    cubicFeet,
    bagsNeeded,
    estimatedWeight,
    coverageAtOneInch,
    truckLoads,
    hasResults,
    showResults
  });

  return ( 
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SectionCard>
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="w-8 h-8 text-green-600" />
            <h2 className="text-3xl font-bold text-gray-800">Mulch Calculator</h2>
          </div>
          <p className="text-gray-600">Calculate how much mulch you need for your landscaping project</p>
        </SectionCard>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <SectionCard title="Project Details">
            {/* Shape Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Area Shape</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setShape('rectangle');
                    trackField('shape', 'rectangle');
                  }}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    shape === 'rectangle'
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Rectangle/Square
                </button>
                <button
                  onClick={() => {
                    setShape('circle');
                    trackField('shape', 'circle');
                  }}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    shape === 'circle'
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Circle
                </button>
              </div>
            </div>

            {/* Dimensions */}
            {shape === 'rectangle' ? (
              <InputGrid columns={2} className="mb-6">
                <NumberInput
                  label="Length"
                  value={length}
                  onChange={(value) => { 
                    setLength(value); 
                    trackField('length', value);
                    setTimeout(() => validate(getValues()), 100); 
                  }}
                  unit="feet"
                  required={true}
                  fieldName="length"
                />
                <NumberInput
                  label="Width"
                  value={width}
                  onChange={(value) => { 
                    setWidth(value); 
                    trackField('width', value);
                    setTimeout(() => validate(getValues()), 100); 
                  }}
                  unit="feet"
                  required={true}
                  fieldName="width"
                />
              </InputGrid>
            ) : (
              <div className="mb-6">
                <NumberInput
                  label="Diameter"
                  value={diameter}
                  onChange={(value) => { 
                    setDiameter(value); 
                    trackField('diameter', value);
                    setTimeout(() => validate(getValues()), 100); 
                  }}
                  unit="feet"
                  required={true}
                  fieldName="diameter"
                />
              </div>
            )}

            {/* Depth Selection */}
            <div className="mb-6">
              <SelectInput
                label="Mulch Depth"
                value={depth}
                onChange={(value) => { 
                  setDepth(value); 
                  trackField('depth', value);
                  setTimeout(() => validate(getValues()), 100); 
                }}
                options={depthPresets}
              />
              {depth === 'custom' && (
                <NumberInput
                  label="Custom Depth"
                  value={customDepth}
                  onChange={(value) => { 
                    setCustomDepth(value); 
                    trackField('customDepth', value);
                    setTimeout(() => validate(getValues()), 100); 
                  }}
                  unit="inches"
                  required={true}
                  fieldName="customDepth"
                  className="mt-2"
                />
              )}
            </div>

            {/* Material Type */}
            <div className="mb-6">
              <SelectInput
                label="Material Type"
                value={materialType}
                onChange={(value) => {
                  setMaterialType(value);
                  trackField('materialType', value);
                }}
                options={materialOptions}
              />
            </div>

            {/* Purchase Format */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Format</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => {
                    setPurchaseFormat('bulk');
                    trackField('purchaseFormat', 'bulk');
                  }}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    purchaseFormat === 'bulk'
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Bulk (Cubic Yards)
                </button>
                <button
                  onClick={() => {
                    setPurchaseFormat('bags');
                    trackField('purchaseFormat', 'bags');
                  }}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    purchaseFormat === 'bags'
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Bags
                </button>
              </div>
            </div>

            {/* Bag Size (if bags selected) */}
            {purchaseFormat === 'bags' && (
              <div className="mb-6">
                <SelectInput
                  label="Bag Size"
                  value={bagSize}
                  onChange={(value) => {
                    setBagSize(value);
                    trackField('bagSize', value);
                  }}
                  options={bagSizeOptions}
                />
              </div>
            )}

            {/* Include Waste Factor */}
            <div className="flex items-center gap-2 p-3 border-2 border-yellow-400 rounded-lg mb-6">
              <input
                type="checkbox"
                id="waste"
                checked={includeWaste}
                onChange={(e) => {
                  setIncludeWaste(e.target.checked);
                  trackField('includeWaste', e.target.checked);
                }}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="waste" className="text-sm text-gray-700">
                Include 7.5% waste factor (recommended)
              </label>
            </div>

            {/* Action Buttons */}
            <CalculateButtons
              onCalculate={handleCalculate}
              onStartOver={handleReset}
              showStartOver={showResults}
              calculateDisabled={!hasResults}
            />
          </SectionCard>

          {/* Results Section */}
          <div>
            {showResults && hasResults ? (
              <div ref={resultsRef} className="space-y-4">
                {/* Main Results Card */}
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg shadow-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-4">Your Results</h2>
                  
                  <div className="space-y-4">
                    <MaterialCard
                      title="Total Volume Needed"
                      value={cubicYards.toFixed(2)}
                      unit="cubic yards"
                      note={`${cubicFeet.toFixed(1)} cubic feet`}
                      color="green"
                    />

                    {purchaseFormat === 'bags' && (
                      <MaterialCard
                        title="Bags Required"
                        value={bagsNeeded.toString()}
                        unit="bags"
                        note={`${bagSize} cu ft bags`}
                        color="green"
                      />
                    )}

                    <MaterialCard
                      title="Estimated Weight"
                      value={estimatedWeight.toLocaleString()}
                      unit="lbs"
                      note={`${(estimatedWeight / 2000).toFixed(2)} tons`}
                      color="green"
                    />
                  </div>
                </div>

                {/* Additional Details Card */}
                <SectionCard title="Project Details">
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Coverage Area:</span>
                      <span className="font-semibold text-gray-800">{squareFootage.toFixed(1)} sq ft</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Mulch Depth:</span>
                      <span className="font-semibold text-gray-800">{actualDepth} inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Coverage at 1":</span>
                      <span className="font-semibold text-gray-800">{coverageAtOneInch} sq ft</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Pickup Truck Loads:</span>
                      <span className="font-semibold text-gray-800">~{truckLoads} loads</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Waste Factor:</span>
                      <span className="font-semibold text-gray-800">{includeWaste ? 'Included' : 'Not included'}</span>
                    </div>
                  </div>
                </SectionCard>

                {/* Tips Card */}
                <SectionCard variant="info" icon={Info} title="Installation Tips">
                  <ul className="text-sm space-y-1">
                    <li>• Keep mulch 3-6 inches away from tree trunks and plant stems</li>
                    <li>• Create a "donut" shape around trees, not a "volcano"</li>
                    <li>• Water after application to help mulch settle</li>
                    <li>• Check vehicle payload capacity before hauling</li>
                  </ul>
                </SectionCard>

                <ValidationDisplay />

                {/* Action Buttons */}
                <SectionCard>
                  <ResultsButtons
                    onCopy={handleCopyCalculation}
                    onPrint={() => {
                      printCalculation('Mulch Calculator');
                      trackAction('print');
                    }}
                    copyButtonText={copyButtonText}
                  />
                </SectionCard>

                {/* Weight Warning */}
                {estimatedWeight > 2000 && (
                  <SectionCard variant="warning" icon={AlertCircle} title="Weight Consideration">
                    <p className="text-sm">
                      This is a heavy load. Consider delivery service or multiple trips. 
                      Most pickup trucks safely handle 1,000-1,500 lbs.
                    </p>
                  </SectionCard>
                )}
              </div>
            ) : (
              <SectionCard className="text-center">
                <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Enter Your Dimensions</h3>
                <p className="text-gray-500">Fill in the project details to calculate your mulch needs</p>
              </SectionCard>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <SectionCard title="Depth Guidelines by Application">
          <InputGrid columns={2}>
            <div>
              <strong className="text-gray-700">Fine Mulch (1-2"):</strong>
              <p className="text-gray-600">Compost, grass clippings, pine needles</p>
            </div>
            <div>
              <strong className="text-gray-700">Flower Beds (2-3"):</strong>
              <p className="text-gray-600">Most flowering plants and perennials</p>
            </div>
            <div>
              <strong className="text-gray-700">Trees & Shrubs (2-4"):</strong>
              <p className="text-gray-600">Around woody plants, extend to drip line</p>
            </div>
            <div>
              <strong className="text-gray-700">Pathways (3-4"):</strong>
              <p className="text-gray-600">Wood chips for walking areas</p>
            </div>
          </InputGrid>
        </SectionCard>

        {/* Add FlagModal component */}
        <FlagModal 
          calculatorName="Mulch Calculator"
          captureInputs={captureInputs}
        />
      </div>
      <FAQSection calculatorId="mulch-calculator" />
    </div>
  );
};

export default MulchCalculator;