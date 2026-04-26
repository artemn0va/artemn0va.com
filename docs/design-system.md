# Design System

## Visual Direction

The site has a custom polished CV/portfolio style with soft shadows, layered gradients, rounded sections, and light/dark mode support. Preserve that visual language when extending the interface.

## Tailwind

- Use Tailwind utility classes first.
- Reuse theme tokens from `tailwind.config.ts` for custom backgrounds, shadows, colors, radii, and breakpoints.
- Prefer `cn` from `src/lib/utils.ts` for conditional class names.
- Keep responsive behavior explicit. Existing breakpoints are `xs`, `sm`, `md`, `lg`, `xl`, and `2xl`.
- Do not introduce a second styling system.

## Components

- Use existing primitives in `src/components/ui` for buttons, dialogs, forms, inputs, tabs, sheets, scroll areas, toasts, and avatars.
- Use existing project components before adding new generic ones.
- Keep reusable components small and typed.
- Only add a new abstraction when it removes repeated complexity or matches an existing pattern.

## Assets And Icons

- Existing SVG icons live in `public/svg`.
- Avatar and Open Graph images live in `public/images`.
- SVG imports are handled by `@svgr/webpack`; use `?url` when a URL import is needed.
- Prefer existing icon assets or installed libraries before adding new dependencies.

## Accessibility

- Use semantic elements where possible.
- Keep buttons as buttons and links as links.
- Provide meaningful alt text for content images; use empty alt text only for decorative images.
- Preserve keyboard access for menus, dialogs, and interactive showcases.
- Do not remove visible focus behavior.
- Keep color contrast acceptable in both light and dark modes.

## Responsive Rules

- Check mobile, tablet, desktop, and wide desktop behavior for layout changes.
- Preserve the main grid structure unless intentionally redesigning the page.
- Avoid text overflow and overlapping absolute-positioned layers.
- Keep fixed-format elements, such as game tiles and icon buttons, dimensionally stable.
