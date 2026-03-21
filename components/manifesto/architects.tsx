import { FounderCarousel, type Founder } from "@/components/ui/founder-carousel"

const founders: Founder[] = [
  {
    name: "Elias",
    role: "Co-Founder",
    initials: "E",
    bio: "Spent a decade in tech watching human connection turn into engagement metrics. Wanted to build something that actually cared about the human on the other side.",
    quote: "We kept optimizing for attention. I wanted to optimize for honesty.",
    gradient: "bg-gradient-to-br from-primary/30 via-accent/15 to-background",
  },
  {
    name: "Sloane",
    role: "Co-Founder",
    initials: "S",
    bio: "Realized that traditional support systems were failing her friends in their darkest hours. Needed a space that felt like a sanctuary, not a hospital.",
    quote: "The people I loved most had nowhere to go at 3 AM. That had to change.",
    gradient: "bg-gradient-to-br from-accent/20 via-primary/15 to-background",
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
