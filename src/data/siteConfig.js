export const SITE_CONFIG = {
  name: 'Job Calculators',
  baseUrl: 'https://jobcalculators.com',
  analytics: {
    measurementId: 'G-KZBWPC3X69'
  },
  legal: {
    privacyPolicyLastUpdated: 'October 31, 2025'
  }
};

export const METADATA_DEFAULTS = {
  openGraph: {
    siteName: 'Job Calculators',
    locale: 'en_US',
    type: 'website',
    imageDimensions: {
      width: 1200,
      height: 630
    }
  },
  twitter: {
    card: 'summary_large_image'
  }
};

export const SCHEMA_DEFAULTS = {
  operatingSystem: 'Any',
  browserRequirements: 'Requires JavaScript',
  freeOffer: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD'
  }
};