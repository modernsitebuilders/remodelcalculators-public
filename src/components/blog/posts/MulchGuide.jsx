export default function MulchGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">One cubic yard of mulch covers <strong>324 square feet at 1 inch deep</strong>, 162 sq ft at 2", or 108 sq ft at 3". Standard depth: <strong>2-4 inches</strong> for beds, 3-4 inches around trees, 2-3 inches for pathways.</p>
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
                  <td className="px-6 py-4 text-sm text-gray-700">Topdressing existing mulch</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Refresh layer, annual maintenance</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">2 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">162 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Flower beds, pathways</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Minimum for weed suppression</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">3 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">108 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Shrub beds, tree rings</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Standard depth, optimal coverage</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">4 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">81 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">High-weed areas, slopes</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Maximum depth, heavy suppression</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">6 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">54 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Playgrounds, pathways</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Safety surfacing only</td>
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
                <strong>Purpose:</strong> Moisture retention, weed suppression, aesthetic appearance. Avoid piling against plant stems.
              </div>
            </div>
          </div>

          {/* Trees & Shrubs Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Trees & Shrubs</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">3-4 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Hardwood, pine bark</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Critical:</strong> Keep mulch 3-6" away from trunk (no "mulch volcanoes"). Prevents rot and pest issues.
              </div>
            </div>
          </div>

          {/* Pathways Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Pathways & Walking Areas</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">2-3 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Wood chips, pea gravel</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Best:</strong> Coarser material provides better stability. Landscape fabric underneath recommended.
              </div>
            </div>
          </div>

          {/* Playgrounds Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Playgrounds & Safety Surfaces</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended depth:</span>
                <span className="font-semibold">6-12 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Material type:</span>
                <span className="font-semibold">Engineered wood fiber</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>ASTM F1292:</strong> Depth requirements based on equipment height. Compresses over time - maintain depth.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mulch Types & Weights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">⚖️ Mulch Types & Weight Per Cubic Yard</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Material Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Weight (lbs/cu yd)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Longevity</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Characteristics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Shredded Hardwood</td>
                  <td className="px-6 py-4 text-sm text-gray-700">400-800</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1-2 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Most common, decomposes slowly</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Pine Bark Nuggets</td>
                  <td className="px-6 py-4 text-sm text-gray-700">400-600</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2-3 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Floats in heavy rain, decorative</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Cypress Mulch</td>
                  <td className="px-6 py-4 text-sm text-gray-700">400-500</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3-5 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Insect-resistant, slow decay</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Cedar Mulch</td>
                  <td className="px-6 py-4 text-sm text-gray-700">300-500</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3-4 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Natural oils repel insects</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Straw/Hay</td>
                  <td className="px-6 py-4 text-sm text-gray-700">200-400</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1 season</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Vegetable gardens, temporary</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Rubber Mulch</td>
                  <td className="px-6 py-4 text-sm text-gray-700">600-800</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10+ years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Playgrounds, no decomposition</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Stone/Rock Mulch</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2,400-2,700</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Permanent</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Decorative, high heat retention</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Note:</strong> Weight varies based on moisture content. Wet mulch weighs significantly more than dry.
          </div>
        </div>
      </section>

      {/* Bagged Mulch Calculations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📦 Bagged Mulch vs. Bulk Comparison</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Bag Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cubic Feet</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage (3" deep)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Bags per Cubic Yard</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">2 cu ft bag</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2.0 cubic feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">13.5 bags</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">3 cu ft bag</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3.0 cubic feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">9 bags</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Economy:</strong> Bagged mulch costs 3-5× more per cubic yard than bulk delivery. Buy bulk for areas over 100 sq ft.
          </div>
        </div>

        <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Cost Comparison Example</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="bg-white rounded-lg p-4">
              <p className="font-semibold mb-2">For 300 sq ft at 3" depth (2.8 cubic yards):</p>
              <p className="font-mono">Bulk delivery: ~$150-200 (delivered)</p>
              <p className="font-mono">Bagged (2 cu ft): 38 bags × $4 = $152 (plus hauling)</p>
              <p className="font-mono">Bagged (3 cu ft): 25 bags × $5.50 = $138 (plus hauling)</p>
            </div>
            <p className="text-xs text-gray-600">Bulk becomes cost-effective for projects requiring 1+ cubic yards, including delivery fees.</p>
          </div>
        </div>
      </section>

      {/* Installation Tips */}
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
                <p className="text-gray-700 text-sm">Remove existing weeds and debris. Edge beds cleanly. Install landscape fabric for added weed control (optional, not required for organic mulch).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📏</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Proper Depth Application</h3>
                <p className="text-gray-700 text-sm">Spread evenly. Use rake to achieve consistent depth. Too deep (6"+) can suffocate plant roots and encourage pests. Check depth annually and refresh.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌳</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Keep Away from Plant Stems</h3>
                <p className="text-gray-700 text-sm">Leave 2-3" gap around perennials, 3-6" around trees/shrubs. Mulch against stems causes rot, disease, and provides rodent shelter.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Moisture Considerations</h3>
                <p className="text-gray-700 text-sm">Water plants before mulching. Mulch retains moisture - adjust watering schedule. Dyed mulch may temporarily stain during heavy rain.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔄</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Annual Maintenance</h3>
                <p className="text-gray-700 text-sm">Fluff/turn mulch in spring. Add 1" topdressing annually. Replace entirely every 2-3 years as it decomposes into soil.</p>
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
                  <p className="text-gray-700 font-mono">Recommended depth = 3 inches</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate cubic yards needed</p>
                  <p className="text-gray-700 font-mono">Formula: (Sq ft × Depth in inches) ÷ 324</p>
                  <p className="text-gray-700 font-mono">Cubic yards = (500 × 3) ÷ 324 = 4.63</p>
                  <p className="text-gray-700 font-mono"><strong>Buy: 5 cubic yards (includes overage)</strong></p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Alternative: Bagged mulch calculation</p>
                  <p className="text-gray-700 font-mono">At 3" depth, 1 cu yd covers 108 sq ft</p>
                  <p className="text-gray-700 font-mono">Need: 500 ÷ 108 = 4.63 cu yds</p>
                  <p className="text-gray-700 font-mono">2 cu ft bags: 4.63 × 13.5 = 63 bags</p>
                  <p className="text-gray-700 font-mono">3 cu ft bags: 4.63 × 9 = 42 bags</p>
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
              <p className="font-semibold text-gray-900 mb-1">Mulch & Soil Council Certification</p>
              <p>Voluntary standards for premium mulch products. Certifies composition, organic matter content, and contaminant limits.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM F1292 - Playground Safety Surfacing</p>
              <p>Standards for impact attenuation of playground mulch. Specifies minimum depths based on equipment fall height for child safety.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Extension Service Recommendations</p>
              <p>University agricultural extensions provide region-specific mulch depth recommendations, material selection guides, and application best practices.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">Landscape Industry Standards</p>
              <p>Professional landscapers typically apply 2-4" depth for ornamental beds, 3-4" for trees/shrubs, maintaining 3-6" clearance from woody stems.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}