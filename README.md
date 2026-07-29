# 新化老街

Astro 靜態網站，透過 Cloudflare Workers Static Assets 部署。

## 本機開發

```sh
pnpm install
pnpm dev
```

## 網站設定

網站預設使用 `https://xinhualaojie.com`。如需更換網域，複製
`.env.example` 為 `.env`，再設定：

```dotenv
PUBLIC_SITE_URL=https://example.com
PUBLIC_SITE_DOMAIN=example.com
```

`PUBLIC_SITE_URL` 用於 canonical URL、Open Graph、JSON-LD、sitemap
和 robots.txt；`PUBLIC_SITE_DOMAIN` 用於頁面上顯示的網域名稱和
Google Maps UTM 來源。

## Cloudflare Worker

本機預覽 Worker 靜態資源：

```sh
pnpm worker:dev
```

部署：

```sh
pnpm deploy
```

首次部署前需先執行 `pnpm wrangler login`。自訂網域請在 Cloudflare
Worker 的 Settings → Domains & Routes 中設定。
