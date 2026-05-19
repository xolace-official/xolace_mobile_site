"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { motion, AnimatePresence } from "motion/react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { getSupabaseBrowserClient } from "@/utils/supabase/client"

const schema = z.object({
  name: z.string().min(1, { message: "Full name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

function RequiredMark() {
  return <span className="text-destructive ml-0.5">*</span>
}

export function SupportForm() {
  const supabase = getSupabaseBrowserClient()
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  })

  const onSubmit = async (data: FormValues) => {
    // name is prepended to message until supporters table has a name column migration
    const fullMessage = [data.name, data.message?.trim()].filter(Boolean).join(" - ")

    const { error } = await supabase
      .from("supporters")
      .insert({ email: data.email, message: fullMessage || null })

    if (error) {
      console.error("Supporter submission error:", error)
      toast.error("Something went wrong. Please try again.")
      return
    }

    setSubmitted(true)
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
          <div className="inline-flex size-12 items-center justify-center rounded-full bg-primary/10">
            <Check className="size-5 text-primary" />
          </div>
          <p className="font-light text-foreground">
            You&apos;re in. Thank you for believing in this.
          </p>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-8 rounded-lg border bg-secondary p-8"
        >
          {/* Name + Email — side by side on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col items-start gap-1">
              <label className="text-sm font-medium text-foreground/80">
                Full Name
                <RequiredMark />
              </label>
              <Input
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                {...register("name")}
                className={cn(
                  "h-auto border-none bg-xo-surface-low ring-1 ring-xo-outline-variant/15",
                  "rounded-lg px-5 py-3.5 text-base transition-all duration-500 focus-visible:ring-primary/50",
                  errors.name && "ring-destructive/50"
                )}
              />
              {errors.name && (
                <p className="text-xs text-destructive/80">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start gap-1">
              <label className="text-sm font-medium text-foreground/80">
                Email
                <RequiredMark />
              </label>
              <Input
                type="email"
                autoComplete="email"
                placeholder="Your email"
                {...register("email")}
                className={cn(
                  "h-auto border-none bg-xo-surface-low ring-1 ring-xo-outline-variant/15",
                  "rounded-lg px-5 py-3.5 text-base transition-all duration-500 focus-visible:ring-primary/50",
                  errors.email && "ring-destructive/50"
                )}
              />
              {errors.email && (
                <p className="text-xs text-destructive/80">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start gap-1">
            <label className="text-sm font-medium text-foreground/80">
              Your Message (optional)
            </label>
            <Textarea
              placeholder="Why does this matter to you?"
              rows={3}
              {...register("message")}
              className="resize-none rounded-lg border-none bg-xo-surface-low px-5 py-3.5 text-base ring-1 ring-xo-outline-variant/15 transition-all duration-500 focus-visible:ring-primary/50"
            />
          </div>
          <Button
            type="submit"
            size="lg"
            disabled={!isValid || isSubmitting}
            className="h-12 w-full rounded-lg border-none text-lg font-semibold"
          >
            {isSubmitting ? "Saving..." : "Count me in"}
          </Button>
        </motion.form>
      )}
    </AnimatePresence>
  )
}
