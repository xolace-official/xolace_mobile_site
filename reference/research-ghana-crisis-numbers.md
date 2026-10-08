# Research: Ghana crisis numbers and the global fallback

Ticket: xolace-official/xolace_mobile_site#20 (child of map #19). Date checked: 2026-10-08.
Method: web fetches of the pages cited; no phone calls were placed.

## Answer

- Ghana suicide / mental health line: **0800 678 678** (Mental Health Authority, toll free). Verified. The number in `lib/crisis-resources.ts` (**0244 471 279**) could not be verified anywhere and should not ship.
- US: **988** (call or text, 24/7), verified on the 988 Lifeline site.
- Rest of world: link to **findahelpline.com** (the IASP directory now delegates to it).

## Proposed list per region tier

### Ghana

| Number | Who | Status | Source | Checked |
|---|---|---|---|---|
| 0800 678 678 | Mental Health Authority national mental health and suicide prevention helpline (toll free) | Verified | [GNA, Sep 2026: MHA names 0800 678 678 as the national helpline](https://gna.org.gh/2026/09/mha-calls-for-compassionate-approach-to-suicide-prevention/); [GNA, 21 Sep 2022: call centre launch](https://gna.org.gh/?p=230102); [Find a Helpline, "information verified by this helpline"](https://findahelpline.com/countries/gh) | 2026-10-08 |
| 112 | National emergency | Verified, secondary source only | [TherapyRoute, numbers "checked in August 2026 at the operating organisation's own website"](https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-ghana-by-therapyroute) | 2026-10-08 |
| 191 / 193 / 192 | Police / Ambulance / Fire | Verified, secondary source only. Find a Helpline also lists 193 as the emergency number | [TherapyRoute](https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-ghana-by-therapyroute); [Find a Helpline, suicidal thoughts](https://findahelpline.com/countries/gh/topics/suicidal-thoughts) | 2026-10-08 |
| 055 100 0900 | DOVVSU (Ghana Police) | Verified, secondary source only | [TherapyRoute](https://www.therapyroute.com/article/suicide-hotlines-and-crisis-lines-in-ghana-by-therapyroute) | 2026-10-08 |
| 18555 | Police toll-free short code (MTN crime reporting line) | Plausible, not confirmed as DOVVSU's line | Search results describe it as the Ghana Police Service toll-free number; the primary page was not opened | 2026-10-08 |

### United States

| Number | Who | Status | Source | Checked |
|---|---|---|---|---|
| 988 | 988 Suicide and Crisis Lifeline: call, text, or chat at chat.988lifeline.org; 24/7/365; free and confidential | Verified (primary) | [988lifeline.org](https://988lifeline.org/) | 2026-10-08 |

911 for emergencies was not checked against a primary source.

### Rest of world

| Resource | Status | Source | Checked |
|---|---|---|---|
| findahelpline.com | Verified as the fallback. Run by ThroughLine; it says helpline organisations in 175+ countries "verify their information with us directly" | [findahelpline.com](https://findahelpline.com/) | 2026-10-08 |
| IASP crisis centres directory | IASP now partners with ThroughLine and the page surfaces Find a Helpline; it states it is not itself a crisis centre. So link findahelpline.com, not a separate IASP list | [IASP](https://www.iasp.info/crisis-centres-helplines/) | 2026-10-08 |

## Findings on the two conflicting Ghana numbers

- **0800 678 678 is current.** The Mental Health Authority launched it as a call centre line on 21 Sep 2022 (GNA), and in Sep 2026 (GNA) the MHA chief executive was still pointing people to it. Find a Helpline lists it, marked verified by the helpline itself.
- **Caveat:** a July 2022 Ghanaian Times piece reported three earlier MHA toll-free lines (launched 2017) were non-operational for lack of funding (about GH¢27,000/month). That predates the Sep 2022 relaunch, but it shows the line has had funding gaps. Recommend the founders place one test call before launch.
- **0244 471 279 is unverified.** It is a mobile-format number (024x). A search found no organisation attached to it, and it does not appear in the TherapyRoute list, Find a Helpline, or any MHA coverage. Treat it as unverified and remove it from the suicide hotline slot.
- Neither Find a Helpline nor the news items give operating hours for 0800 678 678. Do not claim "24/7" for it.

## Could not verify

- The MHA's own website: `mha.gov.gh` and `mhaghana.org` did not resolve (DNS errors), so no first-party page confirms the number. Evidence is the MHA chief executive quoted by GNA plus Find a Helpline's helpline-verified entry.
- Hours of operation for 0800 678 678.
- Source of 0244 471 279 (likely an old or private number).
- Primary pages for 112, 191, 193, 192, 055 100 0900 and 18555 (Ghana Police Service / NCA); only secondary sources reached.
- Whether 18555 is DOVVSU's number or the general police line. The code labels it DOVVSU.
- The other `CRISIS_RESOURCES` entries (Gender Studies and Human Rights Documentation Centre, Ministry of Gender, Stop Abuse Ghana, The Ark Foundation) were not checked.
- 988 behaviour for callers outside the US (the 988 international page returned 404).

## Suggested follow-ups for build ticket #27

- Ghana block: 0800 678 678, then 112, with DOVVSU 055 100 0900; hold 18555 until confirmed.
- Change the docs and `components/support/SupportFAQ.tsx` copy that repeats 0244 471 279.
- Add the global default block: findahelpline.com, with 988 for US.
