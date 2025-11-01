#!/bin/bash

# Array of calculator data: slug|ComponentName
calculators=(
  "concrete-calculator|ConcreteCalculator"
  "deck-stain-calculator|DeckStainCalculator"
  "drywall-calculator|DrywallCalculator"
  "exterior-paint-calculator|ExteriorPaintCalculator"
  "fence-calculator|FenceCalculator"
  "flooring-calculator|FlooringCalculator"
  "interior-paint-calculator|InteriorPaintCalculator"
  "mulch-calculator|MulchCalculator"
  "roofing-calculator|RoofingCalculator"
  "siding-calculator|SidingCalculator"
)

for calc in "${calculators[@]}"; do
  IFS='|' read -r slug component <<< "$calc"
  
  cat > "src/app/$slug/page.js" << EOF
import { getCalculatorData } from '@/data/calculatorData';
import $component from '@/components/calculators/$component';

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

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.h1}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{data.intro}</p>
      </div>

      <$component />

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
  );
}
EOF

  echo "✓ Created src/app/$slug/page.js"
done

echo ""
echo "✅ All calculator pages generated!"