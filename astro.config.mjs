import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

import { resolveSiteConfig } from './site.config.mjs';

const mode = process.env.NODE_ENV === 'development' ? 'development' : 'production';
const env = loadEnv(mode, process.cwd(), '');
const configuredSite = resolveSiteConfig(env);

export default defineConfig({
  site: configuredSite.url,
  output: 'static',
  trailingSlash: 'ignore',

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    format: 'directory',
  },

  compressHTML: true,
});
