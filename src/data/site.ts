import { resolveSiteConfig } from '../../site.config.mjs';

const configuredSite = resolveSiteConfig(import.meta.env);

export const site = {
  domain: configuredSite.domain,
  url: configuredSite.url,
  name: '新化老街',
  englishName: 'Xinhua Old Street',
  tagline: '大目降散步、美食與建築旅行指南',
  defaultTitle: '新化老街攻略2026｜營業時間、停車場、早餐美食、伴手禮與地圖',
  defaultDescription:
    '台南新化老街怎麼逛？整理營業時間、停車場、新化早餐、必買伴手禮與中正路巴洛克街屋；附 Google 地圖、交通方式、兩小時散步及半日遊路線。',
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
    count: 9838,
    syncedAt: '2026 年 11 月',
  },

  /**
   * 老街實際街屋範圍。
   * 注意：streetAddress 是 Google 地圖的景點定位點（中山路 473 號），
   * 不等於整條老街；實際巴洛克街屋主要集中於中正路 336～441 號一帶。
   */
  oldStreetRange: '中正路 336～441 號一帶',
};
