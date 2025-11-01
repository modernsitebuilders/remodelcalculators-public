export default function DrywallGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">For 1,000 square feet of wall/ceiling area, you need approximately <strong>28 sheets</strong> of 4×8 drywall (with 10% waste), <strong>350 screws</strong>, <strong>290 feet</strong> of tape, and <strong>3.5 gallons</strong> of joint compound for three-coat finish.</p>
          </div>
        </div>
      </div>

      {/* Material Coverage Rates */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Drywall Material Coverage Rates</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Drywall Sheets Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Drywall Sheets (4×8)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage per sheet:</span>
                <span className="font-semibold">32 sq ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Waste factor:</span>
                <span className="font-semibold">10-15%</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Formula:</strong> (Square feet ÷ 32) × 1.10 = sheets needed
              </div>
            </div>
          </div>

          {/* Joint Compound Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Joint Compound</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Per 1000 sq ft:</span>
                <span className="font-semibold">3-4 gallons</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage per gallon:</span>
                <span className="font-semibold">250-300 sq ft</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Based on three-coat application (tape, fill, finish). Add 20% for textured ceilings.
              </div>
            </div>
          </div>

          {/* Drywall Tape Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Drywall Tape</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Per sheet (4×8):</span>
                <span className="font-semibold">10 linear feet</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Roll length:</span>
                <span className="font-semibold">250-500 feet</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Types:</strong> Paper tape for flat joints, mesh for patches/ceilings.
              </div>
            </div>
          </div>

          {/* Screws Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Drywall Screws</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Per sheet (walls):</span>
                <span className="font-semibold">32 screws</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Per sheet (ceiling):</span>
                <span className="font-semibold">40 screws</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Spacing:</strong> 12" on center for walls, 8" for ceilings per ASTM C840.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Drywall Thickness Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Drywall Thickness by Application</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Thickness</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Application</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Weight (4×8 sheet)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">IRC Requirement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">1/4"</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Curved surfaces, overlay</td>
                  <td className="px-6 py-4 text-sm text-gray-700">38 lbs</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Limited use</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">3/8"</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Overlay existing walls</td>
                  <td className="px-6 py-4 text-sm text-gray-700">44 lbs</td>
                  <td className="px-6 py-4 text-sm text-gray-700">16" o.c. framing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">1/2"</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Standard walls & ceilings</td>
                  <td className="px-6 py-4 text-sm text-gray-700">54 lbs</td>
                  <td className="px-6 py-4 text-sm text-gray-700">16" o.c. (most common)</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">5/8"</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Fire-rated, commercial, ceilings</td>
                  <td className="px-6 py-4 text-sm text-gray-700">70 lbs</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24" o.c. or fire walls</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>IRC Requirement:</strong> 1/2" minimum for walls with 16" stud spacing. 5/8" required for fire-rated assemblies and garage ceilings.
          </div>
        </div>
      </section>

      {/* Joint Compound Types */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🪣 Joint Compound Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Coverage</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Dry Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best Use</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">All-Purpose</td>
                  <td className="px-6 py-4 text-sm text-gray-700">280 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Taping, coating, finishing</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Taping Compound</td>
                  <td className="px-6 py-4 text-sm text-gray-700">300 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">First coat, embedding tape</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Topping Compound</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Final coat, smooth finish</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Lightweight</td>
                  <td className="px-6 py-4 text-sm text-gray-700">300 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">24 hours</td>
                  <td className="px-6 py-4 text-sm text-gray-700">All coats, easier sanding</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Quick-Set (20 min)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">250 sq ft/gal</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-90 minutes</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Repairs, same-day coat</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Professional tip:</strong> Use taping compound for first coat, all-purpose for second, and topping for final coat. Lightweight reduces sanding time.
          </div>
        </div>
      </section>

      {/* Material List by Room Size */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏠 Materials Needed by Room Size</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Room Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wall Area</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Sheets (4×8)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Mud (gal)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Screws</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">10×10 bedroom</td>
                  <td className="px-6 py-4 text-sm text-gray-700">320 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">11 sheets</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1.5 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">350 screws</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">12×15 living room</td>
                  <td className="px-6 py-4 text-sm text-gray-700">432 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">15 sheets</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">480 screws</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">20×20 great room</td>
                  <td className="px-6 py-4 text-sm text-gray-700">640 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">22 sheets</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">700 screws</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Garage (20×24)</td>
                  <td className="px-6 py-4 text-sm text-gray-700">880 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">30 sheets</td>
                  <td className="px-6 py-4 text-sm text-gray-700">4 gallons</td>
                  <td className="px-6 py-4 text-sm text-gray-700">960 screws</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Calculation:</strong> Wall area = (Room perimeter × 8' ceiling) + ceiling if applicable. Includes 10% waste factor on sheets.
          </div>
        </div>
      </section>

      {/* Installation Standards */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔧 Installation Standards</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📏</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Fastener Spacing (ASTM C840)</h3>
                <p className="text-gray-700 text-sm">Walls: 12" on center. Ceilings: 8" on center for 1/2", 12" for 5/8". Field screws 8-12" from edges to prevent edge cracking.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📐</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Screw Depth</h3>
                <p className="text-gray-700 text-sm">Screws must be countersunk 1/32" below surface without breaking paper. Dimple should be visible but not torn.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔄</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Joint Offset</h3>
                <p className="text-gray-700 text-sm">Stagger end joints 24" minimum between adjacent rows. Never align joints over door/window openings.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Taping Standards (GA-214)</h3>
                <p className="text-gray-700 text-sm">Three-coat system: tape/fill coat, second coat extends 2-3" wider, finish coat extends 2" wider again. Total finished joint width: 10-12".</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔥</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Fire-Rated Assemblies</h3>
                <p className="text-gray-700 text-sm">5/8" Type X drywall required for 1-hour fire rating. Garage ceilings under living space require 5/8" per IRC R302.6.</p>
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
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example: 12×15 Room (8' Ceiling)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate wall area</p>
                  <p className="text-gray-700 font-mono">Perimeter = (12 + 15) × 2 = 54 feet</p>
                  <p className="text-gray-700 font-mono">Wall area = 54 × 8 = 432 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Calculate ceiling area</p>
                  <p className="text-gray-700 font-mono">Ceiling = 12 × 15 = 180 sq ft</p>
                  <p className="text-gray-700 font-mono">Total area = 432 + 180 = 612 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Calculate sheets needed</p>
                  <p className="text-gray-700 font-mono">Sheets = 612 ÷ 32 = 19.1</p>
                  <p className="text-gray-700 font-mono">With 10% waste = 19.1 × 1.10 = 21 sheets</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate other materials</p>
                  <p className="text-gray-700 font-mono">Screws: 21 sheets × 35 avg = 735 screws (1 lb box)</p>
                  <p className="text-gray-700 font-mono">Tape: 21 × 10 ft = 210 feet (1 roll)</p>
                  <p className="text-gray-700 font-mono">Mud: 612 ÷ 280 = 2.2 gallons (buy 3)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Sheets = (Total sq ft ÷ 32) × 1.10</p>
                <p className="font-mono bg-white p-3 rounded">Screws = Sheets × 35 (average per sheet)</p>
                <p className="font-mono bg-white p-3 rounded">Tape = Sheets × 10 linear feet</p>
                <p className="font-mono bg-white p-3 rounded">Mud = Total sq ft ÷ 280 sq ft per gallon</p>
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
              <p>Standard specification for fastener spacing, screw depth, joint treatment, and installation methods for gypsum panels.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">GA-216 - Gypsum Board Finishing</p>
              <p>Gypsum Association standard for finishing levels 0-5. Level 4 standard for painted walls, Level 5 for critical lighting.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">USG Technical Documentation</p>
              <p>Manufacturer specifications for Sheetrock products including coverage rates, weight limits, and fire-rated assemblies.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">IRC Chapter 7 - Wall Covering</p>
              <p>International Residential Code requirements for thickness, fire rating, moisture resistance, and fastener specifications.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}