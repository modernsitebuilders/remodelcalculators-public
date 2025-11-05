// Data for Drywall Calculator trust-building components
// Based on Gypsum Association, ASTM, and IRC standards

export const drywallMethodology = {
  calculatorType: "drywall",
  source: "Gypsum Association & ASTM C840",
  formulas: [
    {
      name: "Total Wall Area",
      formula: "Area = 2 × (Length + Width) × Height",
      explanation: "Calculate perimeter of room, multiply by ceiling height to get total wall square footage.",
      example: "12ft × 15ft room with 8ft ceilings: 2 × (12 + 15) × 8 = 432 sq ft walls"
    },
    {
      name: "Ceiling Area",
      formula: "Ceiling = Length × Width",
      explanation: "Simple length times width calculation for flat ceiling coverage.",
      example: "12ft × 15ft = 180 sq ft ceiling"
    },
    {
      name: "Total Drywall Area",
      formula: "Total = Wall Area + Ceiling Area - Openings",
      explanation: "Add walls and ceiling, subtract door and window openings (usually 5-10% of wall area).",
      example: "432 sq ft + 180 sq ft - 30 sq ft openings = 582 sq ft total"
    },
    {
      name: "Number of Sheets (4×8)",
      formula: "Sheets = Total Area ÷ 32",
      explanation: "Standard 4×8 sheet covers 32 square feet. Divide total area by 32 and round up.",
      example: "582 sq ft ÷ 32 = 18.2 sheets → round up to 19 sheets"
    },
    {
      name: "Number of Sheets (4×12)",
      formula: "Sheets = Total Area ÷ 48",
      explanation: "Larger 4×12 sheet covers 48 square feet. Used for ceilings and long walls to reduce seams.",
      example: "180 sq ft ceiling ÷ 48 = 3.75 sheets → round up to 4 sheets (4×12)"
    },
    {
      name: "Waste Factor Adjustment",
      formula: "Total Sheets = Base Sheets × (1 + Waste Factor)",
      explanation: "Add 10-15% for cuts, mistakes, and odd corners. Simple rooms: 10%, complex rooms: 15%.",
      example: "19 sheets × 1.10 (10% waste) = 20.9 → round up to 21 sheets"
    },
    {
      name: "Joint Compound Required",
      formula: "Compound (lbs) = Total Area × 0.05",
      explanation: "Approximately 0.05 pounds per square foot for 3-coat system (tape, fill, finish).",
      example: "582 sq ft × 0.05 = 29 lbs compound → buy 30-35 lb bucket"
    },
    {
      name: "Drywall Screws Required",
      formula: "Screws = Sheets × 60",
      explanation: "Approximately 60 screws per 4×8 sheet at 12-inch spacing on studs 16 inches on-center.",
      example: "21 sheets × 60 = 1,260 screws → buy 1,500-count box (includes extras)"
    }
  ],
  constants: [
    {
      name: "Standard Sheet Size (4×8)",
      value: "32 sq ft",
      description: "Most common size for walls, 4 feet × 8 feet"
    },
    {
      name: "Large Sheet Size (4×12)",
      value: "48 sq ft",
      description: "Used for ceilings and long walls, reduces seams"
    },
    {
      name: "Sheet Thickness",
      value: "1/2 inch",
      description: "Standard for walls and ceilings on 16-inch studs"
    },
    {
      name: "Fire-Code Thickness",
      value: "5/8 inch",
      description: "Type X fire-rated, required for garages and some ceilings"
    },
    {
      name: "Screw Spacing (Field)",
      value: "12 inches",
      description: "Maximum spacing on stud/joist faces per ASTM C840"
    },
    {
      name: "Screw Spacing (Edges)",
      value: "8 inches",
      description: "Closer spacing at panel edges for better seam strength"
    },
    {
      name: "Joint Compound Coverage",
      value: "0.05 lb/sq ft",
      description: "For 3-coat system: tape, fill, and finish coats"
    },
    {
      name: "Paper Tape",
      value: "370 ft/roll",
      description: "Standard roll covers approximately 350-400 linear feet"
    },
    {
      name: "Simple Room Waste",
      value: "10%",
      description: "Rectangular rooms with standard openings"
    },
    {
      name: "Complex Room Waste",
      value: "15%",
      description: "Vaulted ceilings, angled walls, multiple corners"
    }
  ]
};

