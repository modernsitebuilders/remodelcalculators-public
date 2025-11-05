// Data for Fence Calculator trust-building components
// Based on IRC, ASTM, and industry standards

export const fenceMethodology = {
  calculatorType: "fence",
  source: "IRC R404.1 & ASTM Standards",
  formulas: [
    {
      name: "Total Linear Feet",
      formula: "Linear Feet = (2 × Length) + (2 × Width)",
      explanation: "For rectangular areas, add all four sides. For irregular shapes, measure and sum each side.",
      example: "50ft × 30ft yard = (2 × 50) + (2 × 30) = 160 linear feet"
    },
    {
      name: "Number of Posts Required",
      formula: "Posts = (Linear Feet ÷ Post Spacing) + 1",
      explanation: "Divide total length by spacing (6-8 feet typical), then add 1 for the final corner post.",
      example: "160 ft ÷ 8 ft spacing = 20 posts + 1 = 21 posts total"
    },
    {
      name: "Concrete per Post (Cylindrical)",
      formula: "Volume (ft³) = π × (Diameter ÷ 2)² × Depth",
      explanation: "Calculate volume of cylindrical hole. Convert diameter to radius, square it, multiply by π and depth.",
      example: "12\" diameter (1 ft), 36\" deep (3 ft): 3.14 × 0.5² × 3 = 2.36 cubic feet per post"
    },
    {
      name: "Total Concrete Volume",
      formula: "Total (yd³) = (Posts × Volume per Post) ÷ 27",
      explanation: "Multiply cubic feet per post by number of posts, divide by 27 to convert to cubic yards.",
      example: "21 posts × 2.36 ft³ = 49.56 ft³ ÷ 27 = 1.84 cubic yards"
    },
    {
      name: "Fence Panels/Sections",
      formula: "Sections = Total Posts - 1",
      explanation: "Number of fence sections is always one less than number of posts.",
      example: "21 posts = 20 fence sections (8 feet each)"
    },
    {
      name: "One-Third Rule for Post Depth",
      formula: "Post Depth = Fence Height ÷ 3",
      explanation: "Industry standard: bury one-third of total post length for stability.",
      example: "6 ft fence height → 2 ft below ground → 8 ft total post length"
    }
  ],
  constants: [
    {
      name: "Standard Post Spacing",
      value: "8 feet",
      description: "IRC maximum for wood fence, 6-8 ft typical residential"
    },
    {
      name: "Post Diameter (Round)",
      value: "4-6 inches",
      description: "Standard treated wood round posts"
    },
    {
      name: "Post Size (Square)",
      value: "4×4 inches",
      description: "Most common square post dimension"
    },
    {
      name: "Minimum Concrete Depth",
      value: "24 inches",
      description: "IRC minimum, deeper in frost zones"
    },
    {
      name: "Concrete Mix Strength",
      value: "2,500-3,000 PSI",
      description: "Standard for fence post footings"
    },
    {
      name: "Post Hole Diameter",
      value: "3× post width",
      description: "Minimum for adequate concrete surround"
    },
    {
      name: "Waste Factor",
      value: "10%",
      description: "Accounts for cuts, damage, and errors"
    }
  ]
};

