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

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Intent-only: no price, no "Subscribe", no payment surface (strategy §6).
// This is pure desire signal — "these insights are coming, want to be first?"
export function PricingWaitlistDialog({ open, onOpenChange }: Props) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

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
        className="max-w-md gap-0 rounded-2xl border-border/60 bg-background p-8 sm:max-w-md"
      >
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center gap-5 py-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 15,
                  delay: 0.1,
                }}
                className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/15"
              >
                <Check className="h-7 w-7 text-primary" />
              </motion.div>
              <div className="space-y-1.5">
                <p className="text-lg font-light text-foreground">
                  You&apos;re first in line.
                </p>
                <p className="text-sm leading-relaxed font-light text-muted-foreground/60">
                  When the insight layer opens, you&apos;ll hear before anyone
                  else. Quietly.
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
                <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground/35 uppercase">
                  Xolace+ — Early Access
                </p>
                <DialogTitle className="font-serif text-2xl leading-snug font-light text-foreground italic">
                  Want to see the full map?
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm leading-relaxed font-light text-muted-foreground/60">
                  These insights are coming. There&apos;s no price yet — your
                  interest is what helps us shape it. Leave your email and
                  you&apos;ll be first to read what&apos;s been showing up.
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
                  className="h-auto rounded-lg border-none bg-input px-5 py-3.5 text-sm text-foreground ring-1 ring-xo-outline-variant/15 transition-all duration-300 focus-visible:ring-primary/50"
                />
                <Button
                  type="submit"
                  className="h-10 w-full rounded-lg text-sm"
                >
                  Keep me posted
                </Button>
              </form>

              <p className="mt-5 text-center text-[11px] font-light text-muted-foreground/35">
                No spam. No commitments. Just a quiet heads-up.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  )
}
