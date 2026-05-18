# Xolace Website — Pages & Ideas Roadmap
*A high-level overview for the design team. No tech speak.*

---

## The Big Idea

The website has one job right now: take someone who has never heard of Xolace and get them to the point where they trust us enough to download the app.

That's it. Everything on the site should serve that goal — or get out of the way.

The emotional journey we want a visitor to go through:

> "I feel seen by this" → "Oh, this is what it actually does" → "These are real people" → "I trust them" → "I'm downloading this"

Every page, every section, every design choice should push them forward on that arc — or at least not interrupt it.

---

## Flux — Our Mascot

Before getting into pages, a quick note on Flux — our mascot character. Flame-shaped, rainbow gradient, holds a little glowing gem. Cute, warm, playful.

Flux shows up across the site as a visual guide and brand anchor. Think of how Reddit has Snoo — Flux is ours.

**The rule with Flux:** the gem brightness tells the emotional story.
- Gem dim / calm = Flux is with you in the heavy moments
- Gem glowing bright = Flux is celebrating with you at the good moments

Flux never appears next to our heavy emotional copy (the "Monday 11pm, chest tight" sections). Those moments need to breathe alone. But everywhere else — Flux is present.

We can generate any pose we need. We also have short animated versions (MP4) for places where a looping idle animation makes sense.

---

## Pages We Need

### 1. Landing Page `/` — *Already exists, needs additions*

This is the homepage. It already has a strong emotional arc — the problem vignettes, how it works, the trust section, the download section. The copy and structure are good. We're not redesigning it.

What we're adding to it:

**Flux in the hero**
Flux sits quietly in the hero section — idle, gem barely glowing. A subtle looping animation. Sets the tone before anyone reads a word. Calm. Safe. Present.

**Real testimonials**
Right now the site has the Reflections marquee (the rotating anonymous quotes). That's great for emotional resonance — people see themselves in those words. But we also need a section with real people saying "this worked for me." Short quotes, first name, the platform they reviewed us on (App Store / Google Play). Even 3-4 of these near the download section changes the trust profile completely.

**"Support Xolace" section**
A small, quiet section — not pushy — for people who believe in what we're building and want to say so. Not a payment thing. Just an early-supporter sign-up. "Believe in what we're building? Join our early supporters." Simple email form. Lives near the bottom of the page.

**"Free to download" clarity**
The hero currently says "Download free ↓" — we're changing it to "Free to download ↓." Tiny copy change but it removes the question "wait, is this a paid app?" before they even scroll.

