---
name: ScamLingua
description: Public disclosure page for COVA-X, a fully synthetic research dataset for scam detection.
colors:
  deep-navy-ink: "#122A40"
  slate-body: "#3D4B5C"
  slate-muted-ink: "#455060"
  warm-gray: "#6B6F63"
  steady-blue: "#2E6DA4"
  steady-blue-deep: "#1F4E79"
  muted-gold: "#8A6B1F"
  muted-gold-ink: "#5C4512"
  warm-parchment: "#F3F0E7"
  ivory: "#FBF8F0"
  warm-hairline: "#DFD8C6"
  sky-tint: "#E7F0F7"
  dark-ink: "#E6EEF6"
  dark-body: "#B7C5D5"
  dark-muted: "#7F93A8"
  dark-muted-ink: "#9AAFC4"
  dark-steady-blue: "#6FA8DC"
  dark-link-blue: "#8FBCE8"
  dark-gold: "#D6B76A"
  dark-paper: "#0D1726"
  dark-card: "#142235"
  dark-hairline: "#263A52"
  dark-sky-tint: "#14283D"
typography:
  display:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Source Serif 4, Georgia, serif"
    fontSize: "1.375rem"
    fontWeight: 600
  title:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Source Sans 3, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "IBM Plex Mono, monospace"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.06em"
rounded:
  bar: "2px"
  sm: "6px"
  md: "8px"
  pill: "999px"
spacing:
  xs: "0.75rem"
  sm: "1rem"
  md: "1.25rem"
  lg: "1.5rem"
  xl: "2.5rem"
components:
  button-primary:
    backgroundColor: "{colors.deep-navy-ink}"
    textColor: "{colors.ivory}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.3rem"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.deep-navy-ink}"
    rounded: "{rounded.md}"
    padding: "0.7rem 1.3rem"
  card:
    backgroundColor: "{colors.ivory}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  notice-disclosure:
    backgroundColor: "{colors.sky-tint}"
    textColor: "{colors.deep-navy-ink}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.25rem"
  notice-status:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.slate-body}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.25rem"
  citation-block:
    backgroundColor: "{colors.warm-parchment}"
    textColor: "{colors.deep-navy-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "1rem 1.25rem"
  theme-toggle:
    backgroundColor: "{colors.ivory}"
    textColor: "{colors.deep-navy-ink}"
    rounded: "{rounded.pill}"
    width: "44px"
    height: "44px"
---

# Design System: ScamLingua

## Overview

**Creative North Star: "The Public Record"**

The site reads like a published, citable disclosure: everything is stated and nothing is staged. It is plain, factual, calm, and transparent. A single narrow column of serif headings and sans body copy sits on warm parchment, with ivory panels for the header, footer, and cards. Hierarchy comes from type weight, color, and short gold rules, not from size jumps, imagery, or effects.

Density is moderate and reading-first: one column, generous vertical spacing between sections, and fine print kept legible rather than hidden. The disclosure itself is the hero. The first thing a visitor meets after the name is the statement that all data is synthetic, framed in the one tinted notice on the page.

Confirmed visual rejections: no dark or neon "hacker" styling, padlocks, circuit patterns, glows, stock photos, or gradients. The logo is never recolored, stretched, or given effects.

**Key Characteristics:**
- Single centered reading column (46rem max).
- Warm parchment ground with ivory panels, separated by warm hairlines.
- Serif display headings underlined by a short gold bar.
- Uppercase mono kickers label every notice and field group.
- Flat surfaces; depth comes from tone and hairlines.
- Full light and dark themes, following the OS by default.

## Colors

A warm paper palette carrying a cool navy-and-blue voice, with gold used sparingly as a marker.

### Primary
- **Steady Blue** (light / dark): The one accent. Used for the disclosure notice's border, the evaluation card's top rule, link hover, and keyboard focus outlines on links. **Steady Blue Deep** is the link color and the key color in the sample record.

