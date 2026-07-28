# 08 · fingerprint-signal · Fingerprint Signal

## Identity
- ID: `fingerprint-signal`
- Index: 08
- One-liner: Warm light console — white cards, one orange-red signal (`#F4511E`).
- Density: medium | Surface: light
- Source DNA: Fingerprint Overview (Refero) — analytics product, not marketing confetti.
- Replaces: gray-blue bento blob and green-yellow experiment.

## Intent
- Best for: AI/API products, analytics, security tooling, multi-metric product pages
- Avoid for: Loud campaigns, lifestyle wabi, playful consumer candy
- Pair with (max 1 secondary): modern-saas-clean or linear-vercel-dark (as dark twin)
- Never mix with: neo-brutalism primary; fresh-green-yellow leftovers

## Color Tokens
| Token | Value | Usage |
|---|---|---|
| bg | `#FAFAF8` | warm canvas (slightly warm paper-gray, **not** cool blue-gray `#EEF4F7`) |
| rail | `#F4F5F2` | side chrome / soft bands |
| surface | `#FFFFFF` | cards, product shell |
| border | `#DEDFDC` | hairlines |
| text | `#202124` | ink |
| muted | `#767875` | secondary |
| accent | `#F4511E` | **only** strong signal: CTA, active chart, primary upgrade |
| accentSoft | `#FDE8E1` | selected chip / soft orange wash (tiny) |
| tagBlue | `#E8F0FE` | optional status tag bg |
| tagGreen | `#E6F4EA` | optional status tag bg |
- Rule: Orange-red is the **only** high-chroma signal. Status tags stay desaturated. No blue-gray bento wash. No yellow-green nature palette.

## Type & Scale
- Stack: Inter, system-ui, "Segoe UI", "PingFang SC", "Noto Sans SC", sans-serif
- Mono (axes/meta): ui-monospace, "SF Mono", Menlo
- H1: clamp(2.1rem, 4vw, 3rem) / 600 / -0.025em
- H2 / card titles: 16–18px / 500–600
- KPI numbers: 24–36px / 500–600 (not ultra-black display)
- Body: 14–16px / 400 / 1.55
- Caption / axis: 11–12px mono or muted sans

## Spacing & Density
- Base unit: 8px
- Section Y: min(8vh, 80px)
- Content max: 1120–1180px
- Card padding: 16–20px
- Density: product-console medium — scannable, not sparse luxury

## Grid
- Optional left rail ~240–275px on product layouts
- Status strip 4–5 cells OR Insights KPI row of 3 equal cards
- Full-width chart/series band under KPIs
- Breakpoints: 760 / 1040

## Surface / Border / Radius / Shadow
- Radius: 10–14px (product, not pill candy)
- Border: 1px `#DEDFDC`
- Shadow: soft `0 10px 28px rgba(32,33,36,.06)` — no hard offset, no glass stack
- Materials: flat white cards on warm canvas

## Image & Icon Language
- Images: product UI, charts, subtle geometry
- Icons: thin line, muted; orange only for active/primary
- Forbidden: blue-gray equal bento soup; nature yellow-green; purple AI mesh

## Signature Composition (website — hit ≥1)
1. Warm canvas + white product shell + one orange primary CTA  
2. KPI row (3) + full-width series chart with orange line  
3. Status strip + Insights heading + filters/tabs (Hourly/Daily language OK)

## Section Recipes (website)
| Section | Composition | Must | Must not |
|---|---|---|---|
| Hero | claim + product console preview | orange CTA | green/yellow nature skin |
| Features | metric/capability cards white | hierarchy | cool blue tile wall |
| Proof | quiet logos or status tags | desaturated tags | rainbow tags |
| CTA | solid `#F4511E` | one primary | multi neon CTAs |

## Mobile Deltas
- Collapse rail; stack KPI 1-col or 2-col
- Chart min-height 160px
- Keep orange CTA full-width

## Anti-patterns
- Cool blue-gray page (`#EEF4F7` + `#8BB8D8`) — old bento failure  
- Green-yellow “清新” palette  
- Orange flooding entire backgrounds  
- Soft luxury serif editorial as this style  
- Equal empty icon grids without metrics

## Style Evidence (website — must be observable)
1. Canvas is warm light `#FAFAF8` (not blue-gray, not cream-green)  
2. Cards pure white with `#DEDFDC` borders  
3. **One** orange-red `#F4511E` as primary CTA and/or chart signal  
4. KPI/stat numbers readable at console scale  
5. Feels like product analytics chrome, not lifestyle or brutal poster

## Skin subset (artifact / user-layout)
```
bg #FAFAF8 · surface #FFFFFF · border #DEDFDC
text #202124 · muted #767875 · accent #F4511E
radius 12px · shadow soft
```
For `dashboard-ops` template: prefer this skin (Fingerprint grammar).

## Implementation hard rules
1. Never use blue-gray `#EEF4F7` / `#8BB8D8` for this id.  
2. Accent fill only on primary button, active tab underline, chart series, one badge.  
3. Product shell background = `#FFFFFF`.  
4. Status tags: pastel desaturated only (blue/green/gray), not orange fills.  
5. If showing a chart, series color = `#F4511E`.

## CSS Token Sketch
```css
:root {
  --bg: #FAFAF8;
  --rail: #F4F5F2;
  --surface: #FFFFFF;
  --border: #DEDFDC;
  --text: #202124;
  --muted: #767875;
  --accent: #F4511E;
  --accent-soft: #FDE8E1;
  --radius-md: 12px;
  --shadow: 0 10px 28px rgba(32, 33, 36, 0.06);
}
```

## Reference
- Design MD: `Documents/Obsidian/AI-design/01-web-design-md/fingerprint-overview-design.md`
- Implement demo: `Documents/01-web-demonstrate/fingerprint-overview-migrated`
