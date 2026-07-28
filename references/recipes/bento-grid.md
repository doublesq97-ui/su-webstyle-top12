# 08 · bento-grid · Bento Grid

## Identity
- ID: `bento-grid`
- Index: 08
- One-liner: Modular marketing showcase with varied block emphasis.
- Density: medium | Surface: light

## Intent
- Best for: Multi-feature SaaS, product launches
- Avoid for: Single silent flagship object pages
- Pair with (max 1 secondary): modern-saas-clean
- Never mix with: treat as admin dashboard (use template dashboard-ops)

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#EEF4F7` | page |
| surface | `#FFFFFF` | tiles |
| accentSoft | `#C8E6FF` | tile tint |
| text | `#162736` | ink |
| muted | `#5A7386` | secondary |
| accent | `#8BB8D8` | emphasis |
- Rule: Tiles vary size; not all equal.

## Type & Scale
- Stack: system-ui, "Segoe UI", "PingFang SC", sans-serif
- H1: clamp(2.25rem, 4vw, 3.25rem) / 700 / -0.025em
- H2: 1.25rem / 650
- Body: 0.9375–1.0625rem / 400 / 1.5
- Caption: 0.75rem
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(8vh, 72px)
- Content max: 1160px
- Card padding: 16–20px
- Density target: medium

## Grid
- Bento mosaic: 1 large + several small; gap 12–16px
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 16–20px
- Border: Soft or none with shadow
- Shadow: Soft tile shadows
- Materials: White tiles on cool gray-blue ground

## Image & Icon Language
- Images: Product screenshots inside tiles
- Icons: Simple, in-tile
- Forbidden: All tiles same size with empty icons only

## Signature Composition (website — hit ≥1)
1. Hero bento with one dominant tile
2. Feature mosaic with metric tile
3. Screenshot-heavy capability board

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | claim + bento intro | hierarchy | 12 equal empties |
| Features | varied bento | content weight variance | fake admin filters |
| CTA | band under mosaic | clear action | pure decoration |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Stack tiles; keep one large first

## Anti-patterns
- Equal empty icon grids
- Pretending to be operational dashboard
- Brutal thick borders

## Style Evidence (website — must be observable)
1. Visible size hierarchy among tiles
2. Cool modular ground
3. Screenshots or real content in tiles
4. Not a data-ops filter chrome
5. Rounded soft tiles

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #EEF4F7; --surface: #FFFFFF; --text: #162736;
  --accentSoft: #C8E6FF; --radius-md: 18px;
}
```
