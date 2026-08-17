"use client"

import { cn } from "@/lib/utils"
import { Sunrise, Layers, Users, Feather, ShieldCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"

const beliefs: {
  title: string
  body: string
  accent: string
  dot: string
  iconColor: string
  Icon: LucideIcon
}[] = [
  {
    title: "Healing happens in honest moments.",
    body: "Not in grand breakthroughs, but in the small act of telling the truth to yourself. The three minutes you spent naming what you feel matter more than you think.",
    accent: "border-primary/20 bg-primary/[0.03]",
    dot: "bg-primary/50",
    iconColor: "text-primary/70",
    Icon: Sunrise,
  },
  {
    title: "The daily weight deserves daily infrastructure.",
    body: "Mental wellness shouldn't begin at crisis. You don't wait until you're sick to take care of your body. You shouldn't wait until you're broken to take care of your mind.",
    accent: "border-accent/20 bg-accent/[0.03]",
    dot: "bg-accent/50",
    iconColor: "text-accent/70",
    Icon: Layers,
  },
  {
    title: "AI should make human connection more reachable, not replace it.",
    body: "The AI finds the words. Humans provide the warmth. One without the other is incomplete. A mirror that only reflects back is useful. A mirror that shows you others have stood here too is transformative.",
    accent: "border-chart-2/20 bg-chart-2/[0.03]",
    dot: "bg-chart-2/50",
    iconColor: "text-chart-2/70",
    Icon: Users,
  },
  {
    title: "People deserve a place to be human without performing.",
    body: "You are not a brand. You are not an audience. You are not a data point. You are a person carrying something, and you walked in here because you needed somewhere to set it down. That's enough.",
    accent: "border-primary/20 bg-primary/[0.03]",
    dot: "bg-primary/50",
    iconColor: "text-primary/70",
    Icon: Feather,
  },
  {
    title: "Safe spaces need structure, not just intention.",
    body: "Anyone can say “this is a safe space.” We engineer it through design that prevents hierarchies, through anonymity that prevents performance. Safety is architecture, not a promise.",
    accent: "border-accent/20 bg-accent/[0.03]",
    dot: "bg-accent/50",
    iconColor: "text-accent/70",
    Icon: ShieldCheck,
  },
]

export function Beliefs() {
  return (
    <section className="section-spacing">
      <div className="section-container-wide">
        <ScrollReveal>
          <h2 className="mb-16 font-serif text-5xl leading-[1.1] font-semibold text-foreground md:mb-24 md:text-6xl lg:text-[4.25rem]">
            What We Believe.
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-3 md:gap-y-24">
          {beliefs.map((belief, i) => {
            const { Icon } = belief
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div
                  className={cn(
                    "h-full space-y-4 rounded-2xl border p-7",
                    belief.accent,
                    i % 2 === 0 ? "md:translate-y-12" : ""
                  )}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/60">
                      <Icon
                        className={cn("size-[15px]", belief.iconColor)}
                        strokeWidth={1.5}
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`size-1.5 shrink-0 rounded-full ${belief.dot}`}
                      />
                      <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground/30 uppercase">
                        {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-serif text-xl leading-snug font-medium text-foreground md:text-2xl">
                    {belief.title}
                  </h3>
                  <p className="font-serif text-sm leading-relaxed text-muted-foreground/70 md:text-[15px]">
                    {belief.body}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
