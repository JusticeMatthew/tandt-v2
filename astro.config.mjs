import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tandt-v2.vercel.app/',
  redirects: {
    '/gallery': '/#gallery'
  },
  integrations: [tailwind()],
});