# 09 · neo-brutalism · Neo Brutalism

## Identity
- ID: `neo-brutalism`
- Index: 09
- One-liner: Loud campaigns: thick borders, hard shadows, high chroma.
- Density: medium-high | Surface: light

## Intent
- Best for: Events, youth brands, experimental products
- Avoid for: Serious regulated B2B, quiet luxury
- Pair with (max 1 secondary): playful-startup (careful)
- Never mix with: wabi-beige, apple-premium-minimal

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#FFF5C2` | page |
| surface | `#FFFFFF` | slabs |
| border | `#111111` | 3px rules |
| text | `#111111` | ink |
| accent | `#FF4F1F` | primary blocks |
| accent2 | `#00D084` | secondary |
- Rule: High contrast blocks; black edge always present.

## Type & Scale
- Stack: "Archivo", "Arial Black", system-ui, "Noto Sans SC", sans-serif
- H1: clamp(2.75rem, 8vw, 5.5rem) / 900 / -0.04em / 0.92 uppercase OK
- H2: 1.5–2rem / 800 uppercase
- Body: 1.0625rem / 500 / 1.4
- Caption: 0.75rem mono OK
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(8vh, 72px)
- Content max: 1120px
- Card padding: 18–22px
- Density target: medium-high

## Grid
- Slabs and stamps; slight rotation accents OK
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 0–6px (hard)
- Border: 2–4px solid #111
- Shadow: Hard offset 4–8px 4–8px 0 #111 (no soft blur)
- Materials: Flat ink slabs; sticker energy

## Image & Icon Language
- Images: Bold photography, simple shapes, duotone OK
- Icons: Chunky, simple
- Forbidden: Soft glass SaaS, thin hairlines only

## Signature Composition (website — hit ≥1)
1. Giant heavy type + hard shadow CTA
2. Yellow field with red stamp blocks
3. Skewed card row with thick borders

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | loud type + stamp | hard border language | soft gray cards |
| Features | brutal slabs | offset shadows | glassmorphism |
| CTA | high chroma button | thick border | ghost buttons only |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Keep hard shadows; reduce rotation

## Anti-patterns
- Soft blur shadows
- Muted corporate navy calm
- Hairline-only borders
- Luxury serif gold

## Style Evidence (website — must be observable)
1. Thick black borders visible
2. Hard offset shadows
3. High chroma yellow/red/green
4. Heavy type scale
5. Not soft SaaS

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #FFF5C2; --text: #111111; --accent: #FF4F1F;
  --accent2: #00D084; --border-w: 3px; --shadow: 6px 6px 0 #111;
}
```
