# artemn0va.com

Personal CV and portfolio site for Artem Nova.

## Stack

- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Radix/shadcn-style UI primitives
- Jest and Testing Library

## Requirements

- Node `v20.10.0` from `.nvmrc`
- pnpm version recorded in `package.json`

## Setup

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Useful Commands

```bash
pnpm build
pnpm lint
pnpm lint:strict
pnpm typecheck
pnpm test
pnpm format:check
```

## Project Structure

- `src/app`: Next.js routes, layouts, error pages, and API routes.
- `src/components/grid`: responsive portfolio grid sections for the home page.
- `src/components/grid/showcases/2048`: 2048 showcase implementation.
- `src/components/ui`: reusable UI primitives.
- `src/constant/config.ts`: site metadata and canonical URL.
- `src/styles`: global, grid, and feature styles.
- `public`: images, favicons, fonts, and SVG assets.
- `docs`: architecture, development, testing, content, and agent workflow notes.

## Content And Metadata

Portfolio content is mostly colocated with the section that renders it. Data-only edits should usually go into the existing `*-data.ts` or `*-data.tsx` files under `src/components/grid`.

Site-wide title, description, and URL live in `src/constant/config.ts`. Metadata is applied in `src/app/layout.tsx`, and sitemap generation uses `next-sitemap.config.js`.

## Validation

For broad validation before handoff:

```bash
pnpm typecheck
pnpm lint:strict
pnpm test
pnpm format:check
```

See `docs/` for the current project-specific workflow.
