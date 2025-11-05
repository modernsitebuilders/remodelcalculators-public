// Data for Siding Calculator trust-building components
// Based on ASTM standards and manufacturer specifications

export const sidingMethodology = {
  calculatorType: "siding",
  source: "ASTM Standards & IRC",
  formulas: [
    {
      name: "Total Wall Area",
      formula: "Area = (Perimeter × Height) - Openings",
      explanation: "Calculate house perimeter, multiply by wall height, subtract windows and doors for net coverage area.",
      example: "House 40ft × 30ft = 140ft perimeter × 10ft height = 1,400 sq ft - 200 sq ft openings = 1,200 sq ft"
    },
    {
      name: "Gable End Area",
      formula: "Gable Area = (Base Width × Height) ÷ 2",
      explanation: "Triangular gable ends calculated as half the area of rectangle (base times height divided by 2).",
      example: "Gable 30ft wide × 8ft tall = (30 × 8) ÷ 2 = 120 square feet"
    },
    {
      name: "Total Coverage Area",
      formula: "Total = Wall Area + Gable Area",
      explanation: "Add rectangular wall sections and triangular gable ends for complete coverage.",
      example: "1,200 sq ft walls + 240 sq ft gables (2 ends) = 1,440 sq ft total"
    },
    {
      name: "Siding Squares Required",
      formula: "Squares = Total Area ÷ 100",
      explanation: "Like roofing, siding is sold by the 'square' (100 sq ft). Divide total area by 100.",
      example: "1,440 sq ft ÷ 100 = 14.4 squares → order 15 squares"
    },
    {
      name: "Waste Factor Adjustment",
      formula: "Total = Base Amount × (1 + Waste Factor)",
      explanation: "Add waste for cuts, corners, and mistakes. Simple rectangles: 10%, complex shapes: 15%.",
      example: "15 squares × 1.10 (10% waste) = 16.5 → order 17 squares"
    },
    {
      name: "Linear Feet of Trim",
      formula: "Trim = (Perimeter + Windows + Doors) × 2",
      explanation: "Estimate trim at corners, windows, and doors. Multiply perimeter plus openings by 2 for rough estimate.",
      example: "(140ft perimeter + 60ft openings) × 2 = 400 linear feet trim"
    },
    {
      name: "Vinyl Siding Panels (by exposure)",
      formula: "Panels = Area ÷ Panel Coverage",
      explanation: "Vinyl panels cover 1.2-1.5 sq ft each depending on exposure width (4-inch to 6-inch).",
      example: "1,200 sq ft ÷ 1.4 sq ft per panel = 857 panels (approximately 35 boxes at 24 panels/box)"
    }
  ],
  constants: [
    {
      name: "Siding Square",
      value: "100 sq ft",
      description: "Standard unit - one 'square' covers 100 square feet"
    },
    {
      name: "Simple House Waste",
      value: "10%",
      description: "Rectangular homes with standard openings"
    },
    {
      name: "Complex House Waste",
      value: "15-20%",
      description: "Multiple gables, bay windows, complex shapes"
    },
    {
      name: "Vinyl Panel Coverage (4-inch)",
      value: "1.2 sq ft/panel",
      description: "Narrow profile vinyl siding"
    },
    {
      name: "Vinyl Panel Coverage (6-inch)",
      value: "1.5 sq ft/panel",
      description: "Wide profile vinyl siding (Dutch lap style)"
    },
    {
      name: "Fiber Cement Board (8.25-inch)",
      value: "2.9 sq ft/board",
      description: "HardiePlank standard 12-foot length"
    },
    {
      name: "Fiber Cement Board (6.25-inch)",
      value: "2.2 sq ft/board",
      description: "Narrower exposure for traditional look"
    },
    {
      name: "Standard Door Size",
      value: "21 sq ft",
      description: "7ft × 3ft typical"
    },
    {
      name: "Standard Window Size",
      value: "15 sq ft",
      description: "5ft × 3ft average"
    }
  ]
};

