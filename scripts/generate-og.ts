import { resolve } from 'node:path';
import { chromium } from 'playwright';

const templatePath = resolve(import.meta.dirname, '..', 'og-template.html');
const outputPath = resolve(import.meta.dirname, '..', 'public', 'og.png');

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 1200, height: 630 });
await page.goto(`file://${templatePath}`, { waitUntil: 'networkidle' });
await page.screenshot({ path: outputPath });
await browser.close();

console.log('Generated public/og.png (1200x630)');
