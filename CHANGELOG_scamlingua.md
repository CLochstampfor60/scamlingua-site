# Changelog — scamlingua.org

All notable changes to the ScamLingua disclosure site. Format: dated entries, newest first.
(Repository history: `git log`. This file summarizes user-visible and structural changes.)

## 2026-07-23
- **Response-time note promoted to a callout** in the requesting-access card: re-styled `.response-note`
  from muted secondary text to a centered, full-contrast (`--ink`) callout — larger type (1.125rem, 600
  weight), padding, and a gold-accented left border matching `.citation-block` — so the review-alignment
  and 24–72 hour expectation is harder to miss. Sentences split onto two lines (`<br>`); "at least 24–72
  hours" underlined for emphasis.

## 2026-07-22
- **UI/UX pass (UI-UX-Pro-Max review):**
  - Added a **primary hero call-to-action** ("Request dataset access →") anchored to the requesting-access section, so the core action is surfaced above the trust details.
  - Added a **response-time note** in the requesting-access card ("reviewed for research alignment; please allow at least 24–72 hours for a response") as muted secondary text (`.response-note`, `--muted` token) so it sets expectations without competing with the CTA.
  - Added an **accessibility skip-to-content link** (visible on keyboard focus) targeting `<main id="main">`.
  - Added a **generation-methodology figure** to "What is COVA-X?" — `cova_pipeline_architecture.webp` (optimized from a 5.6 MB PNG to ~65 KB, 1600×1033, composited on white so it reads in both light and dark themes), with descriptive alt text and a caption.
  - All styling added to `styles.css` (CSP allows no inline styles); no CSP change needed — the image is same-origin under `img-src 'self'`. Print stylesheet hides the skip link and CTA.
  - Design system deliberately **kept as-is**: academic serif (Source Serif 4) + navy/gold/institutional-blue on warm parchment — already brand-consistent with the resume's navy/gold while preserving the research-paper identity. Periwinkle intentionally not introduced.
- **Analytics added:** GoatCounter (privacy-first, cookieless, open-source) — script beacon plus
  CSP allowances (`script-src gc.zgo.at`, `img-src`/`connect-src scamlingua89.goatcounter.com`).
  No cookies, no personal data collected; dashboard private.
- Fixed GoatCounter script placement (moved to end of `<body>`).
- Identity graph completed: LinkedIn profile added to creator `sameAs` in Dataset JSON-LD.

## 2026-07-21
- Researcher names in trust strip linked to ResearchGate profiles (both authors).
- Dataset JSON-LD enriched: `sameAs` identity links for both creators; `keywords` array added
  for Google Dataset Search discovery.
- CSP tightened: unused `data:` removed from `img-src`.

## 2026-07-18
- `.gitignore` corrected; local-only folders (`internal_docs/`, `archived_index_versions/`)
  untracked from the public repo.
- Repo topics, description, and website field set (GitHub About panel).

## 2026-07-09
- Social share card added: `og-card.png` (1200×630) with `og:image` / `twitter:image` metadata;
  Twitter card upgraded to `summary_large_image`. LinkedIn preview verified via Post Inspector.

## 2026-07-08
- Brand integration: ScamLingua wordmark in header (light + dark variants, theme-aware swap);
  SL shield favicon (transparent PNG); H1 revised to tagline form.
- Contact routing updated to three addresses (requests@ / contact@ / cloch001@odu.edu).
- README brought current (logo with GitHub dark-mode swap, corrected file table, license scope note).
- Fixed invalid `</br>` tag in footer citation.

## 2026-07-06 — Launch
- Initial site: disclosure-forward single page (synthetic-data notice in hero, trust strip,
  request-access terms, fine-print statements, as-is/no-liability line).
- Security posture: strict CSP (`default-src 'none'`), strict referrer policy, noopener links,
  robots.txt + sitemap.xml.
- Machine-readability: identity-first title, schema.org Dataset JSON-LD, Open Graph metadata,
  canonical URL.
- Light/dark theming with OS-preference default; ivory/navy/gold palette.
- Custom domain cutover (Squarespace DNS → GitHub Pages), HTTPS enforced, mail records preserved.
- Launch-day verification: schema validation clean; Google Safe Browsing and VirusTotal baseline
  clean (recorded 2026-07-06).
