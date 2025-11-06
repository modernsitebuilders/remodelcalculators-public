import Link from 'next/link';

export default function PaintSheenGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      

      {/* Quick Reference Chart */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Quick Selection Guide</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Flat/Matte:</strong> Ceilings, low-traffic rooms</li>
          <li><strong>Eggshell:</strong> Living rooms, bedrooms, dining rooms</li>
          <li><strong>Satin:</strong> High-traffic areas, hallways, kids' rooms</li>
          <li><strong>Semi-Gloss:</strong> Bathrooms, kitchens, trim, doors</li>
          <li><strong>Gloss:</strong> Cabinets, furniture, exterior doors</li>
        </ul>
      </div>

      {/* Complete Breakdown */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Paint Sheen Comparison</h2>

        <div className="space-y-6">
          {/* Flat/Matte */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Flat / Matte (0-10% gloss)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-semibold text-green-700 mb-2">Advantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Hides wall imperfections best</li>
                  <li>• Non-reflective - no glare</li>
                  <li>• Touch-ups blend invisibly</li>
                  <li>• Rich, velvety appearance</li>
                  <li>• Best color depth</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 mb-2">Disadvantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Not washable - marks permanent</li>
                  <li>• Scuffs and stains easily</li>
                  <li>• Requires repainting vs. cleaning</li>
                  <li>• Not moisture-resistant</li>
                  <li>• Shortest durability</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Best Applications:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Ceilings (industry standard)</li>
                <li>• Adult bedrooms with minimal traffic</li>
                <li>• Formal living rooms rarely used</li>
                <li>• Wall repairs/touch-ups (blends best)</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                <strong>Avoid:</strong> Bathrooms, kitchens, hallways, kids' rooms, high-traffic areas
              </p>
            </div>
          </div>

          {/* Eggshell */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Eggshell (10-25% gloss)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-semibold text-green-700 mb-2">Advantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Slightly washable</li>
                  <li>• Hides imperfections well</li>
                  <li>• Low sheen - minimal glare</li>
                  <li>• Good for most living spaces</li>
                  <li>• Better durability than flat</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 mb-2">Disadvantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Limited scrubbing tolerance</li>
                  <li>• Touch-ups more visible than flat</li>
                  <li>• Not ideal for moisture areas</li>
                  <li>• Shows texture on rough walls</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Best Applications:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Living rooms (most popular choice)</li>
                <li>• Adult bedrooms</li>
                <li>• Dining rooms</li>
                <li>• Home offices</li>
                <li>• Low-traffic hallways</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                <strong>Industry Note:</strong> Most contractors default to eggshell for walls in residential applications
              </p>
            </div>
          </div>

          {/* Satin */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Satin (25-35% gloss)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-semibold text-green-700 mb-2">Advantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Washable and scrubbable</li>
                  <li>• Resists moisture and mildew</li>
                  <li>• Good durability</li>
                  <li>• Subtle sheen (not too glossy)</li>
                  <li>• Easy to maintain</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 mb-2">Disadvantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Shows wall imperfections</li>
                  <li>• Touch-ups very visible</li>
                  <li>• Slight sheen may look uneven</li>
                  <li>• Reflects light (can be distracting)</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Best Applications:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• High-traffic hallways</li>
                <li>• Kids' bedrooms and playrooms</li>
                <li>• Kitchens (walls, not cabinets)</li>
                <li>• Laundry rooms</li>
                <li>• Staircases</li>
                <li>• Family rooms with kids/pets</li>
              </ul>
            </div>
          </div>

          {/* Semi-Gloss */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Semi-Gloss (35-70% gloss)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-semibold text-green-700 mb-2">Advantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Highly washable and durable</li>
                  <li>• Excellent moisture resistance</li>
                  <li>• Resists mildew</li>
                  <li>• Easy to clean - wipes down easily</li>
                  <li>• Long-lasting finish</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 mb-2">Disadvantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Shows every wall imperfection</li>
                  <li>• Touch-ups nearly impossible</li>
                  <li>• Reflective - may cause glare</li>
                  <li>• Requires excellent prep work</li>
                  <li>• Can look "plasticky" on walls</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Best Applications:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Bathrooms (moisture resistance)</li>
                <li>• Kitchen cabinets</li>
                <li>• Interior trim and molding</li>
                <li>• Interior doors</li>
                <li>• Window frames</li>
                <li>• Baseboards</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                <strong>Pro Tip:</strong> Semi-gloss on trim with eggshell/satin on walls is the most common combo
              </p>
            </div>
          </div>

          {/* Gloss */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              High Gloss (70-90% gloss)
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div>
                <p className="font-semibold text-green-700 mb-2">Advantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Maximum durability</li>
                  <li>• Extremely washable</li>
                  <li>• Hardest, most protective finish</li>
                  <li>• Mirror-like appearance</li>
                  <li>• Excellent moisture resistance</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-700 mb-2">Disadvantages</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Magnifies every imperfection</li>
                  <li>• Very reflective (shows finger prints)</li>
                  <li>• Difficult application</li>
                  <li>• Requires perfect surface prep</li>
                  <li>• Touch-ups impossible</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">Best Applications:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Cabinet doors and drawers</li>
                <li>• Furniture</li>
                <li>• Exterior doors</li>
                <li>• Railings</li>
                <li>• Metal surfaces</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                <strong>Rarely Used:</strong> Interior walls - too reflective and shows every imperfection
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Room by Room Guide */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Room-by-Room Recommendations</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Location</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Walls</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Trim/Doors</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Ceiling</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Living Room</td>
                <td className="px-6 py-4 text-gray-700">Eggshell</td>
                <td className="px-6 py-4 text-gray-700">Semi-gloss</td>
                <td className="px-6 py-4 text-gray-700">Flat</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Bedroom</td>
                <td className="px-6 py-4 text-gray-700">Eggshell/Flat</td>
                <td className="px-6 py-4 text-gray-700">Semi-gloss</td>
                <td className="px-6 py-4 text-gray-700">Flat</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Kids' Room</td>
                <td className="px-6 py-4 text-gray-700">Satin</td>
                <td className="px-6 py-4 text-gray-700">Semi-gloss</td>
                <td className="px-6 py-4 text-gray-700">Flat</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Hallway</td>
                <td className="px-6 py-4 text-gray-700">Satin</td>
                <td className="px-6 py-4 text-gray-700">Semi-gloss</td>
                <td className="px-6 py-4 text-gray-700">Flat</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Kitchen</td>
                <td className="px-6 py-4 text-gray-700">Satin/Semi-gloss</td>
                <td className="px-6 py-4 text-gray-700">Semi-gloss</td>
                <td className="px-6 py-4 text-gray-700">Satin</td>
              </tr>
              <tr>
                <td className="px-6 py-4 font-semibold text-gray-900">Bathroom</td>
                <td className="px-6 py-4 text-gray-700">Satin/Semi-gloss</td>
                <td className="px-6 py-4 text-gray-700">Semi-gloss</td>
                <td className="px-6 py-4 text-gray-700">Satin</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Common Questions */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Questions</h2>
        
        <div className="space-y-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">Can I mix sheens in the same room?</h3>
            <p className="text-gray-700 text-sm">
              Yes - standard practice is eggshell/satin on walls with semi-gloss on trim. This creates subtle contrast and protects high-touch areas.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">Should ceilings always be flat?</h3>
            <p className="text-gray-700 text-sm">
              Generally yes. Flat hides ceiling imperfections and doesn't create glare from overhead lighting. Exception: high-moisture areas like bathrooms may use satin.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">Does higher sheen cost more?</h3>
            <p className="text-gray-700 text-sm">
              Usually yes, but minimal difference ($2-5 per gallon). Higher sheens contain more resin which increases durability but also cost slightly.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="font-bold text-gray-900 mb-2">Can I change sheen when repainting?</h3>
            <p className="text-gray-700 text-sm">
              Yes, but going from gloss to flat requires light sanding (220-grit) or liquid deglosser first. Flat to gloss doesn't require prep.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-lg p-8 text-white mb-12">
        <h2 className="text-2xl font-bold mb-4">Calculate Your Paint Needs</h2>
        <p className="mb-6">
          Select your sheen and calculate materials needed for your project.
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
            <Link href="/blog/textured-wall-painting" className="text-blue-600 hover:text-blue-800 underline">
              Textured Wall Painting Tips
            </Link>
          </li>
          <li>
            <Link href="/blog/when-you-need-primer" className="text-blue-600 hover:text-blue-800 underline">
              When You Actually Need Primer
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