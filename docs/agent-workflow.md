# Agent Workflow

## Core Rules

- Preserve user work. Always inspect `git status --short` before editing.
- Prefer `rg` for file and text search.
- Read existing implementation before deciding on a pattern.
- Keep changes focused on the request.
- Do not rewrite unrelated starter-template files unless asked.
- Do not add dependencies without a strong reason and user-visible benefit.
- Keep docs synchronized with implementation changes.

## Before Editing

1. Identify the affected feature area.
2. Read the closest component, data file, style file, and test file.
3. Check whether there is an existing primitive or helper to reuse.
4. Decide the smallest safe change.

## During Editing

- Use existing aliases and formatting conventions.
- Avoid touching generated folders such as `.next` and `node_modules`.
- Avoid churn in lockfiles unless dependency changes are explicitly required.
- Keep comments rare and useful.
- Preserve current file encodings and line-ending style as much as possible.

## Validation

Choose validation based on risk:

- Static content: `pnpm format:check` and relevant typecheck if TS data changed.
- Components: `pnpm typecheck`, `pnpm lint:strict`, and relevant tests.
- 2048 logic: run Jest tests for the 2048 area plus typecheck.
- Build or metadata/deployment changes: `pnpm build`.

When a command cannot be run, report that clearly with the reason.

## Handoff

A good final handoff includes:

- What changed.
- Files created or updated.
- Validation run and results.
- Any known follow-up or risk.

Keep it brief and specific.
