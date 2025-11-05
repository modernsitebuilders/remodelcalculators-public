// Data for Mulch Calculator trust-building components
// Based on Mulch & Soil Council and ASTM standards

export const mulchMethodology = {
  calculatorType: "mulch",
  source: "Mulch & Soil Council Standards",
  formulas: [
    {
      name: "Area Calculation",
      formula: "Area = Length × Width",
      explanation: "For rectangular beds, multiply length times width. For irregular shapes, divide into sections and add together.",
      example: "Garden bed 20 ft × 10 ft = 200 square feet"
    },
    {
      name: "The 324 Rule (Cubic Yards)",
      formula: "Cubic Yards = (Area × Depth in inches) ÷ 324",
      explanation: "The 324 rule: One cubic yard of mulch covers 324 square feet at 1 inch depth. Divide area × depth by 324.",
      example: "200 sq ft × 3 inches deep ÷ 324 = 1.85 cubic yards → order 2 yards"
    },
    {
      name: "Cubic Feet Calculation",
      formula: "Cubic Feet = Area × (Depth ÷ 12)",
      explanation: "Convert depth to feet by dividing by 12, then multiply by area for cubic feet.",
      example: "200 sq ft × (3 ÷ 12) = 200 × 0.25 = 50 cubic feet"
    },
    {
      name: "Bags Required (2 cu ft bags)",
      formula: "Bags = Cubic Feet ÷ 2",
      explanation: "Standard mulch bags are 2 cubic feet. Divide total cubic feet by 2 and round up.",
      example: "50 cubic feet ÷ 2 = 25 bags required"
    },
    {
      name: "Bulk vs. Bagged Comparison",
      formula: "Break-even = 13.5 bags per cubic yard",
      explanation: "One cubic yard = 27 cubic feet = 13.5 bags (2 cu ft each). Bulk typically cheaper above 3-4 yards.",
      example: "2 cubic yards = 27 bags. If bags are $4 each and bulk is $40/yard, bulk saves $28."
    },
    {
      name: "Weight Estimation",
      formula: "Weight (lbs) = Cubic Yards × Weight Factor",
      explanation: "Weight varies by material. Hardwood mulch: 400-800 lbs/yd³, bark: 300-600 lbs, rock: 2,000-3,000 lbs.",
      example: "2 cubic yards bark mulch × 500 lbs average = 1,000 lbs total"
    }
  ],
  constants: [
    {
      name: "The 324 Rule",
      value: "324 sq ft @ 1 inch = 1 yd³",
      description: "Universal mulch calculation constant"
    },
    {
      name: "Cubic Yard to Cubic Feet",
      value: "27 cu ft = 1 cu yd",
      description: "Standard volume conversion (3×3×3)"
    },
    {
      name: "Standard Bag Size",
      value: "2 cubic feet",
      description: "Most common retail mulch bag size"
    },
    {
      name: "Bags per Cubic Yard",
      value: "13.5 bags",
      description: "27 cu ft ÷ 2 cu ft per bag"
    },
    {
      name: "Flower Bed Depth",
      value: "2-3 inches",
      description: "Standard depth for annual/perennial beds"
    },
    {
      name: "Tree/Shrub Depth",
      value: "3-4 inches",
      description: "Deeper mulch for moisture retention"
    },
    {
      name: "Pathway Depth",
      value: "3-4 inches",
      description: "Walking surface requires deeper layer"
    },
    {
      name: "Playground Safety Depth",
      value: "6-12 inches",
      description: "ASTM F1292 based on equipment height"
    }
  ]
};

