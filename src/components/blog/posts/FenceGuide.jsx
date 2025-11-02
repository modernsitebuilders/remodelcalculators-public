export default function FenceGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Post spacing depends on fence type: wood privacy fences use <strong>8 feet maximum</strong>, chain link spans <strong>10 feet</strong>, and horizontal slat fences require <strong>4-6 feet</strong>. Posts must be buried <strong>1/3 of total post length</strong> with 24" minimum depth, or 6" below frost line, whichever is deeper.</p>
          </div>
        </div>
      </div>

      {/* Post Spacing by Fence Type */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📏 Post Spacing Standards by Fence Type</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Wood Privacy Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wood Privacy Fence</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard spacing:</span>
                <span className="font-semibold">8 feet on center</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Post size:</span>
                <span className="font-semibold">4×4 (up to 6' tall) or 6×6 (6.5-8' tall)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Actual dimensions:</span>
                <span className="font-semibold">3.5" × 3.5" or 5.5" × 5.5"</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> High-wind areas reduce spacing to 6 feet or less for increased stability.
              </div>
            </div>
          </div>

          {/* Chain Link Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Chain Link Fence</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard spacing:</span>
                <span className="font-semibold">10 feet on center</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Line posts:</span>
                <span className="font-semibold">2" OD (1.875" actual)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Terminal posts:</span>
                <span className="font-semibold">2.5" OD</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Specification:</strong> Residential uses 11-gauge wire (0.120") with 2-inch diamond mesh, 16-gauge posts.
              </div>
            </div>
          </div>

          {/* Vinyl Fence Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinyl/PVC Fence</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Panel width:</span>
                <span className="font-semibold">6-8 feet between posts</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Post spacing:</span>
                <span className="font-semibold">72-97 inches on center</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Post size:</span>
                <span className="font-semibold">5×5 posts (5-6' heights)</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Critical:</strong> Must include 1/2" expansion gaps. Vinyl expands 1/4" per 18 feet with temperature.
              </div>
            </div>
          </div>

          {/* Horizontal Slat Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Horizontal Slat Fence</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard spacing:</span>
                <span className="font-semibold">4-6 feet on center</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Post size:</span>
                <span className="font-semibold">4×4 wood minimum</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Why closer spacing:</strong> Horizontal boards require tighter post spacing than vertical styles to prevent sagging.
              </div>
            </div>
          </div>

          {/* Split Rail Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Split Rail Fence</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard spacing:</span>
                <span className="font-semibold">8-10 feet on center</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Post diameter:</span>
                <span className="font-semibold">6-8 inches</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Rail length:</span>
                <span className="font-semibold">10-11 feet</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Heights:</strong> 2-rail = 36", 3-rail = 48", 4-rail = 54-60" tall.
              </div>
            </div>
          </div>

          {/* Ornamental Metal Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-slate-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ornamental Aluminum/Iron</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard spacing:</span>
                <span className="font-semibold">6-8 feet on center</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Picket spacing:</span>
                <span className="font-semibold">3.875" air gap standard</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Aluminum pickets:</span>
                <span className="font-semibold">5/8" square, 0.050" wall</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-3 text-sm">
                <strong>Industrial:</strong> Posts space 96 inches on center with 6-foot panels.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Depth Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">⚓ Post Depth & Concrete Requirements</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fence Height</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Total Post Length</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Burial Depth</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Hole Diameter (4×4)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Concrete</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">4 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1.4 cu ft</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">6 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1.4 cu ft</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">6 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">9 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1.75 cu ft</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">6 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">9 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">36 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2.1 cu ft</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">8 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">48 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2.8 cu ft</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>1/3 Rule:</strong> Bury one-third of total post length underground. A 6-foot fence needs 8-foot posts with 2 feet buried. Formula: Hole Diameter = 3 × Post Width.
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Post Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Size Required</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Depth</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Hole Diameter</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Line posts</td>
                  <td className="px-6 py-4 text-sm text-gray-700">4×4 (up to 6') or 6×6 (6.5-8')</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24-48 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12" (4×4) or 18" (6×6)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Corner posts</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6×6 (upgrade regardless of fence)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">+6 inches beyond line posts</td>
                  <td className="px-6 py-4 text-sm text-gray-700">18 inches</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">3-4 foot gates</td>
                  <td className="px-6 py-4 text-sm text-gray-700">4×4 acceptable, 4×6 recommended</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30-36 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-15 inches</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">5-6 foot gates</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6×6 required</td>
                  <td className="px-6 py-4 text-sm text-gray-700">36-42 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">18 inches</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">10-12 foot double gates</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6×6 minimum or 8×8 heavy</td>
                  <td className="px-6 py-4 text-sm text-gray-700">42-48 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">18-24 inches</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Concrete Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏗️ Concrete & Gravel Specifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Concrete Bag Yield</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">40 lb bag:</span>
                <span className="font-semibold text-gray-900">0.30 cu ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">50 lb bag:</span>
                <span className="font-semibold text-gray-900">0.375 cu ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">60 lb bag:</span>
                <span className="font-semibold text-gray-900">0.45 cu ft</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700">80 lb bag (most common):</span>
                <span className="font-semibold text-gray-900">0.60 cu ft</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Typical Bag Requirements</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">4×4 line post (30" deep):</span>
                <span className="font-semibold text-gray-900">2-3 bags (80 lb)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">4×4 corner/gate (36"):</span>
                <span className="font-semibold text-gray-900">3-4 bags (80 lb)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700">6×6 corner/gate (36-48"):</span>
                <span className="font-semibold text-gray-900">5-8 bags (80 lb)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gravel Base Requirements</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Standard:</strong> Install 6 inches of compacted 3/4-inch crushed stone or 21AA packing gravel at bottom of each hole before setting posts.</p>
            <p><strong>Benefits:</strong> Provides drainage, reduces frost heaving, prevents wood rot, extends post life by 30-50%.</p>
            <p><strong>Calculation:</strong> Subtract gravel depth from concrete calculation. A 30-inch deep hole with 6-inch gravel base needs only 24 inches of concrete.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Fast-Setting vs Regular Concrete</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Fast-Setting (Quikrete)</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• No mixing required - pour dry, add water</li>
                <li>• 1 gallon water per 50 lb bag</li>
                <li>• Sets in 20-40 minutes</li>
                <li>• 3,000 PSI strength</li>
                <li>• Costs 10-15% more</li>
                <li>• Perfect for fence posts</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-2">Regular Concrete Mix</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Requires mixing</li>
                <li>• Sets in 24-48 hours</li>
                <li>• 4,000 PSI with proper curing</li>
                <li>• Lower cost</li>
                <li>• Requires overnight bracing</li>
                <li>• Use for structural deck posts</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Frost Line Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">❄️ Frost Line Depth Requirements</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-700 mb-6">Posts must extend <strong>6 inches below local frost depth</strong>. This requirement overrides the 1/3 rule in cold climates. Never set posts less than 24 inches deep regardless of fence height.</p>
          
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Deep Frost States</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Minnesota: 80 inches</li>
                <li>• North Dakota: 75 inches</li>
                <li>• Wisconsin: 65 inches</li>
                <li>• Michigan: 42-48 inches</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">Moderate Frost States</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Illinois: 36 inches</li>
                <li>• Ohio: 32 inches</li>
                <li>• Pennsylvania: 30-36 inches</li>
                <li>• New York: 32-42 inches</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-bold text-gray-900 mb-2">No Frost States</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Florida: 0 inches</li>
                <li>• Hawaii: 0 inches</li>
                <li>• Southern California: 0-12 inches</li>
                <li>• Gulf Coast: 0-6 inches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Wood Fence Materials */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🪵 Wood Fence Material Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Actual vs Nominal Lumber Dimensions</h3>
          <p className="text-sm text-gray-700 mb-4">Lumber dimensions create calculation complexity. <strong>Always use actual dimensions</strong> for material estimates - calculating with nominal sizes produces significant errors.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Nominal Size</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Actual Size</th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-900">Common Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-gray-900">1×6</td>
                  <td className="px-4 py-3 text-gray-700">3/4" × 5.5"</td>
                  <td className="px-4 py-3 text-gray-700">Privacy fence pickets</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">1×4</td>
                  <td className="px-4 py-3 text-gray-700">3/4" × 3.5"</td>
                  <td className="px-4 py-3 text-gray-700">Picket fence, board-on-board</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">2×4</td>
                  <td className="px-4 py-3 text-gray-700">1.5" × 3.5"</td>
                  <td className="px-4 py-3 text-gray-700">Rails (horizontal supports)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">4×4</td>
                  <td className="px-4 py-3 text-gray-700">3.5" × 3.5"</td>
                  <td className="px-4 py-3 text-gray-700">Posts (up to 6' fences)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-gray-900">6×6</td>
                  <td className="px-4 py-3 text-gray-700">5.5" × 5.5"</td>
                  <td className="px-4 py-3 text-gray-700">Posts (6.5-8' fences, corners, gates)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Rail Requirements by Fence Height</h3>
          <p className="text-sm text-gray-700 mb-4"><strong>Formula:</strong> 1 rail per 2 feet of fence height.</p>
          
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">Fences under 5 feet:</span>
              <span className="font-semibold text-gray-900">2 rails minimum</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">5-7 feet tall (standard 6' privacy):</span>
              <span className="font-semibold text-gray-900">3 rails</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">8 feet tall:</span>
              <span className="font-semibold text-gray-900">4 rails</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">Standard 2×4 rails (1.5" × 3.5" actual) work for most applications. Use 16-foot rails when possible to span two 8-foot sections, staggering joints for strength.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Picket Calculation Formulas</h3>
          
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-2">Standard Privacy Fence (butted or spaced boards)</h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Formula:</strong> Boards per Linear Foot = 12 ÷ (Board Actual Width + Spacing)</p>
            <div className="space-y-1 text-sm text-gray-700 mt-3">
              <p>• 5.5" boards with zero gap: 12 ÷ 5.5 = 2.18 boards/foot</p>
              <p>• 5.5" boards with 1" gap: 12 ÷ 6.5 = 1.85 boards/foot</p>
              <p>• For 8-foot section with no gaps: ~18 pickets</p>
              <p>• For 8-foot section with 1" gaps: ~15 pickets</p>
            </div>
          </div>

          <div className="bg-green-50 rounded-lg p-4 mb-4">
            <h4 className="font-bold text-gray-900 mb-2">Board-on-Board (overlapping pickets on both sides)</h4>
            <p className="text-sm text-gray-700 mb-2">Requires approximately <strong>30% more material</strong> than standard privacy. First layer boards space 1.5" apart, second layer covers gaps with 1-1.5" overlap.</p>
            <div className="space-y-1 text-sm text-gray-700 mt-3">
              <p>• 8-foot section with 5.5" boards: 24 pickets</p>
              <p>• 8-foot section with 3.5" boards: 38 pickets</p>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <h4 className="font-bold text-gray-900 mb-2">Picket Fence (3-4 feet tall with gaps)</h4>
            <p className="text-sm text-gray-700 mb-2">Traditional spacing: 2-4 inch gaps between pickets. Most codes allow 4-inch maximum gaps; pool enclosures strictly limit gaps to prevent child passage.</p>
            <div className="space-y-1 text-sm text-gray-700 mt-3">
              <p>• 3.5" pickets with 2.5" gaps: 16 pickets per 96" section</p>
              <p>• 3.5" pickets with 4" gaps: 12 pickets per 96" section</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔩 Fastener & Hardware Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Screw Specifications for Wood Fencing</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Required Sizes</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• <strong>1.5-1.75 inches:</strong> Pickets to rails</li>
                <li>• <strong>2.5 inches:</strong> General assembly</li>
                <li>• <strong>3 inches:</strong> Rails to posts</li>
                <li>• <strong>Gauge:</strong> #8-#10 gauge</li>
              </ul>
            </div>
            <p className="text-gray-700">All outdoor fasteners must be <strong>hot-dipped galvanized, coated, or stainless steel</strong>. Standard screws cost 6-7 cents each versus 1-1.5 cents for ring shank nails, but screws provide superior holding power.</p>
            
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Quantity Formula</h4>
              <p className="text-gray-700 mb-2"><strong>Total Fasteners = (Rails × 4) + (Pickets × Rails × 2)</strong></p>
              <p className="text-gray-600 text-xs">Each rail needs 4 fasteners (2 per end). Each picket needs 2 fasteners per rail.</p>
              <p className="text-gray-700 mt-2">Example: 6-foot fence with 3 rails and 549 pickets requires 3,306 fasteners.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Post Caps</h3>
          <p className="text-sm text-gray-700 mb-4">Post caps protect against water intrusion and rot, extending post life significantly.</p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">4×4 Post Caps</h4>
              <p className="text-gray-700">Accommodate 3.375 to 4.1875-inch range (actual 3.5" × 3.5" posts)</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">6×6 Post Caps</h4>
              <p className="text-gray-700">Fit 5.375 to 6.125 inches (actual 5.5" × 5.5" posts)</p>
            </div>
          </div>
          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <p><strong>UV-resistant ASA resin:</strong> 10-year warranty, best durability</p>
            <p><strong>Powder-coated metal:</strong> Cap Claw designs for flexibility</p>
            <p><strong>Traditional wood:</strong> Not recommended due to rot susceptibility</p>
          </div>
        </div>
      </section>

      {/* Gate Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🚪 Gate Hardware & Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Standard Gate Widths</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">36 inches (3 feet):</span>
              <span className="font-semibold text-gray-900">Minimum pedestrian width</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">48 inches (4 feet):</span>
              <span className="font-semibold text-gray-900">Handles garden equipment</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">60 inches (5 feet):</span>
              <span className="font-semibold text-gray-900">Accommodates lawn mowers</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">72 inches (6 feet):</span>
              <span className="font-semibold text-gray-900">Maximum single gate before sagging</span>
            </div>
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">10 feet (120 inches):</span>
              <span className="font-semibold text-gray-900">Double gate - single-car driveway</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-gray-700">12 feet (144 inches):</span>
              <span className="font-semibold text-gray-900">Double gate - most common residential</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gate Frame Construction</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Material:</strong> 2×4 lumber for gates up to 6 feet wide and 6 feet tall. Upgrade to 4×4 lumber for wider or commercial applications.</p>
            <p className="bg-red-50 border-l-4 border-red-500 p-3"><strong>CRITICAL - Z-Bracing Direction:</strong> The diagonal brace must run from <strong>BOTTOM hinge corner to TOP latch corner</strong>, placing the brace in compression. This prevents sagging. Running the brace the opposite direction (top hinge to bottom latch) will result in gate failure.</p>
            <p><strong>Cross-bracing (X-pattern):</strong> Provides maximum stability for gates 8+ feet wide.</p>
            <p><strong>Fasteners:</strong> All joints require exterior deck screws with pre-drilled holes. Never use nails for gate construction.</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Gate Size</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Weight Range</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Hinge Count</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Hinge Size</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Extras</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">3-4 feet wide</td>
                  <td className="px-6 py-4 text-gray-700">Up to 75 lbs</td>
                  <td className="px-6 py-4 text-gray-700">2 minimum</td>
                  <td className="px-6 py-4 text-gray-700">6-8" strap or T-hinges</td>
                  <td className="px-6 py-4 text-gray-700">None required</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">4-6 feet wide</td>
                  <td className="px-6 py-4 text-gray-700">75-125 lbs</td>
                  <td className="px-6 py-4 text-gray-700">2-3 hinges</td>
                  <td className="px-6 py-4 text-gray-700">8-10" heavy-duty strap</td>
                  <td className="px-6 py-4 text-gray-700">3 hinges if over 75 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">6 feet wide</td>
                  <td className="px-6 py-4 text-gray-700">125-150 lbs</td>
                  <td className="px-6 py-4 text-gray-700">3 required</td>
                  <td className="px-6 py-4 text-gray-700">10-12" heavy-duty strap</td>
                  <td className="px-6 py-4 text-gray-700">Support wheel + anti-sag cable</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-900 font-medium">10-12 feet double</td>
                  <td className="px-6 py-4 text-gray-700">125-150 lbs per leaf</td>
                  <td className="px-6 py-4 text-gray-700">3 per leaf</td>
                  <td className="px-6 py-4 text-gray-700">12-14" heavy-duty</td>
                  <td className="px-6 py-4 text-gray-700">Support wheels mandatory</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Safety margin:</strong> Add 20-30% to gate weight when calculating hinge capacity. Hinge materials: galvanized steel (economical), stainless steel 304/316 (marine-grade for pools), aluminum (lightweight but lower capacity).
          </div>
        </div>
      </section>

      {/* Pool Fence Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏊 Pool Fence Code Requirements</h2>
        
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6 mb-6">
          <div className="flex items-start gap-3">
            <div className="text-3xl">⚠️</div>
            <div>
              <h3 className="font-bold text-red-900 text-lg mb-2">Mandatory Safety Requirements</h3>
              <p className="text-red-800 text-sm">Pool barriers are strictly regulated. Non-compliance can result in fines, insurance issues, and serious child safety risks. Always check local codes - requirements vary by jurisdiction.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📏</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Minimum Height: 48 inches</h3>
                <p className="text-gray-700 text-sm">Measured from ground level. Cannot be less than 4 feet under any circumstances.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔲</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Maximum Opening: 4 inches</h3>
                <p className="text-gray-700 text-sm">Barriers must not allow passage of 4-inch diameter sphere. Closer-spaced members limited to 1.75-inch maximum spacing. Chain link requires 1.25-inch maximum mesh or privacy slats reducing spacing to 1.75 inches.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🚪</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Gate Requirements</h3>
                <p className="text-gray-700 text-sm"><strong>Must open outward from pool.</strong> Self-closing and self-latching from any open position. Latch mounted <strong>54 inches minimum</strong> from ground or equipped with locking mechanism. Self-closing mechanisms mandatory per ICC and CPSC requirements.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🧗</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Non-Climbable Zone</h3>
                <p className="text-gray-700 text-sm">Horizontal members less than 45 inches apart must be on pool side of fence. Vertical spacing not exceeding 1.75 inches. Clear zone of 36 inches minimum between barrier exterior and any climbable structures or equipment.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📋</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Bottom Clearance</h3>
                <p className="text-gray-700 text-sm">Maximum 2 inches for non-solid surfaces (grass, gravel). Maximum 4 inches for solid surfaces (concrete, decking).</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Self-Closing Hardware Options</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">TruClose Hinges</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Regular: up to 66 lbs</li>
                <li>• Heavy-duty: up to 154 lbs</li>
                <li>• Adjustable tension</li>
                <li>• UV-stabilized polymer</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Waterson Hydraulic Hinges</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Supports up to 440 lbs</li>
                <li>• 3 adjustable speed settings</li>
                <li>• Stainless steel construction</li>
                <li>• Commercial grade</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Code Heights */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Height Regulations & Building Codes</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Common Residential Height Standards</h3>
          <div className="space-y-3 text-sm">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Front Yards</h4>
              <p className="text-gray-700">3-4 feet maximum height (standard across most jurisdictions). Often must be 50-75% open construction (picket or ornamental styles). Front setback typically extends 20 feet from property line.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Backyards</h4>
              <p className="text-gray-700">6 feet standard without permits (most common). 7-8 feet maximum with building permits and approvals. Privacy fences can be solid construction in backyards.</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Corner Lots - Visibility Triangles</h4>
              <p className="text-gray-700">30-50 feet measured from corner along both roadways. 3-foot maximum fence height within triangle. Trees must have branches no lower than specified height (often 8 feet). Traffic engineer approval may be required.</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Height Measurement Standards</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <p><strong>Standard measurement:</strong> From lowest grade at fence base to top of fence.</p>
            <p><strong>Grade differential:</strong> When finished grades differ by less than 2 feet between properties, measure from highest parcel. Artificially altered grades (fill creating slopes exceeding 1 foot per 3 feet distance) include altered grade height in calculations.</p>
            <p><strong>Decorative elements:</strong> Decorative posts and caps may extend 4 inches above maximum height limits in most jurisdictions.</p>
          </div>
        </div>
      </section>

      {/* Calculation Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔢 Material Calculation Formulas</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example: 200 Linear Feet Wood Privacy Fence (6 feet tall)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate posts</p>
                  <p className="text-gray-700 font-mono">Formula: Posts = (Linear feet ÷ Spacing) + 1, round up</p>
                  <p className="text-gray-700 font-mono">Posts = (200 ÷ 8) + 1 = 25 + 1 = 26 posts</p>
                  <p className="text-gray-600 text-xs mt-2">Note: Corner posts share between fence lines (don't double-count). Gate posts replace line posts.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Calculate rails</p>
                  <p className="text-gray-700 font-mono">Sections = 200 ÷ 8 = 25 sections</p>
                  <p className="text-gray-700 font-mono">Rails per section = 3 (6' fence uses 3 rails)</p>
                  <p className="text-gray-700 font-mono">Total rails = 25 × 3 = 75 rails (2×4×8')</p>
                  <p className="text-gray-600 text-xs mt-2">Use 16-foot rails when possible to span two 8-foot sections, staggering joints.</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate pickets (5.5" boards, no gaps)</p>
                  <p className="text-gray-700 font-mono">Formula: Boards per foot = 12 ÷ (Actual width + Gap)</p>
                  <p className="text-gray-700 font-mono">Boards per foot = 12 ÷ 5.5 = 2.18</p>
                  <p className="text-gray-700 font-mono">Total pickets = 200 × 2.18 = 436 pickets</p>
                  <p className="text-gray-600 text-xs mt-2">Add 10-15% waste factor: 436 × 1.10 = 480 pickets to order</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate concrete</p>
                  <p className="text-gray-700 font-mono">Posts = 26</p>
                  <p className="text-gray-700 font-mono">Bags per post = 2-3 (80 lb bags for 30" depth)</p>
                  <p className="text-gray-700 font-mono">Total bags = 26 × 2.5 = 65 bags (80 lb)</p>
                  <p className="text-gray-600 text-xs mt-2">Use 3 bags for corner and gate posts (deeper/larger holes)</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 5: Calculate fasteners</p>
                  <p className="text-gray-700 font-mono">Formula: (Rails × 4) + (Pickets × Rails × 2)</p>
                  <p className="text-gray-700 font-mono">Fasteners = (75 × 4) + (436 × 3 × 2)</p>
                  <p className="text-gray-700 font-mono">Fasteners = 300 + 2,616 = 2,916 screws</p>
                  <p className="text-gray-600 text-xs mt-2">Order 3,000 screws (includes spare for errors)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Reference Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Posts = (Linear feet ÷ Spacing) + 1</p>
                <p className="font-mono bg-white p-3 rounded">Sections = Posts - 1</p>
                <p className="font-mono bg-white p-3 rounded">Rails per section = Fence height ÷ 24 inches</p>
                <p className="font-mono bg-white p-3 rounded">Total rails = Sections × Rails per section</p>
                <p className="font-mono bg-white p-3 rounded">Pickets per foot = 12 ÷ (Actual width + Gap spacing)</p>
                <p className="font-mono bg-white p-3 rounded">Total pickets = Linear feet × Pickets per foot</p>
                <p className="font-mono bg-white p-3 rounded">Hole diameter = 3 × Post width</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Factors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Waste Factors by Material</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-sm text-gray-700 mb-4">Apply waste factors by multiplying raw quantity by (1 + waste decimal). Always round up to nearest selling unit.</p>
          
          <div className="space-y-3">
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <div>
                <p className="font-semibold text-gray-900">Wood fencing</p>
                <p className="text-xs text-gray-600">Basic projects 10%, complex cuts 15%</p>
              </div>
              <span className="font-bold text-blue-600">10-15%</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-gray-100">
              <div>
                <p className="font-semibold text-gray-900">Vinyl fencing</p>
                <p className="text-xs text-gray-600">Consistent panel sizes reduce waste</p>
              </div>
              <span className="font-bold text-purple-600">5-10%</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <div>
                <p className="font-semibold text-gray-900">Chain link</p>
                <p className="text-xs text-gray-600">Roll flexibility allows exact cutting</p>
              </div>
              <span className="font-bold text-green-600">5%</span>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-4 mt-4 text-sm">
            <p className="text-gray-700"><strong>Example:</strong> 100 linear feet with 10% waste = 100 × 1.10 = 110 feet to order</p>
            <p className="text-gray-600 mt-2">Extra material proves useful for repairs and accounts for cutting errors, defects, and irregular property lines.</p>
          </div>
        </div>
      </section>

      {/* Pressure Treated Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🛡️ Pressure-Treated Lumber Requirements</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
            <p className="text-sm text-gray-700"><strong>Critical:</strong> All posts and lumber within 6 inches of ground require <strong>ground-contact rating with 0.15 MCA retention level</strong> (UC4A rating for permanent burial). Above-ground lumber uses lower retention at reduced cost.</p>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-4">Wood Species Characteristics</h3>
          
          <div className="space-y-4 text-sm">
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Western Red Cedar</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Natural rot resistance without treatment</li>
                <li>• Stable dimensions, minimal warping</li>
                <li>• Lifespan: 20-30 years</li>
                <li>• Premium cost but excellent durability</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Southern Yellow Pine (Pressure-Treated)</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Economical strength, widely available</li>
                <li>• More warping and checking than cedar</li>
                <li>• Lifespan: 15-20 years with proper treatment</li>
                <li>• Most common residential choice</li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Redwood</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Premium durability with beautiful color</li>
                <li>• Excellent natural rot resistance</li>
                <li>• Lifespan: 20-25+ years</li>
                <li>• Costs approximately 3× pressure-treated pine</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-2">Black Locust (Split Rail)</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Exceptional durability for posts</li>
                <li>• Lifespan: 50+ years in ground contact</li>
                <li>• Primarily used in split rail applications</li>
                <li>• Superior to treated wood for longevity</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-gray-50 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">Lumber Grades</h4>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>#1 Grade:</strong> Fewer knots, better appearance, tighter grain</p>
              <p><strong>#2 (Construction) Grade:</strong> Standard framing quality with acceptable knots (most residential fencing)</p>
              <p><strong>Select/Premium:</strong> Minimal knots for high appearance applications</p>
              <p><strong>Clear Grade:</strong> No knots or defects at premium pricing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Building Codes & Industry Standards</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">International Residential Code (IRC) R404.1 - Footings</p>
              <p>Post footings must extend below frost line or 24-inch minimum depth. Requires concrete encasement for structural support. Posts must be set 6 inches below local frost depth.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">IRC P2801 - Swimming Pool Barriers</p>
              <p>Minimum 48-inch height. Self-closing, self-latching gates opening outward from pool. Latch 54 inches from ground. Maximum 4-inch openings. Non-climbable zone requirements. Always requires permits and inspections.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM F567 - Chain Link Fence Fabric</p>
              <p>Standards for wire gauge (11-gauge residential, 9-gauge commercial), 2-inch mesh size, coating specifications (galvanized or vinyl-coated). Ensures structural integrity and longevity.</p>
            </div>

            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM F1083 - Pipe, Steel, Hot-Dipped Zinc-Coated (Galvanized) Welded</p>
              <p>Specifications for fence framework posts. HF20 residential grade (16-gauge, 0.065" wall, 2" OD line posts). HF40 commercial grade (all posts 2.5-3" OD).</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">Local Setback & Height Requirements</p>
              <p>Property line fences typically require 0-6 inch setback from property line. Height restrictions: 6 feet backyard standard, 3-4 feet front yard maximum. Corner lot visibility triangles limit to 3 feet. Always verify local ordinances before installation.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}