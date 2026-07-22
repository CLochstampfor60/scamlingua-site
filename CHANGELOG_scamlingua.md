# Changelog — scamlingua.org

All notable changes to the ScamLingua disclosure site. Format: dated entries, newest first.
(Repository history: `git log`. This file summarizes user-visible and structural changes.)

## 2026-07-22
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
