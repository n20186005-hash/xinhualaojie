import { site } from '../data/site';

const PLACE_ID = 'ChIJHWTFiXpwbjQRSnel5LNZHGM';
const PLACE_NAME = '新化老街';
const COORDINATES = '23.0352429,120.3082454';
const UTM_SOURCE = `utm_source=${encodeURIComponent(site.domain)}`;

export const googleMaps = {
  /** Google Maps 分享短連結（來自地圖「分享」功能）。 */
  share: site.mapsShareUrl,

  /** Google 地圖上的當地評價列表頁。 */
  reviews: 'https://maps.app.goo.gl/URRNpF3wvhTnJs6t5',

  place: [
    'https://www.google.com/maps/search/?api=1',
    `query=${encodeURIComponent(`${PLACE_NAME}, 臺南市新化區`)}`,
    `query_place_id=${PLACE_ID}`,
    UTM_SOURCE,
    'utm_campaign=place_details_search',
  ].join('&'),

  directions: [
    'https://www.google.com/maps/dir/?api=1',
    `destination=${encodeURIComponent(PLACE_NAME)}`,
    `destination_place_id=${PLACE_ID}`,
    'travelmode=driving',
    UTM_SOURCE,
    'utm_campaign=directions_request',
  ].join('&'),

  parking: [
    'https://www.google.com/maps/search/?api=1',
    `query=${encodeURIComponent('新化老街附近停車場')}`,
    `center=${COORDINATES}`,
    UTM_SOURCE,
    'utm_campaign=parking_search',
  ].join('&'),

  embed: `https://maps.google.com/maps?q=${encodeURIComponent(PLACE_NAME)}&ll=${COORDINATES}&z=16&hl=zh-TW&output=embed`,
};

/** 產生任意地點的 Google 地圖搜尋連結（預設加上新化區，避免搜到同名地點）。 */
export function mapsSearch(query: string, withDistrict = true): string {
  const q = withDistrict ? `${query} 臺南市新化區` : query;
  return [
    'https://www.google.com/maps/search/?api=1',
    `query=${encodeURIComponent(q)}`,
    UTM_SOURCE,
    'utm_campaign=poi_search',
  ].join('&');
}
