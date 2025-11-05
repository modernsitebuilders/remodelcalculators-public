// Data for Deck Stain Calculator trust-building components
// Based on ASTM standards and manufacturer specifications

export const deckStainMethodology = {
  calculatorType: "deck-stain",
  source: "ASTM D3023 & Manufacturer Specs",
  formulas: [
    {
      name: "Deck Surface Area",
      formula: "Area = Length × Width",
      explanation: "Calculate the horizontal deck surface area in square feet.",
      example: "16 ft × 20 ft deck = 320 square feet"
    },
    {
      name: "Railing Coverage",
      formula: "Railing Area = Linear Feet × 2",
      explanation: "Railings have front and back surfaces. Multiply linear feet by 2 for approximate square footage.",
      example: "40 linear feet railing × 2 = 80 square feet"
    },
    {
      name: "Total Coverage Area",
      formula: "Total = Deck Area + Railing Area + Stair Area",
      explanation: "Add horizontal deck surface, railings, and stairs for complete coverage calculation.",
      example: "320 sq ft deck + 80 sq ft railing + 40 sq ft stairs = 440 sq ft total"
    },
    {
      name: "Stain Required (by type)",
      formula: "Gallons = Total Area ÷ Coverage Rate",
      explanation: "Coverage varies dramatically by stain type and wood condition. New smooth wood: 250-350 sq ft/gal. Weathered rough wood: 100-150 sq ft/gal.",
      example: "440 sq ft ÷ 200 sq ft/gal (semi-transparent, weathered wood) = 2.2 → buy 3 gallons"
    },
    {
      name: "Two-Coat Coverage",
      formula: "Total Gallons = Base Gallons × Number of Coats",
      explanation: "Most manufacturers recommend 2 coats. First coat seals, second coat provides color and UV protection.",
      example: "3 gallons × 2 coats = 6 gallons total"
    },
    {
      name: "Wood Condition Multiplier",
      formula: "Adjusted Coverage = Base Coverage ÷ Condition Factor",
      explanation: "New smooth wood uses least stain. Weathered, rough, or end-grain wood absorbs 2-3× more stain.",
      example: "300 sq ft/gal base ÷ 2 (weathered wood) = 150 sq ft/gal adjusted"
    }
  ],
  constants: [
    {
      name: "Solid Stain (New Wood)",
      value: "250-300 sq ft/gal",
      description: "Opaque, paint-like coverage on smooth surfaces"
    },
    {
      name: "Solid Stain (Weathered)",
      value: "150-200 sq ft/gal",
      description: "Rough or porous wood absorbs more"
    },
    {
      name: "Semi-Transparent (New)",
      value: "200-250 sq ft/gal",
      description: "Penetrating stain on smooth wood"
    },
    {
      name: "Semi-Transparent (Weathered)",
      value: "100-150 sq ft/gal",
      description: "Weathered wood absorbs significantly more"
    },
    {
      name: "Clear Sealer (New)",
      value: "300-400 sq ft/gal",
      description: "No pigment, minimal absorption"
    },
    {
      name: "Clear Sealer (Weathered)",
      value: "150-250 sq ft/gal",
      description: "Weathered wood still absorbs more even with clear"
    },
    {
      name: "Recommended Coats",
      value: "2",
      description: "First coat seals, second provides color and protection"
    },
    {
      name: "Railing Factor",
      value: "2× linear feet",
      description: "Front and back surfaces of railings"
    }
  ]
};

