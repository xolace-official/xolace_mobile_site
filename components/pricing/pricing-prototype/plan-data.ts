// PROTOTYPE (ticket #26): what Free and Plus include, in two wordings so `?words=` can flip between them.
// Sources: docs/xolace.md §11 and docs/xolace-technical.md §5. Insights are left out: they are still Building.

export type Wording = "plain" | "numbers"

type Copy = { plain: string; numbers?: string }

export type PlanRow = {
  id: string
  name: string
  // What the thing is, for someone who has never opened the app.
  about: string
  free: Copy | null
  plus: Copy
  // A claim that needs a founder check before it ships (see the ticket's resolution).
  confirm?: string
}

export const planRows: PlanRow[] = [
  {
    id: "mirror",
    name: "Your mirror",
    about: "Say what's going on and the Fire names what's underneath it.",
    free: {
      plain: "Reflect whenever you need to, within fair-use limits. Ask for a closer mirror twice.",
      numbers: "2 sessions an hour and 8 mirrors an hour. Ask for a closer mirror twice.",
    },
    plus: {
      plain: "More room to reflect, with extra mirror tones and voice.",
      numbers: "10 sessions an hour and 16 mirrors an hour, with extra mirror tones and voice.",
    },
  },
  {
    id: "kindling",
    name: "Kindling",
    about: "When a session shows you could use support, Kindling picks it for you.",
    free: { plain: "You'll see where support would appear, as an invitation to Plus." },
    plus: {
      plain: "A set of supports picked for you each day, each with the reason it was chosen.",
      numbers: "1 set of 4 supports a day, each with the reason it was chosen.",
    },
  },
  {
    id: "bridge",
    name: "Trusted Bridge",
    about: "Help writing a message to someone you trust.",
    free: null,
    plus: { plain: "Message drafts, when Kindling suggests one.", numbers: "Up to 5 drafts a day." },
  },
  {
    id: "vent",
    name: "Vent",
    about: "Say it out loud. Nothing is kept.",
    free: { plain: "A few minutes a day.", numbers: "2 minutes a day." },
    plus: { plain: "More minutes a day.", numbers: "8 minutes a day." },
  },
  {
    id: "peers",
    name: "Peer reflections",
    about: "What others wrote when they felt something similar.",
    free: { plain: "Matched by theme." },
    plus: { plain: "Matched more closely to what you felt." },
  },
  {
    id: "vessa",
    name: "Vessa",
    about: "Audio and music for what you're carrying.",
    free: { plain: "Previews." },
    plus: { plain: "Full audio, with transcripts." },
    confirm: "Technical §9 says Vessa isn't shown in the app yet.",
  },
  {
    id: "timeline",
    name: "Timeline",
    about: "Your past reflections.",
    free: { plain: "The last 30 days." },
    plus: { plain: "Everything, for as long as you keep it." },
  },
  {
    id: "quotes",
    name: "Quotes",
    about: "A line to carry with you.",
    free: { plain: "The daily quote." },
    plus: { plain: "Quotes from your own sessions, kept." },
  },
  {
    id: "look",
    name: "Look and feel",
    about: "Themes and avatars.",
    free: { plain: "Core themes and avatars." },
    plus: { plain: "Premium themes and avatars." },
  },
]

// Never behind Plus. Shown on every variant.
export const alwaysFree: { name: string; detail: string; confirm?: string }[] = [
  { name: "Crisis resources", detail: "Shown whenever a session needs them." },
  { name: "Lantern", detail: "The library." },
  {
    name: "Xolacers",
    detail: "Chat with a trained peer listener.",
    confirm: "Docs §11: Lantern and Xolacer chat aren't Plus-gated in code. Confirm that's intended.",
  },
]

export const crisisLine: Record<"global" | "gh" | "us", string> = {
  gh: "In Ghana, call 0800 678 678.",
  us: "In the US, call or text 988.",
  global: "Find a helpline near you at findahelpline.com.",
}

export function rowCopy(copy: Copy, wording: Wording) {
  return wording === "numbers" ? (copy.numbers ?? copy.plain) : copy.plain
}
