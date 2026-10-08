# Stale and wrong claims inventory (research ticket #21)

Child of wayfinder map #19. Inventory only; nothing here is fixed.

**Swept:** `app/*`, `components/**`, `lib/*`, `public/llms.txt`, `app/sitemap.xml`, `app/robots.txt`, at commit `f9ccd2f` ("Localise legal, crisis and contact content for Ghana"). That commit is newer than `main` and already fixes several review issues (see "Review status").

**Compared against:** `docs/xolace.md` (cited as X§n), `docs/xolace-technical.md` (cited as T§n, as of 2026-10-07), `CONTEXT.md`, and `issues/Xolace Public Presence Review.pdf` (cited by issue id, e.g. P0-1). Docs are local and untracked; they are the sources of truth named in the map.

Severity: **H** = false or unsafe against the docs, **M** = stale or misleading, **L** = polish or unverifiable. "Live" means the component is rendered by a route; "dead" means it is not imported anywhere (it still carries wrong copy that would ship if re-wired).

## Review status in the repo

| Review id | Status at f9ccd2f |
|---|---|
| P0-1 privacy promises vs policy | **Open** (trust section, FAQ, manifesto, press) |
| P0-2 US-only crisis resources | **Mostly fixed**: 988 is gone everywhere; Ghana list in `lib/crisis-resources.ts`, used by footer and Support. Still open: no international list, no regional swap, and the hotline number differs from T§8 (see S-2) |
| P0-3 emails across three domains | **Fixed on the site**: only `@xolaceinc.com` addresses remain (no `xolace.app` / `xolace.com`) |
| P0-4 inflated rating, weak testimonials | **Open** |
| P0-5, P0-6 | Out of scope (outside this site) |
| P1-1 Terms entity and governing law | **Fixed in the repo**: XOLACEINC LTD named, Ghana law and courts, US arbitration removed, copyright line aligned. Lawyer review still pending (map: Terms and Privacy updates) |
| P1-2 Act 843 / data controller | **Open** (no mention of Act 843 or the Data Protection Commission) |
| P1-3 age 13 | **Open** |
| P1-4 session quotes without marketing consent | **Open** |
| P1-5 product described five ways | **Open** (Echo, Glimpses, "not a social platform" still live; Xolacers, Vessa, Kindling, Plus absent from home) |
| P1-6 Plus and limits hidden | **Open** |
| P1-7 voice processing not disclosed | **Open** |
| P1-8 data-safety declarations disagree | **Open** (site side: privacy line 235 vs 261) |
| P1-9 no Safety page | **Open** |
| P2-1 broken pages | **Partly fixed**: waitlist FAQ question removed from Support. Still open: `/faq` has no `app/faq/page.tsx` (404) while Support and `llms.txt` link to it; FAQ answers are client-rendered |
| P2-2 titles and keywords | **Open** |
| P2-3 amateur details | **Open** (ChatGPT_Image filenames, `trsut-section`, Flux, CTO photo) |
| P2-4 AI-sounding copy | **Open** |
| P2-5 navigation and links | **Open** (footer emails fixed; nav, tracking params, github.io whitepaper, `/gh/` App Store link remain) |
| P2-6, P2-7, P3-1..3 | Out of scope per map (P3-1 shows up as S-adv below because dead placeholder advisor code claims clinicians) |

## Counts by page

| Page / area | Claims | H | M | L |
|---|---|---|---|---|
| Site-wide (layout, nav, footer, shared) | 8 | 0 | 5 | 3 |
| Home (`/`) live sections | 21 | 7 | 7 | 7 |
| Home, dead components (would ship if re-wired) | 11 | 6 | 4 | 1 |
| About (`/about`) | 3 | 0 | 2 | 1 |
| Manifesto (`/manifesto`) | 11 | 2 | 6 | 3 |
| Press (`/press`) | 6 | 2 | 3 | 1 |
| Support (`/support`) | 6 | 0 | 4 | 2 |
| Privacy (`/privacy`) | 10 | 5 | 5 | 0 |
| Terms (`/terms`) | 4 | 0 | 4 | 0 |
| FAQ data (`lib/faq-data.ts`, rendered on home) and missing `/faq` | 8 | 1 | 6 | 1 |
| `public/llms.txt` | 11 | 4 | 5 | 2 |
| **Total** | **99** | **27** | **51** | **21** |

## Cross-cutting findings (each appears per page below)

