[![來趟巴洛克風老街散策！台南新化經典景點全攻略 | 旅遊 | Newtalk新聞](https://tse2.mm.bing.net/th/id/OIP.JMkYvceIyGBbbbG9U_rpeQHaFj?r=0\&pid=Api)](https://newtalk.tw/news/view/2020-09-11/461645?utm_source=chatgpt.com)

# XinhuaLaojie.com 完整建站方案

## 一、最終定位

### 網域

`XinhuaLaojie.com`

### 網站名稱

**新化老街**

### 英文輔助名稱

**Xinhua Old Street Guide**

英文名稱只用於頁尾、結構化資料與社群分享，不需要在中文首頁搶占視覺主體。

### 品牌副標題

> **大目降散步、美食與建築旅行指南**

### 核心定位

不要把網站做成只有地址、歷史介紹和幾張照片的景點百科，而應定位為：

> **提供新化老街散步路線、美食分類、停車交通、建築看點與周邊景點的在地實用指南。**

新化老街本身與街役場、楊逵文學紀念館、武德殿、大目降文化園區具有緊密的步行關係，官方推薦遊程也將這些地點串聯在一起，因此網站內容應涵蓋「新化歷史街區」，而不是只描述中正路上一小段街屋。([Tainan Travel][1])

---

# 二、`XinhuaLaojie.com` 的品牌價值

這個網域適合以繁體中文旅客為主要受眾。

## 優勢

* `Xinhua` 對應新化的通用英文拼寫。
* `Laojie` 對華語旅客有明確的「老街」辨識度。
* 比 `XinhuaOldStreet.com` 更有台灣旅遊網站的品牌感。
* 可同時承接「新化老街」與「Xinhua Old Street」搜尋需求。
* 未來可以擴展新化美食、周邊景點與一日遊內容。
* 與 `Cijinlaojie.com` 這類老街站命名方式一致，適合形成系列網站。

## 品牌呈現方式

頁首 Logo：

```text
新化老街
XinhuaLaojie.com
```

首頁不要直接把網域當 H1。正確方式是：

```text
網站品牌：新化老街
網域識別：XinhuaLaojie.com
首頁 H1：新化老街：美食、停車與大目降散步指南
```

## 品牌語氣

使用台灣繁體中文與當地旅遊用語：

* 停車，不寫停車位查詢系統
* 大眾運輸，不寫公共交通
* 半日遊、一日遊
* 怎麼去
* 必吃與推薦
* 導航
* 景點
* 臺南市、新化區
* Google 地圖

HTML 語言設定：

```html
<html lang="zh-Hant-TW">
```

---

# 三、目標旅客

網站首期應服務五類使用者。

| 使用者      | 最需要的內容          |
| -------- | --------------- |
| 第一次到訪旅客  | 值不值得去、怎麼走、逛多久   |
| 自駕旅客     | 停哪裡、從哪一側開始走     |
| 美食旅客     | 早餐、市場小吃、伴手禮     |
| 建築與攝影愛好者 | 巴洛克街屋、拍攝位置、建築細節 |
| 親子與長輩同行  | 路線長度、休息點、雨天安排   |

首頁必須優先回答這些問題，而不是先放大段歷史。

---

# 四、網站的核心轉化路徑

網站不需要會員、資料庫或預訂系統，主要轉化應是：

```text
Google 搜尋／Google 地圖
        ↓
進入 XinhuaLaojie.com
        ↓
快速判斷是否適合前往
        ↓
查看停車、美食或散步路線
        ↓
開啟 Google 地圖導航
        ↓
到訪時使用網站查看下一站
```

因此全站最重要的 CTA 不是「立即預訂」，而是：

* **開啟 Google 地圖**
* **導航到新化老街**
* **查看兩小時散步路線**
* **附近停車怎麼選**
* **早上來吃什麼**

---

# 五、網站資訊架構

## 主選單

```text
首頁
第一次來
美食
交通停車
散步路線
歷史建築
周邊景點
```

手機版主選單可縮減為：

```text
怎麼逛｜美食｜停車｜地圖
```

## 完整 URL 架構

```text
/
├── /guide/
│   ├── first-visit/
│   ├── best-time-to-visit/
│   ├── rainy-day/
│   ├── family-guide/
│   └── photo-guide/
│
├── /food/
│   ├── breakfast/
│   ├── market-food/
│   ├── traditional-snacks/
│   ├── restaurants/
│   └── souvenirs/
│
├── /transport/
│   ├── parking/
│   ├── public-transport/
│   ├── from-tainan-station/
│   └── from-hsr-tainan/
│
├── /routes/
│   ├── two-hours/
│   ├── half-day/
│   ├── one-day/
│   ├── architecture-walk/
│   └── food-walk/
│
├── /architecture/
│   ├── baroque-shophouses/
│   ├── facade-details/
│   ├── east-west-side/
│   └── street-preservation/
│
├── /history/
│   ├── damujiang/
│   ├── xinhua-old-street-history/
│   └── sanjiaoyong/
│
├── /nearby/
│   ├── damujiang-cultural-park/
│   ├── wude-hall/
│   ├── yang-kui-memorial/
│   ├── xinhua-street-office/
│   ├── hutoupi/
│   └── xinhua-forest/
│
├── /map/
├── /faq/
├── /about/
├── /editorial-policy/
├── /image-credits/
├── /privacy/
└── /contact/
```

---

# 六、首期應完成的頁面

不建議一開始生成五十篇薄內容。首批做 **15～18 個完整頁面**即可。

| 優先級 | 頁面           | 搜尋意圖     |
| --- | ------------ | -------- |
| P0  | 首頁           | 新化老街     |
| P0  | 第一次去新化老街     | 新化老街怎麼逛  |
| P0  | 新化老街停車指南     | 新化老街停車   |
| P0  | 新化老街美食總整理    | 新化老街美食   |
| P0  | 兩小時散步路線      | 新化老街路線   |
| P0  | Google 地圖與位置 | 新化老街地圖   |
| P1  | 新化老街早餐       | 新化老街早餐   |
| P1  | 傳統市場小吃       | 新化市場美食   |
| P1  | 半日遊行程        | 新化老街半日遊  |
| P1  | 巴洛克街屋介紹      | 新化老街建築   |
| P1  | 大目降文化園區      | 新化老街附近景點 |
| P1  | 新化武德殿        | 新化武德殿    |
| P1  | 楊逵文學紀念館      | 楊逵文學紀念館  |
| P2  | 雨天怎麼逛        | 新化老街下雨   |
| P2  | 親子散步指南       | 新化老街親子   |
| P2  | 新化一日遊        | 新化一日遊    |
| P2  | 虎頭埤組合路線      | 新化老街虎頭埤  |
| P2  | 攝影與街屋細節      | 新化老街拍照   |

新化老街與中山路交會處形成的「三角湧」，過去是農產與商業交易聚點，也適合獨立做成一篇歷史內容，增加網站的在地深度。([Tainan Travel][2])

---

# 七、首頁完整結構

## 1. 頁首導航

桌面版：

```text
新化老街

第一次來｜美食｜交通停車｜散步路線｜歷史建築｜周邊景點

[開啟 Google 地圖]
```

右側 CTA 使用老磚紅底色，保持全站一致。

手機版底部固定操作列：

```text
地圖導航｜散步路線｜停車
```

不要放「登入」「註冊」「購票」或「預訂」。

---

## 2. Hero 首屏

### H1

> 新化老街：美食、停車與大目降散步指南

### 副文案

> 從傳統市場、巴洛克街屋到大目降文化園區，整理第一次造訪新化老街最需要的散步路線、交通與美食資訊。

### CTA

```text
[在 Google 地圖開啟]
[查看兩小時散步路線]
```

### Hero 圖片

建議採用：

* 中正路連續街屋的斜角構圖；
* 能看見山牆、騎樓、店家與街道生活；
* 不要只拍單一店家；
* 不要用過度空曠、像歐洲古城的 AI 圖；
* 不要把車輛和招牌全部修掉，新化老街的價值正是「仍在生活中的歷史街區」。

---

## 3. 快速到訪資訊

用四張卡片，不直接寫容易變動的具體營業資料。

```text
建議停留
約 1～3 小時

主要看點
老街、早市、街屋、文化園區

適合安排
早餐、半日遊、歷史散步

最新店家資訊
請查看 Google 地圖
```

避免顯示：

* 即時 Google 評分；
* 即時評論數；
* 所有商店統一營業時間；
* 未經確認的停車剩餘數量；
* 寫死的公車班次。

---

## 4. 「第一次來怎麼走」

首頁應直接展示一條入門路線：

```text
停車／下車
    ↓
新化傳統市場
    ↓
三角湧
    ↓
中正路巴洛克街屋
    ↓
老街小吃與伴手禮
    ↓
新化街役場
    ↓
楊逵文學紀念館
    ↓
大目降文化園區與武德殿
```

官方推薦的新化遊程也把老街、街役場、楊逵文學紀念館、武德殿與木造宿舍群放在同一條文化路線中。([Tainan Travel][1])

每一站提供：

* 一句看點；
* 建議停留長度；
* 下一站步行方向；
* Google 地圖按鈕；
* 詳細頁連結。

---

## 5. 「抬頭看建築」

這是網站與一般美食部落格拉開差距的核心內容。

首頁設計四張建築細節卡：

1. 山牆輪廓；
2. 花草與幾何泥塑；
3. 店號、姓氏與立面文字；
4. 騎樓柱、窗框與陽台。

標題：

> **來新化老街，不要只看店面，也要記得抬頭。**

說明：

> 街屋二樓以上保留了最有辨識度的裝飾。沿著中正路慢慢走，可以比較不同年代、不同商號留下的立面語言。

---

## 6. 美食入口

首頁不要直接堆放大量店家，而是先按旅客需求分類：

```text
早上來吃什麼
傳統市場小吃
老字號糕餅
在地正餐
伴手禮
```

每張美食卡顯示：

* 名稱；
* 一句特色；
* 適合情境；
* 所在區域；
* Google 地圖；
* 詳細介紹。

不顯示：

* 自動抓取的 Google 評論；
* 未授權的 Google 使用者照片；
* 寫死的價格；
* 無法長期維護的完整菜單。

---

## 7. 停車與交通

首頁提供三個快速入口：

```text
自駕停車怎麼選
從臺南市區怎麼去
搭大眾運輸前往
```

交通頁的價值不在列出所有班次，而是解釋：

* 哪一側進入比較順；
* 車停外圍後如何開始散步；
* 哪些路段不適合邊開車邊找車位；
* 下車後步行到老街的方向；
* 使用 Google 地圖查看當下路線。

---

## 8. Google 地圖

地圖區塊放在首頁中後段，首屏只放導航按鈕。

建議呈現：

```text
新化老街在哪裡？

臺南市新化區中正路一帶
[開啟景點頁面]
[從目前位置導航]
[搜尋附近停車場]
```

Google Maps URLs 可以跨桌面與手機開啟搜尋、地圖及路線功能，而且不需要 API Key；URL 必須使用 `api=1` 參數。([Google for Developers][3])

---

## 9. 周邊景點

分成兩組。

### 步行文化圈

* 三角湧；
* 新化街役場；
* 楊逵文學紀念館；
* 大目降文化園區；
* 新化武德殿；
* 日式宿舍群。

### 適合延伸成一日遊

* 虎頭埤；
* 新化林場；
* 大坑休閒區；
* 左鎮與二寮方向。

---

## 10. FAQ

首頁至少回答：

* 新化老街值得去嗎？
* 新化老街大約逛多久？
* 上午和下午哪個比較適合？
* 老街需要門票嗎？
* 附近哪裡可以停車？
* 從臺南車站怎麼前往？
* 新化老街和大目降文化園區是同一個地方嗎？
* 下雨天適合去嗎？
* 適合帶長輩或小孩嗎？
* 店家營業資訊去哪裡看？

---

# 八、Google 地圖實作

## 固定景點資料

根據使用者提供的 Google Maps 景點頁：

```ts
// src/data/site.ts

export const site = {
  domain: 'XinhuaLaojie.com',
  name: '新化老街',
  englishName: 'Xinhua Old Street',
  placeId: 'ChIJHWTFiXpwbjQRSnel5LNZHGM',
  latitude: 23.0352429,
  longitude: 120.3082454,
  locale: 'zh-Hant-TW',
};
```

## 建立 Google Maps URL

```ts
// src/lib/google-maps.ts

const PLACE_ID = 'ChIJHWTFiXpwbjQRSnel5LNZHGM';
const PLACE_NAME = '新化老街';
const COORDINATES = '23.0352429,120.3082454';

export const googleMaps = {
  place: [
    'https://www.google.com/maps/search/?api=1',
    `query=${encodeURIComponent(`${PLACE_NAME}, 臺南市新化區`)}`,
    `query_place_id=${PLACE_ID}`,
    'utm_source=XinhuaLaojie.com',
    'utm_campaign=place_details_search',
  ].join('&'),

  directions: [
    'https://www.google.com/maps/dir/?api=1',
    `destination=${encodeURIComponent(PLACE_NAME)}`,
    `destination_place_id=${PLACE_ID}`,
    'travelmode=driving',
    'utm_source=XinhuaLaojie.com',
    'utm_campaign=directions_request',
  ].join('&'),

  parking: [
    'https://www.google.com/maps/search/?api=1',
    `query=${encodeURIComponent('新化老街附近停車場')}`,
    `center=${COORDINATES}`,
    'utm_source=XinhuaLaojie.com',
    'utm_campaign=parking_search',
  ].join('&'),
};
```

## 按鈕元件

```astro
---
// src/components/GoogleMapsButton.astro

interface Props {
  href: string;
  label?: string;
  variant?: 'primary' | 'secondary';
}

const {
  href,
  label = '在 Google 地圖開啟',
  variant = 'primary',
} = Astro.props;
---

<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  class:list={[
    'inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3',
    'font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2',
    variant === 'primary'
      ? 'bg-brick text-white hover:bg-brick-dark'
      : 'border border-brick text-brick hover:bg-brick/5',
  ]}
>
  {label}
</a>
```

## 地圖 iframe

建議從 Google 地圖景點頁使用：

```text
分享 → 嵌入地圖 → 複製 HTML
```

不要自行拼接不穩定的 iframe URL。

```astro
---
// src/components/GoogleMap.astro

interface Props {
  embedUrl: string;
}

const { embedUrl } = Astro.props;
---

<section aria-labelledby="google-map-title">
  <div class="mb-4 flex items-end justify-between gap-4">
    <div>
      <p class="text-sm font-semibold text-brick">位置</p>
      <h2 id="google-map-title" class="text-2xl font-bold text-ink">
        新化老街 Google 地圖
      </h2>
    </div>
  </div>

  <div class="overflow-hidden rounded-3xl border border-stone-200 bg-stone-100">
    <iframe
      src={embedUrl}
      title="新化老街 Google 地圖"
      class="h-[420px] w-full"
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      allowfullscreen
    ></iframe>
  </div>
</section>
```

更好的效能方式是「點擊後載入」：

1. 初始顯示本地靜態照片和「載入 Google 地圖」按鈕；
2. 使用者點擊後再插入 iframe；
3. 即使不載入 iframe，也保留外部導航按鈕；
4. 不要求瀏覽器定位權限。

---

# 九、視覺設計

## 整體方向

> **巴洛克街屋檔案感 × 傳統市場生活感 × 現代手機旅遊導覽**

不要做成：

* 紅燈籠、仿古木紋、毛筆字模板站；
* 過度華麗的歐洲宮廷風；
* 滿版褐色復古濾鏡；
* 只有精緻建築、沒有市場與居民生活的假老街；
* 大量輪播圖和滾動動畫。

## 色彩系統

```css
@theme {
  --color-paper: #f4efe5;
  --color-paper-deep: #e8dfd0;
  --color-ink: #282522;
  --color-ink-soft: #625b53;

  --color-brick: #8a4137;
  --color-brick-dark: #693129;

  --color-patina: #386d68;
  --color-patina-light: #dbe8e5;

  --color-brass: #b38950;
  --color-line: #d8cec0;
}
```

### 使用原則

* 米白：網站背景；
* 深墨色：正文；
* 老磚紅：主要 CTA；
* 銅綠：地圖、路線、文化內容；
* 舊金色：編號與裝飾；
* 避免純黑與高飽和紅。

---

# 十、系統字體

不載入 Google Fonts，不放任何外部字型請求。

```css
:root {
  --font-sans:
    ui-sans-serif,
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    "PingFang TC",
    "Noto Sans TC",
    "Microsoft JhengHei",
    Arial,
    sans-serif;

  --font-serif:
    ui-serif,
    "Songti TC",
    "PMingLiU",
    "Times New Roman",
    serif;
}

html {
  font-family: var(--font-sans);
  color: var(--color-ink);
  background: var(--color-paper);
}

h1,
h2,
.display-title {
  font-family: var(--font-serif);
  letter-spacing: 0.02em;
}
```

`Noto Sans TC` 只作為使用者裝置可能已有的 fallback，不透過網路下載。

---

# 十一、Logo 與識別

## Logo 方向

以「新化」兩字為主，不要把完整網域塞進圖形標誌。

### 組合方式

```text
┌───────────┐
│ 街屋山牆線稿 │
│   新 化    │
│  老街指南   │
└───────────┘
```

### 圖形元素

* 對稱山牆；
* 拱窗；
* 騎樓柱；
* 簡化花草泥塑；
* 三角湧交會意象。

### Favicon

使用單一山牆輪廓，或老磚紅底加白色「新」字。

不要使用：

* Google Maps 圖釘商標；
* 臺南市政府 Logo；
* 假官方徽章；
* 無授權的歷史商號標誌。

---

# 十二、圖片策略

## 首選來源

1. 自行拍攝；
2. 與在地攝影師取得書面授權；
3. 店家主動提供並允許網站使用；
4. 官方開放或申請授權的旅遊圖片；
5. 自製路線圖、街屋線稿與資訊圖。

臺南旅遊網設有新化老街圖片資料，但圖庫明確標示未經授權不得使用，並提供圖片授權申請入口，因此不能因為是政府網站就直接下載重發。([台南旅遊網圖庫管理系統][4])

## 禁止方式

* 下載 Google Maps 使用者照片；
* 熱鏈部落格圖片；
* 裁掉浮水印；
* 以 AI 圖冒充現場實景；
* 使用與新化老街不符的歐式古城圖片；
* 將店家照片當成網站自有素材。

## 圖片尺寸

| 用途      |        建議尺寸 |
| ------- | ----------: |
| 首頁 Hero |  1600 × 900 |
| OG 圖    |  1200 × 630 |
| 內容橫圖    |  1200 × 800 |
| 店家卡片    |   800 × 600 |
| 建築細節    |  900 × 1200 |
| 路線示意圖   | 1200 × 1600 |

使用 Astro 本地圖片處理，輸出 AVIF 與 WebP，並保留 JPEG fallback。

---

# 十三、Astro 技術方案

## 技術棧

```text
套件管理：pnpm
框架：Astro
CSS：Tailwind CSS 4
內容：Markdown + MDX
內容管理：Astro Content Collections
部署：Cloudflare Pages
輸出：純靜態
資料庫：無
會員系統：無
預訂系統：無
外部字型：無
前端框架：不需要 React / Vue
```

Astro 適合內容型網站，Cloudflare 的 Astro Pages 指南也將其定位為內容導向框架；本案選擇純靜態輸出，不使用需要伺服器執行的功能。([Cloudflare Docs][5])

## 初始化

```bash
pnpm create astro@latest xinhua-laojie
cd xinhua-laojie

pnpm astro add tailwind
pnpm astro add mdx
pnpm astro add sitemap

pnpm add -D @tailwindcss/typography
```

目前 Astro 使用 Tailwind CSS 4 的推薦方式是 Vite 插件；舊的 `@astrojs/tailwind` 整合已被標示為棄用。([Astro 文档][6])

MDX 可透過官方 `astro add mdx` 指令安裝。([Astro 文档][7])

---

# 十四、Astro 設定

```js
// astro.config.mjs

import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://xinhualaojie.com',
  output: 'static',

  integrations: [
    mdx(),
    sitemap(),
  ],

  build: {
    format: 'directory',
  },

  compressHTML: true,
});
```

Tailwind 4 由 `pnpm astro add tailwind` 自動加入 Vite 設定，不要再同時安裝舊版 `@astrojs/tailwind`。

## 全域 CSS

```css
/* src/styles/global.css */

@import "tailwindcss";
@plugin "@tailwindcss/typography";

@theme {
  --color-paper: #f4efe5;
  --color-paper-deep: #e8dfd0;
  --color-ink: #282522;
  --color-ink-soft: #625b53;
  --color-brick: #8a4137;
  --color-brick-dark: #693129;
  --color-patina: #386d68;
  --color-brass: #b38950;
  --color-line: #d8cec0;
}
```

Astro 官方提供以 Tailwind Typography 包裝 Content Collections Markdown 內容的實作方式。([Astro 文档][8])

---

# 十五、專案目錄

```text
xinhua-laojie/
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   ├── _headers
│   ├── _redirects
│   └── images/
│
├── src/
│   ├── assets/
│   │   ├── hero/
│   │   ├── architecture/
│   │   ├── food/
│   │   ├── routes/
│   │   └── nearby/
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── QuickFacts.astro
│   │   ├── GoogleMap.astro
│   │   ├── GoogleMapsButton.astro
│   │   ├── RouteTimeline.astro
│   │   ├── PlaceCard.astro
│   │   ├── FoodCard.astro
│   │   ├── ArchitectureCard.astro
│   │   ├── FAQList.astro
│   │   ├── Breadcrumbs.astro
│   │   ├── Prose.astro
│   │   └── MobileActionBar.astro
│   │
│   ├── content/
│   │   ├── guides/
│   │   ├── food/
│   │   ├── places/
│   │   └── routes/
│   │
│   ├── data/
│   │   ├── site.ts
│   │   ├── navigation.ts
│   │   └── maps.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── ArticleLayout.astro
│   │   ├── PlaceLayout.astro
│   │   └── RouteLayout.astro
│   │
│   ├── lib/
│   │   ├── google-maps.ts
│   │   ├── seo.ts
│   │   └── schema.ts
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── map.astro
│   │   ├── faq.astro
│   │   ├── about.astro
│   │   ├── editorial-policy.astro
│   │   ├── image-credits.astro
│   │   ├── privacy.astro
│   │   └── [...slug].astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   └── content.config.ts
│
├── astro.config.mjs
├── package.json
├── pnpm-lock.yaml
└── tsconfig.json
```

---

# 十六、Content Collections 設計

Astro Content Collections 可在建置時讀取本地 Markdown、MDX，並透過 schema 產生 TypeScript 型別與欄位檢查，適合本案無資料庫的內容管理方式。([Astro 文档][9])

```ts
// src/content.config.ts

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const guides = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/guides',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum([
      'first-visit',
      'transport',
      'history',
      'architecture',
      'practical',
    ]),
    heroImage: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(100),
    related: z.array(z.string()).default([]),
    showMapActions: z.boolean().default(true),
  }),
});

const food = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/food',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    foodType: z.enum([
      'breakfast',
      'market',
      'snack',
      'restaurant',
      'souvenir',
    ]),
    areaLabel: z.string(),
    googleMapsUrl: z.string().url(),
    suitableFor: z.array(z.string()).default([]),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    volatileInfoNotice: z
      .string()
      .default('營業資訊與店家狀態請以 Google 地圖為準。'),
  }),
});

const places = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/places',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    placeType: z.enum([
      'culture',
      'architecture',
      'market',
      'parking',
      'nearby',
    ]),
    googleMapsUrl: z.string().url(),
    walkingMinutes: z.number().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const routes = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/routes',
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    durationLabel: z.string(),
    difficulty: z.enum(['easy', 'moderate']),
    audience: z.array(z.string()),
    heroImage: z.string().optional(),

    stops: z.array(
      z.object({
        name: z.string(),
        summary: z.string(),
        stayLabel: z.string().optional(),
        googleMapsUrl: z.string().url().optional(),
      }),
    ),
  }),
});

export const collections = {
  guides,
  food,
  places,
  routes,
};
```

---

# 十七、Markdown 與 MDX 分工

## 使用 Markdown

適合：

* 歷史文章；
* 交通說明；
* 建築介紹；
* 美食分類文章；
* FAQ 解答。

## 使用 MDX

只在需要插入特殊元件時使用：

* Google 地圖；
* 散步時間軸；
* 比較卡；
* 建築細節圖；
* 路線節點；
* 交通提示框。

不要把所有文章都做成 MDX，否則內容編輯會變得複雜。

## Markdown 範例

```md
---
title: "第一次去新化老街怎麼逛"
description: "從傳統市場、巴洛克街屋到大目降文化園區，整理第一次造訪新化老街最實用的散步方法。"
category: "first-visit"
heroImage: "/images/hero/first-visit.webp"
featured: true
order: 1
related:
  - "parking"
  - "two-hours"
  - "breakfast"
showMapActions: true
---

新化老街不是完全封閉的觀光步行街，而是仍有市場、
商店、住家與車輛活動的生活街區。

第一次到訪，建議先從傳統市場附近開始，再沿中正路觀察街屋，
最後步行前往大目降文化園區。
```

---

# 十八、SEO 設定

## 首頁 Title

```text
新化老街｜美食、停車、交通與大目降散步指南
```

## 首頁 Description

```text
整理新化老街美食、停車、交通、巴洛克街屋、大目降文化園區與半日遊路線，附 Google 地圖導航，適合第一次造訪新化的旅客。
```

## H1

```text
新化老街：美食、停車與大目降散步指南
```

## Title 模板

```ts
export function createTitle(pageTitle?: string) {
  if (!pageTitle) {
    return '新化老街｜美食、停車、交通與大目降散步指南';
  }

  return `${pageTitle}｜新化老街`;
}
```

## 重要關鍵字集群

### 核心

* 新化老街
* 新化老街美食
* 新化老街停車
* 新化老街怎麼去
* 新化老街地圖
* 新化老街半日遊

### 文化建築

* 新化老街巴洛克建築
* 新化老街歷史
* 大目降文化園區
* 新化武德殿
* 新化街役場
* 三角湧
* 楊逵文學紀念館

### 長尾需求

* 新化老街可以逛多久
* 新化老街適合幾點去
* 新化老街附近停車場
* 臺南火車站到新化老街
* 新化老街下雨天
* 新化老街帶小孩
* 新化老街附近景點
* 新化老街早餐
* 新化一日遊路線

---

# 十九、結構化資料

首頁使用：

* `WebSite`
* `TouristAttraction`
* `BreadcrumbList`
* `FAQPage`

路線頁使用：

* `ItemList`
* `TouristTrip`

文章頁使用：

* `Article`
* `BreadcrumbList`

不要使用：

* `LocalBusiness`
* 自行填入 Google 星級；
* 自行填入評論數；
* 假裝擁有景點；
* 假設所有店家共用同一營業時間。

## TouristAttraction 範例

```astro
---
import { site } from '../data/site';
import { googleMaps } from '../lib/google-maps';

const schema = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: '新化老街',
  alternateName: 'Xinhua Old Street',
  description:
    '新化老街美食、停車、交通、建築與大目降散步路線指南。',
  url: 'https://xinhualaojie.com/',
  hasMap: googleMaps.place,

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
---

<script
  type="application/ld+json"
  set:html={JSON.stringify(schema)}
></script>
```

---

# 二十、信任與 Google 地圖提交

若後續要將 `XinhuaLaojie.com` 建議為 Google Maps 景點網站，網站需要呈現一致且可信的內容。

## 首頁應具備

* 明確顯示「新化老街」；
* 顯示臺南市新化區；
* 使用正確 Google Maps Place ID；
* 提供景點與導航按鈕；
* 有原創現場照片；
* 有完整散步路線；
* 有交通、停車與附近景點；
* 有關於本站；
* 有資料維護政策；
* 有圖片授權說明；
* 有聯絡方式；
* 有隱私權頁面。

## 不要做

* 自稱「新化老街官方網站」；
* 使用政府機關視覺識別；
* 冒用景點電話作為網站客服；
* 複製其他旅遊網站全文；
* 生成大量只有幾百字的附近景點頁；
* 偽造遊客評價；
* 自動抓取 Google Maps 評分；
* 在首頁放置不相關的訂房或購票按鈕。

「關於本站」可以寫：

> XinhuaLaojie.com 是以旅客需求為出發點的新化老街獨立旅行指南，整理散步路線、美食、交通與歷史建築資訊。本站不代表景點管理單位；店家營業狀態與導航資訊請以 Google 地圖及各單位公告為準。

---

# 二十一、Cloudflare Pages 部署

## 建置設定

```text
Framework preset: Astro
Build command: pnpm build
Build output directory: dist
Production branch: main
Root directory: /
```

Cloudflare Pages 的 Astro 預設建置目錄為 `dist`；使用 pnpm 時，將框架預設的 `npm run build` 換成 `pnpm build` 即可。([Cloudflare Docs][10])

Cloudflare Pages 支援連接 Git 儲存庫或直接上傳預先建置的靜態資產。([Cloudflare Docs][11])

## `package.json`

```json
{
  "name": "xinhua-laojie",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "astro dev",
    "check": "astro check",
    "build": "astro check && astro build",
    "preview": "astro preview"
  }
}
```

提交：

```text
package.json
pnpm-lock.yaml
astro.config.mjs
src/
public/
```

## 正式域名

建議統一使用：

```text
https://xinhualaojie.com
```

`www` 永久轉址至無 `www` 版本。

`public/_redirects`：

```text
https://www.xinhualaojie.com/* https://xinhualaojie.com/:splat 301
```

## 安全標頭

`public/_headers`：

```text
/*
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  X-Frame-Options: SAMEORIGIN

/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/images/*
  Cache-Control: public, max-age=2592000
```

本案不需要：

* Cloudflare D1；
* Cloudflare KV；
* Pages Functions；
* R2 圖片儲存；
* API Route；
* SSR；
* 登入驗證；
* 表單資料庫。

聯絡頁可只顯示公開 Email，或使用不需自建後端的簡單郵件連結。

---

# 二十二、效能原則

## 首頁

* Hero 圖優先載入；
* 其他圖片懶載入；
* 地圖點擊後載入；
* 不使用首頁輪播；
* 不載入外部字型；
* 不載入 React；
* 不加入大型圖示套件；
* SVG 圖示直接內嵌；
* 每頁只保留必要 JavaScript。

## 圖片

* Hero 依螢幕尺寸輸出多組寬度；
* 列表縮圖不使用原尺寸大圖；
* 照片設定寬高，避免版面跳動；
* OG 圖單獨輸出，不與 Hero 共用超大檔案。

## 第三方腳本

首發版本只建議保留：

* Google Maps 點擊後 iframe；
* 必要的流量統計。

不要同時安裝數個統計、熱圖、聊天和廣告腳本。

---

# 二十三、內容維護策略

使用者要求不標示具體核對時間，因此內容不需要顯示：

```text
最後核對：某年某月某日
```

改用穩定的資料政策：

> 街區位置、歷史背景與散步路線由本站整理。店家營業狀態、公車班次、道路管制與停車狀況可能調整，請前往 Google 地圖或相關單位頁面查看。

## 穩定資料放正文

* 歷史；
* 建築特色；
* 景點關係；
* 散步順序；
* 適合客群；
* 區域介紹。

## 易變資料連到 Google 地圖

* 店家是否營業；
* 評分；
* 評論數；
* 店家電話；
* 菜單；
* 即時路線；
* 車程；
* 臨時休息；
* 停車場狀態。

---

# 二十四、上線順序

## 第一階段：網站骨架

* Astro 專案；
* Tailwind 視覺系統；
* Header、Footer；
* SEO Layout；
* Google Maps URL；
* Content Collections；
* 首頁；
* 404；
* 隱私權與關於本站。

## 第二階段：核心實用頁

* 第一次來；
* 停車；
* 交通；
* 美食；
* 兩小時路線；
* 半日遊；
* Google 地圖頁；
* FAQ。

## 第三階段：建立內容深度

* 巴洛克街屋；
* 三角湧；
* 大目降歷史；
* 武德殿；
* 楊逵文學紀念館；
* 街役場；
* 傳統市場；
* 攝影指南。

## 第四階段：擴展區域流量

* 新化一日遊；
* 虎頭埤組合；
* 新化林場組合；
* 親子路線；
* 雨天路線；
* 從臺南不同區域出發的交通頁。

---

# 二十五、最終執行規格

```text
網域：XinhuaLaojie.com
品牌：新化老街
副標題：大目降散步、美食與建築旅行指南
語言：繁體中文
HTML Locale：zh-Hant-TW

框架：Astro
套件管理：pnpm
CSS：Tailwind CSS 4
內容：Markdown + 少量 MDX
內容管理：Content Collections
部署：Cloudflare Pages
輸出：純靜態 HTML

地圖：Google Maps URLs + 延遲載入 iframe
資料庫：無
使用者登入：無
線上預訂：無
外部字型：無
SSR：無
Pages Functions：無
```

## 最適合的首頁主標題

> **新化老街：美食、停車與大目降散步指南**

## 最適合的首頁品牌文案

> **走進百年街屋，也走進新化仍在延續的日常。**

## 最重要的網站特色

> **不是只告訴旅客新化老街在哪裡，而是直接告訴他從哪裡開始走、沿途看什麼、吃什麼，以及下一站去哪裡。**

[1]: https://www.twtainan.net/zh-tw/tours/columns/detail/4004/ "主題旅遊-臺南經典小鎮-新化區－台南旅遊網"
[2]: https://www.twtainan.net/zh-tw/attractions/detail/5602/ "三角湧－台南旅遊網"
[3]: https://developers.google.com/maps/documentation/urls/get-started "Get Started  |  Maps URLs  |  Google for Developers"
[4]: https://gallery.twtainan.net/zh-tw/tag?name=%E6%96%B0%E5%8C%96%E8%80%81%E8%A1%97 "gallery.twtainan.net"
[5]: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/ "Astro · Cloudflare Pages docs"
[6]: https://docs.astro.build/en/guides/integrations-guide/tailwind/ "@astrojs/tailwind | Docs"
[7]: https://docs.astro.build/en/guides/integrations-guide/mdx/ "@astrojs/mdx | Docs"
[8]: https://docs.astro.build/en/recipes/tailwind-rendered-markdown/ "Style rendered Markdown with Tailwind Typography | Docs"
[9]: https://docs.astro.build/en/guides/content-collections/ "Content collections | Docs"
[10]: https://developers.cloudflare.com/pages/configuration/build-configuration/ "Build configuration · Cloudflare Pages docs"
[11]: https://developers.cloudflare.com/pages/ "Overview · Cloudflare Pages docs"

