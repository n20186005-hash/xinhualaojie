import { site } from '../data/site';
import { googleMaps } from './google-maps';
import heroStreet from '../assets/hero-street.jpg';

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
  const heroImageUrl = new URL(heroStreet.src, site.url).href;
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${site.url}/#attraction`,
    name: site.name,
    alternateName: [
      site.englishName,
      `${site.englishName} (${site.addressLocality})`,
      `臺南市${site.addressLocality}${site.name}`,
      '新化中正路老街',
    ],
    description:
      '新化老街（Xinhua Old Street）位於臺南市新化區，是保留整排巴洛克街屋的百年歷史街區。本站整理美食、停車、交通與大目降散步路線的完整造訪指南。',
    url: `${site.url}/`,
    image: [heroImageUrl],
    hasMap: googleMaps.share,
    isAccessibleForFree: true,
    sameAs: [googleMaps.share, site.govtTourismUrl],
    touristType: ['家庭旅客', '美食旅客', '建築與攝影愛好者', '歷史文化旅客'],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.latitude,
      longitude: site.longitude,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.streetAddress,
      addressLocality: site.addressLocality,
      addressRegion: site.addressRegion,
      postalCode: site.postalCode,
      addressCountry: site.addressCountry,
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
