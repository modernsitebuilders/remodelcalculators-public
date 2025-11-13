// Utility function to generate WebApplication schema for calculators
import { SITE_CONFIG, SCHEMA_DEFAULTS } from '@/data/siteConfig';

export function generateCalculatorSchema(calculatorData) {
  
  return {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: calculatorData.name,
  description: calculatorData.description,
  url: calculatorData.canonical,
  applicationCategory: 'CalculatorApplication',
  operatingSystem: SCHEMA_DEFAULTS.operatingSystem,
  browserRequirements: SCHEMA_DEFAULTS.browserRequirements,
  offers: SCHEMA_DEFAULTS.freeOffer,
};
}

// Generate BreadcrumbList schema for calculator pages
export function generateCalculatorBreadcrumbSchema(calculatorData) {
  const baseUrl = 'https://jobcalculators.com';
  
  return {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: SITE_CONFIG.baseUrl,
    },
      {
        '@type': 'ListItem',
        position: 2,
        name: calculatorData.name,
        item: calculatorData.canonical,
      },
    ],
  };
}

// Add this to the end of your file:

// Generate HowTo schema for calculator instructions
export function generateHowToSchema(calculatorData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: `How to Use the ${calculatorData.name}`,
    description: calculatorData.description,
    step: calculatorData.howToUse.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
    tool: {
      '@type': 'HowToTool',
      name: calculatorData.name,
    },
    totalTime: 'PT5M',
  };
}