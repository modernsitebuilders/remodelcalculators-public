export default function DeckStainGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-amber-200 mb-12 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Deck stain coverage ranges from <strong>75-650 sq ft per gallon</strong> depending on wood type, surface texture, and stain formulation. Most projects use <strong>150-300 sq ft/gal</strong>. Surface texture is the largest variable—rough wood uses 50-100% more stain than smooth. Second coats cover approximately 2× the area of first coats.</p>
          </div>
        </div>
      </div>

      {/* Stain Types Comparison */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🎨 Stain Types & Coverage Rates</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Solid Stain */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Solid Color Stain</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage (first coat):</span>
                <span className="font-semibold">200-400 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended coats:</span>
                <span className="font-semibold">2 coats</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Durability:</span>
                <span className="font-semibold">4-5 years</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Best for:</strong> Hiding imperfections, covering old stain. Provides maximum UV protection. Completely hides wood grain.
              </div>
            </div>
          </div>

          {/* Semi-Transparent */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Semi-Transparent Stain</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage (first coat):</span>
                <span className="font-semibold">100-650 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended coats:</span>
                <span className="font-semibold">2 coats</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Durability:</span>
                <span className="font-semibold">2-3 years</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Most popular:</strong> Shows wood grain clearly. Wide coverage variation based on wood porosity. Moderate UV protection.
              </div>
            </div>
          </div>

          {/* Transparent/Clear */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Transparent/Clear Sealer</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage (first coat):</span>
                <span className="font-semibold">150-600 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Recommended coats:</span>
                <span className="font-semibold">2 coats</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Durability:</span>
                <span className="font-semibold">1-2 years</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Best for:</strong> Natural wood appearance. No pigment means minimal UV protection. Requires frequent reapplication.
              </div>
            </div>
          </div>

          {/* Oil-Based Penetrating */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Oil-Based Penetrating</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">75-400 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Application:</span>
                <span className="font-semibold">1 coat wet-on-wet</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Durability:</span>
                <span className="font-semibold">2-4 years</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Deep penetration:</strong> Products like TWP, Ready Seal. Apply 2 coats within 15-30 min (wet-on-wet). Lowest coverage rates.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wood Species Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🪵 Wood Species & Absorption Rates</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-amber-50 to-orange-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wood Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Density</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage Rate</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Characteristics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Pressure Treated Pine</td>
                  <td className="px-6 py-4 text-sm text-gray-700">22-35 lb/ft³</td>
                  <td className="px-6 py-4 text-sm text-gray-700">150-200 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">High absorption, most common. Wait 3-6 months before staining.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Cedar</td>
                  <td className="px-6 py-4 text-sm text-gray-700">23 lb/ft³</td>
                  <td className="px-6 py-4 text-sm text-gray-700">175-225 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Moderate absorption. Natural oils may resist water-based stains initially.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Redwood</td>
                  <td className="px-6 py-4 text-sm text-gray-700">28 lb/ft³</td>
                  <td className="px-6 py-4 text-sm text-gray-700">175-225 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8× softer than ipe. Good stain absorption, premium softwood.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Douglas Fir</td>
                  <td className="px-6 py-4 text-sm text-gray-700">32-34 lb/ft³</td>
                  <td className="px-6 py-4 text-sm text-gray-700">150-200 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Variable absorption between heartwood (16% porosity) and sapwood (45% porosity).</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-amber-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Ipe (Brazilian Walnut)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">69-76 lb/ft³</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350-450 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Dense hardwood. Requires 2-3× LESS stain than softwoods. May need acetone prep.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Cumaru / Teak</td>
                  <td className="px-6 py-4 text-sm text-gray-700">41-72 lb/ft³</td>
                  <td className="px-6 py-4 text-sm text-gray-700">300-400 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Low porosity tropical hardwoods. High natural oil content.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Key Finding:</strong> Dense hardwoods like ipe use 2-3× less stain per square foot than porous softwoods like pine due to cellular structure differences.
          </div>
        </div>
      </section>

      {/* Surface Texture Impact */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔨 Surface Texture: The Largest Variable</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              Research shows surface texture creates <strong>50-100% variation</strong> in stain requirements—the single most impactful factor affecting coverage rates.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Smooth/Planed Wood</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Coverage:</strong> 300-400 sq ft/gal (baseline)</p>
                <p><strong>Characteristics:</strong> Standard planed lumber with mill glaze</p>
                <p><strong>Preparation:</strong> May need light 60-grit sanding to open pores</p>
                <p><strong>Best for:</strong> Maximum coverage efficiency</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-900 mb-3 text-lg">Rough Sawn/Textured Wood</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Coverage:</strong> 150-200 sq ft/gal (30-40% more stain)</p>
                <p><strong>Characteristics:</strong> Increased surface area from mill marks</p>
                <p><strong>Impact:</strong> Requires 67-100% more material</p>
                <p><strong>Note:</strong> Weathered rough wood uses even more stain</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 rounded-lg p-4 text-sm text-blue-900">
            <p><strong>Example:</strong> Cabot semi-transparent stain covers 450-650 sq ft/gal on smooth surfaces but only 200+ sq ft/gal on rough surfaces—a <strong>69% increase</strong> in material requirements for the same square footage.</p>
          </div>
        </div>
      </section>

      {/* Wood Condition Effects */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🌡️ Wood Condition & Age Impact</h2>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">New vs. Weathered Wood</h3>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <div className="font-semibold text-gray-900 mb-2">New/Bare Wood</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><strong>Coverage:</strong> 200-250 sq ft/gal</p>
                  <p><strong>Absorption:</strong> High—wood is "thirsty"</p>
                  <p><strong>Note:</strong> First stain lasts only 12-18 months</p>
                </div>
              </div>

              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <div className="font-semibold text-gray-900 mb-2">Weathered/Gray Wood</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><strong>Coverage:</strong> 125-170 sq ft/gal</p>
                  <p><strong>Absorption:</strong> Very high—UV damaged cells</p>
                  <p><strong>Increase:</strong> 30-40% more stain than new</p>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="font-semibold text-gray-900 mb-2">Previously Stained</div>
                <div className="text-sm text-gray-700 space-y-1">
                  <p><strong>Coverage:</strong> 200-350 sq ft/gal</p>
                  <p><strong>Absorption:</strong> Low—pores sealed</p>
                  <p><strong>Benefit:</strong> Covers 50-100% MORE area</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Why Weathered Wood Uses More Stain</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span><strong>UV degradation:</strong> Breaks down lignin in surface cells, increasing porosity 30-50%</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span><strong>Moisture cycling:</strong> Expands/contracts cells, creating micro-cracks and separating fiber bonds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span><strong>Cleaning/brightening:</strong> Opens pores further, increasing absorption 15-25% vs unprepared wood</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-500 mt-1">▸</span>
                <span><strong>End grain:</strong> Absorbs 2-3× more than face grain due to exposed tracheid/vessel openings</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Methods */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🖌️ Application Methods & Waste Factors</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Method</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Waste Factor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Speed</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Brush</td>
                  <td className="px-6 py-4 text-sm text-gray-700">5-10%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">80-120 sq ft/hr</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Most efficient. Best for detailed work, edges, gaps. Maximum penetration.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Roller</td>
                  <td className="px-6 py-4 text-sm text-gray-700">15-20%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">150-250 sq ft/hr</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Faster for large areas. MUST back-brush immediately for penetration.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Pad Applicator</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10-15%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">150-200 sq ft/hr</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Good for smooth decks. Bristled pads work stain into grain. Tears on rough wood.</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-yellow-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Spray</td>
                  <td className="px-6 py-4 text-sm text-gray-700">25-40%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">200+ sq ft/hr</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Fastest but highest waste. ALWAYS back-brush—"magic is in the back-brushing."</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-amber-50 px-6 py-4 text-sm text-amber-900 border-t-2 border-amber-200">
            <p><strong>Critical:</strong> Spray and roller methods REQUIRE immediate back-brushing to work stain into wood grain. Without back-brushing, stain sits on surface and fails prematurely.</p>
          </div>
        </div>

        <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">Spray Equipment Tips</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Spray Tip Maintenance</p>
              <p>Tips wear after 40-150 gallons. Worn tips can double consumption as orifice enlarges from .017" to .023". Replace regularly to control costs.</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Pressure Settings</p>
              <p>Airless sprayers: 1,200-3,000 PSI (use lowest that atomizes properly). Tip sizes: .011-.013" for semi-transparent and solid stains.</p>
            </div>
          </div>
        </div>
      </section>

      {/* First vs Second Coats */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔄 First Coat vs. Second Coat Coverage</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <p className="text-gray-700">
              Second coats cover <strong>50-100% MORE area</strong> than first coats because wood is already saturated and absorption is significantly reduced.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 mb-3">First Coat (Bare Wood)</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Coverage:</strong> 150-250 sq ft/gal (typical)</p>
                <p><strong>Absorption:</strong> Maximum—wood cells are empty and "thirsty"</p>
                <p><strong>Penetration:</strong> Deep into wood grain structure</p>
                <p><strong>Time:</strong> Solvents carry pigments/binders into cellular matrix</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-3">Second Coat</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p><strong>Coverage:</strong> 200-300 sq ft/gal (double first coat)</p>
                <p><strong>Absorption:</strong> Minimal—pores filled from first coat</p>
                <p><strong>Application:</strong> Mostly surface layer refreshment</p>
                <p><strong>Exception:</strong> Oil-based penetrating (wet-on-wet) doesn't double</p>
              </div>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300">
            <h3 className="font-bold text-gray-900 mb-2">Wet-on-Wet Application</h3>
            <p className="text-sm text-gray-700">
              Oil-based penetrating stains (TWP, Ready Seal) apply second coat within 15-30 minutes while first coat is still wet. This allows combined deeper penetration but <strong>does NOT provide the coverage doubling effect</strong>—both coats absorb similarly. Combined coverage: 100-125 sq ft/gal total.
            </p>
          </div>

          <div className="mt-6 bg-white border-2 border-blue-200 rounded-lg p-4">
            <p className="text-sm text-gray-700">
              <strong>Example:</strong> Behr solid stain specifies 200-400 sq ft/gal first coat, increasing to 400-800 sq ft/gal second coat—exactly double the coverage.
            </p>
          </div>
        </div>
      </section>

      {/* Surface Preparation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🧹 Surface Preparation: Critical for Success</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Power Washing</h3>
                <p className="text-gray-700 text-sm mb-2">Clean deck thoroughly to remove dirt, mildew, and old failing stain. Let dry <strong>48-72 hours</strong> before staining.</p>
                <p className="text-xs text-gray-600"><strong>Target:</strong> 12-15% moisture content. Use moisture meter or water bead test.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Deck Brightener (Oxalic Acid)</h3>
                <p className="text-gray-700 text-sm mb-2">Apply after cleaning to neutralize pH and open grain on weathered wood. Removes gray/UV-damaged surface cells.</p>
                <p className="text-xs text-gray-600"><strong>Result:</strong> Increases absorption 15-25% and restores lighter wood color.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📄</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Sanding (Optional)</h3>
                <p className="text-gray-700 text-sm mb-2">Use <strong>60-grit maximum</strong> to open pores. Finer grits (80+) compress fibers and close pores, reducing absorption.</p>
                <p className="text-xs text-gray-600"><strong>When to sand:</strong> New smooth lumber with mill glaze, or to remove surface splinters.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🧪</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Water Bead Test</h3>
                <p className="text-gray-700 text-sm mb-2">Sprinkle water on deck. If it beads up, wood isn't ready. If absorbed within 10 minutes, proceed with staining.</p>
                <p className="text-xs text-gray-600"><strong>Note:</strong> Critical for pressure-treated lumber—wait 3-6 months after installation.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🪵</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Pressure-Treated Wood Wait Time</h3>
                <p className="text-gray-700 text-sm mb-2">Fresh PT lumber contains high moisture (30%+) from waterborne treatment. Must dry to <strong>12-15% moisture</strong> before staining.</p>
                <p className="text-xs text-gray-600"><strong>Typical wait:</strong> 3-6 months depending on climate and chemical type. Use water bead test to verify.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Temperature & Weather */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🌡️ Temperature & Weather Requirements</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="font-bold text-gray-900 mb-3">✓ Optimal Conditions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Temperature:</strong> 70-75°F (ideal), 50-90°F (acceptable)</li>
                <li>• <strong>Humidity:</strong> 40-50% relative humidity</li>
                <li>• <strong>Timing:</strong> Early morning after dew dries, or late afternoon</li>
                <li>• <strong>Sun:</strong> Work in shade, avoid 10am-3pm direct sun</li>
                <li>• <strong>Season:</strong> Late spring or early fall best</li>
                <li>• <strong>Weather:</strong> No rain for 24-48 hours after application</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 mb-3">✗ Conditions to Avoid</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Hot (90°F+):</strong> Flash drying prevents penetration, causes lap marks</li>
                <li>• <strong>Cold (below 50°F):</strong> Poor penetration, extended drying, adhesion failure</li>
                <li>• <strong>Direct sun:</strong> Surface heats above 90°F even when air temp is lower</li>
                <li>• <strong>High humidity (70%+):</strong> Doubles/triples drying time</li>
                <li>• <strong>Windy days:</strong> Blows debris onto wet stain, increases spray waste</li>
                <li>• <strong>Rain expected:</strong> Need 24-48 hours minimum for cure</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-lg p-4 border border-yellow-300">
            <h3 className="font-bold text-gray-900 mb-2">Temperature Impact on Material Usage</h3>
            <p className="text-sm text-gray-700">
              Hot weather (90°F+) can increase material usage <strong>15-25%</strong> as rapid solvent evaporation requires more stain for adequate penetration. Low humidity accelerates drying, potentially requiring thicker application (10-15% more material).
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">⚠️ Common Mistakes to Avoid</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Not Back-Brushing After Spray/Roller</h3>
              <p className="text-sm text-gray-700">Atomized or rolled stain MUST be worked into grain immediately. Without back-brushing, stain sits on surface and fails within 6-12 months instead of 2-5 years.</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Staining Pressure-Treated Wood Too Soon</h3>
              <p className="text-sm text-gray-700">Fresh PT lumber needs 3-6 months to dry. Staining wet wood prevents absorption, causes peeling. Always perform water bead test first.</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Over-Sanding (Using 80-Grit or Finer)</h3>
              <p className="text-sm text-gray-700">Fine sandpaper compresses wood fibers and closes pores, reducing absorption. Use 60-grit maximum if sanding is needed.</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Stretching Coverage Too Thin</h3>
              <p className="text-sm text-gray-700">Under-applying to maximize coverage causes inadequate protection and premature failure (1-2 years vs 3-5 years). Apply at proper wet mil thickness.</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Staining in Direct Sun or Hot Weather</h3>
              <p className="text-sm text-gray-700">Flash drying prevents penetration, causes lap marks and uneven color. Wait for shade or work early morning/evening.</p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
              <h3 className="font-bold text-red-900 mb-2">Skipping Deck Cleaner and Brightener</h3>
              <p className="text-sm text-gray-700">Weathered wood has closed pores and UV-damaged surface. Cleaning and brightening opens grain for 15-25% better absorption and more even color.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Schedule */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📅 Maintenance & Recoating Schedule</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stain Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Initial Duration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Maintenance Frequency</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Solid Color</td>
                  <td className="px-6 py-4 text-sm text-gray-700">4-5 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Every 4-5 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Best UV protection. Longest lasting. Requires 2 coats.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Semi-Transparent</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2-3 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Every 2-3 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Most popular. Moderate protection. Clean and recoat without stripping.</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Transparent/Clear</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1-2 years</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Annually</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Minimal UV protection. Requires frequent maintenance.</td>
                </tr>
                <tr className="hover:bg-gray-50 bg-blue-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">New Wood (First Application)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-18 months</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Recoat after first year</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Initial coat on new wood lasts shorter as wood acclimates to weather.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-green-50 px-6 py-4 text-sm text-green-900 border-t-2 border-green-200">
            <p><strong>Maintenance Best Practice:</strong> For oil-based stains, clean with deck cleaner + brightener and recoat (no stripping needed). This is more economical than complete strip-and-refinish. Maintenance coats cover 50-100% more area than initial applications.</p>
          </div>
        </div>
      </section>

      {/* Coverage Variables Summary */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Coverage Variables Ranked by Impact</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-3">
            <div className="flex items-center gap-4 pb-3 border-b border-gray-200">
              <div className="bg-red-100 rounded-lg px-4 py-2 font-bold text-red-900 text-sm">1st</div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Surface Texture</div>
                <div className="text-sm text-gray-600">50-100% variation between smooth and rough wood</div>
              </div>
              <div className="text-sm font-semibold text-red-600">Largest variable</div>
            </div>

            <div className="flex items-center gap-4 pb-3 border-b border-gray-200">
              <div className="bg-orange-100 rounded-lg px-4 py-2 font-bold text-orange-900 text-sm">2nd</div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Wood Species Density</div>
                <div className="text-sm text-gray-600">40-80% variation - softwoods use 1.5-2.5× more than dense hardwoods</div>
              </div>
              <div className="text-sm font-semibold text-orange-600">Major impact</div>
            </div>

            <div className="flex items-center gap-4 pb-3 border-b border-gray-200">
              <div className="bg-yellow-100 rounded-lg px-4 py-2 font-bold text-yellow-900 text-sm">3rd</div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Wood Condition & Age</div>
                <div className="text-sm text-gray-600">30-40% variation - weathered wood uses significantly more than new</div>
              </div>
              <div className="text-sm font-semibold text-yellow-600">Significant</div>
            </div>

            <div className="flex items-center gap-4 pb-3 border-b border-gray-200">
              <div className="bg-green-100 rounded-lg px-4 py-2 font-bold text-green-900 text-sm">4th</div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Application Method Waste</div>
                <div className="text-sm text-gray-600">5-40% variation - brush most efficient, spray highest waste</div>
              </div>
              <div className="text-sm font-semibold text-green-600">Moderate</div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-blue-100 rounded-lg px-4 py-2 font-bold text-blue-900 text-sm">5th</div>
              <div className="flex-1">
                <div className="font-bold text-gray-900">Surface Preparation Quality</div>
                <div className="text-sm text-gray-600">15-25% variation - cleaning/brightening increases absorption uniformly</div>
              </div>
              <div className="text-sm font-semibold text-blue-600">Minor</div>
            </div>
          </div>

          <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-300">
            <p className="text-sm text-amber-900">
              <strong>Combined Effect:</strong> These variables compound rather than simply add. Rough weathered pine with spray application can require <strong>3.5× more stain</strong> than smooth ipe applied with brush—the difference between 100 sq ft/gal and 350 sq ft/gal.
            </p>
          </div>
        </div>
      </section>

      {/* Field vs Manufacturer Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔬 Field Coverage vs. Manufacturer Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="mb-6">
            <p className="text-gray-700 mb-4">
              Field testing consistently shows <strong>20-40% lower coverage</strong> than manufacturer specifications. This gap exists because manufacturer testing uses controlled conditions that rarely match real-world deck applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="font-bold text-gray-900 mb-3">Laboratory Testing</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Prepared uniform substrates</li>
                <li>• Controlled 12% moisture content</li>
                <li>• Consistent porosity wood samples</li>
                <li>• Expert application technique</li>
                <li>• Optimal temperature/humidity</li>
              </ul>
            </div>

            <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
              <h3 className="font-bold text-gray-900 mb-3">Field Conditions</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Weathered UV-damaged wood</li>
                <li>• Variable moisture content</li>
                <li>• Uneven absorption across deck</li>
                <li>• Varying application skill levels</li>
                <li>• Non-optimal weather conditions</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="font-semibold text-gray-900 mb-2">Example: Olympic Maximum Semi-Transparent</p>
              <p className="text-sm text-gray-700">
                <strong>Manufacturer claim:</strong> 250-350 sq ft/gal<br />
                <strong>Field testing:</strong> ~150 sq ft/gal<br />
                <strong>Shortfall:</strong> 40% less coverage than claimed
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="font-semibold text-gray-900 mb-2">Example: Valspar One-Coat Semi-Transparent</p>
              <p className="text-sm text-gray-700">
                <strong>Manufacturer claim:</strong> 300-400 sq ft/gal (smooth surfaces)<br />
                <strong>Field testing:</strong> 100-150 sq ft/gal<br />
                <strong>Shortfall:</strong> Only 33-50% of claimed coverage
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <p className="font-semibold text-gray-900 mb-2">Example: Ready Seal Penetrating Oil</p>
              <p className="text-sm text-gray-700">
                <strong>Manufacturer suggestion:</strong> 125-185 sq ft/gal<br />
                <strong>Field testing:</strong> 75-100 sq ft/gal<br />
                <strong>Note:</strong> Exceptionally low due to paraffin oil formulation for maximum penetration
              </p>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-lg p-4 border border-yellow-300">
            <h3 className="font-bold text-gray-900 mb-2">Professional Recommendation</h3>
            <p className="text-sm text-gray-700">
              Always purchase material based on <strong>175 sq ft/gallon</strong> as a conservative baseline, regardless of higher manufacturer claims. Add 10-15% safety margin. Use lower-end estimates for aged or rough wood. This approach prevents project delays from material shortages.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">⚡ Quick Reference Guide</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Coverage Rates by Stain Type</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Solid stain:</span>
                <span className="font-semibold">200-400 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Semi-transparent:</span>
                <span className="font-semibold">100-650 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Transparent/clear:</span>
                <span className="font-semibold">150-600 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700">Oil-based penetrating:</span>
                <span className="font-semibold">75-400 sq ft/gal</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Coverage by Wood Type</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Ipe/dense hardwoods:</span>
                <span className="font-semibold">350-450 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Cedar/redwood:</span>
                <span className="font-semibold">175-225 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="text-gray-700">Pressure-treated pine:</span>
                <span className="font-semibold">150-200 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-gray-700">Weathered rough wood:</span>
                <span className="font-semibold">100-150 sq ft/gal</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Essential Preparation Steps</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>1. Power wash and let dry 48-72 hours</li>
              <li>2. Apply deck brightener on weathered wood</li>
              <li>3. Water bead test (must absorb in 10 min)</li>
              <li>4. Check moisture content (12-15% target)</li>
              <li>5. Sand with 60-grit max if needed</li>
              <li>6. Wait 3-6 months for pressure-treated</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-4 text-lg">Application Checklist</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>✓ Temperature: 50-90°F (70-75°F ideal)</li>
              <li>✓ No rain forecast for 24-48 hours</li>
              <li>✓ Work in shade / avoid 10am-3pm</li>
              <li>✓ Always back-brush spray and roller</li>
              <li>✓ Apply proper wet mil thickness</li>
              <li>✓ Test stain on inconspicuous area first</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}