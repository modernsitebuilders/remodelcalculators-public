export default function InteriorPaintGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Interior paint covers <strong>350-400 sq ft per gallon</strong> on smooth drywall. Textured walls reduce coverage to <strong>300-350 sq ft/gal</strong>. Primers cover <strong>200-300 sq ft/gal</strong>. Deduct <strong>20 sq ft per door</strong> and <strong>15 sq ft per window</strong>.</p>
          </div>
        </div>
      </div>

      {/* Coverage by Surface */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🎨 Coverage Rates by Surface Type</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Surface Condition</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Paint (sq ft/gal)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Primer (sq ft/gal)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Smooth Drywall (Painted)</td>
                  <td className="px-6 py-4 text-gray-700">350-400</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Best coverage, similar colors</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Smooth Drywall (Bare)</td>
                  <td className="px-6 py-4 text-gray-700">250-300</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">First coat absorbs more</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Textured Walls (Knockdown)</td>
                  <td className="px-6 py-4 text-gray-700">300-350</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">15-20% more paint needed</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Textured Walls (Orange Peel)</td>
                  <td className="px-6 py-4 text-gray-700">300-350</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Moderate texture</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Popcorn Ceiling</td>
                  <td className="px-6 py-4 text-gray-700">250-300</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Heavy texture, high absorption</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Dark to Light Color</td>
                  <td className="px-6 py-4 text-gray-700">300-350</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">May need 3 coats or tinted primer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2">Primer Coverage</h4>
          <p className="text-sm text-gray-700">
            <strong>All primers cover 200-300 square feet per gallon</strong> regardless of surface type per PCA standards. This reduced coverage ensures proper sealing, stain blocking, and adhesion for topcoats.
          </p>
        </div>
      </section>

      {/* Deductions */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Standard Deductions</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Doors</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard door:</span>
                <span className="font-semibold">20 sq ft</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Standard size:</strong> 3' × 6'8" = 20.33 sq ft
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Windows</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Average window:</span>
                <span className="font-semibold">15 sq ft</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Standard size:</strong> 3' × 5' typical
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Large Openings</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Large windows:</span>
                <span className="font-semibold">50% deduction</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Practical:</strong> Offsets missed corners/edges
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculation Example */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🧮 Room Calculation Example</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">12' × 14' Bedroom (8' Ceilings)</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate wall area</p>
              <p className="text-gray-700 font-mono">Perimeter: (12 + 14) × 2 = 52 feet</p>
              <p className="text-gray-700 font-mono">Wall area: 52 × 8 = 416 sq ft</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Step 2: Deduct openings</p>
              <p className="text-gray-700 font-mono">Door: 20 sq ft</p>
              <p className="text-gray-700 font-mono">Window: 15 sq ft</p>
              <p className="text-gray-700 font-mono">Paintable walls: 416 - 20 - 15 = 381 sq ft</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Step 3: Add ceiling</p>
              <p className="text-gray-700 font-mono">Ceiling: 12 × 14 = 168 sq ft</p>
              <p className="text-gray-700 font-mono">Total area: 381 + 168 = 549 sq ft</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate paint needed</p>
              <p className="text-gray-700 font-mono">Coverage: 375 sq ft/gal (smooth drywall)</p>
              <p className="text-gray-700 font-mono">Per coat: 549 ÷ 375 = 1.5 gallons</p>
              <p className="text-gray-700 font-mono">Two coats: 1.5 × 2 = 3 gallons</p>
              <p className="text-gray-700 font-mono">With 10% waste: 3 × 1.10 = <strong>3.3 → 1 gallon walls + 3 quarts ceiling</strong></p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="font-bold text-gray-900">Alternative (walls only):</p>
              <p className="text-gray-700">Walls: 381 ÷ 375 = 1.02 gallons per coat</p>
              <p className="text-gray-700">Two coats with waste: 1.02 × 2 × 1.10 = <strong>2.2 → 1 gallon + 1 quart</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* Number of Coats */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔢 How Many Coats Do You Need?</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">One Coat Acceptable:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Same color refresh (good condition)</li>
              <li>• Light color over light color</li>
              <li>• High-quality paint with primer built-in</li>
              <li>• Previously primed surface</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Two Coats Required:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• New drywall (1 primer + 2 paint)</li>
              <li>• Color change (light to dark or reverse)</li>
              <li>• Stain blocking needed</li>
              <li>• Professional/warranty requirements</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2">Dark to Light Colors</h4>
          <p className="text-sm text-gray-700">
            When painting light colors over dark walls, use <strong>tinted primer</strong> (gray for covering dark colors) plus 2 coats, or plan for 3 coats of paint without tinted primer.
          </p>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">PCA Standards (formerly PDCA)</p>
              <p>The Painting Contractors Association sets coverage standards: 350-400 sq ft/gal for smooth surfaces, 200-300 sq ft/gal for primers. Recommends 10% material overage for waste.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">MPI (Master Painters Institute)</p>
              <p>Provides architectural paint specifications and performance standards. Defines proper surface preparation, primer requirements, and coating systems for various substrates.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM D3276 - Standard Guide for Painting Inspectors</p>
              <p>Establishes qualifications and responsibilities for paint inspectors. Covers film thickness, coverage rates, and quality control procedures.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">Manufacturer Specifications</p>
              <p>Major brands (Sherwin-Williams, Benjamin Moore, Behr) provide technical data sheets with coverage rates, dry times, and application instructions. Always follow manufacturer guidelines for warranty compliance.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}