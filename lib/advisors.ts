import type { Founder } from "@/components/ui/founder-carousel"

export type Advisor = Founder

// Dummy placeholder advisors — swap in real names, credentials, bios, and
// photos before this section goes live. Bios are capped around 29 words —
// the card shows the full bio with no truncation, so keep new entries
// within that length. Each advisor needs at least one of linkedin / website
// / x set — the card renders whichever of those three are present.
export const advisors: Advisor[] = [
  {
    name: "Dr. Maya Chen-Okafor",
    role: "Clinical Psychologist, PsyD",
    expertise: "Clinical Psychology",
    initials: "M",
    bio: "Maya spent a decade in trauma-informed care before she'd ever design a product. She pushed the team to build Mirror around what actually helps in a moment of distress.",
    gradient: "bg-gradient-to-br from-primary/25 via-accent/15 to-background",
    linkedin: "https://linkedin.com/in/mayachenokafor",
    website: "https://mayachenokafor.com",
  },
  {
    name: "Reuben Okoye",
    role: "Trust & Safety Advisor",
    expertise: "Trust & Safety",
    initials: "R",
    bio: "Reuben ran crisis-escalation policy at two consumer platforms before joining Xolace as an advisor. He reviews every flow that touches a vulnerable moment, deciding what could feel exploitative.",
    gradient: "bg-gradient-to-br from-accent/20 via-primary/15 to-background",
    linkedin: "https://linkedin.com/in/reubenokoye",
    x: "https://x.com/reubenokoye",
  },
  {
    name: "Priya Raman",
    role: "Product Strategy Advisor",
    expertise: "Product & Design",
    initials: "P",
    bio: "Priya has shipped consumer products used by tens of millions of people, and advises Xolace on the discipline of restraint, what to leave out, and what never to gamify.",
    gradient: "bg-gradient-to-br from-primary/20 via-accent/20 to-background",
    linkedin: "https://linkedin.com/in/priyaraman",
    website: "https://priyaraman.design",
    x: "https://x.com/priyaraman",
  },
  {
    name: "Dr. Samuel Vance",
    role: "Psychiatrist, Crisis Care",
    expertise: "Crisis Care",
    initials: "S",
    bio: "Samuel practices emergency psychiatry and consults on Xolace's escalation pathways, making sure the product knows the difference between someone who needs to be heard and someone in crisis.",
    gradient: "bg-gradient-to-br from-accent/25 via-primary/10 to-background",
    linkedin: "https://linkedin.com/in/samuelvance",
  },
  {
    name: "Lindiwe Mokoena",
    role: "Privacy & Ethics Advisor",
    expertise: "Privacy & Ethics",
    initials: "L",
    bio: "Lindiwe advises on data governance for health-adjacent products across three continents. She holds Xolace to a stricter standard than most regulations require, especially around what gets stored.",
    gradient: "bg-gradient-to-br from-primary/15 via-accent/25 to-background",
    website: "https://lindiwemokoena.com",
  },
]