1. **Retired names:** Echo (home, llms.txt, three-layers), Glimpses (press, pricing data). Flux mascot appears as a character (hero, paths, 404, manifesto invitation). No "X brain" found anywhere.
2. **"Vent is never stored" and variants:** press only. T§8: audio is processed in memory and never written, but the acknowledgement words are `console.log`ged and their TTS audio sits in storage for 1 h; daily minutes used and a `vent` activity row are stored. X§9 gap 9 says the same. Wording "nothing stored" is not literally true.
3. **Deletion promises:** "all associated data" (privacy, support) vs T§8 "Not deleted at third parties" (PostHog, Clerk, RevenueCat, provider copies), Stream deletion fail-open, and survivors (feedback text, contributed pool reflections, library totals, cohort counts). X§9 gaps 7 and 8.
4. **Session length:** "3 minutes" (home launch, manifesto x2) vs "3-8 minutes" (manifesto never). Neither number is in the docs; map asks for one consistent claim.
5. **"No streaks, no notifications":** false. The Hearth ships streaks with freezes and revives, streak-milestone pushes, follow-up nudges, gentle-return push after 30 days, and a pattern nudge (X§7, T§7).
6. **Age 13:** Terms and Privacy. Map policy: app stays 13+, Xolacer chat 18+ as in-app controls, stated on the Safety page.
7. **Plus:** no public page states Plus exists. Home says free-only; pricing components (dead) describe a no-price waitlist. Truth: monthly $9.99, annual $59.99, 7-day trial on annual (map, CONTEXT).

---

## Site-wide

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| S-1 | `app/layout.tsx:31-47` | keywords: "Social", "Platform", "Thoughts", "Stories", "Experiences", "Fostering", "Engagement", "Self-Expression", "Unique", "User-Centered", "Space", "Communities" | Leftover from the old social platform. Xolace is not a social platform (CONTEXT; X§1) | P2-2 | M |
| S-2 | `lib/crisis-resources.ts:7`, `components/shared/footer.tsx:148-155`, `components/support/SupportContact.tsx` (renders list), `components/support/SupportFAQ.tsx:52` | "suicide hotline on 0244 471 279 (Ghana)" | T§8 lists the in-app crisis resources as Mental Health Authority 0800 678 678, 112, DOVVSU 18555, IASP directory, support@xolaceinc.com. The site shows a different hotline number and omits the MHA line and IASP. Needs verification before the regional-block work | P0-2 | M |
| S-3 | `app/layout.tsx:25-28`, `app/page.tsx:5` | title template `"Xolace \| %s"` + home title "Emotional Infrastructure" (renders "Xolace \| Emotional Infrastructure") | Brand-less/jargon title; old positioning. Several pages share generic metadata | P2-2 | M |
| S-4 | `components/shared/navbar.tsx:11-14` | navLinks: About, Manifesto only | Missing Pricing, Safety, FAQ (planned pages); Press/Support only in footer | P2-5 | L |
| S-5 | `components/shared/footer.tsx:22,28` | Instagram `...?utm_source=qr&igsh=...`, TikTok `...?_r=1&_t=ZS-93PtIXpzJAr`; handle `@talk.with.xolace` | Tracking params on public links; handle off-brand | P2-5 | L |
| S-6 | `components/shared/download-buttons.tsx:4`, `components/landing/download-section.tsx:49`, `public/llms.txt:190` | `https://apps.apple.com/gh/app/xolace/id6761601429` | Ghana storefront; map asks for a region-neutral link | P2-5 | L |
| S-7 | `components/shared/footer.tsx:91-92`, `app/layout.tsx:29-30` | "A quiet place to be human. Not a feed. Not a clinic. The space before, between, and outside therapy." | Negation-triplet style flagged in the review; "outside therapy" fine, but this is the pattern P2-4 targets | P2-4 | M |
| S-8 | `components/shared/footer.tsx:50-54`, `components/landing/trust-section.tsx:9`, `components/about/press-contact.tsx:64`, `components/press/*` (whitepaper link) | whitepaper on `xolace-official.github.io/wp.pdf` | Not on the brand domain | P2-5 | M |

## Home (`/`), live sections

