'use client';
import Link from 'next/link';
import React, { useState, useRef } from 'react';
import { Calculator, Info } from 'lucide-react';
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
  SectionCard,
  InputGrid,
  CalculateButtons,
  ResultsButtons
} from '@/components/calculator';

export default function PaintCalculator() {
  const [rooms, setRooms] = useState([{ 
    id: 1, 
    length: '', 
    width: '', 
    height: '', 
    doors: [{ id: 1, size: 'standard' }],
    windows: [{ id: 1, size: 'standard' }, { id: 2, size: 'standard' }],
    customDoorArea: '',
    customWindowArea: '',
    useCustomDoorSizes: false,
    useCustomWindowSizes: false
  }]);
  
  // Wall paint settings
  const [paintWalls, setPaintWalls] = useState(true);
  const [wallCoats, setWallCoats] = useState(2);
  const [wallSurfaceTexture, setWallSurfaceTexture] = useState('smooth');
  const [wallSurfaceCondition, setWallSurfaceCondition] = useState('painted');
  const [wallApplicationMethod, setWallApplicationMethod] = useState('roller');
  const [wallPaintType, setWallPaintType] = useState('standard');
  
  // Ceiling paint settings
  const [paintCeiling, setPaintCeiling] = useState(false);
  const [ceilingCoats, setCeilingCoats] = useState(1);
  const [ceilingSurfaceCondition, setCeilingSurfaceCondition] = useState('painted');
  const [ceilingApplicationMethod, setCeilingApplicationMethod] = useState('roller');
  const [ceilingPaintType, setCeilingPaintType] = useState('standard');
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');
  
  const [showResults, setShowResults] = useState(false);
  const resultsRef = useRef(null);

  // Options arrays for SelectInput components
  const coatOptions = [
    { value: '1', label: '1 Coat' },
    { value: '2', label: '2 Coats (Recommended)' },
    { value: '3', label: '3 Coats' }
  ];

  const paintTypeOptions = [
    { value: 'economy', label: 'Economy (350 sq ft/gal)' },
    { value: 'standard', label: 'Standard (375 sq ft/gal)' },
    { value: 'premium', label: 'Premium (400 sq ft/gal)' }
  ];

  const textureOptions = [
    { value: 'smooth', label: 'Smooth (Standard)' },
    { value: 'light', label: 'Light Texture (-15%)' },
    { value: 'heavy', label: 'Heavy Texture (-25%)' },
    { value: 'stucco', label: 'Interior Stucco (-50%)' }
  ];

  const conditionOptions = [
    { value: 'painted', label: 'Previously Painted (no primer)' },
    { value: 'unpainted', label: 'Unpainted/New Drywall (needs primer)' }
  ];

  const applicationOptions = [
    { value: 'roller', label: 'Roller (Standard)' },
    { value: 'spray', label: 'Spray (+33% paint)' }
  ];

  const doorSizeOptions = [
    { value: 'small', label: 'Small/Closet - 15 sq ft' },
    { value: 'standard', label: 'Standard - 20 sq ft' },
    { value: 'large', label: 'Large/Double - 25 sq ft' }
  ];

  const windowSizeOptions = [
    { value: 'small', label: 'Small - 10 sq ft' },
    { value: 'standard', label: 'Standard - 15 sq ft' },
    { value: 'large', label: 'Large - 25 sq ft' },
    { value: 'xlarge', label: 'XLarge/Bay - 40 sq ft' }
  ];

  const addRoom = () => {
    setRooms([...rooms, { 
      id: rooms.length + 1, 
      length: '12', 
      width: '10', 
      height: '8', 
      doors: [{ id: 1, size: 'standard' }],
      windows: [{ id: 1, size: 'standard' }, { id: 2, size: 'standard' }],
      customDoorArea: '',
      customWindowArea: '',
      useCustomDoorSizes: false,
      useCustomWindowSizes: false
    }]);
  };

  const removeRoom = (id) => {
    if (rooms.length > 1) {
      setRooms(rooms.filter(room => room.id !== id));
    }
  };

  const updateRoom = (id, field, value) => {
    setRooms(rooms.map(room => 
      room.id === id ? { ...room, [field]: value } : room
    ));
  };

  const addDoor = (roomId) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        const newDoorId = room.doors.length > 0 ? Math.max(...room.doors.map(d => d.id)) + 1 : 1;
        return { ...room, doors: [...room.doors, { id: newDoorId, size: 'standard' }] };
      }
      return room;
    }));
  };

  const removeDoor = (roomId, doorId) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        return { ...room, doors: room.doors.filter(d => d.id !== doorId) };
      }
      return room;
    }));
  };

  const updateDoor = (roomId, doorId, size) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        return {
          ...room,
          doors: room.doors.map(door => 
            door.id === doorId ? { ...door, size } : door
          )
        };
      }
      return room;
    }));
  };

  const addWindow = (roomId) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        const newWindowId = room.windows.length > 0 ? Math.max(...room.windows.map(w => w.id)) + 1 : 1;
        return { ...room, windows: [...room.windows, { id: newWindowId, size: 'standard' }] };
      }
      return room;
    }));
  };

  const removeWindow = (roomId, windowId) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        return { ...room, windows: room.windows.filter(w => w.id !== windowId) };
      }
      return room;
    }));
  };

  const updateWindow = (roomId, windowId, size) => {
    setRooms(rooms.map(room => {
      if (room.id === roomId) {
        return {
          ...room,
          windows: room.windows.map(window => 
            window.id === windowId ? { ...window, size } : window
          )
        };
      }
      return room;
    }));
  };

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
    CommonRules.unrealistic(6, 20, 'Ceiling height')
  ]
};

