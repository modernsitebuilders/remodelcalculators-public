// Example data for Interior Paint Calculator trust-building components
// Shows how to adapt the pattern for different calculator types

export const paintMethodology = {
  calculatorType: "interior-paint",
  source: "PDCA (Painting & Decorating Contractors of America)",
  formulas: [
    {
      name: "Total Wall Area",
      formula: "Area = 2 × (Length + Width) × Height",
      explanation: "Calculate the total square footage of all four walls in a rectangular room.",
      example: "Room 12ft × 15ft with 8ft ceilings: 2 × (12 + 15) × 8 = 432 sq ft"
    },
    {
      name: "Doors & Windows Deduction",
      formula: "Deduction = (Doors × 21 sq ft) + (Windows × 15 sq ft)",
      explanation: "Standard door is 7ft × 3ft = 21 sq ft. Standard window is 3ft × 5ft = 15 sq ft.",
      example: "2 doors + 3 windows = (2 × 21) + (3 × 15) = 87 sq ft deducted"
    },
    {
      name: "Gallons Required",
      formula: "Gallons = Paintable Area ÷ Coverage Rate",
      explanation: "Standard coverage is 350-400 sq ft per gallon. Varies by surface texture and paint quality.",
      example: "345 sq ft ÷ 350 sq ft/gal = 0.99 gallons (round up to 1 gallon)"
    },
    {
      name: "Multiple Coats",
      formula: "Total Gallons = Base Gallons × Number of Coats",
      explanation: "Most projects require 2 coats. Primer adds 1 additional coat. Dark-to-light color changes may need 3 coats.",
      example: "1 gallon × 2 coats = 2 gallons total"
    }
  ],
  constants: [
    {
      name: "Standard Coverage (Flat/Matte)",
      value: "400 sq ft/gal",
      description: "Best coverage - absorbs least, smoothest application"
    },
    {
      name: "Eggshell/Satin Coverage",
      value: "375 sq ft/gal",
      description: "Moderate coverage - slight sheen reduces coverage"
    },
    {
      name: "Semi-Gloss Coverage",
      value: "350 sq ft/gal",
      description: "Lower coverage - higher resin content"
    },
    {
      name: "High-Gloss Coverage",
      value: "325 sq ft/gal",
      description: "Lowest coverage - thicker formula for durability"
    },
    {
      name: "Standard Door Size",
      value: "21 sq ft",
      description: "7ft height × 3ft width (industry standard)"
    },
    {
      name: "Standard Window Size",
      value: "15 sq ft",
      description: "5ft height × 3ft width (average residential)"
    },
    {
      name: "Recommended Coats",
      value: "2",
      description: "PDCA standard for new paint over existing similar color"
    }
  ]
};

export const paintStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "PDCA - Painting & Decorating Contractors of America Standards",
      code: "P1-P20 Standards",
      description: "Industry standards for surface preparation, application methods, and quality benchmarks. Defines coverage rates, drying times, and coating specifications for professional painting.",
      url: "https://www.pcapainted.org/wp-content/uploads/2023/10/PCA-Industry-Standards_20230918.pdf",
      requirements: [
        "Surface prep: Walls must be clean, dry, and smooth before painting",
        "Primer required for: New drywall, repairs, dark-to-light color changes, stains",
        "Minimum 2 coats recommended for uniform coverage and durability",
        "24-hour drying time between coats at 70°F and 50% humidity"
      ],
      appliesTo: "All interior painting projects"
    },
    {
      name: "Master Painters Institute (MPI) Standards",
      code: "MPI Gloss Level Standards",
      description: "Defines paint sheen levels and appropriate applications. Level 1 (Flat) to Level 7 (High Gloss). Higher gloss = more durable but shows imperfections more easily.",
      url: "https://www.mpi.net/Listing_testing/Standard.asp",
      requirements: [
        "Level 1-2 (Flat/Matte): Ceilings, low-traffic walls - 400 sq ft/gal",
        "Level 3-4 (Eggshell/Satin): Living areas, bedrooms - 375 sq ft/gal",
        "Level 5-6 (Semi-Gloss): Kitchens, bathrooms, trim - 350 sq ft/gal",
        "Level 7 (High-Gloss): Cabinets, doors, high-wear areas - 325 sq ft/gal"
      ],
      appliesTo: "Paint sheen selection and coverage estimation"
    },
    {
      name: "ASTM D3276 - Guide for Painting Inspectors",
      code: "ASTM D3276-15",
      description: "Standard for paint inspection and quality control. Covers film thickness measurement, adhesion testing, and defect identification.",
      url: "https://www.normservis.cz/download/view/astm-sk/d/3/d3276-21.html",
      requirements: [
        "Wet film thickness: 4-6 mils per coat typical",
        "Dry film thickness: 1.5-2 mils per coat minimum",
        "Coverage uniformity: Visual inspection for holidays (missed spots)",
        "Adhesion test: Cross-hatch or pull-off test for critical applications"
      ],
      appliesTo: "Quality control and professional inspection"
    },
    {
      name: "Paint Quality Institute (PQI) Guidelines",
      code: "Consumer Education Standards",
      description: "Provides paint quality ratings and application best practices. Premium paints offer better coverage (fewer coats) and durability than economy paints.",
      url: "https://paintingcontractorusa.com/painting-resources/",
      requirements: [
        "Premium paints: 350-400 sq ft/gal, better hide, one-coat coverage possible",
        "Mid-grade paints: 300-350 sq ft/gal, adequate hide, two coats standard",
        "Economy paints: 250-300 sq ft/gal, poor hide, may require 3+ coats"
      ],
      appliesTo: "Paint selection and coverage calculations"
    }
  ]
};

