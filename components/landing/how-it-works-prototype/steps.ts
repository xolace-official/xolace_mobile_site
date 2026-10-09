// PROTOTYPE (ticket #24): throwaway journey data shared by the How it works variants.
// Copy is a draft for the founders to react to. Every claim is checked against docs/xolace.md §6–§9, §11.

export type Step = {
  key: "say" | "named" | "choose" | "support"
  title: string
  body: string
  // null = no real screenshot yet, the variant renders the mock Kindling screen
  screen: string | null
  alt: string
  // the words a person actually sees or writes on this screen, for the type-led variants
  quote: string
  time: string
}

export const STEPS: Step[] = [
  {
    key: "say",
    title: "Say what's here.",
    body: "Type it, say it out loud, tap the words that feel close, or start from a guided prompt. It doesn't have to make sense yet.",
    screen: "/app-images/say-whats-true.jpeg",
    alt: "The Xolace reflect screen asking what's here right now, with a half-written entry about feeling heavy",
    quote:
      "I don't even know what's wrong. Everything is fine on paper but I just feel… heavy.",
    time: "11:42 pm",
  },
  {
    key: "named",
    title: "See it named.",
    body: "The Fire reads what you wrote and sends back a Mirror: a few lines naming what's underneath. If it's off, tap Not quite or Say more and it tries again.",
    screen: "/app-images/see-it-clearly.jpeg",
    alt: "A Mirror reflection on screen, with the options That's it, Not quite and Say more",
    quote:
      "That weight you're describing doesn't need a reason to be real. Something in you is spent.",
    time: "11:43 pm",
  },
  {
    key: "choose",
    title: "Choose what's next.",
    body: "Sit with it for a minute, read what others who felt something similar shared, or close. Sometimes saying it is enough.",
    screen: "/app-images/choose-whats-next.jpeg",
    alt: "The screen after a Mirror, asking where you'd like to go from here",
    quote: "Where would you like to go from here?",
    time: "11:45 pm",
  },
  {
    key: "support",
    title: "Get support that fits.",
    body: "When a session suggests you could use more, Kindling picks four supports for your day from the ones inside the app, and tells you why each one is there.",
    screen: null,
    alt: "Today's Kindlings: four supports, each with a line on why it was picked",
    quote: "For today: four things that might help, and why.",
    time: "11:46 pm",
  },
]

export const SAFETY_NOTE = {
  title: "Before anything is written back",
  body: "Every word is checked for risk first. If it looks like a crisis, you see real help instead of a reflection, and Kindling steps aside.",
}

export const PLUS_NOTE = {
  title: "Xolace Plus",
  body: "Kindling is part of Xolace Plus. Saying it and seeing it named stay free.",
}

export const LIGHT_SCREEN = "/app-images/reflection-ui.jpeg"
