"use client"

import { useState } from "react"
import { m as motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

import { faqCategories, type FaqItem } from "@/lib/faq-data"

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
    <div className="border-b border-border/10 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group flex w-full items-start justify-between gap-8 py-6 text-left"
      >
        <span
          className={cn(
            "text-lg leading-snug font-light transition-colors duration-300",
            isOpen
              ? "text-foreground"
              : "text-foreground/75 group-hover:text-foreground"
          )}
        >
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-1 shrink-0"
        >
          <ChevronDown
            className={cn(
              "size-5 transition-colors duration-300",
              isOpen
                ? "text-primary"
                : "text-muted-foreground/40 group-hover:text-muted-foreground"
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
            <p className="max-w-2xl pb-7 font-serif text-base leading-relaxed text-muted-foreground md:text-lg">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FaqList() {
  const [openKey, setOpenKey] = useState<string | null>(null)
  const toggle = (key: string) => setOpenKey(openKey === key ? null : key)

  return (
    <section className="border-t border-border/10">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[200px_1fr] lg:gap-24">
          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-2">
              {faqCategories.map((cat) => (
                <a
                  key={cat.label}
                  href={`#faq-${cat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="block py-1 text-sm font-light text-muted-foreground/45 transition-colors duration-200 hover:text-foreground"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="space-y-14">
            {faqCategories.map((cat) => (
              <div
                key={cat.label}
                id={`faq-${cat.label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              >
                <motion.span
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="section-label mb-6"
                >
                  {cat.label}
                </motion.span>

                {cat.items.map((item, i) => {
                  const key = `${cat.label}-${i}`
                  return (
                    <motion.div
                      key={key}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{
                        duration: 0.5,
                        delay: i * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <FaqRow
                        item={item}
                        isOpen={openKey === key}
                        onToggle={() => toggle(key)}
                      />
                    </motion.div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
