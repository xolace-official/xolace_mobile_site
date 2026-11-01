"use client"

import { Check } from "lucide-react"
import { m as motion } from "motion/react"
import { SafetyLevels } from "@/components/safety/safety-levels"
import { Body, Eyebrow } from "@/components/shared/ledger"
import { TOPICS } from "@/lib/safety"

export function SafetyTopics() {
  return (
    <div className="flex flex-col gap-16 md:gap-20">
      {TOPICS.map((t, i) => (
        <motion.article
          key={t.id}
          id={t.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex scroll-mt-28 flex-col gap-5"
        >
          <Eyebrow className="text-primary">
            {String(i + 1).padStart(2, "0")}
          </Eyebrow>
          <h2 className="text-[1.75rem] leading-[1.1] font-medium tracking-[-0.02em] text-foreground md:text-[2rem]">
            {t.title}
          </h2>
          <Body className="max-w-2xl">{t.lead}</Body>
          {t.id === "check" && <SafetyLevels />}
          <ul className="flex flex-col border-t border-border">
            {t.claims.map((c) => (
              <li
                key={c.id}
                className="flex gap-3 border-b border-border py-4 leading-relaxed text-foreground"
              >
                <Check
                  aria-hidden
                  strokeWidth={1.5}
                  className="mt-1 size-4 shrink-0 text-primary"
                />
                {c.text}
              </li>
            ))}
          </ul>
        </motion.article>
      ))}
    </div>
  )
}
