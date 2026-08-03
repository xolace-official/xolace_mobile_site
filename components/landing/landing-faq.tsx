"use client"

import { useState } from "react"
import { m as motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"
import { faqCategories, type FaqItem } from "@/lib/faq-data"

type CatConfig = {
  dot: string
  activeDot: string
  activeBg: string
  activeText: string
  pillBorder: string
}

const catConfigs: CatConfig[] = [
  {
    dot: "bg-primary/35",
    activeDot: "bg-primary",
    activeBg: "bg-primary/[0.07]",
    activeText: "text-primary/80",
    pillBorder: "border-primary/30",
  },
  {
    dot: "bg-accent/35",
    activeDot: "bg-accent",
    activeBg: "bg-accent/[0.06]",
    activeText: "text-accent/80",
    pillBorder: "border-accent/30",
  },
  {
    dot: "bg-chart-2/35",
    activeDot: "bg-chart-2",
    activeBg: "bg-chart-2/[0.06]",
    activeText: "text-chart-2/80",
    pillBorder: "border-chart-2/30",
  },
  {
    dot: "bg-destructive/35",
    activeDot: "bg-destructive",
    activeBg: "bg-destructive/[0.06]",
    activeText: "text-destructive/80",
    pillBorder: "border-destructive/30",
  },
]

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
            <p className="max-w-2xl pr-8 pb-7 font-serif text-sm leading-relaxed text-muted-foreground md:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function LandingFaq() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [openKey, setOpenKey] = useState<string | null>(null)

  const switchCategory = (idx: number) => {
    setActiveIdx(idx)
    setOpenKey(null)
  }

  const toggle = (key: string) => setOpenKey(openKey === key ? null : key)
  const activeCat = faqCategories[activeIdx]
  const activeCfg = catConfigs[activeIdx]

  return (
    <section className="section-spacing relative overflow-hidden bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 select-none"
      >
        <div className="animate-gentle-pulse absolute -top-40 -right-20 h-[600px] w-[600px] rounded-full bg-primary/[0.05] blur-[160px]" />
        <div className="animate-gentle-pulse absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-accent/[0.04] blur-[140px] [animation-delay:3s]" />
      </div>

      <div className="section-container relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-14"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
              Frequently asked questions.
            </h2>
            <p className="max-w-xs pb-1 text-sm font-light text-muted-foreground/40 sm:text-right">
              Everything you&apos;d want to know before you trust a space like
              this.
            </p>
          </div>
        </motion.div>

        {/* Mobile category pills */}
        <div className="mb-8 flex flex-wrap gap-2 lg:hidden">
          {faqCategories.map((cat, i) => {
            const cfg = catConfigs[i]
            const isActive = activeIdx === i
            return (
              <button
                key={cat.label}
                onClick={() => switchCategory(i)}
                className={cn(
                  "flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[11px] tracking-[0.15em] uppercase transition-all duration-300",
                  isActive
                    ? `${cfg.activeBg} ${cfg.activeText} ${cfg.pillBorder}`
                    : "border-border/30 text-muted-foreground/40 hover:border-border/50 hover:text-muted-foreground/60"
                )}
              >
                <span
                  className={cn(
                    "size-1.5 shrink-0 rounded-full",
                    isActive ? cfg.activeDot : cfg.dot
                  )}
                />
                {cat.label}
              </button>
            )
          })}
        </div>

        {/* Two-column layout */}
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-16 xl:gap-24">
          {/* Left sidebar — desktop only */}
          <aside className="sticky top-32 hidden self-start lg:block">
            <div className="flex flex-col gap-1">
              {faqCategories.map((cat, i) => {
                const cfg = catConfigs[i]
                const isActive = activeIdx === i
                return (
                  <button
                    key={cat.label}
                    onClick={() => switchCategory(i)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300",
                      isActive
                        ? `${cfg.activeBg} ${cfg.activeText}`
                        : "text-muted-foreground/40 hover:bg-muted/50 hover:text-foreground/60"
                    )}
                  >
                    <span
                      className={cn(
                        "size-1.5 shrink-0 rounded-full transition-colors duration-300",
                        isActive ? cfg.activeDot : cfg.dot
                      )}
                    />
                    <span className="flex-1 text-sm font-light">
                      {cat.label}
                    </span>
                    <span
                      className={cn(
                        "font-mono text-[10px] transition-opacity duration-300",
                        isActive ? "opacity-50" : "opacity-25"
                      )}
                    >
                      {cat.items.length}
                    </span>
                  </button>
                )
              })}

              <div className="mt-8 px-4">
                <div className="mb-5 h-px bg-border/40" />
                <p className="text-[11px] leading-relaxed font-light text-muted-foreground/30">
                  Still have questions?{" "}
                  <a
                    href="/support"
                    className="underline underline-offset-2 transition-colors hover:text-muted-foreground/60"
                  >
                    Reach out.
                  </a>
                </p>
              </div>
            </div>
          </aside>

          {/* Right — accordion for active category */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className={cn(
                    "mb-2 font-mono text-[10px] tracking-[0.2em] uppercase",
                    activeCfg.activeText
                  )}
                >
                  {activeCat.label}
                </p>

                <div className="border-t border-border">
                  {activeCat.items.map((item, i) => {
                    const key = `${activeCat.label}-${i}`
                    return (
                      <FaqRow
                        key={key}
                        item={item}
                        isOpen={openKey === key}
                        onToggle={() => toggle(key)}
                      />
                    )
                  })}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
