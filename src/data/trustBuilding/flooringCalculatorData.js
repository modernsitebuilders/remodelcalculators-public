// Data for Flooring Calculator trust-building components
// Based on NWFA (hardwood), NTCA (tile), and industry standards

export const flooringMethodology = {
  calculatorType: "flooring",
  source: "NWFA & NTCA Standards",
  formulas: [
    {
      name: "Room Square Footage",
      formula: "Area = Length × Width",
      explanation: "For rectangular rooms, multiply length times width. For irregular shapes, divide into rectangles and add.",
      example: "12 ft × 15 ft room = 180 square feet"
    },
    {
      name: "Waste Factor by Pattern",
      formula: "Total = Base Area × (1 + Waste Factor)",
      explanation: "Waste varies by flooring type and pattern. Straight: 5-10%, diagonal: 10-15%, complex patterns: 15-20%.",
      example: "180 sq ft × 1.10 (10% waste) = 198 sq ft → order 200 sq ft"
    },
    {
      name: "Hardwood Planks Required",
      formula: "Bundles = Total Sq Ft ÷ Coverage per Bundle",
      explanation: "Hardwood sold in bundles covering 18-22 sq ft typically. Always round up.",
      example: "198 sq ft ÷ 20 sq ft per bundle = 9.9 → order 10 bundles"
    },
    {
      name: "Tile Pieces Required",
      formula: "Tiles = (Area ÷ Tile Area) × (1 + Waste Factor)",
      explanation: "Calculate tile area, divide room area by tile area, add waste factor for cuts and breakage.",
      example: "180 sq ft ÷ (12×12 tile = 1 sq ft) × 1.10 = 198 tiles → order 200 tiles"
    },
    {
      name: "Grout Required (Tile)",
      formula: "Grout (lbs) = (Area × Grout Factor)",
      explanation: "Grout factor varies by tile size and grout width. Larger tiles with narrow grout = less grout needed.",
      example: "12×12 tiles, 3/16 inch grout: 180 sq ft × 0.15 = 27 lbs grout"
    },
    {
      name: "Underlayment Rolls",
      formula: "Rolls = Room Area ÷ Roll Coverage",
      explanation: "Underlayment rolls cover 100-200 sq ft. Add 10% overlap waste.",
      example: "180 sq ft ÷ 100 sq ft per roll × 1.10 = 2 rolls"
    },
    {
      name: "Adhesive/Mortar Coverage",
      formula: "Buckets = Area ÷ Coverage Rate",
      explanation: "Thin-set mortar covers 60-100 sq ft per bag depending on trowel size. Check manufacturer specs.",
      example: "180 sq ft ÷ 80 sq ft per bag = 2.25 → order 3 bags thin-set"
    }
  ],
  constants: [
    {
      name: "Hardwood Straight Pattern Waste",
      value: "5-8%",
      description: "Standard parallel installation with minimal cuts"
    },
    {
      name: "Hardwood Diagonal Waste",
      value: "10-15%",
      description: "45-degree angle installation requires more cuts"
    },
    {
      name: "Tile Straight Pattern Waste",
      value: "5-10%",
      description: "Square or brick pattern with standard tiles"
    },
    {
      name: "Tile Diagonal/Herringbone Waste",
      value: "15-20%",
      description: "Complex patterns require significant cutting"
    },
    {
      name: "Carpet Roll Width",
      value: "12 feet",
      description: "Standard residential carpet roll width"
    },
    {
      name: "Vinyl Plank Waste",
      value: "10%",
      description: "LVP/LVT click-lock floating floor"
    },
    {
      name: "Laminate Waste",
      value: "8-10%",
      description: "Similar to hardwood installation waste"
    },
    {
      name: "Underlayment Coverage",
      value: "100-200 sq ft/roll",
      description: "Add 10% for seams and overlap"
    }
  ]
};

