import { generateCalculatorMetadata } from '@/utils/generateCalculatorMetadata';
import { getCalculatorData } from '@/data/calculatorData';
import RoofingCalculator from '@/components/calculators/RoofingCalculator';
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
  roofingMethodology, 
  roofingStandards, 
  roofingRegionalVariations 
} from '@/data/trustBuilding/roofingCalculatorData';

export async function generateMetadata() {
  const data = getCalculatorData('roofing-calculator');
  return generateCalculatorMetadata(data);
}

export default function RoofingCalculatorPage() {
  const data = getCalculatorData('roofing-calculator');
  
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
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{data.intro}</p>
        </div>

        {/* Calculator */}
        <RoofingCalculator />

        {/* Trust-building components */}
<CalculatorMethodology
  calculatorType={roofingMethodology.calculatorType}
  source={roofingMethodology.source}
  formulas={roofingMethodology.formulas}
  constants={roofingMethodology.constants}
/>

<IndustryStandards
  standards={roofingStandards.standards}
  lastVerified={roofingStandards.lastVerified}
/>

<RegionalVariations
  variations={roofingRegionalVariations.variations}
  warningMessage={roofingRegionalVariations.warningMessage}
/>

        {/* Blog Link */}
        <CalculatorBlogLink 
          blogSlug="roofing-square-calculator"
          blogTitle="Roofing Squares"
          description="NRCA guidelines, pitch multipliers, shingle bundle coverage, underlayment specs, and IRC/IBC ventilation requirements."
        />

        {/* How to Use */}
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