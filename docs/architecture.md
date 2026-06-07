# Architecture Notes

This site is intentionally built as a static Astro project. The goal is reliability, fast deployment, and easy review rather than backend complexity.

## Core Structure

- `src/data/clinic.ts`: canonical public clinic data, including names, contact details, hours, map links, ratings snapshot, and verification IDs.
- `src/content/pages`: Markdown pages for about, FAQ, equipment, first visit, and privacy policy.
- `src/content/procedures`: typed Markdown procedure content used for standalone pages and service listings.
- `src/pages/en` and `src/pages/ko`: localized routes with explicit English/Korean prefixes.
- `src/components/seo`: canonical metadata, hreflang, Open Graph, structured data, and LLM discovery links.
- `public`: static files that need stable URLs, including `robots.txt`, `_headers`, image assets, and LLM-facing summaries.

## Content Flow

Procedure content is authored once in Markdown frontmatter/body, then used for:

- Standalone routes such as `/en/procedures/implants`.
- Homepage procedure cards.
- Service index pages.
- Modal content fetched from same-origin static pages.

Supplementary procedure pages can exist without appearing as primary cards when their frontmatter sets `featured: false`.

## SEO And Discovery

The site combines conventional and AI-facing discovery:

- Canonical URLs and hreflang alternates for English/Korean routes.
- Dentist/MedicalBusiness JSON-LD with opening hours and public contact data.
- FAQ and breadcrumb JSON-LD.
- Sitemap generation through `@astrojs/sitemap`.
- `llms.txt`, `llms-full.txt`, and `llms-ko.txt` for concise machine-readable summaries.
- Explicit cache/security headers for static deployment.

## Verification

The expected review path is:

```sh
npm ci
npm run check
npm run build
npm run verify:dist
```

The dist verifier checks that key pages and public discovery files exist after build, and that generated HTML contains canonical metadata, hreflang links, structured data, and LLM discovery links.
