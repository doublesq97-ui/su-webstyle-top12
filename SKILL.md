---
name: su-webstyle-top12
description: "Curated Top 12 overseas web styles with executable recipes: browse, choose, recommend, auto-select, and apply. Use for website visual direction, landing pages, style boards, artifacts (cards, dashboards, note readers, sticky-rail ops shells), and skinning existing layouts. Raises a minimum style floor (tokens, composition, evidence) without capping creativity."
license: MIT
metadata:
  author: "@Sukiea1008"
  version: "0.2.0"
---

# SU Webstyle Top 12

Stable catalog of 12 web styles for selection and implementation. This skill is a **decision + craft layer**: it freezes tokens, composition rules, and acceptance evidence so weak models do not invent “generic cards with a new palette.”

## Floor, Not Ceiling

- Recipes define the **minimum** bar (tokens, anti-patterns, evidence).
- Agents **may** exceed recipes, combine styles, or invent layouts when the user or a stronger capability requires it.
- When defaulting, follow the floor. When user globals / stronger intent conflict, prefer those and **state that in plain text**.

## Route the Deliverable First

Classify before picking a style:

| Path | When | Structure source | Style source |
|---|---|---|---|
| `website` | Full site, landing, multi-section marketing page | Recipe signatures + section recipes | Full recipe |
| `artifact` | Single-purpose HTML/card/board/tool/report shell | Template + density | **Skin only** from recipe |
| `user-layout` | User global / project layout preference exists | **User layout** | **Skin only** |

### User layout priority

If memory, CLAUDE.md, Know-me, or project conventions define a preferred layout:

1. Keep that structure (chrome, columns, scroll model).
2. Apply this skill as **skin only**.
3. Disclose, e.g.
   `已按你的全局排版习惯交付，本 skill 只套了 [style] 皮肤（色/字/边框圆角/阴影）。`

Do not force a marketing hero onto a user layout unless asked.

### Skin scope

Skin = color tokens, type stack/scale (as fits), radius, border, shadow, optional icon stroke.
Skin does **not** force Signature Hero, `100svh` marketing sections, or section recipes.

## Route the Request Mode

| Mode | When | Action |
|---|---|---|
| **Browse** | “有哪些风格 / atlas / 让我看看” | List Core 12 compactly; offer board |
| **Choose** | User wants options then self-pick | Show menu/board; wait for id/number |
| **Recommend** | “推荐 / 不知道选哪个” | 2–3 candidates + tradeoffs; do not hard-pick unless asked |
| **Auto** | “你决定 / 专业一点 / 做落地页” without a named style | Silently pick one; return id + one-line fit |
| **Apply** | Style known or Auto done | Load **one** recipe → contract → implement → evidence |

Exploration → Browse/Choose. Production → Auto/Apply. Named style → Apply.

## Load the Right References

- Read [references/style-catalog.json](references/style-catalog.json) before listing, selecting, or applying.
- Read [references/selection-guide.md](references/selection-guide.md) for Auto / Recommend.
- Read [references/deliverable-guide.md](references/deliverable-guide.md) when path is unclear (website vs artifact vs user-layout).
- Read [references/artifact-templates.md](references/artifact-templates.md) for artifact path.
- Read [references/implementation-contract.md](references/implementation-contract.md) before producing UI.
- After selecting a style in Apply, read **only** `references/recipes/{id}.md`. Do not load all 12.
- Read [references/style-atlas.md](references/style-atlas.md) only for lightweight Browse copy if needed.
- Read [references/output-patterns.md](references/output-patterns.md) for boards, viewport rules, promo rules.
- Use [assets/style-board-template.html](assets/style-board-template.html) for visual comparison boards.

## Core Workflow

1. Resolve deliverable path (`website` | `artifact` | `user-layout`).
2. Resolve mode (Browse / Choose / Recommend / Auto / Apply).
3. Resolve `styleId` (user name > Auto via selection-guide > wait on Choose).
4. **Website:** load recipe → write Style Contract (deep) → implement sections → verify website evidence.
5. **Artifact:** pick template + density → load recipe **skin** → light contract → implement → verify artifact evidence.
6. **User-layout:** keep layout → skin only → disclose.
7. If building a **website** and `su-motion-top12` is available, pair it (one primary motion + optional one support). Absence is fine—deliver static floor.
8. Return artifact, style id, path, and evidence result. Do not dump internal scoring.

## Style Contract (Apply intermediate)

Freeze before coding. Minimum fields:

```yaml
deliverable: website | artifact | user-layout
meta:
  styleId: modern-saas-clean
  mode: auto | choose | recommend | named
  fitReason: "one line"
page_or_artifact:
  # website: pageType, primaryAction, contentHierarchy
  # artifact: templateId, density, job
tokens: { color, type, space, radius, border, shadow }  # from recipe
# website only:
sections: [...]
# always:
mustShowEvidence: [...]
mustNot: [...]
acceptance: { status: pending | pass | fail }
```

User-facing: keep contract folded unless debugging. Implementation must still honor it.

## Core 12

| # | ID | Name |
|---|---|---|
| 01 | `modern-saas-clean` | Modern SaaS Clean |
| 02 | `editorial-tech` | Editorial Tech |
| 03 | `linear-vercel-dark` | Linear / Vercel Dark |
| 04 | `stripe-ish-business` | Stripe-ish Business |
| 05 | `notion-figma-friendly` | Notion / Figma Friendly |
| 06 | `apple-premium-minimal` | Apple Premium Minimal |
| 07 | `swiss-international` | Swiss International |
| 08 | `bento-grid` | Bento Grid |
| 09 | `neo-brutalism` | Neo Brutalism |
| 10 | `wabi-beige` | Wabi Beige / 侘寂米色 |
| 11 | `corporate-blue` | Corporate Blue / 蓝色商务 |
| 12 | `playful-startup` | Playful Startup |

## Response Patterns

**Browse (compact):**

```markdown
| # | Style | Best for | Density |
|---|---|---|---|
| 01 | Modern SaaS Clean | SaaS, AI tools | medium |

Pick a number/name, or ask me to decide.
```

**Recommend:** 2–3 options + tradeoffs; ask to pick or decide.

**Auto / Apply output:** style id + one-line fit + deliverable path + finished work + evidence pass/fail notes. No chain-of-thought scoring dump.

## Quality Bar

### Website

- Complete homepage-like structure: nav, hero, ≥1 follow-up section, credible CTA.
- Major sections default `min-height: 100svh` (see implementation-contract).
- Match recipe palette, type, density, signature, evidence.
- Avoid generic AI aesthetics: purple mesh gradients, glass everywhere, empty card grids, filler copy.
- One primary style; at most one secondary.

### Artifact

- Template structure intact; density readable.
- Skin tokens recognizable as the selected style.
- Do not fake a full marketing site (no forced 100svh hero stack).
- Many line-items → `list-rows`, not equal card walls.

### Dashboard-ops template

- Prefer Fernand / Fingerprint **information architecture**: filters or period controls, primary metric, main chart, secondary table/pipeline/rankings.
- Correct visual scale: one primary composition per viewport region; KPI type hierarchy clear; not two cramped mini-UIs forced into one narrow row unless the canvas is wide.

## Creator Mark Rules

- Public promo assets may include `@Sukiea1008`.
- Do not add to ordinary user outputs unless asked.
- Hidden `Su NB` only in this repo’s own promo samples.

## Chinese Audience Notes

- Chinese-facing docs/explanations first; English UI copy OK for overseas tone mockups.
- No font files bundled; use system stacks from recipes.
- Chinese type: slightly higher line-height; avoid overly tight tracking on CJK.
