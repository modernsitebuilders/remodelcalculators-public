// Data for Exterior Paint Calculator trust-building components
// Based on PDCA, ASTM, and industry standards

export const exteriorPaintMethodology = {
  calculatorType: "exterior-paint",
  source: "PDCA & ASTM D3276",
  formulas: [
    {
      name: "Total Wall Area",
      formula: "Area = (Perimeter × Height) - Openings",
      explanation: "Calculate perimeter of house, multiply by wall height, then subtract doors and windows.",
      example: "40ft × 30ft house = 140ft perimeter × 10ft height = 1,400 sq ft - 200 sq ft openings = 1,200 sq ft"
    },
    {
      name: "Siding Texture Multiplier",
      formula: "Adjusted Area = Base Area × Texture Multiplier",
      explanation: "Rough or textured siding absorbs more paint than smooth surfaces. Multiply base area by texture factor.",
      example: "1,200 sq ft × 1.3 (rough wood siding) = 1,560 sq ft adjusted area"
    },
    {
      name: "Gallons Required",
      formula: "Gallons = Adjusted Area ÷ Coverage Rate",
      explanation: "Divide adjusted square footage by coverage rate per gallon. Smooth surfaces: 350-400 sq ft/gal, textured: 200-300 sq ft/gal.",
      example: "1,560 sq ft ÷ 300 sq ft/gal (textured) = 5.2 gallons → round up to 6 gallons"
    },
    {
      name: "Trim and Doors",
      formula: "Trim Gallons = Linear Feet ÷ 50",
      explanation: "Trim requires approximately 1 gallon per 50 linear feet for single coat coverage.",
      example: "200 linear feet trim ÷ 50 = 4 gallons trim paint"
    },
    {
      name: "Multiple Coats",
      formula: "Total Paint = Base Gallons × Number of Coats",
      explanation: "Most exterior paint requires 2 coats. Add 1 coat if using primer. Dark-to-light color changes may need 3 coats.",
      example: "6 gallons × 2 coats = 12 gallons total"
    },
    {
      name: "Primer Coverage",
      formula: "Primer Gallons = Area ÷ 250",
      explanation: "Primer typically covers less than topcoat: 250-300 sq ft per gallon average.",
      example: "1,200 sq ft ÷ 250 = 4.8 gallons → round up to 5 gallons primer"
    }
  ],
  constants: [
    {
      name: "Smooth Siding Coverage",
      value: "350-400 sq ft/gal",
      description: "Vinyl, smooth fiber cement, or painted surfaces"
    },
    {
      name: "Textured Siding Coverage",
      value: "250-300 sq ft/gal",
      description: "Wood lap siding, textured stucco, T1-11"
    },
    {
      name: "Rough/Porous Coverage",
      value: "150-250 sq ft/gal",
      description: "Brick, rough stucco, rough-sawn wood, concrete block"
    },
    {
      name: "Primer Coverage",
      value: "250-300 sq ft/gal",
      description: "Sealing bare surfaces requires more material"
    },
    {
      name: "Standard Door Size",
      value: "21 sq ft",
      description: "7 ft height × 3 ft width typical"
    },
    {
      name: "Standard Window Size",
      value: "15 sq ft",
      description: "5 ft height × 3 ft width average"
    },
    {
      name: "Recommended Coats",
      value: "2",
      description: "Two coats for durability and weather protection"
    }
  ]
};

