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
    <section className="section-spacing bg-muted overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-primary/[0.06] blur-[140px] -bottom-20 -right-10 animate-gentle-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-accent/[0.04] blur-[120px] top-0 left-1/3 animate-gentle-pulse [animation-delay:3s]" />
      </div>

      <div className="section-container relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-muted-foreground/30 mb-5">
            Press &amp; Media
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif italic font-light text-foreground text-4xl md:text-5xl leading-[1.1]">
              Writing about Xolace?
            </h2>
            <p className="text-sm text-muted-foreground/40 font-light pb-1 max-w-xs sm:text-right">
              We respond the same day. Assets and boilerplate available on request.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {contacts.map(({ label, description, email, accentBorder, accentBg, accentHover, iconBg, iconColor, dotColor }, i) => (
            <motion.a
              key={email}
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative flex flex-col gap-6 rounded-2xl border p-8 transition-all duration-500 ${accentBorder} ${accentBg} ${accentHover}`}
            >
              <div className="flex items-start justify-between">
                <div className={`size-11 rounded-xl border flex items-center justify-center shrink-0 ${iconBg}`}>
                  <Mail className={`size-5 ${iconColor}`} strokeWidth={1.5} />
                </div>
                <ArrowRight className="size-4 text-muted-foreground/20 group-hover:text-muted-foreground/50 group-hover:translate-x-1 transition-all duration-300 mt-1" strokeWidth={1.5} />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`size-1.5 rounded-full ${dotColor}`} />
                  <p className="text-[11px] font-mono uppercase tracking-[0.18em] text-muted-foreground/40">
                    {label}
                  </p>
                </div>
                <p className="text-lg font-light text-foreground/85 group-hover:text-foreground transition-colors duration-300">
                  {email}
                </p>
                <p className="text-sm text-muted-foreground/45 font-light">
                  {description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border/15" />
          <p className="font-serif italic text-sm text-muted-foreground/30 text-center whitespace-nowrap">
            Or visit the{" "}
            <Link href="/press" className="underline underline-offset-2 hover:text-muted-foreground/60 transition-colors duration-300">
              press page
            </Link>{" "}
            for assets and boilerplate.
          </p>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border/15" />
        </motion.div>

      </div>
    </section>
  )
}
