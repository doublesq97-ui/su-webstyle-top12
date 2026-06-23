# su-webstyle-top12

Top 12 overseas web style atlas for Codex, Claude Code, and other agentic coding tools.

This is not a template pack that forces a design decision. It is an open style atlas: agents list clear visual directions first, then the user chooses the style they want.

![Top 12 Overseas Web Style Atlas](assets/promo-01-style-atlas.png)

## What It Does

`su-webstyle-top12` helps an agent:

- show the user 12 mainstream overseas web design styles
- explain the difference between styles in plain language
- generate a visual style board for self-selection
- apply a selected style to a complete homepage or landing page
- support Codex, Claude Code, and other agents through portable Markdown instructions

The default behavior is user-controlled:

> list styles first, let the user choose, then produce.

![How it works](assets/promo-02-how-it-works.png)

## Top 12 Styles

| # | Style | Best for | Feel |
|---|---|---|---|
| 01 | Modern SaaS Clean | SaaS, AI tools, B2B | clean, soft, professional |
| 02 | Editorial Tech | AI labs, research, premium services | intelligent, magazine-like |
| 03 | Linear / Vercel Dark | APIs, infra, developer tools | technical, sharp, calm |
| 04 | Stripe-ish Business | fintech, platforms, commerce | colorful, commercial |
| 05 | Notion / Figma Friendly | productivity, creators, education | approachable, smart |
| 06 | Apple Premium Minimal | hardware, flagship products | premium, precise |
| 07 | Swiss International | studios, culture, portfolios | rational, design-literate |
| 08 | Bento Grid | multi-feature SaaS, AI tools | modular, scannable |
| 09 | Neo Brutalism | campaigns, youth brands | bold, loud |
| 10 | Luxury Editorial | premium brands, consulting, art | refined, tactile |
| 11 | Data Dashboard | analytics, ops, research tools | practical, dense |
| 12 | Playful Startup | education, community, consumer | bright, expressive |

## Example Outputs

The skill can produce complete homepage directions after the user chooses a style. These examples include Modern SaaS Clean, Luxury Editorial, and Bento Dashboard.

![Output examples](assets/promo-03-output-examples.png)

## Install

### Codex

Copy this folder into your Codex skills directory:

```bash
cp -R su-webstyle-top12 ~/.codex/skills/
```

Then prompt naturally:

```text
列出海外主流网页风格，我想自己选。
```

or:

```text
用 su-webstyle-top12，给我一个网页风格看板。
```

### Claude Code

Copy this folder into your Claude skills directory:

```bash
cp -R su-webstyle-top12 ~/.claude/skills/
```

Invoke directly:

```text
/su-webstyle-top12 show me the web style atlas
```

Claude may also auto-use it when your request clearly asks for overseas web style options or a landing page visual direction.

### Generic Agents

Use:

- `SKILL.md` for Agent Skills-compatible tools
- `AGENTS.md` for generic coding agents
- `CLAUDE.md` for Claude Code projects
- `adapters/cursor-rule.md` for Cursor-style rules

## Usage Patterns

Browse styles:

```text
列出海外主流网页风格。
```

Self-select from a board:

```text
给我一个 Top 12 网页风格看板，我自己选。
```

Ask for shortlist only when wanted:

```text
我做的是 AI 数据分析产品，你帮我 shortlist 3 个适合的海外网页风格。
```

Produce after selection:

```text
用 10 Luxury Editorial 做一个完整首页，品牌是一个高端 AI 顾问工作室。
```

## Project Structure

```text
su-webstyle-top12/
├── SKILL.md
├── AGENTS.md
├── CLAUDE.md
├── README.md
├── references/
│   ├── style-atlas.md
│   ├── usage-modes.md
│   └── output-patterns.md
├── assets/
│   ├── style-board-template.html
│   ├── promo-01-style-atlas.png
│   ├── promo-02-how-it-works.png
│   └── promo-03-output-examples.png
├── examples/
│   └── prompts.md
└── adapters/
    └── cursor-rule.md
```

## Creator Mark

Public promo assets in this repository include a small creator mark:

```text
@Sukiea1008
```

The skill does not add this mark to ordinary user outputs unless the user explicitly asks.

## License

MIT
