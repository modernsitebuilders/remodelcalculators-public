// Example data for Concrete Calculator trust-building components
// Copy this pattern for other calculators

export const concreteMethodology = {
  calculatorType: "concrete",
  source: "ACI 318 & IRC/IBC",
  formulas: [
    {
      name: "Cubic Yards from Dimensions",
      formula: "Volume (yd³) = (Length × Width × Depth) ÷ 27",
      explanation: "Concrete is sold by cubic yard. We multiply dimensions in feet, then divide by 27 (cubic feet per cubic yard).",
      example: "10ft × 10ft × 0.33ft (4 inches) = 33 cubic feet ÷ 27 = 1.22 cubic yards"
    },
    {
      name: "80lb Bags Required",
      formula: "Bags = Volume (yd³) × 45",
      explanation: "Each 80lb bag yields 0.6 cubic feet. There are 45 bags per cubic yard (27 ÷ 0.6).",
      example: "1.22 yd³ × 45 = 55 bags (80lb)"
    },
    {
      name: "60lb Bags Required",
      formula: "Bags = Volume (yd³) × 60",
      explanation: "Each 60lb bag yields 0.45 cubic feet. There are 60 bags per cubic yard (27 ÷ 0.45).",
      example: "1.22 yd³ × 60 = 73 bags (60lb)"
    },
    {
      name: "Waste Factor Adjustment",
      formula: "Total Volume = Base Volume × (1 + Waste Factor)",
      explanation: "Waste factors account for spillage, irregular shapes, and over-excavation. Varies by project type.",
      example: "1.22 yd³ × 1.05 (5% waste) = 1.28 cubic yards total"
    }
  ],
  constants: [
    {
      name: "Cubic Feet per Yard",
      value: "27",
      description: "Standard conversion: 3ft × 3ft × 3ft"
    },
    {
      name: "80lb Bag Yield",
      value: "0.60 ft³",
      description: "Per manufacturer specifications (Quikrete, Sakrete)"
    },
    {
      name: "60lb Bag Yield",
      value: "0.45 ft³",
      description: "Per manufacturer specifications"
    },
    {
      name: "Slab Waste Factor",
      value: "5%",
      description: "Industry standard for simple rectangular slabs"
    },
    {
      name: "Footing Waste Factor",
      value: "10%",
      description: "Higher due to irregular excavation"
    },
    {
      name: "Post Hole Waste Factor",
      value: "7.5%",
      description: "Accounts for depth variation and spillage"
    }
  ]
};

export const concreteStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "ACI 318 - Building Code Requirements for Structural Concrete",
      code: "ACI 318-19",
      description: "Provides comprehensive standards for concrete design, construction, and inspection. Covers mix design requirements, reinforcement specifications, formwork standards, and construction practices for structural concrete.",
      url: "https://www.concrete.org/store/productdetail.aspx?ItemID=318U19",
      requirements: [
        "Minimum 28-day compressive strength: 2,500-5,000 PSI based on application",
        "Concrete cover requirements: 2\" minimum for slabs on grade, 3\" for exposed concrete",
        "Maximum water-cement ratio: 0.45 for exterior exposure, 0.50 for interior"
      ],
      appliesTo: "All structural concrete applications"
    },
    {
      name: "International Residential Code (IRC) - Section R403",
      code: "IRC 2021",
      description: "Governs residential foundation and footing requirements. Specifies minimum footing dimensions, depth below frost line, and concrete strength requirements for residential construction.",
      url: "https://codes.iccsafe.org/content/IRC2021P2",
      requirements: [
        "Footings must extend minimum 12\" below undisturbed ground",
        "Footings must be below frost line (varies by region)",
        "Minimum footing width: 12\" for one-story, 15\" for two-story",
        "Minimum concrete strength: 2,500 PSI"
      ],
      appliesTo: "Residential foundations, footings, and slabs"
    },
    {
      name: "ASTM C94 - Ready-Mixed Concrete Specifications",
      code: "ASTM C94/C94M",
      description: "Defines requirements for ready-mixed concrete including materials, production, delivery, and testing. Ensures consistency and quality control in commercial concrete supply.",
      url: "https://www.astm.org/c0094_c0094m-24.html",
      requirements: [
        "Maximum delivery time: 90 minutes from batching",
        "Maximum 300 drum revolutions during transport",
        "Slump testing required before discharge",
        "Temperature limits: 50-90°F at placement"
      ],
      appliesTo: "Ready-mix concrete orders and commercial projects"
    },
    {
      name: "Department of Transportation (DOT) Concrete Specifications",
      code: "Varies by State DOT",
      description: "State-specific requirements for concrete used in transportation infrastructure. Generally requires higher strength concrete (4,000-5,000 PSI) and specific air entrainment for freeze-thaw resistance.",
      requirements: [
        "Typical minimum strength: 4,000 PSI for roadways",
        "Air entrainment: 5-8% for freeze-thaw protection",
        "Specific aggregate gradations and maximum sizes"
      ],
      appliesTo: "Driveways, sidewalks, and municipal projects"
    }
  ]
};

