import { getCalculatorData } from '@/data/calculatorData';
import RoofingCalculator from '@/components/calculators/RoofingCalculator';
import CalculatorBlogLink from '@/components/blog/CalculatorBlogLink';
import { generateCalculatorSchema, generateCalculatorBreadcrumbSchema } from '@/utils/calculator-schema';
import Sidebar from '@/components/layout/Sidebar';
import DumpsterSidebar from '@/components/sidebar/DumpsterSidebar';

export async function generateMetadata() {
  const data = getCalculatorData('roofing-calculator');
  
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

export default function RoofingCalculatorPage() {
  const data = getCalculatorData('roofing-calculator');
  
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

      <div className="container mx-auto px-4 py-8">
        {/* Header - Centered */}
        <div className="mb-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.h1}</h1>
          <p className="text-lg text-gray-700 leading-relaxed">{data.intro}</p>
        </div>

         {/* Flex Layout: Calculator centered + Sidebar in remaining space */}
        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          
          {/* Calculator - Centered, takes remaining space but max-w-4xl */}
          <div className="flex-1 max-w-4xl lg:mx-auto">
            <RoofingCalculator />

            <CalculatorBlogLink 
              blogSlug="roofing-square-calculator"
              blogTitle="Roofing Squares"
              description="NRCA guidelines, pitch multipliers, shingle bundle coverage, underlayment specs, and IRC/IBC ventilation requirements."
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

          {/* Sidebar - Fixed narrow width, vertical rectangle */}
          <div className="w-full lg:w-80 flex-shrink-0">
            <div className="lg:sticky lg:top-8">
              <DumpsterSidebar calculatorType="roofing" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}