`HomePage.tsx` renders: Hero, ProblemSection, PathsSection ("How it works" today), ReflectionsSection, TrustSection, TestimonialsSection, LandingFaq, LaunchSection. `SupportSection` is imported but commented out.

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| H-1 | `components/landing/paths-section.tsx:46` | tag "Echo" | Retired name. Public term is "peer reflections" (X§6) / Mirror; CONTEXT says "Avoid: Echo" | P1-5 | H |
| H-2 | `components/landing/paths-section.tsx:201` | "Not therapy. Not a chatbot. Not a social platform." | Xolace has Xolacer peer chat with profiles and ratings (review P1-5), a Connect tab and the Xolace channel (X§7). "Not a social platform" is a claim the map says to drop; also a negation triplet | P1-5, P2-4 | H |
| H-3 | `components/landing/paths-section.tsx:177-184` | "How it works. Three quiet things." with Mirror / Echo / Safety | Product journey (X§7) is Mirror, then sit with this / peer reflections / Kindling; Safety is a layer, not a step. Home never mentions Kindling, Vessa, Vent, Xolacers, Lantern or Plus | P1-5 | M |
| H-4 | `components/landing/paths-section.tsx:48` | "After your session, an anonymous moment surfaces" | The person chooses "see peer reflections" after the mirror (X§7 step 4); it does not surface on its own | P1-5 | L |
| H-5 | `components/landing/paths-section.tsx:65` | "If what you write suggests real danger, Mirror responds differently - gently, with real help nearby." | Mostly true (safeguard levels, X§8). But "no operator alert": escalation alerts no one (X§9 gap 1); help is the resources screen only | none | M |
| H-6 | `components/landing/hero.tsx:68-69`, `paths-section.tsx:33-34,50-51,67-68` | Flux images, alt "Flux", "Flux holding a question mark" etc. | Flux is never introduced; map retires Flux from the hero and from How it works | P2-3 | M |
| H-7 | `components/landing/hero.tsx:68`, `paths-section.tsx:33,50,67`, `app/not-found.tsx:45` | `/flux-images/ChatGPT_Image_Oct_20__2025__10_36_*-removebg-preview.png` | Asset filenames expose AI-generated origin | P2-3 | L |
| H-8 | `components/landing/trust-section.tsx:22` | "Encrypted in transit and at rest. No human at Xolace reviews what you write." | The docs do not state encryption at rest anywhere, so it is unverified. "No human reviews": Xolacers read chat messages; the operator sees escalation events; `product_feedback` text is kept and read; peer pool exists. Not literally true. Review P0-1 | P0-1 | H |
| H-9 | `components/landing/trust-section.tsx:29` | "Your name is never attached to anything. You are not a profile." | Clerk account exists, Xolacer profiles exist, and the Fire keeps a per-person versioned `semantic_profiles` (T§4, X§14 "Profile"). Review P0-1 quotes this phrase | P0-1 | H |
| H-10 | `components/landing/trust-section.tsx:35` | "No followers, no feed. There is nothing to perform here." | No follower/feed mechanic, but Xolace channel and daily quotes with replies exist (X§7). Mostly fine; flag with H-2 | none | L |
| H-11 | `components/landing/trust-section.tsx:23,30,36,42` and `public/trsut-section/*` | `/trsut-section/...svg` | Typo in folder name | P2-3 | L |
| H-12 | `components/landing/trust-section.tsx:124-125` | "We built Xolace for ourselves first" | Fine; repeated in FAQ and team (copy repetition) | P2-4 | L |
| H-13 | `components/landing/reflections-section.tsx:297` | "From real Xolace sessions. Shared anonymously, with permission." | Peer-pool entry needs the per-session contribute opt-in (T§8), which is not marketing consent. Review P1-4. Also quotes include grief content | P1-4 | H |
| H-14 | `components/landing/testimonials-section.tsx:209` | "4.9 · App Store & Google Play" with five stars | Review: Google Play shows 4.8 from 10 reviews at the time; no verified combined rating. Map: replace once real ratings arrive | P0-4 | H |
| H-15 | `components/landing/testimonials-section.tsx:251` | "Every word here is real." | Only defensible if all reviews are verified and undisclosed team reviews are removed (H-16) | P0-4 | M |
| H-16 | `components/landing/testimonials-section.tsx:26` | reviewer name "s-kvng" (App Store) | Same handle as the CEO's GitHub account; an undisclosed team review breaks the ambassador code the review cites | P0-4 | H |
| H-17 | `components/landing/testimonials-section.tsx:72-77,79-84` | "Xolace is friend. It's you shows you what other are going through..." and "Emotional Clarity emotions instead of just feeling 'off.' Mindfulness Exercises." | Garbled reviews named in the review | P0-4 | M |
| H-18 | `components/landing/launch-section.tsx:66` | "Xolace is free to download. Your first session takes 3 minutes." | True that download is free; Plus exists and the free tier has limits (T§5). "3 minutes" conflicts with "3-8 minutes" (manifesto) and is not in the docs | P1-6, P2-4 | M |
| H-19 | `components/landing/landing-faq.tsx` (renders `lib/faq-data.ts`) | FAQ answers are client-rendered accordions | Answers not in server HTML; review says not indexable | P2-1 | M |
| H-20 | `components/landing/hero.tsx` (whole), `problem-section.tsx` | Hero and problem copy | No false claim found; the hero does not mention Plus, Kindling, Xolacers | P1-5 | L |
| H-21 | `components/landing/waitlist-form.tsx`, `waitlist-cta.tsx` | waitlist form and CTA | Product is live; not rendered now (see dead list). Supabase `waitlist` table integration is stale | P2-1 | L |

