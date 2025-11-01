import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">
              Job Calculators
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Free, accurate construction calculators for contractors, builders, and DIY enthusiasts.
              Save time and reduce waste with our industry-standard tools.
            </p>
            <p className="text-xs text-gray-500">
              Built by <a href="https://modernsitebuilders.com" className="text-blue-400 hover:text-blue-300 transition-colors" target="_blank" rel="noopener noreferrer">Modern Site Builders</a>
            </p>

            {/* Related Tools - INSIDE Brand Section */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h4 className="font-semibold text-white mb-3 text-sm">Related Tools</h4>
              <p className="text-xs text-gray-400 mb-2">
                Need to plan for waste disposal?
              </p>
              <a 
                href="https://dumpster-size-calculator.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors text-sm font-medium inline-flex items-center gap-1"
              >
                <span>🗑️</span>
                Dumpster Size Calculator
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
              <p className="text-xs text-gray-500 mt-1">
                Find the perfect dumpster size for your project debris
              </p>
            </div>
          </div>  {/* Brand Section closes HERE */}
          
          {/* Interior Calculators */}
          <div>
            <h4 className="text-white font-semibold mb-4">Interior Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/drywall-calculator" className="hover:text-white transition-colors">
                  Drywall Calculator
                </Link>
              </li>
              <li>
                <Link href="/interior-paint-calculator" className="hover:text-white transition-colors">
                  Interior Paint Calculator
                </Link>
              </li>
              <li>
                <Link href="/flooring-calculator" className="hover:text-white transition-colors">
                  Flooring Calculator
                </Link>
              </li>
            </ul>
          </div>

          {/* Exterior Calculators */}
          <div>
            <h4 className="text-white font-semibold mb-4">Exterior Calculators</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/exterior-paint-calculator" className="hover:text-white transition-colors">
                  Exterior Paint Calculator
                </Link>
              </li>
              <li>
                <Link href="/roofing-calculator" className="hover:text-white transition-colors">
                  Roofing Calculator
                </Link>
              </li>
              <li>
                <Link href="/siding-calculator" className="hover:text-white transition-colors">
                  Siding Calculator
                </Link>
              </li>
              <li>
                <Link href="/deck-stain-calculator" className="hover:text-white transition-colors">
                  Deck Stain Calculator
                </Link>
              </li>
              <li>
                <Link href="/fence-calculator" className="hover:text-white transition-colors">
                  Fence Calculator
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Foundation & Landscape + Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">More Calculators</h4>
            <ul className="space-y-2 text-sm mb-6">
              <li>
                <Link href="/concrete-calculator" className="hover:text-white transition-colors">
                  Concrete Calculator
                </Link>
              </li>
              <li>
                <Link href="/mulch-calculator" className="hover:text-white transition-colors">
                  Mulch Calculator
                </Link>
              </li>
            </ul>

            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Job Calculators. All rights reserved.
              <span className="block md:inline md:ml-2 mt-1 md:mt-0">
                A Modern Site Builders Production
              </span>
            </div>
            <p className="text-xs text-gray-500 text-center md:text-right">
              Professional construction material calculators. Results are estimates - always verify with industry professionals.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}