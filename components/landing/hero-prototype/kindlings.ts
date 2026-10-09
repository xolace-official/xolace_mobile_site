// PROTOTYPE (ticket #23): throwaway data for the hero pipeline variants.
// Episode reframe is left out of the pool: its public description is still "to confirm".
import {
  BookOpen,
  Headphones,
  MessageSquareHeart,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react"

export type Kindling = {
  id: string
  name: string
  gist: string
  why: string
  icon: LucideIcon
  tone: string
  bg: string
}

export const KINDLINGS: Kindling[] = [
  {
    id: "sit",
    name: "Sit with this",
    gist: "A short guided exercise",
    why: "To stay with the tightness instead of pushing it away.",
    icon: Wind,
    tone: "text-primary",
    bg: "bg-primary/15",
  },
  {
    id: "vessa",
    name: "Vessa",
    gist: "Audio and music by topic",
    why: "Something quiet for the hours you can't sleep.",
    icon: Headphones,
    tone: "text-chart-2",
    bg: "bg-chart-2/15",
  },
  {
    id: "xolacers",
    name: "Xolacers",
    gist: "Chat with a trained peer volunteer",
    why: "A person to talk it through with, if you want one.",
    icon: Users,
    tone: "text-accent",
    bg: "bg-accent/15",
  },
  {
    id: "lantern",
    name: "Lantern",
    gist: "A library of things to read",
    why: "A short read on why rest can feel out of reach.",
    icon: BookOpen,
    tone: "text-chart-5",
    bg: "bg-chart-5/15",
  },
  {
    id: "bridge",
    name: "Trusted Bridge",
    gist: "Help drafting a message to someone",
    why: "Help finding the words for the friend you mentioned.",
    icon: MessageSquareHeart,
    tone: "text-chart-3",
    bg: "bg-chart-3/15",
  },
]

export const SAMPLE_SHARE =
  "I keep saying I'm fine. I haven't slept properly in a week."
export const SAMPLE_MIRROR =
  "It sounds like you're tired of holding everything together on your own."
