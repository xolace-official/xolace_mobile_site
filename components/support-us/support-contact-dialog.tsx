"use client"

import { useState } from "react"
import { ArrowRight, ArrowUpRight, Loader2 } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

type SupportContactDialogProps = {
  compact?: boolean
}

const supportContactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z.string().trim().email("Please enter a valid email address."),
  message: z
    .string()
    .trim()
    .min(1, "Please tell us how you would like to help."),
})

type SupportContactValues = z.infer<typeof supportContactSchema>

export function SupportContactDialog({
  compact = false,
}: SupportContactDialogProps) {
  const [open, setOpen] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const form = useForm<SupportContactValues>({
    resolver: zodResolver(supportContactSchema),
    defaultValues: { name: "", email: "", message: "" },
    mode: "onChange",
  })

  async function submit({ name, email, message }: SupportContactValues) {
    setIsSubmitting(true)
    const body = [`Name: ${name}`, `Email: ${email}`, "", message].join("\n")
    const subject = `Support for Xolace from ${name}`
    const mailto = `mailto:hello@xolaceinc.com?cc=support@xolaceinc.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 350))
      window.open(mailto, "_self")
      toast.success("Your email draft is ready to send.")
      form.reset()
      setOpen(false)
    } catch {
      toast.error("We could not open your email app. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {compact ? (
          <button
            type="button"
            className="mt-7 flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            aria-label="Contact Xolace about supporting the company"
          >
            <ArrowUpRight className="size-4" />
          </button>
        ) : (
          <button
            type="button"
            className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-background px-5 py-3 text-sm font-semibold text-foreground transition-transform hover:-translate-y-0.5"
          >
            Write to us <ArrowRight className="size-4" />
          </button>
        )}
      </DialogTrigger>
      <DialogContent className="max-w-lg rounded-2xl border-border/60 bg-background p-6 sm:max-w-lg md:p-8">
        <DialogHeader className="pr-8">
          <DialogTitle className="font-serif text-3xl">
            Tell us how you want to help.
          </DialogTitle>
          <DialogDescription className="pt-2 text-sm leading-relaxed">
            Fill this in and your email app will open with your message ready to
            send to our team.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submit)} className="mt-3 space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="support-name">Name</FormLabel>
                  <FormControl>
                    <Input
                      id="support-name"
                      autoComplete="name"
                      placeholder="Your name"
                      className="rounded-xl px-4 py-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage name="name" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="support-email">Email</FormLabel>
                  <FormControl>
                    <Input
                      id="support-email"
                      type="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="rounded-xl px-4 py-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage name="email" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="support-message">Message</FormLabel>
                  <FormControl>
                    <Textarea
                      id="support-message"
                      rows={5}
                      placeholder="How would you like to help?"
                      className="rounded-xl px-4 py-3"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage name="message" />
                </FormItem>
              )}
            />
            <DialogFooter className="pt-3 sm:flex-row sm:justify-end">
              <DialogClose asChild>
                <Button type="button" variant="ghost" size="lg">
                  Cancel
                </Button>
              </DialogClose>
              <Button
                type="submit"
                size="lg"
                disabled={!form.formState.isValid || isSubmitting}
                className="rounded-full px-5"
              >
                {isSubmitting ? <Loader2 className="animate-spin" /> : null}
                {isSubmitting ? "Opening email..." : "Open email"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
