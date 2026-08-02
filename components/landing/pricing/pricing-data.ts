// Single paid tier per monetization strategy §3 — never three. Name is "Xolace+",
// not "Premium" (§13.1). The pitch leads with insight depth, never "unlimited sessions" (§12).

export type TeaserId = "constellation" | "language" | "clarity"

export type Teaser = {
  id: TeaserId
  // The one clear, true-feeling signal shown above the fog.
  stat: string
  statLabel: string
  // What the visitor is told they'll be able to read once it unlocks.
  caption: string
  // Placeholder screenshots — swap for real Xolace+ insight screens before launch.
  image: string
  // Whether this specific insight is already live in the app. Drives which CTA
  // the detail dialog shows — never claim "download to see it" for something unbuilt.
  ready: boolean
}

// Representative (not real-user) data — a preview of the in-app insight layer (§6).
export const teasers: Teaser[] = [
  {
    id: "constellation",
    stat: "60%",
    statLabel: "of your reflections carry anxiety",
    caption: "See the full map of what keeps showing up.",
    image: "/app-images/say-whats-true.jpeg",
    ready: true,
  },
  {
    id: "language",
    stat: "trapped · invisible",
    statLabel: "the words that keep finding you",
    caption: "Two of yours. The rest are still forming.",
    image: "/app-images/see-it-clearly.jpeg",
    ready: true,
  },
  {
    id: "clarity",
    stat: "7.2",
    statLabel: "average clarity, and climbing",
    caption: "See how far your words have come.",
    image: "/app-images/choose-whats-next.jpeg",
    ready: false,
  },
]

// Decorative star map for the constellation teaser. Hand-placed so it reads as a
// real cluster, not noise. `accent` stars sit on top of the fog as faint anchors.
export const constellationStars: {
  cx: number
  cy: number
  r: number
  accent?: boolean
}[] = [
  { cx: 40, cy: 96, r: 2.4, accent: true },
  { cx: 72, cy: 64, r: 3.2, accent: true },
  { cx: 104, cy: 88, r: 2 },
  { cx: 132, cy: 52, r: 2.8 },
  { cx: 158, cy: 78, r: 2.2, accent: true },
  { cx: 56, cy: 40, r: 1.8 },
  { cx: 92, cy: 112, r: 1.6 },
  { cx: 120, cy: 104, r: 2.4 },
  { cx: 168, cy: 44, r: 1.8 },
  { cx: 28, cy: 60, r: 1.6 },
  { cx: 84, cy: 84, r: 1.4 },
  { cx: 144, cy: 96, r: 1.8 },
]

export const constellationLines: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [2, 7],
  [7, 11],
  [3, 8],
]

export type AccessColumn = {
  eyebrow: string
  title: string
  lead: string
  items: string[]
  // The "and also" cosmetics — additive, never the headline (§4). A list so
  // new cosmetic perks can be appended without rewriting a sentence.
  also?: string[]
  highlighted: boolean
}

export const accessColumns: AccessColumn[] = [
  {
    eyebrow: "Free, always",
    title: "The fire stays lit.",
    lead: "The whole loop — reflect, mirror, path — is open to everyone. No wall at the door.",
    items: [
      "Mirror, Vent & Glimpses",
      "Anonymous peer moments",
      "Safety support — always on, never gated",
    ],
    highlighted: false,
  },
  {
    eyebrow: "Xolace+",
    title: "The part that compounds.",
    lead: "Everything above, plus the layer that shows you the patterns underneath — and gets richer the longer you stay.",
    items: [
      "Your full insight layer — constellation, language, growth over time",
      "Voice release and a longer emotional memory",
    ],
    also: ["Custom themes", "App icons", "Home-screen reflections"],
    highlighted: true,
  },
]
