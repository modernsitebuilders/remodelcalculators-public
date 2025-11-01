export const metadata = {
  title: 'About Us | Job Calculators',
  description: 'Learn about Job Calculators - free construction material calculators for contractors, builders, and DIY enthusiasts.',
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Job Calculators
          </h1>
          <p className="text-xl text-gray-600">
            Professional construction calculators, completely free
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
          {/* Mission */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Job Calculators provides accurate, industry-standard construction material calculators to help contractors, builders, and DIY enthusiasts estimate project materials with confidence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that accurate material estimation saves time, reduces waste, and helps projects stay on budget. Our calculators are designed to be simple, accurate, and accessible to everyone—no sign-up required, completely free.
            </p>
          </section>

          {/* What We Offer */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Offer</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">10+ Calculators</h3>
                <p className="text-gray-700">
                  Comprehensive tools for concrete, drywall, paint, roofing, flooring, fencing, siding, mulch, and more.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Industry Standards</h3>
                <p className="text-gray-700">
                  All calculations follow professional industry standards and building codes.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">No Sign-Up</h3>
                <p className="text-gray-700">
                  Use all calculators instantly without creating an account or providing personal information.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Mobile Friendly</h3>
                <p className="text-gray-700">
                  Access calculators on any device—desktop, tablet, or smartphone.
                </p>
              </div>
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Choose Your Calculator</h3>
                  <p className="text-gray-700">Select the calculator that matches your project type.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Enter Measurements</h3>
                  <p className="text-gray-700">Input your project dimensions and specifications.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Get Instant Results</h3>
                  <p className="text-gray-700">See material quantities, including waste factors and detailed breakdowns.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Serve */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our calculators are designed for:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Professional Contractors:</strong> Quick estimates for client quotes and material ordering</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Builders & Remodelers:</strong> Accurate material calculations for residential and commercial projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>DIY Homeowners:</strong> Reliable estimates for home improvement projects</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Property Managers:</strong> Planning and budgeting for maintenance projects</span>
              </li>
            </ul>
          </section>

          {/* Accuracy Note */}
          <section className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Note</h3>
            <p className="text-gray-700 leading-relaxed">
              While our calculators use industry-standard formulas and include appropriate waste factors, results are estimates. Always verify calculations with qualified professionals and local building codes before purchasing materials or starting construction. Every project is unique and may have specific requirements not accounted for in general calculators.
            </p>
          </section>
        </div>

        {/* Built By */}
        <div className="text-center bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-4">Built By Modern Site Builders</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Job Calculators is built and maintained by Modern Site Builders, a web development company focused on creating practical tools for the construction industry.
          </p>
          <a 
            href="https://modernsitebuilders.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Visit Modern Site Builders →
          </a>
        </div>
      </div>
    </div>
  );
}