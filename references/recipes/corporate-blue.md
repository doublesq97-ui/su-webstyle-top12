# 11 · corporate-blue · Corporate Blue

## Identity
- ID: `corporate-blue`
- Index: 11
- One-liner: Trusted B2B blue: rational, proposal-ready marketing — not an admin app.
- Density: medium | Surface: light

## Intent
- Best for: Enterprise marketing, consulting, sober B2B product pages
- Avoid for: Youth neo-brutal campaigns; pure playful consumer
- Pair with (max 1 secondary): modern-saas-clean
- Never mix with: neo-brutalism primary

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#F8FAFC` | page |
| surface | `#FFFFFF` | cards |
| soft | `#B4C5E4` | soft panels |
| navy | `#14213D` | deep bands |
| accent | `#1E40AF` | titles/CTA |
| accent2 | `#3066BE` | links |
| text | `#1A1A1A` | body |
- Rule: Blue for emphasis; body text near-black for readability.

## Type & Scale
- Stack: "Outfit", "Inter", "Montserrat", "Noto Sans SC", system-ui, sans-serif
- H1: clamp(2.25rem, 4.5vw, 3.5rem) / 700 / -0.025em
- H2: 1.5rem / 650
- Body: 1.0625rem / 400 / 1.6
- Caption: 0.8125rem
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(9vh, 88px)
- Content max: 1120px
- Card padding: 20–24px
- Density target: medium

## Grid
- Strict alignment; KPI/marketing stats OK; not full app chrome
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 8–12px
- Border: 1px #E2E8F0
- Shadow: Soft professional elevation
- Materials: White cards, navy bands, light blue tints

## Image & Icon Language
- Images: Clean office/product, diagrams, abstract geometry cool tone
- Icons: Geometric, consistent stroke
- Forbidden: Admin sidebar as the whole 'style'; use dashboard-ops template instead

## Signature Composition (website — hit ≥1)
1. Navy/blue hero band with clear value prop
2. 3 trust metrics + sober feature grid
3. Proposal-like CTA band

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | trust claim | solid CTA | playful confetti |
| Proof | logos/metrics | alignment | brutal stickers |
| Features | sober grid | readable | empty icon soup |
| CTA | navy or accent solid | one primary | multi neon |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Keep navy bands full-bleed OK

## Anti-patterns
- Pretending the style IS a full ops dashboard shell
- Playful startup chaos
- Gold luxury clichés
- Purple AI mesh

## Style Evidence (website — must be observable)
1. Clear corporate blue accent system
2. High readability black body text
3. Aligned card/metric structure
4. Trust-oriented imagery or diagrams
5. Not neo-brutal and not beige lifestyle

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #F8FAFC; --surface: #FFFFFF; --navy: #14213D;
  --accent: #1E40AF; --soft: #B4C5E4; --text: #1A1A1A;
  --radius-md: 10px;
}
```
