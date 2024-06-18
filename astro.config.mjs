import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vtbot from "astro-vtbot";

// https://astro.build/config
export default defineConfig({
  site: 'https://tandt-v2.vercel.app/',
  redirects: {
    '/gallery': '/#gallery',
    '/gallery/000': '/#gallery'
  },
  prefetch: true,
  integrations: [tailwind(), vtbot()]
});