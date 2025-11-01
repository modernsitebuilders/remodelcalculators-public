'use client';

import { useState, useRef } from 'react';
import { Calculator, AlertTriangle, Info } from 'lucide-react';

const SHEET_URL = 'https://script.google.com/macros/s/AKfycbxqmLeD7kIu4kIn58c7QY83KJE3rePIZLfS24LrLkEfFLt3ahm-vq3s-5M2uqgaaRiC/exec';

function getSessionId() {
  if (typeof window === 'undefined') return null;
  let sessionId = sessionStorage.getItem('calculatorSessionId');
  if (!sessionId) {
    sessionId = Date.now() + '-' + Math.random().toString(36).substr(2, 9);
    sessionStorage.setItem('calculatorSessionId', sessionId);
  }
  return sessionId;
}

async function trackCalculatorUsage(calculatorData) {
  try {
    await fetch(SHEET_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        calculatorType: calculatorData.type,
        zipCode: calculatorData.zipCode || '',
        projectType: calculatorData.projectType || '',
        squareFootage: calculatorData.squareFootage || '',
        recommendedSize: calculatorData.recommendedSize || '',
        totalVolume: calculatorData.totalVolume || '',
        totalWeight: calculatorData.totalWeight || '',
        materialsRemoved: calculatorData.materialsRemoved || '',
        email: calculatorData.email || '',
        pageUrl: window.location.href,
        referrer: document.referrer,
        userAgent: navigator.userAgent,
        sessionId: getSessionId()
      })
    });
  } catch (error) {
    console.error('Sheet tracking error:', error);
  }
}

const DRYWALL_TYPES = {
  'regular': {
    name: 'Regular Drywall',
    weight_threeEighth: 1.6, // lbs per sq ft
    weight_half: 2.0,
    weight_fiveEighth: 2.2,
    description: 'Standard gypsum board for interior walls'
  },
  'moisture': {
    name: 'Moisture-Resistant (Green Board)',
    weight_threeEighth: 1.7,
    weight_half: 2.1,
    weight_fiveEighth: 2.3,
    description: 'For bathrooms and high-humidity areas'
  },
  'typeX': {
    name: 'Type X Fire-Rated',
    weight_threeEighth: 1.8,
    weight_half: 2.3,
    weight_fiveEighth: 2.5,
    description: 'Fire-resistant drywall for garages/walls'
  }
};

const SHEET_SIZES = {
  '4x8': { area: 32, name: "4×8 (32 sq ft)" },
  '4x10': { area: 40, name: "4×10 (40 sq ft)" },
  '4x12': { area: 48, name: "4×12 (48 sq ft)" }
};

