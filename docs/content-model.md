# Content Model

## Site Metadata

Site-wide metadata is defined in `src/constant/config.ts` and consumed in `src/app/layout.tsx`.

Update this file for:

- Site title.
- Site description.
- Canonical site URL.
- Open Graph image references that depend on the site URL.

## Home Page Sections

The home page is composed in `src/app/page.tsx`.

Primary sections:

- `Profile`: avatar, role, location.
- `Bio`: about and language content.
- `Experience`: work and education data.
- `Skills`: skills data.
- `Cv`: CV/download area.
- `Years`: experience-year display.
- `Projects`: project section.
- `Contacts`: contact links and contact dialog.
- `Portfolio`: portfolio section.
- `Showcases`: interactive demos such as the car show scene and 2048.

## Static Data Files

Prefer editing existing data files for content-only updates:

- `src/components/grid/experience/experience-data.ts`
- `src/components/grid/experience/education-data.ts`
- `src/components/grid/skills/skills-data.ts`
- `src/components/grid/contacts/contacts-data.tsx`

If new content becomes complex, colocate its data file with the section that renders it.

## Public Assets

- Favicons: `public/favicon`.
- Images: `public/images`.
- SVG icons: `public/svg`.
- Fonts: `public/fonts`.

When replacing assets:

- Keep filenames stable when possible to avoid unnecessary code changes.
- Update alt text, metadata, or dimensions when the meaning of an image changes.
- Optimize images before adding large files.
