"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqCategories } from "@/lib/faq-data"

function FaqRow({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="border-b border-muted">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-8 py-3.5 text-left group"
      >
        <span
          className={cn(
            "text-base font-light leading-snug transition-colors duration-300",
            isOpen
              ? "text-foreground"
              : "text-foreground/65 group-hover:text-foreground"
          )}
        >
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 mt-0.5"
        >
          <ChevronDown
            className={cn(
              "size-4 transition-colors duration-300",
              isOpen
                ? "text-primary"
                : "text-muted-foreground/25 group-hover:text-muted-foreground/60"
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
            <p className="font-serif italic text-sm md:text-base text-muted-foreground/65 leading-relaxed pb-5 max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function LandingFaq() {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const toggle = (key: string) => setOpenKey(openKey === key ? null : key)

  return (
    <section className="section-spacing bg-xo-outline-variant">
      <div className="section-container">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl leading-tight font-serif italic">
            Frequently asked{" "}
            <span className="">questions.</span>
          </h2>
        </motion.div>

        {/* Categories */}
        <div className=" mx-auto space-y-10">
          {faqCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: catIdx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Category label + rule */}
              <div className="flex items-center gap-4 mb-1">
                <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground/80 shrink-0">
                  {cat.label}
                </p>
              </div>

              {cat.items.map((item, i) => {
                const key = `${cat.label}-${i}`
                return (
                  <FaqRow
                    key={key}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openKey === key}
                    onToggle={() => toggle(key)}
                  />
                )
              })}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
