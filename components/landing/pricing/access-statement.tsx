"use client"

import { m as motion } from "motion/react"
import { Check } from "lucide-react"
import { accessColumns, type AccessColumn } from "./pricing-data"

// Tailwind needs literal class names to see at build time — a template string
// like `md:grid-cols-${n}` would be purged. This keeps the grid honest if a
// tier is ever added (monetization strategy §3: architect for a 2nd tier).
const GRID_COLS_BY_COUNT: Record<number, string> = {
  1: "md:grid-cols-1",
  2: "md:grid-cols-2",
  3: "md:grid-cols-3",
  4: "md:grid-cols-4",
}

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

      {column.also && column.also.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border/30 pt-4">
          {column.also.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/40 px-2.5 py-1 font-mono text-[10px] tracking-[0.04em] text-muted-foreground/45"
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  )
}

export function AccessStatement() {
  const gridClass = GRID_COLS_BY_COUNT[accessColumns.length] ?? "md:grid-cols-2"

  return (
    <div className={`grid grid-cols-1 gap-4 ${gridClass}`}>
      {accessColumns.map((c, i) => (
        <AccessPanel key={c.eyebrow} column={c} index={i} />
      ))}
    </div>
  )
}
