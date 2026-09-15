/**
 * 新化老街 Xinhua Old Street Guide - Cloudflare Worker
 *
 * 职责：
 * 1. /api/weather - 服务端代理气象数据接口并缓存，前端不直接跨域请求；
 * 2. 其余请求全部交给静态资源（dist 产物）。
 */

const LATITUDE = 23.0352429;
const LONGITUDE = 120.3082454;

const WEATHER_API_URL =
  'https://api.open-meteo.com/v1/forecast' +
  `?latitude=${LATITUDE}&longitude=${LONGITUDE}` +
  '&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,wind_speed_10m' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,uv_index_max' +
  '&timezone=Asia%2FTaipei&forecast_days=7';

/** 快取 30 分钟：兼顾时效与上游接口压力。 */
const CACHE_MAX_AGE = 1800;

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    if (url.pathname === '/api/weather' && request.method === 'GET') {
      const cache = caches.default;

      const cached = await cache.match(request);
      if (cached) {
        return cached;
      }

      try {
        const upstream = await fetch(WEATHER_API_URL, {
          headers: { 'User-Agent': 'xinhualaojie-com/1.0 (+https://xinhualaojie.com/)' },
          cf: { cacheTtl: CACHE_MAX_AGE, cacheEverything: true },
        });

        if (!upstream.ok) {
          return new Response(JSON.stringify({ error: 'upstream_error' }), {
            status: 502,
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
          });
        }

        const response = new Response(upstream.body, upstream);
        response.headers.set('Content-Type', 'application/json; charset=utf-8');
        response.headers.set('Cache-Control', `public, max-age=${CACHE_MAX_AGE}, s-maxage=${CACHE_MAX_AGE}`);
        response.headers.set('Access-Control-Allow-Origin', '*');

        ctx.waitUntil(cache.put(request, response.clone()));
        return response;
      } catch {
        return new Response(JSON.stringify({ error: 'fetch_failed' }), {
          status: 502,
          headers: { 'Content-Type': 'application/json; charset=utf-8' },
        });
      }
    }

    return env.ASSETS.fetch(request);
  },
};
