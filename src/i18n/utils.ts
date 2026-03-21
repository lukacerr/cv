import { defaultLang, type Locale, locales } from './ui';

export function getLangFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split('/');
	if (locales.includes(lang as Locale)) {
		return lang as Locale;
	}
	return defaultLang;
}

export function useTranslatedPath(lang: Locale) {
	return function translatePath(path: string): string {
		if (lang === defaultLang) {
			return path;
		}
		return `/${lang}${path}`;
	};
}
