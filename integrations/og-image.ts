import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { AstroIntegration } from 'astro';
import { chromium } from 'playwright';

export default function ogImage(): AstroIntegration {
	return {
		name: 'og-image',
		hooks: {
			'astro:build:done': async ({ dir }) => {
				const templatePath = resolve(
					fileURLToPath(import.meta.url),
					'..',
					'..',
					'og-template.html',
				);
				const outputPath = resolve(fileURLToPath(dir), 'og.png');

				const browser = await chromium.launch();
				const page = await browser.newPage();
				await page.setViewportSize({ width: 1200, height: 630 });
				await page.goto(`file://${templatePath}`, {
					waitUntil: 'networkidle',
				});
				await page.screenshot({ path: outputPath });
				await browser.close();

				console.log(' og-image  Generated og.png (1200x630)');
			},
		},
	};
}
