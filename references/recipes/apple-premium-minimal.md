# 06 · apple-premium-minimal · Liquid Glass / 液态玻璃

## Identity and scope
The stable ID remains `apple-premium-minimal`. Use for a flagship product, consumer app or creation tool where a clear focal experience and responsive controls matter. **Content supplies the color; Liquid Glass identifies the floating control layer.** Gray minimalism by itself is insufficient evidence.

This is a web interpretation of Apple's design, not an implementation of Apple's native material renderer. Do not claim native optical refraction from CSS blur alone.

## Verified primary references
Checked 2026-09-25:
- [Principles of great design — WWDC26](https://developer.apple.com/videos/play/wwdc2026/250/): purposeful choices, understandable navigation, control, craft and appropriate feedback.
- [What's new in SwiftUI — WWDC26](https://developer.apple.com/videos/play/wwdc2026/269/), refreshed-look section: adjustable material tint, interactive response and toolbar priority across window sizes.
- [Design guide — WWDC26](https://developer.apple.com/wwdc26/guides/design/).
- [Meet Liquid Glass — WWDC25](https://developer.apple.com/videos/play/wwdc2025/219/): origin of the material. Keep its year distinct from the 2026 refinements.

Use the installed `apple-design` skill when available for physical interaction and accessibility. Its absence does not block the explicit floor below.

## Frozen roles
| Role | Default |
|---|---|
| Clean page | `#FAFBFD` |
| Opaque content | `#FFFFFF` |
| Ink / secondary ink | `#1D1D1F` / `#515154` |
| Fine structure | `#DBDFE8` |
| Action blue | `#0071E3` |
| Content light | cool `#DBEAFE`, warm `#FFC59E` |
| Functional glass | white alpha .40–.95; blur 16–40 px; subtle bright inner edge |

Palette is not limited to grayscale. Controlled color belongs to artwork, media or a product demonstration stage. Never put an arbitrary full-page purple mesh behind every component.

## Composition
1. Clear short headline and one supporting statement; ample breathing room.
2. One coherent product experience over a colored content stage. The stage remains still until a relevant control changes it.
3. A floating tool strip with separated controls, perceptible highlights, subdued shadow and backdrop blur. Use material for controls, not for paragraphs/tables/cards.
4. Main reading surface is opaque. One glass layer maximum at each point; do not nest glass.
5. Following sections use generous readable rows and one focal message, not equal bento tiles.

Type: Chinese-capable platform system sans, desktop headline 46–76 px / 600–650 / 1.25–1.35; deck 22–26 px; body 16–18 px. Chinese tracking is 0. Latin display tracking may be size-specific. Controls stay at least 40–44 px in effective hit area.

## Operable material demo
The shipped board provides three background choices and an actual **材质** range control. Background buttons change the stage and maintain `aria-pressed`; the range immediately adjusts only glass opacity/blur. Native range keyboard behavior must work. The product's input, action generation and copy controls remain functional.

- Show press feedback immediately, commit on click/release, never disable input solely while animating.
- Use current presentation values on interruption. For a draggable or swipable component, use velocity-aware springs with no arbitrary transition lock; a static tool strip need not invent a gesture.
- Reduced motion: static changes or short fades, no movement or elastic bounce.
- Reduced transparency: near-solid tool strip without blur.
- Increased contrast: opaque background and clear dark boundary.
- Unsupported backdrop-filter: opaque fallback.

## Anti-patterns
All-gray hero; glass every card; text directly on busy colored art; huge glow; decorative perpetual motion; glass slab stacked on glass; an inert selector that only changes labels; unsupported claims of real refraction; copy that exposes implementation details to product users.

## Acceptance
1. Colored content makes the material's depth observable, while content text stays legible.
2. Floating controls alter something meaningful, with mouse/touch/keyboard feedback.
3. No overlapping translucent content sheets.
4. Mobile retains the same main action and material controls without clipping.
5. Reduced-motion, reduced-transparency, increased-contrast and blur-unavailable states remain usable.

Artifact / user-layout: preserve information structure. Add material only to actual floating navigation or controls that benefit from it; color and typography still convey the Apple-inspired character without compulsory glass.
