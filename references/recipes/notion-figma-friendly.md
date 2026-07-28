# 05 · notion-figma-friendly · Notion / Figma Friendly

## Identity
- ID: `notion-figma-friendly`
- Index: 05
- One-liner: Approachable productivity: soft paper, light modules, friendly microcopy.
- Density: medium | Surface: light

## Intent
- Best for: Collaboration, notes, creators, education
- Avoid for: Cold enterprise-only finance
- Pair with (max 1 secondary): modern-saas-clean
- Never mix with: neo-brutalism primary

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#FBFAF7` | page |
| surface | `#FFFFFF` | blocks |
| border | `#F1EEE7` | lines |
| text | `#22201D` | ink |
| muted | `#7A756C` | secondary |
| accent | `#FFE066` | highlight |
| accent2 | `#91D5FF` | secondary chip |
- Rule: Pastel accents as chips/highlights, not full backgrounds.

## Type & Scale
- Stack: system-ui, "Segoe UI", "PingFang SC", sans-serif
- H1: clamp(2.25rem, 4vw, 3.25rem) / 650 / -0.02em
- H2: 1.4rem / 600
- Body: 1.0625rem / 400 / 1.6
- Caption: 0.8125rem
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(9vh, 88px)
- Content max: 1040px
- Card padding: 16–22px
- Density target: medium

## Grid
- Loose modules; friendly product blocks
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 10–14px
- Border: Soft warm hairline
- Shadow: Very soft or flat with border
- Materials: Warm off-white, light stickers sparingly

## Image & Icon Language
- Images: Friendly product UI, soft illustrations OK
- Icons: Rounded, simple
- Forbidden: Hard brutal black frames

## Signature Composition (website — hit ≥1)
1. Friendly hero with soft block modules
2. Feature chips + light screenshots
3. Low-pressure CTA

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | approachable claim | soft visual | luxury serif gold |
| Modules | playful but clear | hierarchy | chaos stickers only |
| CTA | clear but calm | one primary | aggressive urgency spam |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Keep chip wrapping tidy

## Anti-patterns
- Too cute for credibility
- Rainbow sticker overload
- Dark neon developer skins

## Style Evidence (website — must be observable)
1. Warm off-white base
2. Soft yellow/blue accents as highlights
3. Friendly module language
4. Readable hierarchy still present
5. Not brutal and not corporate navy-only

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #FBFAF7; --surface: #FFFFFF; --text: #22201D;
  --accent: #FFE066; --accent2: #91D5FF; --radius-md: 12px;
}
```
