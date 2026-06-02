"use client"

import { m as motion } from "motion/react"

const letter = [
  { type: "pull" as const, text: "We almost didn't call it Xolace." },
  { type: "body" as const, text: "For a long time we kept describing what we were building in terms of what it wasn't. Not therapy. Not journaling. Not a chatbot. We'd list all the things it wasn't and hope people understood." },
  { type: "body" as const, text: "Eventually Andrew said something I've thought about since: We're building the room that doesn't have a name yet. That's when everything clicked." },
  { type: "body" as const, text: "There's a moment most people know but never talk about. You're lying in bed. Something is sitting on your chest, not a crisis, just a weight. You don't know what to call it. You don't have anyone to call about it. You definitely don't think it's bad enough for therapy." },
  { type: "body" as const, text: "So you scroll. Or you push it down. Or you tell yourself you'll deal with it tomorrow." },
  { type: "body" as const, text: "We've all been there. The four of us. We kept asking why nothing was built for that moment, the moment before you know what you need. Then we stopped asking and started building." },
  { type: "body" as const, text: "Xolace is the room we couldn't find. We're glad you're here." },
]

export function FounderLetter() {
  return (
    <section className="section-spacing bg-xo-surface-lowest overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[130px] top-0 right-0 animate-gentle-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[110px] bottom-0 left-1/4 animate-gentle-pulse [animation-delay:3s]" />
      </div>

      <div className="section-container relative z-10">

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30 mb-14"
        >
          A note from our founder
        </motion.p>

        <div className="lg:grid lg:grid-cols-[1fr_420px] lg:gap-24 xl:gap-32">

          <div className="max-w-2xl space-y-7">
            {letter.map((item, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className={
                  item.type === "pull"
                    ? "font-serif italic text-2xl md:text-3xl lg:text-4xl text-foreground leading-[1.3] border-l-2 border-primary/30 pl-6"
                    : "font-serif text-base md:text-lg text-muted-foreground/65 leading-loose"
                }
              >
                {item.text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: letter.length * 0.05 + 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="pt-6 flex items-center gap-5"
            >
              <div className="h-px w-8 bg-border/40" />
              <p className="font-serif italic text-foreground/40 text-sm">
                Nathaniel, CEO &amp; Co-founder
              </p>
            </motion.div>
          </div>

          {/* Right — decorative pull-aside (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col justify-center gap-8 self-start sticky top-32 pt-2"
          >
            <div className="rounded-2xl border border-primary/15 bg-primary/[0.05] p-8 space-y-4">
              <div className="size-8 rounded-full bg-primary/15 border border-primary/20 flex items-center justify-center">
                <div className="size-2 rounded-full bg-primary/60" />
              </div>
              <p className="font-serif italic text-lg text-foreground/70 leading-relaxed">
                &ldquo;We&apos;re building the room that doesn&apos;t have a name yet.&rdquo;
              </p>
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/30">
                Andrew, CMO &amp; Co-founder
              </p>
            </div>

            <div className="rounded-2xl border border-accent/15 bg-accent/[0.04] p-8 space-y-3">
              <p className="font-serif italic text-base text-foreground/55 leading-relaxed">
                &ldquo;Xolace is the room we couldn&apos;t find.&rdquo;
              </p>
              <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/30">
                Nathaniel, CEO &amp; Co-founder
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
