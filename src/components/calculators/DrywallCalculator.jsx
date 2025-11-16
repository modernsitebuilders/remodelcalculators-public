'use client';

import React, { useState, useMemo, useRef } from 'react';
import { Calculator, Info, Square, Ruler, Package } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';
import { trackCalculatorInteraction } from '@/utils/buttonTracking';
import {
  NumberInput,
  SelectInput,
  MaterialCard,
  SectionCard,
  InputGrid,
  CalculateButtons,
  ResultsButtons
} from '@/components/calculator';

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

const formatOptions = (optionsObj) => {
  return Object.entries(optionsObj).map(([value, data]) => ({
    value,
    label: data.name
  }));
};

export default function DrywallCalculator() {
  const [rooms, setRooms] = useState([
    { length: '', width: '', height: '8', includeCeiling: false, ceilingThickness: 'fiveEighth', deductions: '' }
  ]);
  const [sheetSize, setSheetSize] = useState('4x8');
  const [thickness, setThickness] = useState('half');
  const [results, setResults] = useState(null);
  const [showResults, setShowResults] = useState(false);
  
  const resultsRef = useRef(null);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');

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
    setRooms([...rooms, { length: '', width: '', height: '8', includeCeiling: false, ceilingThickness: 'fiveEighth', deductions: '' }]);
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
    let hasCeiling = false;
    let firstCeilingThickness = null;

    for (const room of rooms) {
      const roomLength = parseFloat(room.length) || 0;
      const roomWidth = parseFloat(room.width) || 0;
      const roomHeight = parseFloat(room.height) || 0;
      const deductSqFt = parseFloat(room.deductions) || 0;

      if (roomLength === 0 || roomWidth === 0 || roomHeight === 0) {
        continue;
      }

      const wallArea = 2 * (roomLength + roomWidth) * roomHeight;
      totalWallArea += wallArea;
      
      if (room.includeCeiling) {
        hasCeiling = true;
        if (!firstCeilingThickness) {
          firstCeilingThickness = room.ceilingThickness;
        }
        const ceilingArea = roomLength * roomWidth;
        totalCeilingArea += ceilingArea;
      }
      
      totalDeductions += deductSqFt;
    }

    if (totalWallArea === 0) {
      alert('Please enter valid dimensions for at least one room');
      return;
    }
    
    const wallAreaWithWaste = totalWallArea * 1.10;
    const ceilingAreaWithWaste = totalCeilingArea * 1.14;
    
    const totalAreaWithWaste = wallAreaWithWaste + ceilingAreaWithWaste - totalDeductions;
    totalArea = totalWallArea + totalCeilingArea - totalDeductions;
    
    const sheetArea = SHEET_SIZES[sheetSize].area;
    const sheetPerimeter = SHEET_SIZES[sheetSize].perimeter;
    const wallThicknessSpec = THICKNESS_SPECS[thickness];
    
    // Calculate wall sheets
    const wallSheets = Math.ceil(wallAreaWithWaste / sheetArea);
    const wallWeight = wallSheets * wallThicknessSpec.weight;
    
    // Calculate ceiling sheets separately
    let ceilingSheets = 0;
    let ceilingWeight = 0;
    let ceilingThicknessSpec = null;
    if (totalCeilingArea > 0 && firstCeilingThickness) {
      ceilingThicknessSpec = THICKNESS_SPECS[firstCeilingThickness];
      ceilingSheets = Math.ceil(ceilingAreaWithWaste / sheetArea);
      ceilingWeight = ceilingSheets * ceilingThicknessSpec.weight;
    }
    
    const sheetsNeeded = wallSheets + ceilingSheets;
    const totalWeight = wallWeight + ceilingWeight;
    
    const gallonsPerCoat = totalArea / 280;
    const totalMudGallons = Math.ceil(gallonsPerCoat * 3);
    
    const tapeFeetByArea = totalAreaWithWaste * 5;
    const tapeFeetByPerimeter = sheetsNeeded * sheetPerimeter;
    const totalTapeFeet = Math.ceil(Math.max(tapeFeetByArea, tapeFeetByPerimeter));
    const tapeRolls = Math.ceil(totalTapeFeet / 500);
    
    const wallScrews = Math.ceil(wallAreaWithWaste * 1.0);
    const ceilingScrews = Math.ceil(ceilingAreaWithWaste * 1.25);
    const totalScrews = wallScrews + ceilingScrews;
    const screwPounds = Math.ceil(totalScrews / 300);

    setResults({
      totalArea: totalArea.toFixed(0),
      wallArea: totalWallArea.toFixed(0),
      ceilingArea: totalCeilingArea.toFixed(0),
      deductSqFt: totalDeductions.toFixed(0),
      sheets: sheetsNeeded,
      wallSheets: wallSheets,
      ceilingSheets: ceilingSheets,
      mudGallons: totalMudGallons,
      tapeFeet: totalTapeFeet,
      tapeRolls: tapeRolls,
      screws: totalScrews,
      wallScrews: wallScrews,
      ceilingScrews: ceilingScrews,
      screwPounds: screwPounds,
      totalWeight: totalWeight,
      wallThickness: wallThicknessSpec.name,
      ceilingThickness: ceilingThicknessSpec ? ceilingThicknessSpec.name : null,
      thicknessDisplay: wallThicknessSpec.name,
      sheetSizeDisplay: SHEET_SIZES[sheetSize].name,
      application: wallThicknessSpec.application,
      roomCount: rooms.length,
      hasCeiling: hasCeiling
    });
    
    setShowResults(true);
    
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
      wallSheets: wallSheets,
      ceilingSheets: ceilingSheets,
      mudGallons: totalMudGallons,
      tapeFeet: totalTapeFeet,
      tapeRolls: tapeRolls,
      screws: totalScrews,
      screwPounds: screwPounds,
      totalWeight: totalWeight,
      sheetSize: SHEET_SIZES[sheetSize].name,
      thickness: wallThicknessSpec.name,
      ceilingThickness: ceilingThicknessSpec ? ceilingThicknessSpec.name : null,
      roomCount: rooms.length
    });
    
    trackCalculatorInteraction.calculate('drywall', true);

    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  const reset = () => {
    trackCalculatorInteraction.startOver('drywall');
    setRooms([{ length: '', width: '', height: '8', includeCeiling: false, ceilingThickness: 'fiveEighth', deductions: '' }]);
    setSheetSize('4x8');
    setThickness('half');
    setResults(null);
    setShowResults(false);
  };

  const handleCopyCalculation = async () => {
    trackCalculatorInteraction.copyResults('drywall');
    if (!results) return;
    
    const inputsData = {
      'Number of rooms': rooms.length,
      'Sheet size': SHEET_SIZES[sheetSize].name,
      'Wall thickness': THICKNESS_SPECS[thickness].name
    };
    
    if (results.hasCeiling && results.ceilingThickness) {
      inputsData['Ceiling thickness'] = results.ceilingThickness;
    }
    
    rooms.forEach((room, index) => {
      if (room.length && room.width && room.height) {
        inputsData[`Room ${index + 1}`] = `${room.length}' × ${room.width}' × ${room.height}'${room.includeCeiling ? ' (with ceiling)' : ''}`;
      }
    });
    
    const outputs = {
      'Total wall area': `${results.wallArea} sq ft`,
      'Total ceiling area': `${results.ceilingArea} sq ft`,
      'Total area': `${results.totalArea} sq ft`,
      'Drywall sheets needed': `${results.sheets} sheets`,
      'Joint compound': `${results.mudGallons} gallons`,
      'Drywall tape': `${results.tapeRolls} rolls (500ft)`,
      'Screws': `${results.screwPounds} lbs`,
      'Total weight': `${results.totalWeight.toLocaleString()} lbs`
    };
    
    const note = `Includes 10% waste factor for walls, 14% for ceilings per ASTM C840 standards.`;
    
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
            <SectionCard 
              key={index}
              title={`Room ${index + 1}`}
              icon={Ruler}
              collapsible={true}
              defaultExpanded={true}
              headerAction={rooms.length > 1 && (
                <button
                  onClick={() => removeRoom(index)}
                  className="text-red-600 hover:text-red-800 font-semibold text-sm"
                >
                  Remove Room
                </button>
              )}
            >
              <InputGrid columns={3}>
                <NumberInput
                  label="Length"
                  value={room.length}
                  onChange={(value) => updateRoom(index, 'length', value)}
                  unit="feet"
                  required={true}
                  fieldName={`room${index}-length`}
                  step="0.5"
                  min="1"
                />
                <NumberInput
                  label="Width"
                  value={room.width}
                  onChange={(value) => updateRoom(index, 'width', value)}
                  unit="feet"
                  required={true}
                  fieldName={`room${index}-width`}
                  step="0.5"
                  min="1"
                />
                <NumberInput
                  label="Height"
                  value={room.height}
                  onChange={(value) => updateRoom(index, 'height', value)}
                  unit="feet"
                  required={true}
                  fieldName={`room${index}-height`}
                  step="0.5"
                  min="7"
                  max="20"
                />
              </InputGrid>

              <div className="mt-4 max-w-md">
                <NumberInput
                  label="Deductions (doors, windows)"
                  value={room.deductions}
                  onChange={(value) => updateRoom(index, 'deductions', value)}
                  unit="sq ft"
                  fieldName={`room${index}-deductions`}
                  step="1"
                  min="0"
                  note="Typical door: 20 sq ft | Standard window: 15 sq ft"
                />
              </div>

              <div className="mt-4">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    id={`includeCeiling-${index}`}
                    checked={room.includeCeiling}
                    onChange={(e) => updateRoom(index, 'includeCeiling', e.target.checked)}
                    className="w-5 h-5 text-cyan-600 focus:ring-cyan-500 rounded"
                  />
                  <span className="font-semibold text-gray-700">
                    Include ceiling drywall
                  </span>
                </label>
              </div>

              {room.includeCeiling && (
                <div className="mt-4 max-w-md">
                  <SelectInput
                    label="Ceiling Drywall Thickness"
                    value={room.ceilingThickness}
                    onChange={(value) => updateRoom(index, 'ceilingThickness', value)}
                    options={formatOptions(THICKNESS_SPECS)}
                    note="IRC R702: 5/8″ minimum for 24″ o.c. joists (most common)"
                    renderOption={(option) => (
                      <div>
                        <div className="font-semibold">{THICKNESS_SPECS[option.value].name}</div>
                        <div className="text-xs text-gray-600 mt-1">{THICKNESS_SPECS[option.value].application}</div>
                      </div>
                    )}
                  />
                </div>
              )}
            </SectionCard>
          ))}

          <button
            onClick={addRoom}
            className="w-full border-2 border-dashed border-cyan-400 text-cyan-600 hover:border-cyan-600 hover:bg-cyan-50 py-4 rounded-lg font-semibold transition"
          >
            + Add Another Room
          </button>
        </div>

        <SectionCard title="Sheet Size" icon={Square}>
          <SelectInput
            label="Sheet Size"
            value={sheetSize}
            onChange={setSheetSize}
            options={formatOptions(SHEET_SIZES)}
            note="Longer sheets reduce butt seams and finishing labor"
          />
        </SectionCard>

        <SectionCard title="Wall Drywall Thickness" icon={Package}>
          <SelectInput
            label="Wall Drywall Thickness"
            value={thickness}
            onChange={setThickness}
            options={formatOptions(THICKNESS_SPECS)}
            renderOption={(option) => (
              <div>
                <div className="font-semibold">{THICKNESS_SPECS[option.value].name}</div>
                <div className="text-xs text-gray-600 mt-1">{THICKNESS_SPECS[option.value].application}</div>
              </div>
            )}
          />
        </SectionCard>

        <ValidationDisplay />

        <CalculateButtons
          onCalculate={calculateMaterials}
          onStartOver={reset}
          showStartOver={showResults}
        />

        {showResults && results && (
          <div ref={resultsRef} className="mt-8 space-y-6 border-t-4 border-cyan-500 pt-6">
            {/* Area Summary */}
            <SectionCard title="Coverage Area" icon={Square} variant="info">
              <p className="text-sm text-gray-600 mb-4">Total for {results.roomCount} room{results.roomCount > 1 ? 's' : ''}</p>
              <InputGrid columns={4}>
                <MaterialCard
                  title="Wall Area"
                  value={results.wallArea}
                  unit="sq ft"
                  color="cyan"
                />
                {parseInt(results.ceilingArea) > 0 && (
                  <MaterialCard
                    title="Ceiling Area"
                    value={results.ceilingArea}
                    unit="sq ft"
                    color="blue"
                  />
                )}
                {parseInt(results.deductSqFt) > 0 && (
                  <MaterialCard
                    title="Deductions"
                    value={`-${results.deductSqFt}`}
                    unit="sq ft"
                    color="orange"
                  />
                )}
                <MaterialCard
                  title="Total Area"
                  value={results.totalArea}
                  unit="sq ft"
                  color="gray"
                  highlight={true}
                />
              </InputGrid>
            </SectionCard>

            {/* Material Requirements */}
            <SectionCard title="Materials Required" icon={Package}>
              <div className="space-y-4">
                <MaterialCard
                  title="Drywall Sheets"
                  value={results.sheets}
                  subtitle={
                    results.ceilingSheets > 0 
                      ? `Walls: ${results.wallSheets} sheets (${results.wallThickness}) | Ceiling: ${results.ceilingSheets} sheets (${results.ceilingThickness})`
                      : `${results.sheetSizeDisplay} × ${results.wallThickness}`
                  }
                  note="Includes 10% waste for walls, 14% for ceilings"
                  color="cyan"
                />

                <MaterialCard
                  title="Joint Compound (All-Purpose)"
                  value={results.mudGallons}
                  unit="gal"
                  subtitle="USG spec: 280 sq ft/gallon per coat"
                  note="Level 4 finish (3 coats) | Professionals use less; DIY should plan full amount"
                  color="blue"
                />

                <MaterialCard
                  title="Paper Drywall Tape"
                  value={results.tapeRolls}
                  unit="rolls"
                  subtitle={`${results.tapeFeet} linear feet`}
                  note="Industry standard: 500 ft per 100 sq ft drywall"
                  color="green"
                />

                <MaterialCard
                  title="Drywall Screws (1¼″ coarse thread)"
                  value={results.screwPounds}
                  unit="lbs"
                  subtitle={`${results.screws.toLocaleString()} screws total`}
                  note={
                    parseInt(results.ceilingArea) > 0 
                      ? `Walls: ${results.wallScrews.toLocaleString()} (1.0/sq ft) | Ceilings: ${results.ceilingScrews.toLocaleString()} (1.25/sq ft) | ASTM C840: 16" o.c. walls, 12" o.c. ceilings`
                      : 'ASTM C840: 16" o.c. walls, 12" o.c. ceilings'
                  }
                  color="purple"
                />

                <MaterialCard
                  title="Total Material Weight"
                  value={results.totalWeight.toLocaleString()}
                  unit="lbs"
                  subtitle="For planning delivery/disposal"
                  color="cyan"
                  highlight={true}
                />
              </div>
            </SectionCard>

            {/* Industry Standards Reference */}
            <SectionCard title="Industry Standards Applied" variant="info">
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>ASTM C840</strong> - Fastener spacing: 16" o.c. walls, 12" o.c. ceilings</li>
                <li>• <strong>GA-216</strong> - Level 4 finish standard (3 coats joint compound)</li>
                <li>• <strong>USG Specifications</strong> - 280 sq ft per gallon per coat coverage</li>
                <li>• <strong>Waste Factors</strong> - 10% walls, 14% ceilings (10% + 4% overhead difficulty)</li>
                <li>• <strong>Tape Requirements</strong> - 500 linear feet per 100 sq ft of drywall</li>
                <li>• <strong>Screw Density</strong> - 1.0 per sq ft walls, 1.25 per sq ft ceilings</li>
                <li>• <strong>IRC R702</strong> - 5/8" minimum for ceilings with 24" o.c. joists</li>
              </ul>
            </SectionCard>

            {/* Ceiling thickness warning */}
            {results.hasCeiling && results.ceilingThickness !== '5/8"' && (
              <SectionCard title="Ceiling Thickness Recommendation" variant="warning">
                <p className="text-sm text-gray-700">
                  Industry standard (IRC R702) requires <strong>5/8" minimum thickness</strong> for ceilings with joists spaced 24" on center. 
                  Consider using 5/8" drywall for your ceiling installation to meet code requirements and prevent sagging.
                </p>
              </SectionCard>
            )}

            <ResultsButtons
              onCopy={handleCopyCalculation}
              onPrint={() => printCalculation('Drywall Calculator')}
              copyButtonText={copyButtonText}
            />
          </div>
        )}
      </div>
      <FAQSection calculatorId="drywall-calculator" />
    </div>
  );
}