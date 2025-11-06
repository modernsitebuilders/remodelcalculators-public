import Link from 'next/link';

export default function PrimerGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      

      {/* Quick Decision Tree */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Do I Need Primer?</h2>
        <div className="space-y-3 text-gray-700">
          <p><strong className="text-blue-600">YES - Always prime:</strong> New drywall, bare wood, stains, or dramatic color changes</p>
          <p><strong className="text-green-600">MAYBE - Prime if:</strong> Patched areas, glossy surfaces, or questionable existing paint</p>
          <p><strong className="text-gray-600">NO - Skip primer:</strong> Good condition painted walls, same color/sheen, quality paint-and-primer combo</p>
        </div>
      </div>

      {/* When Primer is Required */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Situations Requiring Primer</h2>

        <div className="space-y-6">
          {/* New Drywall */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">REQUIRED</span>
              New Drywall
            </h3>
            <p className="text-gray-700 mb-4">
              Bare drywall and joint compound are highly porous and absorb paint unevenly. Always prime new drywall.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Use:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• PVA (polyvinyl acetate) drywall primer</li>
                <li>• Coverage: 300-400 sq ft per gallon</li>
                <li>• Dry time: 2-4 hours</li>
              </ul>
            </div>
          </div>

          {/* Bare Wood */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">REQUIRED</span>
              Bare Wood
            </h3>
            <p className="text-gray-700 mb-4">
              Wood tannins bleed through paint. Knots and sap require blocking. Always prime bare wood.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Use:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Oil-based primer for knots and resinous wood</li>
                <li>• Shellac-based primer for severe stains</li>
                <li>• Coverage: 200-300 sq ft per gallon on raw wood</li>
              </ul>
            </div>
          </div>

          {/* Stains & Water Damage */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">REQUIRED</span>
              Stains & Water Damage
            </h3>
            <p className="text-gray-700 mb-4">
              Water stains, smoke damage, crayon, permanent marker - these bleed through regular paint.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Use:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Shellac-based stain blocker (best performance)</li>
                <li>• Oil-based stain blocker (good alternative)</li>
                <li>• 2 coats may be needed for severe stains</li>
              </ul>
            </div>
          </div>

          {/* Dark to Light */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="bg-red-600 text-white px-3 py-1 rounded text-sm">REQUIRED</span>
              Dramatic Color Changes
            </h3>
            <p className="text-gray-700 mb-4">
              Going from dark colors to light (or vice versa) requires tinted primer to minimize coats.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Rule of Thumb:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Dark to light: Tint primer to 50% of final color</li>
                <li>• Light to dark: Use gray-tinted primer</li>
                <li>• Saves 1-2 coats of expensive finish paint</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* When Primer is Optional */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">When Primer Might Not Be Needed</h2>

        <div className="space-y-6">
          {/* Repainted Walls */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="bg-green-600 text-white px-3 py-1 rounded text-sm">OPTIONAL</span>
              Previously Painted Walls in Good Condition
            </h3>
            <p className="text-gray-700 mb-4">
              If existing paint is sound, similar color, and similar sheen - primer is optional with quality paint.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Requirements:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Existing paint not peeling or chalking</li>
                <li>• No stains or repairs</li>
                <li>• Similar color (within 2-3 shades)</li>
                <li>• Using premium "paint and primer in one"</li>
              </ul>
            </div>
          </div>

          {/* Minor Repairs */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-3">
              <span className="bg-yellow-600 text-white px-3 py-1 rounded text-sm">SPOT-PRIME</span>
              Patched or Repaired Areas
            </h3>
            <p className="text-gray-700 mb-4">
              Spackle and joint compound are porous - prime patches even if not priming entire wall.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Spot-Priming Process:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Prime only repaired areas with PVA primer</li>
                <li>• Let dry completely (1-2 hours)</li>
                <li>• Then paint entire wall with finish coat</li>
                <li>• Prevents "flashing" (dull spots)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Paint and Primer in One */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">The Truth About "Paint & Primer in One"</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-700 mb-4">
            "Paint and primer in one" products are just thicker paint. They work in limited situations.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-green-50 rounded-lg p-4 border-2 border-green-200">
              <h3 className="font-bold text-green-900 mb-2">When They Work</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Repainting similar colors</li>
                <li>• Previously painted, sound surfaces</li>
                <li>• Minor touch-ups</li>
                <li>• Good condition walls</li>
              </ul>
            </div>

            <div className="bg-red-50 rounded-lg p-4 border-2 border-red-200">
              <h3 className="font-bold text-red-900 mb-2">When They Don't</h3>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• New drywall</li>
                <li>• Bare wood</li>
                <li>• Stains or water damage</li>
                <li>• Dramatic color changes</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-sm text-gray-700">
              <strong>Industry Reality:</strong> "Paint and primer in one" is primarily a marketing term. These are simply higher-solids paints. They can't block stains, seal porous surfaces, or provide adhesion like dedicated primers.
            </p>
          </div>
        </div>
      </section>

      {/* Primer Types Reference */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Primer Types & Applications</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Primer Type</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Best For</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Dry Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900">PVA Drywall Primer</div>
                  <div className="text-sm text-gray-600">Water-based</div>
                </td>
                <td className="px-6 py-4 text-gray-700 text-sm">New drywall, joint compound, plaster</td>
                <td className="px-6 py-4 text-gray-700">2-4 hours</td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900">Oil-Based Primer</div>
                  <div className="text-sm text-gray-600">Alkyd/Oil</div>
                </td>
                <td className="px-6 py-4 text-gray-700 text-sm">Bare wood, stains, glossy surfaces</td>
                <td className="px-6 py-4 text-gray-700">6-8 hours</td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900">Shellac Primer</div>
                  <div className="text-sm text-gray-600">Alcohol-based</div>
                </td>
                <td className="px-6 py-4 text-gray-700 text-sm">Severe stains, smoke, water damage</td>
                <td className="px-6 py-4 text-gray-700">45-60 minutes</td>
              </tr>
              <tr>
                <td className="px-6 py-4">
                  <div className="font-semibold text-gray-900">Bonding Primer</div>
                  <div className="text-sm text-gray-600">Water-based</div>
                </td>
                <td className="px-6 py-4 text-gray-700 text-sm">Glossy surfaces, tile, laminate</td>
                <td className="px-6 py-4 text-gray-700">2-4 hours</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Cost Analysis */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Is Primer Worth the Cost?</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Scenario: Painting 400 sq ft Room</h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Without Primer (Dark to Light)</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 3 coats of premium paint needed</li>
                    <li>• 3 gallons @ $45 each = $135</li>
                    <li>• Total labor: 6-7 hours</li>
                  </ul>
                </div>

                <div className="bg-green-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">With Tinted Primer</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 1 coat primer + 2 coats paint</li>
                    <li>• 1 gal primer ($25) + 2 gal paint ($90) = $115</li>
                    <li>• Total labor: 6-7 hours</li>
                    <li><strong className="text-green-700">Savings: $20 + better coverage</strong></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Bottom Line</h3>
                <p className="text-gray-700 text-sm mb-4">
                  Primer costs less per gallon than finish paint. When needed, it saves money by reducing the number of finish coats required.
                </p>
                <div className="bg-white rounded p-3 text-center">
                  <p className="text-2xl font-bold text-blue-600">Use primer</p>
                  <p className="text-sm text-gray-600">when specifications call for it</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-12">
        <h2 className="text-2xl font-bold mb-4">Calculate Your Paint & Primer Needs</h2>
        <p className="mb-6">
          Our calculator includes primer requirements based on your surface type and color change.
        </p>
        <Link 
          href="/interior-paint-calculator"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Go to Paint Calculator →
        </Link>
      </div>

      {/* Related Guides */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <ul className="space-y-2">
          <li>
            <Link href="/blog/dark-to-light-painting" className="text-blue-600 hover:text-blue-800 underline">
              Dark to Light Color Changes
            </Link>
          </li>
          <li>
            <Link href="/blog/measure-room-square-footage" className="text-blue-600 hover:text-blue-800 underline">
              How to Measure Your Room & Calculate Square Footage
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