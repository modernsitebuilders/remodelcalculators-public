export default function RoofingGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">One roofing square equals <strong>100 square feet</strong>. Standard shingles come <strong>3 bundles per square</strong>. Simple roofs need <strong>10% waste</strong>, complex roofs <strong>15%</strong>, very complex roofs <strong>20%</strong>. Pitch multipliers range from <strong>1.000 (flat) to 1.414 (12/12 pitch)</strong>.</p>
          </div>
        </div>
      </div>

      {/* Underlayment Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📦 Underlayment Coverage</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Synthetic Underlayment</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">1,000 sq ft/roll</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Modern choice:</strong> GAF FeltBuster, Tiger Paw (most popular)
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">#15 Felt Paper</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">400 sq ft/roll</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Weight:</strong> 34.6 lbs per 4-square roll
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">#30 Felt Paper</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage:</span>
                <span className="font-semibold">200 sq ft/roll</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Weight:</strong> 43.2 lbs per 2-square roll
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2">Synthetic vs. Felt Paper</h4>
          <p className="text-sm text-gray-700">
            <strong>Synthetic underlayment covers 1,000 sq ft per roll</strong> compared to 400 sq ft for #15 felt, significantly reducing installation time and waste. Synthetic is more durable, slip-resistant, and increasingly preferred by professionals.
          </p>
        </div>
      </section>

      {/* Waste Factors by Complexity */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Waste Factors by Roof Complexity</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Simple Roofs</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">10%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Types:</span>
                <span className="font-semibold">Gable, shed</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Characteristics:</strong> Few valleys, simple rectangular planes
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Complex Roofs</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">15%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Types:</span>
                <span className="font-semibold">Hip, multiple valleys</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Characteristics:</strong> Dormers, multiple planes, hips
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-amber-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Very Complex Roofs</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">20%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Types:</span>
                <span className="font-semibold">Turrets, many angles</span>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 text-sm">
                <strong>Characteristics:</strong> Irregular shapes, multiple dormers, steep pitches
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Extremely Complex</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">25%</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Types:</span>
                <span className="font-semibold">Victorian, mansard</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Characteristics:</strong> Extreme complexity, custom cuts
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pitch Multipliers */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Roof Pitch Multipliers</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Pitch</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Angle (degrees)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Multiplier</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">Flat</td>
                  <td className="px-6 py-4 text-gray-700">0°</td>
                  <td className="px-6 py-4 text-gray-700">1.000</td>
                  <td className="px-6 py-4 text-sm text-gray-600">No slope</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">2/12</td>
                  <td className="px-6 py-4 text-gray-700">9.46°</td>
                  <td className="px-6 py-4 text-gray-700">1.014</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Very low slope</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">4/12</td>
                  <td className="px-6 py-4 text-gray-700">18.43°</td>
                  <td className="px-6 py-4 text-gray-700">1.054</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Low slope</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">6/12</td>
                  <td className="px-6 py-4 text-gray-700">26.57°</td>
                  <td className="px-6 py-4 text-gray-700">1.118</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Common residential</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">8/12</td>
                  <td className="px-6 py-4 text-gray-700">33.69°</td>
                  <td className="px-6 py-4 text-gray-700">1.202</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Steep</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">10/12</td>
                  <td className="px-6 py-4 text-gray-700">39.81°</td>
                  <td className="px-6 py-4 text-gray-700">1.302</td>
                  <td className="px-6 py-4 text-sm text-gray-600">Very steep</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">12/12</td>
                  <td className="px-6 py-4 text-gray-700">45.00°</td>
                  <td className="px-6 py-4 text-gray-700">1.414</td>
                  <td className="px-6 py-4 text-sm text-gray-600">45-degree angle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h4 className="font-bold text-gray-900 mb-2">Formula: Roof Area = Base Area × Pitch Multiplier × (1 + Waste Factor)</h4>
          <p className="text-sm text-gray-700">Example: 1,200 sq ft footprint at 6/12 pitch with 10% waste = 1,200 × 1.118 × 1.10 = 1,476 sq ft (14.76 squares)</p>
        </div>
      </section>

      {/* Industry Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">NRCA - National Roofing Contractors Association</p>
              <p>Provides comprehensive guidelines for roofing installation including waste factors (10% simple, 15% complex), shingle application methods, underlayment requirements, and ventilation specifications per IRC/IBC.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM D8257 - Synthetic Roofing Underlayment (2020)</p>
              <p>Standard specification for synthetic roofing underlayment. Covers physical properties, water resistance, UV stability, and performance requirements. Synthetic rolls typically cover 1,000 sq ft vs 400 sq ft for #15 felt.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM D225 - Asphalt Saturated Felt</p>
              <p>Standard specification for felt paper underlayment. #15 felt weighs 34.6 lbs per 4-square roll (400 sq ft). #30 felt weighs 43.2 lbs per 2-square roll (200 sq ft).</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">IRC/IBC Ventilation Requirements</p>
              <p>Building codes require 1 sq ft of net free ventilation area per 150 sq ft of attic space (1:150 ratio). Proper ventilation prevents moisture buildup and extends shingle lifespan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Calculate Your Roofing Materials</h2>
        <p className="text-lg mb-6 opacity-90">
          Get precise estimates for shingles, underlayment, ridge caps, and more with automatic pitch multipliers and waste factors.
        </p>
        <a 
          href="/roofing-calculator"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
        >
          Go to Roofing Calculator →
        </a>
      </div>
    </div>
  );
}