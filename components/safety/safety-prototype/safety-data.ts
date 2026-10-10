// PROTOTYPE (ticket #27): every statement the /safety page could make, with where it comes from.
// `held` claims are true only by founder word, or contradict the technical doc; ?claims=all shows them.
import type { Region } from "@/lib/pricing"

export type ClaimStatus = "true" | "held"

export type Claim = {
  id: string
  text: string
  source: string
  status: ClaimStatus
  // Why it's held, and what would let it go on the page.
  hold?: string
}

export type Topic = {
  id: "check" | "crisis" | "xolacers" | "age" | "not"
  title: string
  // Who this topic mostly answers, for the audience-led variant.
  readers: Reader[]
  lead: string
  claims: Claim[]
}

export type Reader = "parents" | "partners" | "reviewers"

export const READERS: { id: Reader; label: string; question: string }[] = [
  { id: "parents", label: "Parents", question: "Is this safe for my child?" },
  { id: "partners", label: "Schools and partners", question: "Who is on the other end of a chat?" },
  { id: "reviewers", label: "Reviewers and press", question: "What exactly does it do, and not do?" },
]

export const SAFETY_LEVELS = [
  { name: "None", does: "A normal session." },
  { name: "Gentle", does: "A normal session, written with more care." },
  { name: "Elevated", does: "The mirror still comes back. Kindling makes no suggestions." },
  { name: "Crisis", does: "Crisis resources replace the session. The moment is recorded." },
]

export const TOPICS: Topic[] = [
  {
    id: "check",
    title: "Every message is checked first",
    readers: ["parents", "reviewers"],
    lead: "Before Xolace writes anything back, what you wrote is screened by a set of safety rules and an outside moderation service.",
    claims: [
      { id: "check-every", text: "Every reflection is checked before the AI responds, including each time you add more.", source: "technical §3", status: "true" },
      { id: "check-levels", text: "The check gives one of four levels: none, gentle, elevated or crisis.", source: "xolace.md §9", status: "true" },
      { id: "check-survivor", text: "Stories about getting through something hard are recognised, and not mistaken for danger right now.", source: "xolace.md §8", status: "true" },
      { id: "check-vent", text: "Vent, the voice space, has its own crisis check.", source: "xolace.md §9", status: "true" },
      { id: "check-standdown", text: "When the level is elevated or crisis, Xolace stops suggesting support tools. Safety leads.", source: "xolace.md §9", status: "true" },
    ],
  },
  {
    id: "crisis",
    title: "What happens at crisis",
    readers: ["parents", "partners", "reviewers"],
    lead: "Xolace is not a crisis service. When a message reads as crisis, the app stops the session and puts real crisis lines in front of the person.",
    claims: [
      { id: "crisis-screen", text: "At crisis, the person sees crisis resources instead of a normal session.", source: "xolace.md §8", status: "true" },
      { id: "crisis-recorded", text: "The moment is recorded.", source: "technical §8", status: "true" },
      { id: "crisis-free", text: "Crisis resources are never behind Xolace Plus.", source: "xolace.md §11", status: "true" },
      { id: "crisis-memory", text: "A crisis session is saved without its words, and never shared with anyone.", source: "technical §4, §8", status: "true" },
      {
        id: "crisis-alert",
        text: "Our team is told straight away.",
        source: "founder, 2026-10-09",
        status: "held",
        hold: "Technical §8 says escalation alerts no one (known gap 1). Publish only once an operator alert exists in code.",
      },
      {
        id: "crisis-app-region",
        text: "In the app, crisis lines are for Ghana today. Outside Ghana, use the lines on this page.",
        source: "xolace.md §9 gap 2",
        status: "held",
        hold: "Literally true, and it matters to US and global readers. Founder call: say it, or fix the app's lines before launch.",
      },
    ],
  },
  {
    id: "xolacers",
    title: "Xolacers: the people you can talk to",
    readers: ["parents", "partners"],
    lead: "Xolacers are volunteer peer listeners. They are not therapists or counsellors in a clinical sense.",
    claims: [
      { id: "x-nosignup", text: "No one can make themselves a Xolacer. Only our team can give someone that role.", source: "xolace.md §9", status: "true" },
      { id: "x-trained", text: "Xolacers are trained by a partner organisation.", source: "xolace.md §9, founder", status: "true" },
      {
        id: "x-directorate",
        text: "They are trained by the school's Counselling Directorate.",
        source: "founder, 2026-10-09",
        status: "held",
        hold: "Needs founder sign-off and the organisation's exact name. No training record exists in the app (gap 4), so never imply a checkable credential.",
      },
      {
        id: "x-vetted",
        text: "Each one meets the founders in person before they get the role.",
        source: "founder, 2026-10-09",
        status: "held",
        hold: "Founder-stated; the process lives outside the app. Fine to publish if the founders confirm it happens for every Xolacer.",
      },
      { id: "x-moderation", text: "AI checks Xolacer chats for harassment, spam and people sharing contact details. It checks each message after it is sent.", source: "xolace.md §9 gap 5", status: "true" },
      { id: "x-crisiscard", text: "If a message in a chat signals crisis, a card with support is posted into the chat.", source: "technical §8", status: "true" },
      { id: "x-verdict", text: "We keep only the check's verdict, not the message.", source: "technical §8", status: "true" },
      {
        id: "x-report",
        text: "You can report or block anyone, in every chat.",
        source: "founder, 2026-10-09",
        status: "held",
        hold: "Not in the technical doc. Check the app before publishing.",
      },
      {
        id: "x-supervision",
        text: "Xolacers are supervised by …",
        source: "none",
        status: "held",
        hold: "No supervision arrangement is written down anywhere. Leave out until the founders describe one that exists.",
      },
    ],
  },
  {
    id: "age",
    title: "Age",
    readers: ["parents", "partners"],
    lead: "Xolace is for people aged 13 and over.",
    claims: [
      { id: "age-13", text: "You must be 13 or older to use Xolace.", source: "map Notes (age policy)", status: "true" },
      {
        id: "age-18chat",
        text: "Chatting with Xolacers is for people 18 and over.",
        source: "map Notes (age policy)",
        status: "held",
        hold: "This is the policy, but the in-app age gate isn't built. Publish as a rule only when the app enforces it, or word it as 'will be'.",
      },
      {
        id: "age-gate",
        text: "The app asks your age before you start.",
        source: "map Notes (age policy)",
        status: "held",
        hold: "Age gating is out of scope here and not built yet.",
      },
    ],
  },
  {
    id: "not",
    title: "What Xolace is not",
    readers: ["parents", "partners", "reviewers"],
    lead: "Being clear about this is part of keeping people safe.",
    claims: [
      { id: "not-therapy", text: "Xolace is not therapy, and it does not diagnose anything.", source: "xolace.md §1, §10", status: "true" },
      { id: "not-crisis", text: "It is not a crisis service. If you are in danger, call your local emergency number.", source: "xolace.md §9", status: "true" },
      { id: "not-invent", text: "The AI does not invent advice. Support comes from a set of tools we built, and the AI chooses from them.", source: "xolace.md §6", status: "true" },
      { id: "not-clinical", text: "No clinician reviews Xolace yet. The founders review every support tool and how the AI behaves.", source: "xolace.md §9 gap 3", status: "true" },
    ],
  },
]