**Sticky download bar on mobile**
On a phone, the download buttons scroll out of view almost immediately. We need a thin bar pinned to the bottom of the screen on mobile — always showing the App Store and Play Store buttons. It disappears when the user reaches the actual download section (so it doesn't feel redundant). This is probably the single highest-impact change we can make.

**Flux in the LaunchSection (download area)**
When users scroll to the download section, Flux does its most open/joyful pose — arms out, gem brilliant. Plays once as they scroll into it. This is the payoff moment of the page.

---

### 2. About Page `/about` — *New page*

Right now, Xolace the company is invisible on its own website. We have a beautiful product but nobody knows who built it or why. That's a trust gap — especially for a product asking people to be emotionally vulnerable.

**What this page needs to do:**
Make visitors want to root for us. Not a corporate "our mission is..." page. Something human.

**What goes on it:**

- **Flux** — warm, grounded pose. Not jumping around. Just present.
- **"We built the room we couldn't find."** — the section heading that sets the tone
- **A founder letter** — a short, honest piece of writing from Nathaniel. Why did we feel this gap? What did we try that didn't work? Who is this actually for? This is the hardest part to write but the most important. It turns a company into people.
- **The team** — photos, names, roles, and real 2-3 sentence bios for all four founders. Right now the bios on the manifesto page all say "Placeholder bio — to be updated." That's the first thing we need to fix.
- **Press contact** — a simple email address for journalists. No form. Just an email.

**The feel:** like meeting the people behind the product. Warm. Honest. Not polished in a corporate way. Polished in a "we actually care" way.

---

### 3. Press Page `/press` — *New page* (We can Defer this one)

When a journalist or blogger wants to write about Xolace, they need specific things — a logo, app screenshots, a description they can copy, headshots. Right now they'd have to email us and hope we respond. Most won't bother.

A press page removes that friction entirely.

**What goes on it:**

- **Flux** — confident, upright pose. Brand ambassador energy.
- **"Press & Media"** heading + a one-liner description of what Xolace is (written for journalists, not users)
- **Download section** — logo files (light and dark), app screenshots, Flux assets, founder headshots — all downloadable
- **About Xolace** — 3 short paragraphs of boilerplate copy journalists can use directly. Saves them time, means we're described accurately.
- **Press contact email**

**The feel:** professional and generous. We've done the work so journalists don't have to. That attitude makes us easier to write about.

---

### 4. FAQ Page `/faq` — *New page*

Right now, if a user has a question about pricing, data, or how Xolace actually works, they're out of luck. They either give up or try to find us on social media.

---

### 5. 404 Page — *New page*

Currently hitting a broken link probably shows a generic Next.js error. That's a missed moment.

**What goes on it:**

- **Flux** — lost but unbothered. Maybe looking around curiously. Short looping animation.
- **Something like:** "You wandered somewhere quiet. That's okay."
- **A link back home**

**The feel:** consistent with the brand — not an apology page, a brand moment. Even when something goes wrong, Xolace feels intentional.

---

### 6. The Journal `/journal` — *Future page, Phase 2*

This is the content play. Not urgent right now, but important to plan for.

The idea: a blog, but written in Xolace's voice. Not wellness tips. Not "5 ways to reduce anxiety." Real, honest writing about what it feels like to exist in the gap between fine and needing help. Articles that answer the searches people actually make — "why do I feel anxious for no reason," "what is emotional numbness," "can't explain why I feel sad."

People who find those articles are our users. They're literally doing what Xolace helps with — trying to name something they can't name yet.

**When we start this:** 30 days from now. Two articles a month. The infrastructure gets built by the engineer, the writing happens on its own schedule.

**The feel:** the manifesto, but in article format. Same voice. Same honesty. Each article has a Flux image at the top — pose matched to the emotional topic of the piece.

---

## Flux — Poses & Animations We Need

This is the production checklist for the design team. Each scene below is a specific Flux asset the site needs. When you generate each one, you can check it off.

A note on format:
- **Still image (PNG)** — used anywhere Flux is just present in the frame, not moving
- **Looping animation (MP4)** — used where Flux breathes, floats, or idles continuously
- **One-shot animation (MP4)** — plays once when triggered (like when the user scrolls into a section), then holds the final frame

All animations should have a clean, transparent-friendly background so they sit naturally on any page color (light or dark). Export both a light-mode and dark-mode version if the background matters.

---

### Phase 1 — Needed Before Launch

These are the assets that block the engineering work. The site can't go live with Flux sections empty.

---

#### 1. Hero Idle — Looping animation

**Where:** Homepage hero section, top of the page. The very first thing a visitor sees.

**The scene:** Flux is sitting or floating quietly. Gem barely glowing — like an ember, not a fire. The body breathes slowly. Nothing urgent. Just presence. The message is: *you're safe here, take your time.*

**What it should feel like:** Like sitting next to a calm fire at night. Not trying to get your attention. Just there.

**Format:** MP4 loop. Seamless — the end frame flows back into the start.

**Size:** Roughly 300–400px wide. Sits beside or slightly below the main headline text. Doesn't dominate — supports.

---

#### 2. Download Celebration — One-shot animation

**Where:** The download section at the bottom of the homepage (the "Get Xolace" area).

**The scene:** Arms open, body lifted, gem absolutely blazing bright. This is Flux at its most joyful — like a cheer when someone decides to take the leap. Plays once as the user scrolls into the section.

**What it should feel like:** The payoff. The whole page builds to this moment. Flux should feel like it's genuinely excited *for the user* — not performing for attention.

**Format:** MP4 one-shot. Ends on the open, joyful pose and holds there.

**Size:** Can be larger here — this is a hero moment. 400–500px wide.

---

#### 3. 404 Lost — Looping animation

**Where:** The 404 error page (when someone lands on a broken link).

**The scene:** Flux is looking around — turning its head, maybe glancing left and right with mild curiosity. Not panicked. Not sad. Just... mildly puzzled in a cute way. Gem is at a calm middle brightness.

**What it should feel like:** The page copy says "You wandered somewhere quiet. That's okay." Flux should match that energy. Unbothered. A little lost together with the visitor, but fine about it.

**Format:** MP4 loop.

**Size:** Center of the page, mid-size. 300px wide.

---

#### 4. About Page Warm — Still image (PNG)

**Where:** The /about page, near the top. Greets visitors before they read about the team.

**The scene:** Flux standing or sitting, facing forward (or slightly angled). Warm, grounded. Gem glowing softly. Not jumping, not performing — just present and open. The vibe: *glad you're here, let me tell you who we are.*

**What it should feel like:** Meeting a thoughtful person for the first time. Calm confidence. Not trying too hard.

**Format:** PNG with transparent background.

**Size:** Medium — sits beside or above the hero text on the page.

---

#### 5. 404 Confused — Still image (PNG) *(alternative to animation if timeline is tight)*

**Where:** Backup option for the 404 page if the looping animation takes too long.

**The scene:** Same energy as the looping version — curious, unbothered, mildly puzzled. A single frame works fine here.

**Format:** PNG.

---

### Phase 1.5 — Nice to Have for Launch, Not Blocking

These don't need to exist on day one but should come shortly after.

---

#### 6. Trust / Protective — Still image (PNG)

**Where:** The trust section on the homepage (the section that talks about privacy, data, how Xolace handles what you share).

**The scene:** Flux holding something close — the gem cradled gently, or arms curved inward protectively. Not defensive. Warm-protective. The message: *what you share here is safe.*

**What it should feel like:** The way you'd hold something fragile. Careful. Gentle.

**Format:** PNG.

---

#### 7. How It Works Steps — Still images (PNG × 3)

**Where:** The "How It Works" section on the homepage. Three steps — feel it, name it, find peace. Each step gets its own small Flux illustration.

**The scenes:**
- **Step 1 (Feel it):** Flux with the gem dim, body slightly curled or inward. Holding the weight. Present in the hard moment.
- **Step 2 (Name it):** Flux mid-motion — gem starting to brighten. A sense of something shifting. Discovery.
- **Step 3 (Find peace):** Gem fully lit. Body relaxed, open. The exhale after clarity arrives.

**What it should feel like:** A three-panel emotional arc, told entirely through Flux's body and gem brightness. No words needed — the progression says it all.

**Format:** PNG × 3. Consistent size and style so they read as a set.

---

#### 8. Press Page Confident — Still image (PNG)

**Where:** The /press page (for journalists).

**The scene:** Flux standing upright, facing forward, gem at full brightness. Brand ambassador energy — professional but still warm. The vibe: *we're ready for you, here's everything you need.*

**Format:** PNG.

---

### Phase 2 — Future (Journal Articles)

When the /journal launches, each article will have a Flux image at the top. The pose gets matched to the emotional topic of the piece — so these are generated on demand, not pre-made. The design team just needs to know: for every article, request a Flux pose that matches the article's emotional tone, following the gem brightness rule.

---

### The Gem Brightness Rule — Quick Reference

This governs every Flux asset across the whole site:

| Gem state | What it means | Use when... |
|-----------|---------------|-------------|
| Dim / barely glowing | Flux is with you in the hard moment | Hero idle, heavy trust copy, Step 1 |
| Medium glow | Something is shifting — clarity arriving | Step 2, transition moments |
| Bright / blazing | Joy, clarity, celebration | Download section, Step 3, press page |

**Hard rule:** Never use a bright-gem Flux pose next to vulnerable or heavy emotional copy. Those moments need to breathe alone.

---

## What We're NOT Doing

To keep scope clear:

- **No redesign of existing sections** — the landing page copy and layout work. We're adding to it, not replacing it.
- **No pricing page yet** — pricing isn't decided. "Free to download" text handles the immediate question.
- **No interactive web demo yet** — that's Phase 2. The idea: you type something on the website and it mirrors it back to you right there, before you download. But that's later.
- **No B2B page yet** — the universities/employers pitch comes when the product is ready for it.

---

## Page Summary

| Page | Status | Priority | Why |
|------|--------|----------|-----|
| `/` Landing | Exists — adding to it | P1 | Core conversion page |
| `/about` | New | P1 | Team credibility |
| `/press` | New - Phase 2 | P1 | Journalist self-service |
| `/manifesto` | Exists — no changes | — | Already strong |
| `/faq` | New | P1 | Answer common questions |
| `/404` | New | P1 | Brand consistency in error states |
| `/journal` | New — Phase 2 | P2 | Content moat / SEO |
| `/privacy`, `/terms`, `/support` | Exist — no changes | — | Fine as-is |

---

## Your Own ideas
You can add more sections/pages to the website as long as they align with the brand and don't deviate from the core message. I'm open to new ideas!
#### NB: We should only try adding pages we can provide content with at this moment. If i is a nice page to have bu cant provide the content now, we should defer it for later.

## The Feeling We're Going For

Someone lands on xolace.app at 11pm. They feel something they can't name. The site doesn't panic them or sell at them. It just... gets it. They see Flux sitting quietly. They read something that sounds exactly like what they're carrying. They see that real people built this and real people use it. They tap download.

That's the website.
