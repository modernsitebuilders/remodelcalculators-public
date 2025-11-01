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
          </div>
          
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
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
          <p>© {currentYear} Job Calculators. All rights reserved.</p>
          <p className="mt-2 text-xs">
            Professional construction material calculators. Results are estimates - always verify with industry professionals.
          </p>
        </div>
      </div>
    </footer>
  );
}