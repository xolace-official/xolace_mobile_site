"use client"

import { motion } from "motion/react"
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"

const reflections = [
  { quote: "Thinking about how much of my life I spend waiting for the 'real' part to start.", time: "11:24 PM" },
  { quote: "Today felt like a performance I wasn't prepared for.", time: "4:12 PM" },
  { quote: "The silence in my apartment used to feel lonely. Tonight, it just feels like space.", time: "2:05 AM" },
  { quote: "I don't even know what I'm sad about. That's the worst part.", time: "6:41 PM" },
  { quote: "Nobody asks how I'm doing anymore. I think they assume I'm fine.", time: "1:17 AM" },
  { quote: "Deleted the whole message before sending. Some things are safer left unsaid.", time: "9:33 PM" },
  { quote: "I keep replaying that conversation. The version in my head always goes differently.", time: "3:48 AM" },
  { quote: "Felt something today for the first time in weeks. I don't even know what it was.", time: "7:22 PM" },
  { quote: "Everyone's moving forward and I'm just… here.", time: "12:09 AM" },
  { quote: "The hardest part isn't being sad. It's pretending you're not.", time: "10:55 PM" },
]

const firstRow = reflections.slice(0, Math.ceil(reflections.length / 2))
const secondRow = reflections.slice(Math.ceil(reflections.length / 2))

function ReflectionCard({ quote, time }: { quote: string; time: string }) {
  return (
    <figure
      className={cn(
        "relative w-72 md:w-80 cursor-default overflow-hidden rounded-xl p-6",
        "bg-xo-surface-low/80 border-l-2 border-primary/25",
        "ring-1 ring-xo-outline-variant/[0.07]",
        "transition-all duration-500",
        "hover:bg-xo-surface-low hover:border-primary/40 hover:ring-xo-outline-variant/15"
      )}
    >
      <blockquote className="text-foreground/80 font-serif italic text-sm leading-relaxed">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-px flex-1 bg-primary/15" />
        <p className="text-[10px] text-muted-foreground/60 tracking-[0.15em] uppercase whitespace-nowrap">
          Anonymous &mdash; {time}
        </p>
      </div>
    </figure>
  )
}

export function ReflectionsSection() {
  return (
    // marquee is full-bleed — section-spacing-y keeps px off so the rows reach the edges
    <section className="section-spacing">
      <div className="space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 section-container"
        >
          <h2 className="text-4xl md:text-5xl text-foreground font-light">
            You&apos;re not the only one carrying this.
          </h2>
          <p className="text-muted-foreground font-serif italic max-w-md mx-auto">
            Anonymized reflections from the collective quiet.
          </p>
        </motion.div>

        <div className="relative">
          <Marquee pauseOnHover className="[--duration:55s] [--gap:1.25rem]">
            {firstRow.map((r, i) => (
              <ReflectionCard key={i} {...r} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:50s] [--gap:1.25rem] mt-5">
            {secondRow.map((r, i) => (
              <ReflectionCard key={i} {...r} />
            ))}
          </Marquee>

          <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-linear-to-r" />
          <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-linear-to-l" />
        </div>
      </div>
    </section>
  )
}
