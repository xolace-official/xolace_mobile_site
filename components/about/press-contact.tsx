"use client"

import { m as motion } from "motion/react"
import Link from "next/link"
import { Mail, ArrowRight } from "lucide-react"

const contacts = [
  {
    label: "Press inquiries",
    description: "Feature stories, interviews, asset requests.",
    email: "press@xolaceinc.com",
    accentBorder: "border-primary/20",
    accentBg: "bg-primary/[0.07]",
    accentHover: "hover:border-primary/40",
    iconBg: "bg-primary/[0.12] border-primary/20",
    iconColor: "text-primary/80",
    dotColor: "bg-primary/50",
  },
  {
    label: "General",
    description: "Partnerships, questions, anything else.",
    email: "hello@xolaceinc.com",
    accentBorder: "border-accent/20",
    accentBg: "bg-accent/[0.06]",
    accentHover: "hover:border-accent/40",
    iconBg: "bg-accent/[0.12] border-accent/20",
    iconColor: "text-accent/80",
    dotColor: "bg-accent/50",
  },
]

export function PressContact() {
  return (
    <section className="section-spacing relative overflow-hidden bg-muted">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -right-10 -bottom-20 h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[140px]" />
        <div className="animate-gentle-pulse absolute top-0 left-1/3 h-[400px] w-[400px] rounded-full bg-accent/[0.04] blur-[120px] [animation-delay:3s]" />
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
            Press &amp; Media
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
              Writing about Xolace?
            </h2>
            <p className="max-w-xs pb-1 text-sm font-light text-muted-foreground/40 sm:text-right">
              We respond the same day. Assets and boilerplate available on
              request.
            </p>
          </div>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {contacts.map(
            (
              {
                label,
                description,
                email,
                accentBorder,
                accentBg,
                accentHover,
                iconBg,
                iconColor,
                dotColor,
              },
              i
            ) => (
              <motion.a
                key={email}
                href={`mailto:${email}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group relative flex flex-col gap-6 rounded-2xl border p-8 transition-all duration-500 ${accentBorder} ${accentBg} ${accentHover}`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${iconBg}`}
                  >
                    <Mail className={`size-5 ${iconColor}`} strokeWidth={1.5} />
                  </div>
                  <ArrowRight
                    className="mt-1 size-4 text-muted-foreground/20 transition-all duration-300 group-hover:translate-x-1 group-hover:text-muted-foreground/50"
                    strokeWidth={1.5}
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className={`size-1.5 rounded-full ${dotColor}`} />
                    <p className="font-mono text-[11px] tracking-[0.18em] text-muted-foreground/40 uppercase">
                      {label}
                    </p>
                  </div>
                  <p className="text-lg font-light text-foreground/85 transition-colors duration-300 group-hover:text-foreground">
                    {email}
                  </p>
                  <p className="text-sm font-light text-muted-foreground/45">
                    {description}
                  </p>
                </div>
              </motion.a>
            )
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-border/15" />
          <p className="text-center font-serif text-sm whitespace-nowrap text-muted-foreground/30 italic">
            Or visit the{" "}
            <Link
              href="/press"
              className="underline underline-offset-2 transition-colors duration-300 hover:text-muted-foreground/60"
            >
              press page
            </Link>{" "}
            for assets and boilerplate.
          </p>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-border/15" />
        </motion.div>
      </div>
    </section>
  )
}
