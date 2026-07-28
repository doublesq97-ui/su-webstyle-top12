# 04 · stripe-ish-business · Stripe-ish Business

## Identity
- ID: `stripe-ish-business`
- Index: 04
- One-liner: Commercial platform energy with disciplined color planes.
- Density: medium | Surface: light

## Intent
- Best for: Fintech, marketplaces, enterprise platforms
- Avoid for: Quiet mono hardware ads only
- Pair with (max 1 secondary): modern-saas-clean
- Never mix with: neo-brutalism as equal primary

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#F7F9FF` | page |
| surface | `#FFFFFF` | cards |
| text | `#172033` | ink |
| muted | `#5B6B86` | secondary |
| accent | `#6957FF` | primary brand |
| accent2 | `#20C997` | secondary accent |
- Rule: Geometry and color blocks are composed, not random gradients.

## Type & Scale
- Stack: system-ui, "Segoe UI", "PingFang SC", sans-serif
- H1: clamp(2.5rem, 5vw, 3.75rem) / 700 / -0.03em
- H2: 1.5–1.75rem / 650
- Body: 1.0625rem / 400 / 1.6
- Caption: 0.8125rem
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(10vh, 96px)
- Content max: 1120px
- Card padding: 20–24px
- Density target: medium

## Grid
- Hero + full-viewport platform section; color planes as structure
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 12–16px
- Border: Soft #D9E2F2
- Shadow: Soft elevated cards
- Materials: White cards on cool white; vivid but controlled planes

## Image & Icon Language
- Images: Payment/data UI, abstract geometric planes
- Icons: Friendly geometric
- Forbidden: Brutal thick black borders as default

## Signature Composition (website — hit ≥1)
1. Confident hero with geometric color plane
2. Full-viewport platform/features composition (not shallow card row glued to hero)
3. Data/payment module as second screen

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | commercial claim + plane | CTA, visual | shallow only |
| Platform | full-viewport modules | complete second screen | clipped card row under hero |
| CTA | strong solid accent | clear action | muted weak link only |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Stack planes; keep accent discipline

## Anti-patterns
- Uncontrolled multi-hue gradients
- Second section as thin leftover row
- Brutal sticker energy

## Style Evidence (website — must be observable)
1. Cool white/blue-tinted base
2. Purple/teal accents used with intent
3. Hero + one full second composition
4. Commercial confidence in type weight
5. No purple mesh sludge

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #F7F9FF; --surface: #FFFFFF; --text: #172033;
  --accent: #6957FF; --accent2: #20C997; --radius-md: 14px;
}
```
