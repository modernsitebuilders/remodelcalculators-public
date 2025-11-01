export default function SidingGuide() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 max-w-4xl">
      
      {/* Quick Answer Box */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-blue-200 mb-12 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="flex items-start gap-3">
          <div className="text-3xl">💡</div>
          <div>
            <div className="font-semibold text-lg mb-2 text-gray-900">Quick Answer</div>
            <p className="text-gray-700">Vinyl siding typically covers <strong>100 square feet per box</strong> (two squares). Add <strong>10% waste</strong> for simple projects, <strong>15%</strong> for complex designs with cuts. Fiber cement planks cover <strong>25-33 sq ft per bundle</strong> depending on width.</p>
          </div>
        </div>
      </div>

      {/* Coverage by Siding Type */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📊 Siding Coverage by Material Type</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {/* Vinyl Siding Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Vinyl Siding</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage per box:</span>
                <span className="font-semibold">100 sq ft (2 squares)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Exposure:</span>
                <span className="font-semibold">4" or 5" (single/double)</span>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 text-sm">
                <strong>Standard:</strong> Double 4" (D4) most common. 12' lengths, 20-24 pieces per box.
              </div>
            </div>
          </div>

          {/* Fiber Cement Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Fiber Cement (HardiePlank)</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">6.25" planks:</span>
                <span className="font-semibold">25 sq ft/bundle</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">8.25" planks:</span>
                <span className="font-semibold">33 sq ft/bundle</span>
              </div>
              <div className="bg-green-50 rounded-lg p-3 text-sm">
                <strong>Standard:</strong> 12' lengths, 16 pieces per bundle. Requires 1-1/4" lap overlap.
              </div>
            </div>
          </div>

          {/* Wood Siding Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-purple-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Wood Lap Siding</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage factor:</span>
                <span className="font-semibold">85% of board footage</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">6" boards (actual 5.5"):</span>
                <span className="font-semibold">0.46 BF per linear foot</span>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 text-sm">
                <strong>Calculation:</strong> Account for overlap. 1" lap on 6" board = 5" exposure = 2.4 LF per sq ft.
              </div>
            </div>
          </div>

          {/* Metal/Aluminum Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Metal/Aluminum Siding</h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Coverage per box:</span>
                <span className="font-semibold">100 sq ft</span>
              </div>
              <div className="flex justify-between py-2 border-b border-gray-100">
                <span className="font-medium">Panel width:</span>
                <span className="font-semibold">12" exposure typical</span>
              </div>
              <div className="bg-orange-50 rounded-lg p-3 text-sm">
                <strong>Note:</strong> Similar coverage to vinyl. Horizontal or vertical installation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Factors by Complexity */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📐 Waste Factors by Project Complexity</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Project Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Waste Factor</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Characteristics</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Example</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Simple Rectangle</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Few windows, no complex cuts</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Basic ranch, shed</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Standard Home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12-15%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Multiple windows, standard gables</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Typical 2-story home</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Complex Design</td>
                  <td className="px-6 py-4 text-sm text-gray-700">15-20%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Many angles, dormers, bay windows</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Victorian, craftsman</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Highly Complex</td>
                  <td className="px-6 py-4 text-sm text-gray-700">20-30%</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Extreme angles, turrets, curves</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Custom architecture</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Professional tip:</strong> Add extra waste for first-time installers or difficult-to-reach areas requiring scaffolding.
          </div>
        </div>
      </section>

      {/* Accessory Coverage */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔧 Trim & Accessory Coverage</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-green-50 to-emerald-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Accessory</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Standard Length</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Per Piece</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Application</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">J-Channel</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 linear feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Windows, doors, soffit</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Starter Strip</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 linear feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Bottom of wall</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Outside Corner</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10 linear feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">External corners</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Inside Corner</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">10 linear feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Internal corners</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Soffit Panels</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">16" or 24" width</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Eave coverage</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">Fascia</td>
                  <td className="px-6 py-4 text-sm text-gray-700">12 feet</td>
                  <td className="px-6 py-4 text-sm text-gray-700">6"-12" height</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Roof edge</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Calculation:</strong> Measure linear feet needed for each trim type. Add 10% waste for cuts and miters.
          </div>
        </div>
      </section>

      {/* House Size Calculations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🏠 Siding Needed by House Size</h2>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-purple-50 to-pink-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">House Size</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wall Area (est.)</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Vinyl Boxes</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Fiber Cement Bundles</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">1,000 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1,200 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">14 boxes</td>
                  <td className="px-6 py-4 text-sm text-gray-700">48 bundles</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">1,500 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">1,800 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">21 boxes</td>
                  <td className="px-6 py-4 text-sm text-gray-700">72 bundles</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">2,000 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">2,400 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">28 boxes</td>
                  <td className="px-6 py-4 text-sm text-gray-700">96 bundles</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900 font-medium">2,500 sq ft home</td>
                  <td className="px-6 py-4 text-sm text-gray-700">3,000 sq ft</td>
                  <td className="px-6 py-4 text-sm text-gray-700">35 boxes</td>
                  <td className="px-6 py-4 text-sm text-gray-700">120 bundles</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-gray-50 px-6 py-4 text-sm text-gray-600">
            <strong>Estimation:</strong> Wall area ≈ 1.2× interior square footage. Includes 15% waste and window/door deductions.
          </div>
        </div>
      </section>

      {/* Installation Requirements */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔨 Installation Specifications</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📏</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">House Wrap Underlayment</h3>
                <p className="text-gray-700 text-sm">Tyvek or similar required under all siding. 9-10 ft wide rolls cover 1,000-1,500 sq ft. Install before siding with 6" overlaps.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-green-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🔩</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Fastener Requirements</h3>
                <p className="text-gray-700 text-sm">Vinyl: 1-1/2" roofing nails, 16" on center. Fiber cement: 2" siding nails or approved screws, every stud. Galvanized or stainless required.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-purple-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">🌡️</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Expansion Gaps</h3>
                <p className="text-gray-700 text-sm">Vinyl expands/contracts with temperature. Leave 1/4" gap at trim pieces. Never nail tight - allow horizontal movement in slot.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
              <div className="bg-orange-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">💧</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Flashing Requirements</h3>
                <p className="text-gray-700 text-sm">Install flashing above all windows and doors. Kick-out flashing at roof-wall intersections. Prevents water intrusion behind siding.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-red-100 rounded-full p-3 flex-shrink-0">
                <span className="text-2xl">📐</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Starter Strip Requirement</h3>
                <p className="text-gray-700 text-sm">Mandatory at bottom of wall. Creates proper angle for first course. Must be level - affects entire installation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manual Calculation */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">🔢 Manual Siding Calculation</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4 text-lg">Example: 1,500 sq ft Ranch Home (Vinyl Siding)</h3>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 1: Calculate wall area</p>
                  <p className="text-gray-700 font-mono">House perimeter = 180 feet</p>
                  <p className="text-gray-700 font-mono">Average height = 10 feet (walls + gables)</p>
                  <p className="text-gray-700 font-mono">Gross area = 180 × 10 = 1,800 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 2: Deduct openings</p>
                  <p className="text-gray-700 font-mono">Windows: 120 sq ft</p>
                  <p className="text-gray-700 font-mono">Doors: 60 sq ft</p>
                  <p className="text-gray-700 font-mono">Net area = 1,800 - 180 = 1,620 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 3: Add waste factor</p>
                  <p className="text-gray-700 font-mono">Complexity = Standard (12% waste)</p>
                  <p className="text-gray-700 font-mono">Total needed = 1,620 × 1.12 = 1,814 sq ft</p>
                </div>

                <div className="bg-white rounded-lg p-4">
                  <p className="font-semibold text-gray-900 mb-2">Step 4: Calculate boxes needed</p>
                  <p className="text-gray-700 font-mono">Coverage = 100 sq ft per box</p>
                  <p className="text-gray-700 font-mono">Boxes = 1,814 ÷ 100 = 18.14</p>
                  <p className="text-gray-700 font-mono"><strong>Buy: 19 boxes</strong></p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3">Quick Formulas</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="font-mono bg-white p-3 rounded">Wall area = Perimeter × Height</p>
                <p className="font-mono bg-white p-3 rounded">Net area = Gross area - Windows - Doors</p>
                <p className="font-mono bg-white p-3 rounded">Total = Net area × (1 + Waste factor)</p>
                <p className="font-mono bg-white p-3 rounded">Boxes = Total ÷ 100 sq ft (vinyl)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Standards Reference */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">📚 Industry Standards & Codes</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4 text-sm text-gray-700">
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM D3679 - Vinyl Siding Specifications</p>
              <p>Standards for rigid PVC siding including thickness, impact resistance, and dimensional stability across temperature ranges.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">ASTM C1186 - Fiber Cement Siding</p>
              <p>Specifications for flat non-asbestos fiber-cement sheets. Covers physical requirements, moisture resistance, and freeze-thaw durability.</p>
            </div>
            
            <div className="pb-4 border-b border-gray-100">
              <p className="font-semibold text-gray-900 mb-1">IRC R703 - Exterior Covering</p>
              <p>International Residential Code requirements for weather-resistant barriers, flashing, and attachment of exterior wall coverings.</p>
            </div>
            
            <div>
              <p className="font-semibold text-gray-900 mb-1">Vinyl Siding Institute (VSI) Standards</p>
              <p>Installation guidelines including fastener specifications, expansion gaps, and proper underlayment application.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}