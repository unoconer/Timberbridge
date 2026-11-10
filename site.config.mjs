/**
 * ============================================================================
 *  TIMBERBRIDGE — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://timberbridge.netlify.app', // no trailing slash
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Timberbridge',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the assumed business name is registered (Oregon Secretary of State)
    owner: null, // optional
    foundingYear: null,

    phone: '(971) 213-7264',
    phoneE164: '+19712137264',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: '521 SW 11th Ave', // real, staffed office — add suite if any
      addressLocality: 'Portland',
      addressRegion: 'OR',
      postalCode: '97205',
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Portland, OR'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Pacific Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  form: { name: 'consultation' },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Pexels video 6838685 — aerial over the Steel Bridge and Willamette River, Portland (Pexels License)
    heroVideo: { webm: '/assets/media/hero.webm', mp4: '/assets/media/hero.mp4', poster: '/assets/media/hero-poster.webp' },
    // Stock photos from Pexels (Pexels License), no identifiable people — sources in docs/MEDIA.md
    images: {
      hood: { src: '/assets/media/hood.webp', pos: '50% 40%', alt: 'Portland lit up at dusk with Mount Hood under an orange sky' },
      river: { src: '/assets/media/river.webp', pos: '60% 60%', alt: 'Downtown Portland and the Hawthorne Bridge across the Willamette River' },
      bridges: { src: '/assets/media/bridges.webp', pos: '50% 55%', alt: 'Aerial view of Portland bridges crossing the Willamette River' },
    },
  },
};
