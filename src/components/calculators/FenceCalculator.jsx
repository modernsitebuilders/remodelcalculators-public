'use client';

import React, { useState } from 'react';
import { Calculator, Ruler, TrendingUp, Info, AlertCircle, CheckCircle } from 'lucide-react';

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
    
    // Post count depends on fence layout
    let linePosts;
    let endPosts = 0;
    
    if (fenceLayout === 'continuous') {
      // Continuous fence (closed loop): posts = sections
      linePosts = sections;
    } else {
      // Fence with endpoints: posts = sections + 1, and 2 end posts need to be 6×6
      linePosts = sections + 1;
      endPosts = 2; // Start and end posts (will be 6×6)
    }
    
    const totalPosts = linePosts;
    
    let post4x4Count = 0;
    let post6x6Count = 0;
    
    if (height > 6) {
      post6x6Count = totalPosts;
    } else {
      // 6×6 posts needed for: corners + large gates + end posts (if applicable)
      const needs6x6 = cornersCount + gates6ft + (gates10ft * 2) + (gates12ft * 2) + endPosts;
      post6x6Count = Math.min(needs6x6, totalPosts);
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
      const railsPerSection = height <= 4 ? 2 : (height <= 7 ? 3 : 4);
      rails = sections * railsPerSection;
      const rails16ft = Math.floor(rails / 2);
      const rails8ft = rails % 2;
      totalRailLength = (rails16ft * 16) + (rails8ft * 8);
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
      posts: { post4x4: post4x4Count, post6x6: post6x6Count, total: totalPosts, length: postLength, spacing: postSpacing },
      concrete: { bags: concreteBags, depth: requiredDepth },
      gravel: { bags: gravelBags, cubicFeet: gravelCubicFeet },
      pickets: { count: pickets, boardFeet: boardFeet, width: boardWidth, spacing: boardSpacing },
      rails: { count: rails, totalLength: totalRailLength },
      hardware: { fasteners: totalFasteners, postCaps: postCaps, gates: gateHardware },
      panels: panels,
      chainLink: { rolls: chainLinkRolls, fabric: meshFabric }
    };
    
    setMaterials(materialsData);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6 border border-gray-200">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl shadow-lg">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-700 to-emerald-600 bg-clip-text text-transparent">
                Professional Fence Materials Calculator
              </h1>
              <p className="text-gray-600 mt-2 text-lg">Industry-standard material estimator • 2025</p>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Ruler className="w-6 h-6 text-green-600" />
                Basic Measurements
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Linear Feet of Fencing</label>
                  <input type="number" value={linearFeet} onChange={(e) => setLinearFeet(e.target.value)} onWheel={(e) => e.target.blur()} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="1" placeholder="Enter linear feet (e.g., 150)" />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fence Height (feet)</label>
                  <select value={height} onChange={(e) => setHeight(parseInt(e.target.value))} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="3">3 feet</option>
                    <option value="4">4 feet</option>
                    <option value="5">5 feet</option>
                    <option value="6">6 feet</option>
                    <option value="7">7 feet</option>
                    <option value="8">8 feet</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Corners</label>
                  <input type="number" value={corners} onChange={(e) => setCorners(e.target.value)} onWheel={(e) => e.target.blur()} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="0" placeholder="Enter number of corners (e.g., 4)" />
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Fence Type</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fence Style</label>
                  <select value={fenceType} onChange={(e) => setFenceType(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    {Object.entries(fenceTypes).map(([key, config]) => (
                      <option key={key} value={key}>{config.name}</option>
                    ))}
                  </select>
                  <p className="text-xs text-gray-500 mt-1">
                    {(fenceType === 'split-rail' || fenceType === 'split-rail-chain') 
                      ? `Rail length: ${railLength}ft (Post spacing: ~${(railLength - 0.5).toFixed(1)}ft)`
                      : `Post spacing: ${fenceTypes[fenceType].postSpacing} feet on center`
                    }
                  </p>
                </div>
                
                {(fenceType === 'split-rail' || fenceType === 'split-rail-chain') && (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Rail Length</label>
                    <select value={railLength} onChange={(e) => setRailLength(parseFloat(e.target.value))} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="8">8 feet</option>
                      <option value="8.5">8.5 feet</option>
                      <option value="11">11 feet - Most Common</option>
                    </select>
                  </div>
                )}
                
                {['standard-privacy', 'board-on-board', 'picket', 'horizontal-slat'].includes(fenceType) && (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Board Width (actual inches)</label>
                      <select value={boardWidth} onChange={(e) => setBoardWidth(parseFloat(e.target.value))} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                        <option value="3.5">1×4 (3.5" actual)</option>
                        <option value="5.5">1×6 (5.5" actual)</option>
                        <option value="7.25">1×8 (7.25" actual)</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Board Spacing (inches)</label>
                      <input type="number" value={boardSpacing} onChange={(e) => setBoardSpacing(parseFloat(e.target.value) || 0)} onWheel={(e) => e.target.blur()} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="0" max="4" step="0.25" />
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Gates</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">3-foot Gates</label>
                    <input type="number" value={gates3ft} onChange={(e) => setGates3ft(parseInt(e.target.value) || 0)} onWheel={(e) => e.target.blur()} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="0" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">4-foot Gates</label>
                    <input type="number" value={gates4ft} onChange={(e) => setGates4ft(parseInt(e.target.value) || 0)} onWheel={(e) => e.target.blur()} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="0" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">6-foot Gates</label>
                  <input type="number" value={gates6ft} onChange={(e) => setGates6ft(parseInt(e.target.value) || 0)} onWheel={(e) => e.target.blur()} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="0" />
                </div>
                <div className="border-t pt-4">
                  <h3 className="font-semibold text-gray-700 mb-3">Double Driveway Gates</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">10-foot Double</label>
                      <input type="number" value={gates10ft} onChange={(e) => setGates10ft(parseInt(e.target.value) || 0)} onWheel={(e) => e.target.blur()} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="0" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">12-foot Double</label>
                      <input type="number" value={gates12ft} onChange={(e) => setGates12ft(parseInt(e.target.value) || 0)} onWheel={(e) => e.target.blur()} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent" min="0" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Site Conditions</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Terrain Type</label>
                  <select value={terrain} onChange={(e) => setTerrain(e.target.value)} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="flat">Flat terrain</option>
                    <option value="slight-slope">Slight slope</option>
                    <option value="moderate-slope">Moderate slope</option>
                    <option value="steep-slope">Steep slope</option>
                    <option value="rocky">Rocky soil</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Frost Depth (inches)</label>
                  <select value={frostDepth} onChange={(e) => setFrostDepth(parseInt(e.target.value))} className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option value="0">No frost</option>
                    <option value="24">24"</option>
                    <option value="36">36"</option>
                    <option value="42">42"</option>
                    <option value="48">48"</option>
                    <option value="60">60"</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-emerald-700 rounded-xl shadow-2xl p-8 text-center">
              <button onClick={calculateMaterials} className="w-full bg-white text-green-700 font-bold text-xl py-6 px-8 rounded-xl shadow-lg hover:bg-green-50 hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3">
                <Calculator className="w-8 h-8" />
                Calculate Materials
              </button>
            </div>
          </div>
          
          <div className="space-y-6">
            {!hasCalculated ? (
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center">
                <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-700 mb-2">Ready to Calculate</h3>
                <p className="text-gray-600">Fill in your fence details, then click Calculate.</p>
              </div>
            ) : (
              <>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                  <Ruler className="w-6 h-6 text-green-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{linearFeet}</div>
                  <div className="text-xs text-gray-600 font-medium">Linear Feet</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-200">
                  <TrendingUp className="w-6 h-6 text-blue-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{height}'</div>
                  <div className="text-xs text-gray-600 font-medium">Height</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-xl border border-purple-200">
                  <Info className="w-6 h-6 text-purple-600 mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{materials.posts?.total || 0}</div>
                  <div className="text-xs text-gray-600 font-medium">Total Posts</div>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Materials Breakdown</h2>
                
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
              </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}