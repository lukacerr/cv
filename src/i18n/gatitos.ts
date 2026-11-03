// Content for the temporary kitten adoption page (/gatitos/).
// Spanish is the default locale (/gatitos/), English lives at /gatitos/english/
// (a bare `en` path segment is 404'd by Astro's i18n routing, since `en` is the CV's unprefixed default locale).

export const gatitosLocales = ['es', 'en'] as const;
export type GatitosLocale = (typeof gatitosLocales)[number];

export const gatitosPaths: Record<GatitosLocale, string> = {
	es: '/gatitos/',
	en: '/gatitos/english/',
};

export const gatitosLanguageLabels: Record<GatitosLocale, string> = {
	es: 'ES',
	en: 'EN',
};

export const contact = {
	whatsapp: '5491134411061',
	instagramUrl: 'https://www.instagram.com/lukacerr/',
	instagramHandle: '@lukacerr',
	email: 'lukacerrutti2002@gmail.com',
	rescueInstagramUrl: 'https://www.instagram.com/gatitosdecaballito.ok/',
	rescueInstagramHandle: '@gatitosdecaballito.ok',
};

export type EyeTone = 'lightBlue' | 'blue';

export interface Kitten {
	/** Display name; lowercased it is also the photo prefix in src/assets/gatitos/ */
	name: string;
	female: boolean;
	/** Eye color swatch shown on the card */
	eye: { hex: string; tone: EyeTone };
	/** Animated clip appended after the photos */
	gif?: { src: string; width: number; height: number };
}

export type LitterId = 'moreno' | 'kairaKaan';

export const litters: { id: LitterId; kittens: Kitten[] }[] = [
	{
		id: 'moreno',
		kittens: [
			{
				name: 'Patrick',
				female: false,
				eye: { hex: '#a9c6e2', tone: 'lightBlue' },
			},
			{
				name: 'Phoenix',
				female: false,
				eye: { hex: '#a3c4cc', tone: 'lightBlue' },
			},
			{
				name: 'Paige',
				female: true,
				eye: { hex: '#b2c8dc', tone: 'lightBlue' },
			},
		],
	},
	{
		id: 'kairaKaan',
		kittens: [
			{
				name: 'Kaira',
				female: true,
				eye: { hex: '#3f86d9', tone: 'blue' },
				gif: { src: '/gatitos/kaira.gif', width: 300, height: 400 },
			},
			{
				name: 'Kaan',
				female: false,
				eye: { hex: '#94bbe8', tone: 'lightBlue' },
			},
		],
	},
];

export interface GatitosData {
	title: string;
	description: string;
	heading: string;
	subtitle: string;
	/** Trusted HTML (static strings only) */
	testedHtml: string;
	litters: Record<LitterId, { title: string; age: string; note: string }>;
	male: string;
	female: string;
	eyes: Record<EyeTone, string>;
	adoptHim: string;
	adoptHer: string;
	askAbout: (name: string) => string;
	waKitten: (name: string) => string;
	waGeneral: string;
	photoAlt: (name: string, i: number) => string;
	gifAlt: (name: string) => string;
	prevPhoto: string;
	nextPhoto: string;
	goToPhoto: (i: number, total: number) => string;
	ctaTitle: string;
	ctaText: string;
	ctaButton: string;
	altContactPrefix: string;
	altContactOr: string;
	emailSubject: string;
	themeLabel: string;
	languageLabel: string;
	rescueLabel: string;
}

