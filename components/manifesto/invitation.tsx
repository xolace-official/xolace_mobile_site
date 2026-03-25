"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import { useState } from "react"
import { getSupabaseBrowserClient } from "@/utils/supabase/client"
import { Coolshape } from "coolshapes-react"

export function Invitation() {
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
      }, 8000)
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
    <section className="asymmetric-layout mb-32" id="waitlist">
      <div className="bg-card p-5 md:p-20 rounded-xl relative overflow-hidden">
        {/* Subtle gradient glow */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 blur-[100px] rounded-full" />
        <div className="relative z-10 max-w-xl">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-3xl md:text-5xl text-foreground mb-6 font-light"
          >
            Come home.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-muted-foreground mb-12 text-lg font-serif"
          >
            If any of this resonated, we&apos;d like you to be there when it
            opens.
          </motion.p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center gap-4 py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/15 shrink-0"
                >
                  <Check className="w-6 h-6 text-primary" />
                </motion.div>
                <div className="space-y-1">
                  <p className="text-foreground font-light">
                    You&apos;re on the list.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll send regular updates & a quiet note when it&apos;s time.
                  </p>
                </div>
              </motion.div>
            ) : error ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="flex items-center gap-4 py-4"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-destructive/15 shrink-0"
                >
                  <Coolshape type="triangle" index={9} size={28} noise />
                </motion.div>
                <div className="space-y-1">
                  <p className="text-foreground font-light">
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
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <Input
                  type="email"
                  name="email"
                  autoComplete="email"
                  spellCheck={false}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="h-auto w-full border-none bg-input ring-1 ring-xo-outline-variant/15 focus-visible:ring-primary/50 rounded-lg px-6 py-4 text-sm text-foreground transition-all duration-500"
                />
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="h-auto w-full md:w-auto px-10 py-4 rounded-lg border-none cta-gradient text-primary-foreground font-semibold tracking-widest uppercase text-xs transition-all duration-500 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? "Joining..." : "Join the Waitlist"}
                </Button>
              </motion.form>
            )}
          </AnimatePresence>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-xs text-muted-foreground mt-4"
          >
            No spam. Just regular updates & a quiet note when it&apos;s ready.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