### Home, dead components that still carry wrong copy

None of these are imported by a route. They are listed so a rebuild does not resurrect them unreviewed.

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| HD-1 | `components/landing/three-layers.tsx:21,25` | heading "The Echo"; alt "Xolace Echo screen" | Retired name | P1-5 | H |
| HD-2 | `components/landing/pricing/pricing-data.ts:98` | "Mirror, Vent & Glimpses" under "Free, always" | Glimpses does not exist (CONTEXT). Vent is capped at 2 min/day free (T§5) | P1-5, P1-6 | H |
| HD-3 | `pricing-data.ts:96` | "The whole loop - reflect, mirror, path - is open to everyone. No wall at the door." | Free has rate limits (2 sessions/hr, 8 mirrors/hr), 30-day timeline, no Kindling, no Bridge, no full Vessa (T§5, X§11) | P1-6 | H |
| HD-4 | `pricing-data.ts:109-112` | Plus = "Your full insight layer... Voice release and a longer emotional memory" | Insights are `Building` (preview only, X§7). Plus actually unlocks Kindling, Trusted Bridge, full Vessa, full timeline, higher limits, premium tones and voice, 8 min Vent (X§11, T§5). "Longer emotional memory" is not a Plus feature | P1-6 | H |
| HD-5 | `pricing-data.ts:28,36` (`ready: true`) and `pricing-data.ts:25,32,40` stats "60%", "trapped - invisible", "7.2" | teaser insights marked ready | X§7: Insights are `Building`; steadiness and compounding "not yet in code" (T§4). The data is fabricated "representative" numbers | P1-6 | H |
| HD-6 | `components/landing/pricing-section.tsx:13,47,66-73`, `insight-detail-dialog.tsx:71`, `pricing-waitlist-dialog.tsx` | "no price, no buy button"; "Join the Xolace+ waitlist"; "Get Xolace+ ... we'll notify you the moment your full insight layer unlocks" | Plus is live: $9.99/mo, $59.99/yr, 7-day trial on annual (map). The `insight_waitlist` table is a leftover (T§9) | P1-6 | M |
| HD-7 | `components/landing/anti-engagement.tsx:13` | "No streaks. No daily notifications. No reasons to come back unless you have one." | Streaks, streak milestones and notifications ship (X§7; T§7) | none | H |
| HD-8 | `components/landing/how-it-works.tsx:25` | "Every session ends complete, nothing left unresolved to pull you back." | Follow-up check-ins are scheduled after every session (X§7 step 6, T§7) | none | M |
| HD-9 | `components/landing/privacy-statement.tsx:15-16` | "We never store it longer than we need to. We never sell it. We never share it." | Default retention is indefinite (T§8); text goes to Anthropic, OpenAI, ElevenLabs. "Never share it" is false; "never sell" is true (X§11) | P0-1 | M |
| HD-10 | `components/landing/advisors-section.tsx:30-31` with `lib/advisors.ts:12-66` | "Guided by people with expertise in this field"; placeholders "Dr. Maya Chen-Okafor, Clinical Psychologist", "Dr. Samuel Vance, Psychiatrist, Crisis Care... consults on Xolace's escalation pathways" | Dummy content (pravatar.cc photos). There is no clinical reviewer (X§9 gap 3, T§8); map: never write "clinically reviewed". Must not ship | P3-1 | M |
| HD-11 | `components/landing/companion-bridge.tsx`, `philosophy-section.tsx`, `core-promise.tsx`, `mirror-quote.tsx`, `mockup-section.tsx:22` | "Xolace is not therapy. It's the space before, between, and..." etc. | CLAUDE.md says CompanionBridge and PhilosophySection are not in the page; no false facts beyond negation style (the word "glimpse" in `mockup-section.tsx` is ordinary English, not the retired product) | P2-4 | L |

## About (`/about`)

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| A-1 | `components/about/about-hero.tsx:28` | "End-to-end emotional processing infrastructure" | Old positioning; the repo foundation doc says "Skincare for your mind" and the map flags the "Emotional Infrastructure" title | P2-2, P3-2 | M |
| A-2 | `components/about/about-hero.tsx:80-81` | "From when you can't name what you're feeling, to finding the right help. Not simulated help." | Clinical care is `Planned` (X§6, X§10); no route to licensed care exists today, and the product has no clinical reviewer | none | M |
| A-3 | `components/about/founder-letter.tsx:18` | "Not therapy. Not journaling. Not a chatbot." | Negation triplet (P2-4). CTO has no photo: `lib/team.ts:36-41` has no `image`, so the team section shows a placeholder (P2-3) | P2-3, P2-4 | L |

