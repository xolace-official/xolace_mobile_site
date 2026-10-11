"use client"

import { m as motion } from "motion/react"
import { SafetyLevels } from "@/components/safety/safety-levels"
import { TOPICS } from "@/lib/safety"

export function SafetyTopics() {
  return (
    <div className="flex flex-col gap-16">
      {TOPICS.map((t) => (
        <motion.article
          key={t.id}
          id={t.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex scroll-mt-28 flex-col gap-4"
        >
          <h2 className="text-2xl font-semibold text-foreground">{t.title}</h2>
          <p className="font-serif text-lg leading-relaxed text-muted-foreground">
            {t.lead}
          </p>
          {t.id === "check" && <SafetyLevels />}
          <ul className="flex flex-col gap-3 pl-4">
            {t.claims.map((c) => (
              <li key={c.id} className="leading-relaxed text-foreground/90">
                {c.text}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  )
}
