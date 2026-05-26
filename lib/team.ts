export type Founder = {
  name: string
  role: string
  initials: string
  bio: string
  quote?: string
  gradient: string
  image?: string
}

export const founders: Founder[] = [
  {
    name: "Nathaniel Edem Adama",
    role: "CEO & Co-founder",
    initials: "N",
    bio: "Nathaniel started building Xolace because he kept running out of words for what he was feeling. He wants everyone to have a place that listens before it advises; the kind of presence he needed most on the nights when something was sitting on his chest.",
    image: "/founders/Nathan-mini.jpeg",
    gradient: "bg-gradient-to-br from-primary/30 via-accent/15 to-background",
  },
  {
    name: "Andrew Nana Beniako",
    role: "CMO & Co-founder",
    initials: "A",
    bio: "Andrew believes the most important things are hardest to say out loud. His work is making sure Xolace reaches the people who need it, which means never making them feel like they're being sold something.",
    image: "/founders/kobby-mini.jpeg",
    gradient: "bg-gradient-to-br from-accent/20 via-primary/15 to-background",
  },
  {
    name: "Emmanuel Acquah",
    role: "COO & Co-founder",
    initials: "E",
    bio: "Emmanuel keeps everything moving so the team can focus on building. He believes the best infrastructure is the kind you never notice, because it's always there, quietly working.",
    image: "/founders/kwame.jpeg",
    gradient: "bg-gradient-to-br from-primary/20 via-accent/20 to-background",
  },
  {
    name: "Emmanuel Somuah",
    role: "CTO & Co-founder",
    initials: "E",
    bio: "Emmanuel built the systems that make Xolace feel instant and human at the same time. He believes technology should disappear, what matters is whether someone felt heard.",
    gradient: "bg-gradient-to-br from-accent/25 via-primary/10 to-background",
  },
]
