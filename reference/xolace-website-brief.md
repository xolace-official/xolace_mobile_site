# Xolace Homepage — Build Brief

> **Read this entire document before writing any code.** This is a specification, not a suggestion. The design discipline matters as much as the implementation. If a design decision is missing here, default to *more restraint, more whitespace, more silence* — never to common SaaS patterns.

---

## What you are building

A single-page marketing website (homepage only for v1) for **Xolace**, a mental health app. The site has one job: make a stranger feel that this app understands what it is like to be inside their own head, in under 90 seconds.

It is the opposite of most product sites. It is quiet, slow, literary, and confident. Restraint is the brand. Every "common-sense" SaaS pattern (feature grids, three-step explanations, big CTAs, testimonial carousels, gradient buttons) is **wrong** here and must be avoided.

---

## Tech stack — already in place

The project uses this stack. Do not introduce new dependencies unless absolutely necessary. Reuse what is already installed.

- **Next.js 16** with App Router and Turbopack
- **React 19**
- **Tailwind CSS v4** (with `@tailwindcss/postcss`)
- **shadcn** components (`shadcn`, `radix-ui`)
- **Motion** (`motion` — formerly Framer Motion) for animations
- **Lenis** (`lenis`) for smooth scroll
- **next-themes** for theme handling (used here only to enforce a single light cream theme; no theme toggle in v1)
- **lucide-react** for icons (use sparingly — see rules below)
- **clsx** and **tailwind-merge** for class composition (via the standard `cn()` helper from shadcn)
- **coolshapes-react** is available but **do not use it on this page** — it does not fit the visual restraint
- **Supabase** is available but **not needed for the homepage**

Use **TypeScript** throughout. Use **React Server Components** by default; use `"use client"` only for the Motion fade-in wrapper and the Lenis initializer.

---

## Hard rules — do not violate these

These are non-negotiable. If any instruction below conflicts with one of these rules, the rule wins.

1. **No feature grid with icons.** Do not build a 3-column "features" section. Features are explained as essay-style sections instead.
2. **No "How it works in 3 steps" numbered section.** Numbered step explanations are forbidden.
3. **No testimonial carousel.** Even if asked to add testimonials later, never use carousels or auto-rotating quotes.
4. **No call-to-action above the fold.** The hero is one sentence. No buttons. No "Download Now." The visitor must scroll.
5. **No gradients on backgrounds or buttons.** Solid colors only. Subtle gradients are still gradients.
6. **No drop shadows on cards or buttons.** If something needs separation, use whitespace or a hairline border in the muted gray.
7. **No emoji anywhere.** Not in copy, not in section labels, not in buttons.
8. **No bright primary colors.** Stick exclusively to the palette defined below.
9. **No "wellness" stock photography or generic illustrations.** Only screenshots of the actual app and (optionally) the existing Xolace mascot.
10. **No live chat widget, no cookie banner that takes over the screen, no exit-intent modal, no email signup popup.** None of these. Ever.
11. **No animations beyond gentle fade-in on scroll.** No bounces, slides, parallax, or hover transforms beyond color/opacity.
12. **Body text must be at least 18px on desktop.** Smaller text reads as informational/startup-y. Larger reads as editorial.
13. **No lucide icons inside body content.** The only acceptable icon use is a simple arrow character (→) typed as text. Do not import `ArrowRight` from lucide-react for this page.

---

## Color palette — exact values

The site uses **four colors only**. Do not introduce additional colors for hover states, success states, or any other purpose unless instructed.

Add these as CSS custom properties in `globals.css`, and extend Tailwind v4's theme to reference them.

```css
@theme {
  --color-bg: #FBF4ED;          /* Cream background — primary surface */
  --color-text: #2C2416;        /* Warm dark brown — primary text */
  --color-accent: #D08B6A;      /* Muted coral — used SPARINGLY for links and the most important button */
  --color-accent-hover: #B97755; /* Slightly deeper coral for hover states only */
  --color-muted: #8A7D6D;       /* Warm muted gray — captions, metadata, footer */
}
```

In Tailwind v4, reference these as `bg-bg`, `text-text`, `text-accent`, `text-muted`, etc., depending on how the theme is configured. The exact utility class names depend on the project's existing Tailwind config — match the convention already in use.