export const exteriorPaintStandards = {
  lastVerified: "November 2025",
  standards: [
    {
      name: "ASTM D3276 - Standard Guide for Painting Inspectors",
      code: "ASTM D3276-15",
      description: "Comprehensive guide for exterior paint inspection covering surface preparation, application methods, film thickness, and quality control for masonry, wood, and metal substrates.",
      url: "https://store.astm.org/d6237-19.html",
      requirements: [
        "Surface prep: Clean, dry, and stable before painting (moisture ≤15%)",
        "Primer required: New wood, repairs, masonry, or substrate changes",
        "Film thickness: 4-6 mils wet, 1.5-2.5 mils dry per coat minimum",
        "Adhesion testing: Cross-hatch or pull-off test for quality assurance",
        "Temperature: Apply when surface temp is 50-90°F, no rain within 24 hours"
      ],
      appliesTo: "All exterior paint applications and inspections"
    },
    {
      name: "Vinyl Siding Institute (VSI) Paint Guidelines",
      code: "VSI Standards",
      description: "Guidelines for painting vinyl siding to prevent heat warping. Requires specific Light Reflectance Value (LRV) ratings to avoid vinyl distortion from heat absorption.",
      url: "https://www.vinylsiding.org/",
      requirements: [
        "LRV rating: Minimum 55 or higher (lighter colors only)",
        "Dark colors prohibited: Can cause vinyl to warp from heat (up to 160°F surface temp)",
        "Surface cleaning: TSP wash, rinse thoroughly, allow to dry",
        "Paint type: 100% acrylic latex designed for vinyl and plastic",
        "Warranty: Painting may void vinyl manufacturer warranty - verify first"
      ],
      appliesTo: "Vinyl siding painting (generally not recommended by manufacturers)"
    },
    {
      name: "PDCA - Painting & Decorating Contractors of America Standards",
      code: "PDCA P1-P20",
      description: "Professional painting standards for residential and commercial exteriors. Covers surface preparation levels, application methods, coating specifications, and quality benchmarks.",
      url: "https://www.pdcarva.org/pdca-industry-standards/",
      requirements: [
        "Surface prep levels: P1 (minimal) to P5 (maximum) based on condition",
        "Two-coat minimum: Primer + finish or two finish coats",
        "Drying time: 24 hours between coats at 70°F, longer in cold/humid weather",
        "Application method: Brush, roll, or spray based on substrate and texture",
        "Spot priming: All repairs, stains, and substrate changes before topcoat"
      ],
      appliesTo: "Professional exterior painting standards and quality control"
    },
    {
      name: "National Roofing Contractors Association (NRCA) - Fascia/Soffit",
      code: "NRCA Guidelines",
      description: "Standards for painting fascia, soffits, and trim boards that interface with roofing systems. Emphasizes moisture barriers and proper priming to prevent wood rot.",
      url: "https://www.nrca.net/",
      requirements: [
        "Prime all six sides: Prevents moisture intrusion from behind",
        "Aluminum coil stock alternative: Consider pre-finished metal trim",
        "Ventilation: Don't paint over soffit vents (blocks airflow)",
        "Back-side sealing: Critical for fascia exposed to roof runoff"
      ],
      appliesTo: "Fascia, soffits, frieze boards, and other roof-adjacent trim"
    },
    {
      name: "EPA Lead-Safe Renovation Rule (RRP)",
      code: "40 CFR 745",
      description: "Federal requirements for disturbing lead paint in homes built before 1978. Contractors must be EPA-certified and follow lead-safe work practices when scraping, sanding, or removing old paint.",
      url: "https://www.epa.gov/lead/renovation-repair-and-painting-program",
      requirements: [
        "Pre-1978 homes: Assume lead paint present until tested",
        "Certified renovators: EPA RRP certification required for contractors",
        "Containment: Plastic sheeting, warning signs, restrict access",
        "Cleanup: HEPA vacuum, wet cleaning, proper waste disposal",
        "Documentation: Provide lead pamphlet, keep records 3 years"
      ],
      appliesTo: "Any exterior paint work on pre-1978 residential properties"
    }
  ]
};

