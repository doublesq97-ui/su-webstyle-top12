---
name: su-webstyle-top12
description: Use this skill when the user wants an overseas/mainstream web design style atlas, a style board, website visual direction, landing page style options, or reusable web-style references. Default to listing and showing Top 12 styles so the user can choose; only recommend candidates when the user explicitly asks the agent to pick or suggest.
license: MIT
compatibility: Agent Skills compatible; works in Codex, Claude Code, and agents that can read SKILL.md/AGENTS.md style instructions.
metadata:
  author: "@Sukiea1008"
  version: "0.1.0"
---

# SU Webstyle Top 12

This skill helps agents present and apply a reusable Top 12 atlas of overseas web design styles.

## Default Behavior

Do not over-decide for the user.

When the user asks for web style options, overseas website aesthetics, a design direction board, or says they want to choose a style:

1. Present the Top 12 style menu.
2. Explain each option briefly: feel, layout, suitable use cases, and caution.
3. Offer the style board template if visual comparison helps.
4. Ask the user to choose a style number/name before producing a full page.

Only recommend candidates when the user explicitly asks:
- "help me choose"
- "recommend one"
- "I don't know which style fits"
- "pick based on this product"

Even then, give 2-3 candidates with tradeoffs. Do not make a final decision unless the user asks you to decide.

## When To Load References

- Read [references/style-atlas.md](references/style-atlas.md) when listing styles, explaining styles, or applying a selected style.
- Read [references/usage-modes.md](references/usage-modes.md) when deciding whether to present choices, recommend candidates, or generate deliverables.
- Read [references/output-patterns.md](references/output-patterns.md) when creating a style board, landing page mockup, README visuals, or promotional examples.
- Use [assets/style-board-template.html](assets/style-board-template.html) when the user wants a reusable HTML visual board.

## Core Workflow

1. Identify the user's mode:
   - Browse: wants to see styles.
   - Choose: wants options and then self-select.
   - Recommend: explicitly asks for candidates.
   - Produce: has selected a style and wants an artifact.
2. If the style is not selected and the mode is Browse/Choose, show the Top 12 menu and stop for user choice unless the user asked for a full board.
3. If the mode is Recommend, give 2-3 style candidates with clear tradeoffs.
4. If the style is selected, apply the selected style to the requested output.
5. Validate that the output matches the style's palette, density, typography tone, and layout rules.

## Creator Mark Rules

- Public promo assets and bundled sample boards may include a small creator mark: `@Sukiea1008`.
- Do not add `@Sukiea1008` to ordinary user outputs unless the user asks.
- The hidden easter egg text `Su NB` is allowed only in this repository's own promotional/sample images, as extremely tiny background microcopy. Never add it to normal user deliverables.

## Chinese Audience Notes

- For Chinese-facing documentation, tutorials, and promo images, use Chinese explanations first and English as supporting labels.
- For website mockups and style samples, English UI copy may be kept to preserve the overseas web design tone.
- This repository does not include font files.

## Style Names

1. Modern SaaS Clean
2. Editorial Tech
3. Linear / Vercel Dark
4. Stripe-ish Business
5. Notion / Figma Friendly
6. Apple Premium Minimal
7. Swiss International
8. Bento Grid
9. Neo Brutalism
10. Luxury Editorial
11. Data Dashboard
12. Playful Startup

## Response Pattern

When presenting choices, use a compact format:

```markdown
Here are the Top 12 options:

| # | Style | Best for | Feel |
|---|---|---|---|
| 01 | Modern SaaS Clean | SaaS, AI tools, B2B | clean, soft, professional |

Pick a number/name, and I will apply it to the page.
```

When recommending:

```markdown
I would shortlist:
- 01 Modern SaaS Clean: safest clean SaaS direction.
- 08 Bento Grid: best if you need to show many features.
- 10 Luxury Editorial: strongest for premium brand mood.

Choose one, or ask me to decide.
```

## Quality Bar

For generated website examples:
- The result must look like a complete homepage, not a decorative moodboard.
- Include a nav, hero, primary visual/product area, at least one follow-up section hint, and a credible CTA or brand element.
- Avoid generic AI aesthetics: default purple-blue gradients, glassmorphism everywhere, empty card grids, or fake filler copy.
- Use the selected style intentionally; do not mix more than two styles unless the user asks.
