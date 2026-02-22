# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

StormWind Studios informational/marketing website built with React. It showcases training topics (Microsoft, Cloud, Cybersecurity, etc.), platform features (mentoring, learning paths, AI tutoring), course catalogs, and training sample previews. Originally scaffolded with Lovable.dev.

## Commands

- `npm run dev` — Start dev server on port 8080
- `npm run build` — Production build
- `npm run build:dev` — Development build
- `npm run lint` — ESLint (flat config, TypeScript + React hooks + React Refresh)
- `npm run preview` — Preview production build

## Architecture

**Stack:** Vite + React 18 + TypeScript + Tailwind CSS + shadcn/ui (Radix primitives) + Supabase

**Path alias:** `@/` maps to `./src/` (configured in tsconfig.json and vite.config.ts)

**Routing:** React Router v6 with lazy-loaded pages. All routes defined in `src/App.tsx`. New routes must be added above the `*` catch-all. Some routes use `<Navigate>` for redirects (e.g., `/microlearning` → `/bytes`).

**Provider hierarchy** (in App.tsx): `QueryClientProvider` → `ThemeProvider` (dark by default) → `TextSizeProvider` → `TooltipProvider` → `BrowserRouter` → `AuthProvider` → `AnalyticsProvider`

**Page layout:** Most pages use `src/components/PageLayout.tsx` which provides Navigation, breadcrumbs, hero section, and content area. Some older pages (like Courses) build their own layout with Navigation directly.

**UI components:** `src/components/ui/` contains shadcn/ui primitives (do not edit directly — use `npx shadcn-ui@latest add <component>` to add new ones). Custom components live in `src/components/`.

**Supabase integration:** Client at `src/integrations/supabase/client.ts` (auto-generated, do not edit). Types at `src/integrations/supabase/types.ts`. Used for auth (with admin role checks via `user_roles` table), chat messages, analytics, and course data. Auth context via `src/contexts/AuthContext.tsx` with `useAuth()` hook.

**Data fetching:** TanStack Query (React Query) with 1-minute stale time, 5-minute GC time.

## Design System

- All colors defined as HSL CSS variables in `src/index.css` (light and dark themes)
- Brand primary: green (`--primary: 166 100% 30%`), accent teal (`--accent-teal: 177 70% 41%`)
- Fonts: Inter (sans), Playfair Display (serif)
- Use `cn()` from `@/lib/utils` to merge Tailwind classes
- Icons: lucide-react

## Build Optimization

Vite config (`vite.config.ts`) uses manual chunk splitting for vendor libraries (react, radix, tanstack-query, recharts, supabase, etc.). Bundle visualizer outputs to `dist/stats.html` on production builds. The `lovable-tagger` plugin runs in development only.

## TypeScript Config

`strictNullChecks` and `noImplicitAny` are both **off**. `noUnusedLocals` and `noUnusedParameters` are also off.
