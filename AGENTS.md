# AGENTS.md

## Project Overview

**luka-cv** — A personal CV/resume site for Luka Cerrutti built with Astro 6, Tailwind CSS v4, and Starwind UI components. Static site (no SSR) with SPA-style view transitions via Astro's `ClientRouter`. Supports English (default) and Spanish via Astro's built-in i18n routing.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Astro | ^6.0.8 | Static site framework |
| @astrojs/sitemap | ^3.7.1 | Auto-generated sitemap |
| Tailwind CSS | ^4.2.2 | Utility-first CSS (v4, via `@tailwindcss/vite`) |
| Starwind UI | latest | Astro-native component library (Card, Badge, Separator, ThemeToggle, Toggle installed) |
| tailwind-merge | ^3.5.0 | Utility class merging (used by Starwind) |
| tailwind-variants | ^3.2.2 | Component variants (used by Starwind) |
| tw-animate-css | ^1.4.0 | Tailwind animation utilities |
| tailwindcss-intersect | ^2.2.0 | Intersection Observer via `intersect:` Tailwind variant |
| Inter | variable | Primary font (`@fontsource-variable/inter`) |
| Tabler Icons | ^3.40.0 | SVG icon set (outline style, inlined manually) |
| Biome | 2.4.8 | Linter and formatter |
| Playwright | ^1.58.2 | OG image generation (dev dependency) |
| Bun | >=1.x | Package manager and runtime |
| Node | >=22.12.0 | Minimum runtime version |

## Project Structure

```
src/
├── components/
│   ├── CvPage.astro           # Shared CV template component (data-driven, accepts CvData + lang props)
│   └── starwind/              # Starwind UI components (CLI-managed, do NOT edit directly)
│       ├── badge/
│       ├── card/
│       ├── separator/
│       ├── theme-toggle/
│       └── toggle/
├── i18n/
│   ├── cv.ts                  # All CV content per locale (Record<Locale, CvData>)
│   ├── ui.ts                  # Language labels, default lang, locale list, Locale type
│   └── utils.ts               # getLangFromUrl(), useTranslatedPath() helpers
├── layouts/
│   └── Layout.astro           # Base HTML shell: head, meta, fonts, ClientRouter, dark mode + browser lang detect scripts, <slot />
├── pages/
│   ├── index.astro            # English CV (thin wrapper → CvPage with en data)
│   ├── llm.md.ts              # Static endpoint: LLM-friendly markdown version of CV
│   └── es/
│       └── index.astro        # Spanish CV (thin wrapper → CvPage with es data)
└── styles/
    └── starwind.css           # Tailwind v4 config + Starwind design tokens (light/dark themes)

scripts/
└── generate-og.ts             # Playwright script: generates public/og.png from og-template.html

public/                        # Static assets (favicons, PDFs, og.png, robots.txt)
starwind.config.json           # Starwind CLI configuration
biome.json                     # Biome linter/formatter config
astro.config.mjs               # Astro + Tailwind Vite plugin + i18n config
og-template.html               # OG image HTML template (1200x630, used by generate-og.ts)
```

## Commands

| Command | Purpose |
|---|---|
| `bun run dev` | Start dev server |
| `bun run build` | Build static site to `dist/` |
| `bun run preview` | Preview production build |
| `bun run check` | Run Biome lint + format (auto-fixes with `--fix --unsafe`) |
| `bun run og` | Generate `public/og.png` from `og-template.html` via Playwright |

## Code Conventions

### Formatting (Biome)
- **Indentation:** Tabs
- **Quotes:** Single quotes for JS/TS
- **Imports:** Auto-organized by Biome on save
- Biome has `noUnusedVariables` and `noUnusedImports` **disabled for `.astro` files** because Biome cannot see Astro template expression usage and would incorrectly remove valid imports/variables