export const fenceStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "International Residential Code (IRC) R404.1 - Footings",
      code: "IRC 2021",
      description: "Governs post footing requirements for residential fencing. Specifies minimum depth, concrete encasement, and structural support standards to prevent frost heaving and ensure stability.",
      url: "https://codes.iccsafe.org/content/IRC2021P2",
      requirements: [
        "Posts must be set minimum 6 inches below local frost depth",
        "Post footings must extend minimum 12 inches below undisturbed ground",
        "Concrete encasement required for structural support",
        "Footings must bear on undisturbed soil or engineered fill"
      ],
      appliesTo: "All residential fence posts and footings"
    },
    {
      name: "IRC Section P2801 - Swimming Pool Barriers",
      code: "IRC P2801",
      description: "Specific requirements for pool fencing to prevent child access. Mandates height, spacing, gate hardware, and non-climbable zone specifications. Pool fences ALWAYS require permits and inspections.",
      url: "https://codes.iccsafe.org/content/IRC2021P5",
      requirements: [
        "Minimum height: 48 inches measured from grade",
        "Maximum opening: 4 inches (prevents child passage)",
        "Self-closing, self-latching gates opening outward from pool",
        "Gate latch minimum 54 inches from ground (child-proof)",
        "Non-climbable zone: No horizontal rails within 45 inches of top",
        "All pool fences require building permits and final inspection"
      ],
      appliesTo: "Any fence enclosing swimming pool or spa"
    },
    {
      name: "ASTM F567 - Chain Link Fence Fabric",
      code: "ASTM F567",
      description: "Standards for chain link fence materials including wire gauge, mesh size, coating specifications, and tensile strength. Ensures durability and longevity for residential and commercial installations.",
      url: "https://www.astm.org/f0567-19.html",
      requirements: [
        "Residential grade: 11-gauge wire minimum, 2-inch mesh",
        "Commercial grade: 9-gauge wire, 2-inch mesh",
        "Coating options: Galvanized (zinc) or vinyl-coated",
        "Minimum tensile strength specifications for wire"
      ],
      appliesTo: "Chain link fence installations"
    },
    {
      name: "ASTM F1083 - Pipe, Steel, Hot-Dipped Zinc-Coated (Galvanized) Welded",
      code: "ASTM F1083",
      description: "Specifications for galvanized steel fence posts and framework. Defines pipe grades, wall thickness, outside diameter, and coating requirements for corrosion resistance.",
      url: "https://www.astm.org/f1083-17.html",
      requirements: [
        "Schedule 40 residential: 16-gauge wall (0.065 inch), 2.0 inch OD line posts",
        "Commercial grade: All posts 2.5-3 inch OD, heavier gauge",
        "Terminal posts (corners, gates): Heavier duty than line posts",
        "Hot-dip galvanizing after fabrication for rust protection"
      ],
      appliesTo: "Chain link fence framework posts"
    },
    {
      name: "Local Setback and Height Regulations",
      code: "Varies by Municipality",
      description: "Property line setbacks and maximum height restrictions vary by local zoning. Most jurisdictions distinguish between front yard, side yard, and backyard fencing with different rules for each.",
      requirements: [
        "Front yard: Typically 3-4 feet maximum height",
        "Side/back yard: Typically 6 feet maximum height",
        "Property line setback: Usually 0-6 inches from property line",
        "Corner lots: Special visibility triangle restrictions (3 ft max)",
        "Always verify with local building department before installation"
      ],
      appliesTo: "All fence installations - check local zoning code"
    },
    {
      name: "American Fence Association (AFA) Guidelines",
      code: "Industry Best Practices",
      description: "Professional installation standards and best practices for fence contractors. Provides guidance on post spacing, materials selection, and construction methods.",
      url: "https://www.americanfenceassociation.com/",
      requirements: [
        "Post spacing: 6-8 feet for wood, 10 feet maximum for chain link",
        "One-third rule: Bury 1/3 of post length for stability",
        "Concrete cure time: Minimum 48 hours before attaching rails",
        "Grade boards recommended for uneven terrain"
      ],
      appliesTo: "Professional fence installation standards"
    }
  ]
};

