# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Primary: defensive researchers, academic or industry, who want to request COVA-X.** Their job on the site is to understand what the dataset is, read the access terms, and send a correct request from their institutional email.

**Secondary: paper reviewers and institutions** checking that the project is real, synthetic-only, and responsibly run.

Report readers and the general public are occasional visitors, not the design target.

## Product Purpose

scamlingua.org is the public disclosure page for ScamLingua, independent academic research by Carl Lochstampfor (Old Dominion University) and Dr. Ayan Roy (Christopher Newport University) studying the language of scams to build AI that detects and prevents fraud against older adults.

Success, in order:

1. A qualified researcher understands what COVA-X is, agrees to the non-commercial defensive research terms, and sends a complete request to requests@scamlingua.org from an institutional email.
2. A skeptical visitor (reviewer, institution, or someone who heard the name) concludes this is legitimate research, the data is fully synthetic, and the site is not itself a scam.
3. The site is the landing page for both arXiv preprints, 2604.11752 and 2606.06879, and the COVA-X citation.
4. The independent evaluation reports (Tuteliq Phase 1 public summary, full report, and erratum) are easy to find and read, and independence from the evaluated vendor is clear.

## Positioning

A fully synthetic, conversation-level elder-fraud dataset, shared free for defensive research, with errors and limitations published openly rather than hidden.

## Operating Context

- Researchers request access by email to requests@scamlingua.org; the site's request links open a pre-filled request template. Requests are reviewed for research alignment, and approved requests receive an access code invitation by reply email.
- Dataset access is planned to move to a gated Hugging Face page. Don't design the request flow so it only works by email.
- Visitors arrive from the arXiv preprints, from citations, and from people who heard the project name and want to verify it.
- Evaluation reports are published as PDFs in `reports/` and linked from the evaluations section.

## Capabilities and Constraints

- **Static, no build.** Plain HTML/CSS/JS served by GitHub Pages. External stylesheet and scripts; no frameworks and no build step.
- **Access terms stay in sync.** The terms appear on four surfaces: page prose, JSON-LD, the mailto request body, and the README. They change together.
- **The terms confirmation statement stays character-for-character identical on every surface.**
- **Disclaimers stay prominent:** "All datasets are fully synthetic and AI-generated — no real people, no real data." and "We do not send, facilitate, or endorse scams."
- **Analytics are GoatCounter only.** Add no other trackers.
- **American English spelling throughout.**
- COVA-X conversations are English-language only.

## Brand Commitments

- The brand rules come from a privately held ScamLingua brand guide.
- **Website palette.** Light: paper #F3F0E7, accent #2E6DA4, gold #8A6B1F. Dark: paper #0D1726, ink #E6EEF6, accent #6FA8DC.
- **Fonts.** Source Serif 4 for headings, Source Sans 3 for body, IBM Plex Mono for IDs and paths.
- **Editorial research look.** No dark/neon hacker styling, padlocks, circuit patterns, glows, stock photos, or gradients. White space, strong type hierarchy, one accent at a time.
- **Logo** is never recolored, stretched, or given effects.
- **Mascot.** The dog mascot is allowed on this site (it is for web and outreach only). The mascot asset is not yet in this repository; do not draw or substitute one.
- **Voice.** Plain, factual, calm. No hype or fear language.

## Evidence on Hand

- Preprints: Lochstampfor & Roy (2026), *COVA-X: An Expanded Synthetic Conversation Dataset for Multi-Turn Smishing Detection*, arXiv:2606.06879; and *A Synthetic Conversational Smishing Dataset for Social Engineering Detection*, arXiv:2604.11752. Both are preprints.
- Tuteliq Phase 1 evaluation: `reports/Tuteliq_Evaluation_Summary_Public_Final_2026-10-26_v1.0.pdf`, `reports/Tuteliq_Evaluation_Report_Full_Final_2026-10-26_v1.0.pdf`, and `reports/Tuteliq_Phase1_Erratum_v1.1_2026-10-28.pdf`.
- Generation-methodology figure: `cova_pipeline_architecture.webp`.
- State publication status only as the authors confirm it. Never upgrade a preprint to accepted or published on your own.
- Where the Tuteliq erratum v1.1 corrects a report figure, the erratum wins.

Claims future work must never make:

- That the papers are peer-reviewed or published in a venue.
- Usage numbers: request counts, download counts, user or institution names, or testimonials.
- That COVA-X or any evaluation is a certified benchmark, product, accreditation, audit, or compliance tool, or has regulatory standing.
- Dataset size or statistics beyond what the papers state. Do not introduce new figures.

## Product Principles

1. The request path comes first: every design decision should make it easier for a qualified researcher to send a complete, correct request.
2. Legitimacy is shown, not asserted: institutional affiliation, synthetic-data disclosure, and open limitations do the persuading.
3. Errors and limitations are published, not hidden.
4. Say only what the papers, reports, and existing site already state.

## Accessibility & Inclusion

WCAG 2.2 Level AA is required.
