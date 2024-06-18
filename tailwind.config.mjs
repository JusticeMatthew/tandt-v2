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
      screens: {
        '1440': '2560px',
        'container': '1474px'
      },
      padding: {
        gallery: 'var(--space-gallery)',
        'gallery-large': 'var(--space-gallery-large)'
      },
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
        subtitle: 'var(--step-1)',
        title: 'var(--step-5)',
        headline: 'var(--step-6)',
      },
      colors: {
        light: '#F8FAFC',
        dark: '#131313',
        mid: '#222222',
        glass: '#E3EFFF',
      },
    },
	},
	plugins: [],
}
