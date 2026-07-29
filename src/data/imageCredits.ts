// 圖片授權資料：全部來自 Wikimedia Commons，依各檔案標示之創用 CC 授權使用。
export interface ImageCredit {
  file: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
}

export const imageCredits: ImageCredit[] = [
  { file: 'hero-street.jpg', title: '2025年新化老街街屋景觀 15.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_15.jpg' },
  { file: 'street-shophouses-01.jpg', title: '2025年新化老街街屋景觀 01.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_01.jpg' },
  { file: 'street-shophouses-06.jpg', title: '2025年新化老街街屋景觀 06.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_06.jpg' },
  { file: 'street-shophouses-08.jpg', title: '2025年新化老街街屋景觀 08.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_08.jpg' },
  { file: 'street-shophouses-13.jpg', title: '2025年新化老街街屋景觀 13.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_13.jpg' },
  { file: 'street-shophouses-14.jpg', title: '2025年新化老街街屋景觀 14.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_14.jpg' },
  { file: 'street-wide-17.jpg', title: '2025年新化老街街屋景觀 17.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_17.jpg' },
  { file: 'facade-detail-02.jpg', title: '2025年新化老街街屋景觀 02.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_02.jpg' },
  { file: 'facade-detail-04.jpg', title: '2025年新化老街街屋景觀 04.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_04.jpg' },
  { file: 'facade-detail-09.jpg', title: '2025年新化老街街屋景觀 09.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_09.jpg' },
  { file: 'facade-detail-16.jpg', title: '2025年新化老街街屋景觀 16.jpg', author: 'Mrmarkertw', license: 'CC BY 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:2025%E5%B9%B4%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97%E8%A1%97%E5%B1%8B%E6%99%AF%E8%A7%80_16.jpg' },
  { file: 'street-panorama.jpg', title: '新化老街 Xinhua Old Street - panoramio.jpg', author: 'lienyuan lee', license: 'CC BY 3.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97_Xinhua_Old_Street_-_panoramio.jpg' },
  { file: 'street-corner.jpg', title: 'Xinhua Old Street 新化老街 - panoramio.jpg', author: 'lienyuan lee', license: 'CC BY 3.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:Xinhua_Old_Street_%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97_-_panoramio.jpg' },
  { file: 'street-tainan.jpg', title: '台南新化老街.jpg', author: 'Dosibot', license: 'CC BY-SA 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E5%8F%B0%E5%8D%97%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97.jpg' },
  { file: 'zhongzheng-road.jpg', title: '新化老街(中正路).jpg', author: '雅婕', license: 'CC BY-SA 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97(%E4%B8%AD%E6%AD%A3%E8%B7%AF).jpg' },
  { file: 'old-street-coffee.jpg', title: '老街咖啡 Old Street Coffee House - panoramio.jpg', author: 'lienyuan lee', license: 'CC BY 3.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E8%80%81%E8%A1%97%E5%92%96%E5%95%A1_Old_Street_Coffee_House_-_panoramio.jpg' },
  { file: 'street-office.jpg', title: '新化街役場之美.jpg', author: '王崎', license: 'CC BY-SA 3.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%8C%96%E8%A1%97%E5%BD%B9%E5%A0%B4%E4%B9%8B%E7%BE%8E.jpg' },
  { file: 'street-office-2.jpg', title: '原新化街役場1.jpg', author: 'Rasputinemark', license: 'CC BY-SA 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E5%8E%9F%E6%96%B0%E5%8C%96%E8%A1%97%E5%BD%B9%E5%A0%B41.jpg' },
  { file: 'wude-hall.jpg', title: '新化武德殿 Xinhua Wude Hall - panoramio.jpg', author: 'lienyuan lee', license: 'CC BY 3.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%8C%96%E6%AD%A6%E5%BE%B7%E6%AE%BF_Xinhua_Wude_Hall_-_panoramio.jpg' },
  { file: 'wude-hall-2.jpg', title: '新化武德殿1.jpg', author: 'Rasputinemark', license: 'CC BY-SA 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E6%96%B0%E5%8C%96%E6%AD%A6%E5%BE%B7%E6%AE%BF1.jpg' },
  { file: 'wude-annex.jpg', title: 'Affiliated buildings of Xinhua Wude Hall 新化武德殿附屬建築 - panoramio.jpg', author: 'lienyuan lee', license: 'CC BY 3.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:Affiliated_buildings_of_Xinhua_Wude_Hall_%E6%96%B0%E5%8C%96%E6%AD%A6%E5%BE%B7%E6%AE%BF%E9%99%84%E5%B1%AC%E5%BB%BA%E7%AF%89_-_panoramio.jpg' },
  { file: 'yang-kui-memorial.jpg', title: '楊逵文學紀念館.jpg', author: 'Pbdragonwang', license: 'CC BY-SA 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E6%A5%8A%E9%80%B5%E6%96%87%E5%AD%B8%E7%B4%80%E5%BF%B5%E9%A4%A8.jpg' },
  { file: 'hutoupi-lake.jpg', title: '虎頭埤 Hutoupi Lake - panoramio.jpg', author: 'lienyuan lee', license: 'CC BY 3.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E8%99%8E%E9%A0%AD%E5%9F%A4_Hutoupi_Lake_-_panoramio.jpg' },
  { file: 'hutoupi-pavilion.jpg', title: '八角亭 Octagonal Pavilion - panoramio (1).jpg', author: 'lienyuan lee', license: 'CC BY 3.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E5%85%AB%E8%A7%92%E4%BA%AD_Octagonal_Pavilion_-_panoramio_(1).jpg' },
  { file: 'xinhua-forest.jpg', title: '中興大學新化林場學生實習館.jpg', author: '許可雋', license: 'CC BY-SA 4.0', licenseUrl: '', source: 'https://commons.wikimedia.org/wiki/File:%E4%B8%AD%E8%88%88%E5%A4%A7%E5%AD%B8%E6%96%B0%E5%8C%96%E6%9E%97%E5%A0%B4%E5%AD%B8%E7%94%9F%E5%AF%A6%E7%BF%92%E9%A4%A8.jpg' },
];
