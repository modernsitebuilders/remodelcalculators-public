import { SITE_CONFIG } from '@/data/siteConfig';

export default function SiteSchema() {
  // Organization Schema - Helps Google understand your brand
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_CONFIG.baseUrl}/logo.png`,
      width: 512,
      height: 512
    },
    description: 'Professional construction material calculators based on industry standards. Free tools for concrete, drywall, roofing, paint, flooring, and more.',
    foundingDate: '2025',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      url: `${SITE_CONFIG.baseUrl}/contact`
    }
  };

  // Website Schema - Enables site search in Google
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.baseUrl,
    description: 'Free construction calculators for accurate material estimation using industry standards.',
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      url: SITE_CONFIG.baseUrl
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}