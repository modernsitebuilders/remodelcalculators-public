'use client';

import { useState, useRef } from 'react';
import { Calculator, Info, Square, Ruler, Package } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';

// Industry standards based on USG specifications and ASTM C840
const SHEET_SIZES = {
  '4x8': { name: '4×8 (32 sq ft)', area: 32, perimeter: 24 },
  '4x10': { name: '4×10 (40 sq ft)', area: 40, perimeter: 28 },
  '4x12': { name: '4×12 (48 sq ft)', area: 48, perimeter: 32 },
  '4x14': { name: '4×14 (56 sq ft)', area: 56, perimeter: 36 },
  '4x16': { name: '4×16 (64 sq ft)', area: 64, perimeter: 40 }
};

const THICKNESS_SPECS = {
  'quarter': { 
    name: '1/4"', 
    weight: 38, 
    application: 'Curved surfaces, overlay'
  },
  'threeEighth': { 
    name: '3/8"', 
    weight: 44, 
    application: 'Overlay existing walls'
  },
  'half': { 
    name: '1/2"', 
    weight: 54, 
    application: 'Standard walls (most common)'
  },
  'fiveEighth': { 
    name: '5/8"', 
    weight: 70, 
    application: 'Fire-rated, ceilings, commercial'
  }
};

export default function DrywallCalculator() {
  const [rooms, setRooms] = useState([
    { length: '', width: '', height: '8', includeCeiling: false, deductions: '' }
  ]);
  const [sheetSize, setSheetSize] = useState('4x8');
  const [thickness, setThickness] = useState('half');
  const [results, setResults] = useState(null);
  
  const resultsRef = useRef(null);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');

  // ADD VALIDATION RULES HERE (after state declarations)
  const validationRules = {
    'room0-length': [
      CommonRules.unrealistic(4, 100, 'Room length')
    ],
    'room0-width': [
      CommonRules.unrealistic(4, 100, 'Room width')
    ],
    'room0-height': [
      {
        condition: (val) => parseFloat(val) < 7,
        message: 'Ceiling height <7 feet is uncommon - verify measurement',
        type: ValidationTypes.WARNING
      },
      {
        condition: (val) => parseFloat(val) > 12,
        message: 'Ceiling height >12 feet - standard 4×12 sheets may not reach',
        type: ValidationTypes.INFO
      },
      CommonRules.unrealistic(6, 20, 'Ceiling height')
    ]
  };

  // getValues can now access rooms because it's inside the component
  const getValues = () => {
    const values = {};
    rooms.forEach((room, index) => {
      values[`room${index}-length`] = room.length;
      values[`room${index}-width`] = room.width;
      values[`room${index}-height`] = room.height;
    });
    return values;
  };

  const { validate, ValidationDisplay } = useValidation(validationRules);

  const updateRoom = (index, field, value) => {
    const newRooms = [...rooms];
    newRooms[index][field] = value;
    setRooms(newRooms);
  };

  const addRoom = () => {
    setRooms([...rooms, { length: '', width: '', height: '8', includeCeiling: false, deductions: '' }]);
  };

  const removeRoom = (index) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter((_, i) => i !== index));
    }
  };

  const calculateMaterials = () => {
    let totalArea = 0;
    let totalWallArea = 0;
    let totalCeilingArea = 0;
    let totalDeductions = 0;

    // Calculate totals from all rooms
    for (const room of rooms) {
      const roomLength = parseFloat(room.length) || 0;
      const roomWidth = parseFloat(room.width) || 0;
      const roomHeight = parseFloat(room.height) || 0;
      const deductSqFt = parseFloat(room.deductions) || 0;

      if (roomLength === 0 || roomWidth === 0 || roomHeight === 0) {
        continue;
      }

      // Calculate wall area (all four walls)
      const wallArea = 2 * (roomLength + roomWidth) * roomHeight;
      totalWallArea += wallArea;
      
      // Calculate ceiling area if included
      if (room.includeCeiling) {
        const ceilingArea = roomLength * roomWidth;
        totalCeilingArea += ceilingArea;
      }
      
      totalDeductions += deductSqFt;
    }

    if (totalWallArea === 0) {
      alert('Please enter valid dimensions for at least one room');
      return;
    }
    
    // Apply waste factors per industry standards
    // Walls: 10% waste factor
    const wallAreaWithWaste = totalWallArea * 1.10;
    // Ceilings: 10% + additional 4% = 14% total waste factor (per research)
    const ceilingAreaWithWaste = totalCeilingArea * 1.14;
    
    // Total area after waste factors, minus deductions
    const totalAreaWithWaste = wallAreaWithWaste + ceilingAreaWithWaste - totalDeductions;
    totalArea = totalWallArea + totalCeilingArea - totalDeductions;
    
    // Get sheet specifications
    const sheetArea = SHEET_SIZES[sheetSize].area;
    const sheetPerimeter = SHEET_SIZES[sheetSize].perimeter;
    const thicknessSpec = THICKNESS_SPECS[thickness];
    
    // Calculate sheets needed (waste already applied above)
    const sheetsNeeded = Math.ceil(totalAreaWithWaste / sheetArea);
    
    // Joint compound calculation per USG specs
    // Level 4 finish: 3 coats at 280 sq ft per gallon per coat
    const gallonsPerCoat = totalArea / 280;
    const totalMudGallons = Math.ceil(gallonsPerCoat * 3);
    
    // Drywall tape calculation - Industry standard: 1 roll (500 ft) per 100 sq ft
    // Alternative method: sheet perimeter × number of sheets
    const tapeFeetByArea = (totalArea / 100) * 500;
    const tapeFeetByPerimeter = sheetsNeeded * sheetPerimeter;
    // Use the higher estimate for safety
    const totalTapeFeet = Math.ceil(Math.max(tapeFeetByArea, tapeFeetByPerimeter));
    const tapeRolls = Math.ceil(totalTapeFeet / 500); // 500 ft rolls standard
    
    // Screws calculation per ASTM C840
    // Walls: 1 screw per sq ft (16" o.c. spacing)
    // Ceilings: 1.25 screws per sq ft (12" o.c. spacing)
    const wallScrews = Math.ceil(wallAreaWithWaste * 1.0);
    const ceilingScrews = Math.ceil(ceilingAreaWithWaste * 1.25);
    const totalScrews = wallScrews + ceilingScrews;
    const screwPounds = Math.ceil(totalScrews / 300); // ~300 screws per pound
    
    // Weight calculation for disposal
    const totalWeight = sheetsNeeded * thicknessSpec.weight;

    setResults({
      totalArea: totalArea.toFixed(0),
      wallArea: totalWallArea.toFixed(0),
      ceilingArea: totalCeilingArea.toFixed(0),
      deductSqFt: totalDeductions.toFixed(0),
      sheets: sheetsNeeded,
      mudGallons: totalMudGallons,
      tapeFeet: totalTapeFeet,
      tapeRolls: tapeRolls,
      screws: totalScrews,
      wallScrews: wallScrews,
      ceilingScrews: ceilingScrews,
      screwPounds: screwPounds,
      totalWeight: totalWeight,
      thicknessDisplay: thicknessSpec.name,
      sheetSizeDisplay: SHEET_SIZES[sheetSize].name,
      application: thicknessSpec.application,
      roomCount: rooms.length
    });
    
    // Track the calculation
    trackCalculation('drywall', {
      rooms: rooms,
      sheetSize: sheetSize,
      thickness: thickness
    }, {
      totalArea: totalArea.toFixed(0),
      wallArea: totalWallArea.toFixed(0),
      ceilingArea: totalCeilingArea.toFixed(0),
      deductSqFt: totalDeductions.toFixed(0),
      sheets: sheetsNeeded,
      mudGallons: totalMudGallons,
      tapeFeet: totalTapeFeet,
      tapeRolls: tapeRolls,
      screws: totalScrews,
      screwPounds: screwPounds,
      totalWeight: totalWeight,
      sheetSize: SHEET_SIZES[sheetSize].name,
      thickness: thicknessSpec.name,
      roomCount: rooms.length
    });
    
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const reset = () => {
    setRooms([{ length: '', width: '', height: '8', includeCeiling: false, deductions: '' }]);
    setSheetSize('4x8');
    setThickness('half');
    setResults(null);
  };

 const handleCopyCalculation = async () => {
    if (!results) return;
    
    // Prepare inputs
    const inputsData = {
      'Number of rooms': rooms.length,
      'Sheet size': SHEET_SIZES[sheetSize].name,
      'Thickness': THICKNESS_SPECS[thickness].name
    };
    
    // Add room details
    rooms.forEach((room, index) => {
      if (room.length && room.width && room.height) {
        inputsData[`Room ${index + 1}`] = `${room.length}' × ${room.width}' × ${room.height}'${room.includeCeiling ? ' (with ceiling)' : ''}`;
      }
    });
    
    // Prepare outputs
    const outputs = {
      'Total wall area': `${results.totalWallArea} sq ft`,
      'Total ceiling area': `${results.totalCeilingArea} sq ft`,
      'Combined area': `${results.combinedArea} sq ft`,
      'Drywall sheets needed': `${results.sheets} sheets`,
      'Joint compound (all-purpose)': `${results.jointCompoundBuckets} buckets`,
      'Joint tape': `${results.jointTapeRolls} rolls (250ft)`,
      'Corner bead': `${results.cornerBeadPieces} pieces (8ft)`,
      'Screws': `${results.screwsBoxes} boxes (1lb)`,
      'Total weight': `${results.totalWeight.toLocaleString()} lbs`
    };
    
    const note = `Includes 10% waste factor per ASTM C840 standards. Weight based on ${THICKNESS_SPECS[thickness].name} thickness.`;
    
    const success = await copyCalculation('Drywall Calculator', inputsData, outputs, note);
    
    if (success) {
      setCopyButtonText('✓ Copied!');
      setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
    } else {
      alert('Unable to copy. Please copy results manually.');
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white p-6">
        <div className="flex items-center justify-center gap-3">
          <Calculator className="w-8 h-8" />
          <h3 className="text-2xl font-bold">Drywall Material Calculator</h3>
        </div>
        <p className="text-center mt-2 text-cyan-100">Industry-standard calculations per ASTM C840 & USG specifications</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Rooms Section */}
        <div className="space-y-4">
          {rooms.map((room, index) => (
            <div key={index} className="border-2 border-gray-200 rounded-lg p-5 space-y-4 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-900 text-lg">
                  Room {index + 1}
                </h4>
                {rooms.length > 1 && (
                  <button
                    onClick={() => removeRoom(index)}
                    className="text-red-600 hover:text-red-800 font-semibold text-sm"
                  >
                    Remove Room
                  </button>
                )}
              </div>

              {/* Room Dimensions */}
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold mb-2 text-gray-700">
                    <Ruler className="w-4 h-4 inline mr-1" />
                    Length (feet)
                  </label>
                  <input
                    type="number"
                    value={room.length}
                    onChange={(e) => { updateRoom(index, 'length', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                    step="0.5"
                    min="1"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-cyan-500 focus:outline-none text-lg ${
                      !room.length ? 'border-orange-400' : 'border-gray-300'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-700">
                    <Ruler className="w-4 h-4 inline mr-1" />
                    Width (feet)
                  </label>
                  <input
                    type="number"
                    value={room.width}
                    onChange={(e) => { updateRoom(index, 'width', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                    step="0.5"
                    min="1"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-cyan-500 focus:outline-none text-lg ${
                      !room.width ? 'border-orange-400' : 'border-gray-300'
                    }`}
                  />
                </div>

                <div>
                  <label className="block font-semibold mb-2 text-gray-700">
                    <Ruler className="w-4 h-4 inline mr-1" />
                    Height (feet)
                  </label>
                  <input
                    type="number"
                    value={room.height}
                    onChange={(e) => { updateRoom(index, 'height', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                    step="0.5"
                    min="7"
                    max="20"
                    className={`w-full px-4 py-3 border-2 rounded-lg focus:border-cyan-500 focus:outline-none text-lg ${
                      !room.height ? 'border-orange-400' : 'border-gray-300'
                    }`}
                  />
                </div>
              </div>

              {/* Include Ceiling */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg border border-yellow-400">
                <input
                  type="checkbox"
                  id={`includeCeiling-${index}`}
                  checked={room.includeCeiling}
                  onChange={(e) => { updateRoom(index, 'includeCeiling', e.target.checked); setTimeout(() => validate(getValues()), 100); }}
                  className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 rounded"
                />
                <label htmlFor={`includeCeiling-${index}`} className="font-semibold text-gray-700 cursor-pointer">
                  Include ceiling drywall
                </label>
              </div>

              {/* Deductions */}
              <div>
                <label className="block font-semibold mb-2 text-gray-700">
                  <Square className="w-4 h-4 inline mr-1" />
                  Deductions (doors, windows) - sq ft
                </label>
                <input
                  type="number"
                  value={room.deductions}
                  onChange={(e) => { updateRoom(index, 'deductions', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                  step="1"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-yellow-400 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
                />
                <p className="text-sm text-gray-600 mt-1">
                  <Info className="w-4 h-4 inline" /> Typical door: 20 sq ft | Standard window: 15 sq ft
                </p>
              </div>
            </div>
          ))}

          {/* Add Room Button */}
          <button
            onClick={addRoom}
            className="w-full border-2 border-dashed border-cyan-400 text-cyan-600 hover:border-cyan-600 hover:bg-cyan-50 py-4 rounded-lg font-semibold transition"
          >
            + Add Another Room
          </button>
        </div>

        {/* Sheet Size Selection */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Sheet Size</label>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {Object.entries(SHEET_SIZES).map(([key, size]) => (
              <button
                key={key}
                onClick={() => setSheetSize(key)}
                className={`p-4 rounded-lg border-2 transition ${
                  sheetSize === key
                    ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                    : 'border-yellow-400 hover:border-gray-400'
                }`}
              >
                <div className="font-semibold text-sm">{size.name}</div>
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <Info className="w-4 h-4 inline" /> Longer sheets reduce butt seams and finishing labor
          </p>
        </div>

        {/* Thickness Selection */}
        <div>
          <label className="block font-semibold mb-2 text-gray-700">Drywall Thickness</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {Object.entries(THICKNESS_SPECS).map(([key, spec]) => (
              <button
                key={key}
                onClick={() => setThickness(key)}
                className={`p-4 rounded-lg border-2 transition ${
                  thickness === key
                    ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                    : 'border-yellow-400 hover:border-gray-400'
                }`}
              >
                <div className="font-semibold">{spec.name}</div>
                <div className="text-xs text-gray-600 mt-1">{spec.application}</div>
              </button>
            ))}
          </div>
        </div>
<ValidationDisplay />
        {/* Calculate Button */}
        <button
          onClick={calculateMaterials}
          className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-lg transition transform hover:scale-[1.02]"
        >
          Calculate Materials Needed
        </button>

        {/* Results */}
        {results && (
          <div ref={resultsRef} className="mt-8 space-y-6 border-t-4 border-cyan-500 pt-6">
            {/* Area Summary */}
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-lg p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                <Square className="w-6 h-6 text-cyan-600" />
                Coverage Area
              </h4>
              <p className="text-sm text-gray-600 mb-4">Total for {results.roomCount} room{results.roomCount > 1 ? 's' : ''}</p>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-cyan-600">{results.wallArea}</div>
                  <div className="text-sm text-gray-600 mt-1">Wall Area (sq ft)</div>
                </div>
                {parseInt(results.ceilingArea) > 0 && (
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-blue-600">{results.ceilingArea}</div>
                    <div className="text-sm text-gray-600 mt-1">Ceiling Area (sq ft)</div>
                  </div>
                )}
                {parseInt(results.deductSqFt) > 0 && (
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-3xl font-bold text-orange-600">-{results.deductSqFt}</div>
                    <div className="text-sm text-gray-600 mt-1">Deductions (sq ft)</div>
                  </div>
                )}
                <div className="bg-white rounded-lg p-4 text-center border-2 border-cyan-500">
                  <div className="text-3xl font-bold text-gray-900">{results.totalArea}</div>
                  <div className="text-sm font-semibold text-gray-700 mt-1">Total Area (sq ft)</div>
                </div>
              </div>
            </div>

            {/* Material Requirements */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package className="w-6 h-6 text-cyan-600" />
                Materials Required
              </h4>
              
              <div className="space-y-4">
                {/* Drywall Sheets */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-bold text-gray-900">Drywall Sheets</div>
                    <div className="text-sm text-gray-600">{results.sheetSizeDisplay} × {results.thicknessDisplay}</div>
                    <div className="text-xs text-gray-500 mt-1">Includes 10% waste factor</div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-600">{results.sheets}</div>
                </div>

                {/* Joint Compound */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-bold text-gray-900">Joint Compound (All-Purpose)</div>
                    <div className="text-sm text-gray-600">USG spec: 280 sq ft/gallon per coat</div>
                    <div className="text-xs text-gray-500 mt-1">Level 4 finish (3 coats)</div>
                  </div>
                  <div className="text-3xl font-bold text-blue-600">{results.mudGallons} gal</div>
                </div>

                {/* Drywall Tape */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-bold text-gray-900">Paper Drywall Tape</div>
                    <div className="text-sm text-gray-600">{results.tapeFeet} linear feet</div>
                    <div className="text-xs text-gray-500 mt-1">Industry standard: 500 ft per 100 sq ft drywall</div>
                  </div>
                  <div className="text-3xl font-bold text-green-600">{results.tapeRolls} rolls</div>
                </div>

                {/* Screws */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-bold text-gray-900">Drywall Screws (1¼" coarse thread)</div>
                    <div className="text-sm text-gray-600">{results.screws.toLocaleString()} screws total</div>
                    {parseInt(results.ceilingArea) > 0 && (
                      <div className="text-xs text-gray-500 mt-1">
                        Walls: {results.wallScrews.toLocaleString()} (1.0/sq ft) | Ceilings: {results.ceilingScrews.toLocaleString()} (1.25/sq ft)
                      </div>
                    )}
                    <div className="text-xs text-gray-500 mt-1">ASTM C840: 16" o.c. walls, 12" o.c. ceilings</div>
                  </div>
                  <div className="text-3xl font-bold text-purple-600">{results.screwPounds} lbs</div>
                </div>

                {/* Weight */}
                <div className="flex items-center justify-between p-4 bg-cyan-50 rounded-lg border-2 border-cyan-200">
                  <div>
                    <div className="font-bold text-gray-900">Total Material Weight</div>
                    <div className="text-sm text-gray-600">For planning delivery/disposal</div>
                  </div>
                  <div className="text-3xl font-bold text-cyan-700">{results.totalWeight.toLocaleString()} lbs</div>
                </div>
              </div>
            </div>

            {/* Industry Standards Reference */}
            <div className="bg-blue-50 rounded-lg p-5 border-l-4 border-blue-500">
              <h5 className="font-bold text-gray-900 mb-2">Industry Standards Applied:</h5>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>ASTM C840</strong> - Fastener spacing: 16" o.c. walls, 12" o.c. ceilings</li>
                <li>• <strong>GA-216</strong> - Level 4 finish standard (3 coats joint compound)</li>
                <li>• <strong>USG Specifications</strong> - 280 sq ft per gallon per coat coverage</li>
                <li>• <strong>Waste Factors</strong> - 10% walls, 14% ceilings (10% + 4% overhead difficulty)</li>
                <li>• <strong>Tape Requirements</strong> - 500 linear feet per 100 sq ft of drywall</li>
                <li>• <strong>Screw Density</strong> - 1.0 per sq ft walls, 1.25 per sq ft ceilings</li>
                <li>• <strong>IRC Chapter 7</strong> - 5/8" minimum for ceilings with 24" o.c. joists</li>
              </ul>
            </div>

            {/* Ceiling thickness warning */}
            {parseInt(results.ceilingArea) > 0 && thickness !== 'fiveEighth' && (
              <div className="bg-orange-50 rounded-lg p-5 border-l-4 border-orange-500">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-bold text-gray-900 mb-1">Ceiling Thickness Recommendation</h5>
                    <p className="text-sm text-gray-700">
                      Industry standard (GA-216) requires <strong>5/8" minimum thickness</strong> for ceilings with joists spaced 24" on center. 
                      Consider using 5/8" drywall for your ceiling installation to meet code requirements and prevent sagging.
                    </p>
                  </div>
                </div>
              </div>
            )}

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
      onClick={() => printCalculation('Drywall Calculator')}
      className="copy-calc-btn flex-1"
    >
      🖨️ Print Results
    </button>
  </div>
</div>

            {/* Reset Button */}
            <button
              onClick={reset}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 rounded-lg font-semibold transition"
            >
              Reset Calculator
            </button>
          </div>
        )}
      </div>
      <FAQSection calculatorId="drywall-calculator" />
    </div>
  );
}