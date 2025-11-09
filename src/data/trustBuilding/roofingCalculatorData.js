// Data for Roofing Calculator trust-building components
// Based on NRCA, IRC, and industry standards

export const roofingMethodology = {
  calculatorType: "roofing",
  source: "NRCA & IRC R905",
  formulas: [
    {
      name: "Roof Footprint Area",
      formula: "Footprint = Length × Width",
      explanation: "Calculate the flat (horizontal) area of the roof by multiplying length and width. This is the area if the roof were flat.",
      example: "40 ft × 30 ft house = 1,200 square feet footprint"
    },
    {
      name: "Pitch Multiplier Calculation",
      formula: "Multiplier = √(1 + (Rise ÷ 12)²)",
      explanation: "Converts roof pitch to a multiplier. Steeper roofs have larger surface area than their footprint. Rise = vertical inches per 12 horizontal inches.",
      example: "6:12 pitch (6 inch rise): √(1 + (6 ÷ 12)²) = √(1 + 0.25) = 1.118 multiplier"
    },
    {
      name: "Actual Roof Area",
      formula: "Actual Area = Footprint × Pitch Multiplier",
      explanation: "Multiply footprint by pitch multiplier to get true roof surface area that must be covered with shingles.",
      example: "1,200 sq ft × 1.118 = 1,342 square feet actual roof area"
    },
    {
      name: "Roofing Squares",
      formula: "Squares = Actual Area ÷ 100",
      explanation: "Roofing materials are sold by the 'square' (100 sq ft). Divide actual roof area by 100, always round up.",
      example: "1,342 sq ft ÷ 100 = 13.42 squares → round up to 14 squares"
    },
    {
      name: "Waste Factor Adjustment",
      formula: "Total Squares = Base Squares × (1 + Waste Factor)",
      explanation: "Add waste factor for cuts, valleys, hips, and mistakes. Simple roofs use 10%, complex roofs use 15%.",
      example: "14 squares × 1.10 (10% waste) = 15.4 squares → round up to 16 squares"
    },
    {
      name: "Shingle Bundles Required",
      formula: "Bundles = Total Squares × Bundles per Square",
      explanation: "3-tab shingles = 3 bundles per square. Architectural/dimensional = 3-4 bundles per square depending on brand.",
      example: "16 squares × 3 bundles = 48 bundles (3-tab shingles)"
    },
    {
      name: "Ridge Cap Linear Feet",
      formula: "Ridge Cap = Ridge Length + Hip Length + Valley Length",
      explanation: "Measure all peak ridges, hip ridges, and valleys that need cap shingles.",
      example: "40 ft ridge + 20 ft hip = 60 linear feet ridge cap needed"
    },
    {
      name: "Ridge Cap Bundles",
      formula: "Cap Bundles = Linear Feet ÷ Coverage per Bundle",
      explanation: "Standard ridge cap bundles cover 30-33 linear feet. Always round up.",
      example: "60 linear feet ÷ 30 = 2 bundles ridge cap"
    }
  ],
  constants: [
    {
      name: "Roofing Square",
      value: "100 sq ft",
      description: "Industry standard unit - one 'square' covers 100 square feet"
    },
    {
      name: "3-Tab Shingles",
      value: "3 bundles/square",
      description: "Standard 3-tab asphalt shingles, covers 33.3 sq ft per bundle"
    },
    {
      name: "Architectural Shingles",
      value: "3-4 bundles/square",
      description: "Thicker dimensional shingles, verify with manufacturer"
    },
    {
      name: "Simple Roof Waste",
      value: "10%",
      description: "Gable roofs with few valleys or hips"
    },
    {
      name: "Complex Roof Waste",
      value: "15%",
      description: "Multiple hips, valleys, dormers, or complex shapes"
    },
    {
      name: "Underlayment Coverage",
      value: "400 sq ft/roll",
      description: "Standard 15-pound felt roll, or 1,000 sq ft for synthetic"
    },
    {
      name: "Ridge Cap Coverage",
      value: "30-33 ft/bundle",
      description: "Standard ridge cap shingle bundle coverage"
    },
    {
      name: "Starter Strip Coverage",
      value: "105-120 ft/bundle",
      description: "Perimeter eave and rake edges"
    }
  ]
};

