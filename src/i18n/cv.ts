import type { Locale } from './ui';

export interface ExperienceEntry {
	company: string;
	role: string;
	period: string;
	bullets: string[];
}

export interface EducationEntry {
	institution: string;
	description: string;
	period: string;
}

export interface LanguageEntry {
	name: string;
	level: string;
	variant: 'primary' | 'outline';
}

export interface SoftSkillEntry {
	label: string;
	description: string;
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
	};
	about: string;
	softSkillsSummary: string;
	knowledgeMain: string;
	knowledgeAmong: string;
	darkModeLabel: string;
	languages: LanguageEntry[];
	softSkills: SoftSkillEntry[];
	experience: ExperienceEntry[];
	education: EducationEntry[];
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
		},
		about:
			'Computer science engineering student with full-stack development experience. Passionate about robust and scalable software, "best-practices" enthusiast. Artix Linux user for daily usage and work.',
		softSkillsSummary:
			'Optimal time management, problem-solving, will to learn, accurate estimator, patience, understanding, adaptability, & open-mindedness.',
		knowledgeMain: 'Main',
		knowledgeAmong: 'Among',
		darkModeLabel: 'Toggle dark mode',
		languages: [
			{ name: 'Spanish', level: 'Native', variant: 'primary' },
			{ name: 'English', level: 'C1', variant: 'outline' },
			{ name: 'Japanese', level: 'N4', variant: 'outline' },
			{ name: 'Portuguese', level: 'A1', variant: 'outline' },
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
				role: 'AI Engineer',
				period: 'July 2025 \u2013 Present',
				bullets: [
					'Agentic AI in Python. Orchestration with FastAPI and Pydantic. Excel manipulation with Pandas, infrastructure on Azure and Blob Storage.',
				],
			},
			{
				company: 'Un Aplauso',
				role: 'CTO, Back & Infra Lead',
				period: 'July 2024 \u2013 July 2025',
				bullets: [
					'Microservices in Nest.js monorepo, using Redis. PostgreSQL database with DrizzleORM. AWS infrastructure with AuroraDB and EC2 SUSE.',
				],
			},
			{
				company: 'Losa0',
				role: 'Full-Stack Developer',
				period: 'July 2023 \u2013 July 2025',
				bullets: [
					'Development with Nest.js, using TypeORM and PostgreSQL. Upkeeping EC2 & infrastructure with Ubuntu in AWS. Front-end web React.',
				],
			},
			{
				company: 'Wirsolut S.A.',
				role: 'Full-Stack Developer',
				period: 'April 2021 \u2013 July 2023',
				bullets: [
					'R&D and migration to microservices with TypeScript (Express, Mongo) and Rust. Maintenance of .NET & Angular systems with SQL databases.',
				],
			},
		],
		education: [
			{
				institution: 'UADE',
				description: 'Software Engineering',
				period: 'March 2021 \u2013 Present',
			},
			{
				institution: 'ORT Argentina',
				description: 'HS Diploma, Computer Science',
				period: 'March 2015 \u2013 December 2020',
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
		},
		about:
			'Estudiante de ingeniería en informática con experiencia en desarrollo full-stack. Apasionado por el software robusto y escalable, entusiasta de las "buenas prácticas". Usuario de Artix Linux para uso diario y trabajo.',
		softSkillsSummary:
			'Gestión óptima del tiempo, resolución de problemas, voluntad de aprender, estimador preciso, paciencia, comprensión, adaptabilidad y apertura mental.',
		knowledgeMain: 'Principal',
		knowledgeAmong: 'Entre otros',
		darkModeLabel: 'Alternar modo oscuro',
		languages: [
			{ name: 'Español', level: 'Nativo', variant: 'primary' },
			{ name: 'Inglés', level: 'C1', variant: 'outline' },
			{ name: 'Japonés', level: 'N4', variant: 'outline' },
			{ name: 'Portugués', level: 'A1', variant: 'outline' },
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
				role: 'Ingeniero de IA',
				period: 'Julio 2025 \u2013 Actualidad',
				bullets: [
					'IA agéntica en Python. Orquestación con FastAPI y Pydantic. Manipulación de Excel con Pandas, infraestructura en Azure y Blob Storage.',
				],
			},
			{
				company: 'Un Aplauso',
				role: 'CTO, Líder de Back e Infra',
				period: 'Julio 2024 \u2013 Julio 2025',
				bullets: [
					'Microservicios en monorepo Nest.js, usando Redis. Base de datos PostgreSQL con DrizzleORM. Infraestructura AWS con AuroraDB y EC2 SUSE.',
				],
			},
			{
				company: 'Losa0',
				role: 'Desarrollador Full-Stack',
				period: 'Julio 2023 \u2013 Julio 2025',
				bullets: [
					'Desarrollo con Nest.js, usando TypeORM y PostgreSQL. Mantenimiento de EC2 e infraestructura con Ubuntu en AWS. Front-end web React.',
				],
			},
			{
				company: 'Wirsolut S.A.',
				role: 'Desarrollador Full-Stack',
				period: 'Abril 2021 \u2013 Julio 2023',
				bullets: [
					'I+D y migración a microservicios con TypeScript (Express, Mongo) y Rust. Mantenimiento de sistemas .NET y Angular con bases de datos SQL.',
				],
			},
		],
		education: [
			{
				institution: 'UADE',
				description: 'Ingeniería en Informática',
				period: 'Marzo 2021 \u2013 Actualidad',
			},
			{
				institution: 'ORT Argentina',
				description: 'Bachiller en Informática',
				period: 'Marzo 2015 \u2013 Diciembre 2020',
			},
		],
	},
};