### Secondary
- **Muted Gold**: Decorative only: heading underline bars, list markers, left rules on the citation block and response note, and the button hover ring. **Muted Gold Ink** is the deeper variant for any gold text (mono kickers, numbered-list numerals).

### Neutral
- **Deep Navy Ink**: Headings, strong text, and the filled primary button.
- **Slate Body**: Running body copy.
- **Slate Muted Ink**: Secondary text you read: captions, fine print, footer prose, the terms acknowledgment.
- **Warm Gray**: Decorative muted tone only, such as the status notice's left rule.
- **Warm Parchment**: Page background; also the inset ground for citation blocks and notices placed inside cards.
- **Ivory**: Header, footer, cards, and the status notice.
- **Warm Hairline**: All borders and dividers, solid or dashed.
- **Sky Tint**: Background of the data-disclosure notice and the verification tip.

### Named Rules
**The Read-It-or-Not Rule.** Gold and warm gray are for things you cannot read (bars, rules, markers, rings). Anything you read uses the ink variants (Muted Gold Ink, Slate Muted Ink), which clear AA with margin on every surface.

**The One Accent Rule.** Steady Blue is the only accent hue. Gold marks and divides; it never competes as a second accent.

## Typography

**Display Font:** Source Serif 4 (with Georgia, serif)
**Body Font:** Source Sans 3 (with system-ui, sans-serif)
**Label/Mono Font:** IBM Plex Mono (with monospace)

**Character:** A scholarly serif for headings over a neutral humanist sans, with Plex Mono reserved for labels, IDs, paths, and citations, like a filing stamp on a document.

### Hierarchy
- **Display** (700, clamp 1.6–2.5rem, 1.2): The single page title, with a 4.5rem gold bar beneath.
- **Headline** (600, 1.375rem): Section headings in the main column, each with a 2.5rem gold bar.
- **Title** (600, 1.125rem, 1.4, sans): Card headings, such as an evaluation title. Footer headings use the sans at body size with a short gold dash before them.
- **Body** (400, 1.0625rem, 1.65): All running prose, within the 46rem column.
- **Label** (600, 0.8125rem, 0.06em tracking, uppercase, mono): Notice kickers, field-group labels, and fact captions. Field labels in the trust strip drop to weight 500 to sit a step below callout labels.

The rest of the text uses a five-step scale: label (0.8125rem), fine (0.9375rem), small (1rem), base (1.0625rem), lead (1.125rem). Below 480px every step but label shifts down together.

### Named Rules
**The Five-Step Rule.** Every piece of prose and UI text resolves to one of the five scale steps. Only the serif headings, the theme-toggle glyph, and the preformatted sample record sit outside it.

**The Rank-by-Weight Rule.** Rank is carried by color and weight, not size, so the top of the scale stays deliberately tight.

**The Mono Floor Rule.** Uppercase mono labels never shrink below 0.8125rem (13px), on any screen.

## Layout

One centered column, max 46rem wide with 1.25rem side padding. The header (ivory, bottom hairline) holds the logo, a mono eyebrow, the title, the subhead, the disclosure notice, the primary call to action, and a trust strip of researchers, publications, evaluations, and contacts. The trust strip wraps as flexible columns (min 15rem each) above a dashed hairline. The main column follows with sections 2.5rem apart, and the footer (ivory, top hairline) carries the fine-print statements.

At 480px and below, the header padding tightens, the logo drops from 52px to 38px, the trust strip stacks into a single column, and the evaluation fact row stacks with each number beside its caption. Smooth scrolling and transitions are disabled under reduced-motion preferences. In print, the theme toggle, skip link, and in-page jump button are hidden, surfaces go white, and links print black and underlined.

## Elevation & Depth

Flat by default. Depth comes from tonal layering (parchment page, ivory panels, parchment insets within cards) and warm hairlines, plus colored left rules (4–5px) that mark a notice's role. There are no drop shadows.

### Named Rules
**The Gold Ring Rule.** The 3px gold ring around a button (`box-shadow: 0 0 0 3px` Muted Gold, with a 1px lift) is the interaction indicator, not elevation. It must appear on keyboard focus (`:focus-visible`) as well as on hover.