export const roofingStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "National Roofing Contractors Association (NRCA) Standards",
      code: "NRCA Guidelines",
      description: "Comprehensive industry standards for residential and commercial roofing installation, materials, and best practices. Covers shingle application, underlayment requirements, flashing details, and ventilation specifications.",
      url: "https://www.nrca.net/roofing-guidelines/codes-standards",
      requirements: [
        "Minimum 4-inch headlap for asphalt shingles (exposure)",
        "Six nails per shingle minimum (four for 3-tab, six for architectural)",
        "Nail placement: 1 inch from edges, proper penetration depth",
        "Starter course required at eaves and rakes",
        "Ice and water shield in valleys and eaves (cold climates)",
        "Proper ventilation: 1 sq ft per 150 sq ft attic space"
      ],
      appliesTo: "All residential asphalt shingle installations"
    },
    {
      name: "International Residential Code (IRC) R905 - Roof Coverings",
      code: "IRC 2021 Section R905",
      description: "Building code requirements for roof covering materials, application methods, and structural requirements. Specifies minimum slopes, underlayment, flashing, and attachment standards.",
      url: "https://codes.iccsafe.org/content/IRC2021P3",
      requirements: [
        "Asphalt shingles: Minimum 2:12 pitch (9.5 degrees)",
        "Underlayment required on all roof decks before shingles",
        "Ice barrier required in areas with average daily temp ≤ 25°F (January)",
        "Wind resistance: Class D minimum (90 mph), higher for coastal",
        "Impact resistance ratings in hail-prone areas",
        "Roof deck must be minimum 7/16 inch OSB or 1/2 inch plywood"
      ],
      appliesTo: "All residential roof installations subject to IRC"
    },
    {
      name: "ASTM D3462 - Asphalt Shingles (Organic Felt)",
      code: "ASTM D3462",
      description: "Material specifications for organic felt-based asphalt shingles including weight, thickness, granule adhesion, and tear resistance standards.",
      url: "https://kelid1.ir/FilesUp/ASTM_STANDARS_971222/D3462.PDF",
      requirements: [
        "Minimum weight standards by shingle type",
        "Granule adhesion requirements for wind resistance",
        "Tear strength minimums for durability",
        "Water absorption limits for weather resistance"
      ],
      appliesTo: "Traditional organic-based asphalt shingles (less common now)"
    },
    {
      name: "ASTM D7611 - Asphalt Shingles (Glass Fiber Reinforced)",
      code: "ASTM D7611",
      description: "Performance standards for modern fiberglass-reinforced asphalt shingles. Covers impact resistance, wind uplift resistance, and Class A fire rating requirements.",
      url: "https://www.astm.org/d7611_d7611m-20.html",
      requirements: [
        "Class A, B, or C fire resistance rating (A is highest)",
        "Wind resistance: Class D (90 mph), F (110 mph), H (150 mph)",
        "Impact resistance: Class 1-4 (4 is highest, hail resistant)",
        "Minimum tensile strength and tear resistance"
      ],
      appliesTo: "Modern fiberglass asphalt shingles (most common today)"
    },
    {
      name: "IRC R806 - Roof Ventilation",
      code: "IRC Section R806",
      description: "Requirements for attic and roof ventilation to prevent moisture buildup, ice dams, and premature shingle failure. Balances intake and exhaust ventilation.",
      url: "https://codes.iccsafe.org/content/IRC2021P3",
      requirements: [
        "Minimum 1/150 ratio: 1 sq ft vent per 150 sq ft attic space",
        "Can reduce to 1/300 if 50-80% is high ventilation (ridge vent)",
        "Balanced ventilation: Equal intake (soffit) and exhaust (ridge)",
        "Net free area (NFA) accounts for screen/louver restrictions",
        "Baffles required to maintain airflow at eaves"
      ],
      appliesTo: "All vented attic spaces under roof decks"
    },
    {
      name: "Manufacturer Specifications and Warranties",
      code: "Varies by Brand",
      description: "Shingle manufacturers provide specific installation instructions that must be followed to maintain warranty validity. Specifications vary by product line and may differ from code minimums.",
      requirements: [
        "Nail count: Some architectural shingles require 6 nails per shingle",
        "Specific starter strip products required for warranty",
        "Underlayment type requirements (synthetic vs. felt)",
        "Maximum and minimum temperature ranges for installation",
        "High-wind applications may require additional adhesive strips"
      ],
      appliesTo: "Warranty compliance - always consult product installation guide"
    }
  ]
};

