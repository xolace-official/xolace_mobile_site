# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Read this file first. Always.

Before writing a single line of code, read this entire file. Then read the relevant component files. Then act.

This file is a living document. When a new pattern is established, a fix is made that should apply everywhere, or a new tool/rule is confirmed, **update this file immediately** — in the same session, before moving on. Future agents and developers rely on it for consistency.

---

## Engineering Standards

Operate as a senior software engineer on a product that people use at emotionally vulnerable moments. That context shapes every decision.

- **No repetition.** Before creating a component, check if one exists. Before writing a utility, check `lib/utils.ts`. Before writing copy, check `reference/`.
- **Break things into components.** Never put too much logic or markup in a single file. Extract sub-components, keep files focused and readable. If a section has a form, the form is a separate file (see `waitlist-form.tsx` + `waitlist-cta.tsx` as the pattern).
- **Make components typed and dynamic.** Props are typed. Data lives in arrays or objects outside JSX. No hardcoded repetition inside markup.
- **Colors come from `app/globals.css` only.** No hardcoded hex, rgb, or oklch values in component files. Use CSS custom properties (`var(--primary)`, `var(--accent)`) or their Tailwind equivalents (`text-primary`, `bg-accent`, `bg-xo-surface-lowest`). The design token system is the source of truth.
- **Ask before improving.** If you see something worth refactoring, improving, or cleaning up that is outside the task scope — flag it and ask for permission. Do not act unilaterally.
- **Ask before installing packages.** If a task requires a package not already in `package.json`, pause and ask before installing it. Never install silently.

---

## Package Manager — `bun` only

This project uses **bun**. Never use `npm`, `npx`, or `yarn`.

```bash
bun run dev          # Start dev server (Turbopack)
bun run build        # Production build
bun run lint         # ESLint
bun run format       # Prettier — formats all .ts/.tsx
bun run typecheck    # TypeScript check (no emit)
bun run test         # Unit tests for lib/ (bun:test; *.test.ts are excluded from tsc)
```

`lib/site-copy.test.ts` sweeps the whole site (`app/`, `components/`, `lib/`, `public/llms.txt`), live and dead files alike, for retired and banned wording: Echo, Glimpses, "X brain", "clinically reviewed", "built and reviewed by us", "no sign-up", session-length numbers ("3 minutes"; say "a few minutes, most days"), and "the AI chooses/picks" (it routes or builds). If it fails, fix the copy; don't loosen the pattern.

Adding shadcn/ui components:
```bash
bunx shadcn@latest add <component>
```

After adding, check `package.json` and the new files: shadcn has resolved `cn` to an unrelated npm package called `cn` (added as a dependency, imported as `from "cn"`). Revert that and import `cn` from `@/lib/utils`.

---

## Installed Packages — Know What You Have

Before reaching for a new package, check this list. Everything needed is likely already here.

| Package | Purpose |
|---------|---------|
| `next` 16 | Framework (App Router) |
| `react` 19 | UI library |
| `motion` (`motion/react`) | Animations — use this for all transitions and scroll-driven effects |
| `lucide-react` | **Icon library — use this for all icons.** Never paste raw SVGs or copy icons from external sources |
| `tailwindcss` v4 | Styling |
| `shadcn` | Component primitives — add via `bunx shadcn@latest add <name>` |
| `radix-ui` | Headless primitives (underpins shadcn) |
| `class-variance-authority` | Variant-based className logic |
| `clsx` + `tailwind-merge` | Combined via `cn()` in `lib/utils.ts` |
| `next-themes` | Dark/light theme — `ThemeProvider` in `components/theme-provider.tsx` |
| `lenis` | Smooth scroll — wrapped in `components/shared/smooth-scroll.tsx` |
| `@supabase/ssr` + `@supabase/supabase-js` | Backend — browser client via `utils/supabase/client.ts` |
| `coolshapes-react` | Decorative abstract shapes (used in error states) |
| `tw-animate-css` | Additional Tailwind animation utilities |

**Brand/social icons** (TikTok, Instagram, LinkedIn, WhatsApp) are not in lucide-react. Those live in `components/socials/` as custom SVG components — that's the correct exception. Do not create new custom SVG components for icons that exist in lucide-react.

---

## Icons

Use `lucide-react` for all icons. Import named exports:

```tsx
import { Check, Lock, ArrowRight } from "lucide-react"
```

Do not:
- Paste inline SVGs
- Copy icons from Heroicons, Phosphor, or any other source
- Create custom SVG icon components for icons available in lucide-react

---

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_OR_ANON_KEY
```

The committed `.env` points at a local Supabase instance. Override with production values via Vercel. Phase 2 will add `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST`, and — when the mini-Mirror API is built — `ANTHROPIC_API_KEY`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`.

