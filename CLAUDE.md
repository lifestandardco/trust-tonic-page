# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **npm** (use `package-lock.json`; there is no bun lockfile).

- `npm run dev` — start Vite dev server on **port 8080** (`http://localhost:8080`)
- `npm run build` — production build to `dist/`
- `npm run build:dev` — build in development mode
- `npm run preview` — serve the production build locally
- `npm run lint` — ESLint over the repo
- `npm test` — run the Vitest suite once
- `npm run test:watch` — Vitest in watch mode
- Run a single test file: `npx vitest run src/test/example.test.ts`
- Run tests matching a name: `npx vitest run -t "<test name>"`

## Architecture

A single-page marketing/landing site for a therapy practice. Vite + React 18 + TypeScript, styled with Tailwind and shadcn/ui (Radix primitives). The UI was originally scaffolded with Lovable, but it is no longer part of the workflow — develop and ship normally via git/GitHub.

- **Entry:** `src/main.tsx` → `src/App.tsx`. `App.tsx` wires global providers (React Query `QueryClientProvider`, `TooltipProvider`, two toasters — `Toaster` and Sonner) around a `BrowserRouter`.
- **Routing** (`src/App.tsx`): `/` → `Index`, `/services` → `Services`, `/contact` → redirects to `/#contact`, `*` → `NotFound`. When adding pages, register them here.
- **The home page is section-composed.** `src/pages/Index.tsx` stacks the page from section components in `src/components/` (`NavBar`, `HeroSection`, `AboutSection`, `ServicesSection`, `FAQSection`, `TestimonialsSection`, `ContactSection`, `FooterSection`). Most content edits happen by editing one of these section files.
- **In-page navigation uses anchor scrolling.** Sections are reached via `id` anchors (e.g. `#contact`, `#testimonials`). `Index.tsx` reads a `location.state.scrollTo` value (set by the NavBar) and smooth-scrolls to that element after render. Cross-page links into a section should navigate to `/` with that state, or to `/#section`.
- **`src/components/ui/`** is the shadcn/ui component library (generated). Treat these as vendored primitives — prefer composing them over editing them. Config in `components.json`; add new ones with the shadcn CLI.
- **Hooks** in `src/hooks/` (`use-mobile`, `use-toast`). **Utilities** in `src/lib/utils.ts` (notably `cn()` for class merging).
- **Static images** live in `src/assets/` (imported into components). `public/` holds favicons, logos, and manifest served as-is.

## Content / CMS (Sanity)

Most site copy is editable through a **Sanity** headless CMS by the practice owner — no code changes or deploys needed. Sanity project id `tl2cmlt6`, dataset `production` (public, read-only from the browser). Editor lives at `https://britney-worley-counseling.sanity.studio`.

- **App reads content at runtime with a fallback.** `src/lib/sanity.ts` is the read-only client; `src/lib/useSanityContent(key, query, fallback)` (`src/lib/useSanityContent.ts`) fetches a GROQ query via React Query and **merges any non-empty Sanity fields over the hardcoded `fallback`**. So the site always renders the fallback copy instantly (and if Sanity is empty/unreachable), then upgrades to CMS content. **Never gate rendering on the fetch** — always pass a complete fallback.
- **CMS-backed sections:** `AboutSection`, `ServicesSection` (Areas of Expertise), `FAQSection`, `TestimonialsSection`, `ContactSection`, and the `Services` page. Each defines a `FALLBACK` object + a GROQ `QUERY` and calls `useSanityContent`.
- **Intentionally hardcoded:** the Hero headline and the Services page `<h1>` keep their italic styling in code (not in the CMS). Images are not yet in the CMS.
- **Propagation:** edits appear on the site within ~60s (`useCdn: true` + React Query `staleTime` of 60s). This is expected.

**The Studio is a standalone project in `studio/`** — its own `package.json`/`node_modules`, **not built by Vercel** and ignored by ESLint. Content types are **singletons** (one document per section); ids match the schema names and the `SINGLETONS` list in `studio/sanity.config.ts`.

To **add a new editable section**:
1. Add a schema in `studio/schemas/`, then register it in `studio/schemas/index.ts` and the `SINGLETONS` array in `studio/sanity.config.ts`.
2. In the component, add a `FALLBACK` + GROQ `QUERY` and call `useSanityContent`; render from the returned object.
3. Redeploy the Studio: `cd studio && npx sanity deploy` (hostname pinned in `sanity.cli.ts`, so it's non-interactive; requires `npx sanity login` once).
4. Optionally seed initial content: `npx sanity dataset import <file>.ndjson production` (see existing `studio/seed*.ndjson`).

Browser reads require the origin in Sanity's CORS allowlist (`npx sanity cors add <origin> --no-credentials`); `localhost:8080` and the production domains are already added.

## Conventions

- **Import alias `@/` maps to `src/`** (configured in `vite.config.ts`, `vitest.config.ts`, and tsconfig). Use `@/components/...`, `@/lib/utils`, etc. rather than long relative paths.
- **Theming is HSL CSS variables**, defined in `src/index.css` (`:root`) and exposed as Tailwind colors in `tailwind.config.ts`. Use semantic tokens (`bg-background`, `text-foreground`, `border-border`) and the brand palette (`sage`, `terracotta`, `cream`, `warm`, `accent`) rather than hard-coded hex/colors so theming stays consistent.
- **Fonts:** `font-display` = Playfair Display (headings), `font-body` = DM Sans. Loaded via Google Fonts `@import` in `src/index.css`.
- Tailwind `darkMode` is class-based, but the site is currently light-only — there's no dark theme toggle wired up.

## Testing

Vitest with jsdom (`globals: true`), setup file `src/test/setup.ts`. Tests live in `src/**/*.{test,spec}.{ts,tsx}`. The suite is currently minimal (`src/test/example.test.ts`).

## Notes

- `lovable-tagger` runs as a Vite plugin in development mode only (leftover from the initial scaffold). It's a no-op for production builds and can be removed if you ever want to fully drop the Lovable dependency.
