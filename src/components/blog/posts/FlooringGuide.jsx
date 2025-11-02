export default function FlooringGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">For 500 square feet of flooring, add <strong>5-7% waste</strong> for straight layouts (525-535 sq ft total), <strong>15%</strong> for diagonal patterns (575 sq ft), and <strong>15-20%</strong> for herringbone/complex patterns. Tile requires <strong>5-10% waste</strong> standard, increasing to <strong>10-15%</strong> for diagonal layouts.</p>
          </div>
        </div>
      </div>

      {/* Waste Factors by Material */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Waste Factors by Flooring Type</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hardwood Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Solid Hardwood</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight pattern:</span>
                <span className="font-semibold">5-7% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal pattern:</span>
                <span className="font-semibold">15% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Herringbone/chevron:</span>
                <span className="font-semibold">15-20% waste</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Wide plank (5"+) add 3%, character grades 10-15% for culling defects
              </div>
            </div>
          </div>

          {/* Engineered Wood Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Engineered Wood</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight pattern:</span>
                <span className="font-semibold">5-7% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal pattern:</span>
                <span className="font-semibold">15-20% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Builder grade:</span>
                <span className="font-semibold">10-15% waste</span>
              </div>
              <div className="bg-teal-50 rounded-lg p-3 text-sm">
                <strong>Benefit:</strong> 3× more stable than solid hardwood
              </div>
            </div>
          </div>

          {/* Tile Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ceramic/Porcelain Tile</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight grid:</span>
                <span className="font-semibold">5-10% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal layout:</span>
                <span className="font-semibold">10-15% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Herringbone:</span>
                <span className="font-semibold">15% waste</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Large format (24"+):</strong> 20-25% waste due to size
              </div>
            </div>
          </div>

          {/* Natural Stone Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Natural Stone Tile</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight grid:</span>
                <span className="font-semibold">10% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal layout:</span>
                <span className="font-semibold">15% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Complex patterns:</span>
                <span className="font-semibold">15-20% waste</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Higher waste:</strong> Due to natural defects and breakage
              </div>
            </div>
          </div>

          {/* Laminate Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Laminate Flooring</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight pattern:</span>
                <span className="font-semibold">5-7% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal pattern:</span>
                <span className="font-semibold">15% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">DIY installation:</span>
                <span className="font-semibold">10-15% waste</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Why:</strong> Click-lock planks minimize waste. Add 5% for DIY
              </div>
            </div>
          </div>

          {/* Vinyl Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinyl Plank (LVP/LVT)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight pattern:</span>
                <span className="font-semibold">5-7% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal pattern:</span>
                <span className="font-semibold">10-15% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Herringbone:</span>
                <span className="font-semibold">12-15% waste</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Lowest waste:</strong> Most forgiving material, easy cutting
              </div>
            </div>
          </div>

          {/* Carpet Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-pink-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Carpet (Broadloom)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Simple room:</span>
                <span className="font-semibold">10% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Complex layout:</span>
                <span className="font-semibold">15-20% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Pattern matching:</span>
                <span className="font-semibold">20% waste</span>
              </div>
              <div className="bg-pink-50 rounded-lg p-3 text-sm">
                <strong>Roll width:</strong> 12' standard (15' for large rooms)
              </div>
            </div>
          </div>

          {/* Placeholder for visual balance */}
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-6 border-t-4 border-gray-300">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Tip</h3>
            <div className="space-y-3 text-gray-700 text-sm">
              <p className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span><strong>Under 1,000 sq ft:</strong> Use 10% waste minimum</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span><strong>Over 1,000 sq ft:</strong> Use 7% waste standard</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span><strong>Irregular rooms:</strong> Add 5-10% extra</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span><strong>Future repairs:</strong> Order 5-10% extra and store</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Per Box/Carton */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📦 Standard Packaging Coverage</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Typical Dimensions</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage per Box</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Solid Hardwood</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2.25"-5" wide × 3/4" thick</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-25 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">40-50 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Engineered Wood</td>
                  <td className="px-6 py-4 text-sm text-gray-700">5"-9" wide × 3/8"-9/16" thick</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-30 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">35-45 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Laminate (8mm)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">5"-7" wide × 48" long</td>
                  <td className="px-6 py-4 text-sm text-gray-700">18-22 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">26-27 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Laminate (12mm)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Premium thickness</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-25 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">36-38 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Vinyl Plank (LVP)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6"-9" wide × 48"-72" long</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-30 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">28-35 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Ceramic Tile (12×12)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1 sq ft per tile</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-15 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">45-55 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Porcelain Tile (12×24)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2 sq ft per tile</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-17.6 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">48-58 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Porcelain Tile (24×24)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">4 sq ft per tile</td>
                  <td className="px-6 py-4 text-sm text-gray-700">16-20 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">50-65 lbs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Note:</strong> Coverage varies by manufacturer. Always verify product specifications before ordering. Round up to full boxes.
          </div>
        </div>
      </section>

      {/* Underlayment Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🛡️ Underlayment & Padding Coverage</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Foam Underlayment</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard foam (2-3mm):</span>
                <span className="font-semibold">100-200 sq ft/roll</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Premium felt:</span>
                <span className="font-semibold">100-200 sq ft/roll</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>For:</strong> Laminate and engineered wood floating installations
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Carpet Padding</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard roll (6' × 45'):</span>
                <span className="font-semibold">270 sq ft (30 sq yd)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Thickness:</span>
                <span className="font-semibold">3/8"-7/16" typical</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Density:</strong> 8 lbs/cu ft minimum for warranty compliance
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vapor Barrier</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">6-mil polyethylene:</span>
                <span className="font-semibold">200-400 sq ft/roll</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Over concrete:</span>
                <span className="font-semibold">Mandatory for all floors</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Overlap:</strong> 6" seams, tape all edges
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cement Backer Board</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">3' × 5' sheet:</span>
                <span className="font-semibold">15 sq ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">4' × 8' sheet:</span>
                <span className="font-semibold">32 sq ft</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>For:</strong> Tile over wood subfloors, standard 1/2" thickness
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tile Materials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔨 Tile Installation Materials</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Thin-Set Mortar Coverage</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>12"-16" tile (1/4" × 3/8" trowel):</span>
                  <span className="font-semibold">60-80 sq ft/bag</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>16"-24" tile (1/2" × 1/2" trowel):</span>
                  <span className="font-semibold">40-50 sq ft/bag</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>24"+ tile (3/4" × 9/16" trowel):</span>
                  <span className="font-semibold">40-50 sq ft/bag</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>Mosaics (3/16" V-notch):</span>
                  <span className="font-semibold">90-100 sq ft/bag</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-gray-900 mb-3">Grout Coverage (25 lb bag)</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>12×12 tile (3/16" joint):</span>
                  <span className="font-semibold">115-125 sq ft</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>12×24 tile (3/16" joint):</span>
                  <span className="font-semibold">130-140 sq ft</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>24×24 tile (3/16" joint):</span>
                  <span className="font-semibold">190-200 sq ft</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span>3×6 subway (1/8" joint):</span>
                  <span className="font-semibold">105-115 sq ft</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Grout Joint Standards (TCNA)</h3>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-700">
              <div className="p-3 bg-blue-50 rounded-lg">
                <div className="font-semibold text-gray-900">Rectified Tile</div>
                <div>1/16"-3/16" joints typical</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg">
                <div className="font-semibold text-gray-900">Non-Rectified</div>
                <div>1/8"-1/4" joints standard</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <div className="font-semibold text-gray-900">Natural Stone</div>
                <div>1/4"-3/8" for variations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Strips & Trim */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🚪 Transition Strips & Molding</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🚪</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">T-Molding (Same Height Floors)</h3>
                <p className="text-gray-700 text-sm mb-2">Connects two floors of equal height with T-shaped profile. Used in doorways between same-height materials.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded">Length: 78"-94"</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">1 piece per doorway</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📐</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Reducer Strip (Height Transition)</h3>
                <p className="text-gray-700 text-sm mb-2">Sloped transition between floors of different heights. Accommodates 1/4"-3/4" height differences.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded">Length: 78"-94"</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">2" transition width</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🏠</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Threshold/End Cap</h3>
                <p className="text-gray-700 text-sm mb-2">Finishes flooring edge at exterior doors, sliding doors, or drop-offs. Covers expansion gap.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded">Length: 78"-94"</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Low-profile design</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📏</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Quarter Round/Shoe Molding</h3>
                <p className="text-gray-700 text-sm mb-2">Covers expansion gaps at walls. Must attach to baseboard, not floor, for floating installations.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded">Wood: 8' lengths</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Vinyl: 94" lengths</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">Size: 3/4" × 3/4"</span>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔲</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Stair Nosing</h3>
                <p className="text-gray-700 text-sm mb-2">Protects and finishes stair edges. Matches flooring material. Required for safe installations.</p>
                <div className="flex gap-4 text-sm">
                  <span className="bg-gray-100 px-3 py-1 rounded">Width: 42"-48"</span>
                  <span className="bg-gray-100 px-3 py-1 rounded">1 piece per step</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expansion Gap Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">↔️ Expansion Gap Requirements</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 bg-blue-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Hardwood (Solid)</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Standard gap:</span>
                  <span className="font-semibold">3/4"</span>
                </div>
                <div className="flex justify-between">
                  <span>Wide plank (5"+):</span>
                  <span className="font-semibold">3/4"-1"</span>
                </div>
                <div className="flex justify-between">
                  <span>Rooms &gt;20' wide:</span>
                  <span className="font-semibold">Larger gaps needed</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Engineered Wood</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Standard gap:</span>
                  <span className="font-semibold">3/8"-5/8"</span>
                </div>
                <div className="flex justify-between">
                  <span>Floating floor:</span>
                  <span className="font-semibold">3/8"-1/2"</span>
                </div>
                <div className="flex justify-between">
                  <span>Glue-down:</span>
                  <span className="font-semibold">1/4"-3/8"</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-purple-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Laminate</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Standard gap:</span>
                  <span className="font-semibold">1/4"-3/8"</span>
                </div>
                <div className="flex justify-between">
                  <span>Rooms &gt;30':</span>
                  <span className="font-semibold">3/8"-1/2"</span>
                </div>
                <div className="flex justify-between">
                  <span>All perimeters:</span>
                  <span className="font-semibold">Required</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-orange-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Vinyl Plank (LVP)</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Standard gap:</span>
                  <span className="font-semibold">1/4"</span>
                </div>
                <div className="flex justify-between">
                  <span>Rooms 50-85':</span>
                  <span className="font-semibold">1/2"</span>
                </div>
                <div className="flex justify-between">
                  <span>Glue-down:</span>
                  <span className="font-semibold">1/4"-3/8"</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-amber-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Tile</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Perimeter gap:</span>
                  <span className="font-semibold">1/8"-1/4"</span>
                </div>
                <div className="flex justify-between">
                  <span>Large areas:</span>
                  <span className="font-semibold">Every 20-25'</span>
                </div>
                <div className="flex justify-between">
                  <span>Structural joints:</span>
                  <span className="font-semibold">Match building</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-pink-50 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-3">Carpet</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>Perimeter gap:</span>
                  <span className="font-semibold">3/8"</span>
                </div>
                <div className="flex justify-between">
                  <span>Tack strip:</span>
                  <span className="font-semibold">3/8" from wall</span>
                </div>
                <div className="flex justify-between">
                  <span>Padding trim:</span>
                  <span className="font-semibold">Flush to strip</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4 text-sm text-gray-700">
            <strong>Critical:</strong> Expansion gaps allow natural expansion/contraction with humidity and temperature. Never nail through floating floors or attach molding to the floor itself. Cover gaps with quarter-round or shoe molding attached to walls only.
          </div>
        </div>
      </section>

      {/* Manual Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔢 Manual Calculation Example</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example: 500 sq ft Room (Laminate, Straight Pattern)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate base square footage</p>
                  <p className="text-gray-700 font-mono">Room area = 500 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Add waste factor</p>
                  <p className="text-gray-700 font-mono">Waste = 500 × 0.07 (7%) = 35 sq ft</p>
                  <p className="text-gray-700 font-mono">Total needed = 500 + 35 = 535 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate boxes needed</p>
                  <p className="text-gray-700 font-mono">Coverage per box = 20 sq ft</p>
                  <p className="text-gray-700 font-mono">Boxes = 535 ÷ 20 = 26.75 → 27 boxes</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate additional materials</p>
                  <p className="text-gray-700 font-mono">Underlayment: 500 sq ft ÷ 100 sq ft/roll = 5 rolls</p>
                  <p className="text-gray-700 font-mono">Vapor barrier (over concrete): 500 ÷ 200 = 3 rolls</p>
                  <p className="text-gray-700 font-mono">Perimeter: 90 linear feet</p>
                  <p className="text-gray-700 font-mono">Quarter round (8' pieces): 90 ÷ 8 = 11.25 → 12 pieces</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Total sq ft = Room sq ft × (1 + waste factor)</p>
                <p className="font-mono bg-white p-3 rounded">Boxes = Total sq ft ÷ Coverage per box (round up)</p>
                <p className="font-mono bg-white p-3 rounded">Underlayment rolls = Room sq ft ÷ Roll coverage</p>
                <p className="font-mono bg-white p-3 rounded">Trim pieces = Perimeter ft ÷ Piece length (round up)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards & Installation Specs</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">NWFA - National Wood Flooring Association</p>
              <p>Installation guidelines for solid and engineered hardwood. Specifies acclimation periods (6-9% moisture content), expansion gaps (3/4" minimum), and fastener spacing standards.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">TCNA - Tile Council of North America</p>
              <p>Comprehensive tile installation standards including substrate preparation, thin-set trowel sizes, grout joint widths (1/16"-3/8"), and ANSI A108 compliance requirements.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">NTCA - National Tile Contractors Association</p>
              <p>Reference Manual for ceramic tile installation. Specifies deflection standards (L/360), mortar coverage (80% dry areas, 95% wet areas), and large format tile requirements.</p>
            </div>

            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">CRI - Carpet & Rug Institute</p>
              <p>CRI 105 installation standards for carpet including seam placement, padding density (8 lbs/cu ft minimum), thickness (7/16" maximum), and power stretching requirements.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">NALFA - North American Laminate Flooring Association</p>
              <p>Technical standards for laminate installation including expansion gaps (1/4" minimum), underlayment requirements, moisture barriers, and floating floor specifications.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">ANSI Standards</p>
              <p>A108.02 (substrate flatness: 1/4" in 10' for standard tile, 1/8" in 10' for large format), A118.16 (self-leveling underlayment), A136.1 (dimensional tolerances for tile).</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}