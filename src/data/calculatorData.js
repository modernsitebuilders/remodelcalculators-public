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
    description: 'Calculate concrete volume using ACI 318 standards. Get cubic yards, 80lb bags & ready-mix amounts for slabs, footings & foundations. Includes 10% waste factor.',
    canonical: `${BASE_URL}/concrete-calculator`,
    keywords: 'concrete calculator, cubic yards calculator, concrete slab calculator, concrete volume calculator, ACI 318',
    openGraph: {
      title: 'Concrete Calculator | Calculate Cubic Yards',
      description: 'Calculate concrete volume using ACI 318 standards. Get cubic yards, 80lb bags & ready-mix amounts for slabs, footings & foundations.',
      url: `${BASE_URL}/concrete-calculator`,
      image: OG_IMAGES.concrete,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Concrete Calculator | Calculate Cubic Yards',
      description: 'Calculate concrete volume using ACI 318 standards. Get cubic yards, 80lb bags & ready-mix amounts for slabs, footings & foundations.',
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
    title: 'Deck Stain Calculator | Coverage by Wood Type',
    description: 'Calculate deck stain by wood type (cedar, pine, composite). Includes railings, stairs & vertical surfaces. Typical coverage: 150-300 sq ft/gallon per coat.',
    canonical: `${BASE_URL}/deck-stain-calculator`,
    keywords: 'deck stain calculator, deck sealer calculator, wood deck coverage, stain coverage rate',
    openGraph: {
      title: 'Deck Stain Calculator | Coverage by Wood Type',
      description: 'Calculate deck stain by wood type. Includes railings, stairs & vertical surfaces. Coverage: 150-300 sq ft/gallon.',
      url: `${BASE_URL}/deck-stain-calculator`,
      image: OG_IMAGES['deck-stain'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Deck Stain Calculator | Coverage by Wood Type',
      description: 'Calculate deck stain by wood type. Includes railings, stairs & vertical surfaces. Coverage: 150-300 sq ft/gallon.',
      image: OG_IMAGES['deck-stain'],
    },
    h1: 'Deck Stain Calculator',
    intro: 'Estimate deck stain requirements based on deck size, wood type, and surface condition. Calculates separate amounts for horizontal surfaces, railings, and stairs.',
    howToUse: {
      steps: [
        'Enter deck dimensions: Input the deck area in square feet.',
        'Select wood type: Choose cedar, pressure-treated, or composite.',
        'Include railings & stairs: Enter linear feet if applicable.',
        'Review coverage: See gallons needed per coat based on wood porosity.',
      ],
      additionalInfo: {
        title: 'Deck Stain Coverage Rates',
        content: 'New wood absorbs more stain (150-200 sq ft/gal) than previously stained decks (250-300 sq ft/gal). Always apply 2 coats for proper protection.',
      },
    },
  },

  'drywall-calculator': {
    name: 'Drywall Calculator',
    slug: 'drywall-calculator',
    title: 'Drywall Calculator | Sheets, Joint Compound & Waste',
    description: 'Calculate drywall sheets, joint compound & disposal weight. Standard 4x8, 4x12 sheets using ASTM C36 specs. Includes 10% waste factor for cutting & breakage.',
    canonical: `${BASE_URL}/drywall-calculator`,
    keywords: 'drywall calculator, sheetrock calculator, joint compound calculator, drywall sheets needed',
    openGraph: {
      title: 'Drywall Calculator | Sheets, Joint Compound & Waste',
      description: 'Calculate drywall sheets, joint compound & disposal weight. Standard 4x8, 4x12 sheets using ASTM C36 specs.',
      url: `${BASE_URL}/drywall-calculator`,
      image: OG_IMAGES.drywall,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Drywall Calculator | Sheets, Joint Compound & Waste',
      description: 'Calculate drywall sheets, joint compound & disposal weight. Standard 4x8, 4x12 sheets using ASTM C36 specs.',
      image: OG_IMAGES.drywall,
    },
    h1: 'Drywall Calculator',
    intro: 'Calculate drywall sheets needed, disposal weight, and material estimates for your project. Supports multiple sheet sizes and accounts for waste factors.',
    howToUse: {
      steps: [
        'Enter room dimensions: Input wall and ceiling areas.',
        'Select sheet size: Choose 4x8, 4x10, or 4x12 sheets.',
        'Choose drywall thickness: Standard is 1/2" for walls, 5/8" for ceilings.',
        'Review materials: See sheets, joint compound, tape, and screws needed.',
      ],
      additionalInfo: {
        title: 'Drywall Material Standards',
        content: 'Standard 1/2" drywall weighs 1.6 lbs/sq ft. Fire-rated 5/8" Type X weighs 2.2 lbs/sq ft. Joint compound coverage: 350-400 sq ft per 5-gallon bucket.',
      },
    },
  },

  'exterior-paint-calculator': {
    name: 'Exterior Paint Calculator',
    slug: 'exterior-paint-calculator',
    title: 'Exterior Paint Calculator | House Paint by Surface Type',
    description: 'Calculate exterior paint by surface type (siding, trim, doors) using manufacturer coverage rates. 2-3 coat systems with ASTM-standard primer specifications.',
    canonical: `${BASE_URL}/exterior-paint-calculator`,
    keywords: 'exterior paint calculator, house paint calculator, siding paint coverage, exterior primer',
    openGraph: {
      title: 'Exterior Paint Calculator | House Paint by Surface Type',
      description: 'Calculate exterior paint by surface type using manufacturer coverage rates. 2-3 coat systems with primer specs.',
      url: `${BASE_URL}/exterior-paint-calculator`,
      image: OG_IMAGES['exterior-paint'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Exterior Paint Calculator | House Paint by Surface Type',
      description: 'Calculate exterior paint by surface type using manufacturer coverage rates. 2-3 coat systems with primer specs.',
      image: OG_IMAGES['exterior-paint'],
    },
    h1: 'Exterior Paint Calculator',
    intro: 'Calculate exterior paint requirements for siding, trim, doors, and shutters. Accounts for surface texture, number of coats, and primer needs.',
    howToUse: {
      steps: [
        'Measure surfaces: Enter square footage for siding, trim, and other areas.',
        'Select surface texture: Smooth surfaces use less paint than rough.',
        'Choose coating system: Primer + 2 coats recommended for bare wood.',
        'Review gallons needed: See separate amounts for primer and finish coats.',
      ],
      additionalInfo: {
        title: 'Exterior Paint Coverage Standards',
        content: 'Smooth siding: 350-400 sq ft/gal. Rough wood: 250-300 sq ft/gal. Stucco: 150-200 sq ft/gal. Always prime bare wood and metal.',
      },
    },
  },

  'fence-calculator': {
    name: 'Fence Calculator',
    slug: 'fence-calculator',
    title: 'Fence Calculator | Posts, Rails & Pickets',
    description: 'Calculate fence materials including posts, rails & pickets. Standard 6-8 ft post spacing per IRC codes. Works for wood, vinyl & chain link fence systems.',
    canonical: `${BASE_URL}/fence-calculator`,
    keywords: 'fence calculator, fence post calculator, picket fence calculator, fence materials calculator, IRC fence codes',
    openGraph: {
      title: 'Fence Calculator | Posts, Rails & Pickets',
      description: 'Calculate fence materials including posts, rails & pickets. Standard 6-8 ft post spacing per IRC codes.',
      url: `${BASE_URL}/fence-calculator`,
      image: OG_IMAGES.fence,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Fence Calculator | Posts, Rails & Pickets',
      description: 'Calculate fence materials including posts, rails & pickets. Standard 6-8 ft post spacing per IRC codes.',
      image: OG_IMAGES.fence,
    },
    h1: 'Fence Calculator',
    intro: 'Calculate fence materials including posts, rails, pickets, and hardware. Works for wood, vinyl, and chain link fences with customizable post spacing.',
    howToUse: {
      steps: [
        'Enter fence length: Input the total linear feet of fence needed.',
        'Choose fence height: Select from standard heights (4 ft, 6 ft, 8 ft).',
        'Select post spacing: Typical spacing is 6-8 feet per IRC standards.',
        'Review materials: See posts, rails, pickets, and hardware needed.',
      ],
      additionalInfo: {
        title: 'Fence Material Standards',
        content: 'Posts should be set 2-3 feet deep in concrete per IRC R703. Post spacing typically ranges from 6-8 feet on center. Use 4×4 posts for 6-foot fences.',
      },
    },
  },

  'flooring-calculator': {
    name: 'Flooring Calculator',
    slug: 'flooring-calculator',
    title: 'Flooring Calculator | Tile, Hardwood & More',
    description: 'Calculate exact boxes needed for tile, hardwood, laminate, vinyl & carpet. Includes NWFA/NTCA waste factors by installation pattern. Free instant results.',
    canonical: `${BASE_URL}/flooring-calculator`,
    keywords: 'flooring calculator, tile calculator, hardwood flooring calculator, laminate calculator, NWFA standards',
    openGraph: {
      title: 'Flooring Calculator | Tile, Hardwood & More',
      description: 'Calculate exact boxes needed for tile, hardwood, laminate, vinyl & carpet. Includes NWFA/NTCA waste factors.',
      url: `${BASE_URL}/flooring-calculator`,
      image: OG_IMAGES.flooring,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Flooring Calculator | Tile, Hardwood & More',
      description: 'Calculate exact boxes needed for tile, hardwood, laminate, vinyl & carpet. Includes NWFA/NTCA waste factors.',
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
        content: 'Add 10% waste for straight installations per NWFA standards, 15% for diagonal, 20% for herringbone. Hardwood and laminate boxes cover 20-30 sq ft.',
      },
    },
  },

  'interior-paint-calculator': {
    name: 'Interior Paint Calculator',
    slug: 'interior-paint-calculator',
    title: 'Interior Paint Calculator | Room Paint Needed',
    description: 'Calculate interior paint for walls, ceilings & trim. Standard coverage: 350-400 sq ft/gallon. Includes primer calculations & 2-coat systems for new drywall.',
    canonical: `${BASE_URL}/interior-paint-calculator`,
    keywords: 'interior paint calculator, room paint calculator, wall paint calculator, ceiling paint calculator',
    openGraph: {
      title: 'Interior Paint Calculator | Room Paint Needed',
      description: 'Calculate interior paint for walls, ceilings & trim. Standard coverage: 350-400 sq ft/gallon.',
      url: `${BASE_URL}/interior-paint-calculator`,
      image: OG_IMAGES['interior-paint'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Interior Paint Calculator | Room Paint Needed',
      description: 'Calculate interior paint for walls, ceilings & trim. Standard coverage: 350-400 sq ft/gallon.',
      image: OG_IMAGES['interior-paint'],
    },
    h1: 'Interior Paint Calculator',
    intro: 'Calculate paint requirements for interior walls, ceilings, and trim. Accounts for doors, windows, and number of coats needed.',
    howToUse: {
      steps: [
        'Enter room dimensions: Input length, width, and ceiling height.',
        'Subtract openings: Enter number of doors and windows.',
        'Select surfaces: Choose walls, ceiling, trim, or all.',
        'Review paint needed: See gallons per coat for each surface.',
      ],
      additionalInfo: {
        title: 'Interior Paint Coverage Standards',
        content: 'Standard coverage is 350-400 sq ft per gallon on smooth drywall. Textured surfaces reduce coverage to 250-300 sq ft/gal. Prime new drywall before painting.',
      },
    },
  },

  'mulch-calculator': {
    name: 'Mulch Calculator',
    slug: 'mulch-calculator',
    title: 'Mulch Calculator | Cubic Yards & Bags by Depth',
    description: 'Calculate mulch volume in cubic yards & 2 cu ft bags. Recommended depths: 2-3" for landscape beds, 3-4" for playgrounds. Free bulk vs bagged comparison.',
    canonical: `${BASE_URL}/mulch-calculator`,
    keywords: 'mulch calculator, cubic yards mulch, mulch bags needed, landscape mulch calculator',
    openGraph: {
      title: 'Mulch Calculator | Cubic Yards & Bags by Depth',
      description: 'Calculate mulch volume in cubic yards & 2 cu ft bags. Recommended depths: 2-3" for beds, 3-4" for playgrounds.',
      url: `${BASE_URL}/mulch-calculator`,
      image: OG_IMAGES.mulch,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mulch Calculator | Cubic Yards & Bags by Depth',
      description: 'Calculate mulch volume in cubic yards & 2 cu ft bags. Recommended depths: 2-3" for beds, 3-4" for playgrounds.',
      image: OG_IMAGES.mulch,
    },
    h1: 'Mulch Calculator',
    intro: 'Calculate mulch volume and bags needed for landscaping projects. Supports different mulch types and depth recommendations.',
    howToUse: {
      steps: [
        'Measure bed area: Enter length and width of landscape beds.',
        'Select mulch depth: 2-3 inches for beds, 3-4 inches for playgrounds.',
        'Choose mulch type: Hardwood, cedar, pine bark, or rubber.',
        'Review volume: See cubic yards for bulk or bags (2 cu ft) needed.',
      ],
      additionalInfo: {
        title: 'Mulch Depth Recommendations',
        content: 'Standard landscape beds: 2-3 inches. Weed suppression: 3-4 inches. Playground safety surfaces: 6-12 inches depending on fall height per ASTM F1292.',
      },
    },
  },

  'roofing-calculator': {
    name: 'Roofing Calculator',
    slug: 'roofing-calculator',
    title: 'Roofing Calculator | Squares, Shingles & Materials',
    description: 'Calculate roofing squares, shingle bundles & underlayment using NRCA specifications. Includes pitch multipliers, ridge caps & IRC R905 ventilation requirements.',
    canonical: `${BASE_URL}/roofing-calculator`,
    keywords: 'roofing calculator, shingle calculator, roofing squares calculator, NRCA standards, roof pitch multiplier',
    openGraph: {
      title: 'Roofing Calculator | Squares, Shingles & Materials',
      description: 'Calculate roofing squares, shingle bundles & underlayment using NRCA specs. Includes pitch multipliers & ridge caps.',
      url: `${BASE_URL}/roofing-calculator`,
      image: OG_IMAGES.roofing,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Roofing Calculator | Squares, Shingles & Materials',
      description: 'Calculate roofing squares, shingle bundles & underlayment using NRCA specs. Includes pitch multipliers & ridge caps.',
      image: OG_IMAGES.roofing,
    },
    h1: 'Roofing Calculator',
    intro: 'Calculate roofing materials including shingles, underlayment, and ridge caps. Accounts for roof pitch, waste factors, and code requirements.',
    howToUse: {
      steps: [
        'Measure roof area: Input roof dimensions in square feet.',
        'Enter roof pitch: Select pitch (4/12, 6/12, 8/12, etc.).',
        'Calculate ridges & hips: Enter linear feet if applicable.',
        'Review materials: See roofing squares, bundles, and accessories needed.',
      ],
      additionalInfo: {
        title: 'Roofing Material Standards',
        content: 'One roofing square = 100 sq ft. Standard 3-tab shingles: 3 bundles per square. Architectural shingles: 4 bundles per square. Add 10-15% waste per NRCA guidelines.',
      },
    },
  },

  'siding-calculator': {
    name: 'Siding Calculator',
    slug: 'siding-calculator',
    title: 'Siding Calculator | Vinyl, Fiber Cement & Wood',
    description: 'Calculate siding materials for vinyl, fiber cement, wood & metal. Coverage by panel type with ASTM installation specs. Includes 10-15% waste & trim accessories.',
    canonical: `${BASE_URL}/siding-calculator`,
    keywords: 'siding calculator, vinyl siding calculator, fiber cement calculator, house siding materials, ASTM siding',
    openGraph: {
      title: 'Siding Calculator | Vinyl, Fiber Cement & Wood',
      description: 'Calculate siding materials for vinyl, fiber cement, wood & metal. Coverage by panel type with ASTM specs.',
      url: `${BASE_URL}/siding-calculator`,
      image: OG_IMAGES.siding,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Siding Calculator | Vinyl, Fiber Cement & Wood',
      description: 'Calculate siding materials for vinyl, fiber cement, wood & metal. Coverage by panel type with ASTM specs.',
      image: OG_IMAGES.siding,
    },
    h1: 'Siding Calculator',
    intro: 'Estimate siding materials for exterior wall coverage. Works for vinyl, fiber cement, wood, and metal siding with waste factors.',
    howToUse: {
      steps: [
        'Measure wall area: Input total square footage of exterior walls.',
        'Select siding type: Choose vinyl, fiber cement, wood, or metal.',
        'Subtract openings: Enter square footage of doors and windows.',
        'Review materials: See panels/boards, trim, and accessories needed.',
      ],
      additionalInfo: {
        title: 'Siding Coverage Standards',
        content: 'Vinyl siding: 1 square = 100 sq ft installed. Fiber cement 4x8 sheets: 32 sq ft per sheet. Add 10% waste for vertical, 15% for diagonal installation per ASTM D4756.',
      },
    },
  },
};

// Helper function to get calculator data by slug
export function getCalculatorData(slug) {
  return calculatorData[slug];
}

// Get all calculator slugs (useful for sitemap generation)
export function getAllCalculatorSlugs() {
  return Object.keys(calculatorData);
}