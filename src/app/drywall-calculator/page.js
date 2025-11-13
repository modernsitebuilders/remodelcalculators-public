import { generateCalculatorMetadata } from '@/utils/generateCalculatorMetadata';
import { getCalculatorData } from '@/data/calculatorData';
import DrywallCalculator from '@/components/calculators/DrywallCalculator';
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
  drywallMethodology, 
  drywallStandards, 
  drywallRegionalVariations 
} from '@/data/trustBuilding/drywallCalculatorData';

export async function generateMetadata() {
  const data = getCalculatorData('drywall-calculator');
  return generateCalculatorMetadata(data);
}

export default function DrywallCalculatorPage() {
  const data = getCalculatorData('drywall-calculator');
  
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
        <DrywallCalculator />

<CalculatorMethodology
  calculatorType={drywallMethodology.calculatorType}
  source={drywallMethodology.source}
  formulas={drywallMethodology.formulas}
  constants={drywallMethodology.constants}
/>

<IndustryStandards
  standards={drywallStandards.standards}
  lastVerified={drywallStandards.lastVerified}
/>

<RegionalVariations
  variations={drywallRegionalVariations.variations}
  warningMessage={drywallRegionalVariations.warningMessage}
/>

        {/* Blog Link */}
        <CalculatorBlogLink 
          blogSlug="drywall-material-guide"
          blogTitle="Drywall Materials"
          description="Gypsum Association standards, sheet sizes, joint compound coverage, and fastener spacing per IRC and ASTM C840."
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