export const mulchStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "Mulch & Soil Council (MSC) Standards",
      code: "UVPG - Uniform Voluntary Product Guidelines",
      description: "National trade association standards for horticultural mulch producers. Maintains certification program with lab analysis, quality control, and product guidelines ensuring consistent, safe mulch products.",
      url: "https://www.mulchandsoilcouncil.org/",
      requirements: [
        "Product labeling: Accurate volume, material source, and composition disclosure",
        "Quality standards: Free from contaminants, weed seeds, and foreign materials",
        "Certified products: Lab-tested for consistency, pH balance, and safety",
        "Material specifications: Minimum particle size distribution standards",
        "CANM certification: Certified All-Natural Horticultural Mulches program (2025 standards)"
      ],
      appliesTo: "Commercially produced mulch products"
    },
    {
      name: "ASTM F1292 - Playground Surfacing Impact Attenuation",
      code: "ASTM F1292",
      description: "Standards for impact-absorbing playground surfaces including mulch. Specifies minimum depths based on equipment fall height to prevent serious head injuries. Critical safety standard for playground mulch installations.",
      url: "https://www.astm.org/f1292-22.html",
      requirements: [
        "Fall height ≤4 feet: 6 inches engineered wood fiber (EWF) minimum",
        "Fall height 4-8 feet: 9 inches EWF minimum depth",
        "Fall height 8-12 feet: 12 inches EWF minimum depth",
        "Compression testing: Regular testing required, replenish as settles",
        "ADA accessibility: 1:16 max slope, wheelchair-accessible surface required",
        "Use zone coverage: Mulch must extend 6 feet in all directions from equipment"
      ],
      appliesTo: "All public and commercial playground installations"
    },
    {
      name: "ASTM F2075 - Engineered Wood Fiber for Playground Surfacing",
      code: "ASTM F2075",
      description: "Specifications for engineered wood fiber (EWF) used in playgrounds. Defines particle size distribution, wood species, contaminants, and installation requirements for safety surfacing.",
      url: "https://www.astm.org/f2075-15.html",
      requirements: [
        "Particle size: 95% must pass 1-inch screen, defined size distribution",
        "Wood source: Hardwood preferred, no treated lumber, no painted wood",
        "Contaminants: Maximum 1% foreign material by weight",
        "Installation depth: Based on critical fall height per F1292",
        "Maintenance: Monthly inspection, annual depth checks, replenish as needed"
      ],
      appliesTo: "Commercial playground wood fiber safety surfacing"
    },
    {
      name: "University Extension Service Guidelines",
      code: "State Agricultural Extension Offices",
      description: "Regional land-grant university recommendations for mulch depth, material selection, and application timing based on local climate and plant types. Provides science-based gardening guidance.",
      url: "https://nifa.usda.gov/land-grant-colleges-and-universities-partner-website-directory",
      requirements: [
        "Depth recommendations: 2-4 inches typical, varies by plant and climate",
        "Material selection: Match mulch to plant needs (acid-loving vs. alkaline)",
        "Application timing: Spring after soil warms, fall for winter protection",
        "Keep away from stems: 3-6 inch clearance from woody plants prevents rot",
        "Annual replacement: Organic mulches decompose, replenish annually or biannually"
      ],
      appliesTo: "Home gardening and landscape mulching practices"
    },
    {
      name: "National Association of Landscape Professionals (NALP) Standards",
      code: "Professional Installation Best Practices",
      description: "Industry standards for professional mulch installation including preparation, material selection, application methods, and maintenance schedules.",
      url: "https://www.landscapeprofessionals.org/",
      requirements: [
        "Bed preparation: Remove weeds, edge beds, install landscape fabric if specified",
        "Depth standards: 2-4 inches ornamental beds, 3-4 inches trees/shrubs",
        "Stem clearance: 3-6 inches clear around woody stems (volcano mulching harmful)",
        "Slope considerations: Thinner application on slopes (2 inches max), prevent washout",
        "Maintenance cycle: Annual or biannual replenishment as material decomposes"
      ],
      appliesTo: "Professional landscape installation and maintenance"
    },
    {
      name: "EPA Guidelines - Yard Trimmings and Compost Mulch",
      code: "EPA Sustainable Materials Management",
      description: "Federal guidelines promoting yard waste recycling into mulch and compost. Encourages municipalities to provide composted mulch as alternative to landfill disposal.",
      url: "https://www.epa.gov/sustainable-management-food/sustainable-management-food-basics",
      requirements: [
        "Compost maturity: Minimum 60-90 days composting before use",
        "Temperature: Thermophilic composting (131-170°F) kills weed seeds and pathogens",
        "Quality standards: Stable, finished compost with earthy smell, no odors",
        "Contaminant screening: Remove plastics, metal, and non-compostable materials",
        "Municipal programs: Many cities offer free or low-cost compost mulch"
      ],
      appliesTo: "Composted yard waste mulch and municipal programs"
    }
  ]
};

