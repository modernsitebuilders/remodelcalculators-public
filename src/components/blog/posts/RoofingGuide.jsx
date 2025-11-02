export default function RoofingGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">One roofing square equals <strong>100 square feet</strong>. A standard shingle bundle covers <strong>33.33 square feet</strong>, requiring <strong>3 bundles per square</strong>. Waste factors vary by complexity: 10% for simple gables, 15% for hip roofs, and 20% for complex roofs.</p>
          </div>
        </div>
      </div>

      {/* Roofing Measurements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Roofing Square Measurements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Roofing Square Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Roofing Square</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">1 square equals:</span>
                <span className="font-semibold">100 sq ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Typical roof:</span>
                <span className="font-semibold">15-30 squares</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Example:</strong> 1,500 sq ft roof = 15 squares
              </div>
            </div>
          </div>

          {/* Shingle Bundle Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Shingle Bundles</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Bundle coverage:</span>
                <span className="font-semibold">33.33 sq ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Per square:</span>
                <span className="font-semibold">3 bundles</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Standard:</strong> 3-tab or architectural shingles
              </div>
            </div>
          </div>

          {/* Underlayment Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Underlayment</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">#15 felt:</span>
                <span className="font-semibold">400 sq ft/roll</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">#30 felt:</span>
                <span className="font-semibold">200 sq ft/roll</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Synthetic:</span>
                <span className="font-semibold">1,000 sq ft/roll</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Overlap:</strong> 2-4 inches (reduces effective coverage by 5-10%)
              </div>
            </div>
          </div>

          {/* Nails Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Roofing Nails</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard areas:</span>
                <span className="font-semibold">320 nails/square</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">High-wind (&gt;110 mph):</span>
                <span className="font-semibold">480 nails/square</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Size:</strong> 1¼" standard, 1½"-1¾" for thick shingles
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Factors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📈 Waste Factors by Roof Complexity</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600 w-16">5-10%</div>
                <div>
                  <div className="font-bold text-gray-900">Simple Gable</div>
                  <div className="text-sm text-gray-700">Up and over design, minimal cuts</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600 w-16">10%</div>
                <div>
                  <div className="font-bold text-gray-900">Standard Gable w/ Valleys</div>
                  <div className="text-sm text-gray-700">Most common, industry standard</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600 w-16">10-15%</div>
                <div>
                  <div className="font-bold text-gray-900">Hip Roofs</div>
                  <div className="text-sm text-gray-700">Four hips create additional cuts</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg">
                <div className="text-2xl font-bold text-red-600 w-16">15-20%</div>
                <div>
                  <div className="font-bold text-gray-900">Complex/Multi-Facet</div>
                  <div className="text-sm text-gray-700">Multiple valleys, dormers, turrets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Materials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔧 Additional Roofing Materials</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Ice & Water Shield */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ice & Water Shield</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">200-225 sq ft/roll</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Width:</span>
                <span className="font-semibold">36 inches</span>
              </div>
              <div className="bg-indigo-50 rounded-lg p-3 text-sm">
                <strong>Required:</strong> Eaves in cold climates (24" inside wall line), valleys, penetrations
              </div>
            </div>
          </div>

          {/* Starter Strips */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Starter Strips</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">100-123 linear ft/bundle</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Application:</span>
                <span className="font-semibold">Eaves + rakes</span>
              </div>
              <div className="bg-teal-50 rounded-lg p-3 text-sm">
                <strong>Typical:</strong> GAF Pro-Start (120 LF), Owens Corning (100 LF)
              </div>
            </div>
          </div>

          {/* Ridge Cap */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ridge Cap Shingles</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">25-33 linear ft/bundle</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Application:</span>
                <span className="font-semibold">Ridge + hip lines</span>
              </div>
              <div className="bg-pink-50 rounded-lg p-3 text-sm">
                <strong>Premium:</strong> Owens Corning ProEdge (33 LF), CertainTeed Shadow Ridge (30 LF)
              </div>
            </div>
          </div>

          {/* Drip Edge */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Drip Edge</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard length:</span>
                <span className="font-semibold">10 feet/piece</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Overlap:</span>
                <span className="font-semibold">2-3 inches minimum</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Installation:</strong> UNDER underlayment at eaves, OVER at rakes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Factor Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Roof Pitch Multiplier (NRCA Standards)</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="bg-gray-800 text-white px-6 py-4">
            <h3 className="text-lg font-bold">Pitch Factor Conversion Table</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Pitch</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Angle</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Multiplier</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Flat</td>
                  <td className="px-6 py-4 text-gray-700">0°</td>
                  <td className="px-6 py-4 text-gray-700">1.00</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Requires membrane</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">3/12</td>
                  <td className="px-6 py-4 text-gray-700">14.04°</td>
                  <td className="px-6 py-4 text-gray-700">1.031</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Low slope minimum</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">4/12</td>
                  <td className="px-6 py-4 text-gray-700">18.43°</td>
                  <td className="px-6 py-4 text-gray-700">1.054</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Standard minimum</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">5/12</td>
                  <td className="px-6 py-4 text-gray-700">22.62°</td>
                  <td className="px-6 py-4 text-gray-700">1.083</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Common pitch</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">6/12</td>
                  <td className="px-6 py-4 text-gray-700">26.57°</td>
                  <td className="px-6 py-4 text-gray-700">1.118</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Most common</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">7/12</td>
                  <td className="px-6 py-4 text-gray-700">30.26°</td>
                  <td className="px-6 py-4 text-gray-700">1.158</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Standard steep</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">8/12</td>
                  <td className="px-6 py-4 text-gray-700">33.69°</td>
                  <td className="px-6 py-4 text-gray-700">1.202</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Steep</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">9/12</td>
                  <td className="px-6 py-4 text-gray-700">36.87°</td>
                  <td className="px-6 py-4 text-gray-700">1.250</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Very steep</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">10/12</td>
                  <td className="px-6 py-4 text-gray-700">39.81°</td>
                  <td className="px-6 py-4 text-gray-700">1.302</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Very steep</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">12/12</td>
                  <td className="px-6 py-4 text-gray-700">45.00°</td>
                  <td className="px-6 py-4 text-gray-700">1.414</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">45-degree angle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
          <h4 className="font-bold text-gray-900 mb-2">Formula: Roof Area = Base Area × Pitch Multiplier × (1 + Waste Factor)</h4>
          <p className="text-sm text-gray-700">Example: 1,200 sq ft footprint at 6/12 pitch = 1,200 × 1.118 × 1.10 = 1,476 sq ft (14.76 squares)</p>
        </div>
      </section>

      {/* Example Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏠 Common Project Examples</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">1,000 Sq Ft Ranch (4/12 pitch)</h3>
                <div className="mt-2 text-sm text-gray-600">10 squares × 1.054 = 10.54 squares actual</div>
              </div>
              <div className="bg-blue-50 px-4 py-3 rounded-lg text-sm">
                <div className="font-bold text-gray-900">35 bundles • 11 squares underlayment • 3,500 nails</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">1,500 Sq Ft Two-Story (6/12 pitch)</h3>
                <div className="mt-2 text-sm text-gray-600">15 squares × 1.118 = 16.77 squares actual</div>
              </div>
              <div className="bg-green-50 px-4 py-3 rounded-lg text-sm">
                <div className="font-bold text-gray-900">56 bundles • 19 squares underlayment • 6,000 nails</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">2,000 Sq Ft Colonial (8/12 pitch)</h3>
                <div className="mt-2 text-sm text-gray-600">20 squares × 1.202 = 24.04 squares actual</div>
              </div>
              <div className="bg-purple-50 px-4 py-3 rounded-lg text-sm">
                <div className="font-bold text-gray-900">79 bundles • 26 squares underlayment • 8,500 nails</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">Detached Garage 24' × 24' (5/12 pitch)</h3>
                <div className="mt-2 text-sm text-gray-600">5.76 squares × 1.083 = 6.24 squares actual</div>
              </div>
              <div className="bg-orange-50 px-4 py-3 rounded-lg text-sm">
                <div className="font-bold text-gray-900">21 bundles • 7 squares underlayment • 2,200 nails</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">👷 NRCA Installation Standards</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🔨</span>
              <span>Nailing Requirements</span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">4</div>
                <span>Standard: 4 nails per shingle (320 per square)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">6</div>
                <span>High-wind ≥110 mph: 6 nails per shingle (480 per square)</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Placement: 1" from edges, above seal strip</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Penetration: Minimum ¾" into decking</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📏</span>
              <span>Code Requirements (IRC)</span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Minimum pitch: 2/12 for asphalt shingles</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Ice & water shield: Required where January avg ≤25°F</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Ventilation: 1 sq ft NFVA per 150 sq ft attic</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Drip edge: Required at eaves and rakes (IRC R905.2.8.5)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Code References */}
      <section className="mb-16">
        <div className="bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">📚 Industry Standards & References</h2>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>NRCA:</strong> Roofing Manual & Best Practices</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>ASTM D3462:</strong> Asphalt Shingle Standards</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>ASTM D1970:</strong> Ice & Water Shield Standards</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>IRC R905:</strong> Roof Covering Requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>IBC 1507:</strong> Roof Covering Standards</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>IRC R806:</strong> Ventilation Requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>GAF/Owens Corning/CertainTeed:</strong> Manufacturer Specifications</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>ASTM D8257:</strong> Synthetic Underlayment Standards (2020)</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-gray-300 text-sm">
            All calculations based on manufacturer specifications, NRCA standards, and IRC/IBC building codes. Complex roofs with dormers, valleys, or multiple pitches require additional materials and professional measurement.
          </div>
        </div>
      </section>

    </div>
  );
}