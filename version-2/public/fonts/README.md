# Fonts

These Aeonik **trial** files power the `font-aeonik` headers. They're served from the
site root (e.g. `public/fonts/Aeonik-Regular.woff2` → `/fonts/Aeonik-Regular.woff2`) and
wired up via `@font-face` + the `--font-aeonik` theme token in `src/styles/tailwind.css`.

| Weight       | File                      | Used by                                  |
| ------------ | ------------------------- | ---------------------------------------- |
| 400 Regular  | `Aeonik-Regular.woff2`    | `font-aeonik font-normal` (48px headers) |
| 500 Medium   | `Aeonik-Medium.woff2`     | `font-aeonik font-medium`                |
| 600 Semibold | `Aeonik-Semibold.woff2`   | `font-aeonik font-semibold` (buttons)    |

## Trial-font caveat

These are the trial weights (~67 glyphs each). They cover `a–z`, `A–Z`, `0–9` and basic
punctuation, but **not** the curly apostrophe (’ U+2019) or em-dash (— U+2014). Any text
using those characters in an Aeonik context will fall back to Inter for that one glyph.
Swap in the full licensed Aeonik `.woff2` files (same names) to remove this limitation.

Converted from the trial `.otf` files with:

```
fonttools ttLib.woff2 compress -o public/fonts/Aeonik-Regular.woff2 AeonikTRIAL-Regular.otf
```
