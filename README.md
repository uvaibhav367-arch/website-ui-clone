# Website UI Clone

A Netflix-inspired landing page built as a **Front-End Development training final project**
(Internzvalley, Apr–Jun 2023). Semantic HTML5 with hand-written CSS3 and a small amount of
vanilla JavaScript — no frameworks, no build step, no dependencies.

> Not affiliated with Netflix, Inc. This is an educational UI recreation for practice.

## What is included

| Section | Highlights |
| --- | --- |
| Header | Fixed, transparent over the hero, solidifies on scroll, mobile drawer below 768px |
| Hero | Layered gradient artwork, rating row, maturity badge, Play / More Info buttons |
| Content rows | Three horizontally scrollable poster rows with a hover-scale effect |
| FAQ | Accordion built on native `<details>` / `<summary>`, one item open at a time |
| Footer | Four link columns inside a `<nav>` landmark, plus a disclaimer |

## Techniques used

**Semantic HTML5.** Every region uses the correct element — `<header>`, `<nav>`, `<main>`,
`<section>`, `<article>`, `<footer>` — instead of a wall of `<div>`s. The page also uses
`<details>`/`<summary>` for the FAQ, which gives keyboard support and screen-reader behaviour for
free without any JavaScript.

**CSS custom properties.** Colours, spacing, radius, the header height and the easing curve are all
declared once on `:root` and referenced with `var()`, so the palette can be re-themed from a single
block.

**Grid and Flexbox together.** CSS Grid handles the page-level layout (FAQ list, footer columns),
while Flexbox handles component internals — the header bar, the rating row, the button group and
the poster tracks. The two are used where each one is actually the right tool.

**Responsive from 1024px down.** Three breakpoints: `1024px` trims secondary nav items, `768px`
switches to a hamburger drawer and hides the noise, `480px` compacts the card width and the hero
copy for small phones.

**Progressive enhancement.** The page is fully usable with JavaScript disabled. The script only
adds the scroll-shadow on the header, the mobile drawer, the active-nav highlighting and the
single-open behaviour for the FAQ accordion.

## Accessibility

- A "Skip to main content" link as the first focusable element
- A visible focus ring on every interactive element, using `:focus-visible`
- `aria-expanded` and `aria-label` on the hamburger button, kept in sync with state
- `aria-hidden` on decorative layers so screen readers skip the gradient artwork
- Adequate contrast between text and the darkened hero overlay

## Files

```
index.html    semantic markup
style.css     all styling, organised top to bottom
script.js     progressive enhancement only
```

## Running locally

There is nothing to install. Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Live demo

Hosted with GitHub Pages: https://uvaibhav367-arch.github.io/website-ui-clone/
