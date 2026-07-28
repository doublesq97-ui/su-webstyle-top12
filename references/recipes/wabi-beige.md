# 10 · wabi-beige · Wabi Beige

## Identity
- ID: `wabi-beige`
- Index: 10
- One-liner: Warm paper clay skin — calm, tactile beige. **Not** a locked reading-app layout.
- Density: low–medium (content decides) | Surface: light
- Reference only: color/type feel from `wabi-reading` theme (distill-to-learning-system). **Do not** force directory+reader / learning-map information architecture.

## Intent
- Best for: Calm brands, hospitality, reflective tools, quiet product pages, soft AI utilities
- Avoid for: Neon campaigns, neo-brutal, loud multi-color startup confetti
- Pair with (max 1 secondary): apple-premium-minimal
- Never mix with: neo-brutalism, fingerprint-signal as equal primary

## What this style is / is not
| Is | Is not |
|---|---|
| Warm paper tokens + clay accent + quiet type | A fixed “阅读体系” product template |
| Skin that can wrap hero sites **or** no-hero shells | Must rebuild nav as chapter directory |
| Optional light serif on marketing titles | All UI must be serif reading mode |
| Soft clay decoration allowed | Must include learning-map path screens |

Later teams may restyle fonts; **base tokens below are the floor.**

## Color Tokens (base)
| Token | Value | Usage |
|---|---|---|
| bg | `#EFEAE0` | warm paper ground |
| surface | `#F7F3EA` | cards / shells — warm cream (not cool gray-white, not mud fill) |
| text | `#3A352F` | ink |
| muted | `#766E64` | secondary |
| line | `#CFC5B6` | borders |
| accent | `#8D7C64` | marks, links, labels |
| deep | `#3A352F` | solid CTA |
| accentInk | `#FFFDF8` | on deep CTA |
- Rule: Keep warmth. Surface cream. Mid clay only as small decoration (blob/band ≤25% opacity area), never brown-on-brown UI.

## Type & Scale (base, adjustable)
- Display optional: Georgia / "Songti SC" / "Noto Serif SC", **weight 400–500** on marketing H1/H2 only  
- Body & controls: system-ui / PingFang SC / sans (required for dense product UI)  
- H1: clamp(2.25rem, 4.5vw, 3.5rem) / 400–500  
- Body: 1.0625rem / 400 / 1.65  
- User may swap fonts later; keep weight hierarchy and contrast.

## Spacing & Surface
- Prefer air over packing; content density can rise if surfaces stay cream  
- Radius: 4–10px (restrained; not 20px candy)  
- Border: `#CFC5B6` hairline  
- Shadow: soft warm `0 16px 48px rgba(74,62,48,.10)` or none  
- Optional: one soft clay gradient shape behind hero (decorative only)

## Signature (website · hero variant)
1. Paper ground + cream product/card + quiet claim + deep CTA  
2. Soft material air; clay accent sparingly  

## No-hero / artifact variant
- Skip marketing hero stack and 100svh ad frames  
- Keep tokens; start from nav + content shell / sticky-rail / list / product panel  
- Same skin rules

## Anti-patterns
- Forcing learning-map / chapter-reader IA  
- Cool gray-beige chrome  
- Mud `#D8CFC0` as every panel  
- Heavy black display type  
- Orange analytics signal or grass-green nature skins  
- Gold foil fake luxury  

## Style Evidence
1. Warm paper ground (not cool gray)  
2. Cream surfaces `#F7F3EA`  
3. Deep ink or clay CTA readable  
4. Quiet type hierarchy (serif optional, not mandatory everywhere)  
5. No locked reading-app chrome unless user asked for it  

## Implementation hard rules
1. Do **not** invent directory+reader layout unless deliverable is a learning map.  
2. `--surface: #F7F3EA` for shells; not pure cold white.  
3. Primary button: deep `#3A352F` + `#FFFDF8`.  
4. Hero optional — see layout-variants (hero | no-hero).  
5. Fonts are defaults; structure follows deliverable path, not theme name.

## CSS Token Sketch
```css
:root {
  --bg: #EFEAE0;
  --surface: #F7F3EA;
  --text: #3A352F;
  --muted: #766E64;
  --line: #CFC5B6;
  --accent: #8D7C64;
  --deep: #3A352F;
  --accent-ink: #FFFDF8;
  --radius-md: 8px;
  --shadow: 0 16px 48px rgba(74, 62, 48, 0.1);
}
```
