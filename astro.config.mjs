import { defineConfig } from 'astro/config';

// Custom-domain GitHub Pages site; every page is served from the root of jamilylee.com.
export default defineConfig({
  site: 'https://jamilylee.com',
  base: '/',
  output: 'static',
  trailingSlash: 'always',
});
