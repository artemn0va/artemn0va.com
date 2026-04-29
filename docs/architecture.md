# Architecture

## Stack

- Next.js 14 App Router in `src/app`.
- React 18 with TypeScript strict mode.
- Tailwind CSS with custom theme tokens in `tailwind.config.ts`.
- Radix/shadcn-style primitives under `src/components/ui`.
- Jest and Testing Library for unit and component tests.

## Top-Level Structure

```text
src/
  app/                         Next.js routes, layouts, error pages, API routes
  components/                  Reusable components and portfolio grid sections
  components/grid/             Home page CV/portfolio sections
  components/grid/showcases/   Interactive showcases, including 2048
  constant/                    Site and environment constants
  layouts/                     Shared layout wrappers
  lib/                         Utilities, env validation, logger, OG helpers
  styles/                      Global CSS, grid CSS, feature CSS modules
  __tests__/                   Jest tests for app features
public/
  favicon/                     Favicons and web manifest
  fonts/                       Local font assets
  images/                      Avatar and Open Graph images
  svg/                         Project icon assets
```

## Routes

- `/`: assembled in `src/app/page.tsx` from grid sections.
- `/2048`: page route in `src/app/2048/page.tsx`, with game implementation in `src/components/grid/showcases/2048`.
- `/car-show`: page route in `src/app/car-show/page.tsx`, with the Three.js scene implementation in `src/components/grid/showcases/car-show`.
- `/api/hello`: simple API route in `src/app/api/hello/route.ts`.

## Aliases

Configured in `tsconfig.json` and Jest:

- `@/*` maps to `src/*`.
- `~/*` maps to `public/*`.
- `@/2048/*` is intended for the 2048 showcase area, though most imports currently use regular `@/components/...` paths.

## Data Flow

- Portfolio sections are mostly static React components backed by colocated data files.
- Site metadata uses `siteConfig` from `src/constant/config.ts` and is applied in `src/app/layout.tsx`.
- Environment validation is centralized in `src/lib/env.ts` and imported by the home page.
- The 2048 feature uses a reducer, context provider, hooks, and model classes under `src/components/grid/showcases/2048`.

## Styling Model

- Global base styles live in `src/styles/globals.css`.
- Home page layout rules live in `src/styles/grid.css`.
- Feature-level CSS modules live under `src/styles/2048`.
- Car show model and texture assets are served from `public/car-show`.
- Tailwind custom backgrounds, shadows, breakpoints, and colors are defined in `tailwind.config.ts`.
