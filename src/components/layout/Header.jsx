'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calculator, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const calculators = [
    { name: 'Concrete', href: '/concrete-calculator' },
    { name: 'Deck Stain', href: '/deck-stain-calculator' },
    { name: 'Drywall', href: '/drywall-calculator' },
    { name: 'Exterior Paint', href: '/exterior-paint-calculator' },
    { name: 'Fence', href: '/fence-calculator' },
    { name: 'Flooring', href: '/flooring-calculator' },
    { name: 'Interior Paint', href: '/interior-paint-calculator' },
    { name: 'Mulch', href: '/mulch-calculator' },
    { name: 'Roofing', href: '/roofing-calculator' },
    { name: 'Siding', href: '/siding-calculator' },
  ];

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors">
            <Calculator className="w-6 h-6 text-blue-600" />
<span>Remodel<span className="text-blue-600">Calculators</span></span>          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
  <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
    Home
  </Link>
  
  <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
    Guides
  </Link>
            
            {/* Calculators Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1">
                Calculators
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2 grid grid-cols-1 gap-1">
                  {calculators.map((calc) => (
                    <Link
                      key={calc.href}
                      href={calc.href}
                      className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {calc.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 max-h-[80vh] overflow-y-auto">
            <div className="flex flex-col gap-2">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
              >
                Home
              </Link>

              <Link
  href="/blog"
  onClick={() => setMobileMenuOpen(false)}
  className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
>
  Guides
</Link>
              
              <div className="px-4 py-2 text-sm font-semibold text-gray-500 uppercase tracking-wider">
                Calculators
              </div>
              
              {calculators.map((calc) => (
                <Link
                  key={calc.href}
                  href={calc.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {calc.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}