## Manifesto (`/manifesto`)

Renders `ManifestoPageV2`, which also imports the v1-location `components/manifesto/invitation.tsx`.

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| M-1 | `components/manifesto/invitation.tsx:55-56` | "It's free. It takes three minutes. No sign-up. No feed. Just space." | Sign-in is required (Clerk, intake; X§7 step 1); FAQ answers "Yes" to "Do I need an account?". Review P0-1 names "no sign-up". Plus exists | P0-1, P1-6 | H |
| M-2 | `components/manifesto/v2/never.tsx:50` | "No streaks. No guilt notifications. No 'you haven't visited in 3 days.' The app is designed for 3-8 minutes. It encourages you to leave." | Streaks (with freezes and revives), streak milestone pushes and a gentle-return push exist (X§7, T§7); X§5 says habit mechanics are welcome and weekly active reflectors is the north star (X§12). "3-8 minutes" vs "3 minutes" elsewhere | P2-4 | H |
| M-3 | `components/manifesto/v2/experience.tsx:66-67` | "There's no feed. No content to consume. No notifications pulling you somewhere." | Notifications ship (T§7); daily quote, Lantern library and Vessa audio are content to consume | none | M |
| M-4 | `components/manifesto/v2/never.tsx:30` | "No profiles, no followers, no likes, no content to perform for." | Xolacers have profiles and ratings (review P1-5; ratings are deleted with the account, T§8). "Never a social feed" holds; "no profiles" does not | P1-5 | M |
| M-5 | `components/manifesto/v2/why-ai.tsx:161-162` | "We just don't believe it requires conversation." / "Not in a chat room" (115) | Xolacer 1:1 text chat is a shipped Kindling (X§6) | P1-5 | M |
| M-6 | `components/manifesto/v2/never.tsx:25` | "The AI mirrors then connects you to the humans who actually do." | Routing to humans (Xolacers, Bridge) is a Plus-only Kindling and only when support need is light/active and safety < elevated (T§6) | none | L |
| M-7 | `components/manifesto/v2/never.tsx:40` | "If you need professional care, we'll help you find it" | Clinical care is `Planned`; today the help is crisis resources and a Bridge draft. "Not with a cold hotline number" while the footer does give hotline numbers (P0-2) | P0-2 | M |
| M-8 | `components/manifesto/v2/beliefs.tsx:18` | "The three minutes you spent naming what you feel" | Session length not documented; keep one claim | P2-4 | L |
| M-9 | `components/manifesto/v2/beliefs.tsx:49-50` | "We engineer it through design that prevents hierarchies... Safety is architecture, not a promise." | Escalation alerts no one, Xolacer chat moderation runs after delivery, no clinical reviewer (X§9 gaps 1, 3, 5). Overclaim | none | M |
| M-10 | `components/manifesto/v2/experience.tsx:117-118` | "reflects it back with precision in one or two sentences" | Elsewhere "1-3 sentences" (faq-data:43, press, llms.txt:23). Max is ~300 tokens (T§2). Pick one | P2-4 | L |
| M-11 | `components/manifesto/invitation.tsx:86`, `components/manifesto/principles.tsx:18`, `antidote.tsx:12` | Flux image `ChatGPT_Image_...39_59_PM`; v1 files "Xolace will never be a social feed. There are no profiles..." | Flux not introduced; v1 files are unused but repeat M-4 | P2-3 | M |

## Press (`/press`)

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| P-1 | `components/press/press-boilerplate.tsx:12` | "three paths: Mirror ..., Vent (ephemeral voice release - nothing stored), and Glimpses (short videos of real people describing a similar feeling)" | Glimpses does not exist (CONTEXT). Vent has traces (T§8). Public set is Mirror, the Fire, Kindlings (Sit with this, Vessa, Xolacers, Lantern, Trusted Bridge), Vent, Plus | P1-5, P1-7 | H |
| P-2 | `components/press/press-boilerplate.tsx:20` | "Vent is ephemeral voice release: an affirming presence listens without advising, and when the session ends, the recording is gone. Glimpses shows short videos of real people..." | Recording: audio is never written (true); but acknowledgement words are logged and their audio kept 1 h; usage row stored. Glimpses retired | P1-5, P1-7 | H |
| P-3 | `components/press/press-boilerplate.tsx:12,18,22` | "emotional processing app", "emotional processing infrastructure", "Free to download... free on iOS and Android" | Plus exists; "free" needs the free-vs-Plus nuance. "Infrastructure" is the old title language | P1-6, P2-2 | M |
| P-4 | `components/press/press-boilerplate.tsx:22` | "Xolace was founded in 2024" | Not stated in either source doc; unverified | none | L |
| P-5 | `components/press/press-assets.tsx:61,64-65` | "Headshots for on-record co-founders" (filters `founder.image`) | Four co-founders on About; only three have photos, so the CTO is missing from the press kit | P2-3 | M |
| P-6 | `components/press/press-assets.tsx:143` | "All assets are cleared for editorial use." | Not verifiable from the docs; the Flux images are AI-generated stills | none | M |

