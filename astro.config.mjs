import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
// @ts-check
import { defineConfig } from 'astro/config';
import pdf from 'astro-pdf';
import ogImage from './integrations/og-image';

/**
 * Shared PDF preparation: removes toolbar, ensures animations are visible.
 * @param {import('puppeteer').Page} page
 */
const preparePdfPage = async (page) => {
	await page.evaluate(() => {
		// Remove toolbar elements (print:hidden won't apply in screen media)
		document.querySelectorAll('[class*="print:hidden"]').forEach((el) => {
			el.remove();
		});
		// Remove emoji flags (headless Chromium lacks emoji fonts)
		document.querySelectorAll('.lang-flag').forEach((el) => {
			el.remove();
		});
		// Ensure all animated sections are visible
		document.querySelectorAll('[class*="opacity-0"]').forEach((el) => {
			el.classList.remove(
				...Array.from(el.classList).filter(
					(c) => c.includes('opacity-0') || c.includes('translate-y'),
				),
			);
			el.style.opacity = '1';
			el.style.transform = 'none';
		});
	});
};

/** @type {import('astro-pdf').PageOptions['callback']} */
const lightPdfCallback = async (page) => {
	await page.evaluate(() => {
		document.documentElement.classList.remove('dark');
	});
	await preparePdfPage(page);
};

/** @type {import('astro-pdf').PageOptions['callback']} */
const darkPdfCallback = async (page) => {
	await page.evaluate(() => {
		document.documentElement.classList.add('dark');
		// Increase padding to match light PDF total spacing (CSS padding + Puppeteer margins)
		const wrapper = document.body.firstElementChild;
		if (wrapper instanceof HTMLElement) {
			wrapper.style.padding = 'calc(2.5rem + 4mm) calc(2.5rem + 2mm)';
		}
	});
	await preparePdfPage(page);
};

/** @type {import('astro-pdf').PDFOptions} */
const sharedPdfOptions = {
	format: 'A4',
	printBackground: true,
	scale: 0.8,
	margin: { top: '4mm', bottom: '4mm', left: '2mm', right: '2mm' },
};

/** @type {import('astro-pdf').PDFOptions} Dark variants use zero margins so the dark background extends edge-to-edge. */
const darkPdfOptions = {
	...sharedPdfOptions,
	margin: { top: '0', bottom: '0', left: '0', right: '0' },
};

/** @type {import('astro-pdf').PageOptions} */
const basePdfPageOptions = {
	screen: true,
	waitUntil: 'networkidle0',
	viewport: { width: 1280, height: 900 },
	pdf: sharedPdfOptions,
};

// https://astro.build/config
export default defineConfig({
	site: 'https://luka.nexata.app',
	trailingSlash: 'always',
	i18n: {
		locales: ['en', 'es'],
		defaultLocale: 'en',
	},
	integrations: [
		sitemap(),
		pdf({
			pages: {
				'/': [
					{
						...basePdfPageOptions,
						callback: lightPdfCallback,
						path: '/cv-en.pdf',
					},
					{
						...basePdfPageOptions,
						callback: darkPdfCallback,
						path: '/cv-en-dark.pdf',
						pdf: darkPdfOptions,
					},
				],
				'/es/': [
					{
						...basePdfPageOptions,
						callback: lightPdfCallback,
						path: '/cv-es.pdf',
					},
					{
						...basePdfPageOptions,
						callback: darkPdfCallback,
						path: '/cv-es-dark.pdf',
						pdf: darkPdfOptions,
					},
				],
			},
		}),
		ogImage(),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
