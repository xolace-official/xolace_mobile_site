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
```

Adding shadcn/ui components:
```bash
bunx shadcn@latest add <component>
```

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
- **Global utility classes** (defined in `globals.css`): `.texture`, `.cta-gradient`, `.asymmetric-layout`, `.animate-gentle-pulse`, `.screen-content-gradient`

---

## Architecture

### Routing — Page → Component Pattern

Route files only export `metadata` and delegate rendering to a `*Page` component. No markup lives in `app/*/page.tsx`.

```
app/page.tsx              →  components/landing/page/HomePage.tsx
app/manifesto/page.tsx    →  components/manifesto/page/ManifestoPageV2.tsx
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
lib/              # utils.ts (cn helper). team.ts will be the single source for founder data.
utils/supabase/   # Browser client factory — getSupabaseBrowserClient()
```

### Form Pattern

Forms are always split into two files:
1. **The form component** (`*-form.tsx`) — owns state, Supabase call, success/error UI
2. **The section wrapper** (`*-section.tsx` or `*-cta.tsx`) — owns the copy and layout

Reference: `waitlist-form.tsx` + `waitlist-cta.tsx`. Every new form (supporters, contact, etc.) follows this exact split.

### Landing Page Section Order

```
HomePage.tsx
  ├── Hero              — emotional hook + download badges (direct)
  ├── ProblemSection    — raw vignettes ("Monday 11pm, chest tight")
  ├── PathsSection      — Mirror / Vent / Glimpses explained
  ├── HowItWorks        — 3-step flow with real app screenshots
  ├── MockupSection     — Mirror conversation demo
  ├── ReflectionsSection — anonymous quotes marquee
  ├── TrustSection      — privacy signals
  ├── TestimonialsSection — real user reviews
  ├── LaunchSection     — video + download badges (id="download")
  └── SupportSection    — early supporter email form
```

`CompanionBridge` and `PhilosophySection` are NOT in the page. Their key ideas live in `PathsSection` now. Do not re-add them without discussing first.

`MobileDownloadBar` is rendered outside `<main>` inside `SmoothScroll` — it's not part of the scroll flow.

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

## Reference Folder

`reference/` is the canonical product and strategy documentation. Read before making decisions about content, scope, or features.

| File | Governs |
|------|---------|
| `xolace-project-summary.md` | Full product architecture, AI pipeline, database schema, design language |
| `xolace-vision-strategy.md` | Mission, core thesis, what Xolace is and is not |
| `2026-05-17-website-strategy.md` | Active Phase 1 & 2 engineering spec — resolved decisions, file paths, copy |
| `website-idea-roadmap.md` | Non-technical — the emotional arc the site must create, page-by-page intent |

When in doubt about what belongs on the site → `website-idea-roadmap.md`.
When in doubt about implementation → `2026-05-17-website-strategy.md`.
