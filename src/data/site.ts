import { resolveSiteConfig } from '../../site.config.mjs';

const configuredSite = resolveSiteConfig(import.meta.env);

export const site = {
  domain: configuredSite.domain,
  url: configuredSite.url,
  name: '新化老街',
  englishName: 'Xinhua Old Street',
  tagline: '大目降散步、美食與建築旅行指南',
  defaultTitle: '新化老街 Xinhua Old Street｜臺南新化美食、停車、交通與散步指南',
  defaultDescription:
    '新化老街（Xinhua Old Street）位於臺南市新化區，整理老街美食、停車、交通、巴洛克街屋、大目降文化園區與半日遊路線，附 Google 地圖導航，適合第一次造訪新化的旅客。',
  placeId: 'ChIJHWTFiXpwbjQRSnel5LNZHGM',
  latitude: 23.0352429,
  longitude: 120.3082454,
  postalCode: '712',
  streetAddress: '協興里中山路473號',
  addressLocality: '新化區',
  addressRegion: '臺南市',
  addressCountry: 'TW',
  locale: 'zh-Hant-TW',
  email: 'jsiwano@gmail.com',
  /** Google Maps 分享短連結（MAPS_SHARE_URL）。 */
  mapsShareUrl: 'https://maps.app.goo.gl/8JbxfbHqoR48HQnK7',
  /** 官方旅遊資訊入口（臺南市政府觀光旅遊局）。 */
  govtTourismUrl: 'https://www.twtainan.net/',
  /**
   * Google 地圖評價同步資訊。
   * 注意：僅供頁面展示使用，不寫入 JSON-LD 結構化資料，
   * 以符合 Google 對第三方評價引用的規範。
   */
  googleRating: {
    value: 4.1,
    count: 9760,
    syncedAt: '2026 年 9 月',
  },
};
