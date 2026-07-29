import { site } from '../data/site';
import { googleMaps } from './google-maps';

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: site.name,
    alternateName: `${site.englishName} Guide`,
    url: `${site.url}/`,
    inLanguage: site.locale,
    description: site.defaultDescription,
  };
}

export function touristAttractionSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: site.name,
    alternateName: site.englishName,
    description: '新化老街美食、停車、交通、建築與大目降散步路線指南。',
    url: `${site.url}/`,
    hasMap: googleMaps.place,
    isAccessibleForFree: true,
    touristType: ['家庭旅客', '美食旅客', '建築與攝影愛好者', '歷史文化旅客'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.latitude,
      longitude: site.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '中正路',
      addressLocality: '新化區',
      addressRegion: '臺南市',
      addressCountry: 'TW',
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.path, site.url).href,
    })),
  };
}

export function faqSchema(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export function articleSchema(options: {
  title: string;
  description: string;
  path: string;
  imageUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: options.title,
    description: options.description,
    inLanguage: site.locale,
    mainEntityOfPage: new URL(options.path, site.url).href,
    ...(options.imageUrl ? { image: options.imageUrl } : {}),
    author: {
      '@type': 'Organization',
      name: site.name,
      url: `${site.url}/about/`,
    },
    publisher: {
      '@type': 'Organization',
      name: site.name,
      url: `${site.url}/`,
    },
  };
}

export function touristTripSchema(options: {
  title: string;
  description: string;
  path: string;
  stops: { name: string; summary: string }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: options.title,
    description: options.description,
    url: new URL(options.path, site.url).href,
    inLanguage: site.locale,
    itinerary: {
      '@type': 'ItemList',
      numberOfItems: options.stops.length,
      itemListElement: options.stops.map((stop, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: stop.name,
        description: stop.summary,
      })),
    },
  };
}