**Usage rules:**
- The background of every section is `--color-bg`. Do not alternate background colors between sections.
- All body and heading text is `--color-text`.
- `--color-accent` appears only on: links, the App Store/Play Store buttons, and any in-text emphasis. Use it as little as possible. When it appears, it should mean something.
- `--color-muted` is for: captions under screenshots, the footer, fine print, secondary metadata. Never for body text.
- Buttons should be outlined in coral with coral text on cream — **not** filled coral with white text. The filled version is too loud.

---

## Typography

**Use these fonts (load via `next/font/google` in the root layout):**

- **Headings:** `Newsreader` — a modern serif with character. Weight 400 for most headings, weight 500 for the hero only.
- **Body:** `Inter` — for paragraph text and UI elements. Weight 400 for body, weight 500 for the rare emphasis.

Configure both as CSS variables (`--font-newsreader`, `--font-inter`) via `next/font/google` and apply them in the root layout. Map them to Tailwind v4 theme tokens (`--font-serif` and `--font-sans`).

**Fallbacks:** Georgia for serif, system sans-serif stack for body.

**Sizing scale (desktop):**

| Element | Size | Line height | Weight |
|---|---|---|---|
| Hero headline (h1) | 56–64px | 1.15 | 500 |
| Section headings (h2) | 32–36px | 1.25 | 400 |
| Subheadings (h3) | 22–24px | 1.3 | 400 |
| Body paragraphs | 19–20px | 1.65 | 400 |
| Captions / footer | 15–16px | 1.5 | 400 (muted color) |

**Sizing scale (mobile, under 768px):**

| Element | Size |
|---|---|
| Hero headline | 36–40px |
| Section headings | 26–28px |
| Body | 18px |
| Captions | 14px |

**Typography rules:**
- Maximum line width for body text: 65 characters (~600–680px wide). Do not let lines stretch wider — long lines kill readability.
- No `text-align: center` on body paragraphs. Headlines can be left-aligned or centered; paragraphs are always left-aligned.
- No `text-transform: uppercase` anywhere except possibly the smallest footer labels (and even then, prefer not to).
- No letter-spacing tweaks except very tight (`-0.01em`) on the hero headline if it improves the visual rhythm.

---

## Layout

- **Single-column layout throughout.** No multi-column grids for content.
- **Content max-width: 680px**, centered. The whole site reads in one narrow column, like an essay.
- **Page max-width: 1200px** for outer container.
- **Vertical spacing between sections: 120–160px on desktop, 80–100px on mobile.** Generous. Each section should feel like turning a page.
- **Vertical spacing inside a section (between heading and body, between paragraphs): 24–32px.**
- **Margins on either side of content on mobile: at least 24px.** Do not let text touch screen edges.

---

## Smooth scroll with Lenis

Initialize Lenis once at the root layout level (or via a small `"use client"` provider component). Use Lenis's default smoothness — do not crank it up; aggressive smoothness fights the user's scroll input and feels gimmicky. Default behavior is enough.

A minimal setup:

```tsx
"use client";

import { ReactLenis } from "lenis/react";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root options={{ duration: 1.2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
}
```

Wrap the page (or the entire app via the root layout) with this provider. Do not enable smooth scroll on touch devices — Lenis handles this by default; leave the touch setting off.

---

## Motion / fade-in on scroll

Use the `motion` package. Each `<section>` fades in gently as it enters the viewport.

Build a small reusable component (a `"use client"` component) that wraps each section. It applies:

- Initial state: `opacity: 0`
- Final state: `opacity: 1`
- Duration: 600ms
- Easing: ease-out
- Triggered once when the section enters the viewport (use `whileInView` with `viewport={{ once: true, margin: "-10%" }}`)

**Do not animate transform or position.** Opacity only. The motion should be barely perceptible — a soft arrival, not an entrance.

Example skeleton:

```tsx
"use client";
import { motion } from "motion/react";

export function FadeIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.section>
  );
}
```

The hero section (Section 1) should be visible immediately on page load — do **not** fade it in. Sections 2 through 8 use the fade-in wrapper.

---

## Page structure — render in this exact order

The page has 8 sections plus a footer. Each section is its own `<section>` element. Do not combine sections. Do not reorder them.

The page is one file: `app/page.tsx` as a Server Component. Inside it, render the static content directly. Use the `FadeIn` client component to wrap sections 2–8. The hero (section 1) is plain markup, not wrapped.

The root layout (`app/layout.tsx`) wraps everything in the Lenis smooth scroll provider and the Newsreader + Inter font variables. Set the `<body>` background to `--color-bg` and text color to `--color-text` so every page inherits the cream surface.