### Styling
- **No custom CSS files.** All styling is done via Tailwind utility classes (the only CSS file is `starwind.css` which defines design tokens and base resets in `@layer base`)
- Use Starwind design tokens for colors: `bg-background`, `text-foreground`, `bg-card`, `text-muted-foreground`, `text-primary-accent`, `bg-primary`, `border-border`, etc.
- Dark mode is class-based (`.dark` on `<html>`), toggled via a button with localStorage persistence
- The `print:` Tailwind variant is available for print-specific styles
- Responsive breakpoint: `md:` (768px) is used for the two-column layout

### Components
- Starwind components live in `src/components/starwind/` and are **managed by the Starwind CLI** — avoid manual edits
- Custom components should be placed in `src/components/` (outside `starwind/`)

## i18n (Internationalization)

### Routing
- **English** (default): `/` — no prefix
- **Spanish**: `/es/`
- Configured in `astro.config.mjs` via Astro's built-in `i18n` block (default locale is not prefixed)

### Architecture
- **Data-driven**: All translatable CV content lives in `src/i18n/cv.ts` as a `Record<Locale, CvData>` object
- **Shared template**: `src/components/CvPage.astro` renders the CV from `CvData` props — no hardcoded strings
- **Thin page wrappers**: Each locale page (`src/pages/index.astro`, `src/pages/es/index.astro`) imports the shared template and passes locale-specific data
- **Type**: `Locale` is exported from `src/i18n/ui.ts` and derived from the `languages` map

### Adding a New Language
1. Add the locale code to `locales` array in `astro.config.mjs`
2. Add the language entry to `languages` in `src/i18n/ui.ts`
3. Add the full `CvData` object for the new locale in `src/i18n/cv.ts`
4. Create `src/pages/<locale>/index.astro` (copy the ES page and change `es` to the new locale code)
5. **Update the browser language detection script** in `Layout.astro` — the `supportedLocales` array is hardcoded in the inline script and must be updated manually (Astro inline scripts cannot import modules)
6. The language switcher adapts automatically — no code changes needed

