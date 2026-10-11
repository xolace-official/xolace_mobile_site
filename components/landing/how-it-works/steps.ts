// Every claim here is checked against docs/xolace.md §6–§9 and §11.
export type Step = {
  key: "say" | "named" | "choose" | "support"
  title: string
  body: string
  screen: string
  alt: string
}

export const STEPS: Step[] = [
  {
    key: "say",
    title: "Say what's here.",
    body: "Type it, say it out loud, tap the words that feel close, or start from a guided prompt. It doesn't have to make sense yet.",
    screen: "/app-images/say-it.jpeg",
    alt: "The Xolace input asking what's sitting with you right now, with a long late-night entry and a Let it out button",
  },
  {
    key: "named",
    title: "See it named.",
    body: "The Fire reads what you wrote and sends back a Mirror: a few lines naming what's underneath. If it's off, tap Not quite or Say more and it tries again.",
    screen: "/app-images/the-mirror.jpeg",
    alt: "The Mirror naming what's underneath that entry, with the options That's it, Say more and Not quite",
  },
  {
    key: "choose",
    title: "Choose what's next.",
    body: "Sit with it for a minute, read what others who felt something similar shared, or close. Sometimes saying it is enough.",
    screen: "/app-images/where-to-next.jpeg",
    alt: "Where to from here? with three choices: Sit with this, You're not alone, and I just needed to say it",
  },
  {
    key: "support",
    title: "Get support that fits.",
    body: "When a session suggests you could use more, Kindling builds a set of three or four for your day from the supports inside the app, and tells you why each one is there.",
    screen: "/app-images/kindling.jpeg",
    alt: "Your kindling: a path of four supports for the day, one already tended, with a line on why breathing for a minute might help",
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
