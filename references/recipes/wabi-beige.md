# 10 · wabi-beige · Wabi Beige

## Identity
- ID: `wabi-beige`
- Index: 10
- One-liner: Calm earth paper: quiet premium lifestyle, not fake gold luxury.
- Density: low | Surface: light

## Intent
- Best for: Hospitality, lifestyle, calm personal brands, natural products
- Avoid for: Neon tech, dense trading hero
- Pair with (max 1 secondary): apple-premium-minimal
- Never mix with: neo-brutalism, playful-startup loud

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#EFEAE0` | oat paper |
| surface | `#D8CFC0` | soft blocks |
| text | `#3A352F` | ink |
| muted | `#6B6253` | secondary |
| accent | `#A8997E` | rules / marks |
| deep | `#6B6253` | small deep anchors |
- Rule: Low saturation earth only; no gold foil clichés.

## Type & Scale
- Stack: "Cormorant Garamond", "Noto Serif SC", Georgia, serif for titles; "Inter", "PingFang SC", sans for body
- H1: clamp(2.25rem, 5vw, 3.75rem) / 500 / -0.01em / 1.12 (light serif; avoid black weight)
- H2: 1.35–1.75rem / 500
- Body: 1.0625rem / 300–400 / 1.7
- Caption: 0.8125rem
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(12vh, 112px)
- Content max: 960px
- Card padding: 24–32px
- Density target: low

## Grid
- Airy single column or soft 2-col; ≥45% negative space intent
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 8–12px soft or none
- Border: 0.5–1px accent hairline
- Shadow: None or very soft warm
- Materials: Matte paper, natural textures

## Image & Icon Language
- Images: Natural light interiors, still life, materials; low contrast warm
- Icons: Sparse line icons, warm gray
- Forbidden: Neon, chrome luxury clichés, stock yacht gold

## Signature Composition (website — hit ≥1)
1. Quiet serif claim on oat ground + one material image
2. Large photo with wide margins
3. Minimal nav + single calm CTA

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | air + one focus | restraint | feature grids |
| Material | photo essay moment | breathing room | KPI spam |
| CTA | quiet text or deep solid | one action | loud multi CTAs |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Keep air; don't pack modules

## Anti-patterns
- Fake luxury gold gradients
- Dense SaaS card walls
- High-sat startup confetti
- Heavy black display type

## Style Evidence (website — must be observable)
1. Oat/beige paper base
2. Low-sat earth palette only
3. Light serif or quiet type (not black impact)
4. Large empty air
5. Natural material imagery or calm abstract

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #EFEAE0; --surface: #D8CFC0; --text: #3A352F;
  --muted: #6B6253; --accent: #A8997E; --radius-md: 10px;
}
```
