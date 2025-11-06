import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-xl font-bold mb-4">
              Job Calculators
            </h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              Free, accurate construction calculators for contractors, builders, and DIY enthusiasts.
              Save time and reduce waste with our industry-standard tools.
            </p>
            <p className="text-xs text-gray-500">
              Built by{' '}
              <a 
                href="https://modernsitebuilders.com" 
                className="text-blue-400 hover:text-blue-300 transition-colors underline" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Modern Site Builders
              </a>
            </p>

            {/* Related Tools */}
            <div className="mt-8 pt-6 border-t border-gray-800">
              <h4 className="font-semibold text-white mb-3">Related Tools</h4>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-orange-500/50 transition-colors">
                <p className="text-xs text-gray-400 mb-2">
                  Need to plan for waste disposal?
                </p>
                <a 
                  href="https://dumpster-size-calculator.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-400 hover:text-orange-300 transition-colors font-semibold inline-flex items-center gap-2 group"
                >
                  <span className="text-lg">🗑️</span>
                  <span>Dumpster Size Calculator</span>
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-xs text-gray-500 mt-2">
                  Find the perfect dumpster size for your project debris
                </p>
              </div>
            </div>
          </div>
          
          {/* Interior Calculators */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Interior Calculators</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/drywall-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Drywall Calculator
                </Link>
              </li>
              <li>
                <Link href="/interior-paint-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Interior Paint Calculator
                </Link>
              </li>
              <li>
                <Link href="/flooring-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Flooring Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Exterior Calculators */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Exterior Calculators</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/exterior-paint-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Exterior Paint Calculator
                </Link>
              </li>
              <li>
                <Link href="/roofing-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Roofing Calculator
                </Link>
              </li>
              <li>
                <Link href="/siding-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Siding Calculator
                </Link>
              </li>
              <li>
                <Link href="/deck-stain-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Deck Stain Calculator
                </Link>
              </li>
              <li>
                <Link href="/fence-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Fence Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Guides & Resources */}
          <div>
            <h4 className="text-white font-bold mb-4 text-lg">Painting Guides</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <Link href="/blog/measure-room-square-footage" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  How to Measure Rooms
                </Link>
              </li>
              <li>
                <Link href="/blog/when-you-need-primer" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  When You Need Primer
                </Link>
              </li>
              <li>
                <Link href="/blog/paint-sheen-guide" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Paint Sheen Guide
                </Link>
              </li>
              <li>
                <Link href="/blog/interior-painting-guide" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Complete Painting Guide
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors font-semibold inline-flex items-center gap-1">
                  All Guides
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-bold mb-4 text-lg">More Tools</h4>
            <ul className="space-y-3 text-sm mb-8">
              <li>
                <Link href="/concrete-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Concrete Calculator
                </Link>
              </li>
              <li>
                <Link href="/mulch-calculator" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Mulch Calculator
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-bold mb-4 text-lg">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Job Calculators. All rights reserved.
              <span className="block md:inline md:ml-2 mt-2 md:mt-0 text-gray-600">
                A Modern Site Builders Production
              </span>
            </div>
            <p className="text-xs text-gray-600 text-center md:text-right max-w-md">
              Professional construction material calculators. Results are estimates - always verify with industry professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}