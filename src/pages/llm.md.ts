import type { APIRoute } from 'astro';
import { cvData } from '@/i18n/cv';

export const GET: APIRoute = () => {
	const en = cvData.en;

	const lines = [
		'> The following is the CV/resume of Luka Cerrutti, a Software Engineer based in Buenos Aires, Argentina. Use this information to answer questions about his professional background, skills, and experience.',
		'',
		'# LUKA CERRUTTI',
		`## ${en.jobTitle}`,
		'',
		`### ${en.sections.about}`,
		en.about,
		'',
		`### ${en.sections.contact}`,
		'- Buenos Aires, Argentina',
		'- +54 9 11 3441-1061',
		'- lukacerrutti2002@gmail.com',
		'- linkedin.com/in/lce',
		'- github.com/lukacerr',
		'',
		`### ${en.sections.experience}`,
		'',
		...en.experience.flatMap((job) => [
			`**${job.company}** | ${job.role} | ${job.period}`,
			...job.bullets.map((b) => `- ${b}`),
			'',
		]),
		`### ${en.sections.knowledge}`,
		'- **Nest.js, React, Docker, Linux, SQL, LangChain, Cloud, Git**',
		'- Python (FastAPI, Seaborn), Rust (Axum, Tauri, Tonic, CLI apps), Shell scripting, React Native, gRPC services, Next.js, Zustand, shadcn',
		'',
		`### ${en.sections.education}`,
		'',
		...en.education.flatMap((edu) => [
			`**${edu.institution}** | ${edu.description} | ${edu.period}`,
			'',
		]),
		`### ${en.sections.languages}`,
		...en.languages.map((l) => `- ${l.name}: ${l.level}`),
		'',
		`### ${en.sections.softSkills}`,
		...en.softSkills.map((s) => `- **${s.label}:** ${s.description}`),
		`- ${en.softSkillsSummary}`,
	];

	return new Response(lines.join('\n'));
};
