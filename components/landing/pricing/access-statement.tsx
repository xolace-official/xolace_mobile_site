"use client"

import { m as motion } from "motion/react"
import { Check } from "lucide-react"
import { accessColumns, type AccessColumn } from "./pricing-data"

function AccessPanel({
  column,
  index,
}: {
  column: AccessColumn
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.12,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`relative flex flex-col gap-4 rounded-2xl border p-7 ${
        column.highlighted
          ? "border-primary/20 bg-gradient-to-b from-primary/[0.07] to-transparent"
          : "border-xo-outline-variant/15 bg-gradient-to-b from-muted-foreground/[0.03] to-transparent"
      }`}
    >
      <p
        className={`font-mono text-[11px] tracking-[0.2em] uppercase ${
          column.highlighted ? "text-primary/70" : "text-muted-foreground/45"
        }`}
      >
        {column.eyebrow}
      </p>

      <h3 className="font-serif text-2xl leading-snug font-light text-foreground">
        {column.title}
      </h3>

      <p className="text-sm leading-relaxed font-light text-muted-foreground/55">
        {column.lead}
      </p>

      <ul className="mt-1 space-y-2.5">
        {column.items.map((item) => (
          <li key={item} className="flex items-start gap-2.5">
            <Check
              className={`mt-0.5 size-3.5 shrink-0 ${column.highlighted ? "text-primary" : "text-accent"}`}
              strokeWidth={2.5}
            />
            <span className="text-sm leading-snug font-light text-foreground/75">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {column.also && (
        <p className="mt-auto border-t border-border/30 pt-4 text-xs leading-relaxed font-light text-muted-foreground/40">
          {column.also}
        </p>
      )}
    </motion.div>
  )
}

export function AccessStatement() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {accessColumns.map((c, i) => (
        <AccessPanel key={c.eyebrow} column={c} index={i} />
      ))}
    </div>
  )
}