### Browser Language Detection
- Client-side `is:inline` script in `Layout.astro` (Astro's `preferredLocale` is SSR-only, not available in static builds)
- Runs only on `/` (root page), checks `navigator.languages` against a hardcoded `supportedLocales` array
- Uses `sessionStorage` flag (`locale-redirected`) — per-session, so manual navigation is respected
- **Note:** The `supportedLocales` array is hardcoded as `['en', 'es']` in the inline script — when adding a new language, this array must be updated manually

### Language Switcher
- Located in `CvPage.astro`, top-right next to dark mode toggle
- Text links (EN | ES), current language is bold, hidden on print (`print:hidden`)
- Wrapped in `<nav aria-label="Language">` for accessibility
- Active language has `aria-current="page"`, links have `hreflang` attributes

## SEO

### Site Configuration
- **Production URL**: `https://luka.software` (set as `site` in `astro.config.mjs`)
- **Trailing slashes**: `trailingSlash: 'always'` — prevents duplicate content from inconsistent URLs

### Sitemap
- Auto-generated by `@astrojs/sitemap` integration at build time (`/sitemap-index.xml`)
- Configured in `astro.config.mjs` via `integrations: [sitemap()]`

### robots.txt
- Static file at `public/robots.txt`
- Allows all crawlers (`User-agent: * / Allow: /`)
- Points to sitemap at `https://luka.software/sitemap-index.xml`

### Meta Tags (in `Layout.astro`)
- **Canonical URL**: `<link rel="canonical">` — derived from `Astro.url.pathname` + site base
- **hreflang tags**: `<link rel="alternate" hreflang="en">`, `hreflang="es"`, `hreflang="x-default"` (points to EN)
- **Open Graph**: `og:title`, `og:description`, `og:url`, `og:type` (website), `og:locale`, `og:locale:alternate`, `og:image` (points to `/og.png`)
- **Twitter Card**: `twitter:card` (`summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image` (points to `/og.png`)
- **theme-color**: Two `<meta name="theme-color">` tags — light (`#ffffff`) and dark (`#0a0a0a`) with `media` queries
- **Sitemap link**: `<link rel="sitemap" href="/sitemap-index.xml">`

### JSON-LD Structured Data
- `Person` schema embedded as `<script type="application/ld+json">` in `Layout.astro`
- Generated from `cvData.en` — includes: `name`, `jobTitle`, `description`, `address`, `sameAs` (LinkedIn, GitHub), `worksFor`, `alumniOf`, `knowsLanguage`, `knowsAbout`
- Uses `@context: "https://schema.org"` and `@type: "Person"`

### Semantic HTML (in `CvPage.astro`)
- Name/job-title block wrapped in `<header>`
- Sidebar in `<aside>`, main content in `<main>`
- Each content group in `<section>` with proper heading hierarchy (`h1` > `h2` > `h3`)
- Language switcher in `<nav aria-label="Language">`

### LLM-Friendly Endpoint
- `src/pages/llm.md.ts` — Astro static endpoint generating `/llm.md` from `cvData.en`
- Includes a pre-prompt introduction for LLM consumption
- Linked from toolbar via chatbot icon button

### OG Image Generation
- **Automated via Playwright**: Run `bun run og` to generate `public/og.png` (1200x630)
- Script at `scripts/generate-og.ts` launches headless Chromium, loads `og-template.html`, screenshots at 1200x630
- Template at `og-template.html` uses the Vivid Lilac color scheme — update it if design tokens change

### View Transitions
- `Layout.astro` imports and renders `<ClientRouter />` from `astro:transitions`
- Provides SPA-style navigation between pages (no full page reloads)
- The dark mode script handles the `astro:after-swap` event to maintain theme across transitions

### Scroll Animations (tailwindcss-intersect)

**Setup:**
- `tailwindcss-intersect@2.2.0` — provides `intersect:` Tailwind variant (triggers styles when elements enter viewport)
- Imported via `@import "tailwindcss-intersect"` in `src/styles/starwind.css` (line 3, after `tw-animate-css`)
- Observer initialization script in `Layout.astro` (bottom of `<body>`, bundled `<script>` tag): calls `Observer.start()` on load, plus `astro:page-load` event listener calls `Observer.restart()` to re-observe elements after ClientRouter navigation

**Animation pattern applied to all CV sections in `CvPage.astro`:**
```
max-md:motion-safe:opacity-0 max-md:motion-safe:translate-y-3
intersect:max-md:motion-safe:opacity-100 intersect:max-md:motion-safe:translate-y-0
max-md:motion-safe:transition-all max-md:motion-safe:duration-500 max-md:motion-safe:ease-out
intersect-once
print:opacity-100 print:translate-y-0
```

**Key details:**
- `max-md:` prefix scopes all animations to mobile only (below 768px) — on desktop the full CV is visible above the fold so animations are unnecessary
- `motion-safe:` prefix wraps all animation classes to respect `prefers-reduced-motion`
- `intersect-once` keeps elements visible after first reveal (no re-hiding on scroll). **IMPORTANT:** `intersect-once` must NOT be prefixed with responsive variants (e.g. `max-md:`) — it is a JavaScript-only marker checked via `classList.contains("intersect-once")`, not a CSS utility. Prefixing it breaks the exact string match and the observer never disconnects.
- `intersect-once` keeps elements visible after first reveal (no re-hiding on scroll)
- `print:opacity-100 print:translate-y-0` ensures all content is visible when printing (overrides the initial hidden state)
- Sidebar sections use staggered delays: no delay → `delay-75` → `delay-100` → `delay-150` → `delay-200` → `delay-[250ms]`
- Main content sections use a separate stagger: no delay → `delay-75` → `delay-100`
- Animations are section-level (not per-item) — individual cards/badges within a section appear together

## CV Data Model (`src/i18n/cv.ts`)

### Types

| Type | Fields |
|---|---|
| `ExperienceEntry` | `company`, `role`, `period`, `bullets: string[]`, `current?: boolean`, `logo?: string` |
| `EducationEntry` | `institution`, `description`, `period`, `logo?: string` |
| `LanguageEntry` | `name`, `level`, `flag`, `proficiency: number` |
| `SoftSkillEntry` | `label`, `description` |
| `ProjectEntry` | `name`, `description`, `url`, `logo?: string` |

### CvData Interface

Top-level fields: `title`, `description`, `jobTitle`

Section headings (all translatable): `sections.about`, `sections.contact`, `sections.languages`, `sections.softSkills`, `sections.experience`, `sections.education`, `sections.knowledge`, `sections.projects`

Content fields: `about`, `softSkillsSummary`, `knowledgeMain`, `knowledgeAmong`

Toolbar labels: `darkModeLabel`, `pdfLabel`, `repoLabel`, `meetLabel`

Data arrays: `languages`, `softSkills`, `experience`, `education`, `projects`

## CV UI Patterns

### Layout Structure

**Sidebar (`<aside>`, left column on `md:`):**
1. Header (name + job title)
2. About
3. Contact
4. Languages (flag + progress bars)
5. Education (compact list)
6. Soft Skills (bullet dots)

Each section separated by `<Separator />`.

**Main content (`<main>`, right column on `md:`):**
1. Projects (horizontal grid)
2. Experience (cards)
3. Knowledge (badges)

Each section separated by `<Separator />`.

### Toolbar (top-right of `CvPage.astro`)
The toolbar contains, in order: Language switcher (EN | ES), LLM chatbot button, PDF download button, GitHub repo button, Dark mode toggle. All toolbar buttons are `print:hidden` and use the same button style: `rounded-lg border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground`.

- **Language switcher**: `<nav aria-label="Language">` with `aria-current="page"` on active language
- **LLM button**: Links to `/llm.md` (`target="_blank"`)
- **PDF button**: Links to `/cv-${lang}.pdf` (`target="_blank"`), label from `data.pdfLabel`
- **GitHub repo button**: Links to `https://github.com/lukacerr/cv` (`target="_blank"`), label from `data.repoLabel`
- **Dark mode toggle**: Starwind `ThemeToggle` component

### Translatable Labels
All toolbar button labels and accessibility text are in `CvData` (in `src/i18n/cv.ts`): `darkModeLabel`, `pdfLabel`, `repoLabel`. Section headings are in `sections` (e.g. `sections.about`, `sections.projects`). Content strings include `about`, `softSkillsSummary`, `knowledgeMain`, `knowledgeAmong`. Add new labels to both the `CvData` interface and all locale objects.

### Projects Section
- **Grid layout**: `grid grid-cols-1 md:grid-cols-2 gap-4` — stacks vertically on mobile, two columns on desktop
- **Cards are clickable `<a>` tags** (not Starwind Card components) with `target="_blank"` linking to `project.url`
- **Styled as darker cards**: `bg-muted` background with `ring-1 ring-border`, `rounded-xl`, centered content
- **Hover effects**: `hover:ring-primary/50` ring + external-link icon fades in (top-right, `opacity-0 group-hover:opacity-100`)
- **Logo**: `size-10 rounded-lg object-contain` image, or rocket icon fallback in `size-10 rounded-lg bg-background` container
- **Text**: Project name (`text-sm font-medium`) centered above description (`text-center text-xs text-muted-foreground`)

### Tech Term Highlighting (renderBullet)
Experience bullet strings in `cv.ts` use backtick markers around tech terms (e.g. `` `FastAPI` ``). These are parsed by the `renderBullet()` helper function in `CvPage.astro` frontmatter, which uses regex replacement to convert them to `<code>` tags with styling: `rounded bg-muted px-1 py-0.5 text-xs font-medium text-foreground`. Rendered via Astro's `set:html` directive.

### Current Experience Highlight
The first (current) experience card has `current: true` in `cv.ts`, which adds `ring-primary/50` to the Card component for a colored ring border. A pulsing dot (`bg-primary animate-pulse`) is displayed next to the date period.

### Logo Placeholders
Both `ExperienceEntry` and `EducationEntry` have an optional `logo?: string` field. When set, renders `<img src={logo} class="size-6 rounded object-contain">`. When unset, renders a placeholder icon (building icon for experience, graduation cap for education) inside a `size-8 rounded-md bg-muted` container.

### Language Progress Bars
Languages display with flag emoji + name on the left, level (e.g. "C1") on the right, and a horizontal progress bar below. The bar uses `bg-muted` as track and `bg-primary` as fill, with width set from `proficiency` percentage (100/80/40/20).

### Education in Sidebar
Education is rendered in the sidebar (between Languages and Soft Skills) using a compact list layout — no Card components. Each entry shows a logo placeholder + institution name (truncated with tooltip) + period + description.

## Installing New Starwind Components

```bash
npx starwind@latest add <component-name>
# or interactively:
npx starwind@latest add
```

Available components include: accordion, alert, badge, button, card, checkbox, dialog, input, label, select, separator, and more. See https://starwind.dev/docs/components for the full list.

The CLI writes components to `src/components/starwind/<name>/` and updates `starwind.config.json`.

## Icons

Icons are from `@tabler/icons` (outline style). They are **inlined as SVG** in Astro templates — there is no icon component wrapper. SVG source files are located at:

```
node_modules/@tabler/icons/icons/outline/<name>.svg
```

When adding icons, copy the SVG paths and use `class="size-4"` or `class="size-5"` with `stroke="currentColor"` for proper sizing and color inheritance.

## Design Tokens Reference

All tokens are defined in `src/styles/starwind.css` and mapped to Tailwind utilities:

| Token | Light | Dark | Tailwind class |
|---|---|---|---|
| background | white | neutral-950 | `bg-background` |
| foreground | neutral-950 | neutral-50 | `text-foreground` |
| card | white | neutral-900 | `bg-card` |
| primary | #c47fd5 (Vivid Lilac) | #c47fd5 (Vivid Lilac) | `bg-primary` |
| primary-foreground | #1c1c1c | #1c1c1c | `text-primary-foreground` |
| primary-accent | #c47fd5 (Vivid Lilac) | #d9a8e6 (light lilac) | `text-primary-accent` |
| secondary | purple-700 | purple-700 | `bg-secondary` |
| muted | neutral-100 | neutral-800 | `bg-muted` |
| muted-foreground | neutral-600 | neutral-400 | `text-muted-foreground` |
| border | neutral-200 | neutral-800 | `border-border` |
| accent | neutral-100 | neutral-700 | `bg-accent` |

Additional tokens exist for `popover`, `card-foreground`, `accent-foreground`, `info`, `success`, `warning`, `error`, `input`, `outline`, and `sidebar-*` — see `starwind.css` for full list.

Radius scale: `rounded-xs` through `rounded-3xl` (based on `--radius: 0.625rem`).

## Adding New Pages

1. Create a new `.astro` file in `src/pages/` (filename becomes the route)
2. Import and wrap content with `Layout` from `@/layouts/Layout.astro`
3. Pass `title` (required) and `description` (optional) props to `Layout`

```astro
---
import Layout from '@/layouts/Layout.astro';
---

<Layout title="Page Title" description="Page description.">
  <!-- Page content -->
</Layout>
```

## Key Notes

- This is a **pure Astro project** — no React, Vue, or other UI framework integrations. All components are `.astro` files
- The `@/*` path alias maps to `src/*` (configured in `tsconfig.json`)
- Dark mode preference is stored in `localStorage` under the key `colorTheme` (supports values: `light`, `dark`, `system`)
- The Vite warning about `@astrojs/internal-helpers/remote` unused imports during build is a known Astro issue and can be safely ignored
- `nexata-logo.png` is referenced in `cv.ts` project data but has not been added to `public/` yet — will show a broken image until provided
