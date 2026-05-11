import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://dancumang.vn',
  integrations: [mdx(), react()],
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
