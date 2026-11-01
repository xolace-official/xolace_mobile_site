"use client"

import Link from "next/link"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { m as motion } from "motion/react"
import { SUPPORT_WAYS } from "@/lib/support-ways"

const ease = [0.16, 1, 0.3, 1] as const

export function SupportSection() {
  return (
    <section className="section-spacing">
      <div className="section-container-wide">
        <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-xo-surface-lowest px-6 py-12 md:px-12 md:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 -left-24 size-96 rounded-full bg-primary/[0.08] blur-[120px]" />
            <div className="absolute -right-20 -bottom-32 size-80 rounded-full bg-accent/[0.05] blur-[120px]" />
          </div>

          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
            >
              <p className="section-label">Support Xolace</p>
              <h2 className="mt-5 font-serif text-4xl leading-tight text-balance md:text-5xl">
                Believe in what we&apos;re building?
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                You don&apos;t have to subscribe to stand behind it. Some people
                help by being here, sharing the idea, or helping us take the
                next step.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <Link
                  href="/support-us"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
                >
                  See how you can help <ArrowRight className="size-4" />
                </Link>
                <span className="text-sm text-muted-foreground/60">
                  No Plus plan required.
                </span>
              </div>
            </motion.div>

            <ul className="space-y-3">
              {SUPPORT_WAYS.map(({ number, icon: Icon, title, text }, i) => (
                <motion.li
                  key={number}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                >
                  <Link
                    href="/support-us#ways-to-help"
                    className="group flex items-start gap-4 rounded-2xl border border-border/50 bg-background/60 p-5 transition-colors duration-500 hover:border-primary/30 md:p-6"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.06] text-primary">
                      <Icon className="size-4" strokeWidth={1.5} />
                    </span>
                    <span className="flex-1">
                      <span className="flex items-center justify-between gap-3">
                        <span className="font-serif text-xl">{title}</span>
                        <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                        {text}
                      </span>
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
