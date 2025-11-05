'use client';

import { useState } from 'react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';

export default function FlooringCalculator() {
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

  const handleFlooringTypeSelect = (type) => {
    setSelectedFlooringType(type);
    setShowResults(false);
  };

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
        if (layoutPattern === 'straight') baseFactor = 7.5;
        else if (layoutPattern === 'diagonal') baseFactor = 12.5;
        else if (layoutPattern === 'herringbone') baseFactor = 15;
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
      additionalMaterials.unshift(
        { name: 'Thin-set mortar', qty: Math.ceil(totalMaterialNeeded / 65), note: '50 lb bags' },
        { name: 'Grout', qty: Math.ceil(totalMaterialNeeded / 130), note: '25 lb bags' },
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
      document.getElementById('results-section')?.scrollIntoView({ behavior: 'smooth' });
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
  };

  const handleReset = () => {
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
    if (!showResults || !results) return;
    
    // Prepare inputs
    const inputsData = {
      'Flooring type': selectedFlooringType.replace(/([A-Z])/g, ' $1').trim(),
      'Room size': `${roomLength}' × ${roomWidth}'`,
      'Layout pattern': layoutPattern.replace(/([A-Z])/g, ' $1').toLowerCase(),
      'Room complexity': roomComplexity,
      'Installer experience': installerExp
    };
    
    if (selectedFlooringType === 'hardwood') {
      inputsData['Plank width'] = plankWidth === 'other' ? `${customPlankWidth}"` : `${plankWidth}"`;
    } else if (selectedFlooringType === 'tile' || selectedFlooringType === 'lvp') {
      inputsData['Tile size'] = `${tileWidth}" × ${tileLength}"`;
    } else if (selectedFlooringType === 'carpet') {
      inputsData['Carpet width'] = `${carpetWidth} feet`;
      if (patternMatch) inputsData['Pattern match'] = 'Yes';
    }
    
    // Prepare outputs
    const outputs = {
      'Room area': `${results.roomArea} sq ft`,
      'Material needed': `${results.materialNeeded} sq ft`,
      'Waste factor': `${results.wasteFactor}%`,
      'Total with waste': `${results.totalWithWaste} sq ft`
    };
    
    if (results.boxes) outputs['Boxes/Cartons'] = results.boxes;
    if (results.planks) outputs['Planks'] = results.planks;
    if (results.tiles) outputs['Tiles'] = results.tiles;
    if (results.rolls) outputs['Carpet rolls'] = results.rolls;
    
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

        .section {
          margin-bottom: 56px;
        }

        .section-header {
          margin-bottom: 24px;
        }

        .section-header h2 {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          margin-bottom: 8px;
          letter-spacing: -0.02em;
        }

        .section-header p {
          font-size: 15px;
          color: #737373;
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

        .form-grid {
          display: grid;
          gap: 20px;
        }

        .form-grid-2 {
          grid-template-columns: repeat(2, 1fr);
        }

        .form-grid-3 {
          grid-template-columns: repeat(3, 1fr);
        }

        @media (max-width: 768px) {
          .form-grid-2,
          .form-grid-3 {
            grid-template-columns: 1fr;
          }
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-label {
          font-size: 13px;
          font-weight: 600;
          color: #0f0f0f;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }

        .form-input,
        .form-select {
          background: white;
          border: 1.5px solid #e5e5e5;
          border-radius: 10px;
          padding: 12px 14px;
          font-size: 15px;
          font-weight: 500;
          color: #0f0f0f;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          outline: none;
        }

        .form-input::placeholder {
          color: #a3a3a3;
          font-weight: 400;
        }

        .form-input:hover,
        .form-select:hover {
          border-color: #d4d4d4;
        }

        .form-input:focus,
        .form-select:focus {
          border-color: #0f0f0f;
          box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.05);
        }

        .form-hint {
          font-size: 13px;
          color: #737373;
          margin-top: 6px;
          font-weight: 500;
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

        .button-group {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }

        .btn {
          padding: 14px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          font-family: 'Inter', sans-serif;
          letter-spacing: -0.01em;
        }

        .btn-primary {
          background: #0f0f0f;
          color: white;
          flex: 1;
        }

        .btn-primary:hover {
          background: #2a2a2a;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-secondary {
          background: white;
          color: #0f0f0f;
          border: 1.5px solid #e5e5e5;
          padding: 13px 24px;
        }

        .btn-secondary:hover {
          background: #fafafa;
          border-color: #d4d4d4;
        }

        .results {
          margin-top: 64px;
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
        <div className="section">
          <div className="section-header">
            <h2>Select flooring type</h2>
            <p>Choose the material you'll be installing</p>
          </div>
          <div className="flooring-grid">
            {[
              { type: 'hardwood', icon: '🪵', label: 'Solid Hardwood' },
              { type: 'engineered', icon: '🌳', label: 'Engineered Wood' },
              { type: 'laminate', icon: '📏', label: 'Laminate' },
              { type: 'vinyl', icon: '▭', label: 'Vinyl Plank' },
              { type: 'tile', icon: '⬜', label: 'Ceramic Tile' },
              { type: 'carpet', icon: '🧶', label: 'Carpet' },
            ].map((flooring) => (
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
        </div>

        {/* Input Section */}
        {selectedFlooringType && (
          <div>
            {/* Room Dimensions */}
            <div className="section">
              <div className="section-header">
                <h2>Room dimensions</h2>
                <p>Enter your room measurements in feet</p>
              </div>
              <div className="form-grid form-grid-2">
                <div className="form-group">
                  <label className="form-label">Length (ft)</label>
                  <input type="number" className="form-input" value={roomLength} onChange={(e) => setRoomLength(e.target.value)} />
                </div>
                <div className="form-group">
                  <label className="form-label">Width (ft)</label>
                  <input type="number" className="form-input" value={roomWidth} onChange={(e) => setRoomWidth(e.target.value)} />
                </div>
              </div>
            </div>

            {/* Installation Details */}
            <div className="section">
              <div className="section-header">
                <h2>Installation details</h2>
                <p>Specify how the flooring will be installed</p>
              </div>
              <div className="form-grid form-grid-3">
                <div className="form-group">
                  <label className="form-label">Layout pattern</label>
                  <select className="form-select" value={layoutPattern} onChange={(e) => setLayoutPattern(e.target.value)}>
                    <option value="straight">Straight</option>
                    <option value="diagonal">Diagonal</option>
                    <option value="herringbone">Herringbone</option>
                  </select>
                  <span className="form-hint">Diagonal and herringbone patterns require significantly more material</span>
                </div>
                <div className="form-group">
                  <label className="form-label">Room complexity</label>
                  <select className="form-select" value={roomComplexity} onChange={(e) => setRoomComplexity(e.target.value)}>
                    <option value="simple">Simple</option>
                    <option value="moderate">Moderate</option>
                    <option value="complex">Complex</option>
                  </select>
                  <span className="form-hint">Complex rooms with angles, closets, or obstacles need extra material</span>
                </div>
                <div className="form-group">
                  <label className="form-label">Experience level</label>
                  <select className="form-select" value={installerExp} onChange={(e) => setInstallerExp(e.target.value)}>
                    <option value="professional">Professional</option>
                    <option value="diy">DIY</option>
                  </select>
                  <span className="form-hint">DIY installs add 5% waste factor for learning curve and cutting practice</span>
                </div>
              </div>

              {/* Material-specific */}
              {selectedFlooringType === 'hardwood' && (
                <div style={{ marginTop: '20px' }}>
                  <div className="form-group">
                    <label className="form-label">Plank width (inches)</label>
                    <select className="form-select" style={{ maxWidth: '280px' }} value={plankWidth} onChange={(e) => setPlankWidth(e.target.value)}>
                      <option value="1.5">1.5" - Narrow strip</option>
                      <option value="2.25">2.25" - Standard strip</option>
                      <option value="3">3" - Wide strip</option>
                      <option value="3.25">3.25" - Extra wide strip</option>
                      <option value="4">4" - Narrow plank</option>
                      <option value="5">5" - Standard plank</option>
                      <option value="6">6" - Wide plank</option>
                      <option value="7">7" - Extra wide plank</option>
                      <option value="8">8" - Premium wide</option>
                      <option value="10">10" - Premium extra wide</option>
                      <option value="other">Other (custom width)</option>
                    </select>
                    {plankWidth === 'other' && (
                      <div className="custom-width-input">
                        <input
                          type="number"
                          className="form-input"
                          placeholder="Enter width in inches"
                          step="0.25"
                          min="1"
                          max="20"
                          style={{ maxWidth: '280px' }}
                          value={customPlankWidth}
                          onChange={(e) => setCustomPlankWidth(e.target.value)}
                        />
                      </div>
                    )}
                    <span className="form-hint">Wide planks (5"+) require higher waste factors</span>
                  </div>
                </div>
              )}

              {selectedFlooringType === 'tile' && (
                <div style={{ marginTop: '20px' }}>
                  <div className="form-grid form-grid-3">
                    <div className="form-group">
                      <label className="form-label">Tile width (inches)</label>
                      <select className="form-select" value={tileWidth} onChange={(e) => setTileWidth(e.target.value)}>
                        <option value="4">4"</option>
                        <option value="6">6"</option>
                        <option value="8">8"</option>
                        <option value="12">12"</option>
                        <option value="13">13"</option>
                        <option value="16">16"</option>
                        <option value="18">18"</option>
                        <option value="20">20"</option>
                        <option value="24">24"</option>
                        <option value="30">30"</option>
                        <option value="36">36"</option>
                        <option value="48">48"</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Tile length (inches)</label>
                      <select className="form-select" value={tileLength} onChange={(e) => setTileLength(e.target.value)}>
                        <option value="4">4"</option>
                        <option value="6">6"</option>
                        <option value="8">8"</option>
                        <option value="12">12"</option>
                        <option value="13">13"</option>
                        <option value="16">16"</option>
                        <option value="18">18"</option>
                        <option value="20">20"</option>
                        <option value="24">24"</option>
                        <option value="30">30"</option>
                        <option value="36">36"</option>
                        <option value="48">48"</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Grout width</label>
                      <select className="form-select" value={groutWidth} onChange={(e) => setGroutWidth(e.target.value)}>
                        <option value="1/16">1/16"</option>
                        <option value="1/8">1/8"</option>
                        <option value="3/16">3/16"</option>
                        <option value="1/4">1/4"</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {selectedFlooringType === 'carpet' && (
                <div style={{ marginTop: '20px' }}>
                  <div className="form-grid form-grid-2">
                    <div className="form-group">
                      <label className="form-label">Carpet width (feet)</label>
                      <select className="form-select" value={carpetWidth} onChange={(e) => setCarpetWidth(e.target.value)}>
                        <option value="12">12 ft (standard)</option>
                        <option value="15">15 ft</option>
                        <option value="13.5">13.5 ft</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" style={{ opacity: 0 }}>
                        Checkbox
                      </label>
                      <div className="checkbox-group">
                        <input type="checkbox" id="pattern-match" checked={patternMatch} onChange={(e) => setPatternMatch(e.target.checked)} />
                        <label htmlFor="pattern-match">Pattern match required</label>
                      </div>
                      <span className="form-hint">Patterned carpets need extra material to align designs at seams (adds 10%)</span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="button-group">
              <button className="btn btn-primary" onClick={calculateMaterials}>
                Calculate materials
              </button>
              <button className="btn btn-secondary" onClick={handleReset}>
                Reset
              </button>
            </div>
          </div>
        )}

        {/* Results */}
        {showResults && results && (
          <div id="results-section" className="results">
            <div className="section-header">
              <h2>Material requirements</h2>
              <p>Based on your specifications</p>
            </div>

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
              
              {/* ADD THIS BUTTON HERE */}
              <div style={{ marginTop: '20px' }}>
                <button 
                  onClick={handleCopyCalculation}
                  className="copy-calc-btn"
                >
                  {copyButtonText}
                </button>
              </div>
              
            </div>
          </div>
        )}

        <div className="footer">
          <p className="footer-text">Based on NWFA, NTCA, TCNA, CRI, and RFCI industry standards</p>
        </div>
      </div>
    </>
  );
}