export default function ExteriorPaintGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Exterior paint coverage varies by surface: <strong>350-400 sq ft/gal</strong> for smooth siding, <strong>250-300 sq ft/gal</strong> for textured surfaces, and <strong>200-300 sq ft/gal</strong> for rough stucco or brick. Primers cover <strong>200-300 sq ft/gal</strong> regardless of surface type.</p>
          </div>
        </div>
      </div>

      {/* Coverage by Surface Type */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🎨 Coverage by Surface Type</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Surface Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Paint (sq ft/gal)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Primer (sq ft/gal)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Smooth Vinyl Siding</td>
                  <td className="px-6 py-4 text-gray-700">350-400</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Best coverage, minimal absorption</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Fiber Cement Siding (Smooth)</td>
                  <td className="px-6 py-4 text-gray-700">350-400</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Similar to vinyl when sealed</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Wood Siding (New)</td>
                  <td className="px-6 py-4 text-gray-700">300-350</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Smooth wood, pre-sealed</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Wood Siding (Weathered)</td>
                  <td className="px-6 py-4 text-gray-700">250-300</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Higher absorption, needs more coats</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Textured Surfaces</td>
                  <td className="px-6 py-4 text-gray-700">250-300</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Rough sawn wood, textured fiber cement</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Rough Stucco</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Heavy texture increases paint usage</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Brick (Unsealed)</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-gray-700">200-300</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Very porous, requires multiple coats</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2">Key Takeaway</h4>
          <p className="text-sm text-gray-700">
            <strong>Primers universally cover 200-300 sq ft per gallon</strong> regardless of surface type. This reduced coverage ensures proper sealing and adhesion. Paint coverage varies by surface texture and porosity.
          </p>
        </div>
      </section>

      {/* Application Method Waste */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔧 Application Method & Waste Factors</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Brush & Roller</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">10%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Trim, detail work</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Most controlled:</strong> Minimal overspray, precise application
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Airless Sprayer</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">20%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Large surfaces, siding</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Most efficient sprayer:</strong> Faster coverage, moderate overspray
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Conventional Air Spray</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">30%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Fine finishes</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Highest waste:</strong> Significant overspray, premium finish
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">HVLP Sprayer</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">15%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Detail work, cabinets</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Low overspray:</strong> High control, reduced waste
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculation Example */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🧮 Example Calculation</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Two-Story House with Wood Siding</h3>
          
          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate wall area</p>
              <p className="text-gray-700 font-mono">Perimeter: 150 feet</p>
              <p className="text-gray-700 font-mono">Average height: 20 feet (two stories)</p>
              <p className="text-gray-700 font-mono">Total: 150 × 20 = 3,000 sq ft</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Step 2: Deduct openings</p>
              <p className="text-gray-700 font-mono">Doors & windows: ~400 sq ft</p>
              <p className="text-gray-700 font-mono">Paintable area: 3,000 - 400 = 2,600 sq ft</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate primer needed</p>
              <p className="text-gray-700 font-mono">Coverage: 250 sq ft/gal (mid-range for primer)</p>
              <p className="text-gray-700 font-mono">Primer: 2,600 ÷ 250 = 10.4 gallons</p>
              <p className="text-gray-700 font-mono">With 10% waste: 10.4 × 1.10 = <strong>11.5 → 12 gallons</strong></p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate paint needed (2 coats)</p>
              <p className="text-gray-700 font-mono">Coverage: 275 sq ft/gal (weathered wood)</p>
              <p className="text-gray-700 font-mono">Per coat: 2,600 ÷ 275 = 9.5 gallons</p>
              <p className="text-gray-700 font-mono">Two coats: 9.5 × 2 = 19 gallons</p>
              <p className="text-gray-700 font-mono">With 10% waste: 19 × 1.10 = <strong>20.9 → 21 gallons</strong></p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="font-bold text-gray-900">Total Materials:</p>
              <p className="text-gray-700">• Primer: 12 gallons</p>
              <p className="text-gray-700">• Paint: 21 gallons (2 coats)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">PCA Standards (formerly PDCA)</p>
              <p>The Painting Contractors Association provides guidelines for exterior paint coverage rates, surface preparation requirements, and quality standards. Standard coverage: 350-400 sq ft/gal for smooth surfaces.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM D3274 - Evaluating Degree of Surface Disfigurement</p>
              <p>Standard guide for assessing chalking of exterior paint films. Determines when repainting is necessary based on surface degradation.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM D6577 - Measuring Wet Film Thickness</p>
              <p>Standard for determining proper paint application thickness. Ensures adequate coverage and durability for exterior surfaces.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">Surface Preparation Standards</p>
              <p>SSPC (Society for Protective Coatings) standards specify proper cleaning, scraping, sanding, and priming procedures for various exterior surfaces. Proper prep is critical for paint adhesion and longevity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}