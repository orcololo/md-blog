<div align="center">

## orcololo's blog

[![License]](LICENSE)

</div>

Personal blog at [blog.orcololo.com](https://blog.orcololo.com), built with [Astro](https://astro.build/), [Tailwind](https://tailwindcss.com/), and [shadcn/ui](https://ui.shadcn.com/). Based on the [astro-erudite](https://github.com/jktrn/astro-erudite) template by [jktrn](https://github.com/jktrn).

---

## Customizations

The following features were added on top of the upstream template:

- **Bilingual i18n (EN/PT)** — Full English and Portuguese support via Astro's built-in i18n routing. Includes a `LanguageSwitcher` component in the header, locale-specific route mirrors under `/pt/`, per-locale RSS feeds, and a `src/i18n/` module with typed translation keys and helper utilities.
- **Blog series** — Posts can be grouped into named series with sequential ordering using the `series` and `seriesPart` frontmatter fields.
- **`published` field** — Explicit opt-in publishing flag (defaults to `false`). Replaces implicit `draft` as the primary visibility control.
- **Security headers** — `X-Frame-Options`, `X-Content-Type-Options`, and `Referrer-Policy` headers applied to every response via `src/middleware.ts`, also mirrored in `public/_headers`.

---

## Features

- [Astro](https://astro.build/)'s [Islands](https://docs.astro.build/en/concepts/islands/) architecture for selective hydration and client-side interactivity while maintaining fast static site rendering.
- [shadcn/ui](https://ui.shadcn.com/) with [Tailwind](https://tailwindcss.com/) color conventions for automatic light and dark theme styling. Features accessible, theme-aware UI components for navigation, buttons, and more.
- [Expressive Code](https://expressive-code.com/) for enhanced code block styling, syntax highlighting, and code block titles.
- Blog authoring with [MDX](https://mdxjs.com/) for component-rich content and $\LaTeX$ math rendering via [KaTeX](https://katex.org/).
- Astro [View Transitions](https://docs.astro.build/en/guides/view-transitions/) in <abbr title="Single Page Application">SPA</abbr> mode for smooth route animations.
- SEO optimization with granular metadata and [Open Graph](https://ogp.me/) tag control for each post.
- [RSS](https://en.wikipedia.org/wiki/RSS) feed and sitemap generation (one feed per locale).
- Subpost support for breaking long content into digestible parts and organizing related series.
- Author profiles with a dedicated authors page and multi-author post support.
- Project tags with a dedicated tags page for post categorization and discovery.
- Custom Callout component variants for enhanced technical writing.
- Bilingual content (EN + PT) with Astro i18n routing, per-locale pages, and a `LanguageSwitcher` header component.
- Blog series grouping via `series` and `seriesPart` frontmatter fields.

### Technology stack

This is a list of the various technologies used to build this template:

| Category   | Technology Name                                                                            |
| ---------- | ------------------------------------------------------------------------------------------ |
| Framework  | [Astro](https://astro.build/)                                                              |
| Styling    | [Tailwind](https://tailwindcss.com)                                                        |
| Components | [shadcn/ui](https://ui.shadcn.com/)                                                        |
| Content    | [MDX](https://mdxjs.com/)                                                                  |
| Codeblocks | [Expressive Code](https://expressive-code.com/), [Shiki](https://github.com/shikijs/shiki) |
| Graphics   | [Figma](https://www.figma.com/)                                                            |
| Deployment | [Vercel](https://vercel.com)                                                               |

## Getting started

1. Clone the repository:

   ```bash
   git clone https://github.com/orcololo/blog.git
   cd blog
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000` to get started. The following commands are also available:

   | Command            | Description                                                     |
   | ------------------ | --------------------------------------------------------------- |
   | `npm run start`    | Alias for `npm run dev`                                         |
   | `npm run build`    | Run type checking and build the project                         |
   | `npm run preview`  | Previews the built project                                      |
   | `npm run astro`    | Run Astro CLI commands                                          |
   | `npm run prettier` | Blanket format all files using [Prettier](https://prettier.io/) |

### Site configuration

Edit the `src/consts.ts` file to update your site's metadata, navigation links, and social links:

```ts
export const SITE: Site = {
  title: 'Orcololo',
  description:
    'Just a blog about programming, technology, and other things that interest me.',
  href: 'https://blog.orcololo.com',
  author: 'orcololo',
  locale: 'en-US',
  featuredPostCount: 5,
  postsPerPage: 5,
}

// English navigation
export const NAV_LINKS: NavLink[] = [
  { href: '/blog', label: 'blog' },
  { href: '/about', label: 'about' },
]

// Portuguese navigation
export const NAV_LINKS_PT: NavLink[] = [
  { href: '/pt/blog', label: 'blog' },
  { href: '/pt/about', label: 'sobre' },
]

// Returns the correct nav set for a given language
export function getNavLinks(lang: 'en' | 'pt'): NavLink[] {
  /* ... */
}

export const SOCIAL_LINKS: SocialLink[] = [
  { href: 'https://github.com/orcololo', label: 'GitHub' },
  { href: 'mailto:rhi.castro@gmail.com', label: 'Email' },
  { href: 'https://linkedin.com/in/rhian-castro', label: 'LinkedIn' },
  { href: '/rss.xml', label: 'RSS' },
]
```

### Color palette

Colors are defined in `src/styles/global.css` in [OKLCH format](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/oklch), using the [shadcn/ui](https://ui.shadcn.com/) convention:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --primary: oklch(0.205 0 0);
  --primary-foreground: oklch(0.985 0 0);
  --secondary: oklch(0.97 0 0);
  --secondary-foreground: oklch(0.205 0 0);
  --muted: oklch(0.97 0 0);
  --muted-foreground: oklch(0.556 0 0);
  --accent: oklch(0.97 0 0);
  --accent-foreground: oklch(0.205 0 0);
  --destructive: oklch(0.577 0.245 27.325);
  --border: oklch(0.922 0 0);
  --ring: oklch(0.708 0 0);
}

[data-theme='dark'] {
  /* ... */
}
```

### Favicons

Favicons are generated using [RealFaviconGenerator](https://realfavicongenerator.net/). To adjust the favicons, replace the files in the `public/` directory (such as `favicon.ico`, `favicon.svg`, `apple-touch-icon.png`, etc.) with your own. After updating the favicon files, you'll also need to adjust the references in `src/components/Favicons.astro` to match your new favicon filenames and paths:

```html
<!-- Replace these with the generated meta tags -->
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="astro-erudite" />
<link rel="manifest" href="/site.webmanifest" />
```

## Adding content

### Blog posts

Add new blog posts as MDX files in the `src/content/blog/` directory. Use the following frontmatter structure:

```yml
---
title: 'Your Post Title'
description: 'A brief description of your post!'
date: 2024-01-01
tags: ['tag1', 'tag2']
image: './image.png'
authors: ['author1', 'author2']
published: true
lang: 'en'
series: 'My Series'
seriesPart: 1
---
```

The blog post schema is defined as follows:

| Field         | Type (Zod)      | Requirements                                                                                                                                                                    | Required |
| ------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| `title`       | `string`        | Should be ≤60 characters.                                                                                                                                                       | Yes      |
| `description` | `string`        | Should be ≤155 characters.                                                                                                                                                      | Yes      |
| `date`        | `coerce.date()` | Must be in `YYYY-MM-DD` format.                                                                                                                                                 | Yes      |
| `order`       | `number`        | Sort order for subposts with the same `date`. Defaults to `0` if not provided.                                                                                                  | Optional |
| `image`       | `image()`       | Should be exactly 1200px &times; 630px.                                                                                                                                         | Optional |
| `tags`        | `string[]`      | Preferably use kebab-case for these.                                                                                                                                            | Optional |
| `authors`     | `string[]`      | If the author has a profile, use the id associated with their Markdown file in `src/content/authors/` (e.g. if their file is named `jane-doe.md`, use `jane-doe` in the array). | Optional |
| `published`   | `boolean`       | Defaults to `false`. Post is only visible when `true`.                                                                                                                          | Optional |
| `draft`       | `boolean`       | Legacy visibility flag from upstream template. Defaults to `false`.                                                                                                             | Optional |
| `lang`        | `'en' \| 'pt'`  | Locale of this post. Defaults to `'en'`. Portuguese posts should live under slugs prefixed with the series/topic name in PT.                                                    | Optional |
| `series`      | `string`        | Name of the series this post belongs to.                                                                                                                                        | Optional |
| `seriesPart`  | `number`        | Sequential position of this post within its series.                                                                                                                             | Optional |

### Authors

Add author information in `src/content/authors/` as Markdown files. A file named `[author-name].md` can be associated with a blog post if `"author-name"` (the id) is added to the `authors` field:

```yml
---
name: 'Rhian Castro'
pronouns: 'he/him'
avatar: 'https://avatars.githubusercontent.com/u/1509115?v=4'
bio: 'Just a bored software dev'
website: 'https://orcololo.com'
github: 'https://github.com/orcololo'
linkedin: 'https://linkedin.com/in/rhian-castro'
mail: 'rhi.castro@gmail.com'
---
```

The author schema is defined as follows:

| Field      | Type (Zod)                                 | Requirements                                                                                                                                                             | Required |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| `name`     | `string`                                   | n/a                                                                                                                                                                      | Yes      |
| `pronouns` | `string`                                   | n/a                                                                                                                                                                      | Optional |
| `avatar`   | `string.url()` or `string.startsWith('/')` | Should be either a valid URL or a path starting with `/`. Preferably use [Gravatar](https://en.gravatar.com/site/implement/images/) with the `?size=256` size parameter. | Yes      |
| `bio`      | `string`                                   | n/a                                                                                                                                                                      | Optional |
| `mail`     | `string.email()`                           | Must be a valid email address.                                                                                                                                           | Optional |
| `website`  | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |
| `twitter`  | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |
| `github`   | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |
| `linkedin` | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |
| `discord`  | `string.url()`                             | Must be a valid URL.                                                                                                                                                     | Optional |

> [!TIP]
> You can add as many social media links as you want, as long as you adjust the schema! Make sure you also support the new field in the `src/components/SocialIcons.astro` component.

### Projects

Add projects in `src/content/projects/` as Markdown files:

```yml
---
name: 'JoBoEco'
description: 'Full-stack academic event management platform: registrations + Pix, paper submissions, peer review, QR check-in, HMAC-SHA256 certificates, BibTeX proceedings. 100% Cloudflare stack.'
tags:
  [
    Next.js,
    TypeScript,
    Cloudflare Workers,
    D1,
    R2,
    Drizzle ORM,
    MercadoPago,
    jsPDF,
    Vitest,
  ]
image: '../../../public/static/joboeco.png'
link: 'https://joboeco.org'
startDate: '2026-01-01'
endDate: '2026-03-01'
---
```

The project schema is defined as follows:

| Field         | Type (Zod)      | Requirements                            | Required |
| ------------- | --------------- | --------------------------------------- | -------- |
| `name`        | `string`        | n/a                                     | Yes      |
| `description` | `string`        | n/a                                     | Yes      |
| `tags`        | `string[]`      | n/a                                     | Yes      |
| `image`       | `image()`       | Should be exactly 1200px &times; 630px. | Yes      |
| `link`        | `string.url()`  | Must be a valid URL.                    | Yes      |
| `startDate`   | `coerce.date()` | Must be in `YYYY-MM-DD` format.         | Optional |
| `endDate`     | `coerce.date()` | Must be in `YYYY-MM-DD` format.         | Optional |

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with &hearts; by [orcololo](https://orcololo.com)!

[License]: https://img.shields.io/github/license/jktrn/astro-erudite?color=0a0a0a&logo=github&logoColor=fff&style=for-the-badge
