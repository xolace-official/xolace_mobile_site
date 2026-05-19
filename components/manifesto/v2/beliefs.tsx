"use client"

import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

const beliefs = [
  {
    title: "Healing happens in honest moments.",
    body: "Not in grand breakthroughs, but in the small act of telling the truth to yourself. The three minutes you spent naming what you feel matter more than you think.",
  },
  {
    title: "The daily weight deserves daily infrastructure.",
    body: "Mental wellness shouldn’t begin at crisis. You don’t wait until you’re sick to take care of your body. You shouldn’t wait until you’re broken to take care of your mind.",
  },
  {
    title: "AI should make human connection more reachable, not replace it.",
    body: "The AI finds the words. Humans provide the warmth. One without the other is incomplete. A mirror that only reflects back is useful. A mirror that shows you others have stood here too is transformative.",
  },
  {
    title: "People deserve a place to be human without performing.",
    body: "You are not a brand. You are not an audience. You are not a data point. You are a person carrying something, and you walked in here because you needed somewhere to set it down. That’s enough. That’s the whole qualification.",
  },
  {
    title: "Safe spaces need structure, not just intention.",
    body: "Anyone can say “this is a safe space.” We engineer it through design that prevents hierarchies, through anonymity that prevents performance. Safety is architecture, not a promise.",
  },
]

export function Beliefs() {
  return (
    <section className="mb-32 md:mb-52">
      <div className="section-container-wide">
        <ScrollReveal>
          <h2 className="text-4xl md:text-5xl text-foreground mb-16 md:mb-24 font-light">
            What We Believe.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-24">
          {beliefs.map((belief, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={cn(
                  "space-y-6",
                  i % 2 === 0 ? "md:translate-y-12" : ""
                )}
              >
                <p className="text-xs text-primary/60">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-3xl text-foreground font-light">
                  {belief.title}
                </h3>
                <p className="text-muted-foreground max-w-sm font-serif">
                  {belief.body}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
