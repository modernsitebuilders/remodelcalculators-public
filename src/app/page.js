import Link from 'next/link';
import DumpsterCalculatorPromo from '@/components/DumpsterCalculatorPromo';

export const metadata = {
  title: "Job Calculators - Professional Construction Material Calculators",
  description: "Free construction calculators for accurate material estimation.",
  alternates: { canonical: 'https://jobcalculators.com' },
};

import { 
  Calculator, 
  Hammer, 
  Home, 
  Paintbrush, 
  Fence, 
  Mountain, 
  Trees, 
  Layers,
  Square,
  LayoutGrid
} from 'lucide-react';

const calculators = [
  {
    name: 'Concrete Calculator',
    description: 'Calculate concrete volume and material requirements for slabs, footings, and foundations.',
    href: '/concrete-calculator',
    icon: Layers,
    category: 'Foundation'
  },
  {
    name: 'Deck Stain Calculator',
    description: 'Estimate deck stain requirements based on deck size and wood type.',
    href: '/deck-stain-calculator',
    icon: Home,
    category: 'Exterior'
  },
  {
    name: 'Drywall Calculator',
    description: 'Calculate drywall sheets needed, disposal weight, and material estimates.',
    href: '/drywall-calculator',
    icon: Square,
    category: 'Interior'
  },
  {
    name: 'Exterior Paint Calculator',
    description: 'Estimate paint requirements for exterior walls, siding, and trim.',
    href: '/exterior-paint-calculator',
    icon: Paintbrush,
    category: 'Exterior'
  },
  {
    name: 'Fence Calculator',
    description: 'Calculate fencing materials including posts, rails, and pickets.',
    href: '/fence-calculator',
    icon: Fence,
    category: 'Exterior'
  },
  {
    name: 'Flooring Calculator',
    description: 'Estimate flooring materials for tile, hardwood, laminate, vinyl, and carpet.',
    href: '/flooring-calculator',
    icon: LayoutGrid,
    category: 'Interior'
  },
  {
    name: 'Interior Paint Calculator',
    description: 'Calculate interior paint requirements for walls, ceilings, and trim.',
    href: '/interior-paint-calculator',
    icon: Paintbrush,
    category: 'Interior'
  },
  {
    name: 'Mulch Calculator',
    description: 'Estimate mulch volume and bags needed for landscaping projects.',
    href: '/mulch-calculator',
    icon: Trees,
    category: 'Landscaping'
  },
  {
    name: 'Roofing Calculator',
    description: 'Calculate roofing materials including shingles, underlayment, and ridge caps.',
    href: '/roofing-calculator',
    icon: Mountain,
    category: 'Exterior'
  },
  {
    name: 'Siding Calculator',
    description: 'Estimate siding materials for exterior wall coverage.',
    href: '/siding-calculator',
    icon: Hammer,
    category: 'Exterior'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Calculator className="w-5 h-5" />
            <span className="text-sm font-medium">Professional Construction Calculators</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Calculate Materials.<br />Build with Confidence.
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-50 max-w-3xl mx-auto">
            Industry-standard calculators for accurate material estimation. Free, no login required.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-green-300">✓</span> Free Forever
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-green-300">✓</span> No Sign Up
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-green-300">✓</span> Mobile Friendly
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-green-300">✓</span> Industry Standards
            </div>
          </div>
        </div>
      {/* ADD THIS - After popular calculators, before footer */}
      <div className="max-w-4xl mx-auto mt-16 mb-8">
        <DumpsterCalculatorPromo />
      </div>
    </div>

      {/* Calculator Grid */}
      <div className="container mx-auto max-w-7xl px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            All Calculators
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select a calculator below to get started. Each calculator uses industry-standard formulas and includes waste factors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {calculators.map((calc) => {
            const IconComponent = calc.icon;
            return (
              <Link 
                key={calc.href}
                href={calc.href}
                className="group block bg-white rounded-xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-200 p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 group-hover:bg-blue-100 p-3 rounded-lg transition-colors">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {calc.name}
                      </h3>
                      <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {calc.category}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {calc.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}