export const mulchRegionalVariations = {
  warningMessage: "Mulch requirements vary by climate, plant types, and local pests. Application depth, material selection, and timing differ significantly between regions.",
  variations: [
    {
      title: "Climate-Specific Mulch Depth",
      subtitle: "Regional moisture and temperature considerations",
      description: "Different climates require different mulch depths for optimal moisture retention and temperature moderation. Too little mulch in dry climates wastes water; too much in humid climates promotes rot and pests.",
      examples: [
        { region: "Arid Southwest (AZ, NM, NV)", requirement: "3-4 inches depth for moisture retention, rock mulch popular (doesn't decompose), drip irrigation under mulch" },
        { region: "Humid Southeast (FL, GA, SC)", requirement: "2-3 inches maximum - excess mulch traps moisture, causes fungal disease and termite attraction" },
        { region: "Cold climates (Northern states)", requirement: "3-4 inches applied in fall for winter insulation, protects roots from freeze-thaw" },
        { region: "Pacific Northwest", requirement: "2-3 inches sufficient with high rainfall, focus on well-draining mulch types" },
        { region: "Moderate climates", requirement: "Standard 2-4 inches for most applications" }
      ],
      impact: "Wrong mulch depth wastes money and harms plants. Excess in humid climates causes rot, mildew, and pest problems. Too little in arid climates requires excessive watering."
    },
    {
      title: "Termite Risk and Mulch Selection",
      subtitle: "High-risk areas require careful material selection",
      description: "Organic mulches provide food and shelter for termites. High-risk areas (Southeast, warm humid climates) should avoid certain mulches near structures or use termite-resistant materials.",
      examples: [
        { region: "High risk (Southeast, Gulf Coast)", requirement: "Keep all mulch 12-18 inches from foundation, use cedar or cypress (natural repellent), inspect regularly" },
        { region: "Moderate risk (Mid-Atlantic, Southwest)", requirement: "6-12 inch clearance from foundation, avoid pine bark near structures" },
        { region: "Low risk (Northern states)", requirement: "Standard clearance (3-6 inches) adequate, termites less active in cold climates" },
        { region: "Alternative materials", requirement: "Rubber mulch, rock, or gravel eliminates termite food source near foundations" }
      ],
      impact: "Mulch against foundation in termite zones creates highway for infestation. Termite treatment costs $1,500-3,000. Prevention requires proper clearance and material selection."
    },
    {
      title: "Playground Safety Requirements",
      subtitle: "ASTM F1292 depth requirements by fall height",
      description: "Public playgrounds must meet strict safety surfacing standards. Required depth depends on maximum equipment fall height and must be maintained through regular inspections.",
      examples: [
        { region: "Commercial playgrounds (all states)", requirement: "6-12 inches engineered wood fiber (EWF) depending on fall height, monthly inspections required" },
        { region: "Schools and daycares", requirement: "State-mandated compliance with ASTM F1292, insurance requires certification" },
        { region: "Public parks", requirement: "ADA-accessible surfacing required, liability concerns mandate proper depth maintenance" },
        { region: "Residential playgrounds", requirement: "Standards recommended but not mandated, homeowner liability if child injured" },
        { region: "High-traffic areas", requirement: "Mulch compacts 30-50% annually - must replenish to maintain safety depth" }
      ],
      impact: "Inadequate playground mulch depth causes serious injury liability. Commercial playgrounds face lawsuits for non-compliance. Annual replenishment costs $500-2,000 per playground."
    },
    {
      title: "Wildfire-Prone Areas",
      subtitle: "Defensible space and fire-resistant landscaping",
      description: "High wildfire risk areas have restrictions on flammable mulches near structures. Fire codes may require non-combustible materials within defensible space zones.",
      examples: [
        { region: "California WUI zones", requirement: "Non-combustible mulch (rock, gravel) required within 5 feet of structure, reduced organic mulch 5-30 feet" },
        { region: "Colorado, Oregon fire zones", requirement: "Rock mulch strongly recommended near structures, thin organic mulch layers (1-2 inches) acceptable farther out" },
        { region: "Moderate fire risk", requirement: "Standard mulch acceptable but maintain clearance, avoid mulch piles against structures" },
        { region: "Insurance requirements", requirement: "Some insurers mandate fire-resistant landscaping in high-risk zones" }
      ],
      impact: "Combustible mulch against structures increases fire risk and may void insurance. Rock/gravel costs 2-3× more initially but never needs replacement."
    },
    {
      title: "Material Availability and Regional Preferences",
      subtitle: "Local materials are cheaper and more sustainable",
      description: "Mulch costs vary significantly by region based on local forestry and availability. Shipping heavy materials long distances increases costs. Regional preferences based on local aesthetics and performance.",
      examples: [
        { region: "Pacific Northwest", requirement: "Abundant bark mulch (Douglas fir, hemlock) - local favorite, inexpensive, widely available" },
        { region: "Southeast", requirement: "Pine bark nuggets and straw popular, cypress mulch (termite resistant) premium option" },
        { region: "Northeast", requirement: "Hardwood mulch common, shredded leaves free from municipalities in fall" },
        { region: "Southwest", requirement: "Rock/gravel preferred (doesn't blow away, matches xeriscaping), organic mulch expensive" },
        { region: "Midwest", requirement: "Hardwood and cedar mulch common, municipalities often provide free wood chips" }
      ],
      impact: "Local mulch is 30-50% cheaper than imported materials. Free municipal mulch available in many cities but may contain weed seeds or inconsistent material."
    },
    {
      title: "Application Timing by Climate",
      subtitle: "When to apply mulch for best results",
      description: "Optimal mulching timing varies by region. Cold climates mulch in fall for winter protection; warm climates mulch in spring after soil warms to trap heat.",
      examples: [
        { region: "Cold climates (North)", requirement: "Fall mulching (late October-November) insulates roots for winter, spring mulching delays soil warming" },
        { region: "Warm climates (South)", requirement: "Spring mulching (March-April) after soil warms, suppresses weeds during growing season" },
        { region: "Year-round growing (FL, CA)", requirement: "Mulch anytime, no winter dormancy concerns, focus on weed suppression and moisture" },
        { region: "Drought-prone areas", requirement: "Late winter/early spring mulching traps spring moisture for summer drought" }
      ],
      impact: "Wrong timing reduces mulch effectiveness. Spring mulch in cold climates keeps soil cold longer, delaying plant growth. Fall mulch in warm climates wastes money."
    },
    {
      title: "Municipal Regulations and HOA Requirements",
      subtitle: "Local codes and community aesthetic standards",
      description: "Some municipalities regulate mulch color, type, or depth for water conservation. HOAs often have aesthetic requirements for mulch color and material to maintain uniform appearance.",
      examples: [
        { region: "Water-restricted areas (Southwest)", requirement: "Some cities offer rebates for rock mulch (permanent water savings), organic mulch discouraged" },
        { region: "Strict HOAs", requirement: "Approved mulch colors only (typically natural brown, black, or red), dyed mulches may be restricted" },
        { region: "Environmental regulations", requirement: "Some areas ban dyed mulches (leach chemicals), require natural or certified organic mulch" },
        { region: "Historic districts", requirement: "Natural materials only, dyed mulches prohibited, shredded leaves or bark preferred" }
      ],
      impact: "HOA violations result in fines ($50-500) and forced replacement. Check HOA rules before purchasing mulch. Water rebates can offset rock mulch costs."
    },
    {
      title: "Slope and Erosion Control",
      subtitle: "Special considerations for hillside landscaping",
      description: "Slopes require modified mulch applications to prevent washout. Shredded mulch knits together better than chunks on slopes. Some slopes need erosion control fabric or soil amendments.",
      examples: [
        { region: "Slopes >15 degrees", requirement: "Shredded mulch (not chunks), max 2 inches depth, landscape fabric underneath prevents sliding" },
        { region: "Severe slopes (>25 degrees)", requirement: "Erosion control blanket + light mulch, or ground cover plants instead of loose mulch" },
        { region: "Slope with runoff", requirement: "Check dams, terracing, or retaining walls required before mulching" },
        { region: "Heavy rain areas", requirement: "Chunky mulch washes away - use shredded hardwood or bark that knits together" }
      ],
      impact: "Wrong mulch on slopes washes away in first rain ($200-500 wasted). Slope stabilization required before mulching on severe grades."
    }
  ]
};