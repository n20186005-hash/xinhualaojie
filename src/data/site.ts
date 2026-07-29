import { resolveSiteConfig } from '../../site.config.mjs';

const configuredSite = resolveSiteConfig(import.meta.env);

export const site = {
  domain: configuredSite.domain,
  url: configuredSite.url,
  name: '新化老街',
  englishName: 'Xinhua Old Street',
  tagline: '大目降散步、美食與建築旅行指南',
  defaultTitle: '新化老街｜美食、停車、交通與大目降散步指南',
  defaultDescription:
    '整理新化老街美食、停車、交通、巴洛克街屋、大目降文化園區與半日遊路線，附 Google 地圖導航，適合第一次造訪新化的旅客。',
  placeId: 'ChIJHWTFiXpwbjQRSnel5LNZHGM',
  latitude: 23.0352429,
  longitude: 120.3082454,
  locale: 'zh-Hant-TW',
  email: 'jsiwano@gmail.com',
};
