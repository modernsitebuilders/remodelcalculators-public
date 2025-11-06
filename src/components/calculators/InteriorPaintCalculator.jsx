'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';

export default function PaintCalculator() {
  const [rooms, setRooms] = useState([{ 
    id: 1, 
    length: '12', 
    width: '10', 
    height: '8', 
    doors: [{ id: 1, size: 'standard' }], // Array of individual doors
    windows: [{ id: 1, size: 'standard' }, { id: 2, size: 'standard' }], // Array of individual windows
    customDoorArea: '', // optional override for all doors
    customWindowArea: '', // optional override for all windows
    useCustomDoorSizes: false, // toggle for custom door sizes
    useCustomWindowSizes: false // toggle for custom window sizes
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

  const handleCopyCalculation = async () => {
    if (!showResults || !results) return;
    
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
          <div className="space-y-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700 flex items-center gap-2">
              Room Measurements
              <span className="text-sm font-normal text-gray-500">(in feet)</span>
            </h2>
            
            {rooms.map((room, index) => (
              <div key={room.id} className="bg-gray-50 p-4 rounded-lg border-2 border-gray-200">
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
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
                    <input
                      type="number"
                      value={room.length}
                      onChange={(e) => { updateRoom(room.id, 'length', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      min="0"
                      step="0.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
                    <input
                      type="number"
                      value={room.width}
                      onChange={(e) => { updateRoom(room.id, 'width', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      min="0"
                      step="0.5"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
                    <input
                      type="number"
                      value={room.height}
                      onChange={(e) => updateRoom(room.id, 'height', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      min="0"
                      step="0.5"
                    />
                  </div>
                </div>
                
                {/* Doors Section */}
                <div className="mb-4 p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <label className="text-sm font-semibold text-gray-700">Doors</label>
                      <label className="flex items-center cursor-pointer text-xs">
                        <input
                          type="checkbox"
                          checked={room.useCustomDoorSizes}
                          onChange={(e) => { updateRoom(room.id, 'useCustomDoorSizes', e.target.checked); setTimeout(() => validate(getValues()), 100); }}
                          className="w-3 h-3 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-1"
                        />
                        <span className="text-gray-600">Use custom size</span>
                      </label>
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
                          <select
                            value={door.size}
                            onChange={(e) => updateDoor(room.id, door.id, e.target.value)}
                            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          >
                            <option value="small">Small/Closet - 15 sq ft</option>
                            <option value="standard">Standard - 20 sq ft</option>
                            <option value="large">Large/Double - 25 sq ft</option>
                          </select>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Total Door Area (sq ft)
                      </label>
                      <input
                        type="number"
                        value={room.customDoorArea}
                        onChange={(e) => { updateRoom(room.id, 'customDoorArea', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                        className="w-full px-3 py-2 border-2 border-indigo-400 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                      <label className="flex items-center cursor-pointer text-xs">
                        <input
                          type="checkbox"
                          checked={room.useCustomWindowSizes}
                          onChange={(e) => { updateRoom(room.id, 'useCustomWindowSizes', e.target.checked); setTimeout(() => validate(getValues()), 100); }}
                          className="w-3 h-3 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 mr-1"
                        />
                        <span className="text-gray-600">Use custom size</span>
                      </label>
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
                          <select
                            value={window.size}
                            onChange={(e) => updateWindow(room.id, window.id, e.target.value)}
                            className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          >
                            <option value="small">Small - 10 sq ft</option>
                            <option value="standard">Standard - 15 sq ft</option>
                            <option value="large">Large - 25 sq ft</option>
                            <option value="xlarge">XLarge/Bay - 40 sq ft</option>
                          </select>
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Total Window Area (sq ft)
                      </label>
                      <input
                        type="number"
                        value={room.customWindowArea}
                        onChange={(e) => { updateRoom(room.id, 'customWindowArea', e.target.value); setTimeout(() => validate(getValues()), 100); }}
                        className="w-full px-3 py-2 border-2 border-indigo-400 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
          </div>

          {/* Paint Options */}
          <div className="space-y-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Paint Specifications</h2>
            
            {/* Wall Paint Section */}
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Wall Paint</h3>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={paintWalls}
                    onChange={(e) => setPaintWalls(e.target.checked)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">Include walls</span>
                </label>
              </div>
              
              {paintWalls && (
                <>
                  <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-xs text-blue-800">
                      <strong>💡 Standard Practice:</strong> New/unpainted surfaces get 1 coat primer + 2 coats paint. Previously painted surfaces typically need 2 coats of paint only.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Coats</label>
                    <select
                      value={wallCoats}
                      onChange={(e) => setWallCoats(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="1">1 Coat</option>
                      <option value="2">2 Coats (Recommended)</option>
                      <option value="3">3 Coats</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Paint Quality</label>
                    <select
                      value={wallPaintType}
                      onChange={(e) => setWallPaintType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="economy">Economy (350 sq ft/gal)</option>
                      <option value="standard">Standard (375 sq ft/gal)</option>
                      <option value="premium">Premium (400 sq ft/gal)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Surface Texture</label>
                    <select
                      value={wallSurfaceTexture}
                      onChange={(e) => setWallSurfaceTexture(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="smooth">Smooth (Standard)</option>
                      <option value="light">Light Texture (-15%)</option>
                      <option value="heavy">Heavy Texture (-25%)</option>
                      <option value="stucco">Interior Stucco (-50%)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Surface Condition
                      <a href="#" className="ml-2 text-xs text-indigo-600 hover:text-indigo-800 underline">
                        Learn more
                      </a>
                    </label>
                    <select
                      value={wallSurfaceCondition}
                      onChange={(e) => setWallSurfaceCondition(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="painted">Previously Painted (no primer)</option>
                      <option value="unpainted">Unpainted/New Drywall (needs primer)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Method</label>
                    <select
                      value={wallApplicationMethod}
                      onChange={(e) => setWallApplicationMethod(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="roller">Roller (Standard)</option>
                      <option value="spray">Spray (+33% paint)</option>
                    </select>
                  </div>
                </div>
                </>
              )}
            </div>

            {/* Ceiling Paint Section */}
            <div className="border-2 border-gray-200 rounded-lg p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">Ceiling Paint</h3>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={paintCeiling}
                    onChange={(e) => setPaintCeiling(e.target.checked)}
                    className="w-5 h-5 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span className="ml-2 text-sm font-medium text-gray-700">Include ceilings</span>
                </label>
              </div>
              
              {paintCeiling && (
                <>
                  <div className="mb-4 p-3 bg-purple-50 border border-purple-200 rounded-lg">
                    <p className="text-xs text-purple-800">
                      <strong>💡 Ceiling Tip:</strong> Ceilings typically need 1 coat for previously painted, or 1 coat primer + 1 coat paint for new drywall.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Number of Coats</label>
                    <select
                      value={ceilingCoats}
                      onChange={(e) => setCeilingCoats(parseInt(e.target.value))}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="1">1 Coat</option>
                      <option value="2">2 Coats (Recommended)</option>
                      <option value="3">3 Coats</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Paint Quality</label>
                    <select
                      value={ceilingPaintType}
                      onChange={(e) => setCeilingPaintType(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="economy">Economy (350 sq ft/gal)</option>
                      <option value="standard">Standard (375 sq ft/gal)</option>
                      <option value="premium">Premium (400 sq ft/gal)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Surface Condition
                      <a href="#" className="ml-2 text-xs text-indigo-600 hover:text-indigo-800 underline">
                        Learn more
                      </a>
                    </label>
                    <select
                      value={ceilingSurfaceCondition}
                      onChange={(e) => setCeilingSurfaceCondition(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="painted">Previously Painted (no primer)</option>
                      <option value="unpainted">Unpainted/New Drywall (needs primer)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Application Method</label>
                    <select
                      value={ceilingApplicationMethod}
                      onChange={(e) => setCeilingApplicationMethod(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      <option value="roller">Roller (Standard)</option>
                      <option value="spray">Spray (+33% paint)</option>
                    </select>
                  </div>
                </div>
                </>
              )}
            </div>
          </div>
<ValidationDisplay />
          {/* Calculate Button */}
          <button
            onClick={() => {
              setShowResults(true);
              
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
            }}
            disabled={!paintWalls && !paintCeiling}
            className={`w-full py-3 rounded-lg transition-colors font-semibold text-lg shadow-lg ${
              !paintWalls && !paintCeiling
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            {!paintWalls && !paintCeiling 
              ? 'Select Walls or Ceiling to Calculate' 
              : 'Calculate Paint Needed'}
          </button>

          {/* Results */}
          {showResults && results && (
            <div className="mt-6 space-y-4">
              {/* Wall Paint Results */}
              {results.walls && (
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border-2 border-indigo-200">
                  <h2 className="text-2xl font-bold text-indigo-900 mb-4">🎨 Wall Paint Estimate</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-600">Wall Surface Area</p>
                      <p className="text-2xl font-bold text-gray-800">{results.walls.area} sq ft</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-600">Coverage Rate</p>
                      <p className="text-2xl font-bold text-gray-800">{results.walls.coverageRate} sq ft/gal</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-600">Coats Applied</p>
                      <p className="text-2xl font-bold text-gray-800">{results.walls.coats} coat{results.walls.coats > 1 ? 's' : ''}</p>
                    </div>
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
                </div>
              )}

              {/* Ceiling Paint Results */}
              {results.ceiling && (
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
                  <h2 className="text-2xl font-bold text-purple-900 mb-4">🏠 Ceiling Paint Estimate</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-600">Ceiling Surface Area</p>
                      <p className="text-2xl font-bold text-gray-800">{results.ceiling.area} sq ft</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-600">Coverage Rate</p>
                      <p className="text-2xl font-bold text-gray-800">{results.ceiling.coverageRate} sq ft/gal</p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-600">Coats Applied</p>
                      <p className="text-2xl font-bold text-gray-800">{results.ceiling.coats} coat{results.ceiling.coats > 1 ? 's' : ''}</p>
                    </div>
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
                </div>
              )}

              {/* Summary if both are painted */}
              {results.walls && results.ceiling && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border-2 border-green-300">
                  <h3 className="text-xl font-bold text-green-900 mb-3">📋 Shopping List Summary</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-600 mb-1">Total Wall Paint</p>
                      <p className="text-3xl font-bold text-indigo-700">{results.walls.gallonsNeeded} gal</p>
                      {results.walls.primerGallons > 0 && (
                        <p className="text-sm text-gray-600 mt-2">+ {results.walls.primerGallons} gal primer</p>
                      )}
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow">
                      <p className="text-sm text-gray-600 mb-1">Total Ceiling Paint</p>
                      <p className="text-3xl font-bold text-purple-700">{results.ceiling.gallonsNeeded} gal</p>
                      {results.ceiling.primerGallons > 0 && (
                        <p className="text-sm text-gray-600 mt-2">+ {results.ceiling.primerGallons} gal primer</p>
                      )}
                    </div>
                  </div>
                </div>
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
      onClick={() => printCalculation('Interior Paint Calculator')}
      className="copy-calc-btn flex-1"
    >
      🖨️ Print Results
    </button>
  </div>
</div>
            
          </div>
        </div>
      </div>
    </div>
  );
}