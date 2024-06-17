import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  site: 'https://tandt-v2.vercel.app/',
  integrations: [tailwind(), lenis()],
});