export default function DrywallCalculator() {
  const [inputMode, setInputMode] = useState('sheets'); // 'sheets' or 'sqft'
  const [numSheets, setNumSheets] = useState('');
  const [sqft, setSqft] = useState('');
  const [sheetSize, setSheetSize] = useState('4x8');
  const [thickness, setThickness] = useState('half'); // 'threeEighth', 'half', or 'fiveEighth'
  const [drywallType, setDrywallType] = useState('regular');
  const [results, setResults] = useState(null);
  
  // Ref for auto-scrolling to results
  const resultsRef = useRef(null);

  const calculateDebris = () => {
    let totalSqFt = 0;

    if (inputMode === 'sheets') {
      const sheets = parseFloat(numSheets) || 0;
      if (sheets === 0) {
        alert('Please enter number of sheets');
        return;
      }
      totalSqFt = sheets * SHEET_SIZES[sheetSize].area;
    } else {
      totalSqFt = parseFloat(sqft) || 0;
      if (totalSqFt === 0) {
        alert('Please enter square footage');
        return;
      }
    }

    // Calculate weight
    const type = DRYWALL_TYPES[drywallType];
    const weightPerSqFt = thickness === 'threeEighth' ? type.weight_threeEighth : 
                          thickness === 'half' ? type.weight_half : 
                          type.weight_fiveEighth;
    const totalWeight = totalSqFt * weightPerSqFt;

    // Calculate volume (drywall is about 0.012 cubic yards per square foot)
    const volumePerSqFt = 0.012;
    const totalVolume = totalSqFt * volumePerSqFt;

    // Add waste factor (15%)
    const totalVolumeWithWaste = totalVolume * 1.15;
    const totalWeightWithWaste = totalWeight * 1.15;

    // Determine dumpster size
    const weightInTons = totalWeightWithWaste / 2000;
    let recommendedSize = '';
    let costRange = '';
    let notes = '';

    if (weightInTons <= 1.5 && totalVolumeWithWaste <= 10) {
      recommendedSize = '10-Yard';
      costRange = '$300-$400';
      notes = 'Good for small renovation projects';
    } else if (weightInTons <= 2.5 && totalVolumeWithWaste <= 20) {
      recommendedSize = '20-Yard';
      costRange = '$400-$500';
      notes = 'Most common for residential drywall removal';
    } else if (weightInTons <= 3.5 && totalVolumeWithWaste <= 30) {
      recommendedSize = '30-Yard';
      costRange = '$450-$600';
      notes = 'For whole-house renovations';
    } else {
      recommendedSize = '40-Yard';
      costRange = '$500-$700';
      notes = 'Large commercial or multi-room projects';
    }

    // Calculate equivalent sheets if user entered sqft
    const equivalentSheets = totalSqFt / SHEET_SIZES[sheetSize].area;

    trackCalculatorUsage({
      type: 'Drywall',
      projectType: 'Drywall Removal',
      squareFootage: totalSqFt,
      recommendedSize: recommendedSize,
      totalVolume: Math.ceil(totalVolumeWithWaste),
      totalWeight: Math.round(totalWeightWithWaste),
      materialsRemoved: `${drywallType} drywall, ${thickness === 'threeEighth' ? '3/8"' : thickness === 'half' ? '1/2"' : '5/8"'}`
    });

    setResults({
      sqft: totalSqFt.toFixed(0),
      sheets: inputMode === 'sheets' ? numSheets : equivalentSheets.toFixed(1),
      weight: Math.round(totalWeightWithWaste),
      weightTons: weightInTons.toFixed(2),
      volume: Math.ceil(totalVolumeWithWaste),
      recommendedSize,
      costRange,
      notes,
      drywallTypeName: type.name,
      thicknessDisplay: thickness === 'threeEighth' ? '3/8"' : 
                        thickness === 'half' ? '1/2"' : '5/8"'
    });
    
    // Auto-scroll to results after a brief delay
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const reset = () => {
    setNumSheets('');
    setSqft('');
    setSheetSize('4x8');
    setThickness('half');
    setDrywallType('regular');
    setResults(null);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6">
        <div className="flex items-center justify-center gap-3">
          <Calculator className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Quick Drywall Disposal Calculator</h3>
        </div>
        <p className="text-center mt-2 text-cyan-100">Calculate weight and volume from drywall removal</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Input Mode Selection */}
        <div>
          <label className="block font-semibold mb-3">How do you want to calculate?</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setInputMode('sheets')}
              className={`p-4 rounded-lg border-2 transition ${
                inputMode === 'sheets'
                  ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-semibold">Number of Sheets</div>
              <div className="text-sm text-gray-600">I know sheet count</div>
            </button>
            <button
              onClick={() => setInputMode('sqft')}
              className={`p-4 rounded-lg border-2 transition ${
                inputMode === 'sqft'
                  ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-semibold">Square Footage</div>
              <div className="text-sm text-gray-600">I know total area</div>
            </button>
          </div>
        </div>

        {/* Input Fields */}
        {inputMode === 'sheets' ? (
          <div>
            <label className="block font-semibold mb-2">Number of Drywall Sheets</label>
            <input
              type="number"
              value={numSheets}
              onChange={(e) => setNumSheets(e.target.value)}
              placeholder="e.g., 50"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
            />
            <p className="text-sm text-gray-600 mt-1">
              <Info className="w-4 h-4 inline" /> Count all sheets being removed or disposed of
            </p>
          </div>
        ) : (
          <div>
            <label className="block font-semibold mb-2">Total Square Footage</label>
            <input
              type="number"
              value={sqft}
              onChange={(e) => setSqft(e.target.value)}
              placeholder="e.g., 1600"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
            />
            <p className="text-sm text-gray-600 mt-1">
              <Info className="w-4 h-4 inline" /> Total drywall area (walls + ceiling if applicable)
            </p>
          </div>
        )}

        {/* Sheet Size */}
        <div>
          <label className="block font-semibold mb-2">Sheet Size</label>
          <select
            value={sheetSize}
            onChange={(e) => setSheetSize(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
          >
            {Object.entries(SHEET_SIZES).map(([key, size]) => (
              <option key={key} value={key}>{size.name}</option>
            ))}
          </select>
        </div>

        {/* Thickness */}
        <div>
          <label className="block font-semibold mb-2">Drywall Thickness</label>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setThickness('threeEighth')}
              className={`p-4 rounded-lg border-2 transition ${
                thickness === 'threeEighth'
                  ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-semibold">3/8 Inch</div>
              <div className="text-sm text-gray-600">Overlay/curved</div>
            </button>
            <button
              onClick={() => setThickness('half')}
              className={`p-4 rounded-lg border-2 transition ${
                thickness === 'half'
                  ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-semibold">1/2 Inch</div>
              <div className="text-sm text-gray-600">Most common</div>
            </button>
            <button
              onClick={() => setThickness('fiveEighth')}
              className={`p-4 rounded-lg border-2 transition ${
                thickness === 'fiveEighth'
                  ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
            >
              <div className="font-semibold">5/8 Inch</div>
              <div className="text-sm text-gray-600">Fire-rated/ceilings</div>
            </button>
          </div>
        </div>

        {/* Drywall Type */}
        <div>
          <label className="block font-semibold mb-2">Drywall Type</label>
          <select
            value={drywallType}
            onChange={(e) => setDrywallType(e.target.value)}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
          >
            {Object.entries(DRYWALL_TYPES).map(([key, type]) => (
              <option key={key} value={key}>
                {type.name}
              </option>
            ))}
          </select>
          <p className="text-sm text-gray-600 mt-1">{DRYWALL_TYPES[drywallType].description}</p>
        </div>

        {/* Calculate Button */}
        <button
          onClick={calculateDebris}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-[1.02]"
        >
          Calculate Drywall Disposal Needs
        </button>

        {/* Results */}
        {results && (
          <div ref={resultsRef} className="space-y-4 mt-6 pt-6 border-t-2 border-gray-200 scroll-mt-24">
            {/* Main Results Box */}
            <div className="bg-gradient-to-r from-slate-700 to-slate-600 text-white rounded-xl p-6">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold">{results.recommendedSize}</div>
                <div className="text-lg">Recommended Dumpster Size</div>
                <div className="text-cyan-300 font-semibold mt-1">{results.costRange}</div>
                <div className="text-sm text-gray-300 mt-1">{results.notes}</div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{results.sheets}</div>
                  <div className="text-sm">Sheets</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{results.weightTons}</div>
                  <div className="text-sm">Tons</div>
                </div>
                <div className="bg-white/20 rounded-lg p-3 text-center">
                  <div className="text-2xl font-bold">{results.volume}</div>
                  <div className="text-sm">Cu Yards</div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Area:</span>
                <span className="font-semibold">{results.sqft} sq ft</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Type:</span>
                <span className="font-semibold">{results.drywallTypeName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Thickness:</span>
                <span className="font-semibold">{results.thicknessDisplay}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Weight:</span>
                <span className="font-semibold">{results.weight.toLocaleString()} lbs</span>
              </div>
            </div>

            {/* Info Note */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
              <div className="flex gap-2">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-blue-800 text-sm">
                  <strong>Mixed Debris Note:</strong> If disposing of drywall WITH other materials (wood, metal, etc.), 
                  consider ordering the next size up. Mixed debris doesn't compact as efficiently as pure drywall.
                </div>
              </div>
            </div>

            {/* Recycling Note */}
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <div className="flex gap-2">
                <div className="text-2xl">♻️</div>
                <div className="text-green-800 text-sm">
                  <strong>Recycling Available:</strong> Drywall is 100% recyclable into new drywall or soil amendment. 
                  Many areas have specialized drywall recycling facilities that charge $50-150 less than standard dumpsters. 
                  Check disposal options below.
                </div>
              </div>
            </div>

            {/* Reset Button */}
            <button
              onClick={reset}
              className="w-full bg-gray-500 text-white py-3 rounded-lg hover:bg-gray-600 transition"
            >
              Start New Calculation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}