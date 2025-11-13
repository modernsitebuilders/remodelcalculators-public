import { METADATA_DEFAULTS } from '@/data/siteConfig';

export function generateCalculatorMetadata(data) {
  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: { canonical: data.canonical },
    openGraph: {
      title: data.openGraph.title,
      description: data.openGraph.description,
      url: data.openGraph.url,
      siteName: METADATA_DEFAULTS.openGraph.siteName,
      images: [{
        url: data.openGraph.image,
        width: METADATA_DEFAULTS.openGraph.imageDimensions.width,
        height: METADATA_DEFAULTS.openGraph.imageDimensions.height,
        alt: data.name
      }],
      locale: METADATA_DEFAULTS.openGraph.locale,
      type: METADATA_DEFAULTS.openGraph.type,
    },
    twitter: {
      card: METADATA_DEFAULTS.twitter.card,
      title: data.twitter.title,
      description: data.twitter.description,
      images: [data.twitter.image],
    },
  };
}