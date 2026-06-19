# Portfolio Site — Cursor Rules

## Project Context
This is a portfolio website for a product/founding designer, targeting startup founders as the primary audience. The site was initially built from a Figma design via Figma MCP and is now being fine-tuned in Cursor. The codebase is already partially functional — the goal is to polish, not rebuild.

---

## Golden Rule
**This is a fine-tuning task, not a rebuild.** Preserve everything that already works. Every change should be surgical and intentional. When in doubt, ask before changing.

**Never delete existing files or content without explicit confirmation from the user.**

---

## Slash Commands

### `/plan [task]`
Analyze the task, list files to touch, flag risks. Output a numbered plan. NO code. Wait for approval.

### `/implement [plan or task]`
Execute the approved plan step by step. Narrate briefly. Stop if something is unexpected.

### `/review`
Audit current code for bugs, inconsistencies with Figma, accessibility issues, and responsive breakages. Output findings as: critical / warning / suggestion.

### `/fix [issue]`
Targeted fix only. Diagnose root cause first. Fix ONLY the broken thing. Do not refactor surroundings.

### `/pixel [section name]`
Pixel-perfection pass on a specific section. Compare implementation against Figma intent. Check spacing, font sizes, colors, alignment, and responsive behavior. List all discrepancies.

### `/missing`
Scan the project for missing pages, components, assets, or sections that exist in the design but are not yet implemented. Output a checklist.

---

## Scope Rules

1. **Touch only what's requested.** Do not refactor, rename, or restructure files unless explicitly asked.
2. **No new dependencies** without asking first and explaining why the existing stack can't handle it.
3. **No design changes.** The Figma design is the source of truth. If something looks wrong in the design, flag it — don't "fix" it in code.
4. **Preserve existing structure.** File names, folder layout, component hierarchy — keep them as they are unless asked to change.
5. **One task at a time.** Complete and confirm one change before starting the next.

---

## Design Fidelity

### Figma Is the Source of Truth
- Match the Figma design exactly: spacing, font sizes, font weights, colors, border radius, shadows, line heights.
- Use exact values from the design — don't round `17px` to `16px` or swap `#1A1A2E` for generic `gray-900`.
- If a value doesn't align with the Tailwind scale, use arbitrary values: `p-[17px]`, `text-[15px]`, `tracking-[-0.02em]`.

### Typography
- Match font family, size, weight, line-height, and letter-spacing from Figma precisely.
- Use the exact Google Fonts or local fonts specified in the design.
- Pay attention to text casing (uppercase, capitalize, lowercase) — apply via Tailwind, not in the content.

### Spacing & Layout
- Use Figma's exact gap, padding, and margin values.
- Match the layout model: if Figma uses auto-layout (flex), use flex. If it uses absolute positioning, match that.
- Check max-width constraints on content containers.

### Colors & Effects
- Use exact hex or rgba values from Figma.
- Don't substitute Tailwind default colors for design-specific colors — extend the theme or use arbitrary values.
- Match shadows, blur, opacity, and gradients precisely.

### Assets & Images
- Export assets at the correct resolution (2x for retina where needed).
- Use SVG for icons and logos. Raster for photos.
- Optimize images before committing (compress PNGs, use WebP where supported).
- If assets are missing from the repo, list them — don't use placeholders without flagging it.

#### When Figma image imports fail
- Updated. The new section covers the full migration protocol — batch scanning, the `/public/assets/` convention, TODO placeholders for missing exports, and the naming cleanup from Figma's `Frame2087328...` format to human-readable names.
- Your immediate next steps in Cursor:
  - `/missing` — let it scan for all `figma:asset/` references.
  - Export the actual images from Figma, rename them descriptively, drop into `/public/assets/`.
  - `/implement` — replace all `figma:asset` references with `/assets/` paths per the migration rules.
  - `npm run build` to verify.

---

## Responsive Behavior

- Implement responsive design for at minimum: mobile (375px), tablet (768px), desktop (1280px+).
- If the Figma file has mobile/tablet frames, match them exactly.
- If the Figma file only has desktop, use sensible mobile adaptations — but flag what you improvised so I can review it.
- Test that nothing breaks between breakpoints (not just at the breakpoints).

### Responsive Layout Rules
- Treat **768px** as the global breakpoint:
  - Below **768px**: sections stack vertically (no side-by-side columns).
  - At/above **768px**: multi-column layouts may apply per Figma.
- Never allow content to overlap: on small screens, elements must wrap or stack so that no text, image, or component sits on top of another.
- Every major section should live inside a clear container with internal padding that preserves breathing room at all breakpoints.
 - Always manually check the layout at least on 375px, 768px, and 1280px widths after changes.
 - If the responsive behavior for a specific section is unclear from Figma, ask the user before making non-trivial layout decisions.

### Testing & Verification Rules
- **Never show a change before testing it.**
- After every code edit, run `ReadLints` or check the dev server output to ensure no syntax or build errors were introduced.
- If a change breaks the build or dev server, fix it immediately before reporting completion to the user.

---

## Code Standards

### General
- Keep files under 200 lines. Split large components into smaller, composable pieces.
- Use semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`, `<article>`.
- Every `<img>` needs a meaningful `alt` attribute. Every link needs descriptive text.
- No inline styles. Use Tailwind classes exclusively (or the project's existing CSS approach — match what's there).

### Animations & Interactions
- Keep animations performant: only animate `transform` and `opacity`.
- Use CSS transitions for simple hover/focus states.
- For scroll-based or complex animations, use the project's existing animation library (GSAP, Framer Motion, etc.) — don't introduce a new one.
- All animations should respect `prefers-reduced-motion`.

### Performance
- Lazy-load images below the fold.
- Don't load fonts you're not using.
- Keep the critical rendering path lean — no heavy JS blocking initial paint.
- Use `loading="lazy"` and `decoding="async"` on images.

---

## Accessibility Baseline

- Keyboard navigation must work for all interactive elements.
- Focus states must be visible.
- Color contrast must meet WCAG AA (4.5:1 for text, 3:1 for large text).
- Skip-to-content link for screen readers.
- All form inputs (if any) need associated labels.

---

## When Stuck

1. State 1 clear problem.
2. Propose 3 options with trade-offs.
3. Give 1 recommendation.
4. Wait for confirmation before implementing.

---

## When Done with a Task

- List files changed.
- Note any deviations from Figma and why.
- Flag anything that needs manual review.
- Suggest what to visually check in the browser.

---

## Checklist (Run Before Every Response)

- [ ] Am I only changing what was requested?
- [ ] Does this match the Figma design exactly?
- [ ] Is it responsive and accessible?
- [ ] Did I introduce any new dependencies or patterns?
- [ ] Did I break anything that was already working?
- [ ] Would I notice a visual difference from the design?

