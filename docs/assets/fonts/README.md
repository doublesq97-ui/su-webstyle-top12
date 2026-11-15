# Fonts

The demo self-hosts the following display fonts. Other text uses the system stacks declared in the recipes; the editorial serif is not bundled.

- `su-display-sc-black.woff2` — glyph subset of Noto Sans CJK SC Black, under SIL OFL 1.1. See [OFL-NotoSansCJK.txt](OFL-NotoSansCJK.txt) and the [upstream Noto CJK project](https://github.com/notofonts/noto-cjk).
- `archivo-latin-800-normal.woff2` and `archivo-latin-900-normal.woff2` — Archivo Latin weights 800 and 900 from [Fontsource](https://fontsource.org/fonts/archivo), under SIL OFL 1.1. See [OFL-Archivo.txt](OFL-Archivo.txt).

The CJK subset covers the board’s display text, not arbitrary Chinese content. Update `chars.txt` and regenerate the subset when changing those headings. Run from this directory with fontTools installed and the upstream `NotoSansCJK-Black.ttc` available (SC is collection face 2):

```bash
python3 -m fontTools.subset NotoSansCJK-Black.ttc --font-number=2 \
  --text-file=chars.txt --flavor=woff2 \
  --output-file=su-display-sc-black.woff2
```

Keep both license files with any redistributed font files. Font licenses are separate from the repository’s MIT license.
