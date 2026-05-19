"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type FaqItem = {
  question: string
  answer: string
}

type FaqCategory = {
  label: string
  items: FaqItem[]
}

const categories: FaqCategory[] = [
  {
    label: "General",
    items: [
      {
        question: "What is Xolace?",
        answer:
          "Xolace is emotional processing infrastructure — built for the moments when you feel something you can't name. Heavy, anxious, numb, but not in crisis. Not therapy. Not a chatbot. The quiet space between fine and needing help.",
      },
      {
        question: "Is Xolace free?",
        answer:
          "Yes. Free to download on iOS and Android. The core experience — Mirror, Vent, and Glimpses — is free. We believe the thing that helps people should be available to everyone.",
      },
      {
        question: "Who is this for?",
        answer:
          "Anyone who feels something they can't name. If you've ever had a weight on your chest that you couldn't explain — and didn't think it was 'bad enough' to bring up — Xolace was built for that moment.",
      },
      {
        question: "Is this therapy?",
        answer:
          "No. Xolace sits in the space before therapy. It doesn't diagnose. It doesn't advise. It helps you hear yourself more clearly — so that when you do reach out for help, you know what you're reaching out about.",
      },
    ],
  },
  {
    label: "How it works",
    items: [
      {
        question: "What is Mirror?",
        answer:
          "You describe what you're feeling — fragments, words, whatever you have. Mirror reflects it back with more precision than you found on your own. 1–3 sentences. The goal: you read it and think, yes — that's exactly it.",
      },
      {
        question: "What is Vent?",
        answer:
          "For when you need to release, not understand. You open the mic and speak. Something listens — without advising, without judging. When you're done, it's gone. \"Gone.\" appears on screen. Nothing is stored.",
      },
      {
        question: "What are Glimpses?",
        answer:
          "Short videos from real people describing an emotion like yours. Not advice. Not diagnosis. Just: I felt this. I'm still here. Human recognition without clinical framing.",
      },
      {
        question: "Do I need an account?",
        answer:
          "No. Mirror and Vent work without one. An account is only needed to contribute your own Glimpses or save notes across devices. We ask for as little as possible.",
      },
    ],
  },
  {
    label: "Privacy",
    items: [
      {
        question: "What happens to what I share?",
        answer:
          "Your words are encrypted. Your name is never attached to what you write. No one at Xolace reads your Mirror sessions. Vent sessions are deleted immediately when they end — nothing is stored.",
      },
      {
        question: "Are my vent sessions recorded?",
        answer:
          "No. Voice sessions are processed in real time to generate a response, then deleted. There's no recording, no transcript, no storage of any kind after the session ends.",
      },
      {
        question: "Is my data sold?",
        answer:
          "Never. We don't run ads. We don't sell data. The only way this works is if people trust it enough to return — and they won't if we sell them out.",
      },
    ],
  },
  {
    label: "Crisis & Safety",
    items: [
      {
        question: "What if I'm in crisis?",
        answer:
          "Xolace is not designed for crisis. If you or someone you know is in immediate danger, contact your local emergency services. In the US, call or text 988 (Suicide & Crisis Lifeline) any time, day or night.",
      },
    ],
  },
]

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border/10 last:border-0">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-start justify-between gap-8 py-5 text-left group"
      >
        <span className={cn(
          "text-base font-light leading-snug transition-colors duration-300",
          isOpen ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"
        )}>
          {item.question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 mt-0.5"
        >
          <ChevronDown
            className={cn(
              "size-4 transition-colors duration-300",
              isOpen ? "text-primary" : "text-muted-foreground/35 group-hover:text-muted-foreground"
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
            <p className="font-serif text-sm md:text-base text-muted-foreground/70 leading-relaxed pb-5 max-w-2xl">
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
    <section className="section-spacing border-t border-border/10">
      <div className="section-container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-16 lg:gap-24">

          <aside className="hidden lg:block">
            <div className="sticky top-32 space-y-2">
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href={`#faq-${cat.label.toLowerCase()}`}
                  className="block text-sm text-muted-foreground/45 hover:text-foreground py-1 transition-colors duration-200 font-light"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="space-y-14">
            {categories.map((cat) => (
              <div key={cat.label} id={`faq-${cat.label.toLowerCase()}`}>
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
                      transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
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
