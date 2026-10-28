import type { ImageMetadata } from 'astro';
import eyLogo from '@/assets/logos/ey.svg';
import losa0Logo from '@/assets/logos/losa0.svg';
import nexataLogo from '@/assets/logos/nexata.svg';
import tastewiseLogo from '@/assets/logos/tastewise.svg';
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
	/** Consecutive compact entries render side by side in a two-column row. */
	compact?: boolean;
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
	repo?: string;
	logo?: ImageMetadata;
}

export interface KnowledgeBadge {
	label: string;
	variant?: 'primary' | 'outline';
}

export interface KnowledgeGroup {
	title: string;
	summary: string;
	icon: 'ai' | 'automation' | 'fullstack' | 'systems';
	badges: KnowledgeBadge[];
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
	knowledgeGroups: KnowledgeGroup[];
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
		title: 'Luka Cerrutti - Software & AI Engineer',
		description: 'CV of Luka Cerrutti, Software Engineer.',
		jobTitle: 'Software & AI Engineer',
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
			'Computer science engineering student with full-stack development experience. Passionate about robust and scalable software, "best-practices" enthusiast. Artix Linux, Zed, and Opencode user, with contributions to Azure LangChain packages. Open-source software advocate.',
		softSkillsSummary:
			'Optimal time management, problem-solving, will to learn, accurate estimator, patience, understanding, adaptability, & open-mindedness.',
		knowledgeGroups: [
			{
				title: 'AI & Agents',
				summary: 'LLMs & tooling',
				icon: 'ai',
				badges: [
					{ label: 'AI SDK' },
					{ label: 'LangChain' },
					{ label: 'MCP' },
					{ label: 'Claude' },
					{ label: 'PyTorch' },
					{ label: 'Python' },
					{ label: 'Puppeteer' },
					{ label: 'Keras' },
					{ label: 'RAG' },
				],
			},
			{
				title: 'Automation',
				summary: 'Workflows & APIs',
				icon: 'automation',
				badges: [
					{ label: 'n8n' },
					{ label: 'Routines' },
					{ label: 'Salesforce' },
					{ label: 'Gong' },
					{ label: 'Mixpanel' },
					{ label: 'Webhooks' },
					{ label: 'Skills' },
					{ label: 'Scripting' },
					{ label: 'Excel / Pandas' },
				],
			},
			{
				title: 'Full-stack',
				summary: 'Web apps & APIs',
				icon: 'fullstack',
				badges: [
					{ label: 'TypeScript' },
					{ label: 'Bun' },
					{ label: 'Rust' },
					{ label: 'Next.js' },
					{ label: 'Nest' },
					{ label: 'Elysia' },
					{ label: 'FastAPI' },
					{ label: 'React' },
					{ label: 'Astro' },
					{ label: 'Express' },
					{ label: 'Drizzle' },
					{ label: 'Tauri' },
				],
			},
			{
				title: 'Systems & Infra',
				summary: 'Performance & cloud',
				icon: 'systems',
				badges: [
					{ label: 'AWS' },
					{ label: 'Azure' },
					{ label: 'GCP' },
					{ label: 'Terraform' },
					{ label: 'PostgreSQL' },
					{ label: 'Docker' },
					{ label: 'gRPC' },
					{ label: 'Scalr' },
					{ label: 'Redis' },
					{ label: 'Linux' },
					{ label: 'MongoDB' },
				],
			},
		],
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
				company: 'Tastewise',
				url: 'https://tastewise.io',
				logo: tastewiseLogo,
				role: 'AI Engineer',
				period: 'May 2026 \u2013 Dec 2026',
				current: true,
				bullets: [
					'Revenue intelligence, automations with `n8n` and agents with `AI SDK`. Full-stack with `Bun` and `Next.js`, `AWS` with `Terraform` and `Scalr`. Integrations with `Gong`, `Salesforce` and `Mixpanel`. `Claude` routines, skills and custom `MCP` servers.',
				],
			},
			{
				company: 'Ernst & Young (EY)',
				url: 'https://www.ey.com',
				logo: eyLogo,
				role: 'AI Engineer',
				period: 'Jul 2025 \u2013 May 2026',
				bullets: [
					'AI agents in `Python` with `LangChain`. APIs with `FastAPI` and `Pydantic`; Excel with `Pandas` and `Polars`, infrastructure on `Azure`. Unit testing with `pytest`.',
				],
			},
			{
				company: 'Un Aplauso',
				logo: unaplausoLogo,
				role: 'Lead Backend & DevOps Engineer',
				period: 'Jul 2024 \u2013 Jul 2025',
				bullets: [
					'`Nest.js` monorepo with `Redis`, `PostgreSQL` as database, `DrizzleORM`, and `AWS`; built NSFW model inference microservices with `gRPC`, using `Keras` in `Python`.',
				],
			},
			{
				company: 'Losa0',
				url: 'https://losa0.com',
				logo: losa0Logo,
				role: 'Full-Stack Engineer',
				period: 'Jul 2023 \u2013 Jul 2025',
				compact: true,
				bullets: [
					'`Nest.js` app with `TypeORM` and `PostgreSQL` on `AWS`; `React` front-end and `FastAPI` services.',
				],
			},
			{
				company: 'Wirsolut',
				url: 'https://wirsolut.com',
				logo: wirsolutLogo,
				role: 'Full-Stack Engineer',
				period: 'Apr 2021 \u2013 Jul 2023',
				compact: true,
				bullets: [
					'Microservices migration with `TypeScript` and `Rust`; `.NET` and `Angular` maintenance.',
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
					'AI-powered enterprise knowledge platform. Unifies all your work tools into a single semantic search experience.',
				url: 'https://nexata.app/home',
				repo: 'https://github.com/Nexata/main',
				logo: nexataLogo,
			},
		],
	},
	es: {
		title: 'Luka Cerrutti - Ingeniero de Software & IA',
		description: 'CV de Luka Cerrutti, Ingeniero de Software.',
		jobTitle: 'Ingeniero de Software & IA',
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
			'Estudiante de ingeniería en informática con experiencia en desarrollo full-stack. Apasionado por el software robusto y escalable, entusiasta de las "buenas prácticas". Usuario de Artix Linux, Zed y Opencode, con aportes a paquetes Azure de LangChain. Promotor del software OSS.',
		softSkillsSummary:
			'Gestión óptima del tiempo, resolución de problemas, voluntad de aprender, estimador preciso, paciencia, comprensión, adaptabilidad y apertura mental.',
		knowledgeGroups: [
			{
				title: 'IA y agentes',
				summary: 'LLMs y tooling',
				icon: 'ai',
				badges: [
					{ label: 'AI SDK' },
					{ label: 'LangChain' },
					{ label: 'MCP' },
					{ label: 'Claude' },
					{ label: 'PyTorch' },
					{ label: 'Python' },
					{ label: 'Puppeteer' },
					{ label: 'Keras' },
					{ label: 'RAG' },
				],
			},
			{
				title: 'Automatización',
				summary: 'Workflows y APIs',
				icon: 'automation',
				badges: [
					{ label: 'n8n' },
					{ label: 'Routines' },
					{ label: 'Salesforce' },
					{ label: 'Gong' },
					{ label: 'Mixpanel' },
					{ label: 'Webhooks' },
					{ label: 'Skills' },
					{ label: 'Scripting' },
					{ label: 'Excel / Pandas' },
				],
			},
			{
				title: 'Full-stack',
				summary: 'Apps web y APIs',
				icon: 'fullstack',
				badges: [
					{ label: 'TypeScript' },
					{ label: 'Bun' },
					{ label: 'Rust' },
					{ label: 'Next.js' },
					{ label: 'Nest' },
					{ label: 'Elysia' },
					{ label: 'FastAPI' },
					{ label: 'React' },
					{ label: 'Astro' },
					{ label: 'Express' },
					{ label: 'Drizzle' },
					{ label: 'Tauri' },
				],
			},
			{
				title: 'Sistemas e infra',
				summary: 'Performance y cloud',
				icon: 'systems',
				badges: [
					{ label: 'AWS' },
					{ label: 'Azure' },
					{ label: 'GCP' },
					{ label: 'Terraform' },
					{ label: 'PostgreSQL' },
					{ label: 'Docker' },
					{ label: 'gRPC' },
					{ label: 'Scalr' },
					{ label: 'Redis' },
					{ label: 'Linux' },
					{ label: 'MongoDB' },
				],
			},
		],
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
				company: 'Tastewise',
				url: 'https://tastewise.io',
				logo: tastewiseLogo,
				role: 'Ingeniero de IA',
				period: 'May 2026 \u2013 Dic 2026',
				current: true,
				bullets: [
					'Revenue intelligence, automatizaciones con `n8n` y agents con `AI SDK`. Full-stack con `Bun` y `Next.js`, `AWS` con `Terraform` y `Scalr`. Integraciones con `Gong`, `Salesforce` y `Mixpanel`. Routines, skills y servidores `MCP` custom para `Claude`.',
				],
			},
			{
				company: 'Ernst & Young (EY)',
				url: 'https://www.ey.com',
				logo: eyLogo,
				role: 'Ingeniero de IA',
				period: 'Jul 2025 \u2013 May 2026',
				bullets: [
					'Agentes de IA en `Python` con `LangChain`. APIs con `FastAPI` y `Pydantic`; Excel con `Pandas` y `Polars`, infraestructura en `Azure`. Testing unitario con `pytest`.',
				],
			},
			{
				company: 'Un Aplauso',
				logo: unaplausoLogo,
				role: 'Lead Engineer de Backend y DevOps',
				period: 'Jul 2024 \u2013 Jul 2025',
				bullets: [
					'Monorepo `Nest.js` con `Redis`, db `PostgreSQL`, `DrizzleORM` e infraestructura `AWS`; microservicios de inferencia NSFW con `gRPC`, usando `Keras` en `Python`.',
				],
			},
			{
				company: 'Losa0',
				url: 'https://losa0.com',
				logo: losa0Logo,
				role: 'Ingeniero Full-Stack',
				period: 'Jul 2023 \u2013 Jul 2025',
				compact: true,
				bullets: [
					'App `Nest.js` con `TypeORM` y `PostgreSQL` en `AWS`; front-end en `React` y servicios `FastAPI`.',
				],
			},
			{
				company: 'Wirsolut',
				url: 'https://wirsolut.com',
				logo: wirsolutLogo,
				role: 'Ingeniero Full-Stack',
				period: 'Abr 2021 \u2013 Jul 2023',
				compact: true,
				bullets: [
					'Migración a microservicios con `TypeScript` y `Rust`; mantenimiento de `.NET` y `Angular`.',
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
				repo: 'https://github.com/Nexata/main',
				logo: nexataLogo,
			},
		],
	},
};
