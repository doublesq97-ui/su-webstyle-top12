# Layout Variants: Hero vs No-Hero

Styles provide **skin + composition grammar**. They do **not** force a single product IA (e.g. wabi is not “always a reading app”).

## When to use which

| Variant | When | Structure |
|---|---|---|
| **hero** | 正经营销网页、落地页、品牌首页、明确说要官网/Hero | Nav + hero (often 100svh) + follow-up sections + CTA |
| **no-hero** | Artifact、工具壳、控制台、周报、列表、用户全局排版、单屏工作台 | Nav optional + content shell first; **no** marketing hero stack |

## Routing

1. `deliverable: website` + marketing intent → default **hero**  
2. `deliverable: artifact` → default **no-hero**  
3. `deliverable: user-layout` → honor user structure (usually no marketing hero)  
4. User says 带 Hero / 落地页 → hero  
5. User says 工具页 / 控制台 / 去掉 Hero / 直接产品 → no-hero  

## Apply rules

- Load the same `recipes/{id}.md` for both variants.  
- Hero variant: use Signature Composition + Section Recipes.  
- No-hero variant: use **Skin subset** + sharp/quiet product chrome; skip 100svh hero and oversized campaign claims if they fight density.  
- Never invent a “reading system / directory reader” unless the user asked for a learning map.

## Demo recommendation

For style demos, ship **two builds** when useful:
1. `*-hero.html` — marketing  
2. `*-app.html` or no-hero shell — product/artifact  

Same tokens, different structure.