## Support (`/support`)

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| SU-1 | `components/support/SupportFAQ.tsx:148-153` | "Still stuck? See the full FAQ" linking `/faq` | `/faq` has no route (`app/` has no `faq/`), so it 404s. `components/faq/*` exists unrouted | P2-1 | M |
| SU-2 | `components/support/SupportFAQ.tsx:36-37,42` | "request deletion of your account and all associated data" / "directly within the app settings" | T§8: not deleted at PostHog, Clerk, RevenueCat, provider copies; Stream fail-open; survivors listed. In-app path is unverified | P0-1 | M |
| SU-3 | `components/support/SupportFAQ.tsx:47` | "We may share limited information with trusted service providers... contractually required to protect it and may not use it for their own purposes" | Zero-data-retention at providers is "unverified" (T§8, X§9 gap 10) | P1-8 | M |
| SU-4 | `components/support/SupportFAQ.tsx:27` | "If you choose to contribute anonymously... personal identifiers are removed before inclusion" | Peer pool text falls back to the raw mirror if distillation is missing (T§8, X§9 gap 6); shared reflections cannot be withdrawn (gap 7) | P0-1 | M |
| SU-5 | `components/support/SupportFAQ.tsx:15-52` | seven FAQ entries duplicate `lib/faq-data.ts` in a second hard-coded list | Two sources of truth for FAQ copy will drift (CLAUDE.md: no repetition) | P2-1 | L |
| SU-6 | `components/support/SupportContact.tsx:51`, `SupportHero.tsx:38-40` | "Email Us ... hello@xolaceinc.com" | Fine after the email consolidation; no Support-owned address (`support@`) used here while footer lists `support@` | P0-3 | L |

Already fixed: the "How do I join the waitlist?" entry was removed in `f9ccd2f`; the US 988 text is gone.

## Privacy (`/privacy`)

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| PR-1 | `components/privacy/PrivacyContent.tsx:323-327` | "a fully anonymised record of that event is retained... It is the only data that survives account deletion." | T§8 "Survives deletion": anonymised escalation events, feedback with links and text stripped, `product_feedback` text (on purpose), contributed pool reflections, library totals, cohort counts. Also third-party copies persist | P0-1 | H |
| PR-2 | `PrivacyContent.tsx:330-331,386-388` | "deletion of your account and all other associated data"; "Delete your account and all associated data" | Same as PR-1 plus PostHog person, Clerk user, RevenueCat customer not deleted; Stream deletion fail-open (X§9 gap 8) | P0-1 | H |
| PR-3 | `PrivacyContent.tsx:365-366,388` | "choose whether your reflections are kept private or shared anonymously... entirely in your control"; "Withdraw optional consent (anonymous sharing...) at any time" | Shared reflections are not linked to the author and cannot be withdrawn (X§9 gap 7). Consent is a per-session flag, `consent_records` is never read for gating (T§9) | P0-1 | H |
| PR-4 | `PrivacyContent.tsx:235` vs `:261` and TermsContent `:301` | "Improve AI models and system performance" vs "Your data is not used to train third-party AI models" vs Terms "Improve the system (only if you opt in)" | T§8: no fine-tuning or data export. The policy is ambiguous about whose models; map promise is "We don't train AI on your words" | P1-8 | H |
| PR-5 | `PrivacyContent.tsx:255-261,283-290` | "Anthropic (Claude)" for text; "ElevenLabs for audio generation"; processor list: Anthropic, Convex, Clerk, ElevenLabs, PostHog, Sentry, Apple/Google | Missing: OpenAI (moderation + embeddings of user text), ElevenLabs Scribe v2 speech-to-text of voice audio, Stream (chat), RevenueCat (subscriptions) (T§1, T§2). Vent/voice STT is not disclosed anywhere | P1-7 | M |
| PR-6 | `PrivacyContent.tsx:192-205,289` | Sentry crash telemetry with session replays | Sentry is not in the T§1 stack or T§8 analytics section; confirm what actually runs (review P0-1 says replay is on) | P0-1 | M |
| PR-7 | `PrivacyContent.tsx:343` | "Encryption of sensitive data in transit and at rest" | Not stated in the docs; unverified | P1-8 | M |
| PR-8 | `PrivacyContent.tsx:316-318` | "Session data may be retained according to your account settings" | Default is **indefinite**; opt-in 6 months or 1 year (X§9, T§8). Wording hides the default | P1-2 | M |
| PR-9 | `PrivacyContent.tsx:92-95,407-409` and entire document | no Act 843, no Data Protection Commission, no named data controller; "not intended for individuals under the age of 13" | Map: add entity, governing law, Act 843, age, voice processing, data-safety wording; age policy 13+ with Xolacer chat 18+ | P1-2, P1-3 | H |
| PR-10 | whole document | no mention of Vent, Xolacers/peer chat, Plus/RevenueCat | Vent traces, chat moderation verdicts and subscriptions are processing the policy never describes | P1-7 | M |