---

### Section 1 — Hero

**Visual:** Cream background. One sentence in large serif, weight 500. Below it, after about 32px of space, a single subtitle sentence in body font, muted color, smaller. **No button. No image. No logo above the headline.**

The headline should sit roughly 40% down the viewport on first load, not at the top edge. Use flexbox/grid centering with extra top padding to achieve this. Minimum section height: 90vh.

**Exact copy:**

> # For the moments that don't have a name yet.
>
> *Xolace is a quiet place to say what's true, when you can't find the words for it on your own.*

The subtitle is in italic.

---

### Section 2 — A Mirror reflection (the product, shown)

**Visual:** Cream background. A blockquote treated as the hero of this section. The quote is in the body font but larger (~26–28px), with a thin 2px vertical line in the accent color on the left side, with 24px of left indentation from the line. Below the quote, after a small gap, a caption in muted color.

**Exact copy:**

> "Something's activated but there's nothing to show for it, just this restless static and underneath it an openness that feels more like exposure than relief."
>
> *— The Mirror, after someone tapped three words.*

The caption is in italic, muted color, 16px on desktop.

---

### Section 3 — The core promise

**Visual:** Cream background. Section heading (h2), then three short paragraphs. Generous spacing between paragraphs (32px). The middle paragraph — *"The Mirror gives you back the words."* — should stand alone as its own paragraph for emphasis.

**Exact copy:**

> ## You don't have to know what you're feeling.
>
> You arrive with whatever is there — heavy, foggy, restless, raw, or a feeling that doesn't have a shape yet. You say a little or a lot. You tap a word, type a sentence, or just speak.
>
> The Mirror gives you back the words.
>
> Sometimes that's enough. Sometimes you stay longer. Either way, you leave when you're ready.

---

### Section 4 — The entry screen, shown

**Visual:** A single screenshot of the Xolace app entry screen, centered, on the cream background. The screenshot should be at a comfortable size — roughly 320–380px wide on desktop (it is a phone screenshot). Below it, a caption in muted color.

**Image:** I will provide this image myself. Use the Next.js `<Image>` component from `next/image` and reference it with a placeholder path like `/entry-screen.png`. If the image file is missing, render a placeholder div of the same dimensions (~360px × 740px) with a 1px hairline border in muted color and the text "entry screen" inside in muted gray, centered.

**Exact caption:**

> *The entry. Start anywhere — a word, a sentence, your voice.*

---

### Section 5 — The three layers

**Visual:** Cream background. An h2 heading, then three subsections stacked vertically. Each subsection has an h3 heading, one paragraph of body text, and one screenshot below. The three subsections are separated by a thin horizontal rule rendered as a 1px line in the muted color at 40% opacity, with generous vertical padding (~64px) above and below each rule.

**Exact copy:**

> ## Three things, each its own quiet moment.

Then three subsections, each separated by a horizontal rule:

> ### The Mirror
>
> You say what's here. The Mirror reflects it back — not advice, not a fix, just the words for what you couldn't say. Sometimes that's the whole session.

[Image: I will provide. Use placeholder path `/mirror-screen.png`.]

---

> ### The Echo
>
> After a session, you can see one anonymous reflection from someone else who felt something with the same shape. Not a feed. Not a forum. Just proof that you're not the only one carrying this tonight.

[Image: I will provide. Use placeholder path `/echo-screen.png`.]

---

> ### The Timeline
>
> Your own past sessions, private, searchable by feeling. So that months from now, when something familiar returns, past-you is a resource for present-you.

[Image: I will provide. Use placeholder path `/timeline-screen.png`.]

Same placeholder rule applies: if the image file is missing, render a 360px × 740px div with a 1px hairline border in muted color and the layer name as placeholder text.

---

### Section 6 — Anti-engagement statement

**Visual:** Cream background. The h2 heading is slightly larger than other section headings (~40px) because this is the moment that distinguishes Xolace from every other app. Two short paragraphs follow.

**Exact copy:**

> ## We won't try to keep you here.
>
> No streaks. No daily notifications. No reasons to come back unless you have one.
>
> Xolace ends every session by telling you to go live your life. We mean it.

---

### Section 7 — Privacy, in human language

**Visual:** Cream background. This section can have a very subtle visual differentiation — a 1px hairline border in muted color at 30% opacity wrapping the section's content area, with 48px of inner padding. Or alternatively, the section can be set apart by extra vertical whitespace alone. **Do not change the background color.** No card-style box. The line border, if used, should be barely there.