export const exteriorPaintRegionalVariations = {
  warningMessage: "Exterior paint requirements vary by climate, substrate, and local regulations. UV exposure, freeze-thaw cycles, humidity, and coastal salt air all affect paint selection and application methods.",
  variations: [
    {
      title: "Climate Zone Paint Selection",
      subtitle: "UV exposure, temperature extremes, and moisture levels",
      description: "Different climates require different paint formulations. UV-resistant paints for sunny areas, flexible paints for freeze-thaw zones, and mildew-resistant formulas for humid climates.",
      examples: [
        { region: "Southwest (AZ, NM, NV)", requirement: "High UV resistance, fade-resistant pigments, elastomeric for stucco, 100% acrylic" },
        { region: "Northeast (freeze-thaw zones)", requirement: "Flexible formula for expansion/contraction, moisture resistance, quick-dry in short season" },
        { region: "Southeast (high humidity)", requirement: "Mildew-resistant additives, moisture-permeable (breathable), longer drying times needed" },
        { region: "Pacific Northwest (rain)", requirement: "Water-resistant, mildew-resistant, extended open time for damp conditions" },
        { region: "Coastal areas (salt air)", requirement: "Corrosion-resistant primers, high-build coatings, frequent maintenance schedule" }
      ],
      impact: "Wrong paint for climate leads to premature failure: fading (1-3 years SW), mildew (1 year SE), peeling (2-3 years freeze zones)."
    },
    {
      title: "Temperature and Weather Restrictions",
      subtitle: "Application temperature limits vary by product and climate",
      description: "Most exterior paints require surface temperatures between 50-90°F for proper curing. Cold weather formulas allow painting down to 35°F but cure more slowly.",
      examples: [
        { region: "Standard latex paints", requirement: "50°F minimum surface temp, no rain 24 hours, apply when warming (morning)" },
        { region: "Cold-weather formulas (Northern states)", requirement: "Down to 35°F, extended cure time (7-14 days), limited to late spring/summer" },
        { region: "Hot climates (surface temp check)", requirement: "Avoid midday painting when siding exceeds 90°F (causes bubbling/poor adhesion)" },
        { region: "Humid Southeast", requirement: "Morning application preferred, avoid dew point, need 48+ hours dry time" }
      ],
      impact: "Painting outside temperature window causes adhesion failure, blistering, or incomplete curing. Short painting seasons in cold climates increase labor costs."
    },
    {
      title: "VOC Regulations by State",
      subtitle: "Volatile Organic Compound limits restrict paint formulations",
      description: "Some states limit VOC content in exterior paints to reduce air pollution. Low-VOC paints may have different application properties and coverage rates.",
      examples: [
        { region: "California (CARB)", requirement: "Flat: 50 g/L, Non-flat: 100 g/L maximum VOC - strictest in nation" },
        { region: "OTC States (Northeast corridor)", requirement: "Similar to California in many areas, gradually adopting stricter limits" },
        { region: "Federal EPA (most states)", requirement: "Flat: 250 g/L, Non-flat: 380 g/L (less restrictive)" },
        { region: "Effect on products", requirement: "Limited selection in CARB states, some premium products unavailable" }
      ],
      impact: "Low-VOC paints sometimes require additional coats for equal coverage. Premium brands with low-VOC now perform as well as traditional."
    },
    {
      title: "Historic District Requirements",
      subtitle: "Architectural review boards restrict colors and finishes",
      description: "Properties in historic districts often face strict paint color and finish restrictions. Must use period-appropriate colors from approved palettes, sometimes requiring special lime-based paints.",
      examples: [
        { region: "National Register districts", requirement: "Color changes need approval, period-appropriate schemes, documentary evidence" },
        { region: "Local historic districts", requirement: "Approved color palette (10-50 colors), no modern synthetics on landmarks" },
        { region: "Victorian/Colonial revivals", requirement: "Multi-color schemes required, contrasting trim colors mandatory" },
        { region: "Charleston, Savannah, New Orleans", requirement: "Specific regional colors, traditional finishes (lime wash), strict enforcement" }
      ],
      impact: "Historic paints (lime wash, milk paint) cost 2-3× more and require specialized contractors. Color restrictions limit resale appeal to some buyers."
    },
    {
      title: "HOA Color Restrictions",
      subtitle: "Homeowner Association design guidelines",
      description: "Many HOAs restrict exterior paint colors to maintain neighborhood aesthetics. Approval process required before painting, with specific color palettes that must be followed.",
      examples: [
        { region: "Strict HOAs", requirement: "Pre-approved color palette (5-20 colors), trim must contrast or match exactly, approval before purchase" },
        { region: "Moderate HOAs", requirement: "Neutral colors required, bright colors prohibited, approval within 30 days" },
        { region: "Relaxed HOAs", requirement: "No neon/extreme colors, general harmony with neighborhood" },
        { region: "Luxury communities", requirement: "Architect review required, color boards submitted, professional painters only" }
      ],
      impact: "Painting without HOA approval can result in forced repainting at owner expense ($3,000-8,000). Submit color samples before purchasing paint."
    },
    {
      title: "Coastal and Hurricane Zone Requirements",
      subtitle: "Enhanced durability for salt air and high winds",
      description: "Coastal properties need specialized paints resistant to salt spray, UV exposure, and high winds. More frequent repainting schedules recommended.",
      examples: [
        { region: "Within 1 mile of ocean", requirement: "Corrosion-resistant primers, elastomeric coatings, recoat every 3-5 years" },
        { region: "Hurricane zones (FL, Gulf Coast)", requirement: "High-wind resistant application, secure all loose elements before painting" },
        { region: "Salt spray zones", requirement: "Zinc-rich primers on metal, acrylic over oil-based, triple-coat systems" }
      ],
      impact: "Coastal paint systems cost 40-60% more but prevent substrate damage. Standard paints fail in 1-2 years near ocean."
    },
    {
      title: "Wildfire Zone Restrictions",
      subtitle: "Non-combustible and fire-resistant coatings",
      description: "Wildfire-prone areas may require or incentivize fire-resistant exterior coatings. Some areas mandate non-combustible siding within defensible space.",
      examples: [
        { region: "California WUI (Wildland-Urban Interface)", requirement: "Fire-resistant coatings preferred, non-combustible within 5 ft of structure" },
        { region: "Colorado, Oregon fire zones", requirement: "Class A fire-rated coatings available, insurance discounts for fire-resistant paint" },
        { region: "Extreme fire hazard areas", requirement: "Intumescent coatings (foam when heated) required on some structures" }
      ],
      impact: "Fire-resistant paints cost 20-40% more but may be required for insurance coverage in high-risk wildfire areas."
    },
    {
      title: "Lead Paint Requirements (Pre-1978 Homes)",
      subtitle: "EPA RRP Rule - Federal regulation",
      description: "Properties built before 1978 likely contain lead paint. EPA requires certified contractors, containment procedures, and specific work practices when disturbing lead paint.",
      examples: [
        { region: "All states (federal)", requirement: "EPA RRP certification for contractors, lead-safe work practices, $37,500 fine for violations" },
        { region: "Pre-1978 homes", requirement: "Test or assume lead present, containment required, HEPA cleanup, documented disposal" },
        { region: "Rental properties (some states)", requirement: "Lead disclosure required, periodic inspections, stricter standards for child-occupied facilities" }
      ],
      impact: "RRP compliance adds $500-2,000 to project cost but prevents lead poisoning liability. DIY homeowners exempt but strongly advised to follow practices."
    }
  ]
};