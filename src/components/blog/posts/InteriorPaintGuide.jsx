export default function InteriorPaintGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Most interior paints cover <strong>350-400 square feet per gallon</strong> on smooth, primed surfaces. A standard 12×12 room (walls only) requires approximately <strong>1.5-2 gallons</strong> for two coats.</p>
          </div>
        </div>
      </div>

      {/* Coverage by Surface Type */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Coverage Rates by Surface Type</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Smooth Walls Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Smooth Drywall</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Primer coverage:</span>
                <span className="font-semibold">200-300 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Paint coverage:</span>
                <span className="font-semibold">400-450 sq ft/gal</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Best conditions:</strong> Primed, sealed, non-porous surface. Achieves maximum spread rate.
              </div>
            </div>
          </div>

          {/* Textured Walls Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Textured Walls</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Light texture:</span>
                <span className="font-semibold">300-350 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Heavy texture:</span>
                <span className="font-semibold">250-300 sq ft/gal</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Knockdown, orange peel, and popcorn textures reduce coverage by 15-30%.
              </div>
            </div>
          </div>

          {/* Bare Drywall Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bare/Unprimed Drywall</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">First coat:</span>
                <span className="font-semibold">200-300 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Additional coats:</span>
                <span className="font-semibold">350-400 sq ft/gal</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Why:</strong> Unsealed drywall is highly porous. First coat acts as sealer.
              </div>
            </div>
          </div>

          {/* Previously Painted Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Previously Painted (Same Color)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Touch-up coat:</span>
                <span className="font-semibold">400-450 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Primer needed:</span>
                <span className="font-semibold">No (similar color)</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Best case:</strong> Clean, same sheen, no stains or damage.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturer Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏭 Manufacturer Coverage Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Brand</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product Line</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Stated Coverage</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Real-World</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Sherwin-Williams</td>
                  <td className="px-6 py-4 text-sm text-gray-700">ProMar 200</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350-400 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">325-375 sq ft/gal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Benjamin Moore</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Regal Select</td>
                  <td className="px-6 py-4 text-sm text-gray-700">400-450 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350-400 sq ft/gal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Behr</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Premium Plus</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350-400 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">300-350 sq ft/gal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">PPG</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Manor Hall</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350-450 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">325-375 sq ft/gal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Valspar</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Signature</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350-400 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">300-350 sq ft/gal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Note:</strong> Real-world coverage typically 10-15% lower than manufacturer claims due to texture, porosity, and application method.
          </div>
        </div>
      </section>

      {/* Room Calculation Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Paint Needed by Room Size</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Room Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wall Area (8' ceiling)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">1 Coat</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">2 Coats</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">10×10 bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-700">288 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">0.75 gallon</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1.5 gallons</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">12×12 bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-700">352 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1 gallon</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2 gallons</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">15×15 living room</td>
                  <td className="px-6 py-4 text-sm text-gray-700">456 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1.25 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2.5 gallons</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">20×20 open concept</td>
                  <td className="px-6 py-4 text-sm text-gray-700">608 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1.75 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3.5 gallons</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Ceiling (12×12)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">144 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">0.5 gallon</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1 gallon</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Formula:</strong> Wall area = (Room perimeter × ceiling height) - door/window areas. Based on 375 sq ft/gallon average coverage.
          </div>
        </div>
      </section>

      {/* Primer vs Paint */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🎨 Primer vs Paint Coverage</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Primer Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Primer Coverage</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Smooth surfaces:</span>
                <span className="font-semibold">350-400 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Porous surfaces:</span>
                <span className="font-semibold">250-300 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Stain-blocking:</span>
                <span className="font-semibold">300-350 sq ft/gal</span>
              </div>
              <div className="bg-red-50 rounded-lg p-3 text-sm">
                <strong>Purpose:</strong> Seals surface, improves adhesion, blocks stains. Required on bare drywall.
              </div>
            </div>
          </div>

          {/* Paint & Primer Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-indigo-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Paint & Primer in One</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">300-350 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best use:</span>
                <span className="font-semibold">Previously painted walls</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Not suitable for:</span>
                <span className="font-semibold">Bare drywall, stains</span>
              </div>
              <div className="bg-indigo-50 rounded-lg p-3 text-sm">
                <strong>Limitation:</strong> Cannot replace dedicated primer on challenging surfaces.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Factors Affecting Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">⚙️ Factors That Reduce Coverage</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Application Method</h3>
                <p className="text-gray-700 text-sm">Roller: 10% waste. Brush: 15% waste. Sprayer: 25-35% waste due to overspray.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🧱</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Surface Porosity</h3>
                <p className="text-gray-700 text-sm">Unsealed drywall, concrete, and masonry absorb 20-40% more paint than sealed surfaces.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🎨</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Color Change Severity</h3>
                <p className="text-gray-700 text-sm">Dark to light colors may require 3+ coats. Similar colors achieve one-coat coverage.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">✨</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Paint Sheen</h3>
                <p className="text-gray-700 text-sm">Flat/matte: best coverage (400+ sq ft/gal). Semi-gloss/gloss: reduced coverage (300-350 sq ft/gal).</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌡️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Temperature & Humidity</h3>
                <p className="text-gray-700 text-sm">Paint spreads better at 50-85°F. High heat causes faster drying and reduced spread.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Professional Painting Standards</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">PCA (formerly PDCA)</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Two coats minimum</strong> on all new or color-change projects</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Prime bare drywall</strong> with dedicated primer, not paint-primer combos</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>10% material overage</strong> is standard practice for waste and touch-ups</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Deduct 20 sq ft per door</strong> and 15 sq ft per window when calculating wall area</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Mistakes</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <div className="bg-red-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Using manufacturer's max coverage</strong> instead of realistic 325-375 sq ft/gal</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-red-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Skipping primer</strong> on bare drywall, stains, or dark-to-light changes</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-red-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Not accounting for texture</strong> which reduces coverage by 15-30%</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-red-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Underestimating coats needed</strong> for dramatic color changes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔢 Manual Calculation Method</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Step-by-Step Example: 12×15 Room (8' Ceiling)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate wall area</p>
                  <p className="text-gray-700 font-mono">Perimeter = (12 + 15 + 12 + 15) = 54 feet</p>
                  <p className="text-gray-700 font-mono">Wall area = 54 × 8 = 432 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Deduct openings</p>
                  <p className="text-gray-700 font-mono">Door: 20 sq ft</p>
                  <p className="text-gray-700 font-mono">Windows (2): 30 sq ft</p>
                  <p className="text-gray-700 font-mono">Net area = 432 - 51 = 381 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate gallons needed</p>
                  <p className="text-gray-700 font-mono">Per coat = 381 ÷ 350 = 1.09 gallons</p>
                  <p className="text-gray-700 font-mono">Two coats = 1.09 × 2 = 2.18 gallons</p>
                  <p className="text-gray-700 font-mono"><strong>Buy: 2.5 gallons (includes 10% overage)</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Wall area = (Length + Width) × 2 × Height</p>
                <p className="font-mono bg-white p-3 rounded">Ceiling area = Length × Width</p>
                <p className="font-mono bg-white p-3 rounded">Gallons = Total sq ft ÷ 350 ÷ Number of coats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards & Sources</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Painting and Decorating Contractors of America (PDCA)</p>
              <p>Professional standards for residential and commercial painting. Recommends 350 sq ft/gallon as realistic coverage rate.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Manufacturer Technical Data Sheets</p>
              <p>Sherwin-Williams, Benjamin Moore, PPG, and Behr publish coverage rates based on laboratory testing on sealed surfaces.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Master Painters Institute (MPI)</p>
              <p>Independent testing organization. MPI standards specify coverage rates, hiding power, and application specifications.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">ASTM D344 - Standard Test Method</p>
              <p>Industry standard test for measuring hiding power and coverage. Determines paint opacity and spreading rate.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}