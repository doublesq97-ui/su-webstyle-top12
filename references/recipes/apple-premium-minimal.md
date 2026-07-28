# 06 · apple-premium-minimal · Apple Premium Minimal

## Identity
- ID: `apple-premium-minimal`
- Index: 06
- One-liner: Quiet premium product pages: one object, extreme restraint.
- Density: low | Surface: light

## Intent
- Best for: Hardware, flagship consumer software
- Avoid for: Dense feature dumps, admin marketing
- Pair with (max 1 secondary): wabi-beige or modern-saas-clean
- Never mix with: neo-brutalism, playful-startup

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#F6F7F8` | page |
| surface | `#FFFFFF` | rare panels |
| border | `#E2E5E8` | hairline |
| text | `#111315` | ink + CTA |
| muted | `#7B8087` | secondary |
- Rule: ≤3 color roles; grayscale carries hierarchy.

## Type & Scale
- Stack: system-ui, -apple-system, "SF Pro Text", "Helvetica Neue", "PingFang SC", sans-serif
- H1: clamp(2.5rem, 5.5vw, 4.5rem) / 600 / -0.03em / 1.05
- H2: clamp(1.5rem, 3vw, 2.25rem) / 600 / -0.02em
- Body: 1.0625rem / 400 / 1.55
- Caption: 0.8125rem / 400 / 0.02em
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(12vh, 120px)
- Content max: 980px
- Card padding: 24–32px if any
- Density target: low

## Grid
- Often 1-col centered; huge air
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 12–20px soft; never chunky brutal
- Border: Prefer none; hairline separators only
- Shadow: None or single soft ambient ≤0.08 opacity
- Materials: Solid fills; no glass default

## Image & Icon Language
- Images: Single product/object, studio light, vertical air
- Icons: Monochrome, sparse, rounded caps
- Forbidden: Sticker packs, neon nets, equal bento walls

## Signature Composition (website — hit ≥1)
1. Centered monobject hero + short claim + one CTA
2. Full-bleed quiet material shot + minimal caption
3. Large type with vast negative space

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | signature monobject | nav, claim, 1 visual, 1 CTA | feature card grid |
| Material | full-viewport product moment | breathing room | metrics clutter |
| Proof | sparse logos/quote | restraint | 6 KPI cards |
| CTA | single band | one action | multi-color buttons |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Keep H1 dominant; full-width CTA OK

## Anti-patterns
- Equal bento walls
- Purple AI gradients
- Hard neo-brutal borders
- Fake luxury gold foil

## Style Evidence (website — must be observable)
1. ≤3 color roles + large negative space on first screen
2. One focal object/type hero, not card gallery
3. H1 ≫ body scale jump obvious
4. Each major section is ad-like full viewport
5. No mesh gradient / glass default

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #F6F7F8; --surface: #FFFFFF; --text: #111315;
  --muted: #7B8087; --border: #E2E5E8; --radius-md: 16px;
}
```
