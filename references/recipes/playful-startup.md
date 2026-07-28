# 12 · playful-startup · Playful Startup

## Identity
- ID: `playful-startup`
- Index: 12
- One-liner: Bright expressive consumer energy with clear product value.
- Density: medium | Surface: light

## Intent
- Best for: Education, community, consumer products
- Avoid for: Heavy enterprise trust-only contexts
- Pair with (max 1 secondary): notion-figma-friendly
- Never mix with: corporate-blue as equal chaos mix

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#FFF7EE` | warm page |
| surface | `#FFFFFF` | cards |
| text | `#2B2B2B` | ink |
| accent | `#FF6B6B` | primary |
| accent2 | `#71D8C9` | secondary |
| accent3 | `#FFBD59` | tertiary |
- Rule: Playful accents, still one primary CTA color.

## Type & Scale
- Stack: system-ui, "Segoe UI", "PingFang SC", sans-serif
- H1: clamp(2.5rem, 5vw, 3.75rem) / 750 / -0.03em / 1.05
- H2: 1.5rem / 700
- Body: 1.0625rem / 400 / 1.55
- Caption: 0.8125rem
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(9vh, 88px)
- Content max: 1080px
- Card padding: 18–22px
- Density target: medium

## Grid
- Irregular friendly shapes OK; keep reading order
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 16–24px pill-friendly
- Border: Soft warm
- Shadow: Soft colorful ambient OK if light
- Materials: Warm cream, rounded cards, simple shapes

## Image & Icon Language
- Images: Simple illustrations, people, product fun
- Icons: Rounded, colorful sparingly
- Forbidden: Cold swiss only posters as whole language

## Signature Composition (website — hit ≥1)
1. Big friendly headline + blob/shape accent  
2. Rounded feature cards with icons  
3. Warm CTA pill

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | expressive claim | product value clear | pure chaos no CTA |
| Features | rounded modules | hierarchy | empty stickers |
| CTA | bright pill | one primary | 5 competing CTAs |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Pills full width OK

## Anti-patterns
- Unreadable confetti  
- Serious navy-only corporate freeze  
- Brutal black frames as default

## Style Evidence (website — must be observable)
1. Warm light base  
2. Coral/mint/amber accents  
3. Rounded soft UI  
4. Approachable type  
5. Product value still clear

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.  
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #FFF7EE; --surface: #FFFFFF; --text: #2B2B2B;
  --accent: #FF6B6B; --accent2: #71D8C9; --accent3: #FFBD59;
  --radius-md: 18px;
}
```
