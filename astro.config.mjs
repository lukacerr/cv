import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://luka.nexata.app',
	trailingSlash: 'always',
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
	},
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
