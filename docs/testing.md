# Testing

## Current Test Setup

- Jest config: `jest.config.ts`.
- Test setup: `jest.setup.ts`.
- Environment: `jest-environment-jsdom`.
- Framework helpers: Testing Library and `@testing-library/jest-dom`.
- SVGs are mocked by `src/__mocks__/svg.tsx`.
- `next/jest` loads the Next.js configuration.

## Test Locations

- Feature tests: `src/__tests__`.
- Library tests: `src/lib/__tests__`.
- 2048 tests cover reducer behavior, context behavior, hooks, and components.

Some existing 2048 component tests are under `src/__tests__/2048/compontents`. Keep the current path spelling unless a task explicitly asks for cleanup.

## What To Test

Add or update tests for:

- Reducers and state transitions.
- Hooks with non-trivial behavior.
- Context providers and consumer behavior.
- Interactive components with important user-visible states.
- Utility functions in `src/lib`.
- Bug fixes where the regression can be captured cheaply.

Tests are usually optional for:

- Copy-only edits.
- Static data edits.
- Pure Tailwind class adjustments with no behavior change.

## Useful Commands

```bash
pnpm test
pnpm test:watch
pnpm typecheck
pnpm lint:strict
pnpm format:check
```

## Testing Style

- Prefer testing visible behavior over implementation details.
- Keep reducer tests direct and table-driven where possible.
- For UI tests, query by role, label, text, or accessible name.
- Avoid snapshots unless the rendered output is intentionally stable and small.
