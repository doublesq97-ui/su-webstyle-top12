# Selection Guide

## Browse menu

| # | ID | Name | Best for | Density | Surface |
|---|---|---|---|---|---|
| 01 | modern-saas-clean | Modern SaaS Clean | SaaS, AI tools, B2B | medium | light |
| 02 | editorial-tech | Editorial Tech | Labs, research, premium services | medium | light |
| 03 | linear-vercel-dark | Linear / Vercel Dark | API, infra, devtools | medium | dark |
| 04 | stripe-ish-business | Stripe-ish Business | Fintech, platforms, commerce | medium | light |
| 05 | notion-figma-friendly | Notion / Figma Friendly | Collab, creators, education | medium | light |
| 06 | apple-premium-minimal | Apple Premium Minimal | Hardware, flagship product | low | light |
| 07 | swiss-international | Swiss International | Studio, culture, portfolio | medium | light |
| 08 | bento-grid | Bento Grid | Multi-feature product showcase | medium | light |
| 09 | neo-brutalism | Neo Brutalism | Campaigns, youth, experimental | medium-high | light |
| 10 | wabi-beige | Wabi Beige / 侘寂米色 | Lifestyle, hospitality, calm brand | low | light |
| 11 | corporate-blue | Corporate Blue / 蓝色商务 | B2B proposals, trust, enterprise marketing | medium | light |
| 12 | playful-startup | Playful Startup | Education, community, consumer | medium | light |

## Route table (Auto / Recommend)

| Signal | Primary | Alternates | Never |
|---|---|---|---|
| B2B SaaS / AI tool / neutral professional | 01 | 08, 04, 11 | 09, 12 |
| Developer / API / infra | 03 | 01, 11 | 10, 12 |
| Fintech / marketplace / platform | 04 | 01, 08 | 09 |
| Flagship product / hardware / quiet premium tech | 06 | 01, 10 | 09, 12 |
| Premium consulting / fashion / art editorial | 02 | 10, 07 | 09, 11 |
| Calm lifestyle / hospitality / natural brand | 10 | 06, 02 | 09, 03 |
| Many features to showcase | 08 | 01, 04 | 06 |
| Enterprise trust / proposal / sober B2B | 11 | 01, 04 | 09, 12 |
| Youth campaign / attitude brand | 09 | 12, 05 | 06, 10 |
| Education / community / consumer fun | 12 | 05, 09 | 03, 11 |
| Design studio / portfolio / culture | 07 | 02, 10 | 11 |
| Research / thought leadership | 02 | 07, 10 | 09 |
| Collab / notes / soft productivity | 05 | 01, 12 | 10 |

## Decision rules

1. User names a style → honor it.
2. Clear industry + tone → Primary from route table.
3. Conflicting signals → Recommend 2; do not Auto-hardpick.
4. Information density beats atmosphere when they conflict.
5. 08 = marketing modular showcase (橱窗). 11 = trusted corporate blue marketing — **not** admin chrome. Admin/analytics → template `dashboard-ops` + any skin.
6. Output only: style id, one-line fit, optional alternates. No scoring dump.

## Automatic mode steps

1. Path from deliverable-guide.
2. Match signals to route table.
3. Prefer lowest-drama style that still fits the job.
4. Return id + fit; load one recipe; Apply.
