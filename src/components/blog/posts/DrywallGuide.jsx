export default function DrywallGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">For 1,000 square feet of wall/ceiling area, you need approximately <strong>32 sheets</strong> of 4×8 drywall (with 10-14% waste), <strong>1,000-1,250 screws</strong> (depending on wall/ceiling mix), <strong>5,000 feet</strong> of tape (10 rolls), and <strong>11 gallons</strong> of joint compound for three-coat Level 4 finish.</p>
          </div>
        </div>
      </div>

      {/* Material Coverage Rates */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📏 Material Coverage Rates</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Material</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Drywall Sheet (4×8)</td>
                  <td className="px-6 py-4 text-gray-700">32 sq ft per sheet</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Standard wall size</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Drywall Sheet (4×12)</td>
                  <td className="px-6 py-4 text-gray-700">48 sq ft per sheet</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Reduces seams, better for ceilings</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Joint Compound</td>
                  <td className="px-6 py-4 text-gray-700">280 sq ft per gallon per coat</td>
                  <td className="px-6 py-4 text-sm text-gray-600">USG specification, 3 coats standard</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Paper Tape</td>
                  <td className="px-6 py-4 text-gray-700">500 linear feet per 100 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Roll covers 500 ft (industry standard)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Drywall Screws (Walls)</td>
                  <td className="px-6 py-4 text-gray-700">1.0 screw per sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-600">16" o.c. on studs (ASTM C840)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Drywall Screws (Ceilings)</td>
                  <td className="px-6 py-4 text-gray-700">1.25 screws per sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-600">12" o.c. on joists (ASTM C840)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Waste Factor (Walls)</td>
                  <td className="px-6 py-4 text-gray-700">10%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Standard for simple rectangular rooms</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Waste Factor (Ceilings)</td>
                  <td className="px-6 py-4 text-gray-700">14%</td>
                  <td className="px-6 py-4 text-sm text-gray-600">10% material + 4% overhead difficulty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sheet Sizes & Specifications */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Sheet Sizes & Specifications</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Standard 4×8 Sheets</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">32 sq ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Walls under 8 ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Weight (1/2"):</span>
                <span className="font-semibold">~50 lbs</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Most common:</strong> Easy to handle, fits standard ceiling heights
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Large 4×12 Sheets</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">48 sq ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Best for:</span>
                <span className="font-semibold">Ceilings, tall walls</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Weight (1/2"):</span>
                <span className="font-semibold">~75 lbs</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Advantage:</strong> 50% fewer seams, faster installation
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2">Thickness Standards (IRC Chapter 7)</h4>
          <ul className="space-y-2 text-sm text-gray-700">
            <li><strong>1/2 inch:</strong> Standard for walls, ceilings with 16" joist spacing</li>
            <li><strong>5/8 inch:</strong> Required for ceilings with 24" joist spacing, fire-rated assemblies (Type X)</li>
            <li><strong>1/4 inch:</strong> Repair patches, curved archways only (not structural)</li>
          </ul>
        </div>
      </section>

      {/* Calculation Formula */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🧮 How to Calculate Materials</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Step-by-Step Calculation</h3>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate wall area</p>
                  <p className="text-gray-700 font-mono">Wall Area = Perimeter × Height</p>
                  <p className="text-gray-700 font-mono">Example: (12 + 12 + 18 + 18) × 8 = 480 sq ft</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Calculate ceiling area</p>
                  <p className="text-gray-700 font-mono">Ceiling Area = Length × Width</p>
                  <p className="text-gray-700 font-mono">Example: 18 × 12 = 216 sq ft</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Apply waste factors</p>
                  <p className="text-gray-700 font-mono">Wall with waste = 480 × 1.10 = 528 sq ft</p>
                  <p className="text-gray-700 font-mono">Ceiling with waste = 216 × 1.14 = 246 sq ft</p>
                  <p className="text-gray-700 font-mono">Total = 528 + 246 = 774 sq ft</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate sheets needed</p>
                  <p className="text-gray-700 font-mono">Sheets = 774 ÷ 32 = 24.2 → 25 sheets (4×8)</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 5: Calculate other materials</p>
                  <p className="text-gray-700 font-mono">Screws (walls): 480 × 1.0 = 480 screws</p>
                  <p className="text-gray-700 font-mono">Screws (ceiling): 216 × 1.25 = 270 screws</p>
                  <p className="text-gray-700 font-mono">Total screws: 750 screws (3 lbs)</p>
                  <p className="text-gray-700 font-mono">Tape: (696 ÷ 100) × 500 = 3,480 feet (7 rolls)</p>
                  <p className="text-gray-700 font-mono">Mud: (696 ÷ 280) × 3 = 7.5 gallons (buy 8)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Sheets = (Wall sq ft × 1.10 + Ceiling sq ft × 1.14) ÷ 32</p>
                <p className="font-mono bg-white p-3 rounded">Screws = (Wall sq ft × 1.0) + (Ceiling sq ft × 1.25)</p>
                <p className="font-mono bg-white p-3 rounded">Tape = (Total sq ft ÷ 100) × 500 linear feet</p>
                <p className="font-mono bg-white p-3 rounded">Mud = (Total sq ft ÷ 280) × 3 coats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards & Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM C840 - Application of Gypsum Board</p>
              <p>Standard specification for fastener spacing: 16" on center for walls, 12" on center for ceilings. Defines proper installation methods for structural integrity.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">GA-216 - Gypsum Association Application Guidelines</p>
              <p>Comprehensive standards for framing requirements, joint treatment, and finishing levels. Primary reference for professional drywall installation.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">USG Specifications</p>
              <p>Joint compound coverage: 280 square feet per gallon per coat. Three-coat system standard for Level 4 finish (tape coat, fill coat, finish coat).</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">IRC Chapter 7 - Wall Covering</p>
              <p>Residential building code requirements: 1/2" minimum for walls and 16" o.c. ceiling joists, 5/8" required for 24" o.c. ceiling joists.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">Waste Factor Standards</p>
              <p>Walls: 10% waste for simple rectangular rooms. Ceilings: 14% waste (10% material + 4% overhead difficulty). Complex layouts with angles or soffits: 15% total waste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Room Sizes Table */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏠 Common Room Material Requirements</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Room Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sheets (4×8)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Tape (ft)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Mud (gal)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Screws (lbs)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">10' × 10' (8' ceiling)</td>
                  <td className="px-6 py-4 text-gray-700">16 sheets</td>
                  <td className="px-6 py-4 text-gray-700">2,700 ft</td>
                  <td className="px-6 py-4 text-gray-700">6 gallons</td>
                  <td className="px-6 py-4 text-gray-700">2 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">12' × 12' (8' ceiling)</td>
                  <td className="px-6 py-4 text-gray-700">20 sheets</td>
                  <td className="px-6 py-4 text-gray-700">3,200 ft</td>
                  <td className="px-6 py-4 text-gray-700">7 gallons</td>
                  <td className="px-6 py-4 text-gray-700">3 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">14' × 16' (8' ceiling)</td>
                  <td className="px-6 py-4 text-gray-700">28 sheets</td>
                  <td className="px-6 py-4 text-gray-700">4,500 ft</td>
                  <td className="px-6 py-4 text-gray-700">10 gallons</td>
                  <td className="px-6 py-4 text-gray-700">4 lbs</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">20' × 20' (9' ceiling)</td>
                  <td className="px-6 py-4 text-gray-700">45 sheets</td>
                  <td className="px-6 py-4 text-gray-700">7,400 ft</td>
                  <td className="px-6 py-4 text-gray-700">17 gallons</td>
                  <td className="px-6 py-4 text-gray-700">7 lbs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600">
            *Includes appropriate waste factors (10% walls, 14% ceilings)
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Need Exact Calculations?</h2>
        <p className="text-lg mb-6 opacity-90">
          Use our free drywall calculator for precise material estimates based on your specific room dimensions.
        </p>
        <a 
          href="/drywall-calculator"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
        >
          Go to Drywall Calculator →
        </a>
      </div>
    </div>
  );
}