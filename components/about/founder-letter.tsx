"use client"

import { motion } from "motion/react"

const letter = [
  { type: "pull" as const, text: "We almost didn't call it Xolace." },
  { type: "body" as const, text: "For a long time we kept describing what we were building in terms of what it wasn't. Not therapy. Not journaling. Not a chatbot. We'd list all the things it wasn't and hope people understood." },
  { type: "body" as const, text: "Eventually Andrew said something I've thought about since: We're building the room that doesn't have a name yet. That's when everything clicked." },
  { type: "body" as const, text: "There's a moment most people know but never talk about. You're lying in bed. Something is sitting on your chest — not a crisis, just a weight. You don't know what to call it. You don't have anyone to call about it. You definitely don't think it's bad enough for therapy." },
  { type: "body" as const, text: "So you scroll. Or you push it down. Or you tell yourself you'll deal with it tomorrow." },
  { type: "body" as const, text: "We've all been there. The four of us. We kept asking why nothing was built for that moment — the moment before you know what you need. Then we stopped asking and started building." },
  { type: "body" as const, text: "Xolace is the room we couldn't find. We're glad you're here." },
]

export function FounderLetter() {
  return (
    <section className="section-spacing border-t border-border/10">
      <div className="section-container">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="section-label mb-10"
        >
          A note from our founder
        </motion.span>

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
                  ? "font-serif italic text-2xl md:text-3xl text-foreground leading-[1.3]"
                  : "font-serif text-base md:text-lg text-muted-foreground leading-loose"
              }
            >
              {item.text}
            </motion.p>
          ))}

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: letter.length * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif italic text-foreground/50 pt-2"
          >
            - Nathaniel, CEO & Co-founder
          </motion.p>
        </div>
      </div>
    </section>
  )
}
