# 02 · editorial-tech · Editorial Tech

## Identity
- ID: `editorial-tech`
- Index: 02
- One-liner: Magazine intelligence: large type, strict grid, warm paper.
- Density: medium | Surface: light

## Intent
- Best for: AI labs, research, premium professional services
- Avoid for: Empty pages with weak copy; admin tables as hero
- Pair with (max 1 secondary): swiss-international
- Never mix with: playful-startup as primary mix

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#F3EFE7` | paper |
| surface | `#FFFFFF` | panels |
| text | `#171717` | ink |
| muted | `#8A8A8A` | meta |
| accent | `#A76446` | small accent |
- Rule: Mostly black/cream; accent is a tiny punctuation.

## Type & Scale
- Stack: "Iowan Old Style", "Palatino Linotype", "Noto Serif SC", Georgia, serif for display; system-ui for body
- H1: clamp(2.75rem, 6vw, 4.75rem) / 500 / -0.02em / 1.05 (serif OK)
- H2: clamp(1.5rem, 2.5vw, 2rem) / 600
- Body: 1.0625rem / 400 / 1.65
- Caption: 0.75rem / 500 / 0.04em tracking meta
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(10vh, 100px)
- Content max: 1080px
- Card padding: 24px
- Density target: medium

## Grid
- Strict columns; asymmetric editorial placements allowed
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 4–8px or none (editorial hard edges OK)
- Border: Hairline #E5DFD4
- Shadow: Rare; prefer border and type hierarchy
- Materials: Paper and ink; photography over illustration

## Image & Icon Language
- Images: Editorial crop, high-contrast or desaturated tech imagery
- Icons: Minimal; prefer typographic marks and rules
- Forbidden: Playful stickers, neon glow nets

## Signature Composition (website — hit ≥1)
1. Huge headline + small meta row + single image
2. Two-column essay block with pull quote
3. Numbered chapter strip

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | oversized type | meta, claim, visual | feature card wall |
| Body | editorial grid | reading measure | dense KPI board |
| CTA | quiet text link or solid dark | restraint | loud multi-color |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Headline can stay large but shorten lines

## Anti-patterns
- Weak one-line copy on empty magazine layout
- SaaS card grids as primary language
- Rainbow accents

## Style Evidence (website — must be observable)
1. Display type clearly dominates
2. Warm paper base visible
3. Meta labels / small caps energy present
4. Grid alignment readable
5. Accent is sparse

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #F3EFE7; --surface: #FFFFFF; --text: #171717;
  --muted: #8A8A8A; --accent: #A76446; --radius-md: 6px;
}
```
