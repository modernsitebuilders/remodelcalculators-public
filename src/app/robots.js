export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'], // Prevent crawling of API routes and Next.js internals
    },
    sitemap: 'https://jobcalculators.com/sitemap.xml',
  };
}