---

## What Xolace Is

Xolace is **emotional processing infrastructure** — not a chatbot, not a therapy app, not a social network. It occupies the gap between "everything is fine" (social performance) and "I need therapy" (clinical intervention).

The product has three paths:
- **Mirror** — AI reflects the user's emotion back with precision. 1–3 sentences. Target moment: *"Yes. That's exactly what I'm feeling."*
- **Vent** — Ephemeral voice release. An affirming presence listens without advising. When done: *"Gone."* Nothing stored.
- **Glimpses** — Short videos of real people describing a similar emotion. Human recognition, not advice.

The website's job: move someone from "I feel seen by this" → "I trust them" → "I'm downloading this."

---

## Design Language

Every design decision should feel like it belongs in the same room as the app: **dark, warm, still**. Not bouncy, not corporate wellness.

- **Primary** — deep rose/pink (`--primary`)
- **Accent** — warm teal-green (`--accent`)
- **Dark background** — deep indigo (`oklch(0.145 0.04 281)` in dark, hue 285)
- **Surface hierarchy** — `--xo-surface-lowest` → `--xo-surface-low` → `--xo-surface-bright` → `--xo-outline-variant`
- **Serif (`font-serif`, Lora)** — for emotional content: mirrors, reflections, quotes, manifesto
- **Sans (`font-sans`, Space Grotesk)** — for UI: buttons, labels, navigation
- **Minimal motion** — fades and breath animations only. Nothing bouncy except the download/celebration moment.
- **Global utility classes** (defined in `globals.css`): `.texture`, `.cta-gradient`, `.animate-gentle-pulse`, `.screen-content-gradient`

---

## Architecture

### Routing — Page → Component Pattern

Route files only export `metadata` and delegate rendering to a `*Page` component. No markup lives in `app/*/page.tsx`.

```
app/page.tsx              →  components/landing/page/HomePage.tsx
app/manifesto/page.tsx    →  components/manifesto/page/ManifestoPageV2.tsx
app/about/page.tsx        →  components/about/page/AboutPage.tsx
app/faq/page.tsx          →  components/faq/page/FaqPage.tsx
app/press/page.tsx        →  components/press/page/PressPage.tsx
app/pricing/page.tsx      →  components/pricing/page/PricingPage.tsx
app/safety/page.tsx       →  components/safety/page/SafetyPage.tsx
app/privacy/page.tsx      →  components/privacy/page/PrivacyPage.tsx
app/terms/page.tsx        →  components/terms/page/TermsPage.tsx
app/support/page.tsx      →  components/support/page/SupportPage.tsx
```

### Provider Stack (`layout.tsx`)

```
ThemeProvider (next-themes — defaultTheme="system", keyboard shortcut "D" toggles theme)
  └─ MotionProvider (motion/react — respects prefers-reduced-motion)
       └─ Navbar + <div.texture /> + {children} + Footer
```

`SmoothScroll` (Lenis) wraps only the landing page, not the global layout.

### Component Organisation

```
components/
  landing/        # One file per landing page section + page/HomePage.tsx
  manifesto/      # v2/ is active; top-level v1 components are kept but unused
  shared/         # Navbar, Footer, SmoothScroll, MobileDownloadBar
  ui/             # shadcn primitives + custom UI (Iphone, Marquee, Spotlight…)
  socials/        # Brand SVG icons (TikTok, Instagram, LinkedIn, WhatsApp) — no lucide equivalent
providers/        # MotionProvider (and future PostHogProvider)
lib/              # utils.ts (cn helper). kindlings.ts is the shelf of five named Kindlings. team.ts is the single source for founder data — import from here, not from component files.
                  # links.ts (store + whitepaper URLs), site.ts (default description), region.ts, crisis-resources.ts, pricing.ts, plans.ts (Free vs Plus rows), safety.ts (every /safety claim and the "Not built yet" gaps, each with its source), faq-data.ts (the 22 FAQ answers as segments; /faq, the landing FAQ and the FAQPage JSON-LD all read it, prices come from pricing.ts, the crisis answer swaps region in the browser) — single sources, never inline these values.
hooks/            # use-region.ts — the browser half of the region swap; use-active-section.ts — scroll-spy for sticky menus
utils/supabase/   # Browser client factory — getSupabaseBrowserClient()
```

### Form Pattern

Forms are always split into two files:
1. **The form component** (`*-form.tsx`) — owns state, Supabase call, success/error UI
2. **The section wrapper** (`*-section.tsx` or `*-cta.tsx`) — owns the copy and layout

Reference: `waitlist-form.tsx` + `waitlist-cta.tsx`. Every new form (supporters, contact, etc.) follows this exact split.

### Landing Page Section Order

