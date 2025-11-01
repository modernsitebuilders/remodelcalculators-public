import { getCalculatorData } from '@/data/calculatorData';
import InteriorPaintCalculator from '@/components/calculators/InteriorPaintCalculator';
import CalculatorBlogLink from '@/components/blog/CalculatorBlogLink';

export async function generateMetadata() {
  const data = getCalculatorData('interior-paint-calculator');
  
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

export default function InteriorPaintCalculatorPage() {
  const data = getCalculatorData('interior-paint-calculator');

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{data.h1}</h1>
        <p className="text-lg text-gray-700 leading-relaxed">{data.intro}</p>
      </div>

      <InteriorPaintCalculator />
      <CalculatorBlogLink 
  blogSlug="interior-paint-coverage-guide"
  blogTitle="Interior Paint Coverage"
  description="PCA and MPI standards with coverage rates of 350-400 sq ft/gal, primer specifications at 200-300 sq ft/gal, and texture adjustments."
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
  );
}