export const deckStainStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "ASTM D3023 - Practice for Preservation of Wood",
      code: "ASTM D3023",
      description: "Standards for wood preservation treatments including proper preparation, application methods, and maintenance schedules for exterior wood structures. Covers both pressure-treated and naturally durable woods.",
      url: "https://www.astm.org/d3023-98r17.html",
      requirements: [
        "Surface preparation: Clean, dry wood (moisture content ≤15%) before staining",
        "Weathered wood: Brighten with oxalic acid or wood brightener before staining",
        "End-grain treatment: Extra coat required on cut ends (absorbs 3× more)",
        "Application temperature: 50-90°F, no rain forecast within 24 hours",
        "Drying time: 24-48 hours between coats depending on temperature/humidity"
      ],
      appliesTo: "All exterior wood staining and sealing projects"
    },
    {
      name: "ASTM D1413 - Testing Wood Preservatives by Lab Soil-Block",
      code: "ASTM D1413",
      description: "Test method for evaluating effectiveness of wood preservatives against decay fungi. Helps determine appropriate treatment for different exposure conditions.",
      url: "https://www.astm.org/d1413-21.html",
      requirements: [
        "Ground contact: ACQ, CA, or MCQ pressure-treated wood required",
        "Above ground: Lesser treatments acceptable (.40 retention vs .60 for ground)",
        "Naturally durable: Cedar, redwood, ipe need no treatment but benefit from sealing",
        "Stain penetration: Pressure-treated wood requires 6-12 month weathering before staining"
      ],
      appliesTo: "Deck lumber selection and treatment requirements"
    },
    {
      name: "Western Red Cedar Lumber Association (WRCLA) Finishing Guidelines",
      code: "WRCLA Standards",
      description: "Best practices for finishing cedar decking and outdoor structures. Cedar's natural oils affect stain absorption and require specific preparation methods.",
      url: "https://www.realcedar.com/maintenance/",
      requirements: [
        "New cedar: Allow 2-4 weeks weathering before staining (natural oils prevent absorption)",
        "Mill glaze removal: Lightly sand or power wash before staining new cedar",
        "Clear sealers recommended: Let natural beauty show, reapply annually",
        "Semi-transparent stains: Work best on cedar, solid stains hide grain",
        "Maintenance: Re-stain every 2-3 years in high UV areas, 3-5 years in shade"
      ],
      appliesTo: "Cedar deck staining and maintenance"
    },
    {
      name: "Manufacturer Application Instructions",
      code: "Varies by Product",
      description: "Stain and sealer manufacturers provide specific application instructions that must be followed for warranty coverage. Coverage rates, drying times, and preparation requirements vary significantly between products.",
      requirements: [
        "Surface prep: Most require clean, dry wood (some specify pressure washing)",
        "Temperature range: Typically 50-90°F surface temp, check specific product",
        "Coverage rates: Verify with product - range from 100-400 sq ft/gal",
        "Recoat timing: Usually 24-48 hours for water-based, 48-72 for oil-based",
        "Warranty: Following instructions exactly required for warranty claims"
      ],
      appliesTo: "All deck stain products - always read and follow label"
    },
    {
      name: "VOC Regulations for Exterior Stains",
      code: "EPA 40 CFR Part 59, State Regulations",
      description: "Federal and state regulations limit volatile organic compounds in stains and sealers. Some states have stricter requirements affecting product availability and performance.",
      url: "https://www.epa.gov/regulatory-information-topic/regulatory-information-topic-air",
      requirements: [
        "Federal EPA: 250 g/L for exterior stains (relatively lenient)",
        "California CARB: 100-250 g/L depending on stain type (strictest)",
        "OTC States: Some northeastern states follow California model",
        "Low-VOC impact: May require additional coats or different application method",
        "Oil vs. water-based: Water-based typically lower VOC, different penetration"
      ],
      appliesTo: "Stain product selection - check state requirements"
    },
    {
      name: "American Wood Protection Association (AWPA) Standards",
      code: "AWPA U1 (Use Category)",
      description: "Standards for preservative treatment of lumber based on exposure category. Determines appropriate treatment retention levels for different deck components.",
      url: "https://www.awpa.com/",
      requirements: [
        "UC2 (Above ground, protected): Joists under roof - .25 retention",
        "UC3A (Above ground, exposed): Deck boards, railings - .40 retention",
        "UC3B (Above ground, heavy wetting): Horizontal surfaces - .40 retention",
        "UC4A (Ground contact, general): Posts - .60 retention",
        "UC4B (Ground contact, critical): Posts in concrete - .60 retention"
      ],
      appliesTo: "Pressure-treated lumber selection and proper use category"
    }
  ]
};

