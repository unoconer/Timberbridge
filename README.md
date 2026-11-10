# Timberbridge: Website

A one-page site for Timberbridge, which provides Solo and self-directed 401(k) plan support from an
office in Portland, Oregon. It's static with no dependencies, built with Node and deployed
to **Netlify** at `https://timberbridge.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `timberbridge`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under Oregon law
plus `/thank-you/` and `404.html`.

## Office

Timberbridge is a **storefront office** (`locationType: 'office'`) at **521 SW 11th Ave, Portland,
OR 97205**, phone **(971) 213-7264**. The address shows in the hero card, footer and contact
section, with a map and storefront structured data. Keep it identical to the Google Business Profile.

## Design

- **Palette:** Douglas fir `#1B2B2A` / `#2C6E63`, Rose City rose `#C2475E`, honey timber `#B8895A` / `#E2C9A0`, warm paper `#F8F5F0`
- **Type:** Roboto Slab (display) and Work Sans (text), both self-hosted
- **Logo:** a hexagonal badge with a Douglas fir standing on an arch bridge (`src/brand.mjs`)
- **Hero:** background video over the Steel Bridge and Willamette River (desktop only; phones get the poster image)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
