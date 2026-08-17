"use client"

import { useState } from "react"
import { m as motion, AnimatePresence } from "motion/react"
import { Plus } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: "What is Xolace?",
    answer:
      "Xolace is a personal emotional processing tool. It gives you a quiet space to express what you're feeling and receive AI-generated reflections designed to help you articulate and understand your emotions — not to diagnose or treat them.",
  },
  {
    question: "Is Xolace a form of therapy?",
    answer:
      "No. Xolace is not therapy, counseling, or any form of medical service. It does not create a therapist-client or doctor-patient relationship. If you are going through something serious, we encourage you to seek support from a licensed professional or contact emergency services if you're in crisis.",
  },
  {
    question: "Who can see my reflections?",
    answer:
      "Your reflections are private by default. You control whether anything is shared. If you choose to contribute anonymously to the platform's shared pool, your personal identifiers are removed before inclusion. We never make your entries public without your explicit consent.",
  },
  {
    question: "How does the AI work?",
    answer:
      "When you share how you're feeling, Xolace uses AI to generate a reflection — a mirror of what you wrote, designed to help you see it more clearly. The AI classifies emotional themes and generates short, non-prescriptive responses. It does not make decisions about you or your wellbeing.",
  },
  {
    question: "Can I delete my data?",
    answer:
      "Yes. You can request deletion of your account and all associated data at any time. Depending on your location, you may also have additional rights under applicable privacy law. Contact us at privacy@xolaceinc.com to exercise any of your data rights.",
  },
  {
    question: "Can I delete my account?",
    answer:
      "Yes. You can request deletion of your account and all associated data at any time directly within the app settings.",
  },
  {
    question: "Does Xolace sell my data?",
    answer:
      "No. We do not sell your personal data. Full stop. We may share limited information with trusted service providers (like hosting and AI processing partners) who are contractually required to protect it and may not use it for their own purposes.",
  },
  {
    question: "What if I'm in a crisis?",
    answer:
      "Xolace is not a crisis tool. If you are feeling unsafe or in distress, please reach out to your local emergency services or a crisis helpline immediately. In the US, you can call or text 988 (Suicide & Crisis Lifeline). You matter — please seek real support when you need it.",
  },
  {
    question: "How do I join the waitlist?",
    answer:
      "You can join the waitlist directly from our homepage. We're rolling out access gradually and will notify you as soon as a spot opens up. Thank you for your patience — we're building something worth waiting for.",
  },
]

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
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
              <a
                href="/faq"
                className="underline underline-offset-2 transition-colors hover:text-foreground/70"
              >
                See the full FAQ
              </a>
              .
            </p>
          </div>
        </motion.div>

        <div className="border-t border-border">
          {faqs.map((item, i) => (
            <FaqRow
              key={item.question}
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
