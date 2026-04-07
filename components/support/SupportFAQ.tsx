"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { PlusIcon } from "lucide-react"

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

function FAQItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border-b border-border last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "text-sm md:text-base font-medium leading-snug transition-colors duration-200",
          isOpen ? "text-primary" : "text-foreground group-hover:text-primary"
        )}>
          {item.question}
        </span>
        <PlusIcon
          className={cn(
            "size-4 shrink-0 mt-0.5 text-muted-foreground transition-all duration-300",
            isOpen && "rotate-45 text-primary"
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <p className="font-serif text-[15px] text-muted-foreground leading-[1.85] pb-6">
          {item.answer}
        </p>
      </div>
    </div>
  )
}

export function SupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section className="mb-24">
      <div className="mb-10">
        <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-3">
          FAQ
        </p>
        <h2 className="text-2xl md:text-3xl font-light">Common questions</h2>
      </div>
      <div className="border-t border-border">
        {faqs.map((item, i) => (
          <FAQItem
            key={i}
            item={item}
            isOpen={openIndex === i}
            onToggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  )
}
