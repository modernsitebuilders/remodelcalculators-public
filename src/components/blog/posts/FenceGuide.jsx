export default function FenceGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Standard fence posts are spaced <strong>6-8 feet apart</strong> on center. Wood privacy fences typically use 8-foot spacing, while chain link can span up to 10 feet. Posts must be buried <strong>1/3 of total height</strong> or 24" minimum per IRC R404.1.</p>
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
                <span className="font-semibold">4×4 (6' fence) or 6×6 (8' fence)</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Why:</strong> Matches standard lumber lengths (8'). Provides adequate support for solid panels.
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
                <span className="font-medium">Post diameter:</span>
                <span className="font-semibold">2-3/8" (residential)</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Longer spans possible due to mesh flexibility. Commercial fences may use 8' spacing.
              </div>
            </div>
          </div>

          {/* Vinyl Fence Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinyl/PVC Fence</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard spacing:</span>
                <span className="font-semibold">6-8 feet on center</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Post size:</span>
                <span className="font-semibold">4×4 or 5×5 vinyl</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Critical:</strong> Closer spacing (6') required in high-wind areas. Follow manufacturer specs.
              </div>
            </div>
          </div>

          {/* Picket/Ornamental Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Picket/Ornamental Fence</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard spacing:</span>
                <span className="font-semibold">6-8 feet on center</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Post size:</span>
                <span className="font-semibold">4×4 wood or 2-3/8" metal</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Open design allows longer spans than privacy fences.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Depth Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">⚓ Post Depth & Concrete Requirements</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fence Height</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Post Depth</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Hole Diameter</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Concrete per Post</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">4 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8-10 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">0.5 cu ft (2 bags)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">6 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24-30 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10-12 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">0.75 cu ft (3 bags)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">8 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30-36 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1 cu ft (4 bags)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Gate posts</td>
                  <td className="px-6 py-4 text-sm text-gray-700">36-42 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-14 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1.5 cu ft (6 bags)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>IRC Requirement:</strong> Posts must extend below frost line or 24" minimum, whichever is deeper. Based on 50 lb bags (0.375 cu ft each).
          </div>
        </div>
      </section>

      {/* Frost Line Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">❄️ Frost Line Depth by Region</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Region/State</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Frost Depth</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Min Post Depth</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Southern States</td>
                  <td className="px-6 py-4 text-sm text-gray-700">0-12 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">FL, TX, AZ, CA (south)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Mid-Atlantic/Southeast</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-18 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24-30 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">VA, NC, SC, GA</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Midwest/Northeast</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30-40 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">36-48 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">OH, PA, NY, IL, IN</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Northern States</td>
                  <td className="px-6 py-4 text-sm text-gray-700">48-60 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">54-72 inches</td>
                  <td className="px-6 py-4 text-sm text-gray-700">MN, WI, MI, ND, ME</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Critical:</strong> Always check local building codes. Frost heave can lift and damage improperly set posts.
          </div>
        </div>
      </section>

      {/* Materials Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔨 Material Quantities by Fence Type</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Wood Privacy Materials Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wood Privacy (100 LF, 6' tall)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Posts (4×4):</span>
                <span className="font-semibold">13 posts</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Rails (2×4×8):</span>
                <span className="font-semibold">38 rails</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Pickets (5.5"×6'):</span>
                <span className="font-semibold">220 pickets</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Concrete bags:</span>
                <span className="font-semibold">39 (50 lb)</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Calculation:</strong> 8' spacing = 12 sections + 1 end post. 3 rails per section.
              </div>
            </div>
          </div>

          {/* Chain Link Materials Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Chain Link (100 LF, 4' tall)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Line posts:</span>
                <span className="font-semibold">11 posts</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Mesh fabric:</span>
                <span className="font-semibold">100 linear feet</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Top rail (1-3/8"):</span>
                <span className="font-semibold">100 linear feet</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Concrete bags:</span>
                <span className="font-semibold">22 (50 lb)</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Calculation:</strong> 10' spacing = 10 sections + 1 end post. Includes tension wire.
              </div>
            </div>
          </div>

          {/* Vinyl Privacy Materials Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinyl Privacy (100 LF, 6' tall)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Posts (5×5):</span>
                <span className="font-semibold">13 posts</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Panels (8' wide):</span>
                <span className="font-semibold">12 panels</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Post caps:</span>
                <span className="font-semibold">13 caps</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Concrete bags:</span>
                <span className="font-semibold">39 (50 lb)</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Panels come pre-assembled. Rails built into panel design.
              </div>
            </div>
          </div>

          {/* Picket Fence Materials Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wood Picket (100 LF, 4' tall)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Posts (4×4):</span>
                <span className="font-semibold">13 posts</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Rails (2×4×8):</span>
                <span className="font-semibold">25 rails</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Pickets (3.5"×4'):</span>
                <span className="font-semibold">185 pickets</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Concrete bags:</span>
                <span className="font-semibold">26 (50 lb)</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Spacing:</strong> 3.5" picket + 1.5" gap = 5" on center for decorative fence.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gate Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🚪 Gate Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📏</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Gate Post Requirements</h3>
                <p className="text-gray-700 text-sm">Gate posts require larger size (6×6 for wood, 3" diameter for metal) and deeper setting (36-42"). Posts must be perfectly plumb and aligned.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📐</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Gate Width Standards</h3>
                <p className="text-gray-700 text-sm">Single gates: 36-48" wide. Double gates: 72-96" total (36-48" per panel). Allow 1" clearance on hinge side, 2" on latch side.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔩</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Hardware Requirements</h3>
                <p className="text-gray-700 text-sm">Heavy-duty hinges: 2 for gates under 5', 3 for 5-6' gates. Self-closing hinges required for pool fences. Latch must be 54" high minimum (pool code).</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">⚖️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Diagonal Bracing</h3>
                <p className="text-gray-700 text-sm">Gates over 4' wide require diagonal bracing from top hinge corner to bottom latch corner. Prevents sagging from gate weight.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🏊</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Pool Fence Code (IRC P2801)</h3>
                <p className="text-gray-700 text-sm">48" minimum height. Gates self-closing and self-latching. Latch 54" from ground. No gaps over 4" between vertical pickets.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔢 Manual Fence Calculation</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example: 200 Linear Feet Wood Privacy Fence (6' tall)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate posts needed</p>
                  <p className="text-gray-700 font-mono">Linear feet = 200 feet</p>
                  <p className="text-gray-700 font-mono">Post spacing = 8 feet</p>
                  <p className="text-gray-700 font-mono">Posts = (200 ÷ 8) + 1 = 26 posts</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Calculate rails needed</p>
                  <p className="text-gray-700 font-mono">Sections = 200 ÷ 8 = 25 sections</p>
                  <p className="text-gray-700 font-mono">Rails per section = 3 (top, middle, bottom)</p>
                  <p className="text-gray-700 font-mono">Total rails = 25 × 3 = 75 rails (2×4×8)</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate pickets needed</p>
                  <p className="text-gray-700 font-mono">Picket width + gap = 5.5" + 0" = 5.5"</p>
                  <p className="text-gray-700 font-mono">Pickets per foot = 12" ÷ 5.5" = 2.18</p>
                  <p className="text-gray-700 font-mono">Total pickets = 200 × 2.18 = 436 pickets</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate concrete needed</p>
                  <p className="text-gray-700 font-mono">Posts = 26</p>
                  <p className="text-gray-700 font-mono">Bags per post = 3 (50 lb bags)</p>
                  <p className="text-gray-700 font-mono">Total bags = 26 × 3 = 78 bags</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Posts = (Linear feet ÷ Spacing) + 1</p>
                <p className="font-mono bg-white p-3 rounded">Sections = Linear feet ÷ Spacing</p>
                <p className="font-mono bg-white p-3 rounded">Rails = Sections × Rails per section (2-3)</p>
                <p className="font-mono bg-white p-3 rounded">Pickets = Linear feet × (12 ÷ Picket spacing in inches)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Building Codes & Standards</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">IRC R404.1 - Concrete Footings</p>
              <p>Post footings must extend below frost line or 24" minimum depth. Requires concrete encasement for structural support.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">IRC P2801 - Swimming Pool Barriers</p>
              <p>Pool fences minimum 48" height with self-closing, self-latching gates. Latch must be 54" from ground or have locking mechanism.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM F567 - Chain Link Fence Fabric</p>
              <p>Standards for wire gauge, mesh size, coating specifications (galvanized or vinyl). Ensures structural integrity and longevity.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">Local Setback Requirements</p>
              <p>Property line fences typically require 0-6" setback. Height restrictions vary: 4-6' backyard, 3-4' front yard. Check local ordinances.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}