export const sidingStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "ASTM D6864 - Practice for Installation of Exterior Wood Siding",
      code: "ASTM D6864",
      description: "Standards for wood and wood-composite siding installation including moisture content requirements, nailing specifications, clearances, and finish guidelines.",
      url: "https://www.astm.org/d6864-04r20.html",
      requirements: [
        "Moisture content: Maximum 15% at installation (12% preferred)",
        "Clearance: 6-inch minimum from grade, 1-2 inches from decks/concrete",
        "Nailing: Penetrate framing 1-1/2 inches, ring-shank or hot-dip galvanized nails",
        "End joints: Stagger by minimum 16 inches vertically, caulk all end joints",
        "Back-priming: All six sides of wood boards before installation (prevents cupping)"
      ],
      appliesTo: "Wood lap siding, board-and-batten, and engineered wood products"
    },
    {
      name: "ASTM D3679 - Rigid Poly(Vinyl Chloride) (PVC) Siding",
      code: "ASTM D3679",
      description: "Material specifications and installation standards for vinyl siding including impact resistance, wind load ratings, expansion allowances, and fastening methods.",
      url: "https://www.astm.org/d3679-24.html",
      requirements: [
        "Expansion gaps: 1/4 to 1/2 inch at trim (vinyl expands/contracts with temperature)",
        "Fastener placement: Center of slot, allow panel to move, don't overdrive",
        "Nail penetration: Minimum 3/4 inch into solid wood or approved sheathing",
        "Wind rating: Standard 110 mph, enhanced 160 mph in hurricane zones",
        "Substrate: Flat, smooth surface required - OSB or plywood sheathing recommended"
      ],
      appliesTo: "Vinyl and polymer siding installations"
    },
    {
      name: "ASTM C1186 - Flat Fiber-Cement Siding",
      code: "ASTM C1186",
      description: "Specifications for fiber-cement siding products (HardiePlank, James Hardie) including composition, strength, moisture resistance, and installation requirements.",
      url: "https://www.astm.org/c1186-16r21.html",
      requirements: [
        "Nailing: Face nailing only (no blind nailing), corrosion-resistant nails required",
        "Clearance: Minimum 6 inches from grade, 2 inches from horizontal surfaces",
        "Joint treatment: All field-cut edges must be sealed (paint or caulk)",
        "Fastener spacing: 16 inches maximum on studs 16 inches on-center",
        "Substrate: Minimum 7/16-inch OSB or 1/2-inch plywood sheathing"
      ],
      appliesTo: "Fiber-cement lap siding and panel products"
    },
    {
      name: "IRC R703 - Exterior Covering",
      code: "IRC 2021 Section R703",
      description: "Building code requirements for exterior wall coverings including water-resistive barriers, flashing, attachment specifications, and weather protection standards.",
      url: "https://codes.iccsafe.org/content/IRC2021P3",
      requirements: [
        "Water-resistive barrier: Required behind all siding (felt paper, house wrap, etc.)",
        "Flashing: Required at all penetrations, windows, doors, and horizontal transitions",
        "Clearance to grade: 6-inch minimum for wood siding, varies by material",
        "Ventilation: Proper cavity ventilation prevents moisture accumulation",
        "Fastening: Must penetrate studs or approved sheathing per manufacturer specs"
      ],
      appliesTo: "All residential exterior siding installations"
    },
    {
      name: "Vinyl Siding Institute (VSI) Installation Manual",
      code: "VSI Standards",
      description: "Comprehensive installation guidelines from vinyl siding industry association. Covers proper handling, storage, fastening, and troubleshooting for vinyl siding installations.",
      url: "https://www.vinylsiding.org/",
      requirements: [
        "Temperature considerations: Don't install below 40°F (vinyl becomes brittle)",
        "Fastening: Leave 1/32-inch gap between nail head and panel for expansion",
        "Starter strip: Critical for first course, must be level and straight",
        "J-channel: Required at all windows, doors, and trim transitions",
        "Accessories: Corners, trim, and accessories must match siding brand for fit"
      ],
      appliesTo: "Vinyl siding professional installation standards"
    },
    {
      name: "James Hardie Installation Guidelines",
      code: "Manufacturer Specifications",
      description: "Leading fiber-cement manufacturer's installation requirements. Following these precisely is required for warranty coverage. Covers climate-specific installation methods.",
      url: "https://www.jameshardie.com/",
      requirements: [
        "Climate zones: Different installation for HZ5 (dry) vs HZ10 (wet) climates",
        "Nailing: Blind nailing prohibited, face nailing only with approved fasteners",
        "Joint spacing: 1/4-inch gaps required at all butt joints for caulking",
        "Painting: Pre-primed boards must be painted within 180 days",
        "Warranty: 30-year product warranty requires professional installation following manual"
      ],
      appliesTo: "HardiePlank and other James Hardie fiber-cement products"
    }
  ]
};

