export default function ConcreteGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">For a standard 4-inch thick slab, you need <strong>1.23 cubic yards</strong> of concrete per 100 square feet. An 80-pound bag yields 0.60 cubic feet, requiring <strong>45 bags</strong> per cubic yard.</p>
          </div>
        </div>
      </div>

      {/* Coverage by Project Type */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Concrete Volume by Project Type</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Slab Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Slab (4")</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">81 sq ft/yard</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Bags needed:</span>
                <span className="font-semibold">45 (80 lb) per yard</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Formula:</strong> (L × W × 0.33) ÷ 27 = cubic yards
              </div>
            </div>
          </div>

          {/* Driveway Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Driveway (6")</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">54 sq ft/yard</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">IRC minimum:</span>
                <span className="font-semibold">4-5 inches (6" for RV/heavy trucks)</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Formula:</strong> (L × W × 0.5) ÷ 27 = cubic yards
              </div>
            </div>
          </div>

          {/* Footings Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Footings (12" deep)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">27 sq ft/yard</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">IBC standard:</span>
                <span className="font-semibold">12" below soil</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Formula:</strong> (L × W × 1.0) ÷ 27 = cubic yards
              </div>
            </div>
          </div>

          {/* Posts Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Posts (12" diameter)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Per foot depth:</span>
                <span className="font-semibold">0.785 cubic feet</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Per 4' pier:</span>
                <span className="font-semibold">0.116 yards (5.2 bags)</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Formula:</strong> (π × r² × h) ÷ 27 = cubic yards
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Industry Standard Specifications</h2>
        
        {/* Bag Yields Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gray-800 text-white px-6 py-4">
            <h3 className="text-lg font-bold">Bag Yields (ASTM C150)</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Bag Size</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Cubic Feet</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Bags per Yard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">80 lb bag</td>
                  <td className="px-6 py-4 text-gray-700">0.60 cubic feet</td>
                  <td className="px-6 py-4 text-gray-700">45 bags</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">60 lb bag</td>
                  <td className="px-6 py-4 text-gray-700">0.45 cubic feet</td>
                  <td className="px-6 py-4 text-gray-700">60 bags</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-blue-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Cubic yard</td>
                  <td className="px-6 py-4 text-gray-700">27 cubic feet</td>
                  <td className="px-6 py-4 text-gray-700">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Thickness Requirements */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Thickness Requirements (IBC/IRC)</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Residential Applications</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Patios/Walkways: <strong>3.5 inches minimum (4" standard)</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Garage floors: <strong>4-5 inches (6-8" for heavy vehicles)</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Driveways: <strong>6 inches minimum</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Foundation walls: <strong>6-8 inches</strong></span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Footing Depth</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Frost zones: <strong>Below local frost depth</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Non-frost areas: <strong>12 inches minimum</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span>Always verify with local building department</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Waste Factors */}
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
          <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
            <span>⚠️</span>
            <span>Waste Factors (ACI 301)</span>
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="font-bold text-gray-900">Slabs</div>
              <div className="text-xl font-bold text-yellow-600">5-8%</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="font-bold text-gray-900">Footings</div>
              <div className="text-xl font-bold text-yellow-600">10-15%</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="font-bold text-gray-900">Walls</div>
              <div className="text-xl font-bold text-yellow-600">7-10%</div>
            </div>
            <div className="text-center p-3 bg-white rounded-lg">
              <div className="font-bold text-gray-900">Stairs</div>
              <div className="text-xl font-bold text-yellow-600">10-12%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🧮 Step-by-Step Calculation</h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="text-center mb-6">
            <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Example: 10' × 20' Patio Slab (4 inches thick)</h3>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <div className="font-bold text-gray-900">Calculate cubic feet</div>
              </div>
              <div className="ml-11 text-gray-700">10 ft × 20 ft × 0.33 ft = <strong className="text-blue-600">66 cubic feet</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <div className="font-bold text-gray-900">Convert to cubic yards</div>
              </div>
              <div className="ml-11 text-gray-700">66 ÷ 27 = <strong className="text-blue-600">2.44 cubic yards</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <div className="font-bold text-gray-900">Add waste factor (8% for slab)</div>
              </div>
              <div className="ml-11 text-gray-700">2.44 × 1.08 = <strong className="text-blue-600">2.64 cubic yards</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <div className="font-bold text-gray-900">Calculate bags needed (using 80 lb bags)</div>
              </div>
              <div className="ml-11 text-gray-700">2.64 × 45 = <strong className="text-blue-600">119 bags</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">✓</div>
                <div className="font-bold text-gray-900">Order amount</div>
              </div>
              <div className="ml-11 text-gray-700">Round up: <strong className="text-green-600">120 bags</strong> OR order <strong className="text-green-600">3 cubic yards</strong> ready-mix</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready-Mix vs Bagged */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🚛 Ready-Mix vs. Bagged Concrete</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ready-Mix Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
              <h3 className="text-2xl font-bold">Ready-Mix Concrete</h3>
              <p className="text-green-100 mt-2">Delivered by truck</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-2">When to use:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Projects requiring 1+ cubic yards</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Large slabs, driveways, foundations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">✓</span>
                    <span>Any project over 50 bags</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Advantages:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Professionally mixed to specifications</li>
                  <li>• Consistent strength throughout</li>
                  <li>• Faster pour for large projects</li>
                  <li>• Cost-effective over 1 yard</li>
                </ul>
              </div>
              
              <div className="bg-green-50 rounded-lg p-4">
                <div className="text-sm text-gray-700 mb-1">Typical pricing:</div>
                <div className="text-2xl font-bold text-green-700">$125-175 <span className="text-base font-normal">per yard</span></div>
                <div className="text-xs text-gray-600 mt-1">Includes delivery • 1 yard minimum</div>
              </div>
            </div>
          </div>

          {/* Bagged Card */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-6">
              <h3 className="text-2xl font-bold">Bagged Concrete</h3>
              <p className="text-orange-100 mt-2">Mix-on-site</p>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-2">When to use:</h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Small repairs under 1 cubic yard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Post holes, small footings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600 mt-1">✓</span>
                    <span>Multiple pours over time</span>
                  </li>
                </ul>
              </div>
              
              <div className="mb-4">
                <h4 className="font-bold text-gray-900 mb-2">Advantages:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Mix only what you need</li>
                  <li>• No minimum order</li>
                  <li>• Store unused bags</li>
                  <li>• Better for small projects</li>
                </ul>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-4">
                <div className="text-sm text-gray-700 mb-1">Typical pricing:</div>
                <div className="text-2xl font-bold text-orange-700">$4-6 <span className="text-base font-normal">per 80 lb bag</span></div>
                <div className="text-xs text-gray-600 mt-1">No minimum • Available at most stores</div>
              </div>
              
              <div className="bg-red-50 border-l-4 border-red-500 p-3 mt-4 text-sm text-gray-700">
                <strong>Note:</strong> Mixing 45+ bags by hand is extremely labor-intensive
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Common Concrete Projects</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">10' × 10' Patio (4 inches)</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Cubic yards:</span>
                    <span className="font-bold text-blue-600">1.23 yards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">80 lb bags:</span>
                    <span className="font-bold text-blue-600">55 bags</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
                Order 1.5 yards ready-mix
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">Two-car Driveway 20' × 20' (6 inches)</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Cubic yards:</span>
                    <span className="font-bold text-blue-600">7.4 yards</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-gray-600">Requires 6-inch minimum for vehicle traffic</div>
              </div>
              <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
                Order 8 yards ready-mix
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">50-foot Sidewalk (4' wide, 4 inches thick)</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Cubic yards:</span>
                    <span className="font-bold text-blue-600">2.47 yards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">80 lb bags:</span>
                    <span className="font-bold text-blue-600">111 bags</span>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 text-green-800 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
                Order 2.75 yards ready-mix
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">Four 12-inch Diameter Deck Posts (4 feet deep)</h3>
                <div className="mt-2 flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">Cubic yards:</span>
                    <span className="font-bold text-blue-600">0.47 yards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gray-600">80 lb bags:</span>
                    <span className="font-bold text-blue-600">21 bags</span>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 text-orange-800 px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap">
                Bagged concrete practical
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PSI Ratings */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">💪 Concrete Strength Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gray-800 text-white px-6 py-4">
            <h3 className="text-lg font-bold">PSI Ratings (ACI 318)</h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">2,500</div>
                <div>
                  <div className="font-bold text-gray-900">PSI</div>
                  <div className="text-sm text-gray-700">Residential footings, patios</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg border-2 border-green-500">
                <div className="text-3xl font-bold text-green-600">3,000</div>
                <div>
                  <div className="font-bold text-gray-900">PSI</div>
                  <div className="text-sm text-gray-700">Residential slabs, driveways<br/><strong>(Most common)</strong></div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-orange-600">3,500</div>
                <div>
                  <div className="font-bold text-gray-900">PSI</div>
                  <div className="text-sm text-gray-700">Floors with heavy loads</div>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">4,000</div>
                <div>
                  <div className="font-bold text-gray-900">PSI</div>
                  <div className="text-sm text-gray-700">Commercial, high-traffic areas</div>
                </div>
              </div>
            </div>
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-gray-700">
              <strong>Standard residential mix:</strong> 3,000 PSI with 5-6 inch slump
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">👷 Professional Standards</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🕐</span>
              <span>Curing Requirements (ACI 308)</span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">7</div>
                <span>Minimum 7 days moist curing for full strength</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">24</div>
                <span>Avoid foot traffic for 24 hours</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Full weight-bearing after 7 days</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">28</div>
                <span>Maximum strength achieved at 28 days</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🌡️</span>
              <span>Temperature Requirements</span>
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <span className="font-semibold text-gray-900">Minimum pour temp</span>
                <span className="font-bold text-blue-700">40°F</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <span className="font-semibold text-gray-900">Maximum pour temp</span>
                <span className="font-bold text-red-700">95°F</span>
              </div>
              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600">❄️</span>
                  <span><strong>Cold weather - Concrete must be minimum 65°F during mixing (ACI 306):</strong> Use heated mix and insulating blankets</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600">☀️</span>
                  <span><strong>Hot weather (&gt;85°F):</strong> Use retarders, shade, and fog misting</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code References */}
      <section className="mb-16">
        <div className="bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">📚 Building Code References</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>ACI 318:</strong> Structural Concrete Code</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>ACI 301:</strong> Concrete Specifications</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>ACI 308:</strong> Curing Requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>IRC R506:</strong> Concrete Floor Requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>IBC 1905:</strong> Concrete Construction Standards</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>ASTM C150:</strong> Portland Cement Specifications</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-gray-300 text-sm">
            Always verify local requirements with your building department. Frost depths, seismic zones, and soil conditions affect specifications.
          </div>
        </div>
      </section>

    </div>
  );
}