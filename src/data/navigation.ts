export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: '第一次來', href: '/guide/' },
  { label: '實用資訊', href: '/guide/visitor-info/' },
  { label: '美食', href: '/food/' },
  { label: '交通停車', href: '/transport/' },
  { label: '散步路線', href: '/routes/' },
  { label: '歷史建築', href: '/architecture/' },
  { label: '周邊景點', href: '/nearby/' },
];

export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: '規劃行程',
    items: [
      { label: '第一次去新化老街', href: '/guide/first-visit/' },
      { label: '實用資訊與天氣', href: '/guide/visitor-info/' },
      { label: '兩小時散步路線', href: '/routes/two-hours/' },
      { label: '新化半日遊', href: '/routes/half-day/' },
      { label: '新化一日遊', href: '/routes/one-day/' },
      { label: '常見問題', href: '/faq/' },
    ],
  },
  {
    title: '交通與地圖',
    items: [
      { label: '停車指南', href: '/transport/parking/' },
      { label: '從臺南車站出發', href: '/transport/from-tainan-station/' },
      { label: '大眾運輸', href: '/transport/public-transport/' },
      { label: 'Google 地圖與位置', href: '/map/' },
    ],
  },
  {
    title: '深入認識',
    items: [
      { label: '巴洛克街屋', href: '/architecture/baroque-shophouses/' },
      { label: '三角湧的故事', href: '/history/sanjiaoyong/' },
      { label: '大目降的由來', href: '/history/damujiang/' },
      { label: '周邊景點總覽', href: '/nearby/' },
    ],
  },
  {
    title: '關於本站',
    items: [
      { label: '關於本站', href: '/about/' },
      { label: '內容維護政策', href: '/editorial-policy/' },
      { label: '圖片授權', href: '/image-credits/' },
      { label: '隱私權政策', href: '/privacy/' },
      { label: '聯絡我們', href: '/contact/' },
    ],
  },
];

export const sectionMeta: Record<
  string,
  { label: string; title: string; description: string }
> = {
  guide: {
    label: '第一次來',
    title: '新化老街怎麼逛',
    description:
      '第一次造訪新化老街的完整攻略：怎麼開始走、逛多久、雨天與親子安排、拍照重點，一次整理。',
  },
  food: {
    label: '美食',
    title: '新化老街美食總整理',
    description:
      '新化老街早餐、傳統市場小吃、老字號糕餅與在地正餐分類整理，附 Google 地圖連結，方便邊走邊查。',
  },
  transport: {
    label: '交通停車',
    title: '新化老街交通與停車',
    description:
      '自駕停車怎麼選、從臺南車站與高鐵怎麼去、大眾運輸路線整理，讓你順利抵達新化老街。',
  },
  routes: {
    label: '散步路線',
    title: '新化老街散步路線',
    description:
      '兩小時、半日遊到一日遊的新化散步路線，串聯老街、街役場、武德殿與大目降文化園區。',
  },
  architecture: {
    label: '歷史建築',
    title: '新化老街歷史建築',
    description:
      '新化老街巴洛克街屋的山牆、泥塑與立面細節怎麼看，走一趟中正路就能讀懂的建築導覽。',
  },
  history: {
    label: '歷史',
    title: '大目降與新化老街的歷史',
    description:
      '從大目降到新化，從三角湧到中正路街屋，認識新化老街百年來的商業與生活故事。',
  },
  nearby: {
    label: '周邊景點',
    title: '新化老街周邊景點',
    description:
      '新化街役場、楊逵文學紀念館、武德殿、大目降文化園區步行可達；虎頭埤與新化林場適合延伸成一日遊。',
  },
};
