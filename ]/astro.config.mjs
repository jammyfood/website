import { defineConfig } from 'astro/config';

// The Pages workflow supplies these automatically for any repository name.
export default defineConfig({
  site: process.env.SITE_URL || 'https://jammyfood.github.io',
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
