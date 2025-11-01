'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Info, AlertCircle } from 'lucide-react';

const MulchCalculator = () => {
  // State management
  const [shape, setShape] = useState('rectangle');
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [diameter, setDiameter] = useState('');
  const [depth, setDepth] = useState('3');
  const [materialType, setMaterialType] = useState('wood-chips');
  const [purchaseFormat, setPurchaseFormat] = useState('bulk');
  const [bagSize, setBagSize] = useState('2');
  const [includeWaste, setIncludeWaste] = useState(true);
  const [customDepth, setCustomDepth] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Material weights (lbs per cubic yard)
  const materialWeights = {
    'wood-chips': 600,
    'shredded-bark': 506,
    'bark-nuggets': 700,
    'pine-needles': 1375,
    'straw': 600,
    'compost': 1300,
    'rubber-mulch': 1250,
    'pea-gravel': 2700,
    'river-rock': 1250,
    'lava-rock': 800
  };

  // Depth presets by application
  const depthPresets = [
    { value: '1', label: '1" - Compost/Fine Mulch' },
    { value: '2', label: '2" - Flower Beds' },
    { value: '3', label: '3" - Trees & Shrubs' },
    { value: '4', label: '4" - Pathways' },
    { value: 'custom', label: 'Custom Depth' }
  ];

  // Calculate square footage based on shape
  const squareFootage = useMemo(() => {
    if (shape === 'rectangle') {
      const l = parseFloat(length) || 0;
      const w = parseFloat(width) || 0;
      return l * w;
    } else if (shape === 'circle') {
      const d = parseFloat(diameter) || 0;
      const radius = d / 2;
      return Math.PI * radius * radius;
    }
    return 0;
  }, [shape, length, width, diameter]);

  // Get actual depth value
  const actualDepth = useMemo(() => {
    if (depth === 'custom') {
      return parseFloat(customDepth) || 0;
    }
    return parseFloat(depth) || 0;
  }, [depth, customDepth]);

  // Calculate cubic yards needed
  const cubicYards = useMemo(() => {
    if (squareFootage === 0 || actualDepth === 0) return 0;
    const baseYards = (squareFootage * actualDepth) / 324;
    return includeWaste ? baseYards * 1.075 : baseYards; // 7.5% waste factor
  }, [squareFootage, actualDepth, includeWaste]);

  // Calculate cubic feet
  const cubicFeet = useMemo(() => {
    return cubicYards * 27;
  }, [cubicYards]);

  // Calculate bags needed
  const bagsNeeded = useMemo(() => {
    const size = parseFloat(bagSize);
    return Math.ceil(cubicFeet / size);
  }, [cubicFeet, bagSize]);

  // Calculate weight
  const estimatedWeight = useMemo(() => {
    const weightPerYard = materialWeights[materialType] || 700;
    return Math.round(cubicYards * weightPerYard);
  }, [cubicYards, materialType]);

  // Coverage at 1 inch
  const coverageAtOneInch = useMemo(() => {
    return Math.round(cubicYards * 324);
  }, [cubicYards]);

  // Truck load estimate
  const truckLoads = useMemo(() => {
    return (cubicYards / 2.5).toFixed(1); // Average pickup truck holds 2-2.5 yards
  }, [cubicYards]);

  const hasResults = squareFootage > 0 && actualDepth > 0;

  // Handler functions
  const handleCalculate = () => {
    if (hasResults) {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setLength('');
    setWidth('');
    setDiameter('');
    setDepth('3');
    setMaterialType('wood-chips');
    setPurchaseFormat('bulk');
    setBagSize('2');
    setIncludeWaste(true);
    setCustomDepth('');
    setShowResults(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center gap-3 mb-2">
            <Calculator className="w-8 h-8 text-green-600" />
            <h1 className="text-3xl font-bold text-gray-800">Mulch Calculator</h1>
          </div>
          <p className="text-gray-600">Calculate how much mulch you need for your landscaping project</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Input Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Project Details</h2>

            {/* Shape Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Area Shape</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setShape('rectangle')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    shape === 'rectangle'
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Rectangle/Square
                </button>
                <button
                  onClick={() => setShape('circle')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    shape === 'circle'
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Circle
                </button>
              </div>
            </div>

            {/* Dimensions */}
            {shape === 'rectangle' ? (
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Length (feet)</label>
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="0.1"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Width (feet)</label>
                  <input
                    type="number"
                    value={width}
                    onChange={(e) => setWidth(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="0"
                    min="0"
                    step="0.1"
                  />
                </div>
              </div>
            ) : (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Diameter (feet)</label>
                <input
                  type="number"
                  value={diameter}
                  onChange={(e) => setDiameter(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="0"
                  min="0"
                  step="0.1"
                />
              </div>
            )}

            {/* Depth Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mulch Depth</label>
              <select
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {depthPresets.map((preset) => (
                  <option key={preset.value} value={preset.value}>
                    {preset.label}
                  </option>
                ))}
              </select>
              {depth === 'custom' && (
                <input
                  type="number"
                  value={customDepth}
                  onChange={(e) => setCustomDepth(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg mt-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter depth in inches"
                  min="0.5"
                  max="12"
                  step="0.5"
                />
              )}
            </div>

            {/* Material Type */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Material Type</label>
              <select
                value={materialType}
                onChange={(e) => setMaterialType(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <optgroup label="Organic Mulch">
                  <option value="wood-chips">Wood Chips (600 lbs/yard)</option>
                  <option value="shredded-bark">Shredded Bark (506 lbs/yard)</option>
                  <option value="bark-nuggets">Bark Nuggets (700 lbs/yard)</option>
                  <option value="pine-needles">Pine Needles (1,375 lbs/yard)</option>
                  <option value="straw">Straw (600 lbs/yard)</option>
                  <option value="compost">Compost (1,300 lbs/yard)</option>
                </optgroup>
                <optgroup label="Inorganic Mulch">
                  <option value="rubber-mulch">Rubber Mulch (1,250 lbs/yard)</option>
                  <option value="pea-gravel">Pea Gravel (2,700 lbs/yard)</option>
                  <option value="river-rock">River Rock (1,250 lbs/yard)</option>
                  <option value="lava-rock">Lava Rock (800 lbs/yard)</option>
                </optgroup>
              </select>
            </div>

            {/* Purchase Format */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Purchase Format</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setPurchaseFormat('bulk')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    purchaseFormat === 'bulk'
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Bulk (Cubic Yards)
                </button>
                <button
                  onClick={() => setPurchaseFormat('bags')}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    purchaseFormat === 'bags'
                      ? 'border-green-600 bg-green-50 text-green-700'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  Bags
                </button>
              </div>
            </div>

            {/* Bag Size (if bags selected) */}
            {purchaseFormat === 'bags' && (
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Bag Size</label>
                <select
                  value={bagSize}
                  onChange={(e) => setBagSize(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  <option value="2">2 cu ft (13.5 bags per yard)</option>
                  <option value="3">3 cu ft (9 bags per yard)</option>
                  <option value="1.5">1.5 cu ft (18 bags per yard)</option>
                </select>
              </div>
            )}

            {/* Include Waste Factor */}
            <div className="flex items-center gap-2 mb-6">
              <input
                type="checkbox"
                id="waste"
                checked={includeWaste}
                onChange={(e) => setIncludeWaste(e.target.checked)}
                className="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
              />
              <label htmlFor="waste" className="text-sm text-gray-700">
                Include 7.5% waste factor (recommended)
              </label>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleCalculate}
                disabled={!hasResults}
                className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                  hasResults
                    ? 'bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <Calculator className="w-5 h-5" />
                Calculate
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-3 rounded-lg font-semibold bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Results Section */}
          <div>
            {showResults && hasResults ? (
              <div className="space-y-4">
                {/* Main Results Card */}
                <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-lg shadow-lg p-6 text-white">
                  <h2 className="text-2xl font-bold mb-4">Your Results</h2>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <div className="text-sm opacity-90 mb-1">Total Volume Needed</div>
                      <div className="text-3xl font-bold">{cubicYards.toFixed(2)} cubic yards</div>
                      <div className="text-sm opacity-75 mt-1">{cubicFeet.toFixed(1)} cubic feet</div>
                    </div>

                    {purchaseFormat === 'bags' && (
                      <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                        <div className="text-sm opacity-90 mb-1">Bags Required</div>
                        <div className="text-3xl font-bold">{bagsNeeded} bags</div>
                        <div className="text-sm opacity-75 mt-1">
                          {bagSize} cu ft bags
                        </div>
                      </div>
                    )}

                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur">
                      <div className="text-sm opacity-90 mb-1">Estimated Weight</div>
                      <div className="text-3xl font-bold">{estimatedWeight.toLocaleString()} lbs</div>
                      <div className="text-sm opacity-75 mt-1">
                        {(estimatedWeight / 2000).toFixed(2)} tons
                      </div>
                    </div>
                  </div>
                </div>

                {/* Additional Details Card */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Coverage Area:</span>
                      <span className="font-semibold text-gray-800">{squareFootage.toFixed(1)} sq ft</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Mulch Depth:</span>
                      <span className="font-semibold text-gray-800">{actualDepth} inches</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Coverage at 1":</span>
                      <span className="font-semibold text-gray-800">{coverageAtOneInch} sq ft</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Pickup Truck Loads:</span>
                      <span className="font-semibold text-gray-800">~{truckLoads} loads</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Waste Factor:</span>
                      <span className="font-semibold text-gray-800">{includeWaste ? 'Included' : 'Not included'}</span>
                    </div>
                  </div>
                </div>

                {/* Tips Card */}
                <div className="bg-blue-50 rounded-lg shadow p-6">
                  <div className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-blue-900 mb-2">Installation Tips</h3>
                      <ul className="text-sm text-blue-800 space-y-1">
                        <li>• Keep mulch 3-6 inches away from tree trunks and plant stems</li>
                        <li>• Create a "donut" shape around trees, not a "volcano"</li>
                        <li>• Water after application to help mulch settle</li>
                        <li>• Check vehicle payload capacity before hauling</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Weight Warning */}
                {estimatedWeight > 2000 && (
                  <div className="bg-amber-50 rounded-lg shadow p-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-sm font-semibold text-amber-900 mb-2">Weight Consideration</h3>
                        <p className="text-sm text-amber-800">
                          This is a heavy load. Consider delivery service or multiple trips. 
                          Most pickup trucks safely handle 1,000-1,500 lbs.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <Calculator className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">Enter Your Dimensions</h3>
                <p className="text-gray-500">Fill in the project details to calculate your mulch needs</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Depth Guidelines by Application</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong className="text-gray-700">Fine Mulch (1-2"):</strong>
              <p className="text-gray-600">Compost, grass clippings, pine needles</p>
            </div>
            <div>
              <strong className="text-gray-700">Flower Beds (2-3"):</strong>
              <p className="text-gray-600">Most flowering plants and perennials</p>
            </div>
            <div>
              <strong className="text-gray-700">Trees & Shrubs (2-4"):</strong>
              <p className="text-gray-600">Around woody plants, extend to drip line</p>
            </div>
            <div>
              <strong className="text-gray-700">Pathways (3-4"):</strong>
              <p className="text-gray-600">Wood chips for walking areas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MulchCalculator;