export const drywallStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "Gypsum Association (GA) Standards",
      code: "GA-216 Application Guidelines",
      description: "Industry standards for gypsum board application including framing requirements, fastener specifications, joint treatment, and finishing levels. Primary reference for professional drywall installation.",
      url: "https://www.gypsum.org/technical/",
      requirements: [
        "Maximum spacing: 16 inches on-center for 1/2-inch board, 24 inches for 5/8-inch",
        "Fastener spacing: 12 inches maximum in field, 8 inches at edges",
        "Three-coat system: Embedding/taping, filler/second coat, finish coat",
        "Level 4 finish standard: Smooth surface, ready for flat paint",
        "Level 5 finish: Critical light areas, requires skim coat over entire surface"
      ],
      appliesTo: "All gypsum board (drywall) installations"
    },
    {
      name: "ASTM C840 - Application and Finishing of Gypsum Board",
      code: "ASTM C840",
      description: "Standard specification for drywall installation covering fastener types, spacing requirements, joint treatment methods, and quality standards for different finish levels.",
      url: "https://www.astm.org/c0840-20.html",
      requirements: [
        "Fastener penetration: Minimum 5/8 inch into wood framing, 3/8 inch into steel",
        "Panel orientation: Perpendicular to framing members reduces sagging",
        "Joint offset: Stagger end joints minimum 24 inches between rows",
        "Corner beads: Metal or vinyl bead required at all outside corners",
        "Control joints: Required in walls exceeding 30 feet or ceiling exceeding 50 feet"
      ],
      appliesTo: "Standard residential and commercial drywall applications"
    },
    {
      name: "ASTM C36 - Gypsum Wallboard Specifications",
      code: "ASTM C36",
      description: "Material specifications for gypsum wallboard including core composition, paper facing, edge treatment, and dimensional tolerances. Ensures consistent product quality.",
      url: "https://www.astm.org/c0036_c0036m-19.html",
      requirements: [
        "Core: Gypsum plaster with paper facing both sides",
        "Tapered edges: Long edges for tape and compound joint finishing",
        "Thickness tolerance: ±1/32 inch for standard sheets",
        "Moisture resistance: Regular vs. green board vs. purple board ratings"
      ],
      appliesTo: "Gypsum board product manufacturing standards"
    },
    {
      name: "ASTM C1396 - Type X Fire-Resistant Gypsum Board",
      code: "ASTM C1396",
      description: "Specifications for fire-resistant gypsum board (Type X) with enhanced fire protection. Required by building codes for specific applications like garage ceilings and common walls.",
      url: "https://www.astm.org/c1396_c1396m-17.html",
      requirements: [
        "Type X designation: Passes 1-hour fire resistance test",
        "Special additives: Glass fibers and other materials enhance fire resistance",
        "Thickness: Typically 5/8 inch (1/2 inch Type X available but less common)",
        "Applications: Garage ceilings, furnace rooms, multi-family common walls"
      ],
      appliesTo: "Fire-rated assemblies and code-required fire protection"
    },
    {
      name: "International Residential Code (IRC) R702 - Interior Covering",
      code: "IRC 2021 Section R702",
      description: "Building code requirements for interior wall and ceiling coverings including drywall thickness, attachment methods, and fire-resistance requirements for specific locations.",
      url: "https://codes.iccsafe.org/content/IRC2021P3",
      requirements: [
        "Minimum thickness: 1/2 inch for 16-inch framing, 5/8 inch for 24-inch",
        "Garage ceiling: 5/8-inch Type X fire-rated drywall required",
        "Furnace room: Type X drywall on ceiling and walls containing equipment",
        "Multi-family common walls: Fire-rated assemblies per code",
        "Moisture areas: Water-resistant board required for tile backing in showers/tubs"
      ],
      appliesTo: "Residential drywall installations governed by IRC"
    },
    {
      name: "GA-214 - Finishing Levels",
      code: "Gypsum Association GA-214",
      description: "Defines five levels of drywall finish from Level 0 (no finish) to Level 5 (highest quality). Specifies appropriate level for different lighting conditions and final finishes.",
      url: "https://www.gypsum.org/wp-content/uploads/2020/10/GA-214-2020.pdf",
      requirements: [
        "Level 0: No taping, finishing, or accessories (temporary construction)",
        "Level 1: Tape embedded, no joint compound beyond tape (not for living spaces)",
        "Level 2: Tape embedded, thin coat compound (behind tile, texture)",
        "Level 3: Tape + 2 coats compound (ready for heavy texture)",
        "Level 4: Tape + 3 coats compound (flat paint, light texture) - STANDARD",
        "Level 5: Tape + 3 coats + skim coat entire surface (critical light, gloss paint)"
      ],
      appliesTo: "Specifying finish quality for contract documents and quality control"
    }
  ]
};

