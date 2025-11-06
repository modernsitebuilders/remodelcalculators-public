// Calculator metadata, SEO content, and configuration
const BASE_URL = 'https://jobcalculators.com';

// Calculator-specific OG images
const OG_IMAGES = {
  main: `${BASE_URL}/og-image.jpg`,
  blog: `${BASE_URL}/og-image-blog.jpg`,
  concrete: `${BASE_URL}/calculators/og-concrete.jpg`,
  'deck-stain': `${BASE_URL}/calculators/og-deck-stain.jpg`,
  drywall: `${BASE_URL}/calculators/og-drywall.jpg`,
  'exterior-paint': `${BASE_URL}/calculators/og-exterior-paint.jpg`,
  fence: `${BASE_URL}/calculators/og-fence.jpg`,
  flooring: `${BASE_URL}/calculators/og-flooring.jpg`,
  'interior-paint': `${BASE_URL}/calculators/og-interior-paint.jpg`,
  mulch: `${BASE_URL}/calculators/og-mulch.jpg`,
  roofing: `${BASE_URL}/calculators/og-roofing.jpg`,
  siding: `${BASE_URL}/calculators/og-siding.jpg`,
};

export const calculatorData = {
  'concrete-calculator': {
    name: 'Concrete Calculator',
    slug: 'concrete-calculator',
    title: 'Concrete Calculator | Calculate Cubic Yards',
    description: 'Calculate concrete for slabs, footings & foundations. Get cubic yards, bags needed & material estimates with industry formulas.',
    canonical: `${BASE_URL}/concrete-calculator`,
    keywords: 'concrete calculator, cubic yards calculator, concrete slab calculator, concrete volume calculator',
    openGraph: {
      title: 'Concrete Calculator | Calculate Cubic Yards',
      description: 'Calculate concrete for slabs, footings & foundations. Get cubic yards, bags needed & material estimates.',
      url: `${BASE_URL}/concrete-calculator`,
      image: OG_IMAGES.concrete,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Concrete Calculator | Calculate Cubic Yards',
      description: 'Calculate concrete for slabs, footings & foundations. Get cubic yards, bags needed & material estimates.',
      image: OG_IMAGES.concrete,
    },
    h1: 'Concrete Calculator',
    intro: 'Calculate the exact amount of concrete needed for your project. This free concrete calculator helps you determine cubic yards, bags of concrete mix, and total material requirements for slabs, footings, columns, and foundations.',
    howToUse: {
      steps: [
        'Enter dimensions: Input the length, width, and thickness of your concrete pour.',
        'Select project type: Choose from slab, footing, column, or stairs.',
        'Review results: See cubic yards needed and number of bags required.',
        'Add waste factor: The calculator includes a 10% waste factor.',
      ],
      additionalInfo: {
        title: 'Understanding Concrete Measurements',
        content: 'Concrete is measured in cubic yards (27 cubic feet). A typical 80-lb bag covers approximately 0.6 cubic feet. For large projects, ready-mix concrete is more economical than bagged mix.',
      },
    },
  },

  'deck-stain-calculator': {
    name: 'Deck Stain Calculator',
    slug: 'deck-stain-calculator',
    title: 'Deck Stain Calculator | Estimate Gallons Needed',
    description: 'Calculate deck stain & sealer needed based on square footage, wood type & coats. Get accurate estimates with coverage rates.',
    canonical: `${BASE_URL}/deck-stain-calculator`,
    keywords: 'deck stain calculator, deck sealer calculator, wood stain calculator, deck coverage calculator',
    openGraph: {
      title: 'Deck Stain Calculator | Estimate Gallons Needed',
      description: 'Calculate deck stain & sealer needed based on square footage, wood type & coats. Get accurate estimates.',
      url: `${BASE_URL}/deck-stain-calculator`,
      image: OG_IMAGES['deck-stain'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Deck Stain Calculator | Estimate Gallons Needed',
      description: 'Calculate deck stain & sealer needed based on square footage, wood type & coats. Get accurate estimates.',
      image: OG_IMAGES['deck-stain'],
    },
    h1: 'Deck Stain Calculator',
    intro: 'Determine how much deck stain or sealer you need for your project. This calculator accounts for deck square footage, wood porosity, number of coats, and different product types.',
    howToUse: {
      steps: [
        'Measure your deck: Enter the total square footage of your deck surface.',
        'Select wood type: Different woods absorb stain differently.',
        'Choose product type: Select solid stain, semi-transparent, or clear sealer.',
        'Number of coats: Enter how many coats you plan to apply (typically 2).',
      ],
      additionalInfo: {
        title: 'Deck Stain Coverage Rates',
        content: 'Coverage varies by product and wood type. Solid stains cover 200-300 sq ft per gallon, while semi-transparent stains cover 250-350 sq ft per gallon.',
      },
    },
  },

  'drywall-calculator': {
    name: 'Drywall Calculator',
    slug: 'drywall-calculator',
    title: 'Drywall Calculator | Sheets & Materials Needed',
    description: 'Calculate drywall sheets, joint compound, tape & screws for walls & ceilings. Includes waste factor & disposal estimates.',
    canonical: `${BASE_URL}/drywall-calculator`,
    keywords: 'drywall calculator, sheetrock calculator, drywall sheets calculator, drywall material calculator',
    openGraph: {
      title: 'Drywall Calculator | Sheets & Materials Needed',
      description: 'Calculate drywall sheets, joint compound, tape & screws for walls & ceilings. Includes waste factor.',
      url: `${BASE_URL}/drywall-calculator`,
      image: OG_IMAGES.drywall,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Drywall Calculator | Sheets & Materials Needed',
      description: 'Calculate drywall sheets, joint compound, tape & screws for walls & ceilings. Includes waste factor.',
      image: OG_IMAGES.drywall,
    },
    h1: 'Drywall Calculator',
    intro: 'Calculate the number of drywall sheets, joint compound, tape, and screws needed for your project. Includes disposal weight calculations and accounts for waste.',
    howToUse: {
      steps: [
        'Enter room dimensions: Input wall or ceiling length, width, and height.',
        'Select sheet size: Choose 4×8 or 4×12 drywall sheets.',
        'Review materials: See sheets needed plus joint compound, tape, and screws.',
        'Check disposal: Calculate weight for dumpster sizing.',
      ],
      additionalInfo: {
        title: 'Drywall Material Standards',
        content: 'Standard 1/2" drywall weighs 50-60 lbs per sheet. Plan 10% waste for cuts. Joint compound: 1 gallon per 300 sq ft.',
      },
    },
  },

  'exterior-paint-calculator': {
    name: 'Exterior Paint Calculator',
    slug: 'exterior-paint-calculator',
    title: 'Exterior Paint Calculator | House Paint Needed',
    description: 'Calculate exterior paint for siding, trim & doors. Accounts for texture, coats & surface prep. Get accurate gallons needed.',
    canonical: `${BASE_URL}/exterior-paint-calculator`,
    keywords: 'exterior paint calculator, house paint calculator, siding paint calculator, outdoor paint calculator',
    openGraph: {
      title: 'Exterior Paint Calculator | House Paint Needed',
      description: 'Calculate exterior paint for siding, trim & doors. Get accurate gallons needed for your project.',
      url: `${BASE_URL}/exterior-paint-calculator`,
      image: OG_IMAGES['exterior-paint'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Exterior Paint Calculator | House Paint Needed',
      description: 'Calculate exterior paint for siding, trim & doors. Get accurate gallons needed for your project.',
      image: OG_IMAGES['exterior-paint'],
    },
    h1: 'Exterior Paint Calculator',
    intro: 'Calculate exterior paint requirements for siding, trim, doors, and shutters. Accounts for surface texture, number of coats, and primer requirements.',
    howToUse: {
      steps: [
        'Measure exterior walls: Calculate total square footage of siding.',
        'Subtract openings: Deduct area for windows, doors, and garage doors.',
        'Select surface type: Smooth, textured, or rough surfaces affect coverage.',
        'Add trim and doors: Include separate calculations for trim work.',
      ],
      additionalInfo: {
        title: 'Exterior Paint Coverage',
        content: 'One gallon covers 250-400 sq ft depending on texture. Smooth surfaces have best coverage, rough stucco may require 30% more paint.',
      },
    },
  },

  'fence-calculator': {
    name: 'Fence Calculator',
    slug: 'fence-calculator',
    title: 'Fence Calculator | Posts, Rails & Materials',
    description: 'Calculate fence materials including posts, rails, pickets & hardware. Works for wood, vinyl & chain link with custom spacing.',
    canonical: `${BASE_URL}/fence-calculator`,
    keywords: 'fence calculator, fence material calculator, fence post calculator, picket fence calculator',
    openGraph: {
      title: 'Fence Calculator | Posts, Rails & Materials',
      description: 'Calculate fence materials including posts, rails, pickets & hardware. Works for wood, vinyl & chain link.',
      url: `${BASE_URL}/fence-calculator`,
      image: OG_IMAGES.fence,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Fence Calculator | Posts, Rails & Materials',
      description: 'Calculate fence materials including posts, rails, pickets & hardware. Works for wood, vinyl & chain link.',
      image: OG_IMAGES.fence,
    },
    h1: 'Fence Calculator',
    intro: 'Calculate fence materials including posts, rails, pickets, and hardware. Works for wood, vinyl, and chain link fences with customizable post spacing.',
    howToUse: {
      steps: [
        'Enter fence length: Input the total linear feet of fence needed.',
        'Choose fence height: Select from standard heights (4 ft, 6 ft, 8 ft).',
        'Select post spacing: Typical spacing is 6-8 feet.',
        'Review materials: See posts, rails, pickets, and hardware needed.',
      ],
      additionalInfo: {
        title: 'Fence Material Standards',
        content: 'Posts should be set 2-3 feet deep in concrete. Post spacing typically ranges from 6-8 feet on center. Use 4×4 posts for 6-foot fences.',
      },
    },
  },

  'flooring-calculator': {
    name: 'Flooring Calculator',
    slug: 'flooring-calculator',
    title: 'Flooring Calculator | Tile, Hardwood & More',
    description: 'Calculate flooring for tile, hardwood, laminate, vinyl & carpet. Get square footage, boxes needed & waste factor included.',
    canonical: `${BASE_URL}/flooring-calculator`,
    keywords: 'flooring calculator, tile calculator, hardwood flooring calculator, laminate calculator, square footage calculator',
    openGraph: {
      title: 'Flooring Calculator | Tile, Hardwood & More',
      description: 'Calculate flooring for tile, hardwood, laminate, vinyl & carpet. Get square footage & boxes needed.',
      url: `${BASE_URL}/flooring-calculator`,
      image: OG_IMAGES.flooring,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Flooring Calculator | Tile, Hardwood & More',
      description: 'Calculate flooring for tile, hardwood, laminate, vinyl & carpet. Get square footage & boxes needed.',
      image: OG_IMAGES.flooring,
    },
    h1: 'Flooring Calculator',
    intro: 'Calculate flooring materials for any project including tile, hardwood, laminate, vinyl, and carpet. Accounts for room shape, waste factor, and material-specific requirements.',
    howToUse: {
      steps: [
        'Select flooring type: Choose tile, hardwood, laminate, vinyl, or carpet.',
        'Enter room dimensions: Input length and width in feet.',
        'Choose installation pattern: Straight, diagonal, or herringbone.',
        'Review materials: See total square footage and boxes/bundles needed.',
      ],
      additionalInfo: {
        title: 'Flooring Coverage & Waste Factors',
        content: 'Add 10% waste for straight installations, 15% for diagonal, 20% for herringbone. Hardwood and laminate boxes cover 20-30 sq ft.',
      },
    },
  },

  'interior-paint-calculator': {
    name: 'Interior Paint Calculator',
    slug: 'interior-paint-calculator',
    title: 'Interior Paint Calculator | Room Paint Needed',
    description: 'Calculate interior paint for walls, ceilings & trim. Enter room dimensions to get accurate gallons needed with coverage rates.',
    canonical: `${BASE_URL}/interior-paint-calculator`,
    keywords: 'interior paint calculator, room paint calculator, wall paint calculator, paint estimation calculator',
    openGraph: {
      title: 'Interior Paint Calculator | Room Paint Needed',
      description: 'Calculate interior paint for walls, ceilings & trim. Get accurate gallons needed with coverage rates.',
      url: `${BASE_URL}/interior-paint-calculator`,
      image: OG_IMAGES['interior-paint'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Interior Paint Calculator | Room Paint Needed',
      description: 'Calculate interior paint for walls, ceilings & trim. Get accurate gallons needed with coverage rates.',
      image: OG_IMAGES['interior-paint'],
    },
    h1: 'Interior Paint Calculator',
    intro: 'Estimate interior paint requirements for walls, ceilings, doors, and trim. Accounts for room dimensions, number of coats, and surface preparation.',
    howToUse: {
      steps: [
        'Enter room dimensions: Input room length, width, and ceiling height.',
        'Select surfaces: Choose walls, ceiling, or both.',
        'Account for openings: Subtract doors and windows for accuracy.',
        'Review paint needed: See gallons needed for walls, ceiling, and trim.',
      ],
      additionalInfo: {
        title: 'Interior Paint Coverage',
        content: 'One gallon covers 350-400 sq ft per coat. Primer may require separate calculation. Darker colors often need 2+ coats.',
      },
    },
  },

  'mulch-calculator': {
    name: 'Mulch Calculator',
    slug: 'mulch-calculator',
    title: 'Mulch Calculator | Cubic Yards Needed',
    description: 'Calculate mulch for garden beds, playgrounds & landscaping. Get cubic yards, bags & bulk delivery estimates with depth guide.',
    canonical: `${BASE_URL}/mulch-calculator`,
    keywords: 'mulch calculator, landscaping mulch calculator, cubic yards mulch calculator, garden bed calculator',
    openGraph: {
      title: 'Mulch Calculator | Cubic Yards Needed',
      description: 'Calculate mulch for garden beds & landscaping. Get cubic yards & bags needed.',
      url: `${BASE_URL}/mulch-calculator`,
      image: OG_IMAGES.mulch,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mulch Calculator | Cubic Yards Needed',
      description: 'Calculate mulch for garden beds & landscaping. Get cubic yards & bags needed.',
      image: OG_IMAGES.mulch,
    },
    h1: 'Mulch Calculator',
    intro: 'Calculate mulch needed for garden beds, playgrounds, and landscaping projects. Determine cubic yards for bulk delivery or number of bags needed.',
    howToUse: {
      steps: [
        'Measure bed area: Enter length and width of garden beds.',
        'Choose mulch depth: 2-4 inches typical for landscaping.',
        'Select bed shape: Rectangle, circle, or irregular shapes.',
        'Review results: See cubic yards or bags needed.',
      ],
      additionalInfo: {
        title: 'Mulch Depth Guidelines',
        content: 'Standard depth is 2-3 inches for landscaping, 6-12 inches for playground safety surfacing. One cubic yard covers 162 sq ft at 2 inches deep.',
      },
    },
  },

  'roofing-calculator': {
    name: 'Roofing Calculator',
    slug: 'roofing-calculator',
    title: 'Roofing Calculator | Shingles & Materials',
    description: 'Calculate roofing squares, shingle bundles, underlayment & materials. Accounts for pitch, waste & complexity.',
    canonical: `${BASE_URL}/roofing-calculator`,
    keywords: 'roofing calculator, shingle calculator, roofing square calculator, roof material calculator',
    openGraph: {
      title: 'Roofing Calculator | Shingles & Materials',
      description: 'Calculate roofing squares, shingle bundles & materials. Accounts for pitch & waste.',
      url: `${BASE_URL}/roofing-calculator`,
      image: OG_IMAGES.roofing,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Roofing Calculator | Shingles & Materials',
      description: 'Calculate roofing squares, shingle bundles & materials. Accounts for pitch & waste.',
      image: OG_IMAGES.roofing,
    },
    h1: 'Roofing Calculator',
    intro: 'Calculate roofing materials including shingles, underlayment, starter strips, and ridge caps. Accounts for roof pitch, complexity, and waste factors.',
    howToUse: {
      steps: [
        'Measure roof area: Calculate total square footage of roof surface.',
        'Enter roof pitch: Steeper pitches require more materials.',
        'Select complexity: Simple, moderate, or complex affects waste.',
        'Review materials: See roofing squares, bundles, and accessories.',
      ],
      additionalInfo: {
        title: 'Roofing Square Standards',
        content: 'One roofing square = 100 sq ft. A bundle of shingles covers 33 sq ft (3 bundles per square). Add 10-15% waste for cuts and complexity.',
      },
    },
  },

  'siding-calculator': {
    name: 'Siding Calculator',
    slug: 'siding-calculator',
    title: 'Siding Calculator | Estimate Materials Needed',
    description: 'Calculate siding materials for vinyl, fiber cement, wood & metal. Get accurate squares needed with waste factor included.',
    canonical: `${BASE_URL}/siding-calculator`,
    keywords: 'siding calculator, vinyl siding calculator, siding material calculator, exterior siding calculator',
    openGraph: {
      title: 'Siding Calculator | Estimate Materials Needed',
      description: 'Calculate siding materials for vinyl, fiber cement, wood & metal. Get accurate squares needed.',
      url: `${BASE_URL}/siding-calculator`,
      image: OG_IMAGES.siding,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Siding Calculator | Estimate Materials Needed',
      description: 'Calculate siding materials for vinyl, fiber cement, wood & metal. Get accurate squares needed.',
      image: OG_IMAGES.siding,
    },
    h1: 'Siding Calculator',
    intro: 'Calculate siding materials for your exterior project. Accounts for wall area, openings, waste factor, and trim materials.',
    howToUse: {
      steps: [
        'Measure wall area: Calculate total exterior wall square footage.',
        'Subtract openings: Deduct area for windows, doors, and garage doors.',
        'Select siding type: Choose vinyl, fiber cement, wood, or metal.',
        'Add waste factor: Include 10% waste for cuts and overlaps.',
      ],
      additionalInfo: {
        title: 'Siding Coverage Standards',
        content: 'Siding is measured in squares (100 sq ft). One square of vinyl siding covers approximately 95-97 sq ft after overlap. Add 10-15% waste.',
      },
    },
  },
};

// Helper functions
export function getCalculatorData(slug) {
  return calculatorData[slug] || null;
}

export function getAllCalculatorSlugs() {
  return Object.keys(calculatorData);
}