# 03 · linear-vercel-dark · Linear / Vercel Dark

## Identity
- ID: `linear-vercel-dark`
- Index: 03
- One-liner: Developer-native dark UI: sharp, calm, thin lines.
- Density: medium | Surface: dark

## Intent
- Best for: APIs, infra, developer tools, model platforms
- Avoid for: Warm lifestyle, playful consumer only
- Pair with (max 1 secondary): modern-saas-clean (light marketing shell)
- Never mix with: playful-startup primary

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#0E1117` | page |
| surface | `#141925` | panels |
| border | `#1F2937` | lines |
| text | `#E7EEF8` | primary |
| muted | `#8B97AB` | secondary |
| accent | `#7AA2FF` | links, focus |
- Rule: No neon spam; accent for focus only.

## Type & Scale
- Stack: ui-sans-serif, "Inter", system-ui, sans-serif; mono for code: ui-monospace, Menlo
- H1: clamp(2.25rem, 4vw, 3.25rem) / 600 / -0.03em
- H2: 1.5rem / 600
- Body: 0.9375–1.0625rem / 400 / 1.6
- Caption: 0.75rem mono OK
- CN note: 中文行高 +0.05~0.1；避免过窄字距

## Spacing & Density
- Base unit: 8px
- Section Y: min(9vh, 88px)
- Content max: 1120px
- Card padding: 16–20px
- Density target: medium

## Grid
- Centered product/code stage; narrow nav
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 8–12px
- Border: 1px solid #1F2937
- Shadow: Subtle glow 0 0 0 1px border + soft outer optional
- Materials: Dark elevated panels; optional faint blue glow on focus

## Image & Icon Language
- Images: Code panes, terminal, product dark UI
- Icons: Thin stroke, geometric
- Forbidden: Yellow brutal posters, pastel blobs

## Signature Composition (website — hit ≥1)
1. Dark hero with code/product panel and thin rules  
2. Feature list with mono labels  
3. Minimal footer with status dots

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | product/code focus | high contrast text | light SaaS pastel cards |
| Features | tight list or 3 panels | readable dark contrast | rainbow glows |
| CTA | solid light or accent | one primary | neon carnival |

## Mobile Deltas
- Type: step down one level; keep hierarchy
- Sections: min-height 100svh; stack; padding-block 72px
- Reduce glow; keep contrast AA

## Anti-patterns
- Overused neon and blur haze  
- Low-contrast gray-on-gray text  
- Playful illustration language

## Style Evidence (website — must be observable)
1. True dark base (not gray light inverted poorly)  
2. Thin border language visible  
3. Accent used sparingly  
4. Code or technical panel present OR strong mono meta  
5. Contrast readable

## Skin subset (artifact / user-layout)
Use only: color tokens, type stack, radius, border, shadow, optional icon stroke.  
Do not force signatures or 100svh section recipes.

## CSS Token Sketch
```css
:root {
  --bg: #0E1117; --surface: #141925; --border: #1F2937;
  --text: #E7EEF8; --muted: #8B97AB; --accent: #7AA2FF;
  --radius-md: 10px;
}
```
