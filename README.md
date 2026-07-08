<picture>
  <source media="(prefers-color-scheme: dark)" srcset="scamlingua_logo_dark.png">
  <img src="scamlingua_logo.png" alt="ScamLingua" width="420">
</picture>

# ScamLingua — scamlingua.org

Public disclosure page for **ScamLingua**, an academic research project by
Carl Lochstampfor ([Old Dominion University](https://www.odu.edu)) and
Dr. Ayan Roy ([Christopher Newport University](https://cnu.edu)) studying the
language of scams to build AI that detects and prevents fraud against older
adults.

> **All datasets are fully synthetic and AI-generated — no real people, no
> real data.** We do not send, facilitate, or endorse scams.

**Live site:** https://scamlingua.org

## What this repository is (and isn't)

This repository contains **only the static website** served at scamlingua.org
via GitHub Pages. It does **not** contain any dataset, research data, code
from the research pipeline, or generated conversations.

| File | Purpose |
|---|---|
| `index.html` | Single-page disclosure site |
| `styles.css` | Styling (light/dark themes) |
| `theme.js` | Light/dark mode toggle |
| `favicon.png` | Browser tab icon (SL shield) |
| `scamlingua_logo.png` / `scamlingua_logo_dark.png` | Wordmark logo (light / dark theme) |
| `robots.txt` / `sitemap.xml` | Crawler configuration |
| `CNAME` | GitHub Pages custom-domain binding |

No build step, no dependencies, no frameworks — plain HTML/CSS/JS.

## Publications

- Lochstampfor, C., & Roy, A. (2026). *COVA-X: An Expanded Synthetic
  Conversation Dataset for Multi-Turn Smishing Detection.*
  [arXiv:2606.06879](https://arxiv.org/abs/2606.06879)
- Lochstampfor, C., & Roy, A. (2026). *A Synthetic Conversational Smishing
  Dataset for Social Engineering Detection.*
  [arXiv:2604.11752](https://arxiv.org/abs/2604.11752)

## Contact (<b>Attn: Carl Lochstampfor)</b>

- **Dataset access requests:** requests@scamlingua.org — request a copy of the COVA-X dataset
- **General questions about COVA-X:** contact@scamlingua.org — questions about the project or dataset
- **Academic & research inquiries:** cloch001@odu.edu — collaboration or correspondence with the researcher

## Dataset access

**Dataset requests are accepted exclusively at requests@scamlingua.org.**
Requests made through GitHub — issues, pull requests, or otherwise — will
not receive a response. Access is granted by request for non-commercial
research use; redistribution is not permitted; citation is required:

> Lochstampfor, C., & Roy, A. (2026). COVA-X. arXiv:2606.06879.
> https://arxiv.org/abs/2606.06879

## Responsible use

The dataset exists exclusively for defensive research — detection,
prevention, education, and the protection of potential victims. It is not to
be used to create, refine, train, or deploy actual scams. To report
suspected misuse of the data or of this project's name, contact
**contact@scamlingua.org**.

## License

The website code in this repository (HTML/CSS/JS) is released under the
[MIT License](LICENSE). This license covers the website source only — it
does **not** apply to the COVA-X dataset or any research materials, which
are distributed separately under the terms described above. The ScamLingua
name and logo are project identifiers and are not covered by the MIT
license.

---

© 2026 ScamLingua · Carl Lochstampfor (ODU) & Dr. Ayan Roy (CNU)
