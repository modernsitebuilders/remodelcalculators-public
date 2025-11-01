export default function sitemap() {
  const baseUrl = 'https://jobcalculators.com';
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Calculator pages
  const calculatorSlugs = [
    'concrete-calculator',
    'deck-stain-calculator',
    'drywall-calculator',
    'exterior-paint-calculator',
    'fence-calculator',
    'flooring-calculator',
    'interior-paint-calculator',
    'mulch-calculator',
    'roofing-calculator',
    'siding-calculator',
  ];

  const calculatorPages = calculatorSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  return [...staticPages, ...calculatorPages];
}