export const flooringStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "National Wood Flooring Association (NWFA) Installation Guidelines",
      code: "NWFA Guidelines",
      description: "Comprehensive standards for hardwood flooring installation covering acclimation, moisture content, subfloor preparation, fastening methods, expansion gaps, and finishing. The authoritative source for professional wood floor installation.",
      url: "https://www.nwfa.org/technical-resources/installation-guidelines",
      requirements: [
        "Acclimation: 3-14 days minimum, achieve 6-9% moisture content (within 2% of subfloor)",
        "Subfloor: Must be flat within 3/16 inch over 10 feet, dry, structurally sound",
        "Expansion gaps: 3/4 inch minimum at all walls and vertical obstructions",
        "Fastener spacing: 8-10 inches along planks, 2-3 inches from ends",
        "Relative humidity: Maintain 30-50% RH year-round to prevent gaps or cupping"
      ],
      appliesTo: "Solid and engineered hardwood flooring installations"
    },
    {
      name: "Tile Council of North America (TCNA) Handbook",
      code: "TCNA Handbook Methods",
      description: "Industry-standard reference for ceramic and porcelain tile installation. Covers substrate preparation, mortar selection, grout joints, waterproofing, and movement accommodations.",
      url: "https://www.tcnatile.com/handbook.html",
      requirements: [
        "Substrate deflection: Maximum L/360 (floor), L/720 (countertops) under load",
        "Thin-set coverage: Minimum 80% coverage floors, 95% wet areas",
        "Grout joint width: 1/16 to 3/8 inch depending on tile size (larger tile = wider joint)",
        "Movement joints: Required every 24-36 feet or at transitions",
        "Waterproofing: Membrane required in showers, tubs, and steam rooms"
      ],
      appliesTo: "Ceramic, porcelain, and natural stone tile installations"
    },
    {
      name: "ASTM F2170 - Moisture Testing Concrete Subfloors",
      code: "ASTM F2170",
      description: "Standard test method for determining relative humidity in concrete slabs using in-situ probes. Critical for preventing flooring failures due to subfloor moisture.",
      url: "https://www.astm.org/f2170-19.html",
      requirements: [
        "Test timing: Minimum 28 days after concrete pour, 24 hours after HVAC operational",
        "Probe depth: 40% of slab depth (1.6 inches in 4-inch slab)",
        "Acceptance: ≤75% RH for most flooring, ≤85% for some engineered wood",
        "Wait time: 72 hours equilibration before reading",
        "Number of probes: Minimum 3 for first 1,000 sq ft, 1 per 1,000 sq ft thereafter"
      ],
      appliesTo: "All flooring over concrete slabs, especially wood and luxury vinyl"
    },
    {
      name: "ASTM E1745 - Plastic Water Vapor Retarders",
      code: "ASTM E1745",
      description: "Specifications for plastic vapor barriers under flooring to prevent ground moisture from damaging floor systems. Critical for crawlspace and basement installations.",
      url: "https://www.astm.org/e1745-17.html",
      requirements: [
        "Minimum 6-mil polyethylene sheet (10-mil preferred for crawlspaces)",
        "Seam overlap: 6 inches minimum, taped or sealed",
        "Edge treatment: Extended up foundation walls 6 inches",
        "Permeance rating: <0.1 perms for effective moisture control"
      ],
      appliesTo: "Crawlspace vapor barriers and concrete slab underlayment"
    },
    {
      name: "ADA Compliance - Accessible Design Standards",
      code: "ADA 302 & 303",
      description: "Americans with Disabilities Act requirements for flooring surfaces including levelness, slip resistance, and transition heights. Applies to commercial spaces and multi-family housing.",
      url: "https://www.ada.gov/law-and-regs/design-standards/",
      requirements: [
        "Surface changes: Maximum 1/4 inch vertical, 1/2 inch beveled",
        "Slip resistance: Static COF minimum 0.6 (wet areas)",
        "Carpet: Maximum 1/2 inch pile height, must be securely attached",
        "Transitions: Smooth transitions between flooring types, max 1/4 inch height difference"
      ],
      appliesTo: "Commercial and multi-family accessible floor surfaces"
    },
    {
      name: "ANSI A108 - Ceramic Tile Installation Specifications",
      code: "ANSI A108 Series",
      description: "American National Standards for ceramic tile installation covering materials, methods, and tolerances. Works in conjunction with TCNA Handbook for complete tile installation standards.",
      url: "https://www.tcnatile.com/ansi-standards.html",
      requirements: [
        "Lippage: Maximum 1/32 inch for rectified tiles with grout joints <1/4 inch",
        "Bonding: 80% minimum thin-set coverage (95% in wet/exterior areas)",
        "Grout joints: Minimum 1/8 inch for floor tiles, wider for larger format",
        "Curing: No traffic for 24-72 hours, no wet exposure 72 hours minimum"
      ],
      appliesTo: "Professional ceramic and porcelain tile installations"
    },
    {
      name: "International Residential Code (IRC) R302.13 - Floor Finish",
      code: "IRC 2021",
      description: "Building code requirements for floor finishes in residential construction including fire ratings, moisture resistance, and structural support requirements.",
      url: "https://codes.iccsafe.org/content/IRC2021P3",
      requirements: [
        "Underlayment: Minimum 15/32-inch plywood or 19/32-inch OSB for tile",
        "Fire separation: Floor assemblies between units must meet fire ratings",
        "Moisture areas: Water-resistant backing required in bathrooms",
        "Structural: Floor must support dead load (flooring weight) plus 40 psf live load"
      ],
      appliesTo: "Residential floor structure and finish requirements"
    }
  ]
};

