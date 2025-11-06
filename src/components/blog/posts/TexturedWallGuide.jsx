import Link from 'next/link';

export default function TexturedWallGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      
      {/* Critical Facts */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Texture Impact on Paint Coverage</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-2">
            <span className="font-bold text-yellow-600">•</span>
            <span><strong>Smooth drywall:</strong> 350-400 sq ft per gallon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-yellow-600">•</span>
            <span><strong>Light texture:</strong> 300-350 sq ft per gallon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-yellow-600">•</span>
            <span><strong>Heavy knockdown:</strong> 250-300 sq ft per gallon</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="font-bold text-yellow-600">•</span>
            <span><strong>Popcorn ceiling:</strong> 200-250 sq ft per gallon</span>
          </li>
        </ul>
        <p className="text-sm text-gray-700 mt-3 font-semibold">
          Texture increases surface area by 30-50%. Order 30-40% more paint than smooth wall calculations.
        </p>
      </div>

      {/* Texture Types */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Texture Types</h2>

        <div className="space-y-6">
          {/* Orange Peel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Orange Peel</h3>
            <p className="text-gray-700 mb-4">
              Light, bumpy texture resembling orange skin. Most common residential texture.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Coverage Rate:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 300-350 sq ft per gallon</li>
                  <li>• Increase coverage 10-15%</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Best Tools:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 3/8" nap roller (standard)</li>
                  <li>• Standard painting techniques work</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Knockdown */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Knockdown</h3>
            <p className="text-gray-700 mb-4">
              Medium to heavy texture with flattened peaks. Popular in Southwest and newer construction.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Coverage Rate:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Light: 300-325 sq ft per gallon</li>
                  <li>• Heavy: 250-275 sq ft per gallon</li>
                  <li>• Increase coverage 25-35%</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Best Tools:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 1/2" nap roller minimum</li>
                  <li>• 3/4" nap for heavy knockdown</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skip Trowel */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Skip Trowel</h3>
            <p className="text-gray-700 mb-4">
              Irregular, hand-troweled texture with high and low points. Mediterranean/Spanish style.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Coverage Rate:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 225-275 sq ft per gallon</li>
                  <li>• Increase coverage 35-45%</li>
                  <li>• Most paint-intensive texture</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Best Tools:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 3/4" or 1" nap roller</li>
                  <li>• May require spraying for deep crevices</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Popcorn Ceiling */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Popcorn Ceiling</h3>
            <p className="text-gray-700 mb-4">
              Spray-applied acoustic texture. Common in homes built 1970s-1990s.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="font-semibold text-gray-900 mb-2">Coverage Rate:</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• 200-250 sq ft per gallon</li>
                  <li>• Increase coverage 50%+</li>
                  <li>• Absorbs paint like a sponge</li>
                </ul>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 border-2 border-yellow-400">
                <p className="font-semibold text-gray-900 mb-2">⚠️ Asbestos Warning:</p>
                <p className="text-sm text-gray-700">
                  Popcorn texture before 1980 may contain asbestos. Test before disturbing. Do NOT scrape or sand without professional testing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roller Selection */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Choosing the Right Roller Nap</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <p className="text-gray-700 mb-6">
            Nap thickness determines how much paint the roller holds and how well it reaches into texture.
          </p>

          <div className="space-y-4">
            <div className="border-2 border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">1/4" Nap</span>
                <span className="bg-gray-100 px-3 py-1 rounded text-sm">Smooth Only</span>
              </div>
              <p className="text-sm text-gray-700">Smooth drywall, doors, trim. NOT for any texture.</p>
            </div>

            <div className="border-2 border-green-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">3/8" Nap</span>
                <span className="bg-green-100 px-3 py-1 rounded text-sm">Light Texture</span>
              </div>
              <p className="text-sm text-gray-700">Orange peel, light knock, eggshell texture. Standard residential roller.</p>
            </div>

            <div className="border-2 border-blue-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">1/2" Nap</span>
                <span className="bg-blue-100 px-3 py-1 rounded text-sm">Medium Texture</span>
              </div>
              <p className="text-sm text-gray-700">Medium knockdown, slap brush, stomp texture.</p>
            </div>

            <div className="border-2 border-purple-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">3/4" Nap</span>
                <span className="bg-purple-100 px-3 py-1 rounded text-sm">Heavy Texture</span>
              </div>
              <p className="text-sm text-gray-700">Heavy knockdown, skip trowel, very rough textures.</p>
            </div>

            <div className="border-2 border-orange-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-900">1" - 1 1/4" Nap</span>
                <span className="bg-orange-100 px-3 py-1 rounded text-sm">Extreme Texture</span>
              </div>
              <p className="text-sm text-gray-700">Popcorn ceiling, stucco, brick, concrete block.</p>
            </div>
          </div>

          <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4">
            <p className="text-sm text-gray-700">
              <strong>Rule of thumb:</strong> If paint isn't reaching into crevices, go up one nap size. If roller is leaving too much texture/stipple, go down one size.
            </p>
          </div>
        </div>
      </section>

      {/* Technique */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Application Techniques</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Rolling Technique</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-gray-900">Load roller heavily</p>
                  <p className="text-sm text-gray-700">Textured surfaces absorb more paint. Load roller fully - don't wring out excess.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-gray-900">Roll in multiple directions</p>
                  <p className="text-sm text-gray-700">Use "W" pattern, then cross-roll to push paint into crevices. Up, down, then sideways.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-gray-900">Apply moderate pressure</p>
                  <p className="text-sm text-gray-700">Press roller firmly to work paint into texture. Light rolling leaves voids.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-gray-900">Backroll immediately</p>
                  <p className="text-sm text-gray-700">Go over each section while wet to even out coverage and fill voids.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Spraying Texture</h3>
            <p className="text-gray-700 mb-4">
              For heavy textures or large areas, spraying is more efficient than rolling.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-semibold text-green-900 mb-2">Advantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Reaches deep into texture</li>
                  <li>• Faster for large areas</li>
                  <li>• More uniform coverage</li>
                  <li>• Less physical effort</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="font-semibold text-red-900 mb-2">Disadvantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Equipment rental cost</li>
                  <li>• Extensive masking required</li>
                  <li>• Overspray cleanup</li>
                  <li>• Learning curve</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-3">
              <p className="text-sm text-gray-700">
                <strong>Recommendation:</strong> Backroll after spraying texture. Spray applies paint, roller pushes it into crevices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Common Problems */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Problems & Solutions</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-red-600">❌</span>
              Paint Not Covering Texture Valleys
            </h3>
            <div className="ml-8">
              <p className="text-sm text-gray-700 mb-2">
                Paint drying on high points while valleys remain unpainted.
              </p>
              <p className="text-sm text-green-700">
                <strong>Fix:</strong> Use thicker nap roller, load more paint, apply more pressure, and cross-roll in multiple directions.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-red-600">❌</span>
              Roller Creating Additional Texture
            </h3>
            <div className="ml-8">
              <p className="text-sm text-gray-700 mb-2">
                Roller nap too thick, creating stipple pattern on top of existing texture.
              </p>
              <p className="text-sm text-green-700">
                <strong>Fix:</strong> Use thinner nap roller or thinner paint (add small amount of water - max 10%).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-red-600">❌</span>
              Uneven Sheen on Textured Walls
            </h3>
            <div className="ml-8">
              <p className="text-sm text-gray-700 mb-2">
                Some areas glossy, some flat - caused by uneven coverage.
              </p>
              <p className="text-sm text-green-700">
                <strong>Fix:</strong> Apply second coat with consistent pressure. Maintain wet edge. Mix all paint cans together (box).
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
              <span className="text-red-600">❌</span>
              Running Out of Paint Mid-Wall
            </h3>
            <div className="ml-8">
              <p className="text-sm text-gray-700 mb-2">
                Textured surfaces use 30-50% more paint than calculations suggest.
              </p>
              <p className="text-sm text-green-700">
                <strong>Fix:</strong> Always order 40% extra for knockdown, 50% extra for popcorn. Keep spare gallon on hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Chart */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Paint Coverage Chart by Texture</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Texture Type</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Sq Ft/Gallon</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Extra Paint Needed</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Recommended Nap</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Smooth</td>
                <td className="px-6 py-4 text-gray-700">350-400</td>
                <td className="px-6 py-4 text-gray-700">Baseline</td>
                <td className="px-6 py-4 text-gray-700">1/4" - 3/8"</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Orange Peel</td>
                <td className="px-6 py-4 text-gray-700">300-350</td>
                <td className="px-6 py-4 text-gray-700">+15%</td>
                <td className="px-6 py-4 text-gray-700">3/8"</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Light Knockdown</td>
                <td className="px-6 py-4 text-gray-700">300-325</td>
                <td className="px-6 py-4 text-gray-700">+20%</td>
                <td className="px-6 py-4 text-gray-700">1/2"</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Heavy Knockdown</td>
                <td className="px-6 py-4 text-gray-700">250-300</td>
                <td className="px-6 py-4 text-gray-700">+35%</td>
                <td className="px-6 py-4 text-gray-700">3/4"</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Skip Trowel</td>
                <td className="px-6 py-4 text-gray-700">225-275</td>
                <td className="px-6 py-4 text-gray-700">+40%</td>
                <td className="px-6 py-4 text-gray-700">3/4" - 1"</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Popcorn Ceiling</td>
                <td className="px-6 py-4 text-gray-700">200-250</td>
                <td className="px-6 py-4 text-gray-700">+50%</td>
                <td className="px-6 py-4 text-gray-700">1" - 1 1/4"</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-12">
        <h2 className="text-2xl font-bold mb-4">Calculate Paint for Textured Walls</h2>
        <p className="mb-6">
          Our calculator adjusts for texture type and includes proper coverage rates.
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
            <Link href="/blog/paint-sheen-guide" className="text-blue-600 hover:text-blue-800 underline">
              Choosing the Right Paint Sheen
            </Link>
          </li>
          <li>
            <Link href="/blog/measure-room-square-footage" className="text-blue-600 hover:text-blue-800 underline">
              How to Measure Your Room
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