export default function FlooringGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">For 500 square feet of flooring, add <strong>5-10% waste</strong> for straight layouts (525-550 sq ft total), <strong>10-15%</strong> for diagonal/herringbone patterns (550-575 sq ft). Tile requires additional 10% for cuts and breakage.</p>
          </div>
        </div>
      </div>

      {/* Waste Factors by Material */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Waste Factors by Flooring Type</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hardwood Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hardwood Flooring</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight pattern:</span>
                <span className="font-semibold">5-7% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal pattern:</span>
                <span className="font-semibold">10-15% waste</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Add 10% for board length variations and end cuts. Character grades need 15% for culling defects.
              </div>
            </div>
          </div>

          {/* Tile Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Ceramic/Porcelain Tile</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Standard layout:</span>
                <span className="font-semibold">10% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Diagonal/pattern:</span>
                <span className="font-semibold">15-20% waste</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Includes:</strong> Cuts, breakage during installation, and pattern matching. Large format tiles: 5-7% waste.
              </div>
            </div>
          </div>

          {/* Laminate Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Laminate Flooring</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight pattern:</span>
                <span className="font-semibold">5-10% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Complex rooms:</span>
                <span className="font-semibold">10-12% waste</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Why:</strong> Click-lock planks minimize waste. Add 5% for irregular room shapes with many cuts.
              </div>
            </div>
          </div>

          {/* Vinyl Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinyl Plank (LVP/LVT)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Straight pattern:</span>
                <span className="font-semibold">5-8% waste</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Sheet vinyl:</span>
                <span className="font-semibold">10-15% waste</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Plank/tile formats minimize waste. Sheet vinyl requires pattern matching.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Per Box/Carton */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📦 Standard Packaging Coverage</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Product Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Typical Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage per Box</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Hardwood (3/4")</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Various widths</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-24 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">40-50 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Laminate</td>
                  <td className="px-6 py-4 text-sm text-gray-700">8mm thickness</td>
                  <td className="px-6 py-4 text-sm text-gray-700">18-22 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30-35 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Vinyl Plank (LVP)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">5-6mm thickness</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-24 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">28-32 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Ceramic Tile (12×12)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1 sq ft per tile</td>
                  <td className="px-6 py-4 text-sm text-gray-700">15-18 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">45-55 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Porcelain Tile (24×24)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">4 sq ft per tile</td>
                  <td className="px-6 py-4 text-sm text-gray-700">16-20 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">50-60 lbs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Note:</strong> Coverage varies by manufacturer. Always check product specifications before ordering.
          </div>
        </div>
      </section>

      {/* Installation Pattern Waste */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🎨 Waste by Installation Pattern</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pattern Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Waste Factor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Applicable To</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Straight/Running Bond</td>
                  <td className="px-6 py-4 text-sm text-gray-700">5-7%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">All materials</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Most efficient pattern</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Diagonal (45°)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10-15%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Tile, hardwood</td>
                  <td className="px-6 py-4 text-sm text-gray-700">More perimeter cuts</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Herringbone</td>
                  <td className="px-6 py-4 text-sm text-gray-700">15-20%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Hardwood, LVP, tile</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Complex angle cuts</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Chevron</td>
                  <td className="px-6 py-4 text-sm text-gray-700">15-20%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Hardwood, LVP</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Requires precise cuts</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Parquet/Basket Weave</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10-15%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Hardwood, tile</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Pattern matching needed</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Professional tip:</strong> Complex patterns in small or irregular rooms can require 20%+ waste due to increased cuts.
          </div>
        </div>
      </section>

      {/* Underlayment Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🛡️ Underlayment Requirements</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Hardwood Underlayment Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hardwood Flooring</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Product:</span>
                <span className="font-semibold">Rosin paper (15 lb felt)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">500 sq ft/roll</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Purpose:</strong> Prevents squeaks, adds cushion, moisture barrier over plywood subfloor.
              </div>
            </div>
          </div>

          {/* Laminate Underlayment Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Laminate Flooring</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Product:</span>
                <span className="font-semibold">2mm foam or cork</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">100-360 sq ft/roll</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Required:</strong> Floating floors need underlayment for sound dampening and expansion/contraction.
              </div>
            </div>
          </div>

          {/* Tile Underlayment Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tile Floors</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Product:</span>
                <span className="font-semibold">Cement backer board</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Thickness:</span>
                <span className="font-semibold">1/4" or 1/2"</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Coverage:</strong> 3×5 sheet = 15 sq ft. Required over wood subfloors to prevent cracking.
              </div>
            </div>
          </div>

          {/* LVP Underlayment Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinyl Plank (LVP)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Product:</span>
                <span className="font-semibold">Optional (check product)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">When needed:</span>
                <span className="font-semibold">Concrete subfloors</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Many LVP products have attached underlayment. Add vapor barrier over concrete.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Strips & Trim */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🚪 Transition Strips & Molding</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🚪</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">T-Molding (Same Height Floors)</h3>
                <p className="text-gray-700 text-sm">Standard lengths: 72"-94". Used between rooms with same flooring height. 1 piece per doorway.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📐</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Reducer Strip (Height Transition)</h3>
                <p className="text-gray-700 text-sm">Transitions from hardwood/laminate to carpet or vinyl. Typical transition: 1/4"-3/4" height difference.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🏠</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Threshold/End Cap</h3>
                <p className="text-gray-700 text-sm">Finishes flooring edge at exterior doors, sliding doors, or drop-offs. Covers expansion gap.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📏</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Quarter Round/Shoe Molding</h3>
                <p className="text-gray-700 text-sm">Covers expansion gap at walls. Calculate room perimeter in linear feet. Standard lengths: 8' or 12'.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔲</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Stair Nosing</h3>
                <p className="text-gray-700 text-sm">Required for stair treads. Matches flooring material. 1 piece per step, typically 42"-48" wide for standard stairs.</p>
              </div>
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
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example: 500 sq ft Room (Laminate, Straight Pattern)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate base square footage</p>
                  <p className="text-gray-700 font-mono">Room area = 500 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Add waste factor</p>
                  <p className="text-gray-700 font-mono">Waste = 500 × 0.08 (8%) = 40 sq ft</p>
                  <p className="text-gray-700 font-mono">Total needed = 500 + 40 = 540 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate boxes needed</p>
                  <p className="text-gray-700 font-mono">Coverage per box = 20 sq ft</p>
                  <p className="text-gray-700 font-mono">Boxes = 540 ÷ 20 = 27 boxes</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate additional materials</p>
                  <p className="text-gray-700 font-mono">Underlayment: 500 sq ft (buy 2 rolls @ 360 sq ft)</p>
                  <p className="text-gray-700 font-mono">Perimeter: 90 linear feet</p>
                  <p className="text-gray-700 font-mono">Quarter round: 90 ÷ 8 = 12 pieces (8' lengths)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Total sq ft = Room sq ft × (1 + waste factor)</p>
                <p className="font-mono bg-white p-3 rounded">Boxes = Total sq ft ÷ Coverage per box</p>
                <p className="font-mono bg-white p-3 rounded">Underlayment = Room sq ft ÷ Roll coverage</p>
                <p className="font-mono bg-white p-3 rounded">Trim = Room perimeter ÷ Trim length (8' or 12')</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards & Installation Specs</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">NWFA - National Wood Flooring Association</p>
              <p>Installation guidelines for solid and engineered hardwood. Specifies acclimation periods, moisture testing, and fastener spacing.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ANSI A108 - Ceramic Tile Installation</p>
              <p>American National Standards for tile installation including substrate preparation, thin-set coverage, and grout joint specifications.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">NALFA - North American Laminate Flooring Association</p>
              <p>Technical standards for laminate installation including expansion gaps (1/4" minimum), underlayment requirements, and moisture barriers.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">IRC Section R302.13 - Floor Finish</p>
              <p>International Residential Code requirements for flame spread ratings and radiant heat panel testing for floor coverings.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}