export const deckStainRegionalVariations = {
  warningMessage: "Deck stain requirements vary significantly by climate. UV exposure, moisture levels, temperature extremes, and freeze-thaw cycles all affect stain selection, application timing, and maintenance schedules.",
  variations: [
    {
      title: "UV Exposure and Sun Intensity",
      subtitle: "Climate-specific stain selection and maintenance",
      description: "UV radiation is the primary cause of deck stain failure. High-altitude, southern, and western locations experience intense UV that requires more frequent maintenance and UV-blocking pigmented stains.",
      examples: [
        { region: "Southwest (AZ, NM, NV)", requirement: "Solid or dark semi-transparent stains for UV protection, recoat every 18-24 months, clear sealers fail in 6-12 months" },
        { region: "High altitude (Rockies, Sierra)", requirement: "Enhanced UV protection required, pigmented stains last 2-3 years, clear sealers not recommended" },
        { region: "Southern states (GA, TX, FL)", requirement: "UV + humidity combo - pigmented stains every 2-3 years, mildew resistance critical" },
        { region: "Pacific Northwest", requirement: "Less UV but high moisture - focus on water resistance over UV, 3-5 year intervals possible" },
        { region: "Northeast, Midwest", requirement: "Moderate UV - standard maintenance 3-4 years for semi-transparent, 5-7 years solid stain" }
      ],
      impact: "Wrong stain for UV exposure leads to premature failure: graying (1 year), peeling (2 years), bare wood (3 years). More frequent restaining required in high-UV areas."
    },
    {
      title: "Moisture and Rain Exposure",
      subtitle: "Water resistance and mildew prevention",
      description: "Areas with high rainfall or humidity require stains with enhanced water resistance and mildew inhibitors. Horizontal surfaces (deck boards) are more critical than vertical (railings).",
      examples: [
        { region: "Pacific Northwest (Seattle, Portland)", requirement: "Water-based stains with mildew resistance, annual cleaning recommended, 3-4 year restain cycle" },
        { region: "Southeast (high humidity)", requirement: "Mildew-resistant formulas mandatory, oil-based stains mildew faster, water-based preferred" },
        { region: "Coastal areas (salt spray)", requirement: "Marine-grade stains/sealers required, salt accelerates UV damage, annual maintenance" },
        { region: "Dry climates (Southwest)", requirement: "Moisture resistance less critical, UV protection primary concern" },
        { region: "Covered decks (all areas)", requirement: "Reduced maintenance schedule - UV/rain protected, 2× normal lifespan" }
      ],
      impact: "Inadequate moisture protection leads to water intrusion, wood rot, and structural failure. Mildew resistance critical in humid climates - black mildew ruins appearance."
    },
    {
      title: "Freeze-Thaw Cycles",
      subtitle: "Cold climate stain requirements",
      description: "Freeze-thaw cycles cause deck stain failure as water penetrates, freezes, expands, and pops the stain film. Penetrating stains perform better than film-forming in freeze zones.",
      examples: [
        { region: "Northern states (MN, WI, ME)", requirement: "Penetrating oil-based stains preferred over solid stains, film-forming stains peel in 2-3 years" },
        { region: "Moderate freeze (PA, OH, IA)", requirement: "Semi-transparent penetrating stains best compromise - UV protection + freeze tolerance" },
        { region: "Mountain areas", requirement: "Extreme freeze-thaw - avoid solid stains, use penetrating semi-transparent or clear oil" },
        { region: "No-freeze zones (South)", requirement: "Solid stains perform well without freeze-thaw stress, longer lifespan" }
      ],
      impact: "Film-forming stains peel in 2-3 years in freeze zones. Penetrating stains fade but don't peel - easier to maintain, just clean and recoat."
    },
    {
      title: "Wood Species and Stain Compatibility",
      subtitle: "Different woods absorb stain differently",
      description: "Wood species dramatically affects stain absorption and appearance. Dense tropical hardwoods require specialized products, while softwoods absorb readily. Cedar and redwood have natural oils affecting stain bonding.",
      examples: [
        { region: "Pressure-treated pine/fir (most common)", requirement: "Wait 6-12 months weathering, water-based stains penetrate better than oil after treatment" },
        { region: "Cedar/redwood (premium softwood)", requirement: "Wait 2-4 weeks for oils to dissipate, light sanding helps, semi-transparent shows grain beautifully" },
        { region: "Ipe/Brazilian hardwood (exotic)", requirement: "Specialized hardwood stains required, standard products won't penetrate dense grain, annual oil recommended" },
        { region: "Composite decking", requirement: "No staining possible or needed - color permanent in material" },
        { region: "Reclaimed/weathered wood", requirement: "Absorbs 2-3× more stain - reduce estimated coverage by 50%, prime if necessary" }
      ],
      impact: "Wrong stain for wood species results in poor adhesion, uneven color, or excessive absorption. Always test sample area first."
    },
    {
      title: "Application Season and Temperature",
      subtitle: "Optimal timing for stain application",
      description: "Temperature and humidity during application affect stain penetration, drying time, and bonding. Most stains require 50-90°F surface temperatures and 24 hours of dry weather.",
      examples: [
        { region: "Northern climates", requirement: "Short application season (May-September), cool morning applications ideal, afternoon too hot" },
        { region: "Southern climates", requirement: "Year-round application possible, avoid summer midday (surface too hot), fall/winter/spring ideal" },
        { region: "Humid Southeast", requirement: "Morning application, need dry weather forecast (hard to find), extended drying times" },
        { region: "Dry Southwest", requirement: "Spring or fall application (summer too hot), early morning only, stain dries very fast" },
        { region: "Pacific Northwest", requirement: "Limited dry weather windows, summer best, watch forecast closely" }
      ],
      impact: "Applying outside temperature window causes adhesion failure, bubbling, or incomplete penetration. Surface temperature (not air temp) is critical - direct sun makes wood 20-30°F hotter than air."
    },
    {
      title: "HOA and Architectural Restrictions",
      subtitle: "Community color and finish requirements",
      description: "Many HOAs restrict deck stain colors to maintain aesthetic consistency. Some require natural wood tones, others mandate specific color ranges or prohibit certain finishes.",
      examples: [
        { region: "Strict HOAs", requirement: "Approved color palette only, clear/natural stains prohibited (allow graying), written approval required" },
        { region: "Moderate HOAs", requirement: "Natural wood tones required, no bright/artificial colors, solid stains may be restricted" },
        { region: "Historic districts", requirement: "Period-appropriate stains (natural oil finishes), modern synthetic stains may be prohibited" },
        { region: "No restrictions", requirement: "Any stain type and color acceptable, personal preference" }
      ],
      impact: "Staining without HOA approval can result in forced removal and restaining at owner expense ($2,000-5,000). Get written approval with color sample before purchasing."
    },
    {
      title: "Maintenance Schedules by Climate",
      subtitle: "How often to restain your deck",
      description: "Restaining frequency varies dramatically by climate, stain type, and UV/moisture exposure. Horizontal surfaces (deck boards) wear faster than vertical (railings).",
      examples: [
        { region: "High UV (Southwest, high altitude)", requirement: "Solid stain: 2-3 years, Semi-transparent: 18-24 months, Clear sealer: 12-18 months" },
        { region: "Humid Southeast", requirement: "Solid stain: 3-4 years, Semi-transparent: 2-3 years, annual mildew cleaning required" },
        { region: "Pacific Northwest", requirement: "Solid stain: 4-5 years, Semi-transparent: 3-4 years, moisture causes slow degradation" },
        { region: "Northern freeze-thaw", requirement: "Penetrating stains: 3-4 years, Solid stains: 2-3 years (peeling issues)" },
        { region: "Covered decks (all climates)", requirement: "Double normal intervals - protected from UV and rain extends stain life significantly" }
      ],
      impact: "Waiting too long between coats allows UV/water damage to bare wood, requiring expensive sanding/restoration ($2-5 per sq ft). Regular maintenance costs $0.50-1.50 per sq ft."
    },
    {
      title: "Deck Height and Safety Railings",
      subtitle: "Code requirements affect deck design and stain access",
      description: "Elevated decks have railing requirements that increase surface area to stain. Multi-story decks or difficult access may require professional staining.",
      examples: [
        { region: "Decks >30 inches above grade (IRC)", requirement: "Railings required - adds 30-50% to staining area, balusters time-consuming" },
        { region: "Second-story decks", requirement: "Professional staining recommended for safety and access, ladder work hazardous" },
        { region: "Complex multi-level decks", requirement: "Calculate each level separately, stair railings add significant surface area" },
        { region: "Ground-level decks", requirement: "No railings required (if ≤30 inches) - faster, cheaper to stain" }
      ],
      impact: "Railings increase stain requirements by 30-50% and double application time. Complex deck designs may require professional staining for quality and safety."
    }
  ]
};