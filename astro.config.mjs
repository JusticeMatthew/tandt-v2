import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import lenis from "astro-lenis";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), lenis()],
  output: "hybrid",
  adapter: vercel()
});