// Honest gaps, for the variant that publishes them. Wording is the site's, sources are xolace.md §9.
export const GAPS = [
  { gap: "When the check reads crisis, no one on our team is alerted yet. The person sees crisis lines.", source: "gap 1" },
  { gap: "Crisis lines in the app are for Ghana only.", source: "gap 2" },
  { gap: "No clinician reviews our support tools yet.", source: "gap 3" },
  { gap: "Chat messages are checked after they are sent, not before.", source: "gap 5" },
]

export type CrisisLine = { label: string; display: string; href: string; note?: string }

// Only the numbers verified in ticket #20. 112, 18555 and the other Ghana lines are held until confirmed.
export const CRISIS_TIERS: Record<Region, { name: string; lines: CrisisLine[] }> = {
  gh: {
    name: "Ghana",
    lines: [
      { label: "Mental Health Authority", display: "0800 678 678", href: "tel:0800678678", note: "Toll-free" },
    ],
  },
  us: {
    name: "United States",
    lines: [{ label: "988 Suicide & Crisis Lifeline", display: "Call or text 988", href: "tel:988" }],
  },
  global: {
    name: "Anywhere else",
    lines: [
      { label: "Find a Helpline", display: "findahelpline.com", href: "https://findahelpline.com", note: "Free lines in your country" },
    ],
  },
}

export const DANGER_LINE = "If you are in danger right now, call your local emergency number."

export function visibleClaims(claims: Claim[], showHeld: boolean) {
  return showHeld ? claims : claims.filter((c) => c.status === "true")
}
