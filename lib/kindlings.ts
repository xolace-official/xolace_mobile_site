// The fixed shelf of named Kindlings (CONTEXT.md). Episode reframe is left out: its public description is still "to confirm".
import {
  BookOpen,
  Headphones,
  MessageSquareHeart,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react"

export type KindlingId = "sit" | "vessa" | "xolacers" | "lantern" | "bridge"

export type Kindling = {
  id: KindlingId
  name: string
  icon: LucideIcon
  // Raw token colour, for SVG strokes and inline tints
  color: string
}

export const KINDLINGS: Kindling[] = [
  { id: "sit", name: "Sit with this", icon: Wind, color: "var(--primary)" },
  { id: "vessa", name: "Vessa", icon: Headphones, color: "var(--chart-2)" },
  { id: "xolacers", name: "Xolacers", icon: Users, color: "var(--accent)" },
  { id: "lantern", name: "Lantern", icon: BookOpen, color: "var(--chart-5)" },
  {
    id: "bridge",
    name: "Trusted Bridge",
    icon: MessageSquareHeart,
    color: "var(--chart-3)",
  },
]
