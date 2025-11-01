export default function ExteriorPaintGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Exterior paint coverage varies by surface: <strong>350-400 sq ft/gallon</strong> on smooth vinyl siding, <strong>250-300 sq ft/gallon</strong> on wood, and <strong>150-200 sq ft/gallon</strong> on rough stucco or brick.</p>
          </div>
        </div>
      </div>

      {/* Coverage by Siding Type */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏠 Coverage Rates by Siding Type</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Vinyl Siding Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinyl Siding</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Primer coverage:</span>
                <span className="font-semibold">350-400 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Paint coverage:</span>
                <span className="font-semibold">375-425 sq ft/gal</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Best coverage:</strong> Non-porous, smooth surface. Requires specialized vinyl-safe paint.
              </div>
            </div>
          </div>

          {/* Wood Siding Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wood Siding</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">New wood:</span>
                <span className="font-semibold">250-300 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Weathered wood:</span>
                <span className="font-semibold">200-250 sq ft/gal</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>High absorption:</strong> Wood grain and weathering increase paint consumption by 25-50%.
              </div>
            </div>
          </div>

          {/* Stucco Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Stucco</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Smooth stucco:</span>
                <span className="font-semibold">250-300 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Rough stucco:</span>
                <span className="font-semibold">150-200 sq ft/gal</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Highly textured:</strong> Deep texture consumes 2-3× more paint than smooth surfaces.
              </div>
            </div>
          </div>

          {/* Brick Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Brick</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Sealed brick:</span>
                <span className="font-semibold">200-250 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Unsealed brick:</span>
                <span className="font-semibold">150-175 sq ft/gal</span>
              </div>
              <div className="bg-red-50 rounded-lg p-3 text-sm">
                <strong>Extreme porosity:</strong> Requires acrylic masonry primer before paint.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturer Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏭 Exterior Paint Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Brand</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Surface</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Sherwin-Williams</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Duration Exterior</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Vinyl/Wood</td>
                  <td className="px-6 py-4 text-sm text-gray-700">300-400 sq ft/gal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Benjamin Moore</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Aura Exterior</td>
                  <td className="px-6 py-4 text-sm text-gray-700">All surfaces</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350-450 sq ft/gal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Behr</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Premium Plus Ultra</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Wood/Masonry</td>
                  <td className="px-6 py-4 text-sm text-gray-700">250-400 sq ft/gal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">PPG</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Permanent Satin</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Siding</td>
                  <td className="px-6 py-4 text-sm text-gray-700">300-400 sq ft/gal</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Benjamin Moore</td>
                  <td className="px-6 py-4 text-sm text-gray-700">MoorGard Low Lustre</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Masonry</td>
                  <td className="px-6 py-4 text-sm text-gray-700">200-300 sq ft/gal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Note:</strong> Actual coverage depends heavily on surface porosity and texture. Use lower end for rough or weathered surfaces.
          </div>
        </div>
      </section>

      {/* House Size Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏘️ Paint Needed by House Size</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">House Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Siding Area (est.)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wood (2 coats)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Vinyl (2 coats)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">1,000 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1,200 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8-10 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6-8 gallons</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">1,500 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1,800 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-15 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">9-12 gallons</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">2,000 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2,400 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">16-20 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-16 gallons</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">2,500 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3,000 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-25 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">15-20 gallons</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">3,000 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3,600 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24-30 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">18-24 gallons</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Calculation:</strong> Exterior siding area ≈ 1.2-1.4× interior square footage, accounting for walls only (no roof). Includes trim and gables.
          </div>
        </div>
      </section>

      {/* Exterior Primers */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🛡️ Exterior Primer Requirements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Acrylic Primer Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Acrylic Latex Primer</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">300-400 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Wood, fiber cement</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Use case:</strong> New construction, bare wood, or previously unpainted surfaces.
              </div>
            </div>
          </div>

          {/* Oil-Based Primer Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Oil-Based Primer</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">350-450 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Stain blocking, wood knots</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Use case:</strong> Cedar, redwood, water stains, or tannin bleed-through prevention.
              </div>
            </div>
          </div>

          {/* Masonry Primer Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-red-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Masonry Primer</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">200-300 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Brick, stucco, concrete</span>
              </div>
              <div className="bg-red-50 rounded-lg p-3 text-sm">
                <strong>Essential:</strong> Seals highly porous surfaces. Prevents efflorescence.
              </div>
            </div>
          </div>

          {/* Bonding Primer Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Bonding Primer</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">300-400 sq ft/gal</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Glossy surfaces, metal</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Special use:</strong> Adhesion to vinyl, aluminum, or chalky surfaces.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Factors */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🌤️ Environmental Factors Affecting Coverage</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-yellow-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">☀️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">UV Exposure & Fading</h3>
                <p className="text-gray-700 text-sm">South and west-facing walls require paint with higher UV resistance. Faded surfaces need extra coats for full opacity.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Moisture & Weathering</h3>
                <p className="text-gray-700 text-sm">Weathered wood absorbs 30-50% more paint. Peeling or chalking surfaces require scraping/power washing before priming.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌡️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Temperature Range</h3>
                <p className="text-gray-700 text-sm">Apply exterior paint between 50-90°F. Cold weather increases viscosity and reduces coverage. Hot surfaces cause premature drying.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🍃</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Mildew & Algae Growth</h3>
                <p className="text-gray-700 text-sm">Requires cleaning with TSP or mildew cleaner before painting. Use mildew-resistant exterior paint formulas.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌊</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Coastal/High Humidity</h3>
                <p className="text-gray-700 text-sm">Salt air and moisture require acrylic latex paints. Oil-based paints may chalk prematurely in coastal climates.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Methods */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🎨 Application Method Waste Factors</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Brush & Roller</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">10-15%</span>
              </div>
              <p className="pt-2">Most efficient method. Best for trim, detail work, and small areas. Minimal overspray or waste.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">HVLP Sprayer</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">25%</span>
              </div>
              <p className="pt-2">High volume, low pressure. Better control than airless. Moderate overspray. Good for textured surfaces.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Airless Sprayer</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">35%</span>
              </div>
              <p className="pt-2">Fastest application. High overspray. Requires extensive masking. Best for large, open surfaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔢 Manual Calculation Example</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example: 1,500 sq ft House (Wood Siding)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate siding area</p>
                  <p className="text-gray-700 font-mono">House perimeter = 150 feet</p>
                  <p className="text-gray-700 font-mono">Average height = 12 feet (single story + gables)</p>
                  <p className="text-gray-700 font-mono">Siding area = 150 × 12 = 1,800 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Deduct non-painted areas</p>
                  <p className="text-gray-700 font-mono">Windows/doors: 200 sq ft</p>
                  <p className="text-gray-700 font-mono">Net paintable area = 1,800 - 200 = 1,600 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate paint needed</p>
                  <p className="text-gray-700 font-mono">Coverage = 275 sq ft/gal (wood)</p>
                  <p className="text-gray-700 font-mono">Primer = 1,600 ÷ 275 = 5.8 gallons</p>
                  <p className="text-gray-700 font-mono">Two coats paint = 5.8 × 2 = 11.6 gallons</p>
                  <p className="text-gray-700 font-mono"><strong>Total: 6 gal primer + 12 gal paint (with overage)</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formula</h3>
              <p className="text-sm text-gray-700 font-mono bg-white p-3 rounded mb-2">
                Exterior area = (Perimeter × Height) - (Windows + Doors)
              </p>
              <p className="text-sm text-gray-700 font-mono bg-white p-3 rounded">
                Gallons = (Area ÷ Coverage rate) × Number of coats × 1.1
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📋 Exterior Painting Best Practices</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">PDCA Standards</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Power wash surfaces</strong> to remove dirt, mildew, and loose paint before priming</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Prime all bare wood</strong> within 48 hours of exposure to prevent moisture absorption</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Two coats minimum</strong> on all exterior surfaces. Three coats for dramatic color changes</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Use acrylic latex</strong> for most applications. Superior flexibility and UV resistance</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Common Mistakes</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <div className="bg-red-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Painting in direct sunlight</strong> causes rapid drying and poor adhesion</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-red-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Skipping surface prep</strong> leads to peeling within 1-2 years</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-red-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Using interior paint outside</strong> causes premature failure from UV and moisture</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="bg-red-500 rounded-full w-2 h-2 mt-1.5 flex-shrink-0"></div>
                <p><strong>Underestimating texture</strong> leads to running out of paint mid-project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards & Testing</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM D3276 - Standard Guide for Painting Masonry</p>
              <p>Specifications for surface preparation, priming, and coating application on brick, concrete, and stucco.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM D6864 - Standard Practice for Exterior Wood Coating</p>
              <p>Requirements for moisture content, surface preparation, primer selection, and application standards for wood siding.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Vinyl Siding Institute (VSI) Guidelines</p>
              <p>Recommends paint with LRV (Light Reflectance Value) of 55 or higher to prevent vinyl warping from heat absorption.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">National Roofing Contractors Association (NRCA)</p>
              <p>Provides standards for painting trim, soffits, fascia, and other exterior architectural details.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}