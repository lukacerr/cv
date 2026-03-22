import type { ImageMetadata } from 'astro';
import eyLogo from '@/assets/logos/ey.png';
import hyprfollowLogo from '@/assets/logos/hyprfollow.png';
import losa0Logo from '@/assets/logos/losa0.svg';
import nexataLogo from '@/assets/logos/nexata.png';
import unaplausoLogo from '@/assets/logos/unaplauso.svg';
import wirsolutLogo from '@/assets/logos/wirsolut.svg';
import type { Locale } from './ui';

export interface ExperienceEntry {
	company: string;
	url?: string;
	role: string;
	period: string;
	bullets: string[];
	current?: boolean;
	logo?: ImageMetadata;
}

export interface EducationEntry {
	institution: string;
	description: string;
	period: string;
	url?: string;
	icon?: 'university' | 'school';
	logo?: ImageMetadata;
}

export interface LanguageEntry {
	name: string;
	level: string;
	flag: string;
	proficiency: number;
}

export interface SoftSkillEntry {
	label: string;
	description: string;
}

export interface ProjectEntry {
	name: string;
	description: string;
	url: string;
	logo?: ImageMetadata;
}

export interface CvData {
	title: string;
	description: string;
	jobTitle: string;
	sections: {
		about: string;
		contact: string;
		languages: string;
		softSkills: string;
		experience: string;
		education: string;
		knowledge: string;
		projects: string;
	};
	about: string;
	softSkillsSummary: string;
	knowledgeMain: string;
	knowledgeAmong: string;
	darkModeLabel: string;
	pdfLabel: string;
	repoLabel: string;
	meetLabel: string;
	languages: LanguageEntry[];
	softSkills: SoftSkillEntry[];
	experience: ExperienceEntry[];
	education: EducationEntry[];
	projects: ProjectEntry[];
}

