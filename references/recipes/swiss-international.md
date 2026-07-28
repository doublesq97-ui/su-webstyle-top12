# 07 · swiss-international · Restrained Swiss / 克制瑞士风

## Identity
- ID: `swiss-international`
- Index: 07
- One-liner: 克制瑞士风 — type mass, modular placement, ink rules, one signal color (restrained ITS).
- Density: medium | Surface: light
- Canonical demo (human-calibrated):  
  `Documents/skill-design/swiss-ab-compare/free-swiss.html` (blue) · `free-swiss-red.html` (red)

## Intent
- Best for: Studios, architecture, culture, design-literate product pages, structured AI tools
- Avoid for: Soft SaaS candy, playful blobs, graph-paper wallpaper “grids”
- Pair with: editorial-tech
- Never mix with: playful-startup primary

## Signal color: blue vs red (auto-route)

Same structure. Only **signal** changes.

| Variant | Signal hex | Secondary flash | Auto when |
|---|---|---|---|
| **blue** (default) | `#0B3DFF` | `#FFE600` yellow square | tech / product / AI / digital / cool rational / default 07 |
| **red** | `#E30613` | `#FFE600` or black hairline | culture / poster / campaign-in-restraint / architecture / “precision / strength” tone / user says 红 / Swiss red |

Routing:
1. User names 红/red/poster red → **red**
2. Culture, gallery, architecture manifesto, bold thesis pages → prefer **red**
3. Product, SaaS, AI tool, console-adjacent marketing → **blue**
4. Unclear → **blue**
5. Never use both blue and red as large fills on one page; one signal only

CSS: `--signal` is the only high-chroma brand mark (logo accent, Fig label, module dots, final Begin button). Primary “Start” in hero may stay **black**.

## Color Tokens
| Token | Blue | Red | Usage |
|---|---|---|---|
| paper / bg | `#F3F1E9` | same | warm print paper (not cool gray) |
| ink / text | `#0A0A0A` | same | structure |
| quiet / muted | `#5C5C5C` | same | body secondary |
| surface | `#FFFFFF` | same | figure boards |
| signal | `#0B3DFF` | `#E30613` | logo accent, Fig em, module dots, **one** text CTA |
| flash | `#FFE600` | `#FFE600` | tiny square only |
| line | `#0A0A0A` | same | 1px structural rules |

## Type
- Stack: Helvetica Neue, Helvetica, Arial, PingFang SC, Noto Sans SC  
- **Mass display**: clamp(4rem, 11vw, 7.5rem) / 800 / -0.06em / 0.86 / uppercase for brand wordmark  
- Claim: clamp(1.6rem, 3.2vw, 2.35rem) / 700  
- Meta: 11px / 700 / tracking 0.14em / uppercase  
- Body quiet: 13–14px / muted  

## Layout grammar (from calibrated B — reverse-written)

### Modular placement (not decorative mesh)
- Use a **12-column CSS grid for placing content** (columns are for coordinates).  
- **Forbidden:** full-page `linear-gradient` column wallpaper / graph paper through hero or product.  
- Structural ink: section bottom borders, board frames, strip dividers — few and decisive.

### Hero composition
1. Kicker with two tiny squares (signal + yellow flash) + short uppercase label  
2. **Type mass left** (brand wordmark huge, multi-line OK) spanning ~8/12  
3. **Side rail right** (~4/12): index label + short body + **black** Start button  
4. Claim row under a full horizontal rule: large claim left / quiet body right  
5. **Figure plate:** `Fig. 01` label in first columns + white board (source | tasks | black signal panel)

### Modules strip
- Head: `02 — System` + large section title  
- Three equal cells, vertical ink dividers, big numbers `01/02/03` + signal color square on numbers  
- No soft card shadows, no rounded corners  

### Closing
- Huge uppercase line left  
- Right box with hairline left border + quiet text + **one signal-colored Begin** (only large chroma CTA)

### No-hero variant
- Skip type-mass hero; open with figure board + modules  
- Same tokens, black primary actions, signal for accents only  

## Surface rules
- Radius: **0**  
- Shadow: **none**  
- Product board: 1px ink border, white ground, internal 1px splits  
- Highlight column: ink fill + paper text (for KPI/signal count)

## Anti-patterns (Codex failure modes)
1. Graph-paper 12-column mesh over the whole page  
2. Soft SaaS centered hero with rounded product chrome  
3. Blue or red **large soft button** as every CTA (hero Start stays black)  
4. Yellow/red/blue washes as section backgrounds  
5. Equal soft shadow cards without ink frames  
6. Both blue and red as primary signals  

## Style Evidence
1. Paper field clean — no mesh cage  
2. Extreme type scale on brand or section titles  
3. Asymmetric 12-col placement (type mass + side rail or claim split)  
4. Product as **Fig. plate**, not floating glass card  
5. One signal color (blue **or** red) + black structure  
6. Module strip with ink dividers and large numbers  

## Implementation hard rules
1. No full-viewport grid wallpaper.  
2. `--signal` = blue or red per auto-route; document which.  
3. Hero primary button = black; signal color for logo accent, Fig label, module dots, final Begin.  
4. H1 brand mass must dominate the first screen.  
5. Figure board: three columns with ink rules; third column may invert to ink.  
6. Radius 0, shadow none everywhere primary.  

## Skin subset
```
bg #F3F1E9 · surface #FFF · ink #0A0A0A · quiet #5C5C5C
signal blue #0B3DFF | red #E30613
flash #FFE600 · radius 0 · shadow none
```

## CSS Token Sketch
```css
:root {
  --bg: #F3F1E9;
  --surface: #FFFFFF;
  --text: #0A0A0A;
  --muted: #5C5C5C;
  --signal: #0B3DFF; /* or #E30613 */
  --flash: #FFE600;
  --radius-md: 0;
  --shadow: none;
}
```

## Reference demos (keep)
- Blue: `skill-design/swiss-ab-compare/free-swiss.html`  
- Red: `skill-design/swiss-ab-compare/free-swiss-red.html`  
Do not regress toward graph-paper wallpaper implementations.
