export const languages = {
	en: 'English',
	es: 'Español',
} as const;

export type Locale = keyof typeof languages;

export const defaultLang: Locale = 'en';

export const locales = Object.keys(languages) as Locale[];
