export default function FlooringGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Hardwood requires <strong>5-7% waste</strong> for straight installations, <strong>15% for diagonal</strong> patterns. Tile requires <strong>5-10% waste</strong> standard, increasing to <strong>15-20%</strong> for diagonal layouts, and <strong>20-25% for large format tiles</strong>.</p>
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

          {/* Tile Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ceramic/Porcelain Tile</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard layout:</span>
                <span className="font-semibold">5-10% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal/pattern:</span>
                <span className="font-semibold">15-20% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Large format (24"+):</span>
                <span className="font-semibold">20-25% waste</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Includes:</strong> Cuts, breakage during installation, and pattern matching. Large tiles are heavier and more prone to breakage.
              </div>
            </div>
          </div>

          {/* Laminate Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Laminate Flooring</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight installation:</span>
                <span className="font-semibold">5-10% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Multiple rooms:</span>
                <span className="font-semibold">10-15% waste</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Tip:</strong> Buy all boxes from same lot number for consistent color matching
              </div>
            </div>
          </div>

          {/* Vinyl Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Luxury Vinyl Plank (LVP)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard installation:</span>
                <span className="font-semibold">5-10% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Complex layouts:</span>
                <span className="font-semibold">10-15% waste</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Advantage:</strong> Lower waste than tile due to flexible cutting and no breakage
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Coverage Rates */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📏 Material Coverage & Packaging</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Material Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage Per Unit</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Standard Packaging</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Solid Hardwood 3/4"</td>
                  <td className="px-6 py-4 text-gray-700">20-25 sq ft per box</td>
                  <td className="px-6 py-4 text-gray-700">Box (varies by width)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Coverage is face width only</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Engineered Hardwood</td>
                  <td className="px-6 py-4 text-gray-700">20-25 sq ft per box</td>
                  <td className="px-6 py-4 text-gray-700">Box (varies by width)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Similar to solid wood</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Ceramic Tile 12×12</td>
                  <td className="px-6 py-4 text-gray-700">12-15 sq ft per box</td>
                  <td className="px-6 py-4 text-gray-700">Box (14-18 pieces)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">1 sq ft per tile</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Ceramic Tile 18×18</td>
                  <td className="px-6 py-4 text-gray-700">15-18 sq ft per box</td>
                  <td className="px-6 py-4 text-gray-700">Box (6-8 pieces)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">2.25 sq ft per tile</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Porcelain Large Format 24×24</td>
                  <td className="px-6 py-4 text-gray-700">16-20 sq ft per box</td>
                  <td className="px-6 py-4 text-gray-700">Box (4-5 pieces)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">4 sq ft per tile, 20-25% waste</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Laminate 8mm</td>
                  <td className="px-6 py-4 text-gray-700">20-24 sq ft per box</td>
                  <td className="px-6 py-4 text-gray-700">Box (8 planks typical)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">26-27 lbs per box</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Luxury Vinyl Plank (LVP)</td>
                  <td className="px-6 py-4 text-gray-700">18-24 sq ft per box</td>
                  <td className="px-6 py-4 text-gray-700">Box (varies by size)</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Lighter than laminate</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Sheet Vinyl</td>
                  <td className="px-6 py-4 text-gray-700">Per square yard</td>
                  <td className="px-6 py-4 text-gray-700">6-12 ft width rolls</td>
                  <td className="px-6 py-4 text-sm text-gray-600">9 sq ft per sq yard</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Carpet</td>
                  <td className="px-6 py-4 text-gray-700">Per square yard</td>
                  <td className="px-6 py-4 text-gray-700">12 ft width rolls</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Includes padding separate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Calculation Examples */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🧮 Example Calculations</h2>
        
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Example 1: Hardwood in 300 sq ft Room</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Base calculation</p>
                <p className="text-gray-700 font-mono">Room area: 300 sq ft</p>
                <p className="text-gray-700 font-mono">Straight installation: 300 × 1.07 (7% waste) = 321 sq ft</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Boxes needed</p>
                <p className="text-gray-700 font-mono">Box coverage: 20 sq ft per box</p>
                <p className="text-gray-700 font-mono">Boxes: 321 ÷ 20 = 16.05 → <strong>17 boxes</strong></p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Example 2: Large Format Tile in Bathroom</h3>
            <div className="space-y-4">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Base calculation</p>
                <p className="text-gray-700 font-mono">Bathroom: 80 sq ft</p>
                <p className="text-gray-700 font-mono">24×24 tiles: 80 × 1.22 (22% waste) = 98 sq ft</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Tiles needed</p>
                <p className="text-gray-700 font-mono">Each tile: 4 sq ft</p>
                <p className="text-gray-700 font-mono">Tiles: 98 ÷ 4 = 24.5 → <strong>25 tiles (5-6 boxes)</strong></p>
              </div>
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
              <p className="font-semibold text-gray-900 mb-1">NWFA - National Wood Flooring Association</p>
              <p>Standards for hardwood installation including waste factors, expansion gaps (1/2" perimeter), and acclimation requirements (7-10 days in climate-controlled space).</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">NTCA - National Tile Contractors Association</p>
              <p>Tile installation standards: 5-10% waste for straight layouts, 15-20% for diagonal patterns, 20-25% for large format tiles. Specifies thin-set coverage and grout joint widths.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">TCNA - Tile Council of North America</p>
              <p>Comprehensive tile installation handbook with substrate preparation, waterproofing requirements, and expansion joint specifications.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">Laminate & LVP Manufacturers</p>
              <p>Standard waste factors: 5-10% for straight installations in single rooms, 10-15% for multiple rooms or complex layouts. Acclimation: 48 hours minimum.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">ANSI A108/A118 Series</p>
              <p>American National Standards for ceramic tile installation materials and methods. Covers everything from mortar specifications to grout requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Calculate Your Flooring Materials</h2>
        <p className="text-lg mb-6 opacity-90">
          Get precise material estimates for hardwood, tile, laminate, vinyl, and carpet with our free calculator.
        </p>
        <a 
          href="/flooring-calculator"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
        >
          Go to Flooring Calculator →
        </a>
      </div>
    </div>
  );
}