export const sidingRegionalVariations = {
  warningMessage: "Siding requirements vary significantly by climate, wind exposure, and moisture levels. Material selection, installation methods, and maintenance schedules differ by region.",
  variations: [
    {
      title: "Wind Zone Requirements and Hurricane Ratings",
      subtitle: "High-wind areas require enhanced fastening",
      description: "Coastal and high-wind areas require siding rated for wind uplift and enhanced fastening methods. Hurricane zones have specific product testing and installation requirements.",
      examples: [
        { region: "Zone I (85-100 mph) - Most of US", requirement: "Standard vinyl (110 mph rating), normal fastening schedules adequate" },
        { region: "Zone II (100-120 mph) - Coastal areas", requirement: "Enhanced vinyl (130 mph), closer fastener spacing, additional attachment" },
        { region: "Zone III (120-140 mph) - FL, Gulf Coast", requirement: "Hurricane-rated vinyl (160 mph), specialized fastening, impact-resistant products" },
        { region: "Zone IV (>140 mph) - FL Keys, extreme coast", requirement: "Engineered systems only, may require structural panel systems, extensive testing/certification" }
      ],
      impact: "Wrong siding for wind zone voids insurance and results in blow-off damage. Hurricane-rated siding costs 20-30% more but required in high-wind zones."
    },
    {
      title: "Moisture Management by Climate",
      subtitle: "Wet vs. dry climate installation differences",
      description: "Wet climates require enhanced water management (rain screens, drainage planes) while dry climates focus on expansion/contraction. Fiber-cement manufacturers specify different methods for wet vs. dry zones.",
      examples: [
        { region: "Wet climates (Pacific NW, Southeast)", requirement: "Rain screen or furring strips required, enhanced flashing, cavity ventilation critical" },
        { region: "Very wet (PNW coast, >40 inches rain)", requirement: "Full rain screen system mandatory for fiber cement, premium weather barriers" },
        { region: "Moderate moisture (Northeast, Midwest)", requirement: "Standard weather barriers adequate, proper flashing essential" },
        { region: "Dry climates (Southwest, <20 inches rain)", requirement: "Standard installation, focus on thermal expansion accommodation" },
        { region: "James Hardie HZ10 zones (wet)", requirement: "Specific installation methods required for warranty, includes rain screen or special flashing" }
      ],
      impact: "Wrong moisture management causes siding rot, mold, and failure. Wet climate fiber-cement without rain screen fails in 10-15 years vs. 50+ year life with proper installation."
    },
    {
      title: "Freeze-Thaw Cycle Considerations",
      subtitle: "Cold climate material selection and installation",
      description: "Freeze-thaw cycles stress siding through expansion/contraction and ice formation. Some materials handle cold better than others. Installation timing and methods differ in cold climates.",
      examples: [
        { region: "Northern states (heavy freeze-thaw)", requirement: "Vinyl performs well (flexible), wood requires premium paint/stain, fiber cement needs proper clearances" },
        { region: "Moderate freeze (PA, OH, IA)", requirement: "All materials work with proper installation, maintenance critical for wood" },
        { region: "Extreme cold (MN, ND, WY)", requirement: "Vinyl can become brittle (<-20°F), consider fiber cement or insulated vinyl" },
        { region: "No-freeze zones (South, Southwest)", requirement: "No freeze restrictions, but thermal expansion still important for vinyl" }
      ],
      impact: "Brittle vinyl cracks in extreme cold. Wood siding fails if paint/stain not maintained (water intrusion, freeze damage). Proper installation and material selection extend life 2-3×."
    },
    {
      title: "Wildfire Zone Requirements",
      subtitle: "Non-combustible and fire-resistant siding",
      description: "High wildfire risk areas increasingly require or incentivize fire-resistant siding. Vinyl melts, wood burns - fiber cement and metal preferred in fire zones.",
      examples: [
        { region: "California WUI (Wildland-Urban Interface)", requirement: "Class A fire-rated siding required within defensible space, vinyl often prohibited" },
        { region: "Colorado, Oregon fire zones", requirement: "Fire-resistant siding strongly recommended, insurance discounts for fiber cement/metal" },
        { region: "Extreme fire hazard areas", requirement: "Non-combustible only (fiber cement, metal, stucco), wood and vinyl prohibited near property lines" },
        { region: "Moderate risk", requirement: "No restrictions but fiber cement provides peace of mind and insurance benefits" }
      ],
      impact: "Vinyl siding melts at 160-180°F, wood ignites at 500-700°F. Non-combustible siding (fiber cement) prevents structure loss. Insurance savings often offset material cost difference."
    },
    {
      title: "UV Exposure and Fading",
      subtitle: "Color retention in high-sun areas",
      description: "UV radiation causes siding color fading, especially dark colors. Southern and southwestern exposures fade fastest. Material and color selection affects long-term appearance.",
      examples: [
        { region: "High UV (Southwest, South)", requirement: "Light colors recommended (dark vinyl fades and warps), fade-resistant vinyl premium, fiber cement best color retention" },
        { region: "Extreme UV (Arizona, New Mexico)", requirement: "Avoid dark vinyl (warping risk), fiber cement or stucco preferred, premium fade-resistant vinyl if using vinyl" },
        { region: "Moderate UV (Most regions)", requirement: "Standard vinyl acceptable, 10-year fade warranties common" },
        { region: "Low UV (PNW, Northeast)", requirement: "All colors work, fading minimal concern" }
      ],
      impact: "Dark vinyl in high-UV areas fades noticeably in 5-7 years and may warp. Fiber cement holds color 2-3× longer. Replacement costs $6-12 per sq ft."
    },
    {
      title: "Termite and Pest Considerations",
      subtitle: "Pest-resistant materials in high-risk areas",
      description: "Wood siding attracts termites and carpenter ants in high-risk areas. Vinyl and fiber cement are pest-proof but improper installation can create pest entry points.",
      examples: [
        { region: "High termite risk (Southeast)", requirement: "Fiber cement or vinyl preferred over wood, treat wood siding with borate, maintain 6-inch ground clearance" },
        { region: "Carpenter ant zones (Northeast)", requirement: "Avoid untreated wood, keep siding 6+ inches from mulch, seal all penetrations" },
        { region: "Woodpecker damage areas", requirement: "Fiber cement resists pecking, wood and vinyl susceptible, add deterrents (visual, sound)" },
        { region: "Low pest risk", requirement: "All materials suitable, standard installation practices" }
      ],
      impact: "Termite damage to wood siding costs $3,000-8,000 to repair. Fiber cement eliminates pest food source. Prevention saves money long-term."
    },
    {
      title: "HOA and Historic District Restrictions",
      subtitle: "Aesthetic and material requirements",
      description: "Many communities restrict siding materials, colors, and styles. Historic districts may require specific materials and prohibit modern synthetics.",
      examples: [
        { region: "Strict HOAs", requirement: "Approved colors/materials only (often earth tones), vinyl may be restricted, pre-approval required" },
        { region: "Historic districts", requirement: "Wood siding often required, fiber cement acceptable if replicates wood, vinyl usually prohibited" },
        { region: "Luxury communities", requirement: "Premium materials only (fiber cement, real wood, stone), vinyl prohibited" },
        { region: "No restrictions", requirement: "Any material and color acceptable" }
      ],
      impact: "Installing unapproved siding results in forced removal ($6-12 per sq ft wasted). Always get written HOA approval before purchasing materials."
    },
    {
      title: "Coastal Salt Air Exposure",
      subtitle: "Corrosion-resistant materials and fasteners",
      description: "Salt air accelerates corrosion of metal components and degrades some siding materials. Coastal installations require corrosion-resistant fasteners and materials.",
      examples: [
        { region: "Within 1 mile of ocean", requirement: "Stainless steel fasteners mandatory, galvanized corrodes in 5-10 years, enhanced paint systems for wood" },
        { region: "Direct salt spray (<500 ft from water)", requirement: "Fiber cement or vinyl only (wood fails quickly), marine-grade fasteners, frequent washing" },
        { region: "Near ocean (1-5 miles)", requirement: "Hot-dip galvanized or stainless fasteners, standard materials with enhanced maintenance" },
        { region: "Inland", requirement: "Standard galvanized fasteners adequate for all materials" }
      ],
      impact: "Wrong fasteners in salt air corrode, causing stains and structural failure. Stainless steel fasteners cost 3-5× more but essential in direct salt spray zones."
    },
    {
      title: "Energy Code Compliance and Insulation",
      subtitle: "Thermal performance requirements",
      description: "Some regions require specific R-values for exterior walls. Insulated vinyl siding and continuous insulation behind siding help meet energy codes.",
      examples: [
        { region: "Cold climates (Zone 5-8)", requirement: "Continuous insulation often required, insulated vinyl or foam board behind siding" },
        { region: "Moderate climates (Zone 3-4)", requirement: "Insulation recommended but not always required" },
        { region: "Warm climates (Zone 1-2)", requirement: "Minimal insulation requirements, focus on air sealing" },
        { region: "IECC 2021 compliance", requirement: "Varies by zone - R-20+5 in cold climates (R-20 cavity + R-5 continuous)" }
      ],
      impact: "Energy code non-compliance fails inspection. Continuous insulation adds $1-2 per sq ft but reduces heating/cooling costs 10-20%. Required in new construction."
    }
  ]
};