export default function MulchGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">One cubic yard of mulch covers <strong>324 square feet at 1 inch deep</strong>, 162 sq ft at 2", or 108 sq ft at 3". Standard depth: <strong>2-4 inches</strong> for beds, 2-4 inches around trees, 3-4 inches for pathways. Always keep mulch 3-6 inches away from plant stems and tree trunks.</p>
          </div>
        </div>
      </div>

      {/* Coverage by Depth */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Coverage Per Cubic Yard by Depth</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Depth</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage (sq ft)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Application</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">1 inch</td>
                  <td className="px-6 py-4 text-sm text-gray-700">324 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Topdressing, compost layer</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Refresh layer, annual maintenance</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">2 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">162 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Vegetable gardens, flower beds</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Minimum for weed suppression</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-green-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">3 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">108 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Shrub beds, tree rings</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Standard depth, optimal coverage</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">4 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">81 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Pathways, high-weed areas, slopes</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Maximum standard depth</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">5 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">65 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Heavy erosion control</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Specialized applications</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">6 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">54 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Playgrounds (upper end)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Safety surfacing, straw winter mulch</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Formula:</strong> Coverage (sq ft) = 324 ÷ Depth (inches). One cubic yard = 27 cubic feet = 324 sq ft at 1" deep.
          </div>
        </div>
      </section>

      {/* Depth Recommendations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🌳 Recommended Mulch Depth by Application</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Flower Beds Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Flower Beds & Perennials</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">2-3 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Fine-shredded hardwood</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Purpose:</strong> Moisture retention, weed suppression. Keep mulch away from plant stems to prevent rot.
              </div>
            </div>
          </div>

          {/* Trees & Shrubs Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trees & Shrubs</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">2-4 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Hardwood chips, pine bark</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Critical:</strong> Keep mulch 3-6" away from trunk (no "mulch volcanoes"). Extend to drip line (3-6 ft from trunk).
              </div>
            </div>
          </div>

          {/* Vegetable Gardens Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-teal-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vegetable Gardens</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">1-2 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Compost, straw, grass clippings</span>
              </div>
              <div className="bg-teal-50 rounded-lg p-3 text-sm">
                <strong>Why thinner:</strong> Allows airflow to tender roots. Straw: 4-6" for winter protection (after first freeze).
              </div>
            </div>
          </div>

          {/* Pathways Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pathways & Walking Areas</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">3-4 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Wood chips, pea gravel</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Best:</strong> Coarser material provides better stability. Can go deeper for high-traffic areas.
              </div>
            </div>
          </div>

          {/* Slopes & Erosion Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Slopes & Erosion Control</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">2-3 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Pine needles, wood chips</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Best materials:</strong> Interlocking types (pine straw) resist washing. Avoid chunks that roll.
              </div>
            </div>
          </div>

          {/* Playgrounds Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Playgrounds & Safety Surfaces</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">4-6 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Engineered wood fiber, rubber</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Safety:</strong> Must meet ASTM F1292 standards. Deeper for higher equipment. Maintain regularly.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mulch Types */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🪵 Common Mulch Types & Properties</h2>
        
        <div className="space-y-4">
          {/* Wood Chips */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🪓</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Wood Chips</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">Mixture of bark, leaves, and inner wood. Natural appearance, improves soil over time.</p>
                    <p><strong>Lifespan:</strong> 1-3 years</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>Depth:</strong> 2-4 inches</p>
                    <p><strong>Weight:</strong> 400-800 lbs/cu yd (moisture-dependent)</p>
                    <p><strong>Best for:</strong> Pathways, around trees/shrubs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shredded Bark */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌲</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Shredded Bark (Hardwood, Cedar, Pine)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">More uniform texture, stays in place better on slopes. Slower decomposition than chips.</p>
                    <p><strong>Lifespan:</strong> 2-3 years</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>Depth:</strong> 2-4 inches</p>
                    <p><strong>Weight:</strong> 500-600 lbs/cu yd (varies by type)</p>
                    <p><strong>Best for:</strong> Garden beds, slopes, ornamental areas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pine Needles */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-teal-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌿</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Pine Needles (Pine Straw)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">Lightweight, interlocking structure resists wind. Does NOT acidify soil (myth). Pleasant aroma.</p>
                    <p><strong>Lifespan:</strong> 2-4 years</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>Depth:</strong> 2-3 inches</p>
                    <p><strong>Weight:</strong> 1,350-1,400 lbs/cu yd</p>
                    <p><strong>Best for:</strong> Slopes, gardens, acid-loving plants</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Compost */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌱</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Compost</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">Rich in nutrients, improves soil immediately. Decomposes quickly, needs frequent replenishment.</p>
                    <p><strong>Lifespan:</strong> Decomposes rapidly</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>Depth:</strong> 1-2 inches</p>
                    <p><strong>Weight:</strong> 1,000-1,600 lbs/cu yd</p>
                    <p><strong>Best for:</strong> Vegetable gardens, often under other mulch</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Straw */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-amber-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌾</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Straw</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">Very lightweight, good insulation. Fewer weed seeds than hay. Decomposes quickly (annual replacement).</p>
                    <p><strong>Lifespan:</strong> 1 year</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>Depth:</strong> 4-6 inches (compacts significantly)</p>
                    <p><strong>Weight:</strong> 500-700 lbs/cu yd (dry)</p>
                    <p><strong>Best for:</strong> Vegetable gardens, winter mulch, new lawns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stone/Gravel */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-gray-300 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🪨</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Stone/Gravel (Pea, Crushed, River Rock)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">Very long-lasting, heat-absorbing, no nutrients. Fire-proof, wind-resistant. Heavy to install/remove.</p>
                    <p><strong>Lifespan:</strong> Indefinite</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>Depth:</strong> 2-4 inches</p>
                    <p><strong>Weight:</strong> 2,700-2,835 lbs/cu yd (pea gravel)</p>
                    <p><strong>Best for:</strong> Xeric gardens, walkways, around downspouts</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Rubber Mulch */}
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">♻️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-2">Rubber Mulch (Recycled Tires)</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <p className="mb-2">Very long-lasting, variety of colors. CAUTION: Highly flammable, may contain contaminants. Not for vegetable gardens.</p>
                    <p><strong>Lifespan:</strong> 10+ years</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>Depth:</strong> 1.5-3 inches</p>
                    <p><strong>Weight:</strong> 1,250+ lbs/cu yd</p>
                    <p><strong>Best for:</strong> Playgrounds, high-traffic areas (not edibles)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bag Conversions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📦 Bagged Mulch Conversions</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">13.5</div>
              <div className="text-sm text-gray-700">2 cu ft bags per cubic yard</div>
              <div className="text-xs text-gray-600 mt-2">Most common bag size</div>
            </div>

            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">9</div>
              <div className="text-sm text-gray-700">3 cu ft bags per cubic yard</div>
              <div className="text-xs text-gray-600 mt-2">Larger, more economical</div>
            </div>

            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">18</div>
              <div className="text-sm text-gray-700">1.5 cu ft bags per cubic yard</div>
              <div className="text-xs text-gray-600 mt-2">Smaller, easier to handle</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3">Bag Weight Reference</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>2 cu ft bag:</span>
                <span className="font-semibold">~20 lbs average</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-50 rounded">
                <span>3 cu ft bag:</span>
                <span className="font-semibold">~30 lbs average</span>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">Note: Weights vary significantly by material type and moisture content. Fresh/wet mulch weighs more.</p>
          </div>
        </div>
      </section>

      {/* Installation Best Practices */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🌱 Installation Best Practices</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🧹</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Bed Preparation</h3>
                <p className="text-gray-700 text-sm">Remove existing weeds and debris. Edge beds cleanly. Landscape fabric optional for organic mulch (allows water/air penetration but not necessary).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📏</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Proper Depth Application</h3>
                <p className="text-gray-700 text-sm">Spread evenly using rake to achieve consistent depth. Too deep (&gt;4" for most mulches) can suffocate plant roots, prevent water penetration, and encourage pests. Check depth annually and refresh.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌳</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Keep Away from Plant Stems (Critical!)</h3>
                <p className="text-gray-700 text-sm">Leave 2-3" gap around perennials, 3-6" around trees/shrubs. Create "donut" shape around trees, not "volcano." Mulch against stems causes rot, disease, pest attraction, and oxygen deprivation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Moisture Considerations</h3>
                <p className="text-gray-700 text-sm">Water plants before mulching. Mulch retains moisture - adjust watering schedule accordingly. Research shows 3-4" depth provides optimal moisture retention (reduces evaporation by up to 50%).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-teal-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Waste Factor & Overage</h3>
                <p className="text-gray-700 text-sm">Add 5-10% extra for waste and settling. Add 10-15% for gravel or compacted stone bases. Account for slight compaction after installation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔄</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Annual Maintenance Schedule</h3>
                <p className="text-gray-700 text-sm">Fluff/turn mulch in spring to prevent matting. Add 1-2" topdressing annually when depth drops below 2". Replace fine mulches (grass clippings, compost) annually. Replace coarse mulches (wood chips, bark) every 2-3 years as they decompose.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔢 Manual Mulch Calculation</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example: 500 sq ft Flower Bed (3" depth)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Determine area</p>
                  <p className="text-gray-700 font-mono">Total area = 500 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Choose desired depth</p>
                  <p className="text-gray-700 font-mono">Recommended depth = 3 inches (standard for beds)</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate cubic yards needed</p>
                  <p className="text-gray-700 font-mono">Formula: (Sq ft × Depth in inches) ÷ 324</p>
                  <p className="text-gray-700 font-mono">Cubic yards = (500 × 3) ÷ 324 = 4.63</p>
                  <p className="text-gray-700 font-mono">Add 5% overage: 4.63 × 1.05 = 4.86</p>
                  <p className="text-gray-700 font-mono"><strong>Buy: 5 cubic yards (rounded up)</strong></p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Alternative: Bagged mulch calculation</p>
                  <p className="text-gray-700 font-mono">At 3" depth, 1 cu yd covers 108 sq ft</p>
                  <p className="text-gray-700 font-mono">Need: 500 ÷ 108 = 4.63 cu yds</p>
                  <p className="text-gray-700 font-mono">2 cu ft bags: 4.63 × 13.5 = 62.5 → 63 bags</p>
                  <p className="text-gray-700 font-mono">3 cu ft bags: 4.63 × 9 = 41.7 → 42 bags</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Cubic yards = (Sq ft × Depth) ÷ 324</p>
                <p className="font-mono bg-white p-3 rounded">Coverage (sq ft) = Cubic yards × (324 ÷ Depth)</p>
                <p className="font-mono bg-white p-3 rounded">2 cu ft bags = Cubic yards × 13.5</p>
                <p className="font-mono bg-white p-3 rounded">3 cu ft bags = Cubic yards × 9</p>
                <p className="font-mono bg-white p-3 rounded">1.5 cu ft bags = Cubic yards × 18</p>
              </div>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
              <h3 className="font-bold text-gray-900 mb-2">Pickup Truck Capacity Note</h3>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong>Full-size pickup (6 ft bed):</strong> ~2 cubic yards safe</p>
                <p><strong>Full-size pickup (8 ft bed):</strong> 2-3 cubic yards safe</p>
                <p><strong>Weight limit:</strong> 1,000-1,500 lbs for safety</p>
                <p className="text-xs mt-2 text-gray-600">2-3 yards of mulch is safe for most trucks. Consider delivery for larger orders or heavy materials (stone, wet mulch).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards & Guidelines</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Mulch & Soil Council (MSC)</p>
              <p>Founded 1972. National trade association for horticultural mulch producers. Maintains Uniform Voluntary Product Guidelines (UVPG) including certification program with lab analysis, quality control, and 2025 Certified All-Natural Horticultural Mulches (CANM) standards.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM F1292 - Playground Safety Surfacing</p>
              <p>Standards for impact attenuation of playground mulch and safety surfaces. Specifies minimum depths (4-6" standard, deeper for taller equipment) based on fall height for child safety. Also covers ADA accessibility requirements.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">University Extension Service Recommendations</p>
              <p>Agricultural extension offices provide region-specific mulch depth recommendations (typically 2-4" for beds, 3-4" for trees), material selection guides for local climates, and application timing for optimal plant health.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">NALP - National Association of Landscape Professionals</p>
              <p>Trade association providing industry standards, workforce development, and best practices for professional landscape installation including mulch application specifications.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">Professional Landscape Standards</p>
              <p>Industry standard practice: 2-4" depth for ornamental beds, 2-4" for trees/shrubs (keeping 3-6" away from woody stems), 3-4" for pathways, 1-2" for fine-textured mulches (compost, grass clippings). Moisture retention research shows 3-4" optimal depth reduces evaporation by up to 50%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warning Box */}
      <section className="mb-16">
        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-6">
          <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            <span>Critical Mulching Mistakes to Avoid</span>
          </h3>
          <div className="space-y-2 text-sm text-red-800">
            <p><strong>❌ Mulch volcanoes:</strong> Never pile mulch against tree trunks - causes rot, pest problems, and can kill trees</p>
            <p><strong>❌ Too deep:</strong> More than 4" (except specialized applications) suffocates roots and prevents water penetration</p>
            <p><strong>❌ Too shallow:</strong> Less than 2" provides insufficient weed suppression and moisture retention</p>
            <p><strong>❌ Fresh wood chips on vegetables:</strong> Can temporarily tie up nitrogen - use aged chips or add nitrogen fertilizer</p>
            <p><strong>❌ Matting:</strong> Fine mulches (grass clippings) applied too thick form impermeable mats - apply in thin layers</p>
            <p><strong>❌ Cocoa shells near dogs:</strong> Toxic to dogs - use alternative mulches in dog-accessible areas</p>
          </div>
        </div>
      </section>

    </div>
  );
}