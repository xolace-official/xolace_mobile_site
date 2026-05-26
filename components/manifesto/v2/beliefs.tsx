"use client"

import { cn } from "@/lib/utils"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

const beliefs = [
  {
    title: "Healing happens in honest moments.",
    body: "Not in grand breakthroughs, but in the small act of telling the truth to yourself. The three minutes you spent naming what you feel matter more than you think.",
    accent: "border-primary/20 bg-primary/[0.03]",
    dot: "bg-primary/50",
  },
  {
    title: "The daily weight deserves daily infrastructure.",
    body: "Mental wellness shouldn't begin at crisis. You don't wait until you're sick to take care of your body. You shouldn't wait until you're broken to take care of your mind.",
    accent: "border-accent/20 bg-accent/[0.03]",
    dot: "bg-accent/50",
  },
  {
    title: "AI should make human connection more reachable, not replace it.",
    body: "The AI finds the words. Humans provide the warmth. One without the other is incomplete. A mirror that only reflects back is useful. A mirror that shows you others have stood here too is transformative.",
    accent: "border-chart-2/20 bg-chart-2/[0.03]",
    dot: "bg-chart-2/50",
  },
  {
    title: "People deserve a place to be human without performing.",
    body: "You are not a brand. You are not an audience. You are not a data point. You are a person carrying something, and you walked in here because you needed somewhere to set it down. That's enough.",
    accent: "border-primary/20 bg-primary/[0.03]",
    dot: "bg-primary/50",
  },
  {
    title: "Safe spaces need structure, not just intention.",
    body: "Anyone can say “this is a safe space.” We engineer it through design that prevents hierarchies, through anonymity that prevents performance. Safety is architecture, not a promise.",
    accent: "border-accent/20 bg-accent/[0.03]",
    dot: "bg-accent/50",
  },
]

export function Beliefs() {
  return (
    <section className="section-spacing">
      <div className="section-container-wide">

        <ScrollReveal>
          <h2 className="font-serif italic font-light text-4xl md:text-5xl text-foreground mb-16 md:mb-24 leading-[1.1]">
            What We Believe.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 md:gap-y-24">
          {beliefs.map((belief, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div
                className={cn(
                  "rounded-2xl border p-7 space-y-4 h-full",
                  belief.accent,
                  i % 2 === 0 ? "md:translate-y-12" : ""
                )}
              >
                <div className="flex items-center gap-2">
                  <span className={`size-1.5 rounded-full shrink-0 ${belief.dot}`} />
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/30">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="font-serif italic text-xl md:text-2xl text-foreground font-light leading-snug">
                  {belief.title}
                </h3>
                <p className="font-serif text-sm md:text-[15px] text-muted-foreground/70 leading-relaxed">
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
