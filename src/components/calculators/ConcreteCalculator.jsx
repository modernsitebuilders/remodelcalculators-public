'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, Info, Package, Ruler, AlertCircle } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { trackCalculatorInteraction } from '@/utils/buttonTracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';
import { 
  NumberInput, 
  SelectInput, 
  MaterialCard,
  CalculateButtons,
  ResultsButtons,
  SectionCard,
  InputGrid
} from '@/components/calculator';

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
  const [postCount, setPostCount] = useState('');
  
  // Stair Dimensions
  const [stairWidth, setStairWidth] = useState('');
  const [riserHeight, setRiserHeight] = useState('7');
  const [treadDepth, setTreadDepth] = useState('11');
  const [numberOfSteps, setNumberOfSteps] = useState('');
  
  // Wall Dimensions
  const [wallLength, setWallLength] = useState('');
  const [wallHeight, setWallHeight] = useState('');
  const [wallThickness, setWallThickness] = useState('8');
  
  // Column Dimensions
  const [columnDiameter, setColumnDiameter] = useState('12');
  const [columnHeight, setColumnHeight] = useState('');
  const [columnCount, setColumnCount] = useState('');
  
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

  // Validation rules for concrete calculator
  const validationRules = {
    slabLength: [
      CommonRules.unrealistic(1, 100, 'Slab length'),
      {
        condition: (val) => parseFloat(val) > 50,
        message: 'Large slab length (>50 feet) - consider expansion joints per ACI 302',
        type: ValidationTypes.INFO
      }
    ],
    slabWidth: [
      CommonRules.unrealistic(1, 100, 'Slab width')
    ],
    slabThickness: [
      {
        condition: (val) => parseFloat(val) > 0 && parseFloat(val) < 3.5,
        message: '⚠️ IRC requires 3.5" minimum thickness for residential slabs',
        type: ValidationTypes.ERROR
      },
      CommonRules.tooLarge(12, 'Slab thickness >12" is uncommon - please verify')
    ],
    footingWidth: [
      {
        condition: (val) => parseFloat(val) > 0 && parseFloat(val) < 12,
        message: '⚠️ IRC R403 requires 12" minimum width for footings',
        type: ValidationTypes.ERROR
      }
    ],
    footingDepth: [
      {
        condition: (val) => parseFloat(val) > 0 && parseFloat(val) < 12,
        message: '⚠️ IRC R403 requires 12" minimum depth for footings',
        type: ValidationTypes.ERROR
      }
    ],
    postDiameter: [
      CommonRules.unrealistic(6, 24, 'Post diameter')
    ],
    postDepth: [
      {
        condition: (val) => parseFloat(val) > 0 && parseFloat(val) < 24,
        message: 'Post depth <24" may not provide adequate support (1/3 rule recommended)',
        type: ValidationTypes.WARNING
      },
      CommonRules.tooLarge(72, 'Post depth >72" is uncommon - please verify')
    ],
    wallHeight: [
      CommonRules.unrealistic(12, 240, 'Wall height')
    ],
    columnHeight: [
      CommonRules.unrealistic(12, 240, 'Column height')
    ],
    stairWidth: [
      {
        condition: (val) => parseFloat(val) > 0 && parseFloat(val) < 36,
        message: '⚠️ IRC requires 36" minimum stair width',
        type: ValidationTypes.ERROR
      },
      CommonRules.tooLarge(96, 'Stair width >96" is uncommon - please verify')
    ],
    riserHeight: [
      {
        condition: (val) => parseFloat(val) > 7.75,
        message: '⚠️ IRC limits residential riser height to 7.75" maximum (7" for commercial)',
        type: ValidationTypes.ERROR
      },
      {
        condition: (val) => parseFloat(val) > 0 && parseFloat(val) < 4,
        message: 'Riser height <4" is uncommon and may not meet code',
        type: ValidationTypes.WARNING
      }
    ],
    treadDepth: [
      {
        condition: (val) => parseFloat(val) > 0 && parseFloat(val) < 10,
        message: '⚠️ IRC requires minimum 10" tread depth',
        type: ValidationTypes.ERROR
      },
      CommonRules.tooLarge(14, 'Tread depth >14" is uncommon - please verify')
    ],
    numberOfSteps: [
      CommonRules.unrealistic(1, 30, 'Number of steps')
    ]
  };

  const { validate, ValidationDisplay } = useValidation(validationRules);

  // Helper to get all current values
  const getValues = () => ({
    slabLength,
    slabWidth,
    slabThickness,
    footingLength,
    footingWidth,
    footingDepth,
    postDiameter,
    postDepth,
    postCount,
    stairWidth,
    riserHeight,
    treadDepth,
    numberOfSteps,
    wallLength,
    wallHeight,
    wallThickness,
    columnDiameter,
    columnHeight,
    columnCount
  });
  
  // Automatic waste factors based on project type and complexity
  const getWasteFactor = () => {
    if (customWasteFactor !== '') {
      return parseFloat(customWasteFactor);
    }
    
    switch (projectType) {
      case 'slab':
        return 5;
      case 'footing':
        return 10;
      case 'posthole':
        return 7.5;
      case 'stairs':
        return 10;
      case 'wall':
        return 7.5;
      case 'column':
        return 7.5;
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
        const radius = diameter / 24;
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
        
        const avgHeight = (riser * steps) / 2;
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

    const wasteFactor = getWasteFactor();
    const waste = wasteFactor / 100;
    const volumeWithWaste = volumeCubicFeet * (1 + waste);
    
    const cubicYards = volumeWithWaste / CUBIC_FEET_PER_YARD;
    
    const bags80lb = Math.ceil(volumeWithWaste / BAG_YIELDS['80']);
    const bags60lb = Math.ceil(volumeWithWaste / BAG_YIELDS['60']);
    
    const squareFeet = projectType === 'slab' 
      ? (parseFloat(slabLength) || 0) * (parseFloat(slabWidth) || 0)
      : 0;
    
    const rebarSpacing = 18;
    const rebarLengthFeet = projectType === 'slab'
      ? Math.ceil(((parseFloat(slabLength) || 0) / (rebarSpacing / 12)) * (parseFloat(slabWidth) || 0) +
                   ((parseFloat(slabWidth) || 0) / (rebarSpacing / 12)) * (parseFloat(slabLength) || 0))
      : 0;
    const rebarPieces20ft = Math.ceil(rebarLengthFeet / 20);
    
    const baseThickness = psiRating >= 4000 ? 6 : 4;
    const gravelCubicFeet = squareFeet * (baseThickness / 12);
    const gravelCubicYards = gravelCubicFeet / CUBIC_FEET_PER_YARD;
    
    const wireMeshRolls = Math.ceil(squareFeet / 150);
    
    let regionalNotes = [];
    if (region === 'freezethaw') {
      regionalNotes.push('Air entrainment required (6% by volume)');
      regionalNotes.push('Minimum 4,500 PSI strength recommended');
      regionalNotes.push('Footings must extend below frost line (48-60"+)');
    }
    if (region === 'seismic') {
      regionalNotes.push('Seismic zone requirements apply - consult structural engineer');
      regionalNotes.push('Special reinforcement and design per local codes required');
    }
    if (region === 'expansive') {
      regionalNotes.push('Expansive soil conditions require engineered foundation design');
      regionalNotes.push('Consult structural engineer and geotechnical report');
    }

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

    let methodRecommendation = '';
    const requiresContinuousPour = ['stairs', 'wall', 'column'];
    
    if (requiresContinuousPour.includes(projectType) && bags80lb > 15) {
      methodRecommendation = 'Ready-mix concrete is strongly recommended. This project requires a continuous pour for structural integrity, and mixing ' + bags80lb + ' bags would be impractical and risk cold joints.';
    } else if (bags80lb > 25) {
      methodRecommendation = 'Ready-mix concrete is recommended. Mixing ' + bags80lb + ' bags by hand would take 4+ hours and risks inconsistent quality.';
    } else if (bags80lb > 15 && cubicYards >= 0.75) {
      methodRecommendation = 'Consider ready-mix for time savings. While ' + bags80lb + ' bags is manageable, ready-mix ensures consistent quality and saves significant labor.';
    } else if (bags80lb <= 10) {
      methodRecommendation = 'Bagged concrete is practical for this project size (' + bags80lb + ' bags). Cost-effective for small projects under 0.5 cubic yards.';
    } else {
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
      squareFeet: squareFeet.toFixed(0),
      gravelCubicYards: gravelCubicYards.toFixed(2),
      baseThickness,
      rebarPieces20ft,
      wireMeshRolls
    });

    trackCalculation('concrete', {
      projectType,
      psiRating,
      region,
      dimensions: projectType === 'slab' ? 
        { length: slabLength, width: slabWidth, thickness: slabThickness } :
        projectType === 'footing' ?
        { length: footingLength, width: footingWidth, depth: footingDepth } :
        projectType === 'post' ?
        { diameter: postDiameter, depth: postDepth, count: postCount } :
        projectType === 'stairs' ?
        { width: stairWidth, riserHeight, treadDepth, steps: numberOfSteps } :
        projectType === 'wall' ?
        { length: wallLength, height: wallHeight, thickness: wallThickness } :
        projectType === 'column' ?
        { diameter: columnDiameter, height: columnHeight, count: columnCount } :
        { type: projectType }
    }, {
      cubicYards: parseFloat(cubicYards.toFixed(2)),
      bags80lb,
      bags60lb
    });
    
    trackCalculatorInteraction.calculate('concrete', true);
  };

  const handleCalculate = () => {
    calculateConcrete();
  };

  const handleReset = () => {
    trackCalculatorInteraction.startOver('concrete');
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

    trackCalculatorInteraction.copyResults('concrete');
    
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
    
    const outputs = {
      'Concrete needed': `${results.cubicYards} cubic yards`,
      '80lb bags': `${results.bags80lb} bags`,
      '60lb bags': `${results.bags60lb} bags`
    };
    
    const note = `Includes ${results.wasteFactorApplied}% waste factor. Always verify measurements on site.`;
    
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
            <SectionCard title="Project Type" icon={Ruler}>
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
            </SectionCard>

            {/* Dimensions Input */}
            {projectType === 'slab' && (
              <SectionCard title="Dimensions" icon={Ruler}>
                <InputGrid columns={3}>
                  <NumberInput 
                    label="Length" 
                    value={slabLength}
                    onChange={(val) => { 
                      setSlabLength(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    unit="feet" 
                    placeholder="Enter length"
                    required={true}
                  />
                  <NumberInput 
                    label="Width" 
                    value={slabWidth}
                    onChange={(val) => { 
                      setSlabWidth(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    unit="feet" 
                    placeholder="Enter width"
                    required={true}
                  />
                  <SelectInput 
                    label="Thickness" 
                    value={slabThickness}
                    onChange={(val) => { 
                      setSlabThickness(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    options={[
                      { value: '3.5', label: '3.5" - Minimum IRC' },
                      { value: '4', label: '4" - Standard residential' },
                      { value: '5', label: '5" - Heavy duty' },
                      { value: '6', label: '6" - RV/DOT driveway' },
                      { value: '8', label: '8" - Commercial heavy' }
                    ]}
                  />
                </InputGrid>
              </SectionCard>
            )}

            {projectType === 'footing' && (
  <SectionCard title="Dimensions" icon={Ruler}>
    <InputGrid columns={3}>
      <NumberInput 
        label="Length" 
        value={footingLength}
        onChange={(val) => { 
          setFootingLength(val); 
          setTimeout(() => validate(getValues()), 100); 
        }}
        unit="feet" 
        placeholder="Enter length"
        required={true}
      />
      <SelectInput 
        label="Width" 
        value={footingWidth}
        onChange={(val) => { 
          setFootingWidth(val); 
          setTimeout(() => validate(getValues()), 100); 
        }}
        options={[
          { value: '12', label: '12" - IRC min' },
          { value: '16', label: '16" - 1-story' },
          { value: '20', label: '20" - 2-story' },
          { value: '24', label: '24" - 3-story' }
        ]}
      />
      <SelectInput 
        label="Thickness" 
        value={footingDepth}
        onChange={(val) => { 
          setFootingDepth(val); 
          setTimeout(() => validate(getValues()), 100); 
        }}
        options={[
          { value: '6', label: '6" - 1-story' },
          { value: '7', label: '7" - 2-story' },
          { value: '8', label: '8" - 3-story' },
          { value: '12', label: '12" - Heavy' }
        ]}
      />
    </InputGrid>
  </SectionCard>
)}

            {projectType === 'posthole' && (
              <SectionCard title="Dimensions" icon={Ruler}>
                <InputGrid columns={3}>
                  <SelectInput 
  label="Hole Diameter" 
  value={postDiameter}
  onChange={(val) => { 
    setPostDiameter(val); 
    setTimeout(() => validate(getValues()), 100); 
  }}
  options={[
    { value: '8', label: '8"' },
    { value: '10', label: '10"' },
    { value: '12', label: '12"' },
    { value: '16', label: '16"' },
    { value: '20', label: '20"' },
    { value: '24', label: '24"' }
  ]}
/>
                  <SelectInput 
  label="Hole Depth" 
  value={postDepth}
  onChange={(val) => { 
    setPostDepth(val); 
    setTimeout(() => validate(getValues()), 100); 
  }}
  options={[
    { value: '24', label: '24"' },
    { value: '30', label: '30"' },
    { value: '36', label: '36"' },
    { value: '42', label: '42"' },
    { value: '48', label: '48"' }
  ]}
/>
                  <NumberInput 
                    label="Number of Posts" 
                    value={postCount}
                    onChange={(val) => { 
                      setPostCount(val); 
                      setTimeout(() => validate(getValues()), 100);
                    }}
                    placeholder="Enter count"
                    min="1"
                    required={true}
                  />
                </InputGrid>
              </SectionCard>
            )}

            {projectType === 'stairs' && (
              <SectionCard title="Dimensions" icon={Ruler}>
                <InputGrid columns={2}>
                  <NumberInput 
                    label="Stair Width" 
                    value={stairWidth}
                    onChange={(val) => { 
                      setStairWidth(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    unit="inches" 
                    placeholder="Enter width"
                    required={true}
                  />
                  <NumberInput 
                    label="Number of Steps" 
                    value={numberOfSteps}
                    onChange={(val) => { 
                      setNumberOfSteps(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    placeholder="Enter count"
                    min="1"
                    required={true}
                  />
                  <SelectInput 
                    label="Riser Height" 
                    value={riserHeight}
                    onChange={(val) => { 
                      setRiserHeight(val); 
                      setTimeout(() => validate(getValues()), 100);
                    }}
                    required={true}
                    options={[
                      { value: '6', label: '6" - Low rise' },
                      { value: '7', label: '7" - Standard residential' },
                      { value: '7.5', label: '7.5" - IRC maximum' },
                      { value: '7.75', label: '7.75" - Absolute IRC max' }
                    ]}
                  />
                  <SelectInput 
                    label="Tread Depth" 
                    value={treadDepth}
                    onChange={(val) => { 
                      setTreadDepth(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    required={true}
                    options={[
                      { value: '10', label: '10" - IRC minimum' },
                      { value: '11', label: '11" - Standard' },
                      { value: '12', label: '12" - Comfortable' },
                      { value: '14', label: '14" - Wide tread' }
                    ]}
                  />
                </InputGrid>
              </SectionCard>
            )}

            {projectType === 'wall' && (
              <SectionCard title="Dimensions" icon={Ruler}>
                <InputGrid columns={3}>
                  <NumberInput 
                    label="Length" 
                    value={wallLength}
                    onChange={(val) => { 
                      setWallLength(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    unit="feet" 
                    placeholder="Enter length"
                    required={true}
                  />
                  <NumberInput 
                    label="Height" 
                    value={wallHeight}
                    onChange={(val) => { 
                      setWallHeight(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    unit="feet" 
                    placeholder="Enter height"
                    required={true}
                  />
                  <SelectInput 
                    label="Thickness" 
                    value={wallThickness}
                    onChange={(val) => { 
                      setWallThickness(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    options={[
                      { value: '6', label: '6" - Minimum/short walls' },
                      { value: '8', label: '8" - Standard foundation' },
                      { value: '10', label: '10" - Heavy-duty' },
                      { value: '12', label: '12" - Tall walls' }
                    ]}
                  />
                </InputGrid>
              </SectionCard>
            )}

            {projectType === 'column' && (
              <SectionCard title="Dimensions" icon={Ruler}>
                <InputGrid columns={3}>
                  <SelectInput 
                    label="Diameter" 
                    value={columnDiameter}
                    onChange={(val) => { 
                      setColumnDiameter(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    options={[
  { value: '8', label: '8"' },
  { value: '10', label: '10"' },
  { value: '12', label: '12"' },
  { value: '16', label: '16"' },
  { value: '20', label: '20"' },
  { value: '24', label: '24"' }
]}
                  />
                  <NumberInput 
                    label="Height" 
                    value={columnHeight}
                    onChange={(val) => { 
                      setColumnHeight(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    unit="feet" 
                    placeholder="Enter height"
                    required={true}
                  />
                  <NumberInput 
                    label="Number of Columns" 
                    value={columnCount}
                    onChange={(val) => { 
                      setColumnCount(val); 
                      setTimeout(() => validate(getValues()), 100); 
                    }}
                    placeholder="Enter count"
                    min="1"
                    required={true}
                  />
                </InputGrid>
              </SectionCard>
            )}

            {/* Specifications */}
            <SectionCard title="Specifications" icon={Package}>
              <InputGrid columns={2}>
                <SelectInput 
                  label="PSI Strength Rating" 
                  value={psiRating} 
                  onChange={setPsiRating}
                  options={[
                    { value: '2500', label: '2,500 PSI - Sidewalks, paths' },
                    { value: '3000', label: '3,000 PSI - Residential standard' },
                    { value: '4000', label: '4,000 PSI - Commercial/heavy duty' },
                    { value: '5000', label: '5,000 PSI - Structural/warehouse' }
                  ]}
                  helpText={PSI_APPLICATIONS[psiRating]}
                />
                <SelectInput 
                  label="Regional Conditions" 
                  value={region} 
                  onChange={setRegion}
                  options={[
                    { value: 'standard', label: 'Standard conditions' },
                    { value: 'freezethaw', label: 'Freeze-thaw zone' },
                    { value: 'seismic', label: 'Seismic zone (SDC C/D)' },
                    { value: 'expansive', label: 'Expansive clay soil' }
                  ]}
                />
              </InputGrid>

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
                    <NumberInput 
                      label="Custom Waste Factor" 
                      value={customWasteFactor}
                      onChange={setCustomWasteFactor}
                      unit="%"
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
            </SectionCard>

            {/* Action Buttons */}
            <SectionCard>
              <ValidationDisplay />
              <CalculateButtons
                onCalculate={handleCalculate}
                onStartOver={handleReset}
                showStartOver={true}
                calculateText="Calculate"
                startOverText="Start Over"
              />
            </SectionCard>
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
                <SectionCard title="Material Needed" icon={Package}>
                  <div className="space-y-4">
                    <MaterialCard
                      title="Bagged Concrete (80 lb)"
                      value={results.bags80lb}
                      unit=" bags"
                      subtitle={`OR 60 lb bags: ${results.bags60lb} bags`}
                      note="Choose one bag size - you don't need both"
                      color="blue"
                      highlight={true}
                    />
                    
                    <MaterialCard
                      title="Ready-Mix Concrete"
                      value={results.cubicYards}
                      unit=" yd³"
                      subtitle="Volume Needed"
                      color="green"
                    />
                    
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="text-sm text-gray-700">
                        <strong>💡 Recommendation:</strong> {results.methodRecommendation}
                      </div>
                    </div>
                  </div>
                </SectionCard>

                {/* Action Buttons */}
                <ResultsButtons
                  onCopy={handleCopyCalculation}
                  onPrint={() => printCalculation('Concrete Calculator')}
                  copyButtonText={copyButtonText}
                />

                {/* Additional Materials Toggle */}
                {projectType === 'slab' && results.squareFeet > 0 && (
<SectionCard 
  title="Additional Materials" 
  collapsible={true} 
  defaultExpanded={false}
>
                    <div className="space-y-3">
                      <MaterialCard 
  title='Rebar (#4 @ 18" o.c.)' 
  value={results.rebarPieces20ft} 
  subtitle="20' pieces" 
  color="orange" 
/>
                      <MaterialCard 
                        title="Wire Mesh (6×6 W1.4)" 
                        value={results.wireMeshRolls} 
                        unit=" rolls" 
                        color="cyan" 
                      />
                      <MaterialCard 
  title={`Gravel Base (${results.baseThickness}")`} 
  value={results.gravelCubicYards} 
  unit=" yd³" 
  color="gray" 
/>
                    </div>
                  </SectionCard>
                )}

                {/* Recommendations */}
                {(results.recommendations.length > 0 || results.regionalNotes.length > 0) && (
                  <SectionCard title="Important Notes" icon={Info}>
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
                  </SectionCard>
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
      <FAQSection calculatorId="concrete-calculator" />
    </div>
  );
};

export default ConcreteCalculator;