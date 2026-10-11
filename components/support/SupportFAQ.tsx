"use client"

import { useState } from "react"
import { m as motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { FaqAnswer } from "@/components/faq/faq-answer"
import { faqCategories, type FaqItem } from "@/lib/faq-data"

// A subset of the FAQ for people who came here with a problem; the answers live in lib/faq-data.ts
const SUPPORT_FAQ_IDS = [
  "what",
  "therapy",
  "share",
  "sell-train",
  "delete",
  "crisis",
]

const faqs: FaqItem[] = faqCategories
  .flatMap((c) => c.items)
  .filter((item) => SUPPORT_FAQ_IDS.includes(item.id))

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-start justify-between gap-8 py-6 text-left"
      >
        <span
          className={cn(
            "text-base leading-snug font-light transition-colors duration-300 md:text-lg",
            isOpen
              ? "text-foreground"
              : "text-foreground/70 group-hover:text-foreground"
          )}
        >
          {item.question}
        </span>

        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 shrink-0"
        >
          <Plus
            className={cn(
              "size-5 transition-colors duration-300",
              isOpen
                ? "text-primary"
                : "text-muted-foreground/40 group-hover:text-muted-foreground/70"
            )}
            strokeWidth={1.5}
          />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <FaqAnswer
              item={item}
              className="max-w-2xl pr-8 pb-7 font-serif text-sm leading-relaxed text-muted-foreground md:text-base"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="section-spacing relative overflow-hidden bg-xo-surface-lowest">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[150px]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
            FAQ
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
              Common questions.
            </h2>
            <p className="max-w-xs pb-1 text-sm font-light text-muted-foreground/40 sm:text-right">
              Still stuck?{" "}
              <Link
                href="/faq"
                className="underline underline-offset-2 transition-colors hover:text-foreground/70"
              >
                See the full FAQ
              </Link>
              .
            </p>
          </div>
        </motion.div>

        <div className="border-t border-border">
          {faqs.map((item, i) => (
            <FaqRow
              key={item.id}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
