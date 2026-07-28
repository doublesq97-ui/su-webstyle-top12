# Usage Modes

## Browse

Triggers: 列出风格 / atlas / 有哪些 / show me styles  
Action: Compact Top 12 table; offer HTML board. Do not auto-implement a full page.

## Choose

Triggers: 我自己选 / options then I’ll pick  
Action: Menu or board; wait for number/id.

## Recommend

Triggers: 推荐 / 不知道选哪个 / shortlist  
Action: 2–3 styles with tradeoffs. Do not finalize unless user says decide.

## Auto

Triggers: 你决定 / 专业一点 / 帮我做好看 / build a landing without naming a style  
Action: Use selection-guide; pick one style silently; one-line fit; proceed to Apply.

## Apply

Triggers: named style, or Auto complete  
Action:

1. Resolve deliverable path.
2. Load only `recipes/{id}.md` + implementation-contract.
3. Write Style Contract (deep for website; light for artifact/user-layout).
4. Implement.
5. Verify evidence; fix on fail.

## User-layout override

If global layout preference exists, path = `user-layout` even when the user also asked for a style. Skin only + disclosure sentence.
