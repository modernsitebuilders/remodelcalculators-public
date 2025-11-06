'use client';

import Link from 'next/link';

/**
 * Dynamic CTA component for blog posts
 * Automatically generates calculator-specific CTA based on blog slug
 */
export default function BlogCalculatorCTA({ blogSlug, calculatorSlug }) {
  // Map blog slugs to calculator names and descriptions
  const calculatorInfo = {
    'concrete-calculation-guide': {
      name: 'Concrete',
      description: 'Get precise cubic yards, bags needed, and material estimates with industry-standard formulas.',
      slug: 'concrete-calculator'
    },
    'drywall-material-guide': {
      name: 'Drywall',
      description: 'Calculate sheets, joint compound, tape, and screws needed with automatic waste factors.',
      slug: 'drywall-calculator'
    },
    'roofing-square-calculator': {
      name: 'Roofing',
      description: 'Get precise estimates for shingles, underlayment, ridge caps, and more with automatic pitch multipliers and waste factors.',
      slug: 'roofing-calculator'
    },
    'interior-paint-coverage-guide': {
      name: 'Interior Paint',
      description: 'Calculate paint requirements for walls, ceilings, and trim with surface-specific coverage rates.',
      slug: 'interior-paint-calculator'
    },
    'exterior-paint-coverage-guide': {
      name: 'Exterior Paint',
      description: 'Get precise paint and primer estimates for your siding, trim, and doors with surface-specific calculations.',
      slug: 'exterior-paint-calculator'
    },
    'deck-stain-coverage-guide': {
      name: 'Deck Stain',
      description: 'Calculate stain requirements based on deck size, wood type, and stain opacity.',
      slug: 'deck-stain-calculator'
    },
    'flooring-material-calculator': {
      name: 'Flooring',
      description: 'Calculate materials for tile, hardwood, laminate, or vinyl with pattern-specific waste factors.',
      slug: 'flooring-calculator'
    },
    'fence-post-spacing-guide': {
      name: 'Fence',
      description: 'Calculate posts, rails, pickets, and concrete needed with automatic spacing calculations.',
      slug: 'fence-calculator'
    },
    'siding-material-calculator': {
      name: 'Siding',
      description: 'Calculate siding materials by house size and type with automatic waste factors.',
      slug: 'siding-calculator'
    },
    'mulch-calculator-guide': {
      name: 'Mulch',
      description: 'Calculate cubic yards and bags needed based on area and depth with the 324 rule.',
      slug: 'mulch-calculator'
    }
  };

  // Get calculator info or use provided calculatorSlug as fallback
  const calc = calculatorInfo[blogSlug] || null;
  
  // If no calculator mapping exists and no fallback provided, don't render
  if (!calc && !calculatorSlug) {
    return null;
  }
  
  // Use provided calculatorSlug if mapping doesn't exist
  const finalCalc = calc || {
    name: 'Project',
    description: 'Get accurate estimates based on your measurements using industry-standard formulas.',
    slug: calculatorSlug
  };

  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-8 text-center my-12">
      <h2 className="text-3xl font-bold mb-4">
        Calculate Your {finalCalc.name} Materials
      </h2>
      <p className="text-lg mb-6 opacity-90">
        {finalCalc.description}
      </p>
      <Link 
        href={`/${finalCalc.slug}`}
        className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition shadow-lg"
      >
        Go to {finalCalc.name} Calculator →
      </Link>
    </div>
  );
}