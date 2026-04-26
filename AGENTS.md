# Agents Guide

This is the operating guide for AI coding agents working on this repository. Read it before making changes, then use the files in `docs/` for deeper context.

## Project Snapshot

- Personal CV/portfolio site for Artem Shchirov.
- Stack: Next.js 14 App Router, React 18, TypeScript, Tailwind CSS, Radix/shadcn-style UI primitives, Jest, Testing Library.
- Package manager: pnpm. Use the version recorded in `package.json` and Node `v20.10.0` from `.nvmrc`.
- Main app routes live under `src/app`.
- The home page is a responsive portfolio grid assembled from `src/components/grid/*`.
- The `/2048` route and showcase logic live under `src/components/grid/showcases/2048`.

## Start Here

1. Check `git status --short` before editing. Preserve user changes.
2. Read the relevant docs:
   - `docs/architecture.md` for project structure.
   - `docs/development.md` for local commands and workflow.
   - `docs/testing.md` for validation expectations.
   - `docs/design-system.md` for UI and styling conventions.
   - `docs/content-model.md` for portfolio content locations.
   - `docs/agent-workflow.md` for agent-specific collaboration rules.
3. Inspect nearby code before changing patterns. This project has custom visual styling; reuse local components and tokens before adding new abstractions.

## Commands

Use these commands from the repository root.

```bash
pnpm install
pnpm dev
pnpm build
pnpm lint
pnpm lint:strict
pnpm typecheck
pnpm test
pnpm format:check
```

For focused changes, prefer the narrowest useful validation first, then broaden before handoff:

```bash
pnpm typecheck
pnpm test
pnpm lint:strict
pnpm format:check
```

## Coding Standards

- Prefer TypeScript, React Server Components by default, and client components only where browser APIs, state, effects, or event handlers are needed.
- Use `@/` imports for `src/*` and `~/` imports for `public/*`.
- Keep data-only portfolio content in existing `*-data.ts` files when practical.
- Reuse `cn` from `src/lib/utils.ts` for class composition.
- Reuse `src/components/ui/*` primitives before introducing new UI dependencies.
- Keep Tailwind classes consistent with existing token names in `tailwind.config.ts`.
- Keep edits scoped. Do not reformat unrelated files or rewrite starter-era content unless the task asks for it.
- Do not commit secrets. Environment variables are documented in `.env.example` and validated in `src/lib/env.ts`.

## UI Expectations

- This is a polished portfolio, not a generic SaaS dashboard. Preserve the custom neumorphic/light-dark visual language.
- Maintain responsive behavior across mobile, tablet, desktop, and `2xl` layouts.
- Avoid layout shift in grid sections. Preserve fixed grid classes and responsive constraints unless intentionally redesigning.
- Use accessible interactive elements, visible focus states, semantic HTML, alt text for images, and keyboard-friendly dialogs/menus.
- For icons, prefer the existing SVG assets in `public/svg` or the existing icon libraries already installed.

## Testing Expectations

- Add or update tests when changing reducer logic, hooks, game behavior, form behavior, or reusable UI with meaningful state.
- Existing tests live in `src/__tests__` and `src/lib/__tests__`.
- Jest uses `next/jest`, `jest-environment-jsdom`, Testing Library, and SVG mocks.
- For styling-only or copy-only edits, typecheck plus lint/format checks may be enough.

## Documentation Expectations

- Update `docs/` when changing architecture, commands, environment variables, deployment behavior, or agent workflow.
- Keep docs short, factual, and project-specific.
- If implementation and docs disagree, fix the docs in the same change.

## Project Notes

- `README.md` and `docs/` contain the current project-specific guidance.
- Site config lives in `src/constant/config.ts`; metadata is wired in `src/app/layout.tsx`.
