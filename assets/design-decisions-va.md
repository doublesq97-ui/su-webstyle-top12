# su-webstyle-top12 · Design decisions (vA.2)

Living decisions before full skill rewrite. Floor, not ceiling.

## 1. Floor vs ceiling

- This skill raises the **minimum** quality bar (tokens, evidence, anti-patterns).
- It does **not** hard-cap creativity, stacking, or agent initiative.
- Agents **may** combine styles, invent layouts, or exceed recipes when the user or a stronger capability asks.
- When defaulting, follow the floor. When the user / global prefs / stronger intent conflict, prefer those — and **say so in plain text**.

## 2. User global layout priority

If the user has a preferred webpage or deliverable layout written into global memory, CLAUDE.md, Know-me profile, or project conventions:

1. **Prefer that layout structure** (chrome, columns, scroll model).
2. Apply this skill as **skin only** (see Skin scope).
3. **Disclose** in the reply, e.g.
   `已按你的全局排版习惯交付，本 skill 只套了 [style] 皮肤（色/字/边框圆角/阴影）。`

Do not refuse the skill because layout came from the user. Do not rewrite their layout into a marketing Hero unless they ask.

## 3. Deliverable paths

| Path | Structure source | Style source |
|---|---|---|
| `website` | Style recipe sections + signatures | Full recipe |
| `artifact` | Template + density | Skin from style |
| `user-layout` | User global / named layout | Skin from style |

## 4. Skin scope (not just color)

Skin = executable surface language from the style recipe:

- Color tokens
- Type stack + scale (as fits the template)
- Radius (rounded vs sharp)
- Border weight / style
- Shadow language
- Optional icon stroke weight

Skin does **not** force: Signature Hero, 100svh marketing sections, or section recipes — those are website-path only.

## 5. Artifact templates

| ID | Name | Structure |
|---|---|---|
| `single-panel` | 单板 | One card / statement |
| `split-compare` | 对比 | Two columns |
| `stack-sections` | 叠块 | 2–4 vertical blocks (not 100svh) |
| `bento-lite` | 轻模块 | Small modular tiles |
| `list-rows` | 列表条 | Dense rows; default when many items |
| `dashboard-ops` | 运营仪表盘 | Filter bar + KPI + primary chart + table/rankings. Reference: `01-web-demonstrate/fernand-reporting-migrated` (dark ops) and `fingerprint-overview-migrated` (light analytics). Structure grammar, not brand copy. |
| `note-reader` | 笔记阅读 | Concept strips + prompt (naval-inspired, not 1:1) |
| `sticky-rail` | 粘轨阅读架 | Sticky side rail + sticky topbar; main content scrolls naturally (decision-desk / study-reader family) |

Density: sparse / medium / dense. Many line-items → `list-rows` (not equal card walls).

No required matrix of “style N only pairs with template M”.

## 6. Motion pairing

If `su-motion-top12` is available in the environment when building a **website**:

- Prefer auto-composing both skills: webstyle for visual contract, motion for entrance/scroll/polish.
- One primary motion (+ optional one support), per motion skill rules.
- If motion skill is absent, still deliver static webstyle floor; do not fail.

Artifact path: motion optional and restrained; docked-shell usually no decorative scroll hijack.

## 7. Catalog changes (agreed)

| # | Old | New |
|---|---|---|
| 01 | Modern SaaS Clean (muddy green wash) | **Same name, cleaned tokens** — neutral paper + single teal accent |
| 10 | Luxury Editorial | **Wabi Beige / 侘寂米色** |
| 11 | Data Dashboard | **Corporate Blue / 蓝色商务** |

Workbench / dense ops UI lives as **templates** (`dashboard-ops`, `sticky-rail`, `list-rows`), skinned by any style — not as a dedicated “dashboard aesthetic” slot.

### 01 cleaned tokens

| Token | Value |
|---|---|
| bg | `#FAFBFC` |
| surface | `#FFFFFF` |
| border | `#E8EAED` |
| text | `#111827` |
| muted | `#6B7280` |
| accent | `#0F766E` |
| accent-soft | `#F0FDFA` (chips only, small area) |

Rule: accent fill area default &lt; 8% of viewport; no large green page wash.

### 10 Wabi Beige (from user handbook A)

| Token | Value |
|---|---|
| bg | `#EFEAE0` |
| surface | `#D8CFC0` |
| text | `#3A352F` |
| accent | `#A8997E` |
| deep | `#6B6253` |

### 11 Corporate Blue (from user handbook E)

| Token | Value |
|---|---|
| bg | `#F8FAFC` |
| navy | `#14213D` |
| accent | `#1E40AF` |
| accent-2 | `#3066BE` |
| soft | `#B4C5E4` |
| text | `#1A1A1A` |

## 8. 08 vs 11 after change

- **08 Bento**: marketing modular showcase (橱窗).
- **11 Corporate Blue**: B2B trust / proposal / sober commercial pages (可信蓝), **not** admin chrome.
- Admin / analytics chrome → `dashboard-ops` / `sticky-rail` + any skin (often 11 or 01).
