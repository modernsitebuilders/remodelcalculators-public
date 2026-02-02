'use client';

import { useState, useRef } from 'react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';
import { trackCalculatorInteraction } from '@/utils/buttonTracking';
import { useCalculatorTracking, useCalculatorFlow } from '@/utils/tracking-hooks'; // ← ADDED
import { 
  NumberInput,
  SelectInput,
  MaterialCard,
  SectionCard,
  InputGrid,
  CalculateButtons,
  ResultsButtons
} from '@/components/calculator';

export default function FlooringCalculator() {
  const { trackField, trackAction } = useCalculatorTracking('flooring-calculator'); // ← ADDED
  useCalculatorFlow('flooring-calculator'); // ← ADDED

  const [selectedFlooringType, setSelectedFlooringType] = useState('');
  const [roomLength, setRoomLength] = useState('');
  const [roomWidth, setRoomWidth] = useState('');
  const [layoutPattern, setLayoutPattern] = useState('straight');
  const [roomComplexity, setRoomComplexity] = useState('simple');
  const [installerExp, setInstallerExp] = useState('professional');
  const [plankWidth, setPlankWidth] = useState('2.25');
  const [customPlankWidth, setCustomPlankWidth] = useState('');
  const [tileWidth, setTileWidth] = useState('12');
  const [tileLength, setTileLength] = useState('24');
  const [groutWidth, setGroutWidth] = useState('3/16');
  const [carpetWidth, setCarpetWidth] = useState('12');
  const [patternMatch, setPatternMatch] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');
  const resultsRef = useRef(null);

  const handleFlooringTypeSelect = (type) => {
    setSelectedFlooringType(type);
    trackField('flooringType', type); // ← ADDED
    setShowResults(false);
  };

  const layoutPatternOptions = [
    { value: 'straight', label: 'Straight' },
    { value: 'diagonal', label: 'Diagonal' },
    { value: 'herringbone', label: 'Herringbone' }
  ];

  const roomComplexityOptions = [
    { value: 'simple', label: 'Simple' },
    { value: 'moderate', label: 'Moderate' },
    { value: 'complex', label: 'Complex' }
  ];

  const installerExpOptions = [
    { value: 'professional', label: 'Professional' },
    { value: 'diy', label: 'DIY' }
  ];

  const plankWidthOptions = [
    { value: '1.5', label: '1.5" - Narrow strip' },
    { value: '2.25', label: '2.25" - Standard strip' },
    { value: '3', label: '3" - Wide strip' },
    { value: '3.25', label: '3.25" - Extra wide strip' },
    { value: '4', label: '4" - Narrow plank' },
    { value: '5', label: '5" - Standard plank' },
    { value: '6', label: '6" - Wide plank' },
    { value: '7', label: '7" - Extra wide plank' },
    { value: '8', label: '8" - Premium wide' },
    { value: '10', label: '10" - Premium extra wide' },
    { value: 'other', label: 'Other (custom width)' }
  ];

  const tileSizeOptions = [
    { value: '4', label: '4"' },
    { value: '6', label: '6"' },
    { value: '8', label: '8"' },
    { value: '12', label: '12"' },
    { value: '13', label: '13"' },
    { value: '16', label: '16"' },
    { value: '18', label: '18"' },
    { value: '20', label: '20"' },
    { value: '24', label: '24"' },
    { value: '30', label: '30"' },
    { value: '36', label: '36"' },
    { value: '48', label: '48"' }
  ];

  const groutWidthOptions = [
    { value: '1/16', label: '1/16"' },
    { value: '1/8', label: '1/8"' },
    { value: '3/16', label: '3/16"' },
    { value: '1/4', label: '1/4"' }
  ];

  const carpetWidthOptions = [
    { value: '12', label: '12 ft (standard)' },
    { value: '15', label: '15 ft' },
    { value: '13.5', label: '13.5 ft' }
  ];

  const flooringTypes = [
    { type: 'hardwood', icon: '🪵', label: 'Solid Hardwood' },
    { type: 'engineered', icon: '🌳', label: 'Engineered Wood' },
    { type: 'laminate', icon: '📏', label: 'Laminate' },
    { type: 'vinyl', icon: '▭', label: 'Vinyl Plank' },
    { type: 'tile', icon: '⬜', label: 'Ceramic Tile' },
    { type: 'carpet', icon: '🧶', label: 'Carpet' },
  ];

  const validationRules = {
    roomLength: [
      CommonRules.unrealistic(3, 100, 'Room length')
    ],
    roomWidth: [
      CommonRules.unrealistic(3, 100, 'Room width')
    ],
    plankWidth: [
      {
        condition: (val) => val === 'other' && (parseFloat(customPlankWidth) < 1 || parseFloat(customPlankWidth) > 20),
        message: 'Custom plank width should be between 1-20 inches',
        type: ValidationTypes.ERROR
      }
    ],
    tileWidth: [
      CommonRules.unrealistic(4, 48, 'Tile width')
    ],
    tileLength: [
      CommonRules.unrealistic(4, 48, 'Tile length')
    ]
  };

  const getValues = () => ({
    roomLength,
    roomWidth,
    plankWidth,
    customPlankWidth,
    tileWidth,
    tileLength
  });

  const { validate, ValidationDisplay } = useValidation(validationRules);

  const calculateMaterials = () => {
    const length = parseFloat(roomLength);
    const width = parseFloat(roomWidth);

    if (!length || !width || !selectedFlooringType) {
      alert('Please fill in all required fields');
      return;
    }

    let baseFactor = 0;

    switch (selectedFlooringType) {
      case 'hardwood':
        if (layoutPattern === 'straight') baseFactor = length * width < 1000 ? 10 : 7;
        else if (layoutPattern === 'diagonal') baseFactor = 15;
        else if (layoutPattern === 'herringbone') baseFactor = 17.5;

        let plankWidthValue;
        if (plankWidth === 'other') {
          plankWidthValue = parseFloat(customPlankWidth);
          if (!plankWidthValue || plankWidthValue < 1 || plankWidthValue > 20) {
            alert('Please enter a valid custom plank width between 1 and 20 inches');
            return;
          }
        } else {
          plankWidthValue = parseFloat(plankWidth);
        }

        if (plankWidthValue >= 5) baseFactor += 2.5;
        break;
      case 'engineered':
        if (layoutPattern === 'straight') baseFactor = 6;
        else if (layoutPattern === 'diagonal') baseFactor = 17.5;
        else if (layoutPattern === 'herringbone') baseFactor = 17.5;
        break;
      case 'laminate':
        if (layoutPattern === 'straight') baseFactor = 6;
        else if (layoutPattern === 'diagonal') baseFactor = 15;
        else if (layoutPattern === 'herringbone') baseFactor = 17.5;
        if (installerExp === 'diy') baseFactor += 5;
        break;
      case 'vinyl':
        if (layoutPattern === 'straight') baseFactor = 6;
        else if (layoutPattern === 'diagonal') baseFactor = 12.5;
        else if (layoutPattern === 'herringbone') baseFactor = 13.5;
        if (installerExp === 'diy') baseFactor += 5;
        break;
      case 'tile':
  if (layoutPattern === 'straight') baseFactor = 5;
  else if (layoutPattern === 'diagonal') baseFactor = 15;
  else if (layoutPattern === 'herringbone') baseFactor = 20;
  break;
      case 'carpet':
        baseFactor = 10;
        if (patternMatch) baseFactor = 20;
        break;
    }

    if (roomComplexity === 'complex') baseFactor += 7.5;
    else if (roomComplexity === 'moderate') baseFactor += 2.5;

    const areaSquareFeet = length * width;
    const wasteMultiplier = 1 + baseFactor / 100;
    const totalMaterialNeeded = areaSquareFeet * wasteMultiplier;

    let boxCoverage = 20;
    if (selectedFlooringType === 'hardwood') {
      let pw;
      if (plankWidth === 'other') {
        pw = parseFloat(customPlankWidth);
      } else {
        pw = parseFloat(plankWidth);
      }

      if (pw <= 2.25) boxCoverage = 21.5;
      else if (pw <= 3.25) boxCoverage = 23.5;
      else boxCoverage = 22.5;
    } else if (selectedFlooringType === 'engineered') {
      boxCoverage = 21;
    } else if (selectedFlooringType === 'tile') {
      const tw = parseFloat(tileWidth);
      const tl = parseFloat(tileLength);
      const tileSqFt = (tw * tl) / 144;

      let tilesPerBox;
      if (tileSqFt <= 0.5) tilesPerBox = 15;
      else if (tileSqFt <= 1.5) tilesPerBox = 12;
      else if (tileSqFt <= 3) tilesPerBox = 10;
      else tilesPerBox = 6;

      boxCoverage = tileSqFt * tilesPerBox;
    }

    const boxesNeeded =
      selectedFlooringType === 'carpet'
        ? Math.ceil(totalMaterialNeeded / 9)
        : Math.ceil(totalMaterialNeeded / boxCoverage);

    const additionalMaterials = [];

    if (selectedFlooringType === 'carpet') {
      additionalMaterials.push(
        { name: 'Carpet padding', qty: Math.ceil(areaSquareFeet / 270), note: '270 sq ft rolls, 8 lb density' },
        { name: 'Tack strips', qty: Math.ceil(((length + width) * 2) / 4), note: '4 ft sections' },
        { name: 'Seaming tape', qty: width > parseFloat(carpetWidth) ? 1 : 0, note: '100 ft roll' }
      );
    } else {
      if (selectedFlooringType !== 'tile') {
        additionalMaterials.push({ name: 'Underlayment', qty: Math.ceil(areaSquareFeet / 100), note: '100 sq ft rolls' });
      }
      additionalMaterials.push(
        { name: 'Transition molding', qty: 1, note: '78-94" lengths' },
        { name: 'Quarter round', qty: Math.ceil(((length + width) * 2) / 8), note: '8 ft lengths - covers expansion gap at baseboards' }
      );
    }

   if (selectedFlooringType === 'tile') {
  // Grout coverage: ~0.05 lbs per sq ft for standard 12x12 with 3/16" grout
  const groutLbsNeeded = Math.ceil(totalMaterialNeeded * 0.05);
  const groutBagsNeeded = Math.ceil(groutLbsNeeded / 25);
  
  additionalMaterials.unshift(
    { name: 'Thin-set mortar', qty: Math.ceil(totalMaterialNeeded / 60), note: '50 lb bags' },
    { name: 'Grout', qty: groutBagsNeeded, note: `25 lb bags (~${groutLbsNeeded} lbs needed)` },
    { name: 'Backer board', qty: Math.ceil(areaSquareFeet / 15), note: "3'×5' sheets" }
  );
}

    const recommendations = [];
    switch (selectedFlooringType) {
      case 'hardwood':
        recommendations.push('Acclimate wood 7-10 days before installation', 'Maintain 3/4" expansion gap around perimeter', 'Install over #15 asphalt felt paper');
        break;
      case 'engineered':
        recommendations.push('10-15mm expansion gap recommended', 'Suitable for basements - can install below grade over concrete', 'More moisture-resistant than solid hardwood');
        break;
      case 'laminate':
        recommendations.push('Never attach to subfloor - floating only', '1/4" to 3/8" expansion gap required', '6-mil vapor barrier over concrete');
        break;
      case 'vinyl':
        recommendations.push('1/4" expansion gap minimum', '6-mil vapor barrier required over concrete');
        break;
      case 'tile':
        recommendations.push('Subfloor flat to 1/8" in 10 ft', '95% mortar coverage in wet areas');
        break;
      case 'carpet':
        recommendations.push('8 lb density padding required', 'Max 7/16" padding thickness', 'Seams parallel to traffic');
        break;
    }

    setResults({
      area: Math.round(areaSquareFeet),
      waste: baseFactor.toFixed(1),
      total: Math.round(totalMaterialNeeded),
      boxes: boxesNeeded,
      boxCoverage: boxCoverage.toFixed(1),
      additionalMaterials,
      recommendations,
    });
    setShowResults(true);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Track the calculation
    trackCalculation('flooring', {
      flooringType: selectedFlooringType,
      roomLength: length,
      roomWidth: width,
      layoutPattern: layoutPattern,
      roomComplexity: roomComplexity,
      installerExp: installerExp,
      plankWidth: selectedFlooringType === 'hardwood' ? (plankWidth === 'other' ? customPlankWidth : plankWidth) : null,
      tileWidth: selectedFlooringType === 'tile' ? tileWidth : null,
      tileLength: selectedFlooringType === 'tile' ? tileLength : null,
      groutWidth: selectedFlooringType === 'tile' ? groutWidth : null,
      carpetWidth: selectedFlooringType === 'carpet' ? carpetWidth : null,
      patternMatch: selectedFlooringType === 'carpet' ? patternMatch : null
    }, {
      area: Math.round(areaSquareFeet),
      wastePercentage: baseFactor.toFixed(1),
      totalMaterial: Math.round(totalMaterialNeeded),
      boxesNeeded: boxesNeeded,
      boxCoverage: boxCoverage.toFixed(1),
      additionalMaterials: additionalMaterials,
      recommendations: recommendations
    });
    trackCalculatorInteraction.calculate('flooring', true);
  };

  const handleReset = () => {
    trackAction('reset'); // ← ADDED
    trackCalculatorInteraction.startOver('flooring');
    setSelectedFlooringType('');
    setRoomLength('');
    setRoomWidth('');
    setLayoutPattern('straight');
    setRoomComplexity('simple');
    setInstallerExp('professional');
    setPlankWidth('2.25');
    setCustomPlankWidth('');
    setTileWidth('12');
    setTileLength('24');
    setGroutWidth('3/16');
    setCarpetWidth('12');
    setPatternMatch(false);
    setShowResults(false);
    setResults(null);
  };  

  const handleCopyCalculation = async () => {
    trackAction('copy'); // ← ADDED
    trackCalculatorInteraction.copyResults('flooring');
    if (!showResults || !results) return;
    
    const inputsData = {
      'Flooring type': selectedFlooringType.replace(/([A-Z])/g, ' $1').trim(),
      'Room size': `${roomLength}' × ${roomWidth}'`,
      'Layout pattern': layoutPattern.replace(/([A-Z])/g, ' $1').toLowerCase(),
      'Room complexity': roomComplexity,
      'Installer experience': installerExp
    };
    
    if (selectedFlooringType === 'hardwood') {
      inputsData['Plank width'] = plankWidth === 'other' ? `${customPlankWidth}"` : `${plankWidth}"`;
    } else if (selectedFlooringType === 'tile') {
      inputsData['Tile size'] = `${tileWidth}" × ${tileLength}"`;
    } else if (selectedFlooringType === 'carpet') {
      inputsData['Carpet width'] = `${carpetWidth} feet`;
      if (patternMatch) inputsData['Pattern match'] = 'Yes';
    }
    
    const outputs = {
      'Room area': `${results.area} sq ft`,
      'Material needed': `${results.total} sq ft`,
      'Waste factor': `${results.waste}%`,
      'Total with waste': `${results.total} sq ft`
    };
    
    if (results.boxes) {
      outputs[selectedFlooringType === 'carpet' ? 'Square yards' : 'Boxes'] = results.boxes;
    }
    
    const note = `Per ${selectedFlooringType === 'hardwood' ? 'NWFA' : selectedFlooringType === 'tile' ? 'TCNA' : selectedFlooringType === 'carpet' ? 'CRI' : 'industry'} standards. Includes waste factor for cuts and mistakes.`;
    
    const success = await copyCalculation('Flooring Calculator', inputsData, outputs, note);
    
    if (success) {
      setCopyButtonText('✓ Copied!');
      setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
    } else {
      alert('Unable to copy. Please copy results manually.');
    }
  };

  return (  
    <>
      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 60px 24px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          background: #fafbfc;
          color: #1a1a1a;
          line-height: 1.6;
        }

        .header {
          margin-bottom: 64px;
        }

        .header h2 {
          font-size: 48px;
          font-weight: 800;
          color: #0f0f0f;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }

        .header p {
          font-size: 18px;
          color: #666;
          font-weight: 500;
        }

        .flooring-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
        }

        .flooring-card {
          background: white;
          border: 1.5px solid #e5e5e5;
          border-radius: 12px;
          padding: 24px 20px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .flooring-card:hover {
          border-color: #a3a3a3;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .flooring-card.selected {
          border-color: #0f0f0f;
          background: #fafafa;
          box-shadow: 0 0 0 1px #0f0f0f;
        }

        .flooring-card .icon {
          font-size: 32px;
          margin-bottom: 12px;
          display: block;
        }

        .flooring-card .label {
          font-size: 14px;
          font-weight: 600;
          color: #0f0f0f;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          padding: 12px 14px;
          background: white;
          border: 1.5px solid #e5e5e5;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.2s;
        }

        .checkbox-group:hover {
          border-color: #d4d4d4;
          background: #fafafa;
        }

        .checkbox-group input {
          width: 18px;
          height: 18px;
          margin-right: 10px;
          cursor: pointer;
        }

        .checkbox-group label {
          font-size: 14px;
          font-weight: 500;
          color: #0f0f0f;
          cursor: pointer;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          border: 1.5px solid #e5e5e5;
          border-radius: 12px;
          padding: 24px;
          transition: all 0.2s;
        }

        .stat-card:hover {
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        .stat-label {
          font-size: 12px;
          font-weight: 700;
          color: #737373;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 8px;
        }

        .stat-value {
          font-size: 36px;
          font-weight: 800;
          color: #0f0f0f;
          letter-spacing: -0.03em;
          line-height: 1;
          margin-bottom: 6px;
        }

        .stat-value.accent {
          color: #0066ff;
        }

        .stat-unit {
          font-size: 13px;
          color: #a3a3a3;
          font-weight: 500;
        }

        .materials-card,
        .notes-card {
          background: white;
          border: 1.5px solid #e5e5e5;
          border-radius: 12px;
          padding: 28px;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f0f0f;
          margin-bottom: 20px;
          letter-spacing: -0.01em;
        }

        .material-item {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 16px 0;
          border-bottom: 1px solid #f5f5f5;
          transition: all 0.2s;
        }

        .material-item:last-child {
          border-bottom: none;
        }

        .material-item:hover {
          background: #fafafa;
          margin: 0 -12px;
          padding: 16px 12px;
          border-radius: 8px;
        }

        .material-info {
          flex: 1;
        }

        .material-name {
          font-size: 15px;
          font-weight: 600;
          color: #0f0f0f;
          margin-bottom: 4px;
        }

        .material-note {
          font-size: 13px;
          color: #737373;
          font-weight: 500;
        }

        .material-qty {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          margin-left: 20px;
        }

        .notes-card {
          background: #fafafa;
          border-color: #e5e5e5;
        }

        .note-item {
          display: flex;
          gap: 10px;
          padding: 10px 0;
          font-size: 14px;
          color: #404040;
          font-weight: 500;
          line-height: 1.5;
        }

        .note-bullet {
          color: #0f0f0f;
          font-weight: 700;
        }

        .note-highlight {
          display: flex;
          gap: 12px;
          padding: 16px;
          background: white;
          border-radius: 8px;
          margin-top: 16px;
          border: 1.5px solid #e5e5e5;
        }

        .note-highlight-icon {
          font-size: 20px;
        }

        .note-highlight-text {
          font-size: 13px;
          color: #404040;
          font-weight: 500;
          line-height: 1.6;
        }

        .footer {
          margin-top: 80px;
          padding-top: 32px;
          border-top: 1.5px solid #e5e5e5;
          text-align: center;
        }

        .footer-text {
          font-size: 13px;
          color: #a3a3a3;
          font-weight: 500;
        }

        .hidden {
          display: none;
        }

        .custom-width-input {
          margin-top: 12px;
        }
      `}</style>

      <div className="container">
        <div className="header">
          <h2>Flooring Calculator</h2>
          <p>Calculate materials needed for your flooring project</p>
        </div>

        {/* Step 1: Flooring Type */}
        <SectionCard title="Select flooring type" subtitle="Choose the material you'll be installing">
          <div className="flooring-grid">
            {flooringTypes.map((flooring) => (
              <button
                key={flooring.type}
                className={`flooring-card ${selectedFlooringType === flooring.type ? 'selected' : ''}`}
                onClick={() => handleFlooringTypeSelect(flooring.type)}
              >
                <span className="icon">{flooring.icon}</span>
                <span className="label">{flooring.label}</span>
              </button>
            ))}
          </div>
        </SectionCard>

        {/* Input Section */}
        {selectedFlooringType && (
          <div>
            {/* Room Dimensions */}
            <SectionCard title="Room dimensions" subtitle="Enter your room measurements in feet">
              <InputGrid columns={2}>
                <NumberInput
                  label="Length"
                  value={roomLength}
                  onChange={(value) => {
                    setRoomLength(value);
                    trackField('roomLength', value); // ← ADDED
                    setTimeout(() => validate(getValues()), 100);
                  }}
                  unit="feet"
                  required={true}
                  fieldName="roomLength"
                />
                <NumberInput
                  label="Width"
                  value={roomWidth}
                  onChange={(value) => {
                    setRoomWidth(value);
                    trackField('roomWidth', value); // ← ADDED
                    setTimeout(() => validate(getValues()), 100);
                  }}
                  unit="feet"
                  required={true}
                  fieldName="roomWidth"
                />
              </InputGrid>
            </SectionCard>

            {/* Installation Details */}
            <SectionCard title="Installation details" subtitle="Specify how the flooring will be installed">
              <InputGrid columns={3}>
                {selectedFlooringType !== 'carpet' && (
                  <SelectInput
                    label="Layout pattern"
                    value={layoutPattern}
                    onChange={(value) => {
                      setLayoutPattern(value);
                      trackField('layoutPattern', value); // ← ADDED
                    }}
                    options={layoutPatternOptions}
                  />
                )}
                
                <SelectInput
                  label="Room complexity"
                  value={roomComplexity}
                  onChange={(value) => {
                    setRoomComplexity(value);
                    trackField('roomComplexity', value); // ← ADDED
                  }}
                  options={roomComplexityOptions}
                />
                
                <SelectInput
                  label="Experience level"
                  value={installerExp}
                  onChange={(value) => {
                    setInstallerExp(value);
                    trackField('installerExperience', value); // ← ADDED
                  }}
                  options={installerExpOptions}
                />
              </InputGrid>

              {/* Material-specific */}
              {selectedFlooringType === 'hardwood' && (
                <div className="mt-6">
                  <SelectInput
                    label="Plank width"
                    value={plankWidth}
                    onChange={(value) => {
                      setPlankWidth(value);
                      trackField('plankWidth', value); // ← ADDED
                      setTimeout(() => validate(getValues()), 100);
                    }}
                    options={plankWidthOptions}
                  />
                  {plankWidth === 'other' && (
                    <div className="custom-width-input">
                      <NumberInput
                        label="Custom plank width"
                        value={customPlankWidth}
                        onChange={(value) => {
                          setCustomPlankWidth(value);
                          trackField('customPlankWidth', value); // ← ADDED
                          setTimeout(() => validate(getValues()), 100);
                        }}
                        unit="inches"
                        required={true}
                        fieldName="customPlankWidth"
                        placeholder="Enter width in inches"
                        min="1"
                        max="20"
                        step="0.25"
                      />
                    </div>
                  )}
                  <p className="text-xs text-gray-500 mt-2">Wide planks (5"+) require higher waste factors</p>
                </div>
              )}

              {selectedFlooringType === 'tile' && (
                <div className="mt-6">
                  <InputGrid columns={3}>
                    <SelectInput
                      label="Tile width"
                      value={tileWidth}
                      onChange={(value) => {
                        setTileWidth(value);
                        trackField('tileWidth', value); // ← ADDED
                        setTimeout(() => validate(getValues()), 100);
                      }}
                      options={tileSizeOptions}
                    />
                    <SelectInput
                      label="Tile length"
                      value={tileLength}
                      onChange={(value) => {
                        setTileLength(value);
                        trackField('tileLength', value); // ← ADDED
                        setTimeout(() => validate(getValues()), 100);
                      }}
                      options={tileSizeOptions}
                    />
                    <SelectInput
                      label="Grout width"
                      value={groutWidth}
                      onChange={setGroutWidth}
                      options={groutWidthOptions}
                    />
                  </InputGrid>
                </div>
              )}

              {selectedFlooringType === 'carpet' && (
                <div className="mt-6">
                  <InputGrid columns={2}>
                    <SelectInput
                      label="Carpet width"
                      value={carpetWidth}
                      onChange={(value) => {
                        setCarpetWidth(value);
                        trackField('carpetWidth', value); // ← ADDED
                      }}
                      options={carpetWidthOptions}
                    />
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Pattern matching</label>
                      <div className="checkbox-group border-yellow-400">
                        <input 
                          type="checkbox" 
                          id="pattern-match" 
                          checked={patternMatch} 
                          onChange={(e) => setPatternMatch(e.target.checked)} 
                        />
                        <label htmlFor="pattern-match">Pattern match required</label>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">Patterned carpets need extra material to align designs at seams (adds 10%)</p>
                    </div>
                  </InputGrid>
                </div>
              )}
            </SectionCard>

            <ValidationDisplay />
            
            <CalculateButtons
              onCalculate={calculateMaterials}
              onStartOver={handleReset}
              showStartOver={showResults}
            />
          </div>
        )}

        {/* Results */}
        {showResults && results && (
          <div ref={resultsRef} className="results">
            <SectionCard title="Material requirements" subtitle="Based on your specifications">
              <div className="stats-grid">
                <div className="stat-card">
                  <div className="stat-label">Area</div>
                  <div className="stat-value">{results.area}</div>
                  <div className="stat-unit">sq ft</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Waste</div>
                  <div className="stat-value accent">{results.waste}%</div>
                  <div className="stat-unit">buffer</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">Total</div>
                  <div className="stat-value">{results.total}</div>
                  <div className="stat-unit">sq ft</div>
                </div>
                <div className="stat-card">
                  <div className="stat-label">{selectedFlooringType === 'carpet' ? 'Yards' : 'Boxes'}</div>
                  <div className="stat-value accent">{results.boxes}</div>
                  <div className="stat-unit">{selectedFlooringType === 'carpet' ? 'square yards' : `${results.boxCoverage} sq ft/box`}</div>
                </div>
              </div>

              <div className="materials-card">
                <h3 className="card-title">Additional materials</h3>
                <div>
                  {results.additionalMaterials.map((material, index) => (
                    <div key={index} className="material-item">
                      <div className="material-info">
                        <div className="material-name">{material.name}</div>
                        <div className="material-note">{material.note}</div>
                      </div>
                      <div className="material-qty">{material.qty}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="notes-card">
                <h3 className="card-title">Installation notes</h3>
                <div>
                  {results.recommendations.map((rec, index) => (
                    <div key={index} className="note-item">
                      <span className="note-bullet">•</span>
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
                <div className="note-highlight">
                  <span className="note-highlight-icon">💡</span>
                  <span className="note-highlight-text">Order 5-10% extra material beyond installation needs for future repairs and batch matching</span>
                </div>
                
                <ResultsButtons
                  onCopy={handleCopyCalculation}
                  onPrint={() => {
                    printCalculation('Flooring Calculator');
                    trackAction('print'); // ← ADDED
                  }}
                  copyButtonText={copyButtonText}
                />
              </div>
            </SectionCard>
          </div>
        )}

        <div className="footer">
          <p className="footer-text">Based on NWFA, NTCA, TCNA, CRI, and RFCI industry standards</p>
        </div>
        <FAQSection calculatorId="flooring-calculator" />
      </div>
    </>
  );
}