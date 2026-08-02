"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import { m as motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { getSupabaseBrowserClient } from "@/utils/supabase/client"
import { Coolshape } from "coolshapes-react"

export function WaitlistForm({ className }: { className?: string }) {
  const supabase = getSupabaseBrowserClient()

  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return
    setIsLoading(true)

    try {
      const { error: insertError } = await supabase
        .from("waitlist")
        .insert({ email })

      if (insertError) throw insertError

      setSubmitted(true)
      setIsLoading(false)

      setTimeout(() => {
        setEmail("")
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      console.error("Waitlist submission error:", err)
      setError(true)
      setIsLoading(false)

      setTimeout(() => {
        setError(false)
      }, 3000)
    }
  }

  return (
    <div className={cn("mx-auto w-full max-w-lg", className)}>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center gap-4 py-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/15"
            >
              <Check className="h-7 w-7 text-primary" />
            </motion.div>
            <div className="space-y-1 text-center">
              <p className="text-lg font-light text-foreground">
                You&apos;re on the list.
              </p>
              <p className="text-sm text-muted-foreground">
                We&apos;ll send regular updates & a quiet note when it&apos;s
                time.
              </p>
            </div>
          </motion.div>
        ) : error ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="flex flex-col items-center justify-center gap-4 py-2"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-destructive/15"
            >
              <Coolshape type="triangle" index={9} size={32} noise />
            </motion.div>
            <div className="space-y-1 text-center">
              <p className="text-lg font-light text-foreground">
                Something went wrong.
              </p>
              <p className="text-sm text-muted-foreground">
                Please try again in a moment.
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex w-full flex-col items-center justify-center gap-4 md:flex-row"
          >
            <Input
              type="email"
              name="email"
              autoComplete="email"
              spellCheck={false}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="h-auto w-full rounded-lg border-none bg-input px-6 py-4 text-sm text-foreground ring-1 ring-xo-outline-variant/15 transition-all duration-500 focus-visible:ring-primary/50 md:flex-1"
            />
            <Button
              type="submit"
              size="lg"
              disabled={isLoading}
              className="cta-gradient h-auto w-full rounded-lg border-none px-8 py-4 font-semibold text-primary-foreground transition-all duration-500 disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
            >
              {isLoading ? "Saving..." : "Save my spot"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
