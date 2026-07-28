# Implementation Contract

## Source of truth

- `style-catalog.json` — identity, intent, palette summary, recipe path.
- Selected `recipes/{id}.md` — full executable style.
- This file — global layout, accessibility, path-specific acceptance.

## Global redlines

- Prefer transform/opacity for motion if paired with su-motion-top12.
- One primary style; at most one secondary.
- Ban default purple-blue AI mesh gradients, glassmorphism on every surface, empty decorative card grids, lorem-only pages.
- Honor user layout when path is `user-layout`.
- Load only the selected recipe in Apply mode.

## Website requirements

- Nav + hero + ≥1 complete follow-up section + CTA/brand closure.
- Major sections default `min-height: 100svh`.
- Do not expose next section body in the first viewport; use restrained scroll cue if needed.
- Desktop: center section content with stable spacing. Mobile: allow growth, keep min-height, padding-block ~72px.
- Short viewports: reduce internal scale / hide tertiary metrics before collapsing section height.
- Verify recipe **Style Evidence** (3–5 observable checks) and **Anti-patterns**.

### Viewport CSS default

```css
.page-section {
  min-height: 100svh;
  display: flex;
  align-items: center;
}
.section-inner {
  width: min(1120px, calc(100% - 48px));
  margin: 0 auto;
}
@media (max-width: 760px) {
  .page-section {
    align-items: stretch;
    padding-block: 72px;
  }
}
```

(Recipe may tighten `contentMax`, e.g. Apple 980px.)

## Artifact requirements

- Structure from template, not from website section recipes.
- Skin from recipe: color, type, radius, border, shadow.
- Evidence: style recognizable from tokens; template readable at chosen density; no fake multi-100svh marketing site.
- `dashboard-ops`: single coherent dashboard composition per page (or clear tabs). Do not squash two full product UIs into one narrow row for “comparison” unless each is a proper full-width card with correct type scale.

## Motion pairing

When deliverable is `website` and su-motion-top12 is installed:

- Select one primary motion (+ optional one ambient/polish).
- Follow motion skill reduced-motion and interruption rules.
- If motion skill missing: static delivery is complete.

## Verification checklist

1. Tokens match frozen contract (no invented palette drift).
2. Path-correct structure (website vs artifact vs user-layout).
3. Evidence list marked pass/fail with fixes if fail.
4. Desktop + mobile sanity (overflow, hit targets, contrast).
5. Disclosure present when user-layout path used.
