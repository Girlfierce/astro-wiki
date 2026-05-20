// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://girlfierce.github.io',
  base: '/astro-wiki',
  integrations: [tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
