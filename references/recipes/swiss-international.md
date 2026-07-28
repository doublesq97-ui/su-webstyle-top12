# 07 · swiss-international · Swiss International

## Identity
- ID: `swiss-international`
- Index: 07
- One-liner: Rational grid, large sans, tiny high-sat accents.
- Density: medium | Surface: light

## Intent
- Best for: Studios, architecture, culture, portfolios
- Avoid for: Cute consumer chaos
- Pair with (max 1 secondary): editorial-tech
- Never mix with: playful-startup primary

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#F8F8F1` | page |
| text | `#101010` | ink |
| accent | `#0047FF` | tiny marks |
| accent2 | `#FFF200` | rare flash |
| border | `#E6E3D8` | rules |
- Rule: Black/white structure; accent as signal only.

## Type & Scale
- Stack: "Helvetica Neue", Helvetica, Arial, "Noto Sans SC", sans-serif
- H1: clamp(2.75rem, 7vw, 5rem) / 700 / -0.04em / 0.95
- H2: 1.25–1.75rem / 700 uppercase optional
- Body: 1rem / 400 / 1.5
- Caption: 0.75rem mono or sans tracking wide
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(8vh, 80px)
- Content max: 1200px
- Card padding: 16px
- Density target: medium

## Grid
- Hard grid; asymmetric OK if snapped
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 0–4px (sharp preferred)
- Border: Strong rules 1–2px black or ink
- Shadow: None; use rules and blocks
- Materials: Flat ink on paper; poster logic

## Image & Icon Language
- Images: High-contrast photography, maps, diagrams
- Icons: Geometric, minimal
- Forbidden: Soft skeuomorphic shadows, candy UI

## Signature Composition (website — hit ≥1)
1. Giant left-aligned type with vertical rules
2. Asymmetric image + numbered meta
3. Poster-like section with tiny accent square

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | grid poster | huge type | soft SaaS cards |
| Work | strict project grid | alignment | playful blobs |
| CTA | typographic | sharp | rounded candy buttons |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Keep sharp edges; reduce type carefully

## Anti-patterns
- Soft everywhere SaaS
- Random freeform without grid
- Accent flooding

## Style Evidence (website — must be observable)
1. Hard grid / rules visible
2. Large sans impact
3. Tiny accent not full washes
4. Sharp corners dominate
5. Cold rational structure

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #F8F8F1; --text: #101010; --accent: #0047FF;
  --accent2: #FFF200; --radius-md: 2px;
}
```
