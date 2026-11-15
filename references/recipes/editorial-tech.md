# 02 · editorial-tech · Editorial Magazine / 编辑杂志感

## Identity and use
- The stable ID remains `editorial-tech`; the public name is **编辑杂志感**.
- Use for independent editorial, cultural features, research observations and content-led brands.
- Distinctive grammar: a strong Chinese serif headline, one editorial photograph, visible publication metadata and a disciplined reading grid.
- A warm background alone does not establish this style. Do not return a SaaS dashboard in beige.

## Frozen tokens
| Role | Value |
|---|---|
| Page | `#FAF9F6` |
| Surface | `#FFFFFF` |
| Ink | `#181818` |
| Secondary ink | `#555555` |
| Rule | `#CFCBC4` |
| Small editorial accent | `#A44230` |

Use near-white paper without noise overlays. Text and photography carry almost all contrast. No card shadows. Primary geometry is rectangular; radius 0–4 px.

## Type and grid
- Display: `"Songti SC", "Noto Serif CJK SC", "Source Han Serif SC", serif`; body: a Chinese-capable system sans.
- Desktop display 46–80 px, weight 600, line-height 1.3; supporting headline 24–28 px; body 16–18 px with generous leading.
- Chinese tracking stays at 0. Break the short display headline at a semantic boundary; never squeeze a long sentence into huge type.
- Content max 1120 px. Hero uses two balanced editorial areas: text and one tightly cropped photograph; align their baselines and outer edges. White space has a measured purpose, not giant empty gaps around tiny text.
- Desktop opener: the fixed navigation and opening row fill one viewport together. Show the complete headline, deck, body, CTA and captioned photograph; start product evidence below that boundary. Size the photograph against the available viewport height, not width alone. Let content increase the row height in short windows; never hide overflowing text to force the fit.
- Follow with a rule-separated chapter strip, essay/pull-quote combination, then a quiet CTA. Product demonstrations may follow the editorial opener, keeping real controls readable.

## Photography
Use original or appropriately licensed high-contrast black-and-white photography. For a conceptual story, generate a coherent editorial still life rather than approximating a photo with CSS shapes. Save and package the actual image locally; write meaningful alt text. Documentary images must not be falsely presented as records of a real event.

The live demo uses an original AI-generated paper sculpture, described as an editorial image, not a customer case. Its prompt/provenance is in `docs/assets/README.md`.

## Responsive behavior
Below 760 px, stack the headline and photograph. Keep the figure wide, preserve the caption, keep body text legible and reduce text count before shrinking type. Lists remain lists; avoid introducing a mobile wall of cards.

## Acceptance
1. Black-and-white photography is genuinely present, locally available and intentionally cropped.
2. Chinese serif headline, middle-size deck and readable body establish three visible levels.
3. Publication metadata, image caption and section rules share an alignment grid.
4. Cream is near white, accent sparse, no decorative noise or generic soft-shadow card wall.
5. Interactive demo works at desktop and mobile widths without overflow.
6. At 1440×900, 1280×800 and 1440×960, navigation plus the complete opening composition occupies the first screen. The product demonstration begins below it. Narrow or short windows retain natural document flow.

Artifact / user-layout: retain the user's structure and apply only this skin, editorial hierarchy and evidence photography when it helps the content.
