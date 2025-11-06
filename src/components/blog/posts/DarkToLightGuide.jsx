import Link from 'next/link';

export default function DarkToLightGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      

      {/* Quick Facts */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Critical Facts</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span>Expect <strong>3-4 coats minimum</strong> without proper prep</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span>Tinted primer reduces to <strong>1 primer + 2 finish coats</strong></span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span>Gray primer works for most dark-to-light transitions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-blue-600">•</span>
            <span>Coverage is 200-300 sq ft/gal over dark colors (vs 400 sq ft normal)</span>
          </li>
        </ul>
      </div>

      {/* The Problem */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Dark Colors Show Through</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <p className="text-gray-700 mb-4">
            Light paint has low hiding power. Dark pigments are concentrated and visible through multiple coats of light paint.
          </p>

          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Paint Opacity Facts:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• <strong>Light colors:</strong> Titanium dioxide (white pigment) has limited hiding power</li>
              <li>• <strong>Dark colors:</strong> Concentrated pigments show through easily</li>
              <li>• <strong>Result:</strong> Dark base bleeds through thin light coats</li>
              <li>• <strong>Solution:</strong> Block dark color with neutral barrier coat (primer)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* The Professional Method */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional 3-Coat Method</h2>

        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Prep & Clean Walls
                </h3>
                <p className="text-gray-700 mb-4">
                  TSP or deglosser removes oils and flattens sheen for better adhesion.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Wash with TSP solution (1/4 cup per gallon water)</li>
                    <li>• Rinse thoroughly and let dry 24 hours</li>
                    <li>• Light sand if surface is glossy (220-grit)</li>
                    <li>• Fill any holes or cracks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Apply Tinted Primer
                </h3>
                <p className="text-gray-700 mb-4">
                  This is the key step. Use primer tinted to 50% of final color or medium gray.
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border-2 border-blue-200 mb-4">
                  <p className="font-semibold text-gray-900 mb-2">Primer Color Selection:</p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Going to white/cream:</strong> Light gray primer</li>
                    <li>• <strong>Going to beige/tan:</strong> Medium gray primer</li>
                    <li>• <strong>Going to pastel colors:</strong> Tint primer 50% toward final color</li>
                    <li>• <strong>Red walls to light color:</strong> Use gray primer (not white!)</li>
                  </ul>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Application:</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Roll in "W" pattern for even coverage</li>
                    <li>• Don't overwork - one pass is enough</li>
                    <li>• Dry time: 2-4 hours (check label)</li>
                    <li>• Coverage: 250-350 sq ft per gallon over dark colors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  First Finish Coat
                </h3>
                <p className="text-gray-700 mb-4">
                  Apply first coat of finish paint. Coverage will be reduced over dark base.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Use quality paint - cheap paint requires more coats</li>
                    <li>• Coverage: 300-350 sq ft per gallon (first coat over primer)</li>
                    <li>• Dry time: 2-4 hours minimum between coats</li>
                    <li>• Don't panic if you see slight show-through - that's normal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Second Finish Coat
                </h3>
                <p className="text-gray-700 mb-4">
                  Final coat provides uniform color and full coverage.
                </p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Wait full dry time from first coat (usually 4 hours)</li>
                    <li>• Coverage: 350-400 sq ft per gallon (second coat)</li>
                    <li>• This coat should provide full hide</li>
                    <li>• Cure time: 30 days for full durability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Material Requirements */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Material Requirements: 400 sq ft Room</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Wrong Way */}
          <div className="bg-red-50 rounded-xl shadow-lg p-6 border-2 border-red-200">
            <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center gap-2">
              <span>❌</span>
              Without Primer
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-gray-900">Materials Needed:</p>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• 3-4 gallons finish paint</li>
                  <li>• Cost: $135-180 (@ $45/gal)</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-gray-900">Time Required:</p>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• 4 separate painting sessions</li>
                  <li>• 3-4 days total time</li>
                  <li>• More labor hours</li>
                </ul>
              </div>
              <p className="text-sm text-red-700 font-semibold">
                Frustrating process with uncertain results
              </p>
            </div>
          </div>

          {/* Right Way */}
          <div className="bg-green-50 rounded-xl shadow-lg p-6 border-2 border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center gap-2">
              <span>✓</span>
              With Tinted Primer
            </h3>
            <div className="space-y-3">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-gray-900">Materials Needed:</p>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• 1.5 gallons primer ($38)</li>
                  <li>• 2 gallons finish paint ($90)</li>
                  <li>• Total cost: $128</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-gray-900">Time Required:</p>
                <ul className="text-sm text-gray-700 space-y-1 mt-2">
                  <li>• 3 painting sessions</li>
                  <li>• 2-3 days total time</li>
                  <li>• Less labor</li>
                </ul>
              </div>
              <p className="text-sm text-green-700 font-semibold">
                Save money, time, and frustration
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific Color Challenges */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Specific Color Challenges</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-red-700">Red Walls</h3>
            <p className="text-gray-700 mb-3">
              Red is the hardest color to cover. Red pigments are extremely concentrated and bleed through aggressively.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Solution:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Use oil-based primer OR shellac primer for best blocking</li>
                <li>• Water-based primer alone won't fully block red</li>
                <li>• Tint primer medium gray (never white)</li>
                <li>• Expect 1 primer + 2-3 finish coats</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-orange-600">Orange/Rust</h3>
            <p className="text-gray-700 mb-3">
              Orange pigments also bleed readily. Similar challenge to red.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Solution:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Gray-tinted oil-based or shellac primer</li>
                <li>• 2 coats primer may be necessary for deep oranges</li>
                <li>• Then 2 finish coats</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3 text-purple-700">Purple/Navy</h3>
            <p className="text-gray-700 mb-3">
              Dark blues and purples are easier than red but still require proper primer.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Solution:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Standard water-based primer works fine</li>
                <li>• Tint primer light-medium gray</li>
                <li>• 1 primer + 2 finish coats standard</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Dark Gray/Black</h3>
            <p className="text-gray-700 mb-3">
              Surprisingly easier than red. Gray pigments don't bleed as aggressively.
            </p>
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Solution:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Use white or light gray primer</li>
                <li>• Standard water-based primer sufficient</li>
                <li>• 1 primer + 2 finish coats</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
        
        <div className="space-y-4">
          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-3">Using white primer over dark colors</h3>
            <p className="text-gray-700 text-sm">
              White primer provides poor hide over dark colors. Use gray or tinted primer instead.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-3">Skipping primer entirely</h3>
            <p className="text-gray-700 text-sm">
              "Paint and primer in one" cannot block dark colors effectively. You'll need 4+ coats and still may have issues.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-3">Not allowing proper dry time</h3>
            <p className="text-gray-700 text-sm">
              Rushing between coats leads to poor adhesion and peeling. Wait the full recommended dry time.
            </p>
          </div>

          <div className="bg-red-50 border-2 border-red-200 rounded-lg p-6">
            <h3 className="font-bold text-red-900 mb-3">Using cheap paint</h3>
            <p className="text-gray-700 text-sm">
              Low-quality paint has poor hiding power. You'll need extra coats, negating any cost savings.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-12">
        <h2 className="text-2xl font-bold mb-4">Calculate Paint Requirements</h2>
        <p className="mb-6">
          Our calculator factors in reduced coverage rates for dark-to-light transitions and includes proper primer amounts.
        </p>
        <Link 
          href="/interior-paint-calculator"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Calculate Materials Needed →
        </Link>
      </div>

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