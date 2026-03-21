# AGENTS.md

## Project Overview

**luka-cv** — A personal CV/resume site for Luka Cerrutti built with Astro 6, Tailwind CSS v4, and Starwind UI components. Static site (no SSR). Supports English (default) and Spanish via Astro's built-in i18n routing.

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| Astro | ^6.0.8 | Static site framework |
| Tailwind CSS | ^4.2.2 | Utility-first CSS (v4, via Vite plugin) |
| Starwind UI | latest | Astro-native component library (Card, Badge, Separator installed) |
| Inter | variable | Primary font (`@fontsource-variable/inter`) |
| Tabler Icons | ^3.40.0 | SVG icon set (outline style, inlined manually) |
| Biome | 2.4.8 | Linter and formatter |
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
│       └── separator/
├── i18n/
│   ├── cv.ts                  # All CV content per locale (Record<Locale, CvData>)
│   ├── ui.ts                  # Language labels, default lang, locale list, Locale type
│   └── utils.ts               # getLangFromUrl(), useTranslatedPath() helpers
├── layouts/
│   └── Layout.astro           # Base HTML shell: head, meta, fonts, dark mode + browser lang detect scripts, <slot />
├── pages/
│   ├── index.astro            # English CV (thin wrapper → CvPage with en data)
│   └── es/
│       └── index.astro        # Spanish CV (thin wrapper → CvPage with es data)
└── styles/
    └── starwind.css           # Tailwind v4 config + Starwind design tokens (light/dark themes)

public/                        # Static assets (favicons, PDFs)
starwind.config.json           # Starwind CLI configuration
biome.json                     # Biome linter/formatter config
astro.config.mjs               # Astro + Tailwind Vite plugin + i18n config
```

## Commands

| Command | Purpose |
|---|---|
| `bun run dev` | Start dev server |
| `bun run build` | Build static site to `dist/` |
| `bun run preview` | Preview production build |
| `bun run check` | Run Biome lint + format (auto-fixes with `--fix --unsafe`) |

## Code Conventions

### Formatting (Biome)
- **Indentation:** Tabs
- **Quotes:** Single quotes for JS/TS
- **Imports:** Auto-organized by Biome on save
- Biome has `noUnusedVariables` and `noUnusedImports` **disabled for `.astro` files** because Biome cannot see Astro template expression usage and would incorrectly remove valid imports/variables

### Styling
- **No custom CSS files.** All styling is done via Tailwind utility classes
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
- Configured in `astro.config.mjs` via Astro's built-in `i18n` block (`prefixDefaultLocale: false`)

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
5. The browser language detection script and language switcher adapt automatically — no code changes needed

### Browser Language Detection
- Client-side script in `Layout.astro` (Astro's `preferredLocale` is SSR-only, not available in static builds)
- Runs only on `/` (root page), checks `navigator.languages` against supported locales
- Uses `sessionStorage` flag (`locale-redirected`) — per-session, so manual navigation is respected
- Scalable: iterates the locales array, no hardcoded language checks

### Language Switcher
- Located in `CvPage.astro`, top-right next to dark mode toggle
- Text links (EN | ES), current language is bold, hidden on print (`print:hidden`)

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
| primary | blue-700 | blue-700 | `bg-primary` |
| primary-accent | blue-700 | blue-400 | `text-primary-accent` |
| secondary | purple-700 | purple-700 | `bg-secondary` |
| muted | neutral-100 | neutral-800 | `bg-muted` |
| muted-foreground | neutral-600 | neutral-400 | `text-muted-foreground` |
| border | neutral-200 | neutral-800 | `border-border` |
| accent | neutral-100 | neutral-700 | `bg-accent` |

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
- Dark mode preference is stored in `localStorage` under the key `theme`
- The Vite warning about `@astrojs/internal-helpers/remote` unused imports during build is a known Astro issue and can be safely ignored
