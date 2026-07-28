# Deliverable Guide

## Signals

| Signal | Path |
|---|---|
| 完整首页 / 落地页 / 官网 / 多屏 section / 导航+转化 CTA | `website` |
| artifact / 一张图说完 / 对比卡 / 清单 / 小工具 / 说明板 / 一页摘要 / 周报壳 / 仪表盘壳 | `artifact` |
| 全局习惯排版 / memory 指定架 / “按我之前的版式” | `user-layout` |
| Ambiguous “做个好看的页面” | Prefer `artifact` if single-screen info; `website` if they say 网站/落地页 |

## Density (artifact)

| Density | Use when |
|---|---|
| `sparse` | One claim, few words, large air |
| `medium` | 2–4 blocks, default |
| `dense` | Tables, many rows, KPIs + series |

**Rule:** ≥6 discrete items → prefer `list-rows` (or table inside `dashboard-ops`), not six equal marketing cards.

## Density vs style conflict

If content is dense but style is low-density (e.g. Apple / Wabi):

1. Keep information: pick a denser template, or
2. Recommend alternate style (Corporate Blue / Modern SaaS / Bento),
Do **not** crush copy into empty luxury air.
