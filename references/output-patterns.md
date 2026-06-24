# Output Patterns

## Style Board

Use when the user wants to compare styles or choose visually.

Must include:
- 12 style cells.
- Style number and name.
- Color swatches.
- Small visual layout sample.
- Suitable use case.
- Optional creator mark for public boards: `@Sukiea1008`.

Do not include the hidden easter egg in normal style boards.

## Homepage Example

Use when the user selected a style and wants to see output.

Must include:
- Navigation.
- Hero headline and supporting text.
- Primary visual or product/service representation.
- CTA or clear next action.
- At least one follow-up section that is also a complete viewport composition.

### Viewport Section Ratio

When the user asks for a website, landing page, homepage example, HTML page, or direct webpage test, design the page as a sequence of complete visual screens.

Rules:
- Each main section should be a complete viewport section that can be screenshotted on its own.
- Hero section: default to `min-height: 100svh`.
- Second screen, feature section, material section, platform section, product section, proof section, and details section: default to `min-height: 100svh`.
- Do not let the unscrolled first viewport expose the next section's body content.
- When scrolled to the second section, it must not feel like a clipped continuation. Give it a complete composition, enough top/bottom breathing room, a clear title area, and a content area.
- Do not interpret "hint of next section" as showing the next section's paragraph/cards. Use a restrained scroll indicator, bottom fade, anchor button, or CTA cue instead.
- Every main viewport should read as a complete, independent page-like scene.

### CSS Guidance

Use this pattern unless the user's app framework has a stronger local convention:

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
    min-height: 100svh;
    align-items: stretch;
    padding-block: 72px;
  }
}
```

Implementation notes:
- Desktop sections may use flex/grid centering so each screen has stable composition.
- Mobile sections may naturally grow taller, but should still keep `min-height: 100svh`.
- If low-height desktop screens are cramped, reduce internal element scale, shorten secondary copy, or hide low-priority metrics/details. Do not solve it by collapsing section height.

### Image Generation Guidance

For generated hero/product/material images used inside website sections, include these prompt constraints:

```text
designed for a full-screen website section, not an ultra-wide banner;
16:10 or 4:3-friendly composition;
enough vertical breathing room;
safe negative space for headline, CTA, and section layout;
no important product or UI elements cropped at top or bottom
```

For Luxury Editorial:
- Use restrained serif typography.
- Prefer a premium photographic or tactile visual.
- Use off-white, dark brown/black, bronze/gold accent.
- Keep copy short and confident.

For Apple Premium Minimal:
- Each screen should feel like a complete product advertising page.
- The hero and material/details sections both need full viewport composition.
- Preserve vertical breathing room; do not compress the page into a horizontal banner.

For Stripe-ish Business:
- The hero and platform/features sections both need full viewport composition.
- The second screen's cards, platform capabilities, and data modules should be composed as a full screen, not pasted as a shallow row below the hero.

## Promotional Images For This Repository

The repository uses three promotional images:

1. `promo-01-style-atlas.png`: Top 12 overview board.
2. `promo-02-how-it-works.png`: workflow from natural language to user choice to output.
3. `promo-03-output-examples.png`: three complete homepage examples, including Luxury Editorial.

Rules:
- Include `@Sukiea1008` as a small visible creator mark.
- The hidden microcopy `Su NB` may appear only as extremely tiny easter egg text in these promo/sample images.
- Keep promo images polished enough for README and social posts.

## Chinese-Facing Outputs

- Use Chinese for outer explanations, README visuals, tutorial captions, and usage guidance.
- Keep website mockup UI text in English when the goal is to preserve an overseas/international website tone.
- This repository does not bundle font files.
