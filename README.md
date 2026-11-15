# su-webstyle-top12

**中文** | [English](#english)

海外网页风格 Top 12 Skill（v0.4.0）：可执行 recipe + 选型路由 + 实现验收。
适用于 Codex、Claude Code 和其他 Agent。

**[在线体验 12 种风格 →](https://doublesq97-ui.github.io/su-webstyle-top12/)**

它抬高**最低标准**（色/字/圆角/边框/阴影、构图、Evidence），但不锁死上限——强模型可以叠加发挥。

## v0.4.0 更新

保留 12 款风格与原有 ID，更新 **02 编辑杂志、06 液态玻璃、07 深色工作台**；完善 01、09、11、12 的页面构图。已有风格链接仍可使用。

Looma AI 是用于比较风格的虚构产品。演示在浏览器本地运行，使用预设结果，不调用 AI 服务，也不上传输入内容。

## 它能做什么

- Browse / Choose / Recommend / **Auto** / Apply 五模式
- 12 种风格的**可执行 recipe**（tokens + 构图 + 反模式 + 验收证据）
- 交付物分流：正经网页 / Artifact 模板 / 用户全局排版（只套皮肤）
- Artifact：列表、仪表盘、粘轨阅读架、笔记条等
- 有 `su-motion-top12` 时，建站默认可配对动效

## 默认怎么用

| 场景 | 模式 |
|---|---|
| 看看有哪些风格 | Browse / Choose |
| 帮我推荐 2–3 个 | Recommend |
| 你决定 / 做专业落地页 | **Auto → Apply** |
| 指定 06 / 侘寂米色… | Apply |
| 全局已有惯用排版 | 结构跟用户，只套皮肤并说明 |

## Top 12

| # | 风格 | 适合场景 |
|---|---|---|
| 01 | Modern SaaS Clean | SaaS、AI、B2B（中性纸白 + 单 accent） |
| 02 | Editorial Magazine / 编辑杂志感 | 内容品牌、研究观察、文化专题 |
| 03 | Linear / Vercel Dark | API、基础设施、开发者工具 |
| 04 | Stripe-ish Business | 金融科技、平台 |
| 05 | Notion / Figma Friendly | 协作、教育、创作者 |
| 06 | Liquid Glass / 液态玻璃 | 旗舰产品、创作工具、消费软件 |
| 07 | Dark Workspace / 深色工作台 | AI 工具、效率产品、成熟 SaaS |
| 08 | Fingerprint Signal / 橙信号控制台 | AI/API 分析产品页（暖底 + 单橙信号） |
| 09 | Neo Brutalism | 活动、年轻品牌 |
| 10 | **Wabi Beige / 侘寂米色** | 生活方式、安静品牌 |
| 11 | **Corporate Blue / 蓝色商务** | B2B 可信营销（不是后台壳） |
| 12 | Playful Startup | 教育、社区、消费 |


后台/密读 UI 用模板：`dashboard-ops`、`sticky-rail`、`list-rows`，再套任意风格皮肤。

## 安装

```bash
git clone https://github.com/doublesq97-ui/su-webstyle-top12.git
mkdir -p ~/.codex/skills
cp -R su-webstyle-top12 ~/.codex/skills/
# Claude Code 用户可将目标换成 ~/.claude/skills/
```

```text
/su-webstyle-top12 帮我做一个专业产品首页，你决定风格
```

```text
用 dashboard-ops + Corporate Blue 皮肤做运营数据页
```

## 项目结构

```text
su-webstyle-top12/
├── SKILL.md
├── references/
│   ├── style-catalog.json
│   ├── selection-guide.md
│   ├── deliverable-guide.md
│   ├── artifact-templates.md
│   ├── implementation-contract.md
│   ├── style-atlas.md
│   ├── usage-modes.md
│   ├── output-patterns.md
│   └── recipes/          # 12 份可执行规格
├── assets/
│   ├── samples/
│   └── promo-*.png       # 历史宣传素材
├── docs/               # 当前 12 风格交互体验台（index.html + 相邻资源）
├── examples/prompts.md
└── adapters/cursor-rule.md
```

## License

代码与文档采用 [MIT](LICENSE)。演示附带的 Noto Sans CJK SC Black 子集与 Archivo 字体采用 SIL OFL 1.1，详见[字体说明与许可证](docs/assets/fonts/README.md)。[编辑摄影素材说明](docs/assets/README.md)记录了 AI 生成图片的来源。

Creator mark `@Sukiea1008` 仅用于本仓库宣传图，不写入普通用户产出。

---

<a id="english"></a>

# su-webstyle-top12

[中文](#su-webstyle-top12) | **English**

Top 12 overseas web styles with executable recipes (v0.4.0): select, auto-route, apply, and verify.

## Modes

Browse · Choose · Recommend · **Auto** · Apply

**[Live Core 12 demo →](https://doublesq97-ui.github.io/su-webstyle-top12/)**

## Deliverable paths

- **website** — full recipe (signatures, sections, evidence)
- **artifact** — template + density + skin
- **user-layout** — keep user structure; skin only + disclose

## Catalog highlights

- 02 **Editorial Magazine** — Chinese serif hierarchy and monochrome editorial photography.
- 06 **Liquid Glass** — a colored content stage and operable floating glass controls.
- 07 **Dark Workspace** — neutral charcoal surfaces and restrained functional color.
- 01, 09, 11 and 12 receive more distinct section layouts. All 12 IDs remain stable.

Looma AI is a fictional product with local, preset interaction results; it does not call an AI service or upload input.

## Install

```bash
git clone https://github.com/doublesq97-ui/su-webstyle-top12.git
mkdir -p ~/.claude/skills
cp -R su-webstyle-top12 ~/.claude/skills/
```

## License

[MIT](LICENSE) for code and documentation. Bundled fonts retain their [SIL OFL licenses](docs/assets/fonts/README.md).
