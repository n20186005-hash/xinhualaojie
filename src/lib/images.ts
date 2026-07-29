import type { ImageMetadata } from 'astro';

import heroStreet from '../assets/hero-street.jpg';
import streetShophouses01 from '../assets/street-shophouses-01.jpg';
import streetShophouses06 from '../assets/street-shophouses-06.jpg';
import streetShophouses08 from '../assets/street-shophouses-08.jpg';
import streetShophouses13 from '../assets/street-shophouses-13.jpg';
import streetShophouses14 from '../assets/street-shophouses-14.jpg';
import streetWide17 from '../assets/street-wide-17.jpg';
import facadeDetail02 from '../assets/facade-detail-02.jpg';
import facadeDetail04 from '../assets/facade-detail-04.jpg';
import facadeDetail09 from '../assets/facade-detail-09.jpg';
import facadeDetail16 from '../assets/facade-detail-16.jpg';
import streetPanorama from '../assets/street-panorama.jpg';
import streetCorner from '../assets/street-corner.jpg';
import streetTainan from '../assets/street-tainan.jpg';
import zhongzhengRoad from '../assets/zhongzheng-road.jpg';
import oldStreetCoffee from '../assets/old-street-coffee.jpg';
import streetOffice from '../assets/street-office.jpg';
import streetOffice2 from '../assets/street-office-2.jpg';
import wudeHall from '../assets/wude-hall.jpg';
import wudeHall2 from '../assets/wude-hall-2.jpg';
import wudeAnnex from '../assets/wude-annex.jpg';
import yangKuiMemorial from '../assets/yang-kui-memorial.jpg';
import hutoupiLake from '../assets/hutoupi-lake.jpg';
import hutoupiPavilion from '../assets/hutoupi-pavilion.jpg';
import xinhuaForest from '../assets/xinhua-forest.jpg';

export const imageMap: Record<string, ImageMetadata> = {
  'hero-street': heroStreet,
  'street-shophouses-01': streetShophouses01,
  'street-shophouses-06': streetShophouses06,
  'street-shophouses-08': streetShophouses08,
  'street-shophouses-13': streetShophouses13,
  'street-shophouses-14': streetShophouses14,
  'street-wide-17': streetWide17,
  'facade-detail-02': facadeDetail02,
  'facade-detail-04': facadeDetail04,
  'facade-detail-09': facadeDetail09,
  'facade-detail-16': facadeDetail16,
  'street-panorama': streetPanorama,
  'street-corner': streetCorner,
  'street-tainan': streetTainan,
  'zhongzheng-road': zhongzhengRoad,
  'old-street-coffee': oldStreetCoffee,
  'street-office': streetOffice,
  'street-office-2': streetOffice2,
  'wude-hall': wudeHall,
  'wude-hall-2': wudeHall2,
  'wude-annex': wudeAnnex,
  'yang-kui-memorial': yangKuiMemorial,
  'hutoupi-lake': hutoupiLake,
  'hutoupi-pavilion': hutoupiPavilion,
  'xinhua-forest': xinhuaForest,
};

export function getImageByKey(key: string): ImageMetadata {
  const image = imageMap[key];
  if (!image) {
    throw new Error(`找不到圖片：${key}`);
  }
  return image;
}
