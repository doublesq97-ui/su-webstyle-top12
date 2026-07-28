# Artifact Templates

Structure is independent of style. Style supplies **skin** only.

## Catalog

| ID | Name | Default density | Structure |
|---|---|---|---|
| `single-panel` | 单板 | sparse | One card / statement / poster-like panel |
| `split-compare` | 对比 | medium | Two columns (before/after, A/B) |
| `stack-sections` | 叠块 | medium | 2–4 vertical blocks (not 100svh ads) |
| `bento-lite` | 轻模块 | medium | Small modular tiles with hierarchy |
| `list-rows` | 列表条 | dense | Row list; default when many items |
| `dashboard-ops` | 运营仪表盘 | dense | Filter/status + KPI + main chart + table/rank |
| `note-reader` | 笔记阅读 | medium | Concept strips + short body + personal prompt |
| `sticky-rail` | 粘轨阅读架 | medium–dense | Sticky side nav + sticky topbar; main scrolls |

## Selection heuristics

| Content | Template |
|---|---|
| One message | `single-panel` |
| A vs B | `split-compare` |
| Short multi-part brief | `stack-sections` |
| Feature mosaic (compact) | `bento-lite` |
| ≥6 items / rules / TOC | `list-rows` |
| Ops metrics, API usage, inbox stats | `dashboard-ops` |
| Reading notes / concept map pages | `note-reader` |
| Long weekly ops / multi-section report shell | `sticky-rail` |

## dashboard-ops quality (critical)

Reference grammar (local demos under `Documents/01-web-demonstrate/` when present):

- **Dark ops (Fernand-like):** icon or slim rail optional · page title · **filter chips** · large primary metric + **area/line chart** · pipeline or stage strip · team/data **table**
- **Light analytics (Fingerprint-like):** app rail · top utilities · **status strip** · Insights heading · **KPI row (3)** · series card with **period tabs** + chart/table toggle

Rules:

1. Build **one** dashboard at full readable scale. For side-by-side demos, stack vertically or use wide canvas with true card proportions — never two tiny unreadable UIs in a phone-width column.
2. Type scale: page title ~18–22px, KPI numbers ~28–40px, labels ~11–13px muted.
3. Chart area needs real height (~140–220px), not a 60px scribble.
4. Skin with style tokens; keep IA (filters → metrics → chart → table).

## sticky-rail quality

- `position: sticky` side + top; main column scrolls naturally.
- Soft materials (blur, hairline borders) over rigid `overflow: hidden` admin boxes.
- Side nav active state; optional progress/status card.

## note-reader quality

- One concept at a time or stacked concept strips.
- Meta line (index / path) · title · short body · “question for you” box.
- Inspired by learning-map pacing; not a 1:1 visual clone of any site.

## Evidence (artifact)

- [ ] Template id matches content shape
- [ ] Density readable
- [ ] Skin matches style tokens (color + radius/border/shadow)
- [ ] No forced multi-`100svh` marketing stack