// Dynamic getValues based on rooms array
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

  const calculatePaint = () => {
    let totalWallArea = 0;
    let totalCeilingArea = 0;

    // Calculate total surface area
    rooms.forEach(room => {
      const length = parseFloat(room.length) || 0;
      const width = parseFloat(room.width) || 0;
      const height = parseFloat(room.height) || 0;

      // Wall area calculation: 2(length + width) × height
      const wallArea = 2 * (length + width) * height;
      
      // Calculate total door area by summing all individual doors
      let totalDoorArea = 0;
      if (room.useCustomDoorSizes && room.customDoorArea) {
        totalDoorArea = parseFloat(room.customDoorArea);
      } else {
        room.doors.forEach(door => {
          let doorArea = 20; // standard default
          if (door.size === 'small') doorArea = 15;
          if (door.size === 'large') doorArea = 25;
          totalDoorArea += doorArea;
        });
      }
      
      // Calculate total window area by summing all individual windows
      let totalWindowArea = 0;
      if (room.useCustomWindowSizes && room.customWindowArea) {
        totalWindowArea = parseFloat(room.customWindowArea);
      } else {
        room.windows.forEach(window => {
          let windowArea = 15; // standard default
          if (window.size === 'small') windowArea = 10;
          if (window.size === 'large') windowArea = 25;
          if (window.size === 'xlarge') windowArea = 40;
          totalWindowArea += windowArea;
        });
      }
      
      const deductions = totalDoorArea + totalWindowArea;
      
      totalWallArea += Math.max(0, wallArea - deductions);

      // Ceiling area
      totalCeilingArea += length * width;
    });

    const calculateForSurface = (area, coats, paintType, surfaceTexture, surfaceCondition, applicationMethod) => {
      // Base coverage rate: 350-400 sq ft per gallon (using 375 as middle)
      let coverageRate;
      switch (paintType) {
        case 'premium':
          coverageRate = 400; // Premium brands like Benjamin Moore Regal Select
          break;
        case 'economy':
          coverageRate = 350; // Standard coverage lower end
          break;
        default:
          coverageRate = 375; // Standard middle range
      }

      // Apply surface texture multiplier (only for walls, ceilings are typically smooth)
      if (surfaceTexture) {
        switch (surfaceTexture) {
          case 'light':
            coverageRate = 325; // Reduces from 375 to ~325 (15-20% reduction)
            break;
          case 'heavy':
            coverageRate = 275; // Heavy texture (25-30% reduction)
            break;
          case 'stucco':
            coverageRate = 250; // Interior stucco (50% more paint needed)
            break;
        }
      }

      // Apply application method multiplier
      let applicationMultiplier = 1;
      if (applicationMethod === 'spray') {
        applicationMultiplier = 1.33; // 33% more paint for spray
      }

      // Calculate base gallons needed
      const baseGallons = (area * coats) / coverageRate;
      
      // Apply multipliers (NO condition multiplier - paint always goes on sealed surfaces)
      const adjustedGallons = baseGallons * applicationMultiplier;
      
      // Add waste factor (10-20% depending on method)
      const wasteFactor = applicationMethod === 'spray' ? 1.2 : 1.1;
      const finalGallons = adjustedGallons * wasteFactor;

      // Round up to nearest gallon
      const gallonsNeeded = Math.ceil(finalGallons);

      // Calculate primer if unpainted surface
      let primerGallons = 0;
      if (surfaceCondition === 'unpainted') {
        // Primer coverage: 200-300 sq ft per gallon (using 250)
        const primerCoverage = 250;
        primerGallons = Math.ceil((area / primerCoverage) * 1.1); // 1 coat with 10% waste
      }

      return {
        area: area.toFixed(0),
        gallonsNeeded,
        primerGallons,
        coverageRate,
        coats
      };
    };

    const wallResults = paintWalls ? calculateForSurface(
      totalWallArea, 
      wallCoats, 
      wallPaintType, 
      wallSurfaceTexture, 
      wallSurfaceCondition, 
      wallApplicationMethod
    ) : null;

    const ceilingResults = paintCeiling ? calculateForSurface(
      totalCeilingArea, 
      ceilingCoats, 
      ceilingPaintType, 
      null, // ceilings don't have texture options
      ceilingSurfaceCondition, 
      ceilingApplicationMethod
    ) : null;

    return {
      walls: wallResults,
      ceiling: ceilingResults,
      totalWallArea: totalWallArea.toFixed(0),
      totalCeilingArea: totalCeilingArea.toFixed(0)
    };
};

  const handleCalculate = () => {
    setShowResults(true);
    
    // Auto-scroll to results
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Track the calculation
    const results = calculatePaint();
    trackCalculation('interior-paint', {
      rooms: rooms.map(room => ({
        length: room.length,
        width: room.width,
        height: room.height,
        doorsCount: room.doors.length,
        windowsCount: room.windows.length,
        useCustomDoorSizes: room.useCustomDoorSizes,
        useCustomWindowSizes: room.useCustomWindowSizes
      })),
      paintWalls: paintWalls,
      wallCoats: wallCoats,
      wallSurfaceTexture: wallSurfaceTexture,
      wallSurfaceCondition: wallSurfaceCondition,
      wallApplicationMethod: wallApplicationMethod,
      wallPaintType: wallPaintType,
      paintCeiling: paintCeiling,
      ceilingCoats: ceilingCoats,
      ceilingSurfaceCondition: ceilingSurfaceCondition,
      ceilingApplicationMethod: ceilingApplicationMethod,
      ceilingPaintType: ceilingPaintType
    }, {
      totalWallArea: results.totalWallArea,
      totalCeilingArea: results.totalCeilingArea,
      wallGallons: results.walls ? results.walls.gallonsNeeded : 0,
      wallPrimerGallons: results.walls ? results.walls.primerGallons : 0,
      ceilingGallons: results.ceiling ? results.ceiling.gallonsNeeded : 0,
      ceilingPrimerGallons: results.ceiling ? results.ceiling.primerGallons : 0,
      totalGallons: (results.walls ? results.walls.gallonsNeeded : 0) + 
                  (results.ceiling ? results.ceiling.gallonsNeeded : 0),
      totalPrimerGallons: (results.walls ? results.walls.primerGallons : 0) + 
                        (results.ceiling ? results.ceiling.primerGallons : 0),
      roomCount: rooms.length
    }); 
    trackCalculatorInteraction.calculate('interior-paint', true);
  };

  const handleReset = () => {
    trackCalculatorInteraction.startOver('interior-paint');
    
    // Reset all state to defaults
    setRooms([{
      id: 1,
      length: '',
      width: '',
      height: '',
      doors: [{ id: 1, size: 'standard' }],
      windows: [{ id: 1, size: 'standard' }, { id: 2, size: 'standard' }],
      customDoorArea: '',
      customWindowArea: '',
      useCustomDoorSizes: false,
      useCustomWindowSizes: false
    }]);
    
    // Reset wall paint settings
    setPaintWalls(true);
    setWallCoats(2);
    setWallSurfaceTexture('smooth');
    setWallSurfaceCondition('painted');
    setWallApplicationMethod('roller');
    setWallPaintType('standard');
    
    // Reset ceiling paint settings
    setPaintCeiling(false);
    setCeilingCoats(1);
    setCeilingSurfaceCondition('painted');
    setCeilingApplicationMethod('roller');
    setCeilingPaintType('standard');
    
    // Clear results
    setShowResults(false);
  };

  const handleCopyCalculation = async () => {
    trackCalculatorInteraction.copyResults('interior-paint');
    if (!showResults) return;
    
    const results = calculatePaint();
    
    // Prepare inputs
    const inputsData = {
      'Number of rooms': rooms.length
    };
    
    // Count total doors and windows
    let totalDoors = 0;
    let totalWindows = 0;
    rooms.forEach(room => {
      totalDoors += room.doors.length;
      totalWindows += room.windows.length;
    });
    
    inputsData['Total doors'] = totalDoors;
    inputsData['Total windows'] = totalWindows;
    
    if (paintWalls) {
      inputsData['Wall paint type'] = wallPaintType;
      inputsData['Wall coats'] = wallCoats;
      inputsData['Wall texture'] = wallSurfaceTexture;
      inputsData['Wall condition'] = wallSurfaceCondition;
      inputsData['Wall application'] = wallApplicationMethod;
    }
    
    if (paintCeiling) {
      inputsData['Ceiling paint type'] = ceilingPaintType;
      inputsData['Ceiling coats'] = ceilingCoats;
      inputsData['Ceiling condition'] = ceilingSurfaceCondition;
      inputsData['Ceiling application'] = ceilingApplicationMethod;
    }
    
    // Prepare outputs
    const outputs = {
      'Total wall area': `${results.totalWallArea} sq ft`,
      'Total ceiling area': `${results.totalCeilingArea} sq ft`
    };
    
    if (results.walls) {
      outputs['Wall paint needed'] = `${results.walls.gallonsNeeded} gallons`;
      if (results.walls.primerGallons > 0) {
        outputs['Wall primer needed'] = `${results.walls.primerGallons} gallons`;
      }
    }
    
    if (results.ceiling) {
      outputs['Ceiling paint needed'] = `${results.ceiling.gallonsNeeded} gallons`;
      if (results.ceiling.primerGallons > 0) {
        outputs['Ceiling primer needed'] = `${results.ceiling.primerGallons} gallons`;
      }
    }
    
    const note = `Coverage rates: 350-400 sq ft/gallon. Based on PDCA standards with waste factors included.`;
    
    const success = await copyCalculation('Interior Paint Calculator', inputsData, outputs, note);
    
    if (success) {
      setCopyButtonText('✓ Copied!');
      setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
    } else {
      alert('Unable to copy. Please copy results manually.');
    }
  };

  const results = showResults ? calculatePaint() : null; 

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-indigo-600 p-3 rounded-xl">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">Interior Paint Calculator</h2>
              <p className="text-gray-600">Professional estimation based on industry standards</p>
            </div>
          </div>

          {/* Room Measurements */}
          <SectionCard title="Room Measurements" subtitle="Enter room dimensions in feet">
            {rooms.map((room, index) => (
              <div key={room.id} className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200 mb-4">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="font-semibold text-gray-700">Room {index + 1}</h3>
                  {rooms.length > 1 && (
                    <button
                      onClick={() => removeRoom(room.id)}
                      className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                      Remove
                    </button>
                  )}
                </div>
                
                <InputGrid columns={3}>
                  <NumberInput
                    label="Length"
                    value={room.length}
                    onChange={(value) => {
                      updateRoom(room.id, 'length', value);
                      setTimeout(() => validate(getValues()), 100);
                    }}
                    unit="feet"
                    required={true}
                    fieldName={`room${index}-length`}
                    min="0"
                    step="0.5"
                  />
                  <NumberInput
                    label="Width"
                    value={room.width}
                    onChange={(value) => {
                      updateRoom(room.id, 'width', value);
                      setTimeout(() => validate(getValues()), 100);
                    }}
                    unit="feet"
                    required={true}
                    fieldName={`room${index}-width`}
                    min="0"
                    step="0.5"
                  />
                  <NumberInput
                    label="Height"
                    value={room.height}
                    onChange={(value) => updateRoom(room.id, 'height', value)}
                    unit="feet"
                    required={true}
                    fieldName={`room${index}-height`}
                    min="0"
                    step="0.5"
                  />
                </InputGrid>
                
                {/* Doors Section */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-semibold text-gray-700">Doors</label>
                      <div className="flex items-center gap-2 p-2 border-2 border-yellow-400 rounded-lg">
                        <input
                          type="checkbox"
                          checked={room.useCustomDoorSizes}
                          onChange={(e) => { updateRoom(room.id, 'useCustomDoorSizes', e.target.checked); setTimeout(() => validate(getValues()), 100); }}
                          className="w-3 h-3 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label className="text-xs text-gray-600 cursor-pointer">Use custom size</label>
                      </div>
                    </div>
                    {!room.useCustomDoorSizes && (
                      <button
                        onClick={() => addDoor(room.id)}
                        className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200 font-medium"
                      >
                        + Add Door
                      </button>
                    )}
                  </div>
                  
                  {!room.useCustomDoorSizes ? (
                    <div className="space-y-2">
                      {room.doors.map((door, doorIndex) => (
                        <div key={door.id} className="flex gap-2 items-center">
                          <span className="text-xs text-gray-500 w-16">Door {doorIndex + 1}</span>
                          <SelectInput
                            value={door.size}
                            onChange={(value) => updateDoor(room.id, door.id, value)}
                            options={doorSizeOptions}
                            size="sm"
                          />
                          {room.doors.length > 1 && (
                            <button
                              onClick={() => removeDoor(room.id, door.id)}
                              className="text-red-600 hover:text-red-800 text-sm px-2"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <NumberInput
                        label="Total Door Area"
                        value={room.customDoorArea}
                        onChange={(value) => {
                          updateRoom(room.id, 'customDoorArea', value);
                          setTimeout(() => validate(getValues()), 100);
                        }}
                        unit="sq ft"
                        required={true}
                        fieldName="customDoorArea"
                        placeholder="e.g., 45"
                        min="0"
                        step="0.5"
                      />
                      <p className="text-xs text-gray-500 mt-1">Enter the measured total area of all doors</p>
                    </div>
                  )}
                </div>

                {/* Windows Section */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-semibold text-gray-700">Windows</label>
                      <div className="flex items-center gap-2 p-2 border-2 border-yellow-400 rounded-lg">
                        <input
                          type="checkbox"
                          checked={room.useCustomWindowSizes}
                          onChange={(e) => { updateRoom(room.id, 'useCustomWindowSizes', e.target.checked); setTimeout(() => validate(getValues()), 100); }}
                          className="w-3 h-3 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                        />
                        <label className="text-xs text-gray-600 cursor-pointer">Use custom size</label>
                      </div>
                    </div>
                    {!room.useCustomWindowSizes && (
                      <button
                        onClick={() => addWindow(room.id)}
                        className="text-xs bg-indigo-100 text-indigo-700 px-3 py-1 rounded hover:bg-indigo-200 font-medium"
                      >
                        + Add Window
                      </button>
                    )}
                  </div>
                  
                  {!room.useCustomWindowSizes ? (
                    <div className="space-y-2">
                      {room.windows.map((window, windowIndex) => (
                        <div key={window.id} className="flex gap-2 items-center">
                          <span className="text-xs text-gray-500 w-16">Window {windowIndex + 1}</span>
                          <SelectInput
                            value={window.size}
                            onChange={(value) => updateWindow(room.id, window.id, value)}
                            options={windowSizeOptions}
                            size="sm"
                          />
                          {room.windows.length > 0 && (
                            <button
                              onClick={() => removeWindow(room.id, window.id)}
                              className="text-red-600 hover:text-red-800 text-sm px-2"
                            >
                              ✕
                            </button>
                          )}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                      <NumberInput
                        label="Total Window Area"
                        value={room.customWindowArea}
                        onChange={(value) => {
                          updateRoom(room.id, 'customWindowArea', value);
                          setTimeout(() => validate(getValues()), 100);
                        }}
                        unit="sq ft"
                        required={true}
                        fieldName="customWindowArea"
                        placeholder="e.g., 60"
                        min="0"
                        step="0.5"
                      />
                      <p className="text-xs text-gray-500 mt-1">Enter the measured total area of all windows</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
            
            <button
              onClick={addRoom}
              className="w-full py-2 bg-indigo-100 text-indigo-700 rounded-lg hover:bg-indigo-200 transition-colors font-medium"
            >
              + Add Another Room
            </button>
          </SectionCard>

          {/* Paint Options */}
          <SectionCard title="Paint Specifications">
            {/* Wall Paint Section */}
            <div className="border-2 border-gray-200 rounded-lg p-4 mb-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Wall Paint</h3>
                <div className="flex items-center gap-2 p-3 border-2 border-yellow-400 rounded-lg">
                  <input
                    type="checkbox"
                    checked={paintWalls}
                    onChange={(e) => setPaintWalls(e.target.checked)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label className="text-sm font-medium text-gray-700 cursor-pointer">Include walls</label>
                </div>
              </div>
              
              {paintWalls && (
                <>
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>💡 Standard Practice:</strong> New/unpainted surfaces get 1 coat primer + 2 coats paint. Previously painted surfaces typically need 2 coats of paint only.
                    </p>
                  </div>
                  
                  <InputGrid columns={2}>
                    <SelectInput
                      label="Number of Coats"
                      value={wallCoats.toString()}
                      onChange={(value) => setWallCoats(parseInt(value))}
                      options={coatOptions}
                    />
                    <SelectInput
                      label="Paint Quality"
                      value={wallPaintType}
                      onChange={setWallPaintType}
                      options={paintTypeOptions}
                    />
                    <SelectInput
                      label="Surface Texture"
                      value={wallSurfaceTexture}
                      onChange={setWallSurfaceTexture}
                      options={textureOptions}
                    />
                    <SelectInput
                      label="Surface Condition"
                      value={wallSurfaceCondition}
                      onChange={setWallSurfaceCondition}
                      options={conditionOptions}
                    />
                    <SelectInput
                      label="Application Method"
                      value={wallApplicationMethod}
                      onChange={setWallApplicationMethod}
                      options={applicationOptions}
                    />
                  </InputGrid>
                </>
              )}
            </div>

            {/* Ceiling Paint Section */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Ceiling Paint</h3>
                <div className="flex items-center gap-2 p-3 border-2 border-yellow-400 rounded-lg">
                  <input
                    type="checkbox"
                    checked={paintCeiling}
                    onChange={(e) => setPaintCeiling(e.target.checked)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <label className="text-sm font-medium text-gray-700 cursor-pointer">Include ceilings</label>
                </div>
              </div>
              
              {paintCeiling && (
                <>
                  <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <p className="text-xs text-purple-800">
                      <strong>💡 Ceiling Tip:</strong> Ceilings typically need 1 coat for previously painted, or 1 coat primer + 1 coat paint for new drywall.
                    </p>
                  </div>
                  
                  <InputGrid columns={2}>
                    <SelectInput
                      label="Number of Coats"
                      value={ceilingCoats.toString()}
                      onChange={(value) => setCeilingCoats(parseInt(value))}
                      options={coatOptions}
                    />
                    <SelectInput
                      label="Paint Quality"
                      value={ceilingPaintType}
                      onChange={setCeilingPaintType}
                      options={paintTypeOptions}
                    />
                    <SelectInput
                      label="Surface Condition"
                      value={ceilingSurfaceCondition}
                      onChange={setCeilingSurfaceCondition}
                      options={conditionOptions}
                    />
                    <SelectInput
                      label="Application Method"
                      value={ceilingApplicationMethod}
                      onChange={setCeilingApplicationMethod}
                      options={applicationOptions}
                    />
                  </InputGrid>
                </>
              )}
            </div>
          </SectionCard>

          <ValidationDisplay />
          
          <CalculateButtons
            onCalculate={handleCalculate}
            onStartOver={handleReset}
            showStartOver={showResults}
            calculateDisabled={!paintWalls && !paintCeiling}
            calculateText={!paintWalls && !paintCeiling 
              ? 'Select Walls or Ceiling to Calculate' 
              : 'Calculate Paint Needed'}
          />

          {/* Results */}
          {showResults && results && (
            <div ref={resultsRef} className="space-y-4">
              {/* Wall Paint Results */}
              {results.walls && (
                <SectionCard title="🎨 Wall Paint Estimate" variant="info">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <MaterialCard
                      title="Wall Surface Area"
                      value={results.walls.area}
                      unit="sq ft"
                      color="indigo"
                    />
                    <MaterialCard
                      title="Coverage Rate"
                      value={results.walls.coverageRate}
                      unit="sq ft/gal"
                      color="indigo"
                    />
                    <MaterialCard
                      title="Coats Applied"
                      value={results.walls.coats}
                      unit={`coat${results.walls.coats > 1 ? 's' : ''}`}
                      color="indigo"
                    />
                  </div>

                  <div className="bg-indigo-600 text-white p-6 rounded-lg shadow-lg mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-indigo-200 text-sm">Wall Paint Needed</p>
                        <p className="text-5xl font-bold">{results.walls.gallonsNeeded}</p>
                        <p className="text-indigo-200 text-lg">gallon{results.walls.gallonsNeeded > 1 ? 's' : ''}</p>
                      </div>
                      {results.walls.primerGallons > 0 && (
                        <div className="text-right">
                          <p className="text-indigo-200 text-sm">Wall Primer Needed</p>
                          <p className="text-4xl font-bold">{results.walls.primerGallons}</p>
                          <p className="text-indigo-200">gallon{results.walls.primerGallons > 1 ? 's' : ''}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Wall Adjustments Applied:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Door and window deductions based on selected sizes</li>
                          {wallSurfaceTexture !== 'smooth' && (
                            <li>• Surface texture adjustment for {wallSurfaceTexture} texture</li>
                          )}
                          {wallApplicationMethod === 'spray' && (
                            <li>• Spray application multiplier (+33%)</li>
                          )}
                          <li>• Professional waste factor ({wallApplicationMethod === 'spray' ? '20%' : '10%'})</li>
                          {wallSurfaceCondition === 'unpainted' && (
                            <li>• Primer calculated separately for unpainted surface</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SectionCard>
              )}

              {/* Ceiling Paint Results */}
              {results.ceiling && (
                <SectionCard title="🏠 Ceiling Paint Estimate" variant="info">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <MaterialCard
                      title="Ceiling Surface Area"
                      value={results.ceiling.area}
                      unit="sq ft"
                      color="purple"
                    />
                    <MaterialCard
                      title="Coverage Rate"
                      value={results.ceiling.coverageRate}
                      unit="sq ft/gal"
                      color="purple"
                    />
                    <MaterialCard
                      title="Coats Applied"
                      value={results.ceiling.coats}
                      unit={`coat${results.ceiling.coats > 1 ? 's' : ''}`}
                      color="purple"
                    />
                  </div>

                  <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg mb-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-purple-200 text-sm">Ceiling Paint Needed</p>
                        <p className="text-5xl font-bold">{results.ceiling.gallonsNeeded}</p>
                        <p className="text-purple-200 text-lg">gallon{results.ceiling.gallonsNeeded > 1 ? 's' : ''}</p>
                      </div>
                      {results.ceiling.primerGallons > 0 && (
                        <div className="text-right">
                          <p className="text-purple-200 text-sm">Ceiling Primer Needed</p>
                          <p className="text-4xl font-bold">{results.ceiling.primerGallons}</p>
                          <p className="text-purple-200">gallon{results.ceiling.primerGallons > 1 ? 's' : ''}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <Info className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-800 mb-2">Ceiling Adjustments Applied:</p>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>• Ceiling-specific coverage rates</li>
                          {ceilingApplicationMethod === 'spray' && (
                            <li>• Spray application multiplier (+33%)</li>
                          )}
                          <li>• Professional waste factor ({ceilingApplicationMethod === 'spray' ? '20%' : '10%'})</li>
                          {ceilingSurfaceCondition === 'unpainted' && (
                            <li>• Primer calculated separately for unpainted surface</li>
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </SectionCard>
              )}

              {/* Summary if both are painted */}
              {results.walls && results.ceiling && (
                <SectionCard title="📋 Shopping List Summary" variant="success">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MaterialCard
                      title="Total Wall Paint"
                      value={results.walls.gallonsNeeded}
                      unit="gal"
                      color="indigo"
                      subtitle={results.walls.primerGallons > 0 ? `+ ${results.walls.primerGallons} gal primer` : ''}
                    />
                    <MaterialCard
                      title="Total Ceiling Paint"
                      value={results.ceiling.gallonsNeeded}
                      unit="gal"
                      color="purple"
                      subtitle={results.ceiling.primerGallons > 0 ? `+ ${results.ceiling.primerGallons} gal primer` : ''}
                    />
                  </div>
                </SectionCard>
              )}

              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>💡 Pro Tip:</strong> Purchase an extra gallon of each paint color for touch-ups. This estimate follows professional standards (PCA, MPI). Remember: new surfaces automatically include 1 coat of primer in the calculation above!
                </p>
              </div>
            </div>
          )}

          {/* Footer Info & Resources */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">Calculation Standards:</h3>
              <ul className="text-xs text-gray-600 space-y-1">
                <li>• Industry coverage: 350-400 sq ft/gal (smooth surfaces)</li>
                <li>• Primer coverage: 200-300 sq ft/gal</li>
                <li>• Variable door/window sizes (10-40 sq ft)</li>
                <li>• PCA & MPI professional standards</li>
                <li>• Includes waste factors & adjustments</li>
              </ul>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <h3 className="font-semibold text-gray-700 mb-2 text-sm">📚 Helpful Guides:</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog/measure-room-square-footage" className="text-indigo-600 hover:text-indigo-800 underline">
                    How to Measure Your Room & Calculate Square Footage (Start here!)
                  </Link>
                </li>
                <li>
                  <Link href="/blog/when-you-need-primer" className="text-indigo-600 hover:text-indigo-800 underline">
                    When You Actually Need Primer
                  </Link>
                </li>
                <li>
                  <Link href="/blog/dark-to-light-painting" className="text-indigo-600 hover:text-indigo-800 underline">
                    Dark to Light Color Changes
                  </Link>
                </li>
                <li>
                  <Link href="/blog/paint-sheen-guide" className="text-indigo-600 hover:text-indigo-800 underline">
                    Choosing the Right Paint Sheen
                  </Link>
                </li>
                <li>
                  <Link href="/blog/textured-wall-painting" className="text-indigo-600 hover:text-indigo-800 underline">
                    Textured Wall Painting Tips
                  </Link>
                </li>
                <li>
                  <Link href="/blog/interior-painting-guide" className="text-indigo-600 hover:text-indigo-800 underline">
                    Complete Interior Painting Guide
                  </Link>
                </li>
              </ul>
            </div>
            
            <ResultsButtons
              onCopy={handleCopyCalculation}
              onPrint={() => printCalculation('Interior Paint Calculator')}
              onStartOver={handleReset}
              copyButtonText={copyButtonText}
              showStartOver={true}
            />
          </div>
        </div>
      </div>
      <FAQSection calculatorId="interior-paint-calculator" />
    </div>
  );
}