#!/bin/bash

# Array of calculator data: slug|ComponentName|BlogSlug|BlogTitle|BlogDescription
calculators=(
  "concrete-calculator|ConcreteCalculator|concrete-calculation-guide|Concrete Calculation|ACI 318 standards, bag yields (60lb/80lb), ready-mix specifications, and IRC/IBC code requirements for slabs, footings, and walls."
  "deck-stain-calculator|DeckStainCalculator|deck-stain-coverage-guide|Deck Stain Coverage|Coverage rates for solid, semi-transparent, and clear stains with ASTM standards for wood preparation and application."
  "drywall-calculator|DrywallCalculator|drywall-material-guide|Drywall Materials|Gypsum Association standards, sheet sizes, joint compound coverage, and fastener spacing per IRC and ASTM C840."
  "exterior-paint-calculator|ExteriorPaintCalculator|exterior-paint-coverage-guide|Exterior Paint Coverage|Coverage rates for siding, trim, and doors with PDCA standards and surface preparation requirements."
  "fence-calculator|FenceCalculator|fence-post-spacing-guide|Fence Post Spacing|IRC post spacing standards, concrete depth requirements (1/3 rule), and material calculations by fence type."
  "flooring-calculator|FlooringCalculator|flooring-material-calculator|Flooring Materials|NWFA and NTCA specifications for hardwood, tile, laminate, and vinyl with waste factors by installation pattern."
  "interior-paint-calculator|InteriorPaintCalculator|interior-paint-coverage-guide|Interior Paint Coverage|Paint & Decorating Retailers Association standards, 350-400 sq ft per gallon coverage rates, and primer requirements."
  "mulch-calculator|MulchCalculator|mulch-calculator-guide|Mulch Calculator|Mulch & Soil Council standards with the 324 rule (1 yd³ = 324 sq ft at 1 inch), depth recommendations, and material weights."
  "roofing-calculator|RoofingCalculator|roofing-square-calculator|Roofing Squares|NRCA guidelines, pitch multipliers, shingle bundle coverage, underlayment specs, and IRC/IBC ventilation requirements."
  "siding-calculator|SidingCalculator|siding-material-calculator|Siding Materials|Coverage calculations for vinyl, fiber cement, wood, and metal siding with ASTM installation specifications and waste factors."
)

for calc in "${calculators[@]}"; do
  IFS='|' read -r slug component blog_slug blog_title blog_desc <<< "$calc"
  
  cat > "src/app/$slug/page.js" << EOF
import { getCalculatorData } from '@/data/calculatorData';
import $component from '@/components/calculators/$component';
import CalculatorBlogLink from '@/components/blog/CalculatorBlogLink';
import { generateCalculatorSchema, generateCalculatorBreadcrumbSchema } from '@/utils/calculator-schema';

export async function generateMetadata() {
  const data = getCalculatorData('$slug');
  
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: { canonical: data.canonical },
    openGraph: {
      title: data.openGraph.title,
      description: data.openGraph.description,
      url: data.openGraph.url,
      siteName: 'Job Calculators',
      images: [{ url: data.openGraph.image, width: 1200, height: 630, alt: data.name }],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: data.twitter.card,
      title: data.twitter.title,
      description: data.twitter.description,
      images: [data.twitter.image],
    },
  };
}

export default function ${component}Page() {
  const data = getCalculatorData('$slug');
  
  // Generate schema
  const calculatorSchema = generateCalculatorSchema(data);
  const breadcrumbSchema = generateCalculatorBreadcrumbSchema(data);

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{data.intro}</p>
        </div>

        <$component />

        <CalculatorBlogLink 
          blogSlug="$blog_slug"
          blogTitle="$blog_title"
          description="$blog_desc"
        />

        <div className="mt-12 prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Use This Calculator</h2>
          <ol className="space-y-3 text-gray-700">
            {data.howToUse.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          
          <h3 className="text-xl font-bold mt-8 mb-3 text-gray-900">
            {data.howToUse.additionalInfo.title}
          </h3>
          <p className="text-gray-700">{data.howToUse.additionalInfo.content}</p>
        </div>
      </div>
    </>
  );
}
EOF

  echo "✓ Created src/app/$slug/page.js"
done

echo ""
echo "✅ All calculator pages generated with WebApplication schema!"