export const drywallRegionalVariations = {
  warningMessage: "Drywall requirements vary by climate (moisture concerns), building codes (fire ratings), and project scope. Humidity, fire codes, and ceiling heights can significantly affect material selection and installation methods.",
  variations: [
    {
      title: "Moisture-Resistant Drywall Requirements",
      subtitle: "High-humidity areas and wet locations",
      description: "Humid climates and wet locations (bathrooms, basements) require moisture-resistant or mold-resistant drywall. Standard paper-faced drywall promotes mold growth in high-moisture environments.",
      examples: [
        { region: "Bathrooms (all areas)", requirement: "Green board or purple board (mold-resistant) required for tile backing and wet walls" },
        { region: "Basements (humid climates)", requirement: "Mold-resistant drywall recommended, proper vapor barrier critical" },
        { region: "Southeast, Gulf Coast (high humidity)", requirement: "Consider mold-resistant throughout house, especially in poorly ventilated areas" },
        { region: "Shower/tub surrounds", requirement: "Purple board (DensArmor, Mold Tough) or cement board for tile backer" },
        { region: "Standard locations", requirement: "Regular drywall acceptable in living areas with normal humidity" }
      ],
      impact: "Green board costs 20% more, purple board 30-40% more than standard. Worth it in moisture-prone areas to prevent mold and costly remediation."
    },
    {
      title: "Fire-Rated Drywall Requirements",
      subtitle: "IRC R302 and IBC fire separation requirements",
      description: "Building codes require fire-rated (Type X) drywall in specific locations to slow fire spread and provide escape time. Requirements vary by building type and proximity to lot lines.",
      examples: [
        { region: "Garage ceiling (IRC R302.5)", requirement: "5/8-inch Type X required on ceiling below living space, 1/2-inch Type X on garage walls" },
        { region: "Furnace/mechanical room (IRC R302.3)", requirement: "Type X on walls/ceiling enclosing furnace or water heater" },
        { region: "Multi-family common walls (IBC)", requirement: "Type X both sides, 1-hour or 2-hour rating depending on building" },
        { region: "Townhouse fire walls", requirement: "Two layers 5/8-inch Type X both sides (2-hour rating)" },
        { region: "Property line proximity (<5 ft)", requirement: "May require fire-rated exterior walls - check local code" }
      ],
      impact: "Type X costs 10-15% more than standard but is non-negotiable for code compliance. Inspector will fail installation without proper fire-rated board."
    },
    {
      title: "Ceiling Height and Sheet Size Selection",
      subtitle: "Optimizing material usage and reducing seams",
      description: "Ceiling height determines optimal drywall sheet size. Standard 8-foot ceilings use 4×8 sheets, while 9-10 foot ceilings benefit from 4×10 or 4×12 sheets to eliminate horizontal seams.",
      examples: [
        { region: "8-foot ceilings (standard)", requirement: "4×8 sheets for walls, 4×8 or 4×12 for ceilings (12 eliminates seams)" },
        { region: "9-foot ceilings", requirement: "4×10 sheets eliminate horizontal seam, easier finishing" },
        { region: "10-foot ceilings", requirement: "4×12 sheets hang vertically, no seams, better appearance" },
        { region: "Vaulted/cathedral ceilings", requirement: "Custom sheet sizes or creative layout planning, 15-20% additional waste" },
        { region: "Commercial (10-14 ft)", requirement: "Multiple sheet sizes combined, scaffolding required, professional install" }
      ],
      impact: "Longer sheets cost $2-5 more each but save taping time and improve appearance. Consider delivery access - 12-foot sheets don't fit through standard doors."
    },
    {
      title: "Seismic and Wind Requirements",
      subtitle: "Enhanced attachment in high-risk zones",
      description: "Earthquake-prone and high-wind areas may require enhanced drywall attachment methods, blocking, or flexible control joints to prevent cracking during structural movement.",
      examples: [
        { region: "California Seismic Zones D-E", requirement: "Additional blocking, flexible control joints every 30 feet, resilient channels" },
        { region: "Hurricane zones (FL, Gulf)", requirement: "Enhanced fastening schedules, impact-resistant board for critical facilities" },
        { region: "Tornado Alley", requirement: "Standard attachment adequate, but consider impact-resistant for safe rooms" },
        { region: "Low-risk areas", requirement: "Standard ASTM C840 fastening schedules sufficient" }
      ],
      impact: "Seismic attachment adds 10-20% to labor cost but prevents costly cracking repairs. Required in high-risk zones for code compliance."
    },
    {
      title: "Sound Transmission and Acoustical Requirements",
      subtitle: "STC ratings for multi-family and sound-sensitive areas",
      description: "Multi-family buildings, home theaters, and bedrooms adjacent to mechanical rooms may require enhanced sound control using specialized drywall, resilient channels, or additional layers.",
      examples: [
        { region: "Multi-family party walls (IBC)", requirement: "Minimum STC 50 rating, typically 2 layers 5/8-inch drywall with resilient channels" },
        { region: "Home theaters", requirement: "QuietRock or double-layer with green glue, STC 60+ for optimal sound isolation" },
        { region: "Master bedroom walls", requirement: "Double 1/2-inch drywall recommended between bedroom and living areas" },
        { region: "Mechanical room walls", requirement: "Sound-dampening board reduces HVAC noise transmission" }
      ],
      impact: "Sound-dampening drywall (QuietRock) costs 3-4× more than standard but dramatically improves privacy. Double-layer standard board is cost-effective middle ground."
    },
    {
      title: "Texture and Finish Level Requirements",
      subtitle: "Regional preferences and lighting considerations",
      description: "Finishing requirements vary by region, architectural style, and lighting. Some areas prefer smooth walls (Level 5), others use heavy texture (Level 3). Critical lighting areas always need Level 5.",
      examples: [
        { region: "Northeast, Mid-Atlantic", requirement: "Smooth walls (Level 4-5) standard, light texture or skim coat common" },
        { region: "Southwest, West", requirement: "Knockdown or orange peel texture common, hides imperfections, Level 3 acceptable under texture" },
        { region: "Southeast", requirement: "Mixed - both smooth and textured popular depending on price point" },
        { region: "Large windows/skylights (all regions)", requirement: "Level 5 finish mandatory with critical lighting angles" },
        { region: "Flat paint (sheen 1-2)", requirement: "Level 5 recommended as flat paint shows every imperfection" }
      ],
      impact: "Level 5 finish adds $0.50-1.00 per sq ft vs. Level 4 but essential for flat paint and harsh lighting. Texture adds $0.30-0.60 per sq ft but allows Level 3 finish."
    },
    {
      title: "Basement and Below-Grade Requirements",
      subtitle: "Moisture control and insulation considerations",
      description: "Below-grade installations (basements) face unique moisture and insulation challenges. Some jurisdictions require special vapor barriers, insulation, or mold-resistant materials.",
      examples: [
        { region: "Cold climates (heating zone 4+)", requirement: "Foam board insulation over concrete, vapor barrier, then drywall on furring strips" },
        { region: "High water table areas", requirement: "Mold-resistant drywall mandatory, waterproofing critical, leave gap at floor" },
        { region: "Finished basements (IRC)", requirement: "Minimum R-value insulation required, thermal break between concrete and drywall" },
        { region: "Flood-prone areas", requirement: "Consider cement board or other flood-resistant materials instead of drywall" }
      ],
      impact: "Proper basement drywall installation costs 30-50% more than standard but prevents mold disasters and failed inspections. Moisture control is critical."
    },
    {
      title: "Permit and Inspection Requirements",
      subtitle: "When drywall work requires building permits",
      description: "Permit requirements for drywall vary by jurisdiction and scope of work. New construction always requires permits, but repairs and remodels have different thresholds.",
      examples: [
        { region: "New construction (all areas)", requirement: "Building permit required, drywall inspection before covering mechanicals" },
        { region: "Room additions, structural changes", requirement: "Permit required, inspection verifies fire-rated assemblies" },
        { region: "Basement finishing", requirement: "Typically requires permit, egress window and fire separation verified" },
        { region: "Patch/repair work", requirement: "Usually no permit if not affecting fire-rated assemblies or structure" },
        { region: "Homeowner exemption", requirement: "Some jurisdictions allow homeowners to work permit-free on own residence" }
      ],
      impact: "Permit costs $100-500 depending on scope. Unpermitted work can affect home sales and insurance claims. Always verify local requirements."
    }
  ]
};