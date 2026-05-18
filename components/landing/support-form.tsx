"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getSupabaseBrowserClient } from "@/utils/supabase/client"

export function SupportForm() {
  const supabase = getSupabaseBrowserClient()

  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email.trim()) return
    setIsLoading(true)

    try {
      const { error: insertError } = await supabase
        .from("supporters")
        .insert({ email, message: message.trim() || null })

      if (insertError) throw insertError

      setSubmitted(true)
    } catch (err) {
      console.error("Supporter submission error:", err)
      setError(true)
      setTimeout(() => setError(false), 3000)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-3 py-4"
        >
          <div className="inline-flex items-center justify-center size-12 rounded-full bg-primary/10">
            <Check className="size-5 text-primary" />
          </div>
          <p className="text-foreground font-light">
            You&apos;re in. Thank you for believing in this.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <Input
            type="email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className={cn(
              "h-auto border-none bg-xo-surface-low ring-1 ring-xo-outline-variant/15",
              "focus-visible:ring-primary/50 rounded-lg px-5 py-3.5 text-sm transition-all duration-500",
              error && "ring-destructive/50"
            )}
          />
          <Textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Why does this matter to you? (optional)"
            rows={3}
            className="border-none bg-xo-surface-low ring-1 ring-xo-outline-variant/15 focus-visible:ring-primary/50 rounded-lg px-5 py-3.5 text-sm resize-none transition-all duration-500"
          />
          <Button
            type="submit"
            size="lg"
            disabled={isLoading}
            className="w-full h-auto py-4 rounded-lg border-none cta-gradient text-primary-foreground font-semibold transition-all duration-500 disabled:opacity-60"
          >
            {isLoading ? "Saving..." : "Count me in"}
          </Button>
          {error && (
            <p className="text-sm text-destructive/80 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </motion.form>
      )}
    </AnimatePresence>
  )
}