export const cvData: Record<Locale, CvData> = {
	en: {
		title: 'Luka Cerrutti - Software Engineer',
		description: 'CV of Luka Cerrutti, Software Engineer.',
		jobTitle: 'Software Engineer',
		sections: {
			about: 'About',
			contact: 'Contact',
			languages: 'Languages',
			softSkills: 'Soft Skills',
			experience: 'Experience',
			education: 'Education',
			knowledge: 'Knowledge',
			projects: 'Projects',
		},
		about:
			'Computer science engineering student with full-stack development experience. Passionate about robust and scalable software, "best-practices" enthusiast. Artix Linux user for daily usage and work.',
		softSkillsSummary:
			'Optimal time management, problem-solving, will to learn, accurate estimator, patience, understanding, adaptability, & open-mindedness.',
		knowledgeMain: 'Main',
		knowledgeAmong: 'Among',
		darkModeLabel: 'Toggle dark mode',
		pdfLabel: 'Download PDF',
		repoLabel: 'Source code',
		meetLabel: 'Schedule a meeting',
		languages: [
			{
				name: 'Spanish',
				level: 'Native',
				flag: '\u{1F1E6}\u{1F1F7}',
				proficiency: 100,
			},
			{
				name: 'English',
				level: 'C1',
				flag: '\u{1F1FA}\u{1F1F8}',
				proficiency: 80,
			},
			{
				name: 'Japanese',
				level: 'N4',
				flag: '\u{1F1EF}\u{1F1F5}',
				proficiency: 40,
			},
			{
				name: 'Portuguese',
				level: 'A1',
				flag: '\u{1F1E7}\u{1F1F7}',
				proficiency: 20,
			},
		],
		softSkills: [
			{ label: 'Thinking', description: 'Critical, solutions' },
			{ label: 'Assistance', description: 'Teaching' },
			{ label: 'Autodidact', description: 'R&D driven' },
			{ label: 'Attention', description: 'Details matter' },
			{ label: 'Ambition', description: 'Persistent' },
			{ label: 'Planning', description: 'The right way' },
		],
		experience: [
			{
				company: 'Ernst & Young (EY)',
				url: 'https://www.ey.com',
				logo: eyLogo,
				role: 'AI Engineer',
				period: 'Jul 2025 \u2013 Present',
				current: true,
				bullets: [
					'Agentic AI in `Python`. Orchestration with `FastAPI` and `Pydantic`. Excel manipulation with `Pandas`, infrastructure on `Azure` and `Blob Storage`.',
				],
			},
			{
				company: 'Un Aplauso',
				logo: unaplausoLogo,
				role: 'Back & Infra Lead',
				period: 'Jul 2024 \u2013 Jul 2025',
				bullets: [
					'Microservices in `Nest.js` monorepo, using `Redis`. `PostgreSQL` database with `DrizzleORM`. `AWS` infrastructure with `AuroraDB` and `EC2` SUSE.',
				],
			},
			{
				company: 'Losa0',
				url: 'https://losa0.com',
				logo: losa0Logo,
				role: 'Full-Stack Developer',
				period: 'Jul 2023 \u2013 Jul 2025',
				bullets: [
					'Development with `Nest.js`, using `TypeORM` and `PostgreSQL`. Upkeeping `EC2` & infrastructure with `Ubuntu` in `AWS`. Front-end web `React`.',
				],
			},
			{
				company: 'Wirsolut S.A.',
				url: 'https://wirsolut.com',
				logo: wirsolutLogo,
				role: 'Full-Stack Developer',
				period: 'Apr 2021 \u2013 Jul 2023',
				bullets: [
					'R&D and migration to microservices with `TypeScript` (`Express`, `Mongo`) and `Rust`. Maintenance of `.NET` & `Angular` systems with `SQL` databases.',
				],
			},
		],
		education: [
			{
				institution: 'UADE',
				description: 'Software Engineering',
				period: 'Mar 2021 \u2013 Present',
				url: 'https://www.uade.edu.ar',
				icon: 'university',
			},
			{
				institution: 'ORT Argentina',
				description: 'HS Diploma, Computer Science',
				period: 'Mar 2015 \u2013 Dec 2020',
				url: 'https://www.ort.edu.ar',
				icon: 'school',
			},
		],
		projects: [
			{
				name: 'Nexata',
				description:
					'AI-powered enterprise knowledge platform. Unifies all your work tools into a single semantic search.',
				url: 'https://nexata.app/home',
				logo: nexataLogo,
			},
			{
				name: 'HyprFollow',
				description:
					'JSON-based event monitors for Hyprland activity. Built with Rust via hyprland-rs IPC bindings.',
				url: 'https://github.com/lukacerr/hyprfollow',
				logo: hyprfollowLogo,
			},
		],
	},
	es: {
		title: 'Luka Cerrutti - Ingeniero de Software',
		description: 'CV de Luka Cerrutti, Ingeniero de Software.',
		jobTitle: 'Ingeniero de Software',
		sections: {
			about: 'Acerca de',
			contact: 'Contacto',
			languages: 'Idiomas',
			softSkills: 'Habilidades Blandas',
			experience: 'Experiencia',
			education: 'Educación',
			knowledge: 'Conocimientos',
			projects: 'Proyectos',
		},
		about:
			'Estudiante de ingeniería en informática con experiencia en desarrollo full-stack. Apasionado por el software robusto y escalable, entusiasta de las "buenas prácticas". Usuario de Artix Linux para uso diario y trabajo.',
		softSkillsSummary:
			'Gestión óptima del tiempo, resolución de problemas, voluntad de aprender, estimador preciso, paciencia, comprensión, adaptabilidad y apertura mental.',
		knowledgeMain: 'Principal',
		knowledgeAmong: 'Entre otros',
		darkModeLabel: 'Alternar modo oscuro',
		pdfLabel: 'Descargar PDF',
		repoLabel: 'Código fuente',
		meetLabel: 'Agendar una reunión',
		languages: [
			{
				name: 'Espa\u00f1ol',
				level: 'Nativo',
				flag: '\u{1F1E6}\u{1F1F7}',
				proficiency: 100,
			},
			{
				name: 'Ingl\u00e9s',
				level: 'C1',
				flag: '\u{1F1FA}\u{1F1F8}',
				proficiency: 80,
			},
			{
				name: 'Japon\u00e9s',
				level: 'N4',
				flag: '\u{1F1EF}\u{1F1F5}',
				proficiency: 40,
			},
			{
				name: 'Portugu\u00e9s',
				level: 'A1',
				flag: '\u{1F1E7}\u{1F1F7}',
				proficiency: 20,
			},
		],
		softSkills: [
			{ label: 'Pensamiento', description: 'Crítico, soluciones' },
			{ label: 'Asistencia', description: 'Enseñanza' },
			{ label: 'Autodidacta', description: 'Orientado a I+D' },
			{ label: 'Atención', description: 'Los detalles importan' },
			{ label: 'Ambición', description: 'Persistente' },
			{ label: 'Planificación', description: 'De la manera correcta' },
		],
		experience: [
			{
				company: 'Ernst & Young (EY)',
				url: 'https://www.ey.com',
				logo: eyLogo,
				role: 'Ingeniero de IA',
				period: 'Jul 2025 \u2013 Actualidad',
				current: true,
				bullets: [
					'IA agéntica en `Python`. Orquestación con `FastAPI` y `Pydantic`. Manipulación de Excel con `Pandas`, infraestructura en `Azure` y `Blob Storage`.',
				],
			},
			{
				company: 'Un Aplauso',
				logo: unaplausoLogo,
				role: 'Líder de Back e Infra',
				period: 'Jul 2024 \u2013 Jul 2025',
				bullets: [
					'Microservicios en monorepo `Nest.js`, usando `Redis`. Base de datos `PostgreSQL` con `DrizzleORM`. Infraestructura `AWS` con `AuroraDB` y `EC2` SUSE.',
				],
			},
			{
				company: 'Losa0',
				url: 'https://losa0.com',
				logo: losa0Logo,
				role: 'Desarrollador Full-Stack',
				period: 'Jul 2023 \u2013 Jul 2025',
				bullets: [
					'Desarrollo con `Nest.js`, usando `TypeORM` y `PostgreSQL`. Mantenimiento de `EC2` e infraestructura con `Ubuntu` en `AWS`. Front-end web `React`.',
				],
			},
			{
				company: 'Wirsolut S.A.',
				url: 'https://wirsolut.com',
				logo: wirsolutLogo,
				role: 'Desarrollador Full-Stack',
				period: 'Abr 2021 \u2013 Jul 2023',
				bullets: [
					'I+D y migración a microservicios con `TypeScript` (`Express`, `Mongo`) y `Rust`. Mantenimiento de sistemas `.NET` y `Angular` con bases de datos `SQL`.',
				],
			},
		],
		education: [
			{
				institution: 'UADE',
				description: 'Ingeniería en Informática',
				period: 'Mar 2021 \u2013 Actualidad',
				url: 'https://www.uade.edu.ar',
				icon: 'university',
			},
			{
				institution: 'ORT Argentina',
				description: 'Bachiller en Inform\u00e1tica',
				period: 'Mar 2015 \u2013 Dic 2020',
				url: 'https://www.ort.edu.ar',
				icon: 'school',
			},
		],
		projects: [
			{
				name: 'Nexata',
				description:
					'Plataforma de conocimiento empresarial con IA. Unifica todas tus herramientas de trabajo en un \u00fanico buscador sem\u00e1ntico.',
				url: 'https://nexata.app/home',
				logo: nexataLogo,
			},
			{
				name: 'HyprFollow',
				description:
					'Monitores de eventos JSON para la actividad de Hyprland. Construido en Rust con bindings IPC de hyprland-rs.',
				url: 'https://github.com/lukacerr/hyprfollow',
				logo: hyprfollowLogo,
			},
		],
	},
};