export const flooringRegionalVariations = {
  warningMessage: "Flooring requirements vary significantly by climate (humidity affects wood), substrate conditions, and local codes. Wood flooring is especially sensitive to moisture and seasonal humidity changes.",
  variations: [
    {
      title: "Humidity and Wood Flooring Acclimation",
      subtitle: "NWFA Guidelines - Critical for wood floor success",
      description: "Wood flooring expands and contracts with humidity changes. Different climates require different installation practices and species selection. Improper acclimation causes gaps, cupping, or buckling.",
      examples: [
        { region: "Dry climates (Southwest: AZ, NV, NM)", requirement: "Low ambient moisture - wood arrives dry, may need humidification, install at 4-6% moisture content" },
        { region: "Humid climates (Southeast, Gulf Coast)", requirement: "High humidity year-round - acclimate to 8-10% moisture content, engineered flooring preferred" },
        { region: "Variable climates (Midwest, Northeast)", requirement: "Seasonal swings - install at 7-8% MC, maintain 35-45% RH year-round, gaps normal in winter" },
        { region: "Coastal areas", requirement: "Salt air and moisture - engineered flooring strongly recommended over solid" },
        { region: "Basements (all regions)", requirement: "Never install solid hardwood below grade - engineered only with vapor barrier" }
      ],
      impact: "Wood flooring failures due to moisture are NOT covered by warranty. Proper acclimation and moisture testing prevent 90% of wood floor problems."
    },
    {
      title: "Concrete Slab Moisture Testing Requirements",
      subtitle: "ASTM F2170 - Prevent catastrophic flooring failure",
      description: "Excessive moisture in concrete slabs is the #1 cause of flooring failure over concrete. All flooring types over concrete should be tested, especially wood, luxury vinyl, and carpet with padding.",
      examples: [
        { region: "New construction (all areas)", requirement: "Mandatory ASTM F2170 testing before ANY flooring - wait 60-90 days after pour minimum" },
        { region: "Slab-on-grade (high water table)", requirement: "Vapor barrier under slab critical, test shows ≤75% RH required for most flooring" },
        { region: "Basement concrete", requirement: "Often 85-95% RH without mitigation - requires special moisture-tolerant flooring or treatment" },
        { region: "Warm humid climates", requirement: "Slabs take longer to dry - sometimes 6+ months before acceptable moisture levels" },
        { region: "Cold climates", requirement: "Faster drying but heated season testing required - moisture readings change with HVAC operation" }
      ],
      impact: "Moisture testing costs $200-600 but prevents $10,000-50,000 floor replacement. Insurance rarely covers moisture-related failures as they're considered installation defects."
    },
    {
      title: "Subfloor Requirements by Flooring Type",
      subtitle: "IRC and manufacturer specifications vary significantly",
      description: "Different flooring types have different subfloor requirements. Tile needs stiff substrate to prevent cracking, wood needs flat surface, carpet is most forgiving.",
      examples: [
        { region: "Ceramic/porcelain tile", requirement: "Minimum 1-1/8 inch wood subfloor (3/4 inch subfloor + 1/2 inch cement board), or cement board over 3/4 inch plywood" },
        { region: "Large format tile (>15 inches)", requirement: "Enhanced substrate - 1-1/4 inch or more, deflection ≤L/720, may need additional joists" },
        { region: "Hardwood flooring", requirement: "3/4 inch plywood or OSB minimum, must be flat within 3/16 inch over 10 feet" },
        { region: "Luxury vinyl plank/tile", requirement: "Perfectly smooth subfloor required - every imperfection telegraphs through, often needs floor patch compound" },
        { region: "Carpet", requirement: "Most forgiving - 5/8 inch subfloor acceptable, minor irregularities acceptable" }
      ],
      impact: "Inadequate subfloor causes tile cracks ($5,000-15,000 replacement), hardwood fastener pops, and LVP visible imperfections. Get subfloor right before starting."
    },
    {
      title: "Radiant Heat Considerations",
      subtitle: "In-floor heating affects flooring selection and installation",
      description: "Radiant floor heating is popular in cold climates but restricts flooring choices. Wood expands/contracts more with heat cycles, some LVP cannot tolerate heat, tile is ideal but expensive.",
      examples: [
        { region: "Tile over radiant", requirement: "Best option - excellent heat transfer, no heat damage concerns, requires uncoupling membrane" },
        { region: "Engineered wood over radiant", requirement: "Acceptable with limitations - max 3/8 inch thick, narrow planks (3-4 inch), gradual temp changes only" },
        { region: "Solid hardwood over radiant", requirement: "Generally not recommended - too much movement, voids warranty" },
        { region: "Luxury vinyl over radiant", requirement: "Check manufacturer specs - some LVP rated for radiant (≤85°F), many are not" },
        { region: "Carpet over radiant", requirement: "Defeats purpose - carpet insulates, poor heat transfer, not cost effective" }
      ],
      impact: "Wrong flooring over radiant heat voids warranties and causes premature failure. Always verify radiant compatibility before purchasing flooring."
    },
    {
      title: "Transition Heights and ADA Compliance",
      subtitle: "Commercial and accessible design requirements",
      description: "Commercial spaces and multi-family housing must meet ADA requirements for floor transitions. Different flooring types have different finished heights creating transition challenges.",
      examples: [
        { region: "Commercial/multi-family (ADA)", requirement: "Maximum 1/4 inch vertical change, 1/2 inch if beveled - transition strips required" },
        { region: "Tile to wood transition", requirement: "Often 1/4-3/8 inch height difference - requires transition strip or tile build-down" },
        { region: "Carpet to hard surface", requirement: "Carpet typically 1/2 inch higher - need transition reducer strip" },
        { region: "Residential (no ADA)", requirement: "No strict limits but tripping hazard consideration - transitions recommended >1/4 inch" }
      ],
      impact: "ADA violations can result in lawsuits and forced modifications. Plan floor heights during design phase to minimize transitions."
    },
    {
      title: "Sound Transmission Requirements (Multi-Family)",
      subtitle: "IBC and local codes - STC and IIC ratings",
      description: "Multi-family buildings have strict sound transmission requirements for floor/ceiling assemblies. Hard surface flooring (tile, LVP, hardwood) requires underlayment or acoustic treatment to meet code.",
      examples: [
        { region: "IBC multi-family minimum", requirement: "STC 50 and IIC 50 rating for floor/ceiling assemblies" },
        { region: "Luxury apartments/condos", requirement: "STC 60+ and IIC 60+ for premium sound isolation" },
        { region: "Hard surface flooring", requirement: "Acoustic underlayment required (cork, rubber, foam products)" },
        { region: "Carpet with pad", requirement: "Automatically meets IIC requirements, pad critical for sound absorption" },
        { region: "NYC Local Law 70", requirement: "Enhanced requirements: IIC 60 + IIC 65, applies to NYC buildings" }
      ],
      impact: "Sound transmission failures result in neighbor complaints and code violations. Acoustic underlayment costs $0.50-2.00 per sq ft but is mandatory in multi-family."
    },
    {
      title: "Moisture-Resistant Flooring Requirements",
      subtitle: "Bathrooms, laundry, and below-grade spaces",
      description: "Wet areas and moisture-prone locations require water-resistant or waterproof flooring. Bathrooms have specific underlayment and waterproofing requirements.",
      examples: [
        { region: "Bathroom floors (all areas)", requirement: "Tile, LVP, or waterproof laminate - never hardwood, porous stone requires sealing" },
        { region: "Shower floors", requirement: "Tile only - requires waterproof membrane (Schluter, Kerdi, RedGard), sloped mortar bed" },
        { region: "Laundry rooms", requirement: "Water-resistant flooring recommended - LVP or tile preferred" },
        { region: "Basements", requirement: "Never solid hardwood - engineered wood or LVP only with vapor barrier" },
        { region: "Coastal first floors", requirement: "Flood-resistant options - tile or LVP, elevated wood subfloors" }
      ],
      impact: "Water-damaged hardwood floors cost $5,000-15,000 to replace. Use appropriate moisture-resistant flooring in wet/damp areas."
    },
    {
      title: "Climate-Specific Flooring Recommendations",
      subtitle: "Species and product selection by region",
      description: "Different climates favor different flooring types and wood species. Dense hardwoods (oak, maple) handle humidity changes better than softer woods (pine). Engineered floors more stable than solid.",
      examples: [
        { region: "Humid Southeast", requirement: "Engineered wood preferred, Brazilian cherry/ipe (dense hardwoods), avoid bamboo, ceramic tile excellent" },
        { region: "Dry Southwest", requirement: "Solid or engineered both work, harder woods better (scratching from tracked sand), tile very popular" },
        { region: "Northern climates (freeze-thaw)", requirement: "Stable species (white oak, maple), engineered wood for basements with heat, avoid exotics" },
        { region: "Coastal areas", requirement: "Engineered wood mandatory, avoid solid hardwood, porcelain tile ideal (salt-air resistant)" },
        { region: "Mountain/high altitude", requirement: "Acclimation critical (low humidity), harder woods resist ski/boot scratches" }
      ],
      impact: "Wrong flooring for climate voids warranty and causes premature failure. Match flooring to regional conditions for longest life."
    }
  ]
};