```
HomePage.tsx            — <main> is overflow-clip, never overflow-hidden (hidden breaks the pinned phone)
  ├── Hero              — hero/: H1, subline, and the Beams pipeline (typed words → the Fire → Kindling → shelf of five)
  ├── ProblemSection    — raw vignettes ("Monday 11pm, chest tight")
  ├── HowItWorks        — how-it-works/: four steps, pinned phone on lg, stories player below; id="paths"
  ├── TrustSection      — privacy promises, only what docs/xolace.md §9/§11 say is true today
  ├── TestimonialsSection — real store reviews; no rating figure (too few ratings, never average the two stores)
  ├── LandingFaq
  └── LaunchSection     — video + download badges (id="download")
```

The hero's typed lines and reflections (`hero/scenarios.ts`) are illustrative; consecutive scenarios must light different sets of four. Kindling names, icons and colours come from `lib/kindlings.ts`. Public copy says Kindling "builds" a set, never "picks"/"chooses" (CONTEXT.md). Reduced motion freezes the hero on its fully lit frame; read the media query with `useSyncExternalStore` (server snapshot `false`), not `useReducedMotion`, or hydration mismatches.

Retired from the home page: `PathsSection`, the old `how-it-works.tsx`, `ReflectionsSection` (session quotes without marketing consent), the Flux hero image and the 4.9 rating. `CompanionBridge` and `PhilosophySection` are not in the page either. `three-layers.tsx` (Echo) and `anti-engagement.tsx` ("No streaks") were deleted in #37 for false claims. Do not re-add any of them without discussing first.

`LandingFaq` uses the shadcn `Accordion` (`components/ui/accordion.tsx`). `/faq` deliberately does not: Radix renders no children for a closed item, so its answers would be missing from the server HTML. Keep `/faq` on native `<details>`.

`MobileDownloadBar` is rendered outside `<main>` inside `SmoothScroll` — it's not part of the scroll flow.

### Manifesto Section Order

```
ManifestoPageV2.tsx — the brief from #28; argues why, mechanics live on How it works, /safety and /pricing
  ├── OpeningV2       — the night scene; "Tomorrow never comes" sets up compounding
  ├── SpaceBetween    — the spectrum; ends on "before it has a name"
  ├── ItStacks        — compounding, and "fewer people reach the queue" framed as a bet
  ├── WhyAI           — 80/20, the campfire, the Fire and Kindlings; quotes labelled as examples
  ├── Beliefs         — five cards; the safety card links to /safety
  ├── Never           — six cards; bodies stay short (the card clamps to four lines)
  ├── QuietPart       — skincare vision and the two habits
  └── Invitation      — "Come home." + "The mirror is free, and always will be." No sign-up or time claim
```

`Experience` was cut (it duplicated How it works). The v1 files at the top of `components/manifesto/` are unused, except `invitation.tsx`.

### Region swap

