// What Free and Xolace Plus include, in plain words. Checked against docs/xolace.md §9 and §11 and
// docs/xolace-technical.md §5 and §8; exact limits stay in those docs. Insights are left out while they're being built.
export type PlanRow = {
  id: string
  name: string
  // What the thing is, for someone who has never opened the app.
  about: string
  // `null` means Plus only.
  free: string | null
  plus: string
}

export const planRows: PlanRow[] = [
  {
    id: "mirror",
    name: "Your mirror",
    about:
      "Say what's going on, and the Fire writes back what it hears underneath it.",
    free: "Reflect whenever you need to, within fair-use limits. If a mirror is off, ask again up to twice.",
    plus: "More room to reflect, plus extra mirror tones and voice.",
  },
  {
    id: "kindling",
    name: "Kindling",
    about:
      "When a session shows you could use support, Kindling builds a set for you from the supports we made.",
    free: "You'll see where your supports would appear, with an invitation to Plus.",
    plus: "Up to one set a day, each support with the reason it's there.",
  },
  {
    id: "bridge",
    name: "Trusted Bridge",
    about: "Help writing a message to someone you trust.",
    // The free allowance exists in code but Bridge is only reached through Kindling (technical §9).
    free: null,
    plus: "Message drafts, when Kindling suggests one.",
  },
  {
    id: "vent",
    name: "Vent",
    about: "Say it out loud. Your voice isn't saved and no transcript is kept.",
    free: "A few minutes a day.",
    plus: "More minutes a day.",
  },
  {
    id: "peers",
    name: "Peer reflections",
    about: "Reflections from people who felt something similar.",
    free: "Matched by theme.",
    plus: "Matched more closely to what you felt.",
  },
  {
    id: "vessa",
    name: "Vessa",
    about: "Audio and music for what you're carrying.",
    free: "Previews.",
    plus: "Full audio, with transcripts.",
  },
  {
    id: "lantern",
    name: "Lantern",
    about: "A library of writing on what people carry.",
    free: "Read every entry.",
    plus: "Listen to the podcast version of every entry.",
  },
  {
    id: "xolacers",
    name: "Xolacers",
    about: "Chat with a volunteer peer listener.",
    free: "Up to two chats open at a time.",
    plus: "More chats open at a time.",
  },
  {
    id: "timeline",
    name: "Timeline",
    about: "Your past reflections.",
    free: "The last 30 days.",
    plus: "Everything, for as long as you keep it.",
  },
  {
    id: "quotes",
    name: "Quotes",
    about: "A line to carry with you.",
    free: "The daily quote.",
    plus: "Quotes from your own sessions, kept.",
  },
  {
    id: "look",
    name: "Look and feel",
    about: "Themes and avatars.",
    free: "Core themes and avatars.",
    plus: "Premium themes and avatars.",
  },
]
