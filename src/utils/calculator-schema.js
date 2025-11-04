// Utility function to generate WebApplication schema for calculators
export function generateCalculatorSchema(calculatorData) {
  const baseUrl = 'https://jobcalculators.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: calculatorData.name,
    description: calculatorData.description,
    url: calculatorData.canonical,
    applicationCategory: 'CalculatorApplication',
    operatingSystem: 'Any',
    browserRequirements: 'Requires JavaScript',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
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
        item: baseUrl,
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