export const fenceRegionalVariations = {
  warningMessage: "Fence regulations vary significantly by location. Always verify frost depth requirements, property line setbacks, height restrictions, and permit requirements with your local building department.",
  variations: [
    {
      title: "Frost Line Depth for Post Footings",
      subtitle: "IRC R404.1 - Posts must extend below frost line",
      description: "Post footings must extend below the frost line to prevent heaving from freeze-thaw cycles. Frost depth varies dramatically across the United States and directly determines minimum post hole depth.",
      examples: [
        { region: "Northern Minnesota, North Dakota", requirement: "60-80 inches below grade" },
        { region: "Wisconsin, Michigan, Maine", requirement: "42-48 inches" },
        { region: "Pennsylvania, Ohio, Iowa", requirement: "30-36 inches" },
        { region: "Virginia, Kansas, Colorado", requirement: "18-24 inches" },
        { region: "North Carolina, Oklahoma", requirement: "12-18 inches" },
        { region: "Georgia, Texas, Arizona", requirement: "6-12 inches" },
        { region: "Florida, Southern California, Hawaii", requirement: "No frost line - 24 inch minimum depth" }
      ],
      impact: "Deeper frost lines require longer posts and more concrete, significantly increasing material costs. A 6-foot fence in Minnesota may require 8-foot posts, while Florida needs only 6.5-foot posts."
    },
    {
      title: "Height Restrictions and Setback Requirements",
      subtitle: "Local zoning ordinances - varies by municipality",
      description: "Maximum fence heights and property line setbacks are determined by local zoning codes. Rules typically differ for front yards, side yards, and backyards. Violations can result in removal orders.",
      examples: [
        { region: "Front yard (most jurisdictions)", requirement: "3-4 feet maximum height" },
        { region: "Side/back yard (typical)", requirement: "6 feet maximum height without permit" },
        { region: "Some HOA communities", requirement: "4 feet maximum anywhere, approval required" },
        { region: "Agricultural/rural zones", requirement: "8-10 feet may be allowed" },
        { region: "Corner lot visibility triangles", requirement: "3 feet maximum within 20-30 feet of intersection" },
        { region: "Historic districts", requirement: "Style restrictions, picket fence requirements common" }
      ],
      impact: "Installing a fence that violates height or setback rules can require expensive removal and rebuilding. Always verify local codes before purchasing materials."
    },
    {
      title: "Swimming Pool Fence Requirements",
      subtitle: "IRC P2801 - Barrier Requirements for Swimming Pools",
      description: "Pool fencing has strict, non-negotiable safety requirements mandated by state and local codes. All pool fences require building permits, inspections, and must meet specific height, opening, and gate specifications.",
      examples: [
        { region: "All jurisdictions", requirement: "Minimum 48 inch height, maximum 4 inch openings" },
        { region: "California, Florida (strict)", requirement: "Self-closing gates with 54 inch latch height, annual inspections in some areas" },
        { region: "Arizona, Texas", requirement: "Above-ground pools may have modified requirements" },
        { region: "Most jurisdictions", requirement: "Non-climbable zone within 45 inches of top (no horizontal rails)" }
      ],
      impact: "Pool fence violations can result in fines, insurance denial, and liability in drowning cases. ALWAYS get permits and final inspection for pool fencing."
    },
    {
      title: "HOA and Deed Restrictions",
      subtitle: "Private covenants may be more restrictive than code",
      description: "Homeowner Associations and subdivision deed restrictions often impose fence rules stricter than building codes. These private restrictions are legally enforceable and must be followed even if local building codes allow more freedom.",
      examples: [
        { region: "Planned communities", requirement: "Pre-approval required, specific materials/colors mandated" },
        { region: "Some HOAs", requirement: "No front yard fencing, side yard fencing must match architecture" },
        { region: "Historic HOAs", requirement: "Period-appropriate styles only (Victorian picket, etc.)" },
        { region: "Luxury developments", requirement: "No visible chain link, wood must be upgraded materials" }
      ],
      impact: "Installing a fence without HOA approval can result in forced removal at your expense. Always check CC&Rs and get written approval before starting."
    },
    {
      title: "Wind Load and Hurricane Requirements",
      subtitle: "Structural requirements for high-wind zones",
      description: "Coastal areas and tornado-prone regions have enhanced structural requirements for fences. High-wind zones may require deeper footings, closer post spacing, or engineered designs.",
      examples: [
        { region: "Florida coastal (Wind Zone 4)", requirement: "Engineered design required, posts every 6 feet, deeper footings" },
        { region: "Gulf Coast, Atlantic coast", requirement: "Minimum 36-42 inch post depth, closer spacing" },
        { region: "Tornado Alley states", requirement: "Enhanced anchoring recommended, breakaway designs for safety" },
        { region: "Standard wind zones", requirement: "8-foot post spacing adequate" }
      ],
      impact: "High-wind requirements increase costs but prevent fence failure. Insurance may require compliance in hurricane zones."
    },
    {
      title: "Boundary and Survey Requirements",
      subtitle: "Legal requirements for property line fencing",
      description: "Fences on or near property lines may require surveys, neighbor agreements, or specific setbacks. Encroaching on neighbor's property can result in lawsuits and forced removal.",
      examples: [
        { region: "Most jurisdictions", requirement: "Survey recommended when building on property line" },
        { region: "Some states", requirement: "Neighbor notification or consent required for boundary fencing" },
        { region: "Shared fence laws (California, Texas)", requirement: "Cost-sharing provisions when fence benefits both properties" },
        { region: "Standard practice", requirement: "6-inch setback from property line avoids disputes" }
      ],
      impact: "Building on the wrong side of property line can result in removal and legal fees. Survey costs ($300-500) prevent expensive mistakes."
    },
    {
      title: "Material Restrictions and Fire Codes",
      subtitle: "Wildfire zones and material limitations",
      description: "Wildfire-prone areas may restrict flammable fencing materials. Some jurisdictions ban specific materials or require fire-resistant treatments.",
      examples: [
        { region: "California WUI zones", requirement: "Non-combustible materials within 5 feet of structure" },
        { region: "Wildfire-prone areas", requirement: "Metal or masonry preferred over wood near structures" },
        { region: "Some municipalities", requirement: "Treated wood required, untreated wood prohibited" },
        { region: "Urban fire codes", requirement: "Setback from structures, fire breaks required" }
      ],
      impact: "Material restrictions may increase costs but reduce wildfire risk. Insurance discounts often available for compliant fencing."
    }
  ]
};