**The No-Drop-Shadow Rule.** Nothing casts a shadow. If a surface needs separation, use a tone step or a hairline.

## Shapes

Gently rounded rectangles throughout: 6px on notices, callouts, and the citation block; 8px on cards, buttons, the sample record, and the pipeline figure. Decorative bars use a 2px radius. The theme toggle is the only fully round element (pill, 44px minimum touch target). Borders are 1px hairlines; role is signaled by a thicker colored left or top rule rather than by fill.

## Components

Plain and dependable: obvious, consistent controls that never surprise; function over flourish.

### Buttons
- **Shape:** gently rounded (8px).
- **Primary:** filled Deep Navy Ink with Ivory text, 600 weight, small text step, padding 0.7rem by 1.3rem. Used for the request call to action and the main PDF link.
- **Secondary:** transparent with a 1.5px Deep Navy Ink outline and ink text, same box.
- **Hover / Focus:** the gold ring and a 1px lift (see The Gold Ring Rule). Keyboard focus also draws a 2px gold outline offset by 3px.

### Cards / Containers
- **Corner Style:** 8px.
- **Background:** Ivory on the parchment page.
- **Shadow Strategy:** none (see Elevation & Depth).
- **Border:** 1px Warm Hairline. The evaluation card adds a 4px Steady Blue top rule.
- **Internal Padding:** 1.5rem (1.25rem on small screens).

### Notices
- **Data disclosure:** Sky Tint background, Steady Blue border with a 5px left rule, Deep Navy Ink text at 600 weight, gold mono kicker. The strongest container on the page; there is only one.
- **Status notice:** Ivory background, hairline border with a 4px Warm Gray left rule, body text at the small step, muted mono kicker. Deliberately quieter: it sets expectations rather than making the hero claim. Inside a card it switches to the parchment ground.
- **Verification tip and response note:** inset callouts in the request card, with Steady Blue and Muted Gold left rules respectively. The response note is centered, full-contrast, and one step larger so the review time is hard to miss.

### Citation Block
Plex Mono at the fine step on a parchment inset with a 4px Muted Gold left rule. Holds the terms confirmation statement and the formal citation, which visitors copy verbatim.

### Trust Strip
A definition list under the hero: mono field labels in Muted Gold Ink over short bulleted lists with gold markers, wrapping into columns and stacking on small screens.

### Evaluation Facts
A row of three facts between hairlines: large serif numerals over mono captions, separated by vertical hairlines. On small screens each fact becomes a line, with the number beside its caption.

### Navigation
There is no navigation bar. A skip link (navy pill, gold focus outline) appears on keyboard focus, and the round theme toggle sits top-right in the header, showing the icon for the mode you would switch to.

## Do's and Don'ts

### Do:
- **Do** keep one reading column at 46rem max, with sections 2.5rem apart.
- **Do** set every text size from the five-step scale; adjust the scale tokens at breakpoints, not individual elements.
- **Do** use the ink variants (Muted Gold Ink, Slate Muted Ink) for any gold or muted text, and keep decorative gold and warm gray for bars, rules, and markers.
- **Do** label notices and field groups with an uppercase Plex Mono kicker at 0.8125rem.
- **Do** separate surfaces with a tone step (parchment / ivory) and a 1px warm hairline.
- **Do** show the gold ring on keyboard focus as well as hover.
- **Do** keep the data-disclosure notice the single most prominent container in the header.
- **Do** maintain both light and dark themes for every new element.

### Don't:
- **Don't** use dark or neon "hacker" styling, padlocks, circuit patterns, glows, stock photos, or gradients.
- **Don't** add drop shadows.
- **Don't** recolor, stretch, or add effects to the logo.
- **Don't** introduce a second accent hue; gold marks, it doesn't compete.
- **Don't** set uppercase mono labels below 0.8125rem.
- **Don't** use a 700-weight Source Sans 3; only 400 and 600 are loaded. Use the serif for heavier numerals.
