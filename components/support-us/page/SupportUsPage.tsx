"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight, Heart, Mail, Share2, Sparkles } from "lucide-react"
import { m as motion } from "motion/react"
import { KINDLINGS } from "@/lib/kindlings"
import { ShareXolaceButton } from "@/components/support-us/share-xolace-button"
import { SupportContactDialog } from "@/components/support-us/support-contact-dialog"
import { Button } from "@/components/ui/button"

const supportWays = [
  {
    number: "01",
    icon: Heart,
    title: "Believe in the work",
    text: "Follow along, send encouragement, and stay close to what we are building.",
    action: "manifesto",
  },
  {
    number: "02",
    icon: Share2,
    title: "Pass it to someone",
    text: "Share Xolace with the person who might need a place to begin.",
    action: "share",
  },
  {
    number: "03",
    icon: Mail,
    title: "Help us go further",
    text: "If you want to support the work financially or in another way, talk to us.",
    action: "email",
  },
]

export function SupportUsPage() {
  return (
    <main className="overflow-clip pt-16 md:pt-20">
      <section className="section-spacing-x relative min-h-[calc(100svh-5rem)] pt-10 pb-16 md:pt-14 md:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.08] blur-[150px]" />
          <div className="absolute right-0 bottom-0 size-[24rem] rounded-full bg-accent/[0.05] blur-[140px]" />
        </div>

        <div className="section-container-wide relative z-10 grid min-h-[calc(100svh-10rem)] items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="section-label"
            >
              For the ones who see it
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-2xl font-serif text-5xl leading-[1.04] font-semibold text-balance md:text-7xl lg:text-[5.7rem]"
            >
              Keep the fire going.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-lg text-lg leading-relaxed text-muted-foreground md:text-xl"
            >
              You do not have to subscribe to Xolace Plus to believe in what we
              are building. Some people help by being here, sharing the idea,
              or helping us take the next step.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              <Button
                size="lg"
                className="rounded-full px-6"
                onClick={() => document.getElementById("ways-to-help")?.scrollIntoView({ behavior: "smooth" })}
              >
                Find your way in <ArrowRight className="size-4" />
              </Button>
              <span className="text-sm text-muted-foreground/50">No Plus plan required.</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto flex aspect-square w-full max-w-[30rem] items-center justify-center"
          >
            <div aria-hidden className="absolute size-[72%] rounded-full border border-primary/20 bg-primary/[0.035] shadow-[0_0_100px_var(--primary)]/10" />
            <div aria-hidden className="absolute size-[48%] rounded-full border border-accent/25 bg-accent/[0.05] shadow-[0_0_80px_var(--accent)]/10" />
            <div className="relative z-10 flex size-36 flex-col items-center justify-center rounded-full border border-primary/30 bg-xo-surface-low shadow-2xl shadow-primary/10 md:size-44">
              <Sparkles className="mb-2 size-5 text-primary" strokeWidth={1.5} />
              <span className="font-serif text-xl">Still becoming</span>
            </div>
            {KINDLINGS.map((kindling, index) => {
              const Icon = kindling.icon
              const positions = [
                "top-[8%] left-[20%]",
                "top-[18%] right-[10%]",
                "right-[1%] bottom-[26%]",
                "bottom-[8%] left-[20%]",
                "top-[45%] left-[0%]",
              ]
              return (
                <motion.div
                  key={kindling.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.55 + index * 0.08, duration: 0.5 }}
                  className={`absolute ${positions[index]} flex max-w-[42%] items-center gap-2 rounded-full border border-border/40 bg-xo-surface-low px-2.5 py-2 shadow-lg md:max-w-none md:px-4 md:py-2.5`}
                >
                  <Icon className="size-3.5 md:size-4" style={{ color: kindling.color }} strokeWidth={1.5} />
                  <span className="truncate text-[10px] text-muted-foreground md:text-xs">{kindling.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-border/20 bg-background">
        <div className="section-container-wide grid divide-y divide-border/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["01", "Free to begin", "The Mirror is free, and always will be."],
            ["02", "Built with care", "A calmer place for the moments in between."],
            ["03", "Still growing", "Every thoughtful supporter helps us go further."],
          ].map(([number, title, text]) => (
            <div key={number} className="flex gap-5 py-7 first:pt-0 last:pb-0 md:flex-col md:px-8 md:py-8 md:first:pl-0 md:last:pr-0 md:first:pt-8 md:last:pb-8">
              <span className="font-mono text-[10px] tracking-[0.2em] text-primary/60">{number}</span>
              <div>
                <p className="text-sm font-medium text-foreground">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="ways-to-help" className="section-spacing relative bg-xo-surface-lowest">
        <div className="section-container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <p className="section-label">Ways to help</p>
              <h2 className="mt-5 max-w-2xl font-serif text-4xl leading-tight md:text-6xl">
                Every kind of support gives it another day.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              There is no single right way to stand behind an idea. Choose what feels natural to you.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-4 md:grid-cols-3">
            {supportWays.map(({ number, icon: Icon, title, text, action }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex min-h-80 flex-col justify-between overflow-hidden rounded-2xl border border-border/50 bg-background p-7 transition-colors duration-500 hover:border-primary/30 md:p-8"
              >
                <div className="relative z-10 flex items-start justify-between gap-5">
                  <div className="flex size-11 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.06] text-primary">
                    <Icon className="size-5" strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground/30">{number}</span>
                </div>
                <div className="relative z-10 mt-16">
                  <h3 className="font-serif text-2xl md:text-3xl">{title}</h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">{text}</p>
                  {action === "manifesto" && (
                    <Link
                      href="/manifesto"
                      className="mt-7 flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                      aria-label="Read the Xolace manifesto"
                    >
                      <ArrowUpRight className="size-4" />
                    </Link>
                  )}
                  {action === "share" && <ShareXolaceButton />}
                  {action === "email" && (
                    <SupportContactDialog compact />
                  )}
                </div>
                <div aria-hidden className="absolute -right-16 -bottom-20 size-56 rounded-full bg-primary/[0.04] blur-3xl transition-colors duration-500 group-hover:bg-primary/[0.09]" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing section-spacing-x">
        <div className="section-container-wide">
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-6 py-14 text-background md:px-14 md:py-20">
            <div aria-hidden className="absolute -top-32 -right-20 size-96 rounded-full bg-primary/20 blur-[100px]" />
            <div className="relative z-10 flex flex-col justify-between gap-10 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-[10px] tracking-[0.22em] text-background/45 uppercase">Come closer</p>
                <h2 className="mt-5 font-serif text-4xl leading-tight md:text-6xl">Want to help us build what comes next?</h2>
                <p className="mt-5 max-w-lg leading-relaxed text-background/60">
                  We are still early. The people who care enough to reach out will help shape what Xolace becomes.
                </p>
              </div>
              <SupportContactDialog />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