export const paintRegionalVariations = {
  warningMessage: "Paint coverage varies by climate (humidity affects drying), surface condition, and application method. These factors can change material requirements by 20-30%.",
  variations: [
    {
      title: "Humidity and Temperature Effects",
      subtitle: "Affects drying time and coverage rates",
      description: "High humidity and extreme temperatures impact paint application, drying times, and coverage. Coverage rates assume 70°F and 50% relative humidity.",
      examples: [
        { region: "Humid climates (Southeast, Gulf Coast)", requirement: "Slower drying - plan 48+ hours between coats, may need dehumidifier" },
        { region: "Dry climates (Southwest)", requirement: "Faster drying - may need more paint as it absorbs faster into dry surfaces" },
        { region: "Cold climates (winter painting)", requirement: "Below 50°F requires longer drying, some paints won't cure properly" }
      ],
      impact: "May need additional paint for proper coverage or extended project timelines."
    },
    {
      title: "Surface Texture Variations",
      subtitle: "Texture significantly impacts paint requirements",
      description: "Rough or textured surfaces require substantially more paint than smooth drywall. Coverage rates assume standard smooth or light texture drywall.",
      examples: [
        { region: "Heavy knockdown texture", requirement: "Reduce coverage to 250-300 sq ft/gal (30% more paint needed)" },
        { region: "Orange peel texture", requirement: "Reduce coverage to 300-325 sq ft/gal (15% more paint)" },
        { region: "Smooth drywall (Level 5 finish)", requirement: "Standard 350-400 sq ft/gal applies" },
        { region: "Bare wood/unpainted surfaces", requirement: "Reduce coverage by 25-50% due to absorption" }
      ],
      impact: "Textured walls can increase paint requirements by 30-50% over calculator estimates."
    },
    {
      title: "VOC Regulations",
      subtitle: "State-specific volatile organic compound limits",
      description: "Some states restrict paint formulations to reduce air pollution. Low-VOC paints may have slightly different coverage rates and application properties.",
      examples: [
        { region: "California (CARB)", requirement: "VOC limit: 50 g/L for flat, 100 g/L for gloss - affects paint selection" },
        { region: "Northeastern states (OTC regions)", requirement: "Similar restrictions to California in many areas" },
        { region: "Most other states", requirement: "Federal EPA limits: 250 g/L flat, 380 g/L non-flat (less restrictive)" }
      ],
      impact: "Limits paint brand/product availability. Low-VOC paints sometimes require additional coats."
    },
    {
      title: "Historic District Requirements",
      subtitle: "Preservation guidelines may dictate paint types and colors",
      description: "Properties in historic districts often have paint color and finish restrictions. Some areas require breathable paints for historic plaster.",
      examples: [
        { region: "Designated historic districts", requirement: "May require period-appropriate colors from approved palette" },
        { region: "Historic buildings (pre-1950)", requirement: "May require lime-based or mineral paints for plaster walls" },
        { region: "HOA communities", requirement: "Interior typically unrestricted, but check for move-in/move-out rules" }
      ],
      impact: "Specialized historic paints often have different coverage rates and higher costs."
    },
    {
      title: "Rental Property Regulations",
      subtitle: "Some jurisdictions have specific requirements for rental units",
      description: "Certain cities require specific paint standards for rental properties, particularly regarding lead paint in pre-1978 construction.",
      examples: [
        { region: "NYC, San Francisco, others", requirement: "Lead-safe paint practices required in pre-1978 buildings" },
        { region: "Many municipalities", requirement: "Required repainting between tenants (frequency varies)" },
        { region: "Section 8 / HUD housing", requirement: "Specific quality standards and inspection requirements" }
      ],
      impact: "May require certified contractors, specific products, or additional documentation."
    }
  ]
};