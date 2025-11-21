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
import { trackCalculation } from '@/utils/tracking';
import { trackCalculatorInteraction } from '@/utils/buttonTracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';

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
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');
  const resultsRef = useRef(null);

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

  // Format options helper
  const formatOptions = (optionsObj) => {
    return Object.entries(optionsObj).map(([value, data]) => ({
      value,
      label: data.name || data
    }));
  };

  // Roof complexity options
  const complexityOptions = [
    { value: 'simple', label: 'Simple Gable (10% waste)' },
    { value: 'gable', label: 'Standard Gable with Valleys (10% waste)' },
    { value: 'hip', label: 'Hip Roof (15% waste)' },
    { value: 'complex', label: 'Complex Hip/Valley (15% waste)' },
    { value: 'highly_complex', label: 'Highly Complex (20% waste)' }
  ];

  // Shingle type options
  const shingleOptions = [
    { value: '3-tab', label: '3-Tab Shingles (3 bundles/sq)' },
    { value: 'architectural', label: 'Architectural Shingles (3 bundles/sq)' },
    { value: 'luxury-belmont', label: 'Luxury - CertainTeed Belmont (4 bundles/sq)' },
    { value: 'luxury-grand-manor', label: 'Luxury - Grand Manor (5 bundles/sq)' }
  ];

  // Underlayment options
  const underlaymentOptions = [
    { value: 'felt15', label: '#15 Felt (400 sq ft/roll)' },
    { value: 'felt30', label: '#30 Felt (200 sq ft/roll)' },
    { value: 'synthetic', label: 'Synthetic (1,000 sq ft/roll)' }
  ];

  // Wind zone options
  const windZoneOptions = [
    { value: 'standard', label: 'Standard (<110 mph) - 4 nails/shingle' },
    { value: 'high', label: 'High Wind (≥110 mph) - 6 nails/shingle' }
  ];

  // Pitch options
  const pitchOptions = Object.keys(pitchMultipliers).map(pitch => ({
    value: pitch,
    label: `${pitch}/12 (Multiplier: ${pitchMultipliers[pitch]})`
  }));

  const validationRules = {
    roofLength: [
      CommonRules.unrealistic(10, 200, 'Roof length')
    ],
    roofWidth: [
      CommonRules.unrealistic(10, 200, 'Roof width')
    ],
    roofPitch: [
      {
        condition: (val) => parseFloat(val) < 2,
        message: 'Pitch <2:12 requires special low-slope roofing materials',
        type: ValidationTypes.WARNING
      },
      {
        condition: (val) => parseFloat(val) > 18,
        message: 'Steep pitch (>18:12) - consider safety equipment and access',
        type: ValidationTypes.INFO
      }
    ],
    ridgeLength: [
      {
        condition: (val, allVals) => {
          const ridge = parseFloat(val);
          const length = parseFloat(allVals.roofLength);
          return ridge > 0 && ridge > length * 1.5;
        },
        message: 'Ridge length exceeds roof length - please verify',
        type: ValidationTypes.WARNING
      }
    ],
    atticArea: [
      CommonRules.unrealistic(100, 10000, 'Attic area'),
      {
        condition: (val, allVals) => {
          const attic = parseFloat(val);
          const footprint = parseFloat(allVals.roofLength) * parseFloat(allVals.roofWidth);
          return attic > 0 && attic > footprint * 2;
        },
        message: 'Attic area exceeds roof footprint significantly - verify measurement',
        type: ValidationTypes.WARNING
      }
    ]
  };

  const getValues = () => ({
    roofLength,
    roofWidth,
    roofPitch,
    ridgeLength,
    atticArea
  });

  const { validate, ValidationDisplay } = useValidation(validationRules);

  // Handler functions
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
    trackCalculation('roofing', {
      roofLength: roofLength,
      roofWidth: roofWidth,
      roofPitch: roofPitch,
      roofComplexity: roofComplexity,
      shingleType: shingleType,
      underlaymentType: underlaymentType,
      windZone: windZone,
      coldClimate: coldClimate,
      atticArea: atticArea,
      ridgeLength: ridgeLength,
      hipLength: hipLength,
      valleyLength: valleyLength,
      includeRakeStarter: includeRakeStarter
    }, {
      footprint: footprint,
      actualRoofArea: actualRoofArea,
      totalWithWaste: totalWithWaste,
      squares: squares,
      wasteFactor: wasteFactor * 100,
      pitchMultiplier: pitchMultiplier,
      totalBundles: totalBundles,
      bundlesPerSquare: bundlesPerSquare,
      underlaymentRolls: underlaymentRolls,
      starterBundles: starterBundles,
      ridgeCapBundles: ridgeCapBundles,
      iceWaterRolls: iceWaterRolls,
      dripEdgePieces: dripEdgePieces,
      nailBoxes: nailBoxes,
      totalShingleNails: totalShingleNails,
      totalCapNails: totalCapNails,
      ridgeVentNeeded: adjustedRidgeVent,
      requiredNFA: requiredNFA
    });
    trackCalculatorInteraction.calculate('roofing', true);
  };

  const handleStartOver = () => {
    trackCalculatorInteraction.startOver('roofing');
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

  const handleCopyCalculation = async () => {
    trackCalculatorInteraction.copyResults('roofing');
    if (!showResults) return;
    
    // Prepare inputs
    const inputsData = {
      'Roof size': `${roofLength}' × ${roofWidth}'`,
      'Roof pitch': `${roofPitch}:12`,
      'Complexity': roofComplexity.replace('_', ' '),
      'Shingle type': shingleType.replace('_', ' ').replace('-', ' '),
      'Underlayment': underlaymentType.replace(/\d+/, ' $&').toUpperCase(),
      'Wind zone': windZone,
      'Cold climate': coldClimate ? 'Yes' : 'No',
      'Ridge length': `${ridgeLength} feet`,
      'Hip length': `${hipLength} feet`,
      'Valley length': `${valleyLength} feet`
    };
    
    // Prepare outputs
    const outputs = {
      'Roof footprint': `${footprint.toFixed(0)} sq ft`,
      'Actual roof area': `${actualRoofArea.toFixed(0)} sq ft`,
      'Area with waste': `${totalWithWaste.toFixed(0)} sq ft`,
      'Roofing squares': `${squares.toFixed(2)} squares`,
      'Shingle bundles': `${totalBundles} bundles (${bundlesPerSquare} per square)`,
      'Underlayment rolls': `${underlaymentRolls} rolls`,
      'Starter bundles': `${starterBundles} bundles`,
      'Ridge cap bundles': `${ridgeCapBundles} bundles`,
      'Drip edge pieces': `${dripEdgePieces} pieces (10ft)`,
      'Roofing nail boxes': `${nailBoxes} boxes (7200 nails/box)`
    };
    
    if (coldClimate && iceWaterRolls > 0) {
      outputs['Ice & water shield'] = `${iceWaterRolls} rolls`;
    }
    
    outputs['Ridge vent needed'] = `${adjustedRidgeVent} linear feet`;
    
    const note = `Pitch multiplier: ${pitchMultiplier.toFixed(3)}. Waste factor: ${(wasteFactor * 100).toFixed(0)}%. Calculations per NRCA standards and IRC/IBC codes.`;
    
    const success = await copyCalculation('Roofing Calculator', inputsData, outputs, note);
    
    if (success) {
      setCopyButtonText('✓ Copied!');
      setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
    } else {
      alert('Unable to copy. Please copy results manually.');
    }
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
            <h2 className="text-3xl font-bold mb-2">Professional Roofing Materials Calculator</h2>
            <p className="text-blue-100">Industry-standard calculations based on IRC, IBC, and manufacturer specifications</p>
          </div>

          <div className={`grid gap-6 p-6 ${showResults ? 'md:grid-cols-2' : 'md:grid-cols-1 max-w-3xl mx-auto'}`}>
            {/* Left Column - Inputs */}
            <div className="space-y-6">
              <SectionCard title="Roof Dimensions" variant="info">
                <InputGrid columns={1}>
                  <NumberInput
                    label="Length (feet)"
                    value={roofLength}
                    onChange={(value) => {
                      const newLength = Number(value);
                      setRoofLength(newLength);
                      setTimeout(() => validate(getValues()), 100);
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
                    unit="feet"
                    required={true}
                    fieldName="roofLength"
                  />

                  <NumberInput
                    label="Width (feet)"
                    value={roofWidth}
                    onChange={(value) => {
                      const newWidth = Number(value);
                      setRoofWidth(newWidth);
                      setTimeout(() => validate(getValues()), 100);
                      // Auto-update attic area to match footprint (user can override)
                      const newFootprint = roofLength * newWidth;
                      if (atticArea === 0 || atticArea === roofLength * roofWidth) {
                        setAtticArea(newFootprint);
                      }
                    }}
                    unit="feet"
                    required={true}
                    fieldName="roofWidth"
                  />

                  <SelectInput
                    label="Roof Pitch (X/12)"
                    value={roofPitch}
                    onChange={(value) => { setRoofPitch(Number(value)); setTimeout(() => validate(getValues()), 100); }}
                    options={pitchOptions}
                  />

                  <SelectInput
                    label="Roof Complexity"
                    value={roofComplexity}
                    onChange={(value) => {
                      const newComplexity = value;
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
                    options={complexityOptions}
                  />
                </InputGrid>
              </SectionCard>

              <SectionCard title="Material Specifications" variant="info">
                <InputGrid columns={1}>
                  <SelectInput
                    label="Shingle Type"
                    value={shingleType}
                    onChange={setShingleType}
                    options={shingleOptions}
                  />

                  <SelectInput
                    label="Underlayment Type"
                    value={underlaymentType}
                    onChange={setUnderlaymentType}
                    options={underlaymentOptions}
                  />

                  <SelectInput
                    label="Wind Zone"
                    value={windZone}
                    onChange={setWindZone}
                    options={windZoneOptions}
                  />

                  <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg">
                    <input
                      type="checkbox"
                      checked={coldClimate}
                      onChange={(e) => setColdClimate(e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="text-sm font-semibold text-slate-700 cursor-pointer">
                      Cold Climate (Ice & Water Shield Required)
                    </label>
                  </div>

                  <div className="flex items-center gap-2 p-3 border border-yellow-400 rounded-lg">
                    <input
                      type="checkbox"
                      checked={includeRakeStarter}
                      onChange={(e) => setIncludeRakeStarter(e.target.checked)}
                      className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-2 focus:ring-blue-500"
                    />
                    <label className="text-sm font-semibold text-slate-700 cursor-pointer">
                      Include Starter Strip at Rakes
                    </label>
                  </div>
                </InputGrid>
              </SectionCard>

              <SectionCard title="Ventilation (Required)" variant="info">
                <InputGrid columns={1}>
                  <NumberInput
                    label="Attic Floor Area (sq ft)"
                    value={atticArea}
                    onChange={(value) => { setAtticArea(Number(value)); setTimeout(() => validate(getValues()), 100); }}
                    unit="sq ft"
                    required={true}
                    fieldName="atticArea"
                  />
                </InputGrid>
                <p className="text-xs text-slate-500 mt-2">Required for IRC ventilation compliance. Typically equals footprint (length × width).</p>
              </SectionCard>

              <SectionCard title={roofComplexity === 'simple' ? 'Ridge Details' : 'Ridge, Hip & Valley Details'} variant="info">
                <InputGrid columns={1}>
                  <NumberInput
                    label="Ridge Length (feet)"
                    value={ridgeLength}
                    onChange={(value) => { setRidgeLength(Number(value)); setTimeout(() => validate(getValues()), 100); }}
                    unit="feet"
                    required={true}
                    fieldName="ridgeLength"
                  />
                  <p className="text-xs text-slate-500 -mt-2">All roofs have a ridge. For simple gable roofs, typically equals roof length.</p>

                  {/* Only show hip length for hip, complex, and highly complex roofs */}
                  {(roofComplexity === 'hip' || roofComplexity === 'complex' || roofComplexity === 'highly_complex') && (
                    <NumberInput
                      label="Hip Length (feet) - Optional"
                      value={hipLength}
                      onChange={(value) => setHipLength(Number(value))}
                      unit="feet"
                      required={false}
                      fieldName="hipLength"
                    />
                  )}

                  {/* Only show valley length for roofs with valleys (not simple gable) */}
                  {roofComplexity !== 'simple' && (
                    <NumberInput
                      label="Valley Length (feet) - Optional"
                      value={valleyLength}
                      onChange={(value) => setValleyLength(Number(value))}
                      unit="feet"
                      required={false}
                      fieldName="valleyLength"
                    />
                  )}
                </InputGrid>
              </SectionCard>

              <CalculateButtons
                onCalculate={handleCalculate}
                onStartOver={handleStartOver}
                showStartOver={showResults}
              />
            </div>

            {/* Right Column - Results */}
            {showResults ? (
              <div ref={resultsRef} className="space-y-6">
                {/* Calculation Summary */}
                <SectionCard title="Calculation Summary" variant="info">
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
                </SectionCard>

                {/* Materials Required */}
                <SectionCard title="Materials Required" variant="default">
                  <InputGrid columns={2}>
                    <MaterialCard
                      title="Shingles"
                      value={squares.toFixed(2)}
                      unit="squares"
                      subtitle={`${totalBundles} bundles`}
                      note={`${bundlesPerSquare} bundles per square`}
                      color="green"
                    />

                    <MaterialCard
                      title="Underlayment"
                      value={underlaymentRolls}
                      unit="rolls"
                      subtitle={`${underlaymentCoverage} sq ft/roll`}
                      note="Includes 10% waste for overlaps"
                      color="purple"
                    />

                    <MaterialCard
                      title="Starter Strips"
                      value={starterBundles}
                      unit="bundles"
                      subtitle={`${perimeterLength.toFixed(0)} linear ft`}
                      note={includeRakeStarter ? 'eaves + rakes' : 'eaves only'}
                      color="orange"
                    />

                    <MaterialCard
                      title="Ridge Cap"
                      value={ridgeCapBundles}
                      unit="bundles"
                      subtitle={`${totalRidgeHip.toFixed(0)} linear ft`}
                      note="ridge + hip + valley"
                      color="red"
                    />

                    {coldClimate && (
                      <MaterialCard
                        title="Ice & Water Shield"
                        value={iceWaterRolls}
                        unit="rolls"
                        subtitle="225 sq ft per roll"
                        note={`eaves${valleyLength > 0 ? ' + valleys' : ''}`}
                        color="blue"
                      />
                    )}

                    <MaterialCard
                      title="Drip Edge"
                      value={dripEdgePieces}
                      unit="pieces"
                      subtitle="10 ft each"
                      note={`${totalPerimeter.toFixed(0)} linear ft total`}
                      color="teal"
                    />

                    <MaterialCard
                      title="Roofing Nails"
                      value={nailBoxes}
                      unit="boxes"
                      subtitle={`${totalShingleNails.toLocaleString()} nails`}
                      note={`${nailsPerSquare}/sq · 7,200/box`}
                      color="yellow"
                    />

                    <MaterialCard
                      title="Ridge Vent"
                      value={adjustedRidgeVent}
                      unit="linear ft"
                      subtitle={`${exhaustNFA.toFixed(0)} sq in NFA`}
                      note="IRC 1:150 ratio required"
                      color="indigo"
                    />
                  </InputGrid>
                </SectionCard>

                {/* Technical Notes */}
                <SectionCard title="Technical Notes" variant="warning">
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>All calculations comply with IRC/IBC building codes</li>
                    <li>Waste factors based on roof complexity per NRCA guidelines</li>
                    <li>High wind zones (≥110 mph) require 6-nail pattern + hand-sealing</li>
                    <li>Ice & water shield extends 24" inside exterior wall per IRC R905.2.8.2</li>
                    <li>Ridge vent assumes 18 sq in NFA per linear foot (industry standard)</li>
                    <li>Ventilation calculations assume 1:150 ratio per IRC R806</li>
                  </ul>
                </SectionCard>

                <ValidationDisplay />

                <ResultsButtons
                  onCopy={handleCopyCalculation}
                  onPrint={() => {
                    trackCalculatorInteraction.print('roofing');
                    printCalculation('Roofing Calculator');
                  }}
                  copyButtonText={copyButtonText}
                />
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
      <FAQSection calculatorId="roofing-calculator" />
    </div>
  );
};

export default RoofingMaterialsCalculator;