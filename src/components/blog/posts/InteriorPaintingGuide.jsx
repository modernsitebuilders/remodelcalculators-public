import Link from 'next/link';

export default function InteriorPaintingGuide() {
  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      
      {/* Project Timeline */}
      <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Typical Project Timeline</h2>
        <div className="space-y-2 text-gray-700">
          <p><strong>Day 1:</strong> Prep (4-6 hours) - Cleaning, taping, patching, priming</p>
          <p><strong>Day 2:</strong> First coat (3-4 hours) - Cutting in and rolling</p>
          <p><strong>Day 3:</strong> Second coat (3-4 hours) - Final coat and cleanup</p>
          <p className="text-sm text-blue-700 mt-3">
            <strong>Total:</strong> 2-3 days for average room (200 sq ft walls). Add 1 day for dark-to-light changes.
          </p>
        </div>
      </div>

      {/* Phase 1: Planning */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 1: Planning & Materials</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">1</span>
              Calculate Materials
            </h3>
            <p className="text-gray-700 mb-4">
              Measure room dimensions and calculate paint requirements before shopping.
            </p>
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="font-semibold text-gray-900 mb-2">What You Need:</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• Wall area (length × height of each wall)</li>
                <li>• Subtract doors and windows</li>
                <li>• Account for texture (+30-40% if textured)</li>
                <li>• Add 10% waste factor</li>
                <li>• <Link href="/interior-paint-calculator" className="text-blue-600 underline">Use our calculator →</Link></li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">2</span>
              Select Paint & Sheen
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded p-4">
                <p className="font-semibold text-gray-900 mb-2">Living Areas</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Walls: Eggshell or satin</li>
                  <li>• Trim: Semi-gloss</li>
                  <li>• Ceiling: Flat</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded p-4">
                <p className="font-semibold text-gray-900 mb-2">Bathrooms/Kitchens</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Walls: Satin or semi-gloss</li>
                  <li>• Trim: Semi-gloss</li>
                  <li>• Ceiling: Satin (moisture areas)</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              <Link href="/blog/paint-sheen-guide" className="text-blue-600 underline">Complete sheen guide →</Link>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">3</span>
              Determine Primer Needs
            </h3>
            <div className="space-y-3">
              <div className="bg-red-50 border-l-4 border-red-600 p-3">
                <p className="text-sm text-gray-900 font-semibold mb-1">Always Prime:</p>
                <p className="text-sm text-gray-700">New drywall, bare wood, stains, dark-to-light color changes</p>
              </div>
              <div className="bg-yellow-50 border-l-4 border-yellow-600 p-3">
                <p className="text-sm text-gray-900 font-semibold mb-1">Spot-Prime:</p>
                <p className="text-sm text-gray-700">Patched areas, repairs (prevents dull spots)</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-3">
                <p className="text-sm text-gray-900 font-semibold mb-1">Skip Primer:</p>
                <p className="text-sm text-gray-700">Previously painted walls in good condition, similar color</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-3">
              <Link href="/blog/when-you-need-primer" className="text-blue-600 underline">Complete primer guide →</Link>
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-lg">4</span>
              Gather Tools & Supplies
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded p-4">
                <p className="font-semibold text-gray-900 mb-3">Essential Tools:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✓ 9" roller frame & covers</li>
                  <li>✓ Paint tray & liner</li>
                  <li>✓ 2" angled brush</li>
                  <li>✓ Painter's tape (blue or green)</li>
                  <li>✓ Drop cloths</li>
                  <li>✓ Ladder/step stool</li>
                  <li>✓ Spackle & putty knife</li>
                  <li>✓ Sandpaper (220-grit)</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded p-4">
                <p className="font-semibold text-gray-900 mb-3">Helpful Extras:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Extension pole for roller</li>
                  <li>• Edger tool (for beginners)</li>
                  <li>• Paint can opener</li>
                  <li>• Stir sticks</li>
                  <li>• Rags & cleaning supplies</li>
                  <li>• TSP cleaner</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 2: Prep */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 2: Surface Preparation</h2>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
          <p className="text-gray-900 font-semibold mb-2">Critical: Prep is 70% of a Quality Paint Job</p>
          <p className="text-gray-700 text-sm">
            Professional painters spend more time on prep than actual painting. Rushing prep guarantees poor results.
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: Clear the Room</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• Remove all furniture if possible</li>
              <li>• Move remaining furniture to center and cover with plastic</li>
              <li>• Remove outlet covers and switch plates</li>
              <li>• Take down curtains, rods, pictures, nails</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: Repair & Patch</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Fill Holes & Cracks</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Nail holes: Spackle or lightweight compound</li>
                  <li>• Cracks: Joint compound</li>
                  <li>• Large holes: Patch kit + joint compound</li>
                  <li>• Let dry completely (2-4 hours minimum)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Sand Repairs</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• 220-grit sandpaper for spackle/compound</li>
                  <li>• Sand until flush with wall surface</li>
                  <li>• Wipe dust with damp cloth</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Step 3: Clean Walls</h3>
            <p className="text-gray-700 mb-3">
              Paint adheres poorly to dirty, greasy surfaces. Clean walls ensure proper adhesion.
            </p>
            <div className="bg-gray-50 rounded p-4">
              <p className="font-semibold text-gray-900 mb-2">Cleaning Process:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>1. Mix TSP solution (1/4 cup per gallon warm water)</li>
                <li>2. Wash walls from bottom to top (prevents streaking)</li>
                <li>3. Rinse with clean water</li>
                <li>4. Let dry 24 hours before painting</li>
              </ul>
              <p className="text-xs text-gray-600 mt-3">
                <strong>Alternative:</strong> For lightly soiled walls, use mild dish soap solution or deglosser.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Step 4: Tape & Protect</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Taping Technique:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Use painter's tape (blue or green)</li>
                  <li>• Press edges firmly to prevent bleed-under</li>
                  <li>• Tape baseboards, trim, ceiling line</li>
                  <li>• Don't leave tape on more than 7 days</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Protection:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Canvas drop cloths (not plastic - slippery)</li>
                  <li>• Plastic sheeting for furniture</li>
                  <li>• Cover floors completely</li>
                  <li>• Tape plastic over doorways to contain dust</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 3: Priming */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 3: Priming (If Needed)</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Primer Application</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>1. Tint the primer</strong> - Ask paint store to tint to 50% of final color (for dark-to-light) or gray</p>
              <p><strong>2. Cut in edges</strong> - Use 2" brush on corners, ceiling line, trim (3" band)</p>
              <p><strong>3. Roll walls</strong> - Use appropriate nap roller for texture. Work in 4'×4' sections</p>
              <p><strong>4. One coat sufficient</strong> - Unless covering severe stains (may need 2 coats)</p>
              <p><strong>5. Dry time</strong> - Wait 2-4 hours minimum before topcoat (check label)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 4: Painting */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 4: Painting</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Paint Application Sequence</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Ceiling First</p>
                  <p className="text-sm text-gray-700">Paint ceiling before walls. Drips and overspray land on unpainted walls.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Walls Second</p>
                  <p className="text-sm text-gray-700">Do all wall coats before touching trim. Easier to tape over dried wall paint.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div className="flex-1">
                  <p className="font-semibold text-gray-900 mb-1">Trim Last</p>
                  <p className="text-sm text-gray-700">Baseboards, door frames, window trim. Use semi-gloss. Remove tape after trim dries.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Painting Technique</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Cutting In (Brush Work)</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Load brush 1/3 of bristle length</li>
                  <li>• Start 2-3 inches from edge, brush toward edge</li>
                  <li>• Create 3-4 inch wide band</li>
                  <li>• Work in sections - keep wet edge</li>
                  <li>• Cut in entire room before rolling (for consistency)</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-gray-900 mb-2">Rolling Technique</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Load roller evenly - don't oversaturate</li>
                  <li>• Roll in "W" pattern for even distribution</li>
                  <li>• Work in 4' × 4' sections</li>
                  <li>• Roll into wet cut-in edges (blend)</li>
                  <li>• Don't press too hard - causes drips</li>
                  <li>• Finish each section before moving to next</li>
                </ul>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3">
                <p className="text-sm text-gray-700">
                  <strong>Pro Tip:</strong> Maintain a "wet edge" - always roll into area you just painted while it's still wet. Prevents lap marks.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Coat Timing & Requirements</h3>
            
            <div className="bg-gray-50 rounded p-4">
              <div className="space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-900">Dry time between coats:</span>
                  <span className="text-gray-700">2-4 hours (check label)</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-900">Number of coats needed:</span>
                  <span className="text-gray-700">2 coats standard</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-900">Full cure time:</span>
                  <span className="text-gray-700">30 days</span>
                </div>
                <div className="flex justify-between items-start">
                  <span className="font-semibold text-gray-900">Light use:</span>
                  <span className="text-gray-700">24 hours after final coat</span>
                </div>
              </div>
            </div>

            <div className="mt-4 bg-blue-50 border-l-4 border-blue-600 p-3">
              <p className="text-sm text-gray-700">
                <strong>Second Coat Decision:</strong> If primer-tinted properly and using quality paint, 2 coats should suffice. 3 coats needed if skipped primer or covering very dark colors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Phase 5: Finishing */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Phase 5: Finishing & Cleanup</h2>

        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Removing Tape Properly</h3>
            <div className="bg-red-50 border-2 border-red-200 rounded-lg p-4 mb-4">
              <p className="font-semibold text-red-900 mb-2">Critical Timing!</p>
              <p className="text-sm text-gray-700">
                Remove tape when paint is dry to touch but not fully cured (1-2 hours after final coat). Too early = smears. Too late = paint peels off with tape.
              </p>
            </div>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• Pull tape at 45-degree angle</p>
              <p>• Pull slowly and steadily</p>
              <p>• Use razor blade to score if paint has dried</p>
              <p>• Touch up any gaps with small brush</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Final Inspection & Touch-ups</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Inspect walls in natural daylight - check for missed spots</li>
              <li>• Look at walls from multiple angles - oblique light shows defects</li>
              <li>• Touch up any holidays (missed spots) with roller or brush</li>
              <li>• Check corners and edges carefully</li>
              <li>• Verify outlet covers fit properly before reinstalling</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cleanup & Storage</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Cleanup:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Wash brushes/rollers immediately</li>
                  <li>• Soap & water for latex paint</li>
                  <li>• Mineral spirits for oil-based</li>
                  <li>• Remove drop cloths carefully</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Paint Storage:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Seal can tightly (hammer rim flat)</li>
                  <li>• Store upside down (creates seal)</li>
                  <li>• Label with room name & date</li>
                  <li>• Keep for future touch-ups</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Common Mistakes to Avoid</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h3 className="font-bold text-red-900 text-lg">❌ Don't Do This:</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-red-50 border-l-4 border-red-600 p-3">
                <p className="font-semibold mb-1">Skipping prep work</p>
                <p className="text-gray-700">Poor prep = poor results. Always.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-3">
                <p className="font-semibold mb-1">Using cheap paint</p>
                <p className="text-gray-700">Requires 3-4 coats. Buy quality paint.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-3">
                <p className="font-semibold mb-1">Not enough paint</p>
                <p className="text-gray-700">Running out mid-project causes lap marks.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-3">
                <p className="font-semibold mb-1">Wrong roller nap</p>
                <p className="text-gray-700">Smooth roller on texture leaves voids.</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 p-3">
                <p className="font-semibold mb-1">Painting too fast</p>
                <p className="text-gray-700">Rushing causes drips, runs, and holidays.</p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-green-900 text-lg">✓ Do This Instead:</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-green-50 border-l-4 border-green-600 p-3">
                <p className="font-semibold mb-1">Spend time on prep</p>
                <p className="text-gray-700">70% prep, 30% painting = professional results.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-3">
                <p className="font-semibold mb-1">Invest in quality paint</p>
                <p className="text-gray-700">2 coats quality greater than 4 coats cheap.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-3">
                <p className="font-semibold mb-1">Calculate accurately</p>
                <p className="text-gray-700">Use calculator. Add 10% waste factor.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-3">
                <p className="font-semibold mb-1">Match roller to texture</p>
                <p className="text-gray-700">Thicker texture = thicker nap.</p>
              </div>
              <div className="bg-green-50 border-l-4 border-green-600 p-3">
                <p className="font-semibold mb-1">Work methodically</p>
                <p className="text-gray-700">Slow, consistent strokes. Maintain wet edge.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Cost Estimate: 12' × 14' Bedroom</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-700">Paint (3 gallons @ $45):</span>
              <span className="font-semibold">$135</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-700">Primer (1 gallon):</span>
              <span className="font-semibold">$25</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b">
              <span className="text-gray-700">Supplies (tape, brushes, rollers):</span>
              <span className="font-semibold">$40</span>
            </div>
            <div className="flex justify-between items-center pt-3 border-t-2 border-gray-300">
              <span className="font-bold text-gray-900">Total Materials:</span>
              <span className="font-bold text-gray-900 text-xl">$200</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Professional painter: $400-600 for same room (labor + materials). DIY saves $200-400.
          </p>
        </div>
      </section>

      {/* Related Guides */}
      <div className="bg-gray-50 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Guides</h2>
        <div className="grid md:grid-cols-2 gap-3">
          <Link href="/blog/measure-room-square-footage" className="text-blue-600 hover:text-blue-800 underline text-sm">
            How to Measure Your Room
          </Link>
          <Link href="/blog/when-you-need-primer" className="text-blue-600 hover:text-blue-800 underline text-sm">
            When You Actually Need Primer
          </Link>
          <Link href="/blog/dark-to-light-painting" className="text-blue-600 hover:text-blue-800 underline text-sm">
            Dark to Light Color Changes
          </Link>
          <Link href="/blog/paint-sheen-guide" className="text-blue-600 hover:text-blue-800 underline text-sm">
            Choosing the Right Paint Sheen
          </Link>
          <Link href="/blog/textured-wall-painting" className="text-blue-600 hover:text-blue-800 underline text-sm">
            Textured Wall Painting Tips
          </Link>
        </div>
      </div>
    </article>
  );
}