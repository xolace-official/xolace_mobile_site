import { FounderCarousel, type Founder } from "@/components/ui/founder-carousel"

const founders: Founder[] = [
  {
    name: "Nathaniel Edem Adama",
    role: "CEO",
    initials: "N",
    bio: "Placeholder bio — to be updated.",
    image: "/founders/Nathan-mini.jpeg",
    gradient: "bg-gradient-to-br from-primary/30 via-accent/15 to-background",
  },
  {
    name: "Andrew Nana Beniako",
    role: "CMO",
    initials: "A",
    bio: "Placeholder bio — to be updated.",
    image: "/founders/kobby-mini.jpeg",
    gradient: "bg-gradient-to-br from-accent/20 via-primary/15 to-background",
  },
  {
    name: "Emmanuel Acquah",
    role: "COO",
    initials: "E",
    bio: "Placeholder bio — to be updated.",
    image: "/founders/kwame.jpeg",
    gradient: "bg-gradient-to-br from-primary/20 via-accent/20 to-background",
  },
  {
    name: "Emmanuel Somuah",
    role: "CTO",
    initials: "E",
    bio: "Placeholder bio — to be updated.",
    gradient: "bg-gradient-to-br from-accent/25 via-primary/10 to-background",
  },
]

export function Architects() {
  return (
    <section className="mb-32 md:mb-52 max-w-screen-2xl mx-auto">
      {/* Header — asymmetric like other sections */}
      <div className="asymmetric-layout mb-4">
        <h2 className="text-4xl md:text-5xl text-foreground mb-6 font-light">
          The Architects.
        </h2>
        <p className="text-muted-foreground max-w-lg font-serif leading-relaxed">
          Behind Xolace are those who felt the void first. We are building the
          room we couldn&apos;t find.
        </p>
      </div>

      {/* Horizontally scrollable founder cards */}
      <FounderCarousel founders={founders} />
    </section>
  )
}
