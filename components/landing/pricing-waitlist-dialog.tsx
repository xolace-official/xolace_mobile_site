"use client"

import { useState } from "react"
import { m as motion, AnimatePresence } from "motion/react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"

export type PricingPlan = "free" | "plus" | "premium"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  plan: PricingPlan
}

const paidCopy = {
  title: "Save your spot.",
  description:
    "Pricing hasn't been set yet. Your interest helps us understand what matters, and you'll hear first.",
}

const dialogCopy: Record<PricingPlan, { eyebrow: string; title: string; description: string }> = {
  free: {
    eyebrow: "Free Plan",
    title: "You're almost in.",
    description: "Drop your email and we'll send a quiet note the moment Xolace is ready.",
  },
  plus: { eyebrow: "Plus: Early Access", ...paidCopy },
  premium: { eyebrow: "Premium: Early Access", ...paidCopy },
}

export function PricingWaitlistDialog({ open, onOpenChange, plan }: Props) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const copy = dialogCopy[plan]

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubmitted(true)
  }

  const handleOpenChange = (next: boolean) => {
    if (!next) {
      setTimeout(() => {
        setSubmitted(false)
        setEmail("")
      }, 300)
    }
    onOpenChange(next)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        showCloseButton
        className="max-w-md sm:max-w-md rounded-2xl bg-background border-border/60 p-8 gap-0"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center text-center gap-5 py-6"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/15"
              >
                <Check className="w-7 h-7 text-primary" />
              </motion.div>
              <div className="space-y-1.5">
                <p className="text-lg font-light text-foreground">You&apos;re on the list.</p>
                <p className="text-sm text-muted-foreground/60 font-light leading-relaxed">
                  We&apos;ll reach out when it&apos;s time. Quietly.
                </p>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <DialogHeader className="mb-7">
                <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground/35 mb-3">
                  {copy.eyebrow}
                </p>
                <DialogTitle className="font-serif italic font-light text-foreground text-2xl leading-snug">
                  {copy.title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground/60 font-light leading-relaxed mt-2">
                  {copy.description}
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="h-auto border-none bg-input ring-1 ring-xo-outline-variant/15 focus-visible:ring-primary/50 rounded-lg px-5 py-3.5 text-sm text-foreground transition-all duration-300"
                />
                <Button type="submit" className="w-full rounded-lg h-10 text-sm">
                  Save my spot
                </Button>
              </form>

              <p className="mt-5 text-center text-[11px] text-muted-foreground/35 font-light">
                No spam. No commitments. Just a quiet heads-up.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
