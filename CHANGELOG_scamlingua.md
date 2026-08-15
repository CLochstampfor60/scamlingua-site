# Changelog — scamlingua.org

All notable changes to the ScamLingua disclosure site. Format: dated entries, newest first.
(Repository history: `git log`. This file summarizes user-visible and structural changes.)

## 2026-08-15
- **Status notice added** at the top of `<main>`, above "What is COVA-X?" (`.status-notice`, `role="note"`):
  one short paragraph stating what the artifact is (synthetic research dataset, no real victim data,
  released for non-commercial research use under the stated access terms) and what it is not (not a
  certified benchmark, not a safety or detection product, not legal or compliance advice, no regulatory
  standing), plus publisher attribution (independent academic research — Lochstampfor & Roy). Framed so
  downstream researchers and citing parties don't over-read the artifact's standing. Modeled on the
  "Status notice" convention at tuteliq.ai/standard.
- Styling: quietest register on the page — `--card` background with a neutral `--muted` left border,
  .9375rem type — deliberately below the blue `.verification-note` and the gold must-read callouts, so
  it reads as scope-setting fine print rather than a banner. Single-page site, so the one placement
  covers both the landing area and the dataset section. Mobile padding override and print-background
  rule added; no CSP change.
- **Gold/muted text legibility pass (light theme especially).** Gold was serving two jobs at once —
  decorative rules and actual reading text — and the single `--gold` value was tuned for the first.
  Measured on the light surfaces it was **4.71:1 on `--card`, 4.38:1 on `--paper`, 4.33:1 on
  `--badge-bg`**: at or *below* the 4.5:1 AA floor, while carrying the smallest type on the site
  (11px mono, uppercase, weight 400–500, tracked to .08–.1em). `--muted` sat in the same band
  (4.46–4.85:1) under the footer and caption text. Borderline contrast on tiny tracked-out monospace
  is what read as "narrow / washed out."
  - **Token split** rather than a global darken: `--gold`/`--muted` keep their original values and
    now mean *decoration only* (bars, hairlines, focus rings, borders, disc bullets); new
    `--gold-ink`/`--muted-ink` carry all text. Nothing about the page's temperature or its gold
    accent rhythm changes — no bar, rule, or ring shifted. Light: `--gold-ink` `#5C4512`
    (**7.86–8.55:1**), `--muted-ink` `#4F5348` (**6.84–7.43:1**) — both now clear AAA on body copy.
    Dark gold was already comfortable (**7.74–9.28:1**) and keeps its hue; only `--muted-ink` is
    lifted, `#7F93A8` → `#9AAFC4` (4.74–5.69:1 → **6.64–7.97:1**).
  - **Type scale on the mono micro-labels** (`.eyebrow`, `.synthetic-notice .label`, `.trust dt`,
    `.status-notice .label`): .7rem → .8125rem (eyebrow .75 → .875rem), weight 400/500 → **600**,
    and letter-spacing *reduced* .08–.1em → .06em. Heavy tracking is what thins out small mono —
    the glyphs stop grouping into words. Bigger + heavier + tighter reads as more solid, not louder.
    IBM Plex Mono 600 added to the Google Fonts request (verified served, so no faux-bold synthesis).
  - **Small copy bumped off the floor:** footer .875 → .9375rem, `.footer-meta` .8125 → .875rem,
    `.pipeline-figure figcaption` and `.sample-caption` .8125 → .875rem (both with line-height 1.6).
    `.request-card li::marker` moved to `--gold-ink` — ordered-list numerals are read, not decorative.
  - Approach borrowed from the résumé page's navy/gold palette work, which reached the same
    conclusion independently: gold is a good decorative color and a poor text color on near-white,
    so there it is used as *text* only in dark mode. Contrast ratios recorded inline in `styles.css`
    per that page's convention.
- **Follow-up: warm cast removed from `--muted-ink`.** The first pass darkened `--muted` in place
  (`#6B6F63` → `#4F5348`), which fixed the contrast but kept the hue — **82°, yellow-green** — so the
  footer and captions still read visibly gold-tinted against body copy sitting at **213°**. Corrected
  to `#455060` (**216°**, matching the `--body` slate family at lower saturation, **7.09–7.70:1**).
  `--muted-ink` is now a lighter sibling of the body ink rather than a different, warmer one; the
  warm `--muted` survives untouched for hairlines and borders, where the parchment cast belongs.
- **Type scale introduced (`--fs-label/-fine/-small/-base/-lead`).** The page had accumulated eight
  sizes (.7/.75/.8125/.875/.9375/1/1.0625/1.125rem) with no rule about which meant what, so
  elements of equal rank landed a half-step apart — the eyebrow at .75rem beside sibling labels at
  .7rem, secondary text at .875rem in one section and .9375rem in another. All prose and UI text now
  resolves to one of five steps. Deliberate exceptions, documented inline: `h1`/`h2` (serif display,
  sized against the layout), `#theme-toggle` (sizes a glyph), `.sample-record` (preformatted code
  sized against its container to control horizontal overflow).
  - Net effect on the small copy the reader was squinting at: footer prose .875 → **1rem**,
    `.footer-meta`/captions/citation .8125 → **.9375rem**, all four mono labels unified at
    **.8125rem** (from a mix of .7 and .75rem).
  - `footer h2` moved .0625rem up to `--fs-base` so it still leads its own prose — footer body had
    risen to meet it, and a heading the same size as its paragraph reads as a bold sentence.
  - **Mobile now shifts the tokens, not the rules.** The 480px block previously re-declared `body`,
    `.subhead` and `.citation-block` by hand, which is exactly how sizes drift apart — one gets
    adjusted, its siblings don't. It now steps the whole scale down together and the relationships
    survive the breakpoint. `--fs-label` deliberately holds at 13px: shrinking uppercase mono
    further is what caused the original legibility problem.
- **`.trust dt` set to weight 500** (trialling the lighter option against the 600 used by callout
  `.label`s). Recorded as intentional hierarchy rather than drift: these are `dl` field labels naming
  the content beneath them, so they sit a step below a callout's own heading. Same family, size,
  tracking and color — weight is the only variable carrying the rank. Revert to 600 if they read as
  too recessive next to the header's other elements.

### Parking lot (not built — recorded for future reference)
- **Separate dataset page.** Considered 2026-08-15 while placing the status notice. Deferred: the
  site is a single `index.html`, so the one notice above "What is COVA-X?" covers both the landing
  area and the dataset section. If a dedicated dataset page (or an external dataset landing page
  worth linking out to) is added later, the `.status-notice` block is self-contained markup + one
  CSS class and drops in unchanged — it should appear on *both* pages rather than move, since the
  framing matters most at whichever page a downstream researcher lands on first. Revisit if the
  dataset gets a DOI/repository home (Zenodo, HuggingFace, institutional repository) that warrants
  its own page.

## 2026-07-30
- **Verification fast-lane tip added** to the requesting-access card (`.verification-note`, between
  the request steps and the response-time callout): requests from institutional email addresses are
  processed fastest; students encouraged to CC their supervising professor; personal-email requests
  welcome but may involve a brief affiliation follow-up. Formalizes the two-tier verification
  doctrine (self-verifiable footprint vs. institution-verified via domain + advisor confirmation)
  without imposing a social-media or hard-documentation requirement on requesters.
- Styling: `--badge-bg` background with blue `--accent` left border — deliberately one register
  quieter than the gold-flagged callouts (`.response-note`, `.citation-block`) to preserve the
  gold = must-read / blue = informational hierarchy. No CSP change; no mobile override needed
  (inherits request-card padding).

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
