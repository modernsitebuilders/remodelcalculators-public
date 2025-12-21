export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',           // Block API routes (good)
        '/_next/data/',    // Block Next.js data files (optional)
      ],
      // DO NOT block /_next/static/ - Google needs this
    },
    sitemap: 'https://remodelcalculators.com/sitemap.xml',
  };
}