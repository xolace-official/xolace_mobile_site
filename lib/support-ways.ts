import { Heart, Mail, Share2, type LucideIcon } from "lucide-react"

export type SupportWay = {
  number: string
  icon: LucideIcon
  title: string
  text: string
  action: "manifesto" | "share" | "email"
}

// Shared by the landing SupportSection preview and the /support-us cards
export const SUPPORT_WAYS: SupportWay[] = [
  {
    number: "01",
    icon: Heart,
    title: "Believe in the work",
    text: "Follow along, send encouragement, and stay close to what we are building.",
    action: "manifesto",
  },
  {
    number: "02",
    icon: Share2,
    title: "Pass it to someone",
    text: "Share Xolace with the person who might need a place to begin.",
    action: "share",
  },
  {
    number: "03",
    icon: Mail,
    title: "Help us go further",
    text: "If you want to support the work financially or in another way, talk to us.",
    action: "email",
  },
]
