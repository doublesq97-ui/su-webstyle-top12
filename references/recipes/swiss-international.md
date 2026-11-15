# 07 · swiss-international · Dark Workspace / 深色工作台

## Identity

- Public identity: **Dark Workspace / 深色工作台**. Keep the stable ID `swiss-international` so saved links still work; this replaces the previous 07 direction within the existing 12 styles.
- A mature product interface: a near-black outer shell holds a large, rounded charcoal workspace. Repeated alignment, subtle borders and distinguishable dark surfaces carry the information hierarchy.
- Best for AI tools, productivity products, customer-support software and established SaaS. The references inform material, hierarchy and interaction clarity; their product names, copy and navigation structure are not templates to reproduce.
- 03 is developer-oriented dark design with restrained technical light; 07 uses opaque monochrome work surfaces and functional color; 08 uses a warm light field and one orange signal.

## Frozen roles

| Role | Value | Use |
|---|---|---|
| Canvas | `#0E0E0E` | Quiet near-black surroundings |
| Workspace | `#1C1C1C` | Recessive frame, darker than the panels |
| Panel | `#232323` | One shared neutral charcoal for all peer panels |
| Input / rail | `#1C1C1C` | Slightly recessed controls, same neutral hue |
| Border | `#333333` | Fine panel edges and separators |
| Text | `#E7E7E7` | Titles and body text |
| Muted | `#A3A3A3` | Secondary readable text |
| Action orange | `#ED8A4C` | Primary action and selected controls |
| Action ink | `#111111` | Text on solid orange actions |
| Progress | `#B8B8B8` | Neutral progress and data indicators |
| Status green | `#78A88B` | Small explicit success dots only |

No neon outlines, translucent glass, glow-filled cards or large decorative gradients. Keep all large surfaces on the same neutral gray axis. Peer panels share one fill; the frame recedes instead of becoming a bright gray surround. Use narrow lightness steps and fine separators, not differently tinted slabs. Reference palettes are alternatives to compose from, not a checklist to combine. Border color establishes grouping; it does not replace sufficient contrast on controls, focus states or text. Use text/icons as well as color to identify selection and status.

## Type and surface scale

- Chinese-first system stack: `"PingFang SC", "Microsoft YaHei", "Noto Sans CJK SC", Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`.
- Marketing title: 44–52 px on desktop, with semantic line breaks rather than oversized editorial cropping. Body: 16 px / 1.85 for Chinese.
- Workspace title: 24 px. Interface body: 14–16 px; compact labels: 12–13 px. Keep small labels secondary and short; avoid dense paragraphs in microtype.
- Use restrained 500–600 weights to establish hierarchy. Preserve normal CJK tracking rather than applying uppercase-label letter spacing to Chinese text.
- Main workspace radius: 20 px; nested panels: 10–12 px. Fine 1 px edges, consistent gaps and local separators replace hard black rules or conspicuous shadows.

## Composition by deliverable

### Website: Looma AI demonstration

Keep the existing Looma AI product and interactive demonstration. Apply the new direction throughout its full website rather than replacing it with an unrelated reporting dashboard.

1. **Introduction:** a complete opening viewport with navigation, product statement, supporting copy and a clear route to try the product. Dark surfaces frame the introduction; the primary in-product operation uses orange.
2. **Operable workspace:** a coherent charcoal workspace inside the near-black shell. Inputs, controls, selection and results remain legible and functional. Keep progress neutral. Orange is the one primary accent; a muted green may appear only as a small explicit success dot.
3. **Capabilities:** explain the existing product abilities with aligned content, fine boundaries and consistent type hierarchy.
4. **Working method:** preserve the product's steps and their order; use quiet monochrome numbering and clear group spacing.
5. **Closing CTA:** one decisive next action, then the existing footer.

Do not copy the reference products' navigation, chart inventory or multi-rail information architecture into this website. The page still demonstrates Looma AI.

### Artifact / user-layout

Keep the task's information architecture. If the task is a dashboard, a compact rail, filters, primary metric, charts and table can use this skin. Use one coherent workspace and choose density from actual content. A sidebar is appropriate when navigation needs it, not a mandatory style ornament. Do not add a marketing hero to a working tool.

## Responsive and interaction

- At 1440×900 and 1280×800, the opening viewport contains its full primary message and action without clipping. Shrink spacing before reducing readable text.
- Below 760 px, stack major content in reading order; let the workspace grow vertically. Convert an existing sidebar to compact navigation only when the deliverable uses one.
- Inputs, tabs, action buttons and filters keep their real behavior. A selected control must remain identifiable without color alone.
- Use a clear, contrast-checked focus indicator on dark surfaces. Respect reduced motion and keep content visible when motion is disabled.

## Acceptance

1. `?style=swiss-international` selects **Dark Workspace / 深色工作台**, with the catalog still containing exactly 12 styles.
2. The frame is recessive and peer panels share one neutral charcoal. Input and summary surfaces differ only slightly in lightness; no patchwork of warm and cool grays.
3. Soft orange is limited to actions and selected states. Progress stays neutral, with muted green reserved for small status dots. There is no obligatory blue accent, neon, glass or large decorative gradient.
4. The Looma AI website retains its introduction, operable demo, capabilities, method and closing CTA. All existing demo actions still produce their intended feedback.
5. Desktop and mobile have no clipped Chinese text, unreadable small copy, horizontal overflow or overlapping controls. Verify both text contrast and visible keyboard focus.
6. Recipe, catalog and live demo share the same public name, palette roles and visual hierarchy.
