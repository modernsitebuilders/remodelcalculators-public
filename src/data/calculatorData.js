// Calculator metadata, SEO content, and configuration
const BASE_URL = 'https://jobcalculators.com';
const OG_IMAGE = `${BASE_URL}/og-image.jpg`; // You'll need to create this

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
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Concrete Calculator | Calculate Cubic Yards',
      description: 'Calculate concrete for slabs, footings & foundations. Get cubic yards, bags needed & material estimates.',
      image: OG_IMAGE,
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
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Deck Stain Calculator | Estimate Gallons Needed',
      description: 'Calculate deck stain & sealer needed based on square footage, wood type & coats. Get accurate estimates.',
      image: OG_IMAGE,
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
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Drywall Calculator | Sheets & Materials Needed',
      description: 'Calculate drywall sheets, joint compound, tape & screws for walls & ceilings. Includes waste factor.',
      image: OG_IMAGE,
    },
    h1: 'Drywall Calculator',
    intro: 'Calculate the number of drywall sheets, joint compound, tape, and screws needed for your project. Includes disposal weight calculations and accounts for waste.',
    howToUse: {
      steps: [
        'Enter room dimensions: Input wall or ceiling length, width, and height.',
        'Choose sheet size: Select 4×8 or 4×12 drywall sheets.',
        'Select thickness: Pick 1/2" for walls or 5/8" for ceilings.',
        'Review materials: See sheets, joint compound, tape, and fasteners required.',
      ],
      additionalInfo: {
        title: 'Drywall Material Standards',
        content: '4×8 sheets are 32 sq ft, 4×12 sheets are 48 sq ft. Calculate 10% extra for waste. One gallon of joint compound covers 100 sq ft per coat.',
      },
    },
  },

  'exterior-paint-calculator': {
    name: 'Exterior Paint Calculator',
    slug: 'exterior-paint-calculator',
    title: 'Exterior Paint Calculator | House Painting',
    description: 'Calculate exterior paint for siding, trim & doors. Accounts for surface texture, coats needed & material type for accurate estimates.',
    canonical: `${BASE_URL}/exterior-paint-calculator`,
    keywords: 'exterior paint calculator, house paint calculator, exterior painting calculator, paint coverage calculator',
    openGraph: {
      title: 'Exterior Paint Calculator | House Painting',
      description: 'Calculate exterior paint for siding, trim & doors. Accounts for surface texture & coats needed.',
      url: `${BASE_URL}/exterior-paint-calculator`,
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Exterior Paint Calculator | House Painting',
      description: 'Calculate exterior paint for siding, trim & doors. Accounts for surface texture & coats needed.',
      image: OG_IMAGE,
    },
    h1: 'Exterior Paint Calculator',
    intro: 'Estimate exterior paint requirements for your home or building. This calculator accounts for surface texture, siding type, number of coats, and trim areas.',
    howToUse: {
      steps: [
        'Measure exterior walls: Calculate total wall square footage.',
        'Select surface type: Choose smooth siding, textured stucco, or rough wood.',
        'Add trim and details: Include doors, windows, fascia, and trim.',
        'Number of coats: Most exterior projects require 2 coats.',
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
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Fence Calculator | Posts, Rails & Materials',
      description: 'Calculate fence materials including posts, rails, pickets & hardware. Works for wood, vinyl & chain link.',
      image: OG_IMAGE,
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
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Flooring Calculator | Tile, Hardwood & More',
      description: 'Calculate flooring for tile, hardwood, laminate, vinyl & carpet. Get square footage & boxes needed.',
      image: OG_IMAGE,
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
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Interior Paint Calculator | Room Paint Needed',
      description: 'Calculate interior paint for walls, ceilings & trim. Get accurate gallons needed with coverage rates.',
      image: OG_IMAGE,
    },
    h1: 'Interior Paint Calculator',
    intro: 'Estimate interior paint requirements for walls, ceilings, doors, and trim. Accounts for room dimensions, number of coats, and surface preparation.',
    howToUse: {
      steps: [
        'Enter room dimensions: Input room length, width, and ceiling height.',
        'Subtract openings: Deduct area for doors and windows.',
        'Select surfaces: Choose to paint walls, ceilings, trim, or all.',
        'Number of coats: Specify coats needed (typically 2 for walls).',
      ],
      additionalInfo: {
        title: 'Interior Paint Coverage',
        content: 'One gallon covers approximately 350-400 sq ft per coat on smooth surfaces. Textured walls or dark colors may require additional paint.',
      },
    },
  },

  'mulch-calculator': {
    name: 'Mulch Calculator',
    slug: 'mulch-calculator',
    title: 'Mulch Calculator | Cubic Yards & Bags Needed',
    description: 'Calculate mulch for landscaping projects. Get cubic yards for bulk delivery or bags needed based on area and depth coverage.',
    canonical: `${BASE_URL}/mulch-calculator`,
    keywords: 'mulch calculator, mulch coverage calculator, landscaping calculator, cubic yards mulch',
    openGraph: {
      title: 'Mulch Calculator | Cubic Yards & Bags Needed',
      description: 'Calculate mulch for landscaping projects. Get cubic yards or bags needed based on area and depth.',
      url: `${BASE_URL}/mulch-calculator`,
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mulch Calculator | Cubic Yards & Bags Needed',
      description: 'Calculate mulch for landscaping projects. Get cubic yards or bags needed based on area and depth.',
      image: OG_IMAGE,
    },
    h1: 'Mulch Calculator',
    intro: 'Calculate how much mulch you need for your landscaping project. Determine cubic yards for bulk delivery or number of bags based on coverage area and desired depth.',
    howToUse: {
      steps: [
        'Measure your area: Enter length and width in feet.',
        'Choose mulch depth: Standard depth is 2-4 inches (3 inches most common).',
        'Select purchase type: Choose bulk delivery or bagged mulch.',
        'Review results: See cubic yards or number of bags required.',
      ],
      additionalInfo: {
        title: 'Mulch Depth Guidelines',
        content: 'Apply 2-3 inches for general landscaping, 3-4 inches for weed suppression. One cubic yard covers 108 sq ft at 3 inches deep.',
      },
    },
  },

  'roofing-calculator': {
    name: 'Roofing Calculator',
    slug: 'roofing-calculator',
    title: 'Roofing Calculator | Shingles & Materials',
    description: 'Calculate roofing shingles, underlayment, ridge caps & materials. Get accurate squares and bundles for any roof type.',
    canonical: `${BASE_URL}/roofing-calculator`,
    keywords: 'roofing calculator, shingle calculator, roof square calculator, roofing material calculator',
    openGraph: {
      title: 'Roofing Calculator | Shingles & Materials',
      description: 'Calculate roofing shingles, underlayment, ridge caps & materials. Get accurate squares and bundles.',
      url: `${BASE_URL}/roofing-calculator`,
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Roofing Calculator | Shingles & Materials',
      description: 'Calculate roofing shingles, underlayment, ridge caps & materials. Get accurate squares and bundles.',
      image: OG_IMAGE,
    },
    h1: 'Roofing Calculator',
    intro: 'Calculate roofing materials including shingles, underlayment, ridge caps, starter strips, and nails. Handles simple gable, hip, or complex roof structures.',
    howToUse: {
      steps: [
        'Select roof type: Choose simple gable, hip, or complex.',
        'Enter roof measurements: Input length, width, and roof pitch.',
        'Choose shingle type: Select 3-tab, architectural, or designer.',
        'Review materials: See squares, bundles, and accessories needed.',
      ],
      additionalInfo: {
        title: 'Roofing Measurement Standards',
        content: 'One "square" equals 100 sq ft. A bundle typically covers 33 sq ft (3 bundles per square). Add 10-15% waste for cuts and ridge caps.',
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
      image: OG_IMAGE,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Siding Calculator | Estimate Materials Needed',
      description: 'Calculate siding materials for vinyl, fiber cement, wood & metal. Get accurate squares needed.',
      image: OG_IMAGE,
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