Pages render the `global` region on the server and stay static. In the browser, `useRegion()` (`hooks/use-region.ts`) asks `GET /api/region` once per page load (it maps Vercel's `x-vercel-ip-country` header: GH → `gh`, US → `us`, anything else → `global`) and swaps regional blocks in. `?region=gh|us|global` forces a region for checking.

- Crisis lines come only from `lib/crisis-resources.ts` (verified tiers; 0244 471 279, 112, 18555 and other unverified numbers must not be added back). Render them with `CrisisLineList` / `CrisisLineInline` from `components/shared/crisis-lines.tsx`.
- Prices come only from `lib/pricing.ts` via `getPlusPrice(region)`. Each region stores only `monthlyAmount` and `annualAmount`; every displayed figure (via `billingSummary()`, `annualSavingPercent()`, `pricingDescription()`) is derived, never typed by hand.

### Supabase

The only live backend integrations are:
- **`waitlist` table** — `WaitlistForm` → `components/landing/waitlist-form.tsx`
- **`supporters` table** — `SupportForm` → `components/landing/support-form.tsx`

New forms must follow `getSupabaseBrowserClient()` from `utils/supabase/client.ts`. Same error/success animation pattern as `WaitlistForm`.

The `supporters` table requires a migration before `SupportForm` will work:
```sql
create table supporters (
  id uuid default gen_random_uuid() primary key,
  email text not null unique,
  message text,
  created_at timestamptz default now()
);
```

---

## Layout Spacing System

All section spacing is driven by CSS tokens in `app/globals.css`. **Never hardcode `py-*` or `px-*` on a `<section>` element.** Use the utility classes instead.

| Token | Default | Desktop (`≥768px`) | Meaning |
|-------|---------|---------------------|---------|
| `--section-py` | `5rem` (80px) | `8rem` (128px) | Section top/bottom padding |
| `--section-px` | `2rem` (32px) | same | Section left/right padding — **always equal** |
| `--content-w` | `64rem` (1024px) | — | Standard content max-width |
| `--content-w-wide` | `80rem` (1280px) | — | Wide two-column layouts |
| `--content-w-narrow` | `48rem` (768px) | — | Focused sections (download, etc.) |

**Utility classes:**
- `.section-spacing` — full padding (y + x) — use on every `<section>`
- `.section-spacing-y` — vertical only — use when content must be full-bleed horizontally (e.g. marquee)
- `.section-spacing-x` — horizontal only — use on inner containers that need to match section px
- `.section-container` — standard `max-width: --content-w`, centered, no padding
- `.section-container-wide` — `max-width: --content-w-wide`
- `.section-container-narrow` — `max-width: --content-w-narrow`

**Correct section structure:**
```tsx
<section className="section-spacing [optional-bg-class]">
  <div className="section-container">
    {/* content */}
  </div>
</section>
```

**Correct structure for full-bleed (marquee etc.):**
```tsx
<section className="section-spacing-y">
  <div className="section-spacing-x section-container"> {/* header */} </div>
  <div> {/* full-bleed content — no container, no px */} </div>
</section>
```

**Do not use `.asymmetric-layout`** — it is deprecated. It had unequal left/right padding which caused the visual imbalance. The replacement is `section-container-wide` inside a `section-spacing` section.

---

## Animation Pattern

Every landing section uses `motion/react` for scroll-triggered entrance animations. The pattern is consistent across all sections:

```tsx
"use client"
import { motion } from "motion/react"

// Section header
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
>
```

- Any component that uses `motion.*` must have `"use client"` at the top of the file.
- `ease: [0.16, 1, 0.3, 1]` is the standard easing curve — do not change without reason.
- Use `whileInView` + `viewport={{ once: true }}` for all scroll-triggered animations.
- Hero uses `animate` (not `whileInView`) since it's above the fold and animates on page load.
- Stagger sibling items with `delay: i * 0.08` or `i * 0.1` — never more than `0.15`.

---

## Comments

Only two styles accepted: `//` (TS/JS) and `{/* */}` (JSX). No block separators (`/* --- */`), no multi-line doc blocks.

Write a comment only when the **why** is non-obvious: a workaround, a constraint, subtle behavior, or something that would surprise a reader. If removing it wouldn't confuse anyone, don't write it.

Good: `// Hides when LaunchSection scrolls into view — avoids duplicate CTAs`
Bad: `{/* Decorative glow */}` above an obviously decorative div

---

## AI Discoverability — `llms.txt` / `robots.txt` / `sitemap.xml`

| File | Location | Why |
|------|----------|-----|
| `public/llms.txt` | `public/` | Not a Next.js metadata file convention — must live in `public/` to be served at `https://www.xolaceinc.com/llms.txt`. Do not move it back to `app/`. |
| `app/robots.txt` | `app/` | Supported directly as a static Next.js App Router file convention. |
| `app/sitemap.xml` | `app/` | Supported directly as a static Next.js App Router file convention. |

**Maintenance rule:** every time a new post is published on `read.xolace.com`, add it as a new `<url>` entry in `app/sitemap.xml` in the same session. Do not batch this for later — stale sitemap entries directly hurt crawler and AI discoverability, which is the entire point of these files.

`public/llms.txt` describes what Xolace is, what it isn't, and when an AI system should recommend it, in query-shaped language. If Xolace's product scope, safety boundaries, or positioning change, update `llms.txt` in the same session — it must stay consistent with `docs/xolace.md`, not drift into marketing copy that overclaims (e.g. never let it imply clinical/diagnostic capability).

---

## Reference Folder

`reference/` is the canonical product and strategy documentation. Read before making decisions about content, scope, or features.

| File | Governs |
|------|---------|
| `xolace-project-summary.md` | Full product architecture, AI pipeline, database schema, design language |
| `xolace-vision-strategy.md` | Superseded by `docs/xolace.md`; do not use it as a source for site copy |
| `2026-05-17-website-strategy.md` | Active Phase 1 & 2 engineering spec — resolved decisions, file paths, copy |
| `website-idea-roadmap.md` | Non-technical — the emotional arc the site must create, page-by-page intent |

When in doubt about what Xolace is, does, or promises → `docs/xolace.md` (and `docs/xolace-technical.md` for numbers and data handling). It replaces `xolace-vision-strategy.md`.
When in doubt about what belongs on the site → `website-idea-roadmap.md`.
When in doubt about implementation → `2026-05-17-website-strategy.md`.

---

## Agent skills

### Issue tracker

Issues live in GitHub Issues (`xolace-official/xolace_mobile_site`), via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Default five-label vocabulary (`needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`). See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: one `CONTEXT.md` + `docs/adr/` at the repo root. See `docs/agents/domain.md`.
