import { getCalculatorData } from '@/data/calculatorData';
import SidingCalculator from '@/components/calculators/SidingCalculator';
import CalculatorBlogLink from '@/components/blog/CalculatorBlogLink';
import CalculatorMethodology from '@/components/trust/CalculatorMethodology';
import IndustryStandards from '@/components/trust/IndustryStandards';
import RegionalVariations from '@/components/trust/RegionalVariations';
import { 
  generateCalculatorSchema, 
  generateCalculatorBreadcrumbSchema,
  generateHowToSchema
} from '@/utils/calculator-schema';
import { 
  sidingMethodology, 
  sidingStandards, 
  sidingRegionalVariations 
} from '@/data/trustBuilding/sidingCalculatorData';

export async function generateMetadata() {
  const data = getCalculatorData('siding-calculator');
  
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

export default function SidingCalculatorPage() {
  const data = getCalculatorData('siding-calculator');
  
  // Generate schema
  const calculatorSchema = generateCalculatorSchema(data);
  const breadcrumbSchema = generateCalculatorBreadcrumbSchema(data);
  const howToSchema = generateHowToSchema(data);

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} /> 
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{data.intro}</p>
        </div>

        <SidingCalculator />

<CalculatorMethodology
  calculatorType={sidingMethodology.calculatorType}
  source={sidingMethodology.source}
  formulas={sidingMethodology.formulas}
  constants={sidingMethodology.constants}
/>

<IndustryStandards
  standards={sidingStandards.standards}
  lastVerified={sidingStandards.lastVerified}
/>

<RegionalVariations
  variations={sidingRegionalVariations.variations}
  warningMessage={sidingRegionalVariations.warningMessage}
/>

        <CalculatorBlogLink 
          blogSlug="siding-material-calculator"
          blogTitle="Siding Materials"
          description="Coverage calculations for vinyl, fiber cement, wood, and metal siding with ASTM installation specifications and waste factors."
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
