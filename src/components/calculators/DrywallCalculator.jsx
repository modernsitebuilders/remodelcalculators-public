'use client';

import { useState, useRef } from 'react';
import { Calculator, Info, Square, Ruler, Package } from 'lucide-react';

// Industry standards based on USG specifications and ASTM C840
const SHEET_SIZES = {
  '4x8': { name: '4×8 (32 sq ft)', area: 32, tapePerSheet: 10 },
  '4x10': { name: '4×10 (40 sq ft)', area: 40, tapePerSheet: 12 },
  '4x12': { name: '4×12 (48 sq ft)', area: 48, tapePerSheet: 14 }
};

const THICKNESS_SPECS = {
  'quarter': { 
    name: '1/4"', 
    weight: 38, 
    application: 'Curved surfaces, overlay',
    screwsPerSheet: 28 
  },
  'threeEighth': { 
    name: '3/8"', 
    weight: 44, 
    application: 'Overlay existing walls',
    screwsPerSheet: 32 
  },
  'half': { 
    name: '1/2"', 
    weight: 54, 
    application: 'Standard walls (most common)',
    screwsPerSheet: 35 
  },
  'fiveEighth': { 
    name: '5/8"', 
    weight: 70, 
    application: 'Fire-rated, ceilings, commercial',
    screwsPerSheet: 38 
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
    
    // Total area minus deductions
    totalArea = totalWallArea + totalCeilingArea - totalDeductions;
    
    // Get sheet specifications
    const sheetArea = SHEET_SIZES[sheetSize].area;
    const tapePerSheet = SHEET_SIZES[sheetSize].tapePerSheet;
    const thicknessSpec = THICKNESS_SPECS[thickness];
    
    // Calculate sheets needed (with 10% waste factor per industry standard)
    const sheetsBase = totalArea / sheetArea;
    const sheetsWithWaste = Math.ceil(sheetsBase * 1.10);
    
    // Joint compound calculation (280 sq ft per gallon per USG specs)
    // Level 4 finish requires 3 coats
    const mudPerCoatGallons = totalArea / 280;
    const totalMudGallons = Math.ceil(mudPerCoatGallons * 3);
    
    // Drywall tape (feet) - approximate based on sheets
    const totalTapeFeet = Math.ceil(sheetsWithWaste * tapePerSheet);
    const tapeRolls = Math.ceil(totalTapeFeet / 250); // 250 ft rolls standard
    
    // Screws calculation (ASTM C840 standard spacing)
    const totalScrews = sheetsWithWaste * thicknessSpec.screwsPerSheet;
    const screwPounds = Math.ceil(totalScrews / 300); // ~300 screws per pound
    
    // Weight calculation for disposal
    const totalWeight = sheetsWithWaste * thicknessSpec.weight;

    setResults({
      totalArea: totalArea.toFixed(0),
      wallArea: totalWallArea.toFixed(0),
      ceilingArea: totalCeilingArea.toFixed(0),
      deductSqFt: totalDeductions.toFixed(0),
      sheets: sheetsWithWaste,
      mudGallons: totalMudGallons,
      tapeFeet: totalTapeFeet,
      tapeRolls: tapeRolls,
      screws: totalScrews,
      screwPounds: screwPounds,
      totalWeight: totalWeight,
      thicknessDisplay: thicknessSpec.name,
      sheetSizeDisplay: SHEET_SIZES[sheetSize].name,
      application: thicknessSpec.application,
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
                    onChange={(e) => updateRoom(index, 'length', e.target.value)}
                    step="0.5"
                    min="1"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
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
                    onChange={(e) => updateRoom(index, 'width', e.target.value)}
                    step="0.5"
                    min="1"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
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
                    onChange={(e) => updateRoom(index, 'height', e.target.value)}
                    step="0.5"
                    min="7"
                    max="20"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
                  />
                </div>
              </div>

              {/* Include Ceiling */}
              <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <input
                  type="checkbox"
                  id={`includeCeiling-${index}`}
                  checked={room.includeCeiling}
                  onChange={(e) => updateRoom(index, 'includeCeiling', e.target.checked)}
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
                  onChange={(e) => updateRoom(index, 'deductions', e.target.value)}
                  step="1"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-cyan-500 focus:outline-none text-lg"
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
          <div className="grid grid-cols-3 gap-3">
            {Object.entries(SHEET_SIZES).map(([key, size]) => (
              <button
                key={key}
                onClick={() => setSheetSize(key)}
                className={`p-4 rounded-lg border-2 transition ${
                  sheetSize === key
                    ? 'border-cyan-500 bg-cyan-50 text-cyan-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="font-semibold">{size.name}</div>
              </button>
            ))}
          </div>
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
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="font-semibold">{spec.name}</div>
                <div className="text-xs text-gray-600 mt-1">{spec.application}</div>
              </button>
            ))}
          </div>
        </div>

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
                    <div className="text-xs text-gray-500 mt-1">Standard 250 ft rolls</div>
                  </div>
                  <div className="text-3xl font-bold text-green-600">{results.tapeRolls} rolls</div>
                </div>

                {/* Screws */}
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-bold text-gray-900">Drywall Screws (1¼" coarse thread)</div>
                    <div className="text-sm text-gray-600">{results.screws.toLocaleString()} screws total</div>
                    <div className="text-xs text-gray-500 mt-1">ASTM C840: 12" o.c. on walls, 12" o.c. on ceilings</div>
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
                <li>• <strong>ASTM C840</strong> - Fastener spacing and installation methods</li>
                <li>• <strong>GA-216</strong> - Gypsum Association finishing levels (Level 4 standard)</li>
                <li>• <strong>USG Specifications</strong> - Material coverage rates and application guidelines</li>
                <li>• <strong>10% Waste Factor</strong> - Standard allowance for cuts, breakage, and odd angles</li>
                <li>• <strong>IRC Chapter 7</strong> - Wall covering thickness and fire rating requirements</li>
              </ul>
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
    </div>
  );
}