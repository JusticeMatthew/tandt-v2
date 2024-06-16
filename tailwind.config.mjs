/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  important: true,
  blocklist: ['container'],
  experimental: {
    optimizeUniversalDefaults: true,
  },
	theme: {
		extend: {
      margin: {
        section: 'var(--space-section)',
      },
      fontFamily: {
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        barlow: ['Barlow', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        min: 'var(--step-00)',
        bread: 'var(--step-0)',
        subtitle: 'var(--step-2)',
        title: 'var(--step-5)',
        headline: 'var(--step-6)',
      },
      colors: {
        light: '#F8FAFC',
        dark: '#0D111C',
        glass: '#E3EFFF',
      },
    },
	},
	plugins: [],
}