export const roofingRegionalVariations = {
  warningMessage: "Roofing requirements vary significantly by climate zone, wind exposure, and local codes. Always verify wind rating, ice dam protection, ventilation, and permit requirements for your specific location.",
  variations: [
    {
      title: "Wind Zone Requirements and Hurricane Straps",
      subtitle: "IRC R905.2.5 - Wind Resistance Classification",
      description: "Coastal areas and high-wind zones require enhanced wind-rated shingles and installation methods. Wind zones range from Zone I (85-100 mph) to Zone IV (>140 mph), with each requiring progressively stronger materials and attachment methods.",
      examples: [
        { region: "Inland areas (most of US)", requirement: "Class D shingles (90 mph wind rating), standard 4-6 nail installation" },
        { region: "Zone II (Coastal Carolina, TX)", requirement: "Class F shingles (110 mph), 6 nails per shingle, sealed edges" },
        { region: "Zone III (South Florida)", requirement: "Class H shingles (150 mph), enhanced nailing pattern, roof deck attachment" },
        { region: "Zone IV (Florida Keys, extreme coast)", requirement: "Impact-resistant, engineered attachment, hurricane clips required" }
      ],
      impact: "High-wind installations require 30-50% more labor and specialized materials. Insurance discounts often available for wind-rated installations in hurricane zones."
    },
    {
      title: "Ice Dam Protection and Cold Climate Requirements",
      subtitle: "IRC R905.2.7.1 - Ice Barrier Required",
      description: "Cold climate areas require ice and water shield membrane at eaves to prevent ice dam damage. Ice dams form when heat escapes through poorly insulated roofs, melting snow that refreezes at eaves.",
      examples: [
        { region: "Areas with avg daily temp ≤ 25°F in January", requirement: "Ice barrier required: minimum 24 inches (2 feet) from eave edge" },
        { region: "Northern states (MN, WI, ME, VT)", requirement: "Ice barrier extended to 36 inches, sometimes 6 feet in severe areas" },
        { region: "Moderate cold (PA, OH, IA)", requirement: "Ice barrier 24-36 inches, valleys protected" },
        { region: "Warm climates (South, Southwest)", requirement: "No ice barrier required by code, still recommended in valleys" }
      ],
      impact: "Ice and water shield costs $75-150 per roll (200 sq ft). Required in cold zones but prevents expensive water damage from ice dams."
    },
    {
      title: "Snow Load and Roof Pitch Requirements",
      subtitle: "IRC R301.6 - Snow Load Design",
      description: "Areas with heavy snowfall have minimum roof pitch requirements to prevent structural overload and ensure snow shedding. Snow loads are measured in pounds per square foot and determine structural requirements.",
      examples: [
        { region: "Heavy snow (Rockies, Northern MN)", requirement: "Design for 50-70 psf snow load, steeper pitches (6:12+) preferred" },
        { region: "Moderate snow (Upper Midwest)", requirement: "30-50 psf snow load design, 4:12 minimum pitch recommended" },
        { region: "Light snow (Mid-Atlantic)", requirement: "20-30 psf snow load, 3:12 pitch acceptable" },
        { region: "No snow (South, Southwest)", requirement: "Code minimum loads apply, 2:12 pitch acceptable for shingles" }
      ],
      impact: "Steeper roofs in snow country cost more to shingle (more surface area) but prevent structural collapse and ice dams."
    },
    {
      title: "Hail Impact Resistance Requirements",
      subtitle: "Insurance and Local Code Requirements",
      description: "Hail-prone areas increasingly require Class 4 impact-resistant shingles either by code or for insurance coverage. Class 4 shingles resist damage from 2-inch hail (golf ball size).",
      examples: [
        { region: "Colorado Front Range, Texas Panhandle", requirement: "Class 4 IR shingles often required, significant insurance discounts (up to 30%)" },
        { region: "Oklahoma, Kansas, Nebraska", requirement: "Class 4 recommended, mandatory for some insurance carriers" },
        { region: "Most other areas", requirement: "Class 3 acceptable, Class 4 optional for premium protection" }
      ],
      impact: "Class 4 IR shingles cost 10-20% more but qualify for insurance discounts and have longer warranties. Many pay for themselves in reduced premiums."
    },
    {
      title: "Fire Rating Requirements",
      subtitle: "IRC R902.1 - Roof Covering Classification",
      description: "Wildfire-prone areas require Class A fire-rated roofing (highest rating). Most modern asphalt shingles meet Class A, but older wood shake roofs do not and may need replacement.",
      examples: [
        { region: "California WUI (Wildland-Urban Interface)", requirement: "Class A fire rating mandatory, non-combustible roofing preferred within defensible space" },
        { region: "Colorado, Oregon wildfire zones", requirement: "Class A required, fire-resistant underlayment recommended" },
        { region: "Most urban/suburban areas", requirement: "Class A standard for insurance and resale value" },
        { region: "Wood shake allowed areas (rare)", requirement: "Class B or C may be permitted, check local fire marshal" }
      ],
      impact: "Class A shingles are standard and add minimal cost. Wood shake ($400-600/square) is banned in many areas due to fire risk."
    },
    {
      title: "Ventilation Requirements by Climate",
      subtitle: "IRC R806 - Varies by climate and insulation",
      description: "Attic ventilation requirements vary based on climate, with cold climates needing more ventilation to prevent ice dams and hot climates needing it to reduce cooling costs.",
      examples: [
        { region: "Cold climates (ice dam prevention)", requirement: "Enhanced ventilation: 1/150 ratio minimum, 1/300 with balanced intake/exhaust" },
        { region: "Hot climates (cooling cost reduction)", requirement: "Ridge vent + soffit vents strongly recommended for summer heat reduction" },
        { region: "All climates", requirement: "Balanced system: 50% intake (soffit), 50% exhaust (ridge), proper baffles at eaves" }
      ],
      impact: "Proper ventilation extends shingle life by 20-30% and reduces energy costs. Ridge vent costs $3-6 per linear foot installed."
    },
    {
      title: "Solar Reflectance and Cool Roof Requirements",
      subtitle: "Energy Code Requirements in Hot Climates",
      description: "Hot climate areas increasingly require or incentivize 'cool roof' shingles with high solar reflectance to reduce urban heat island effect and cooling costs.",
      examples: [
        { region: "California Title 24", requirement: "Cool roof requirements for steep-slope roofs, minimum solar reflectance index (SRI)" },
        { region: "Arizona, Nevada, Texas (voluntary)", requirement: "Cool roof shingles eligible for utility rebates and energy credits" },
        { region: "LEED/green building projects", requirement: "Cool roof credits available for high-reflectance materials" }
      ],
      impact: "Cool roof shingles cost same as standard but reduce cooling costs 10-15% in hot climates. Light colors reflect more than dark."
    },
    {
      title: "Permit and Inspection Requirements",
      subtitle: "Local Building Department Regulations",
      description: "Roofing permits and inspection requirements vary widely. Some jurisdictions require permits for any roof work, others only for full tear-offs or structural changes.",
      examples: [
        { region: "Most urban areas", requirement: "Permit required for tear-off and re-roof, inspection before covering" },
        { region: "Some rural counties", requirement: "No permit for re-roofing over existing shingles (overlay)" },
        { region: "Strict jurisdictions", requirement: "Permit for any roof repair over 100 sq ft" },
        { region: "HOA communities", requirement: "HOA approval required in addition to building permit, color/style restrictions" }
      ],
      impact: "Permit costs typically $200-500. Required for insurance claims and can affect home sale if unpermitted work discovered."
    }
  ]
};