**Exact copy:**

> ## What you say is yours.
>
> We process what you write so the Mirror can respond. We never store it longer than we need to. We never sell it. We never share it.
>
> The only exception is that if something you write suggests you may be in danger, we will quietly offer you help — not because we are watching, but because we promised to be a safe place, and a safe place does not leave you alone in a crisis.
>
> Read more about how we hold this →

The "Read more" line is a link in accent color with no underline by default. An underline appears on hover, or the color shifts to `--color-accent-hover`. The arrow is a typed `→` character, not an SVG icon. Link target: `/privacy` (placeholder — the page does not need to exist yet; route it to `#` if `/privacy` is not built).

---

### Section 8 — Download

**Visual:** Cream background. Centered h2. Below it, two buttons side by side (stacked vertically on mobile, full-width with 16px gap). The buttons are **outlined** in accent color, 1.5px stroke, with accent-color text. On hover, the buttons fill in accent color with cream text. No icons inside the buttons. Just the text.

Implement as `<a>` elements styled as buttons, not actual `<button>` elements, since they navigate externally. If using shadcn's `Button` component, set `variant="outline"` and override the colors to match the palette exactly — do not let shadcn's default outline variant colors leak through.

**Exact copy:**

> ## When you're ready, it's here.

Two buttons:

- `[App Store]` → links to iOS App Store listing (use `#` placeholder if not provided)
- `[Play Store]` → links to Google Play listing (use `#` placeholder if not provided)

Buttons should be roughly 160px wide × 48px tall on desktop, with the label centered.

---

### Footer

**Visual:** Small muted text on cream, separated from section 8 by ~80px of whitespace and a 1px hairline divider at 30% opacity. All footer text is in muted color at 15px.

**Exact copy:**

> *Xolace. Made in Accra by people who needed this to exist.*
>
> Why this exists · For institutions · Privacy · Contact
>
> © Xolace 2026

The four links are separated by middle-dot characters (·) on a single line on desktop. On mobile, they wrap as needed. All links use muted color and underline only on hover. The first line (italic tagline) sits above the link row. The copyright line sits below.

Link targets: `/why`, `/institutions`, `/privacy`, `/contact` — use `#` placeholders if these routes are not built.

---

## Interaction and motion

Restraint applies to motion too.

- **Fade-in on scroll:** Sections 2–8 use the `FadeIn` wrapper described above. Hero does not fade in.
- **Link hover:** Color shift from `--color-accent` to `--color-accent-hover`, 200ms ease. Or underline appears, 150ms ease. Pick one consistent approach across all links — recommend the color shift, since underlines on every link can feel busy.
- **Button hover:** Outlined → filled. Background fills with `--color-accent`, text becomes `--color-bg`. Transition 200ms ease-out.
- **No scroll-jacking, parallax, or position-based effects** beyond what Lenis provides natively.
- **No cursor effects** (custom cursors, trailing dots, etc.).
- **Page load:** No splash screen. No loading spinner. The page renders progressively as a Server Component.

---

## Responsive behavior

- **Mobile-first** approach is fine, but the design above is described in desktop terms. Adapt sensibly.
- On mobile under 768px: hero headline drops to 36–40px, body to 18px, vertical section spacing to 80–100px, side margins of 24px minimum.
- The download buttons in section 8 stack vertically on mobile (full-width minus margins, with 16px between them).
- Screenshots in sections 4 and 5 scale down proportionally, maxing at the screen width minus 48px of margin.
- The footer link row wraps to multiple lines on mobile, still centered.

Use Tailwind v4's responsive prefixes (`sm:`, `md:`, `lg:`) — assume the default breakpoints unless overridden in the project.

---

## Components from shadcn — what to use and what not to use

Available via the `shadcn` package and `radix-ui`. The homepage needs almost none of them. Specifically:

- **Button** — usable for the download buttons in section 8 *only if* you override every default style to match the palette and the outline rules. If overriding becomes painful, write the buttons as plain `<a>` elements with Tailwind classes. Either is fine; do not import shadcn just for ceremony.
- **Separator** — usable for the horizontal rules in section 5. A plain `<hr>` styled with Tailwind also works. Either is fine.
- **Do not use** Card, Dialog, Tabs, Accordion, Tooltip, or any other shadcn component on this page. They do not fit the design language.

---

## Images

