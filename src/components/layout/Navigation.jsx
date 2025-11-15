'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';

// Separate the navigation logic that uses usePathname
function NavigationContent() {
  const pathname = usePathname();
  
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/blog', label: 'Guides' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav>
      <ul className="flex space-x-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <li key={link.path}>
              <Link
                href={link.path}
                className={`font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

// Wrap in Suspense with a fallback
export default function Navigation() {
  return (
    <Suspense fallback={
      <nav>
        <ul className="flex space-x-8">
          <li><Link href="/" className="font-medium text-gray-600">Home</Link></li>
          <li><Link href="/blog" className="font-medium text-gray-600">Guides</Link></li>
          <li><Link href="/about" className="font-medium text-gray-600">About</Link></li>
          <li><Link href="/contact" className="font-medium text-gray-600">Contact</Link></li>
        </ul>
      </nav>
    }>
      <NavigationContent />
    </Suspense>
  );
}