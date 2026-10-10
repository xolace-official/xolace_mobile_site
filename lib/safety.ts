// Every statement /safety makes, with where it comes from. Copied from the prototype's claims file (ticket #27);
// the held claims were settled in ticket #30. Never add a claim without a source, and never write "clinically reviewed".
export type Claim = {
  id: string
  text: string
  source: string
}

export type TopicId = "check" | "crisis" | "xolacers" | "age" | "not"

export type Topic = {
  id: TopicId
  title: string
  lead: string
  claims: Claim[]
}

export type SafetyLevel = { name: string; does: string }

export const SAFETY_LEVELS: SafetyLevel[] = [
  { name: "None", does: "A normal session." },
  { name: "Gentle", does: "A normal session, written with more care." },
  {
    name: "Elevated",
    does: "The mirror still comes back. Kindling makes no suggestions.",
  },
  {
    name: "Crisis",
    does: "Crisis resources replace the session. The moment is recorded.",
  },
]

export const TOPICS: Topic[] = [
  {
    id: "check",
    title: "Every message is checked first",
    lead: "Before Xolace writes anything back, what you wrote is screened by a set of safety rules and an outside moderation service.",
    claims: [
      {
        id: "check-every",
        text: "Every reflection is checked before the AI responds, including each time you add more.",
        source: "technical §3",
      },
      {
        id: "check-levels",
        text: "The check gives one of four levels: none, gentle, elevated or crisis.",
        source: "xolace.md §9",
      },
      {
        id: "check-survivor",
        text: "Stories about getting through something hard are recognised, and not mistaken for danger right now.",
        source: "xolace.md §8",
      },
      {
        id: "check-vent",
        text: "Vent, the voice space, has its own crisis check.",
        source: "xolace.md §9",
      },
      {
        id: "check-standdown",
        text: "When the level is elevated or crisis, Xolace stops suggesting support tools. Safety leads.",
        source: "xolace.md §9",
      },
    ],
  },
  {
    id: "crisis",
    title: "What happens at crisis",
    lead: "Xolace is not a crisis service. When a message reads as crisis, the app stops the session and puts real crisis lines in front of the person.",
    claims: [
      {
        id: "crisis-screen",
        text: "At crisis, the person sees crisis resources instead of a normal session.",
        source: "xolace.md §8",
      },
      {
        id: "crisis-recorded",
        text: "The moment is recorded.",
        source: "technical §8",
      },
      {
        id: "crisis-free",
        text: "Crisis resources are never behind Xolace Plus.",
        source: "xolace.md §11",
      },
      {
        id: "crisis-memory",
        text: "A crisis session is saved without its words, and never shared with anyone.",
        source: "technical §4, §8",
      },
      {
        id: "crisis-app-lines",
        text: "During a session, the app's crisis screen shows Ghana lines and a link to find help anywhere. The app also has a Crisis Resources page with lines for 10 countries, based on your phone's region.",
        source: "#30 claim 2",
      },
    ],
  },
  {
    id: "xolacers",
    title: "Xolacers: the people you can talk to",
    lead: "Xolacers are volunteer peer listeners. They are not therapists or counsellors in a clinical sense.",
    claims: [
      {
        id: "x-nosignup",
        text: "No one can make themselves a Xolacer. Only our team can give someone that role.",
        source: "xolace.md §9",
      },
      {
        id: "x-trained",
        text: "Xolacers are trained by a partner organisation.",
        source: "xolace.md §9, #30 claim 3",
      },
      {
        id: "x-vetted",
        text: "Each Xolacer has met the founders in person before getting the role.",
        source: "#30 claim 4",
      },
      {
        id: "x-supervision",
        text: "Our team supervises Xolacers and stays in touch with them.",
        source: "#30 claim 6",
      },
      {
        id: "x-moderation",
        text: "AI checks Xolacer chats for harassment, spam and people sharing contact details. It checks each message after it is sent.",
        source: "xolace.md §9 gap 5",
      },
      {
        id: "x-crisiscard",
        text: "If a message in a chat signals crisis, a card with support is posted into the chat.",
        source: "technical §8",
      },
      {
        id: "x-verdict",
        text: "We keep only the check's verdict, not the message.",
        source: "technical §8",
      },
      {
        id: "x-report",
        text: "In a Xolacer chat, either person can report or block the other. Blocking is permanent.",
        source: "#30 claim 5",
      },
    ],
  },
  {
    id: "age",
    title: "Age",
    lead: "Xolace is for people aged 13 and over.",
    claims: [
      {
        id: "age-13",
        text: "You must be 13 or older to use Xolace.",
        source: "map Notes (age policy), #30 claim 8",
      },
      {
        id: "age-18chat",
        text: "Chatting with Xolacers is for people 18 and over.",
        source: "#30 claim 7",
      },
      {
        id: "age-range",
        text: "When you sign up, the app asks your age range.",
        source: "#30 claim 8",
      },
    ],
  },
  {
    id: "not",
    title: "What Xolace is not",
    lead: "Being clear about this is part of keeping people safe.",
    claims: [
      {
        id: "not-therapy",
        text: "Xolace is not therapy, and it does not diagnose anything.",
        source: "xolace.md §1, §10",
      },
      {
        id: "not-crisis",
        text: "It is not a crisis service. If you are in danger, call your local emergency number.",
        source: "xolace.md §9",
      },
      {
        id: "not-invent",
        text: "The AI does not invent advice. Support comes from a set of tools we built, and the AI chooses from them.",
        source: "xolace.md §6",
      },
      {
        id: "not-clinical",
        text: "No clinician reviews Xolace yet. The founders review every support tool and how the AI behaves.",
        source: "xolace.md §9 gap 3",
      },
    ],
  },
]

export type Gap = Claim

// Change this list in the same session that closes a gap. When the crisis email alert ships, drop
// "crisis-alert" and change its claim to "Our team is alerted when someone reaches crisis." (#30 claim 1).
export const GAPS: Gap[] = [
  {
    id: "crisis-alert",
    text: "Our team isn't alerted automatically when someone reaches crisis yet. The person still sees crisis lines straight away.",
    source: "#30 claim 1",
  },
  {
    id: "app-lines",
    text: "During a session, the app's crisis screen shows only Ghana lines, plus a link to find help anywhere.",
    source: "xolace.md §9 gap 2; site wording, paraphrasing #30 claim 2",
  },
  {
    id: "clinician",
    text: "No clinician reviews our support tools yet.",
    source: "xolace.md §9 gap 3",
  },
  {
    id: "chat-after",
    text: "Chat messages are checked after they are sent, not before.",
    source: "xolace.md §9 gap 5",
  },
  {
    id: "age",
    text: "The app doesn't act on your age yet. Under-18s aren't kept out of Xolacer chat.",
    source: "#30 claim 8",
  },
]