export const gatitosData: Record<GatitosLocale, GatitosData> = {
	es: {
		title: 'Gatitos en adopción 🐾',
		description:
			'Patrick, Phoenix, Paige, Kaira y Kaan buscan hogar. Todos testeados: VIF y ViLeF negativos.',
		heading: 'Gatitos en adopción',
		subtitle: '5 bebés buscan un hogar con mucho amor.',
		testedHtml:
			'Todos testeados: <strong>VIF y ViLeF negativos</strong> por IC · <strong>ViLeF negativo</strong> por PCR',
		litters: {
			moreno: {
				title: 'Camada de Moreno',
				age: '~2 meses',
				note: 'Se prioriza a quienes quieran adoptar dos juntos (o los tres), o a quienes quieran uno y ya tengan en casa un gato de hasta 5 años.',
			},
			kairaKaan: {
				title: 'Kaira y Kaan',
				age: '~4 meses',
				note: 'Se prioriza que se adopten juntos.',
			},
		},
		male: 'Macho',
		female: 'Hembra',
		eyes: { lightBlue: 'Ojos celestes', blue: 'Ojos azules' },
		adoptHim: 'Lo quiero',
		adoptHer: 'La quiero',
		askAbout: (name) => `Consultar por ${name} por WhatsApp`,
		waKitten: (name) =>
			`Hola Luka, vi a los gatitos y me interesa adoptar a ${name} 🐾`,
		waGeneral:
			'Hola Luka, vi a los gatitos y me gustaría saber más sobre la adopción 🐾',
		photoAlt: (name, i) => `${name}, foto ${i}`,
		gifAlt: (name) => `${name} (animado)`,
		prevPhoto: 'Foto anterior',
		nextPhoto: 'Foto siguiente',
		goToPhoto: (i, total) => `Ver foto ${i} de ${total}`,
		ctaTitle: '¿Te enamoraste de alguno? 💜',
		ctaText: 'Escribime por WhatsApp y te cuento todo sobre la adopción.',
		ctaButton: 'Escribime por WhatsApp',
		altContactPrefix: 'También podés escribirme por Instagram',
		altContactOr: 'o por mail',
		emailSubject: 'Gatitos en adopción',
		themeLabel: 'Cambiar tema',
		languageLabel: 'Idioma',
		rescueLabel: 'Instagram de Gatitos de Caballito',
	},
	en: {
		title: 'Kittens for adoption 🐾',
		description:
			'Patrick, Phoenix, Paige, Kaira and Kaan are looking for a home. All tested: FIV and FeLV negative.',
		heading: 'Kittens for adoption',
		subtitle: '5 babies looking for a loving home.',
		testedHtml:
			'All tested: <strong>FIV &amp; FeLV negative</strong> by rapid test · <strong>FeLV negative</strong> by PCR',
		litters: {
			moreno: {
				title: 'Moreno litter',
				age: '~2 months',
				note: 'Priority goes to people adopting two together (or all three), or adopting one if they already have a cat up to 5 years old at home.',
			},
			kairaKaan: {
				title: 'Kaira & Kaan',
				age: '~4 months',
				note: 'Priority goes to adopting them together.',
			},
		},
		male: 'Male',
		female: 'Female',
		eyes: { lightBlue: 'Light blue eyes', blue: 'Blue eyes' },
		adoptHim: 'Adopt him',
		adoptHer: 'Adopt her',
		askAbout: (name) => `Ask about ${name} on WhatsApp`,
		waKitten: (name) =>
			`Hi Luka, I saw the kittens and I'm interested in adopting ${name} 🐾`,
		waGeneral:
			"Hi Luka, I saw the kittens and I'd like to know more about adopting 🐾",
		photoAlt: (name, i) => `${name}, photo ${i}`,
		gifAlt: (name) => `${name} (animated)`,
		prevPhoto: 'Previous photo',
		nextPhoto: 'Next photo',
		goToPhoto: (i, total) => `Show photo ${i} of ${total}`,
		ctaTitle: 'Fell in love with one? 💜',
		ctaText: "Message me on WhatsApp and I'll tell you all about the adoption.",
		ctaButton: 'Message me on WhatsApp',
		altContactPrefix: 'You can also reach me on Instagram',
		altContactOr: 'or by email',
		emailSubject: 'Kittens for adoption',
		themeLabel: 'Toggle theme',
		languageLabel: 'Language',
		rescueLabel: 'Gatitos de Caballito on Instagram',
	},
};
