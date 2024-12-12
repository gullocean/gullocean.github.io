import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gullocean.github.io',
  base: '/',
  integrations: [tailwind()],
  output: 'static',
  build: {
    assets: 'assets'
  }
});