Use `next/image` with the `<Image>` component for all screenshots. Provide explicit `width` and `height` props matching the phone screenshot aspect ratio (typical iPhone screenshot is roughly 1290×2796, which scales down to a display width around 320–380px on desktop while preserving aspect ratio).

Add meaningful `alt` text for each image:

- Entry screen: `"Xolace entry screen, showing the prompt and feeling words"`
- Mirror screen: `"Xolace Mirror screen, showing a reflection on the user's feeling"`
- Echo screen: `"Xolace Echo screen, showing anonymous reflections from other users"`
- Timeline screen: `"Xolace Timeline screen, showing a private record of past sessions"`

Image files will be provided separately. Reference them by simple root paths (`/entry-screen.png`, `/mirror-screen.png`, etc.). If a file is not present, render a placeholder div as described in each section.

---

## SEO and metadata

In the root layout's `metadata` export (Next.js Metadata API):

```ts
export const metadata = {
  title: "Xolace — For the moments that don't have a name yet.",
  description: "A quiet place to say what's true, when you can't find the words for it on your own.",
  openGraph: {
    title: "Xolace",
    description: "For the moments that don't have a name yet.",
    type: "website",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xolace",
    description: "For the moments that don't have a name yet.",
  },
};
```

The Open Graph image (`/og-image.png`) is 1200×630px, cream background, hero headline in serif type. Plain. Same restraint as the site. I will provide this image.

---

## Accessibility

- All images need meaningful `alt` text (see above).
- Color contrast: `--color-text` on `--color-bg` is approximately 12:1 — passes AAA.
- Muted color on cream is approximately 4.5:1 — passes AA for normal text. Do not use muted color for anything smaller than 15px.
- All interactive elements (links, buttons) must have a visible focus state — use a 2px outline in accent color with 2px offset. Implement via `:focus-visible` to avoid showing outlines on mouse clicks.
- Semantic HTML: `<header>`, `<main>`, `<section>`, `<footer>`. The hero should be inside `<header>` or the first `<section>` of `<main>`.
- The page is one logical reading flow, top to bottom. Screen readers should encounter it as an essay.

---

## Voice and copy — for any agent extending this site later

If you are later asked to write additional copy for this site, follow these rules:

- **Short sentences.** Most should be under 15 words.
- **Plain language, never marketing-speak.** No "transform your life," no "unlock your potential," no "your wellness journey."
- **Show, don't pitch.** When in doubt, show a real Mirror reflection instead of describing what the Mirror does.
- **Never describe Xolace as "AI-powered," "innovative," "cutting-edge," or any similar startup vocabulary.** It is built with AI, but the brand never leads with that.
- **Refuse falsely deep language.** "For the moments that don't have a name yet" is right. "Discover your authentic emotional truth" is wrong.
- **CTAs should sound like invitations, not demands.** "When you're ready, it's here" — not "Download Now."

---

## What to do if you are unsure

Default to restraint. If a section feels empty, leave it empty. If a button feels too small, leave it small. If whitespace feels excessive, keep it. The site is supposed to feel quiet, slow, and unhurried — that's the brand.

If an instruction here conflicts with what you would normally do for a modern landing page, **follow this document, not your defaults.** This site is not a modern landing page. It is a piece of quiet writing on the web.

---

## Final delivery checklist

Before considering the page complete, verify:

- [ ] No CTA appears above the fold
- [ ] No feature grid exists anywhere
- [ ] Only the four defined colors are used (plus the hover variant)
- [ ] All body text is at least 18px on desktop
- [ ] Content max-width is 680px throughout
- [ ] Section spacing is at least 120px between sections on desktop
- [ ] No drop shadows, no gradients, no emoji
- [ ] No live chat, no cookie banner takeover, no popup
- [ ] All four screenshots are referenced (entry, mirror, echo, timeline) with appropriate placeholders if files are missing
- [ ] Newsreader and Inter are loaded via `next/font/google`
- [ ] Lenis is initialized at the root level
- [ ] Motion fade-in is applied to sections 2–8 only (not the hero)
- [ ] The page is fully responsive at 375px, 768px, and 1280px widths
- [ ] All copy matches the exact text in this document — no paraphrasing
- [ ] The footer reads: *Xolace. Made in Accra by people who needed this to exist.*
- [ ] No lucide icons used in the page body (text arrows only)
- [ ] The page is a Server Component; only the Motion wrapper and Lenis provider are `"use client"`
- [ ] Focus states are visible on every interactive element via `:focus-visible`

---

*End of brief.*