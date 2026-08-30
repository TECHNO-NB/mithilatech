# Mithila Tech & IT Solutions — Landing Page

A pixel-close recreation of the reference design, built with:

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4**
- **lucide-react** for icons
- **framer-motion** for scroll/hover/load animations

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `src/app/page.tsx` – assembles all sections
- `src/components/` – Navbar, Hero, BrandLogos, Services, About (incl. Why Choose Us),
  Portfolio, Testimonials, CtaBanner, Footer, SocialIcons
- `src/data/site.ts` – all copy/content in one place (nav links, services, portfolio
  items, testimonials, footer links) — edit here to change text without touching JSX
- `src/app/globals.css` – design tokens (dark background, lime-green accent, borders)

## Notes

- The laptop/phone hero mockup and portfolio thumbnails are built with CSS/SVG
  placeholders (gradients) rather than photos, since no source images were provided.
  Swap them for real screenshots/photos by replacing the placeholder `<div>` blocks
  with `<Image>`/`<img>` tags.
- Social icons are generic custom glyphs (not brand assets).
- Colors/spacing live in `globals.css` `:root` — change `--accent` to re-theme.
