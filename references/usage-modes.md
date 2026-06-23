# Usage Modes

## Browse Mode

Trigger examples:
- "列出海外网页风格"
- "给我看看有哪些主流网站风格"
- "I want a style atlas"

Action:
- List all 12 styles.
- Keep it descriptive, not prescriptive.
- Offer the HTML board.

## Choose Mode

Trigger examples:
- "给我一个看板我自己选"
- "show me options and I'll pick"

Action:
- Generate or reference the board.
- Ask the user to choose a number/name.
- Do not recommend unless asked.

## Recommend Mode

Trigger examples:
- "你帮我推荐"
- "I don't know which one fits"
- "pick 2-3 directions"

Action:
- Shortlist 2-3 styles.
- Explain tradeoffs.
- Ask the user to pick, unless they ask the agent to decide.

## Produce Mode

Trigger examples:
- "用 10 Luxury Editorial 做首页"
- "apply Modern SaaS Clean to this landing page"
- "生成一个 Bento Grid 风格网页"

Action:
- Read `references/style-atlas.md`.
- Produce a complete artifact in the selected style.
- Validate the result against the style rules.

## User-Control Principle

The skill is open style infrastructure. It should empower the user to choose. The agent acts as a style librarian, board maker, and production assistant.