## Terms (`/terms`)

Fixed in the repo: entity (XOLACEINC LTD, Koforidua), Ghana law and courts, US arbitration/class-action waiver removed (P1-1), pending lawyer review.

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| T-1 | `components/terms/TermsContent.tsx:170-177` | "Be at least 13 years old... under the age of majority... parental or guardian consent" | App stays 13+, but Xolacer chat is 18+ with age gating as an in-app control; Terms say nothing about it | P1-3 | M |
| T-2 | `TermsContent.tsx:152-157` | "not a social network or public platform; a chatbot or conversational AI companion" | Xolacer peer chat and the Xolace channel exist; terms never describe them, their moderation or conduct rules | P1-5 | M |
| T-3 | `TermsContent.tsx:314-317` | "Fees will be clearly disclosed before purchase; subscriptions may auto-renew..." | Does not name Xolace Plus, the monthly/annual plans or the 7-day annual trial; free-tier limits absent | P1-6 | M |
| T-4 | `TermsContent.tsx:258-269,298-301` | "Optional anonymized use of data for improving the system"; "Improve the system (only if you opt in)" | Same ambiguity as PR-4; peer-pool contribution is the real opt-in | P1-8 | M |

## FAQ data (`lib/faq-data.ts`, rendered on home) and the missing `/faq`

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| F-1 | `lib/faq-data.ts:18` | "Xolace is emotional processing infrastructure... Not therapy. Not a chatbot." | Old positioning; triplet-style negation | P2-2, P2-4 | M |
| F-2 | `lib/faq-data.ts:22-23` | "Is Xolace free? Yes... The core experience, Mirror and peer reflections is free." | Mostly true (X§11: "the mirror is free") but Plus exists, free is rate-limited, and Vent is 2 min/day | P1-6 | M |
| F-3 | `lib/faq-data.ts:58` | "Do I need an account? Yes." | Correct. It contradicts the manifesto's "No sign-up" (M-1) | P0-1 | L |
| F-4 | `lib/faq-data.ts:68` | "Your words are encrypted... No one at Xolace reads your sessions." | Same as H-8; unverified encryption, and the operator holds product feedback and escalation records | P0-1 | H |
| F-5 | `lib/faq-data.ts:73` | "transcribed in real time... The audio itself is not stored." | Audio goes to Scribe in memory and is never written (T§8): true for the recording, but the answer omits the provider (ElevenLabs) and the stored acknowledgement audio for Vent | P1-7 | M |
| F-6 | `lib/faq-data.ts:88` | "The app has a quiet 'Help' button - always accessible - with emergency numbers and crisis lines for Ghana." | Docs only describe crisis resources shown at the crisis level (X§9); a persistent Help button is not documented. Unverified | P0-2 | M |
| F-7 | `lib/faq-data.ts:93` | "mark how you feel; lighter, same, heavier, or unsure. If you mark heavier, a gentle check-in appears." | Not in the docs. Closing a session is confirmed / refined / gave up; check-ins are scheduled by session heaviness (X§7, T§7). Likely stale | none | M |
| F-8 | no `app/faq/page.tsx`; `components/faq/page/FaqPage.tsx` exists | `/faq` | Route returns 404; Support (`SupportFAQ.tsx:150`) and `llms.txt:197` link to it | P2-1 | M |

## `public/llms.txt`

