# Development

## Requirements

- Node `v20.10.0` from `.nvmrc`.
- pnpm, with the package manager version recorded in `package.json`.

## Setup

```bash
pnpm install
```

Copy `.env.example` to `.env.local` when local environment overrides are needed.

```env
NEXT_PUBLIC_SHOW_LOGGER="false"
```

## Scripts

```bash
pnpm dev            # Start local Next.js dev server
pnpm build          # Production build
pnpm start          # Start built production app
pnpm lint           # Next lint
pnpm lint:fix       # ESLint fix on src, then format
pnpm lint:strict    # ESLint with zero warnings allowed
pnpm typecheck      # TypeScript check without emit
pnpm test           # Jest test suite
pnpm test:watch     # Jest watch mode
pnpm format         # Prettier write
pnpm format:check   # Prettier check
```

## Daily Workflow

1. Run `git status --short` and identify existing user changes.
2. Read nearby files before editing.
3. Make focused changes.
4. Validate with the smallest useful command first.
5. Run broader checks before handoff when the change affects shared behavior.

Recommended broad validation:

```bash
pnpm typecheck
pnpm lint:strict
pnpm test
pnpm format:check
```

## Environment

Environment variables are validated in `src/lib/env.ts`.

- `NEXT_PUBLIC_SHOW_LOGGER`: optional public flag, accepted values are `"true"` and `"false"`.

When adding env vars:

- Add them to `.env.example`.
- Add validation to `src/lib/env.ts`.
- Document them here.
- Avoid reading unvalidated env vars directly in feature code.

## Deployment

- Vercel config lives in `vercel.json`.
- Sitemap generation is configured through `next-sitemap.config.js` and the `postbuild` script.
- Images are currently configured with `unoptimized: true` in `next.config.js`.