export const concreteRegionalVariations = {
  warningMessage: "Frost depth, seismic requirements, and building codes vary significantly by region. Always verify local requirements before beginning foundation work.",
  variations: [
    {
      title: "Frost Line Depth Requirements",
      subtitle: "IRC R403.1.4 - Footings must extend below frost line",
      description: "Frost line depth varies dramatically across the United States. Footings and posts must extend below this depth to prevent heaving from freeze-thaw cycles.",
      examples: [
        { region: "Northern Minnesota", requirement: "60-80 inches below grade" },
        { region: "Michigan, Wisconsin", requirement: "42-48 inches" },
        { region: "Pennsylvania, Ohio", requirement: "30-36 inches" },
        { region: "North Carolina, Tennessee", requirement: "12-18 inches" },
        { region: "Florida, Southern California", requirement: "No frost line (minimum 12\" depth)" }
      ],
      impact: "This directly affects footing depth calculations and concrete volume needed for foundations and fence posts."
    },
    {
      title: "Concrete Strength Requirements by Climate",
      subtitle: "Varies by freeze-thaw exposure and local codes",
      description: "Minimum PSI ratings vary based on climate exposure. Colder climates require higher strength concrete and air entrainment for durability.",
      examples: [
        { region: "Northern states (freeze-thaw zones)", requirement: "4,000 PSI minimum with 5-7% air entrainment" },
        { region: "Moderate climates", requirement: "3,000-3,500 PSI standard" },
        { region: "Southern states (no freeze)", requirement: "2,500-3,000 PSI acceptable for residential" }
      ],
      impact: "Higher PSI concrete costs more. Some regions allow lower strength for cost savings."
    },
    {
      title: "Seismic Design Requirements",
      subtitle: "IRC R403.1.7 & IBC 1808 - Varies by Seismic Design Category",
      description: "Earthquake-prone regions have additional reinforcement requirements for foundation concrete. Seismic Design Categories range from A (low risk) to E (high risk).",
      examples: [
        { region: "California (SDC D-E)", requirement: "Special reinforcement, increased rebar, engineered design required" },
        { region: "Pacific Northwest (SDC C-D)", requirement: "Moderate reinforcement requirements" },
        { region: "Central/Eastern US (SDC A-B)", requirement: "Standard reinforcement acceptable" }
      ],
      impact: "High seismic zones may require structural engineer approval and additional concrete/rebar."
    },
    {
      title: "Slab Thickness Requirements",
      subtitle: "Varies by building department and use case",
      description: "While IRC specifies minimum 3.5\" for residential slabs, many jurisdictions require 4\" minimum. Commercial and heavy-load applications require thicker slabs.",
      examples: [
        { region: "Most residential codes", requirement: "4 inches minimum for garage slabs" },
        { region: "Commercial/warehouse", requirement: "6-8 inches for vehicle traffic" },
        { region: "Some jurisdictions", requirement: "5 inches minimum for residential slabs" }
      ],
      impact: "Just 1 inch of additional thickness increases concrete volume by 25% for same area."
    },
    {
      title: "Permit Requirements",
      subtitle: "Local jurisdiction regulations vary",
      description: "Permit requirements and inspection schedules vary by municipality. Some areas require permits for any concrete work, others only for structural elements.",
      examples: [
        { region: "Most urban areas", requirement: "Permits required for all footings and slabs >120 sq ft" },
        { region: "Some rural counties", requirement: "Permits only for attached structures" },
        { region: "HOA communities", requirement: "Additional HOA approval may be required" }
      ],
      impact: "Permit costs, timeline delays, and inspection requirements must be factored into project planning."
    }
  ]
};