| ID | File:line | Exact wording | What is true today | Review id | Sev |
|---|---|---|---|---|---|
| L-1 | `public/llms.txt:62-67` | "*Echo* - After a Mirror session, users may encounter an anonymous moment..." | Retired name; the feature is peer reflections, chosen by the person | P1-5 | H |
| L-2 | `public/llms.txt:76-78` | "Xolacers operate within a three-tier structure: peer listener, trained counsellor oversight, and licensed professional moderation for any session that requires escalation." | False. No clinical reviewer (X§9 gap 3); Xolacers exist only via an operator flag with no training record (gap 4, T§8); chat moderation is Haiku after delivery. Map: never imply clinical review | P3-1 | H |
| L-3 | `public/llms.txt:69-72` | "Xolacers are trained peer listeners... people who have been trained" | "Trained by a partner organisation" is the doc claim (X§9) but training is not recorded in the app | none | M |
| L-4 | `public/llms.txt:74-76` | "The conversation only begins when the Xolacer accepts - there is no unsolicited contact." | Not documented in X or T; unverified | none | L |
| L-5 | `public/llms.txt:57-60` | "without conversational back-and-forth... The AI reflects once, and exits." | Up to two refinements (three mirrors max, T§3); memory across sessions; Kindling and follow-ups. Not "once" | none | H |
| L-6 | `public/llms.txt:126-130` | "Xolace+ ... The free Xolace experience remains fully available and is never gated." | Free is gated by limits (T§5); Kindling, Bridge, full Vessa, full timeline are Plus. Prices not stated | P1-6 | H |
| L-7 | `public/llms.txt:121-124` | "Emotional data is separated from identity at the infrastructure level... All data is encrypted in transit and at rest." | Per-person profile and memory are keyed to the account (T§4); encryption not documented. Unverified | P0-1 | M |
| L-8 | `public/llms.txt:3,10-12,176` | "emotional processing infrastructure"; "Not therapy. Not an AI companion. Not a social network." (twice) | Old positioning and negation repetition | P2-2, P2-4 | M |
| L-9 | `public/llms.txt:82-86` | "Safety layer... surfaces real resources quietly" | OK; but no regional resources mentioned and no mention of alert gap | none | L |
| L-10 | whole file | no Kindling, Vessa, Lantern, Vent, Trusted Bridge, Plus price, retention | Public vocabulary (CONTEXT) is absent; map says llms.txt must stay consistent with the strategy doc | P1-5 | M |
| L-11 | `public/llms.txt:195-198` | links to `/faq`; lists only Privacy Policy | `/faq` 404s; Terms, Support, Press not listed | P2-1 | M |

## Known examples from the ticket, confirmed

| Ticket example | Confirmed at |
|---|---|
| Echo | `paths-section.tsx:46`, `three-layers.tsx:21,25` (dead), `llms.txt:62` |
| Glimpses | `press-boilerplate.tsx:12,20`, `pricing-data.ts:98` (dead) |
| "no sign-up" | `manifesto/invitation.tsx:55-56` |
| "not a social platform" | `paths-section.tsx:201` (also `terms` 156, `llms.txt` 3,12,98) |
| waitlist FAQ question | Already removed in `f9ccd2f`; only dead waitlist components remain |
| 3-minute vs 3-8-minute | `launch-section.tsx:66`, `invitation.tsx:55`, `beliefs.tsx:18` vs `never.tsx:50` |
| 4.9 rating | `testimonials-section.tsx:209` |
| "Emotional Infrastructure" title and old keywords | `app/page.tsx:5`, `app/layout.tsx:31-47` |
| "Vent is never stored" | Press only (`press-boilerplate.tsx:12,20`); no other page says it. Technical §8 contradicts "nothing stored" |
| Age 13 in Terms/Privacy | `TermsContent.tsx:171`, `PrivacyContent.tsx:407` |
| Retired names (Echo, Glimpses, X brain) | Echo and Glimpses as above; no "X brain" anywhere |

## Additional findings not in the ticket's list

- **Streaks and notifications denied** (M-2, M-3, HD-7): contradicted by the shipped Hearth.
- **Deletion and withdrawal promises** (PR-1 to PR-3, SU-2, SU-4) contradict X§9 gaps 7 and 8 and T§8.
- **Privacy processor list incomplete** (PR-5): OpenAI, Scribe STT, Stream, RevenueCat missing.
- **Undisclosed team review** (H-16): reviewer "s-kvng".
- **Fabricated Plus teasers and placeholder clinical advisors** in dead code (HD-4, HD-5, HD-10).
- **Crisis hotline mismatch** (S-2): site number differs from T§8 list.
- **Two FAQ lists** (SU-5) duplicate copy in `SupportFAQ.tsx` and `lib/faq-data.ts`.

## Out of scope here (per map)

P0-5, P0-6, P1-7/P1-8 store declarations, P2-6, P2-7, P3-1..3, and building the in-app age gate.
