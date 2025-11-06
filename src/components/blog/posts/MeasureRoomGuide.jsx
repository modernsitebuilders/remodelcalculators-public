import Link from 'next/link';

export default function MeasureRoomGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      

      {/* Quick Reference */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Reference</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span><strong>Wall area:</strong> Length × Height for each wall</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span><strong>Floor area:</strong> Length × Width</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span><strong>Standard ceiling:</strong> 8 feet (96 inches)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span><strong>Always measure in inches</strong> for precision, then convert</span>
          </li>
        </ul>
      </div>

      {/* Tools Needed */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Tools You'll Need</h2>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-3">Required</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• 25-foot tape measure (minimum)</li>
              <li>• Pencil and paper or phone calculator</li>
              <li>• Ladder (for high measurements)</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="font-bold text-gray-900 mb-3">Helpful</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Laser measure (for accuracy)</li>
              <li>• Level (to check for plumb walls)</li>
              <li>• Camera (to document room layout)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Step by Step */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Step-by-Step Measurement Process</h2>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">1</span>
              Measure Wall Length
            </h3>
            <p className="text-gray-700 mb-4">
              Measure along the baseboard from corner to corner. Hold tape measure level.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
  <p className="font-semibold text-gray-900 mb-2">Tips:</p>
  <ul className="space-y-2 text-gray-700 text-sm">
    <li>• Don't measure diagonally</li>
    <li>• Measure at any height - wall length is the same top to bottom</li>
    <li>• Measure each wall separately - rooms are rarely perfect rectangles</li>
  </ul>
</div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">2</span>
              Measure Wall Height
            </h3>
            <p className="text-gray-700 mb-4">
              Measure from floor to ceiling. Standard residential height is 96 inches (8 feet).
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Common Heights:</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Standard: 96 inches (8 feet)</li>
                <li>• Newer homes: 108 inches (9 feet)</li>
                <li>• Vaulted: Varies - measure at multiple points</li>
              </ul>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">3</span>
              Calculate Wall Area
            </h3>
            <p className="text-gray-700 mb-4">
              Multiply length by height for each wall. Convert inches to feet first (divide by 12).
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200">
              <p className="font-bold text-gray-900 mb-2">Formula:</p>
              <code className="block bg-white p-3 rounded font-mono text-sm">
                Wall Area (sq ft) = (Length in inches ÷ 12) × (Height in inches ÷ 12)
              </code>
              <p className="text-sm text-gray-700 mt-3"><strong>Example:</strong> Wall is 144" long × 96" high</p>
              <code className="block bg-white p-3 rounded font-mono text-sm mt-2">
                (144 ÷ 12) × (96 ÷ 12) = 12 ft × 8 ft = 96 sq ft
              </code>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">4</span>
              Subtract Openings
            </h3>
            <p className="text-gray-700 mb-4">
              Measure doors and windows to subtract from total wall area.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-3">Standard Sizes:</p>
              <div className="grid md:grid-cols-2 gap-3 text-sm">
                <div>
                  <p className="font-bold text-gray-800 mb-1">Doors</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Standard interior: 80" × 30" = 16.7 sq ft</li>
                    <li>• Standard exterior: 80" × 36" = 20 sq ft</li>
                  </ul>
                </div>
                <div>
                  <p className="font-bold text-gray-800 mb-1">Windows</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Small: 24" × 36" = 6 sq ft</li>
                    <li>• Standard: 36" × 48" = 12 sq ft</li>
                    <li>• Large: 48" × 60" = 20 sq ft</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Area */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Calculating Floor Area</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-700 mb-4">
            Floor area is simpler - just length times width. For irregular rooms, break into rectangles.
          </p>
          
          <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 mb-6">
            <p className="font-bold text-gray-900 mb-2">Formula:</p>
            <code className="block bg-white p-3 rounded font-mono text-sm">
              Floor Area (sq ft) = Length (ft) × Width (ft)
            </code>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-gray-700">
              <strong>Pro Tip:</strong> For L-shaped rooms, break the room into two rectangles, calculate each separately, then add them together.
            </p>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Measurement Mistakes</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-3 flex items-center gap-2">
              <span>❌</span> Don't Do This
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Measuring diagonally instead of along walls</li>
              <li>• Forgetting to subtract doors and windows</li>
              <li>• Using floor area for paint calculations</li>
              <li>• Rounding measurements too early</li>
              <li>• Mixing feet and inches without converting</li>
            </ul>
          </div>
          
          <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
            <h3 className="font-bold text-green-900 mb-3 flex items-center gap-2">
              <span>✓</span> Do This Instead
            </h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Measure each wall at baseboard level</li>
              <li>• Measure and subtract all openings</li>
              <li>• Calculate wall area for paint needs</li>
              <li>• Keep measurements in inches until final calculation</li>
              <li>• Convert everything to feet before multiplying</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Calculator Recommendation */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-12">
        <h2 className="text-2xl font-bold mb-4">Skip the Math - Use Our Calculator</h2>
        <p className="mb-6">
          Input your measurements and let our calculator handle the formulas. Includes automatic waste factors and material quantities.
        </p>
        <Link 
          href="/interior-paint-calculator"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Go to Interior Paint Calculator →
        </Link>
      </div>

      {/* Quick Reference Chart */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Reference: Room Sizes</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Room Type</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Typical Size</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Wall Area (approx)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 text-gray-700">Bedroom</td>
                <td className="px-6 py-4 text-gray-700">12' × 12'</td>
                <td className="px-6 py-4 text-gray-700">384 sq ft</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700">Living Room</td>
                <td className="px-6 py-4 text-gray-700">16' × 20'</td>
                <td className="px-6 py-4 text-gray-700">576 sq ft</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700">Bathroom</td>
                <td className="px-6 py-4 text-gray-700">8' × 10'</td>
                <td className="px-6 py-4 text-gray-700">288 sq ft</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-gray-700">Kitchen</td>
                <td className="px-6 py-4 text-gray-700">10' × 12'</td>
                <td className="px-6 py-4 text-gray-700">352 sq ft</td>
              </tr>
            </tbody>
          </table>
          <div className="bg-gray-50 px-6 py-3 text-sm text-gray-600">
            *Assumes 8-foot ceilings and subtracts 20% for openings
          </div>
        </div>
      </section>

      {/* Related Guides */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/when-you-need-primer" className="text-blue-600 hover:text-blue-800 underline">
              When You Actually Need Primer
            </Link>
          </li>
          <li>
            <Link href="/blog/paint-sheen-guide" className="text-blue-600 hover:text-blue-800 underline">
              Choosing the Right Paint Sheen
            </Link>
          </li>
          <li>
            <Link href="/blog/interior-painting-guide" className="text-blue-600 hover:text-blue-800 underline">
              Complete Interior Painting Guide
            </Link>
          </li>
        </ul>
      </div>
    </article>
  );
}