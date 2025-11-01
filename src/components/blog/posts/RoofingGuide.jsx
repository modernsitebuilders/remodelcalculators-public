export default function RoofingGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">One roofing square equals <strong>100 square feet</strong>. A standard shingle bundle covers <strong>33.33 square feet</strong>, requiring <strong>3 bundles per square</strong>. Always add 10-15% waste factor for cuts and starter strips.</p>
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
                <span className="font-medium">Roll coverage:</span>
                <span className="font-semibold">200-400 sq ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Overlap:</span>
                <span className="font-semibold">2-4 inches</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Types:</strong> #15 felt (26 lb) or #30 felt (43 lb)
              </div>
            </div>
          </div>

          {/* Nails Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Roofing Nails</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Per square:</span>
                <span className="font-semibold">320 nails</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Size:</span>
                <span className="font-semibold">1¼" - 1¾"</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Standard:</strong> 4 nails per shingle (high-wind: 6)
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
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Slope</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Multiplier</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Flat</td>
                  <td className="px-6 py-4 text-gray-700">0/12</td>
                  <td className="px-6 py-4 text-gray-700">1.00</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Requires membrane</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">3/12</td>
                  <td className="px-6 py-4 text-gray-700">14°</td>
                  <td className="px-6 py-4 text-gray-700">1.03</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Low slope minimum</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">4/12</td>
                  <td className="px-6 py-4 text-gray-700">18°</td>
                  <td className="px-6 py-4 text-gray-700">1.05</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Standard minimum</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">5/12</td>
                  <td className="px-6 py-4 text-gray-700">23°</td>
                  <td className="px-6 py-4 text-gray-700">1.08</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Common pitch</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">6/12</td>
                  <td className="px-6 py-4 text-gray-700">27°</td>
                  <td className="px-6 py-4 text-gray-700">1.12</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Most common</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">8/12</td>
                  <td className="px-6 py-4 text-gray-700">34°</td>
                  <td className="px-6 py-4 text-gray-700">1.20</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Steep pitch</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">10/12</td>
                  <td className="px-6 py-4 text-gray-700">40°</td>
                  <td className="px-6 py-4 text-gray-700">1.30</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">Very steep</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">12/12</td>
                  <td className="px-6 py-4 text-gray-700">45°</td>
                  <td className="px-6 py-4 text-gray-700">1.41</td>
                  <td className="px-6 py-4 text-gray-700 text-sm">45-degree angle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-xl text-sm text-gray-700">
          <strong>How to use:</strong> Multiply your roof's footprint square footage by the pitch multiplier. Example: 1,500 sq ft footprint × 1.12 (6/12 pitch) = 1,680 sq ft actual roof area.
        </div>
      </section>

      {/* Step-by-Step Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🧮 Step-by-Step Calculation</h2>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
          <div className="text-center mb-6">
            <div className="inline-block bg-white rounded-lg px-6 py-3 shadow-md">
              <h3 className="text-xl font-bold text-gray-900">Example: 30' × 50' House (6/12 pitch)</h3>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                <div className="font-bold text-gray-900">Calculate roof footprint</div>
              </div>
              <div className="ml-11 text-gray-700">30 × 50 = <strong className="text-blue-600">1,500 sq ft</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                <div className="font-bold text-gray-900">Apply pitch multiplier (6/12 = 1.12)</div>
              </div>
              <div className="ml-11 text-gray-700">1,500 × 1.12 = <strong className="text-blue-600">1,680 sq ft</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                <div className="font-bold text-gray-900">Convert to roofing squares</div>
              </div>
              <div className="ml-11 text-gray-700">1,680 ÷ 100 = <strong className="text-blue-600">16.8 squares</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">4</div>
                <div className="font-bold text-gray-900">Add 10% waste factor</div>
              </div>
              <div className="ml-11 text-gray-700">16.8 × 1.10 = <strong className="text-blue-600">18.5 squares</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">5</div>
                <div className="font-bold text-gray-900">Calculate shingle bundles</div>
              </div>
              <div className="ml-11 text-gray-700">18.5 × 3 = <strong className="text-blue-600">55.5 → 56 bundles</strong></div>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-green-500">
              <div className="flex items-center gap-3 mb-2">
                <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">✓</div>
                <div className="font-bold text-gray-900">Complete material list</div>
              </div>
              <div className="ml-11 space-y-1 text-gray-700">
                <div><strong className="text-green-600">56 bundles</strong> architectural shingles</div>
                <div><strong className="text-green-600">19 squares</strong> underlayment (5 rolls)</div>
                <div><strong className="text-green-600">100 feet</strong> ridge cap (3 bundles)</div>
                <div><strong className="text-green-600">6,000</strong> roofing nails (1¼")</div>
                <div><strong className="text-green-600">200 feet</strong> drip edge</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shingle Types */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏠 Shingle Types & Bundles per Square</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">3-Tab Shingles</h3>
            <div className="space-y-2 text-gray-700 text-sm mb-4">
              <div className="flex justify-between">
                <span>Bundles per square:</span>
                <strong>3</strong>
              </div>
              <div className="flex justify-between">
                <span>Weight:</span>
                <strong>50-65 lbs</strong>
              </div>
              <div className="flex justify-between">
                <span>Lifespan:</span>
                <strong>20-25 years</strong>
              </div>
            </div>
            <div className="bg-gray-50 rounded p-3 text-xs text-gray-700">
              <strong>Best for:</strong> Budget projects, sheds, garages
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-500">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Architectural</h3>
            <div className="space-y-2 text-gray-700 text-sm mb-4">
              <div className="flex justify-between">
                <span>Bundles per square:</span>
                <strong>3</strong>
              </div>
              <div className="flex justify-between">
                <span>Weight:</span>
                <strong>65-85 lbs</strong>
              </div>
              <div className="flex justify-between">
                <span>Lifespan:</span>
                <strong>30-50 years</strong>
              </div>
            </div>
            <div className="bg-green-50 rounded p-3 text-xs text-gray-700">
              <strong>Most popular:</strong> Better appearance, longer warranty
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Premium/Designer</h3>
            <div className="space-y-2 text-gray-700 text-sm mb-4">
              <div className="flex justify-between">
                <span>Bundles per square:</span>
                <strong>4-5</strong>
              </div>
              <div className="flex justify-between">
                <span>Weight:</span>
                <strong>85-140 lbs</strong>
              </div>
              <div className="flex justify-between">
                <span>Lifespan:</span>
                <strong>40-50+ years</strong>
              </div>
            </div>
            <div className="bg-purple-50 rounded p-3 text-xs text-gray-700">
              <strong>Best for:</strong> High-end homes, maximum durability
            </div>
          </div>
        </div>
      </section>

      {/* Common Roof Sizes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Common Roof Material Lists</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900">1,000 Sq Ft Ranch (4/12 pitch)</h3>
                <div className="mt-2 text-sm text-gray-600">10 squares × 1.05 = 10.5 squares actual</div>
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
                <div className="mt-2 text-sm text-gray-600">15 squares × 1.12 = 16.8 squares actual</div>
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
                <div className="mt-2 text-sm text-gray-600">20 squares × 1.20 = 24 squares actual</div>
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
                <div className="mt-2 text-sm text-gray-600">5.76 squares × 1.08 = 6.2 squares actual</div>
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
                <span>Standard: 4 nails per shingle</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">6</div>
                <span>High-wind areas: 6 nails per shingle</span>
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
              <span>Code Requirements</span>
            </h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Minimum pitch: 2/12 for asphalt shingles</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Ice & water shield: Required in cold climates</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Ventilation: 1 sq ft per 150 sq ft attic</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-green-100 text-green-700 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 font-bold text-sm">✓</div>
                <span>Drip edge: Required at eaves and rakes</span>
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
              <span><strong>IRC R905:</strong> Roof Covering Requirements</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>IBC 1507:</strong> Roof Covering Standards</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>CertainTeed:</strong> Manufacturer Installation Guidelines</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-blue-400 font-bold">•</span>
              <span><strong>GAF/Owens Corning:</strong> Product Specifications</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-gray-300 text-sm">
            All calculations based on manufacturer specifications and NRCA standards. Complex roofs with dormers, valleys, or multiple pitches require additional materials and professional measurement.
          </div>
        </div>
      </section>

    </div>
  );
}