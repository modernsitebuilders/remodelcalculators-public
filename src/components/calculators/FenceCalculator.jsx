'use client';
import { trackCalculation } from '@/utils/tracking';
import { copyCalculation } from '@/utils/copyCalculation';
import { printCalculation } from '@/utils/printCalculation';
import React, { useState, useRef } from 'react';
import { Calculator, Ruler, TrendingUp, Info, AlertCircle, CheckCircle } from 'lucide-react';
import { CommonRules, ValidationTypes } from '@/utils/validation';
import { useValidation } from '@/hooks/useValidation';
import { FAQSection } from '@/components/FAQSection';
import { trackCalculatorInteraction } from '@/utils/buttonTracking';
import { useCalculatorTracking, useCalculatorFlow } from '@/utils/tracking-hooks';
import FlagModal from '@/components/FlagModal';
import { 
  NumberInput,
  SelectInput,
  MaterialCard,
  SectionCard,
  InputGrid,
  CalculateButtons,
  ResultsButtons
} from '@/components/calculator';

export default function FenceInstallationCalculator() {
  const [linearFeet, setLinearFeet] = useState('');
  const [fenceType, setFenceType] = useState('standard-privacy');
  const [height, setHeight] = useState(6);
  const [boardWidth, setBoardWidth] = useState(5.5);
  const [boardSpacing, setBoardSpacing] = useState(0);
  const [railLength, setRailLength] = useState(11);
  const [vinylStyle, setVinylStyle] = useState('standard');
  const [terrain, setTerrain] = useState('flat');
  const [slopeMethod, setSlopeMethod] = useState('stepped');
  const [frostDepth, setFrostDepth] = useState(36);
  const [gates3ft, setGates3ft] = useState(0);
  const [gates4ft, setGates4ft] = useState(0);
  const [gates6ft, setGates6ft] = useState(0);
  const [gates10ft, setGates10ft] = useState(0);
  const [gates12ft, setGates12ft] = useState(0);
  const [corners, setCorners] = useState('');
  const [fenceLayout, setFenceLayout] = useState('continuous');
  const [materials, setMaterials] = useState({});
  const [hasCalculated, setHasCalculated] = useState(false);
  const [copyButtonText, setCopyButtonText] = useState('📋 Copy Calculation');
  const resultsRef = useRef(null);
  const { trackField, trackAction } = useCalculatorTracking('fence-calculator');
useCalculatorFlow('fence-calculator');

  const fenceTypes = {
    'standard-privacy': { name: 'Standard Privacy (Wood)', postSpacing: 8, railsPerHeight: 3, needsWood: true },
    'board-on-board': { name: 'Board-on-Board Privacy (Wood)', postSpacing: 8, railsPerHeight: 3, needsWood: true },
    'picket': { name: 'Picket Fence (Wood)', postSpacing: 8, railsPerHeight: 2, needsWood: true },
    'horizontal-slat': { name: 'Horizontal Slat (Wood)', postSpacing: 6, railsPerHeight: 0, needsWood: true },
    'split-rail': { name: 'Split Rail (Wood Only)', postSpacing: 10, railsPerHeight: 0, needsWood: true },
    'split-rail-chain': { name: 'Split Rail with Chain Link', postSpacing: 10, railsPerHeight: 0, needsWood: true, hasChainLink: true },
    'chain-link': { name: 'Chain Link (Standard)', postSpacing: 10, railsPerHeight: 0, needsWood: false },
    'vinyl-panel': { name: 'Vinyl Panel', postSpacing: 8, railsPerHeight: 0, needsWood: false },
    'aluminum': { name: 'Aluminum Ornamental', postSpacing: 8, railsPerHeight: 0, needsWood: false },
    'composite': { name: 'Composite', postSpacing: 8, railsPerHeight: 0, needsWood: false },
    'wrought-iron': { name: 'Wrought Iron', postSpacing: 8, railsPerHeight: 0, needsWood: false }
  };

  const terrainOptions = [
    { value: 'flat', label: 'Flat terrain' },
    { value: 'slight-slope', label: 'Slight slope' },
    { value: 'moderate-slope', label: 'Moderate slope' },
    { value: 'steep-slope', label: 'Steep slope' },
    { value: 'rocky', label: 'Rocky soil' }
  ];

  const frostDepthOptions = [
    { value: '0', label: 'No frost' },
    { value: '24', label: '24"' },
    { value: '36', label: '36"' },
    { value: '42', label: '42"' },
    { value: '48', label: '48"' },
    { value: '60', label: '60"' }
  ];

  const heightOptions = [
    { value: '3', label: '3 feet' },
    { value: '4', label: '4 feet' },
    { value: '5', label: '5 feet' },
    { value: '6', label: '6 feet' },
    { value: '7', label: '7 feet' },
    { value: '8', label: '8 feet' }
  ];

  const fenceLayoutOptions = [
    { value: 'continuous', label: 'Continuous Loop (returns to starting point)' },
    { value: 'open', label: 'Open-Ended (has terminal posts)' }
  ];

  const railLengthOptions = [
    { value: '8', label: '8 feet' },
    { value: '8.5', label: '8.5 feet' },
    { value: '11', label: '11 feet - Most Common' }
  ];

  const boardWidthOptions = [
    { value: '3.5', label: '1×4 (3.5" actual)' },
    { value: '5.5', label: '1×6 (5.5" actual)' },
    { value: '7.25', label: '1×8 (7.25" actual)' }
  ];

  const formatOptions = (optionsObj) => {
    return Object.entries(optionsObj).map(([value, config]) => ({
      value,
      label: config.name
    }));
  };

  const validationRules = {
    linearFeet: [
      CommonRules.unrealistic(5, 1000, 'Fence length'),
      {
        condition: (val) => parseFloat(val) > 500,
        message: 'Large fence project (>500 feet) - consider breaking into phases',
        type: ValidationTypes.INFO
      }
    ],
    height: [
      {
        condition: (val) => parseFloat(val) < 3,
        message: 'Fence height <3 feet is uncommon - verify this is correct',
        type: ValidationTypes.WARNING
      },
      {
        condition: (val) => parseFloat(val) > 8,
        message: 'Fence height >8 feet may require engineering approval in most jurisdictions',
        type: ValidationTypes.ERROR
      },
      CommonRules.unrealistic(2, 12, 'Fence height')
    ],
    boardWidth: [
      CommonRules.unrealistic(3, 12, 'Board width'),
      {
        condition: (val) => parseFloat(val) < 4,
        message: 'Board width <4" may not meet privacy fence standards',
        type: ValidationTypes.WARNING
      }
    ],
    frostDepth: [
      {
        condition: (val) => parseFloat(val) < 24,
        message: 'Frost depth <24" - verify local frost line requirements',
        type: ValidationTypes.WARNING
      },
      CommonRules.unrealistic(12, 72, 'Frost depth')
    ],
   corners: [
  CommonRules.unrealistic(0, 20, 'Number of corners'),
  {
    condition: (val, allVals) => {
      const num = parseFloat(val);
      const linear = parseFloat(allVals.linearFeet);
      if (!num || !linear || num === 0 || linear === 0) return false;
      return num > linear / 15;
    },
    message: 'High number of corners for fence length - please verify',
    type: ValidationTypes.WARNING
  },
  {
    condition: (val) => {
      const num = parseFloat(val);
      return num < 3 && fenceLayout === 'continuous';
    },
    message: 'Continuous fences need 3+ corners to form a closed loop. Consider "Open-Ended" layout.',
    type: ValidationTypes.WARNING
  }
]
  };

  const getValues = () => ({
    linearFeet,
    height,
    boardWidth,
    frostDepth,
    corners
  });

  const { validate, ValidationDisplay } = useValidation(validationRules);

  const calculateMaterials = () => {
    const linearFt = parseFloat(linearFeet);
    const cornersCount = parseFloat(corners);
    
    if (!linearFt || linearFt <= 0) {
      alert('Please enter a valid linear footage greater than 0');
      return;
    }
    
    if (!cornersCount || cornersCount < 0) {
      alert('Please enter a valid number of corners (0 or more)');
      return;
    }
    
    setHasCalculated(true);
    
    const config = fenceTypes[fenceType];
    
    let postSpacing;
    if (fenceType === 'split-rail' || fenceType === 'split-rail-chain') {
      postSpacing = railLength - 0.5;
    } else {
      postSpacing = config.postSpacing;
    }
    
    const sections = Math.ceil(linearFt / postSpacing);
    
    let linePosts;
    let terminalPosts = 0;
    
    if (fenceLayout === 'continuous') {
      linePosts = sections;
    } else {
      linePosts = sections + 1;
      terminalPosts = 2;
    }
    
    const totalPosts = linePosts;
    
    let post6x6Breakdown = {
      terminal: 0,
      corners: 0,
      gates: 0,
      tall: 0,
      total: 0
    };
    
    let post4x4Count = 0;
    let post6x6Count = 0;
    
    if (height > 6) {
      post6x6Count = totalPosts;
      post6x6Breakdown.tall = totalPosts;
      post6x6Breakdown.total = totalPosts;
    } else {
      if (fenceLayout !== 'continuous') {
        post6x6Breakdown.terminal = 2;
      }
      
      post6x6Breakdown.corners = cornersCount;
      
      const gates4ftPlus = gates4ft + gates6ft + gates10ft + gates12ft;
      const gates3ftCount = gates3ft;
      
      post6x6Breakdown.gates = gates4ftPlus * 2;
      
      post6x6Count = post6x6Breakdown.terminal + post6x6Breakdown.corners + post6x6Breakdown.gates;
      post6x6Count = Math.min(post6x6Count, totalPosts);
      post6x6Breakdown.total = post6x6Count;
      
      post4x4Count = totalPosts - post6x6Count;
    }
    
    const standardDepth = (height * 12) / 2;
    const requiredDepth = Math.max(standardDepth, frostDepth, 24);
    const postLength = height + (requiredDepth / 12);
    
    const gravel = 6;
    const concreteDepth = requiredDepth - gravel;
    
    let concrete4x4Bags = 0;
    let gravel4x4CubicFeet = 0;
    if (post4x4Count > 0) {
      const concrete4x4CubicFeet = (Math.PI * Math.pow(6, 2) * concreteDepth - 3.5 * 3.5 * concreteDepth) / 1728;
      concrete4x4Bags = post4x4Count * Math.ceil(concrete4x4CubicFeet / 0.60);
      gravel4x4CubicFeet = post4x4Count * (Math.PI * 1 * 0.5);
    }
    
    let concrete6x6Bags = 0;
    let gravel6x6CubicFeet = 0;
    if (post6x6Count > 0) {
      const concrete6x6CubicFeet = (Math.PI * Math.pow(9, 2) * concreteDepth - 5.5 * 5.5 * concreteDepth) / 1728;
      concrete6x6Bags = post6x6Count * Math.ceil(concrete6x6CubicFeet / 0.60);
      gravel6x6CubicFeet = post6x6Count * (Math.PI * 1.5 * 1.5 * 0.5);
    }
    
    const concreteBags = concrete4x4Bags + concrete6x6Bags;
    const gravelCubicFeet = gravel4x4CubicFeet + gravel6x6CubicFeet;
    const gravelBags = Math.ceil(gravelCubicFeet / 0.5);
    
    let pickets = 0;
    let boardFeet = 0;
    
    if (fenceType === 'standard-privacy') {
      const boardsPerFoot = 12 / (boardWidth + boardSpacing);
      pickets = Math.ceil(linearFt * boardsPerFoot * 1.10);
      boardFeet = pickets * height;
    } else if (fenceType === 'board-on-board') {
      const boardsPerFoot = 12 / (boardWidth + boardSpacing);
      pickets = Math.ceil(linearFt * boardsPerFoot * 1.30 * 1.10);
      boardFeet = pickets * height;
    } else if (fenceType === 'picket') {
      const picketSpacing = 3;
      const picketsPerFoot = 12 / (boardWidth + picketSpacing);
      pickets = Math.ceil(linearFt * picketsPerFoot * 1.10);
      boardFeet = pickets * height;
    } else if (fenceType === 'horizontal-slat') {
      const boardsPerSection = Math.ceil((height * 12) / (boardWidth + boardSpacing));
      const sectionsCount = Math.ceil(linearFt / postSpacing);
      pickets = boardsPerSection * sectionsCount * 1.10;
      boardFeet = pickets * postSpacing;
    }
    
    let rails = 0;
let totalRailLength = 0;

if (['standard-privacy', 'board-on-board', 'picket'].includes(fenceType)) {
  const railsPerHeight = height <= 4 ? 2 : (height <= 7 ? 3 : 4);
  totalRailLength = linearFt * railsPerHeight;
  const rails16ft = Math.floor(totalRailLength / 16);
  const rails8ft = Math.ceil((totalRailLength - (rails16ft * 16)) / 8);
  rails = rails16ft + rails8ft;
} else if (fenceType === 'split-rail' || fenceType === 'split-rail-chain') {
  const railsPerSection = height <= 3 ? 2 : (height <= 4 ? 3 : 4);
  rails = sections * railsPerSection;
  totalRailLength = rails * railLength;
}
    
    const railFasteners = rails * 4;
    const picketFasteners = pickets * (fenceType === 'horizontal-slat' ? 2 : (height <= 4 ? 2 : 3)) * 2;
    const totalFasteners = railFasteners + picketFasteners;
    const postCaps = totalPosts;
    
    let gateHardware = { hinges: 0, latches: 0, supportWheels: 0, caneBolts: 0 };
    gateHardware.hinges += (gates3ft + gates4ft) * 2;
    gateHardware.latches += gates3ft + gates4ft;
    gateHardware.hinges += gates6ft * 3;
    gateHardware.latches += gates6ft;
    gateHardware.supportWheels += gates6ft;
    gateHardware.hinges += (gates10ft + gates12ft) * 6;
    gateHardware.latches += (gates10ft + gates12ft) * 2;
    gateHardware.supportWheels += (gates10ft + gates12ft) * 2;
    gateHardware.caneBolts += gates10ft + gates12ft;
    
    let panels = 0;
    if (['vinyl-panel', 'aluminum', 'composite'].includes(fenceType)) {
      panels = sections;
    }
    
    let chainLinkRolls = 0;
    let meshFabric = 0;
    if (fenceType === 'chain-link' || fenceType === 'split-rail-chain') {
      chainLinkRolls = Math.ceil(linearFt / 50);
      meshFabric = linearFt * height;
    }
    
    const materialsData = {
  posts: { 
    post4x4: post4x4Count, 
    post6x6: post6x6Count, 
    total: totalPosts, 
    length: postLength, 
    spacing: postSpacing,
    post6x6Breakdown: post6x6Breakdown 
  },
  concrete: { bags: concreteBags, depth: requiredDepth },
  gravel: { bags: gravelBags, cubicFeet: gravelCubicFeet },
  pickets: { count: pickets, boardFeet: boardFeet, width: boardWidth, spacing: boardSpacing },
  rails: { count: rails, totalLength: totalRailLength },
  hardware: { fasteners: totalFasteners, postCaps: postCaps, gates: gateHardware },
  panels: panels,
  chainLink: { rolls: chainLinkRolls, fabric: meshFabric }
};

setTimeout(() => {
  resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}, 100);

setMaterials(materialsData);
setHasCalculated(true);

// ✅ Your existing tracking - KEEP THIS
trackCalculation('fence', {
  linearFeet: linearFt,
  fenceType: fenceType,
  height: height,
  boardWidth: boardWidth,
  boardSpacing: boardSpacing,
  railLength: railLength,
  terrain: terrain,
  slopeMethod: slopeMethod,
  frostDepth: frostDepth,
  gates3ft: gates3ft,
  gates4ft: gates4ft,
  gates6ft: gates6ft,
  gates10ft: gates10ft,
  gates12ft: gates12ft,
  corners: cornersCount,
  fenceLayout: fenceLayout
}, {
  totalPosts: totalPosts,
  post4x4: post4x4Count,
  post6x6: post6x6Count,
  postLength: postLength,
  postSpacing: postSpacing,
  concreteBags: concreteBags,
  gravelBags: gravelBags,
  gravelCubicFeet: gravelCubicFeet,
  pickets: pickets,
  boardFeet: boardFeet,
  rails: rails,
  totalRailLength: totalRailLength,
  totalFasteners: totalFasteners,
  postCaps: postCaps,
  gateHardware: gateHardware,
  panels: panels,
  chainLinkRolls: chainLinkRolls,
  meshFabric: meshFabric,
  fenceTypeName: fenceTypes[fenceType].name
});
trackCalculatorInteraction.calculate('fence', true);
};  

const handleCopyCalculation = async () => {
  // ✅ Your existing tracking - KEEP THIS
  trackCalculatorInteraction.copyResults('fence');
  
  // ⭐ ADD THIS NEW LINE
  trackAction('copy');
  
  if (!hasCalculated || !materials || !materials.posts) return;
  
  const inputs = {
    'Fence length': `${linearFeet} linear feet`,
    'Fence type': fenceTypes[fenceType].name,
    'Height': `${height} feet`,
    'Post spacing': `${fenceTypes[fenceType].postSpacing} feet`,
    'Terrain': terrain
  };
  
  const totalGates = parseInt(gates3ft || 0) + parseInt(gates4ft || 0) + parseInt(gates6ft || 0) + parseInt(gates10ft || 0) + parseInt(gates12ft || 0);
  if (totalGates > 0) {
    const gateList = [];
    if (gates3ft > 0) gateList.push(`${gates3ft}×3ft`);
    if (gates4ft > 0) gateList.push(`${gates4ft}×4ft`);
    if (gates6ft > 0) gateList.push(`${gates6ft}×6ft`);
    if (gates10ft > 0) gateList.push(`${gates10ft}×10ft`);
    if (gates12ft > 0) gateList.push(`${gates12ft}×12ft`);
    inputs['Gates'] = `${totalGates} gates (${gateList.join(', ')})`;
  }
  
  const outputs = {
    'Total posts': `${materials.posts.total} posts`,
    'Concrete needed': `${materials.concrete.bags} bags (80lb)`,
    'Gravel needed': `${materials.gravel.bags} bags`
  };
  
  if (materials.posts.post4x4 > 0) {
    outputs['4×4 Posts'] = `${materials.posts.post4x4} posts (${materials.posts.length.toFixed(1)}ft each)`;
  }
  if (materials.posts.post6x6 > 0) {
    outputs['6×6 Posts'] = `${materials.posts.post6x6} posts (${materials.posts.length.toFixed(1)}ft each)`;
  }
  if (materials.rails && materials.rails.totalLength > 0) {
    outputs['Rails needed'] = `${materials.rails.totalLength} linear feet`;
  }
  if (materials.pickets && materials.pickets.count > 0) {
    outputs['Pickets needed'] = `${materials.pickets.count} pickets`;
  }
  if (materials.panels > 0) {
    outputs['Panels needed'] = `${materials.panels} panels`;
  }
  
  const note = `Post depth: ${frostDepth}" (1/3 rule). IRC standard post spacing. ${materials.posts.post6x6 > 0 ? '6×6 posts for corners, gates, and tall fences.' : ''}`;
  
  const success = await copyCalculation('Fence Calculator', inputs, outputs, note);
  
  if (success) {
    setCopyButtonText('✓ Copied!');
    setTimeout(() => setCopyButtonText('📋 Copy Calculation'), 2000);
  } else {
    alert('Unable to copy. Please copy results manually.');
  }
};

  const handleReset = () => {
    trackCalculatorInteraction.startOver('fence');
    trackAction('reset');
    
    setLinearFeet('');
    setFenceType('picket');
    setHeight('6');
    setBoardWidth('5.5');
    setBoardSpacing('0');
    setRailLength('8');
    setTerrain('flat');
    setSlopeMethod('stepped');
    setFrostDepth('36');
    setGates3ft('0');
    setGates4ft('0');
    setGates6ft('0');
    setGates10ft('0');
    setGates12ft('0');
    setCorners('4');
    setFenceLayout('perimeter');
    
    setMaterials(null);
    setHasCalculated(false);
  };

  // Capture current calculator state for flag report
  const captureInputs = () => ({
    linearFeet,
    fenceType,
    height,
    boardWidth,
    boardSpacing,
    railLength,
    vinylStyle,
    terrain,
    slopeMethod,
    frostDepth,
    gates3ft,
    gates4ft,
    gates6ft,
    gates10ft,
    gates12ft,
    corners,
    fenceLayout,
    materials
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Professional Fence Materials Calculator
              </h2>
              <p className="text-gray-600 mt-2 text-lg">Industry-standard material estimator • 2025</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <SectionCard title="Basic Measurements" icon={Ruler}>
              <InputGrid columns={1}>
                <NumberInput
                  label="Linear Feet of Fencing"
                  value={linearFeet}
                  onChange={(value) => {
                    setLinearFeet(value);
                    trackField('linearFeet', value);
                    setTimeout(() => validate(getValues()), 100);
                  }}
                  unit="feet"
                  required={true}
                  fieldName="linearFeet"
                  placeholder="Enter linear feet (e.g., 150)"
                />
                
                <SelectInput
                  label="Fence Height"
                  value={height.toString()}
                  onChange={(value) => {
                    setHeight(parseInt(value));
                    trackField('height', value);
                    setTimeout(() => validate(getValues()), 100);
                  }}
                  options={heightOptions}
                />
                
                <NumberInput
                  label="Number of Corners"
                  value={corners}
                  onChange={(value) => {
                    setCorners(value);
                    trackField('corners', value);
                    setTimeout(() => validate(getValues()), 100);
                  }}
                  required={true}
                  fieldName="corners"
                  placeholder="Enter number of corners (e.g., 4)"
                />
                
                <SelectInput
                  label="Fence Layout"
                  value={fenceLayout}
                  onChange={(value) => {
  setFenceLayout(value);      // ← Correct function
  trackField('fenceLayout', value);
}}
                  options={fenceLayoutOptions}
                />
                <p className="text-xs text-gray-500 -mt-2">Open-ended fences require stronger terminal posts</p>
              </InputGrid>
            </SectionCard>
            
            <SectionCard title="Fence Type">
              <InputGrid columns={1}>
                <SelectInput
                  label="Fence Style"
                  value={fenceType}
                  onChange={(value) => {
  setFenceType(value);
  trackField('fenceType', value);
}}
                  options={formatOptions(fenceTypes)}
                />
                <p className="text-xs text-gray-500 -mt-2">
                  {(fenceType === 'split-rail' || fenceType === 'split-rail-chain') 
                    ? `Rail length: ${railLength}ft (Post spacing: ~${(railLength - 0.5).toFixed(1)}ft)`
                    : `Post spacing: ${fenceTypes[fenceType].postSpacing} feet on center`
                  }
                </p>
                
                {(fenceType === 'split-rail' || fenceType === 'split-rail-chain') && (
                  <SelectInput
                    label="Rail Length"
                    value={railLength.toString()}
                    onChange={(value) => setRailLength(parseFloat(value))}
                    options={railLengthOptions}
                  />
                )}
                
                {['standard-privacy', 'board-on-board', 'picket', 'horizontal-slat'].includes(fenceType) && (
                  <>
                    <SelectInput
                      label="Board Width (actual inches)"
                      value={boardWidth.toString()}
                      onChange={(value) => {
                        setBoardWidth(parseFloat(value));
                        setTimeout(() => validate(getValues()), 100);
                      }}
                      options={boardWidthOptions}
                    />
                    
                    <NumberInput
                      label="Board Spacing (inches)"
                      value={boardSpacing.toString()}
                      onChange={(value) => setBoardSpacing(parseFloat(value) || 0)}
                      unit="inches"
                      min="0"
                      max="4"
                      step="0.25"
                    />
                  </>
                )}
              </InputGrid>
            </SectionCard>
            
            <SectionCard title="Gates">
              <InputGrid columns={2}>
                <NumberInput
                  label="3-foot Gates"
                  value={gates3ft.toString()}
                  onChange={(value) => setGates3ft(parseInt(value) || 0)}
                  min="0"
                />
                <NumberInput
                  label="4-foot Gates"
                  value={gates4ft.toString()}
                  onChange={(value) => setGates4ft(parseInt(value) || 0)}
                  min="0"
                />
              </InputGrid>
              
              <NumberInput
                label="6-foot Gates"
                value={gates6ft.toString()}
                onChange={(value) => setGates6ft(parseInt(value) || 0)}
                min="0"
              />
              
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-700 mb-3">Double Driveway Gates</h3>
                <InputGrid columns={2}>
                  <NumberInput
                    label="10-foot Double"
                    value={gates10ft.toString()}
                    onChange={(value) => setGates10ft(parseInt(value) || 0)}
                    min="0"
                  />
                  <NumberInput
                    label="12-foot Double"
                    value={gates12ft.toString()}
                    onChange={(value) => setGates12ft(parseInt(value) || 0)}
                    min="0"
                  />
                </InputGrid>
              </div>
            </SectionCard>
            
            <SectionCard title="Site Conditions">
              <InputGrid columns={1}>
                <SelectInput
                  label="Terrain Type"
                  value={terrain}
                  onChange={setTerrain}
                  options={terrainOptions}
                />
                
                <SelectInput
                  label="Frost Depth (inches)"
                  value={frostDepth.toString()}
                  onChange={(value) => {
                    setFrostDepth(parseInt(value));
                    setTimeout(() => validate(getValues()), 100);
                  }}
                  options={frostDepthOptions}
                />
              </InputGrid>
            </SectionCard>

            <ValidationDisplay />
            
            <CalculateButtons
              onCalculate={calculateMaterials}
              onStartOver={handleReset}
              showStartOver={hasCalculated}
            />
          </div>
          
          <div className="space-y-6" ref={resultsRef}>
            {!hasCalculated ? (
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center">
                <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">Ready to Calculate</h3>
                <p className="text-gray-600">Fill in your fence details, then click Calculate.</p>
              </div>
            ) : (
              <>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <MaterialCard
                  title="Linear Feet"
                  value={linearFeet}
                  color="green"
                />
                <MaterialCard
                  title="Height"
                  value={`${height}'`}
                  color="blue"
                />
                <MaterialCard
                  title="Total Posts"
                  value={materials.posts?.total || 0}
                  color="purple"
                />
              </div>
              
              <SectionCard title="Materials Breakdown">
                <div className="space-y-4 text-sm">
                  <div className="border-b pb-3">
                    <div className="font-semibold text-gray-900 mb-2">Posts</div>
                    <div className="space-y-1 text-gray-600 pl-3">
                      {materials.posts?.post4x4 > 0 && (
                        <div className="flex justify-between">
                          <span>4×4 Posts ({materials.posts.length.toFixed(1)}ft each)</span>
                          <span className="font-semibold">{materials.posts.post4x4}</span>
                        </div>
                      )}
                      {materials.posts?.post6x6 > 0 && (
                        <div className="flex justify-between">
                          <span>6×6 Posts ({materials.posts.length.toFixed(1)}ft each)</span>
                          <span className="font-semibold">{materials.posts.post6x6}</span>
                        </div>
                      )}
                      <div className="text-xs text-gray-500 mt-2">Total: {materials.posts?.total}</div>
                    </div>
                    
                    {materials.posts?.post6x6 > 0 && materials.posts?.post6x6Breakdown && (
                      <div className="mt-3 bg-amber-50 p-3 rounded-lg border border-amber-200">
                        <div className="text-xs font-semibold text-amber-900 mb-1">6×6 Post Requirements:</div>
                        <div className="text-xs text-amber-800 space-y-1">
                          {materials.posts.post6x6Breakdown.terminal > 0 && (
                            <div className="flex justify-between">
                              <span>• Terminal posts (fence ends)</span>
                              <span className="font-semibold">{materials.posts.post6x6Breakdown.terminal}</span>
                            </div>
                          )}
                          {materials.posts.post6x6Breakdown.corners > 0 && (
                            <div className="flex justify-between">
                              <span>• Corner posts</span>
                              <span className="font-semibold">{materials.posts.post6x6Breakdown.corners}</span>
                            </div>
                          )}
                          {materials.posts.post6x6Breakdown.gates > 0 && (
                            <div className="flex justify-between">
                              <span>• Gate posts (2 per gate ≥4ft)</span>
                              <span className="font-semibold">{materials.posts.post6x6Breakdown.gates}</span>
                            </div>
                          )}
                          {materials.posts.post6x6Breakdown.tall > 0 && (
                            <div className="flex justify-between">
                              <span>• All posts (fence over 6ft)</span>
                              <span className="font-semibold">{materials.posts.post6x6Breakdown.tall}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="border-b pb-3">
                    <div className="font-semibold text-gray-900 mb-2">Foundation</div>
                    <div className="space-y-1 text-gray-600 pl-3">
                      <div className="flex justify-between">
                        <span>Concrete (80lb bags)</span>
                        <span className="font-semibold">{materials.concrete?.bags}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Gravel bags (0.5 cu ft)</span>
                        <span className="font-semibold">{materials.gravel?.bags}</span>
                      </div>
                      <div className="text-xs text-gray-500 mt-2">
                        <div>Depth: {materials.concrete?.depth}"</div>
                        {materials.posts?.post4x4 > 0 && <div>4×4: ~3 bags/post</div>}
                        {materials.posts?.post6x6 > 0 && <div>6×6: ~7 bags/post</div>}
                      </div>
                    </div>
                  </div>
                  
                  {materials.rails?.count > 0 && (
                    <div className="border-b pb-3">
                      <div className="font-semibold text-gray-900 mb-2">Rails</div>
                      <div className="space-y-1 text-gray-600 pl-3">
                        <div className="flex justify-between">
                          <span>Total length</span>
                          <span className="font-semibold">{materials.rails.totalLength}ft</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {materials.chainLink?.rolls > 0 && (
                    <div className="border-b pb-3">
                      <div className="font-semibold text-gray-900 mb-2">Chain Link</div>
                      <div className="space-y-1 text-gray-600 pl-3">
                        <div className="flex justify-between">
                          <span>50ft rolls</span>
                          <span className="font-semibold">{materials.chainLink.rolls}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </SectionCard>
              
              <ResultsButtons
  onCopy={handleCopyCalculation}
  onPrint={() => {
    printCalculation('Fence Calculator');  // ← Use the imported function
    trackAction('print');                   // ← Add tracking
  }}
  copyButtonText={copyButtonText}
/>
              </>
            )}
          </div>
        </div>
        <FlagModal 
          calculatorName="Fence Calculator"
          captureInputs={captureInputs}
        />
      </div>
      <FAQSection calculatorId="fence-calculator" />
    </div>
  );
}