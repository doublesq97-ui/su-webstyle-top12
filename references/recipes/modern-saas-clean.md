# 01 · modern-saas-clean · Modern SaaS Clean

## Identity
- ID: `modern-saas-clean`
- Index: 01
- One-liner: Neutral paper SaaS with one restrained teal accent.
- Density: medium | Surface: light

## Intent
- Best for: SaaS, AI tools, B2B product marketing
- Avoid for: Loud neo-brutal campaigns; fake luxury gold
- Pair with (max 1 secondary): bento-grid
- Never mix with: neo-brutalism (unless intentional tension)

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#FAFBFC` | page |
| surface | `#FFFFFF` | cards |
| border | `#E8EAED` | hairlines |
| text | `#111827` | primary |
| muted | `#6B7280` | secondary |
| accent | `#0F766E` | CTA / links only |
| accentSoft | `#F0FDFA` | chips, small only |
- Rule: Accent fill < ~8% of viewport; no large green page wash.

## Type & Scale
- Stack: system-ui, -apple-system, "Segoe UI", "PingFang SC", "Noto Sans SC", sans-serif
- H1: clamp(2.25rem, 4.5vw, 3.5rem) / 650 / -0.025em / 1.1
- H2: clamp(1.35rem, 2.2vw, 1.75rem) / 600 / -0.02em
- Body: 1.0625rem / 400 / 1.6
- Caption: 0.8125rem / 500 / 1.4
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(10vh, 96px)
- Content max: 1120px
- Card padding: 20–28px
- Density target: medium

## Grid
- 12-col conceptual; hero often split text + product visual
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 10–14px (md 12px)
- Border: 1px solid border token; soft not heavy
- Shadow: 0 12px 32px rgba(17,24,39,.06) restrained
- Materials: Solid white cards on cool paper; no default glass

## Image & Icon Language
- Images: Clean product UI screenshots, soft light
- Icons: 1.5–2px stroke, rounded, monochrome or accent
- Forbidden: Purple mesh gradients, candy 3D stickers

## Signature Composition (website — hit ≥1)
1. Split hero: claim left, product frame right  
2. Shallow feature row (3) under full-viewport hero  
3. Soft proof strip (logos / quote) with air

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | split or centered product | nav, claim, CTA, visual | bento wall |
| Features | 3 equal or 1+2 | clear hierarchy | 9 tiny equal cards |
| Proof | logos or quote | restraint | 6 fake KPIs |
| CTA | single band | one primary | rainbow buttons |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Full-width primary CTA OK

## Anti-patterns
- Large green/teal background wash  
- Purple AI gradient skins  
- Equal 3×N empty card grids  
- Glassmorphism on every panel

## Style Evidence (website — must be observable)
1. Page base is neutral gray-white, not green-tinted  
2. Accent appears mainly on CTA/links/chips  
3. Cards use soft radius + light shadow  
4. At least one full-viewport composed section  
5. No mesh gradient default skin

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.  
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #FAFBFC; --surface: #FFFFFF; --border: #E8EAED;
  --text: #111827; --muted: #6B7280; --accent: #0F766E;
  --radius-md: 12px; --shadow: 0 12px 32px rgba(17,24,39,.06);
}
```
