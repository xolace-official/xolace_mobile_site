"use client"

import { m as motion } from "motion/react"
import { Mail, Clock, ArrowRight } from "lucide-react"

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
        <div className="lg:grid lg:grid-cols-[1fr_420px] lg:items-start lg:gap-20 xl:gap-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 lg:mb-0"
          >
            <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-muted-foreground/30 uppercase">
              Get in touch
            </p>
            <h2 className="mb-6 font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
              Still have
              <br className="hidden sm:block" /> questions?
            </h2>
            <p className="mb-8 max-w-sm font-serif text-base leading-relaxed text-muted-foreground/60 md:text-lg">
              We respond to press inquiries the same day. Working to a deadline?
              Say so in the subject line.
            </p>
            <div className="flex items-center gap-2.5 text-sm font-light text-muted-foreground/35">
              <Clock className="size-4 shrink-0" strokeWidth={1.5} />
              <span>Same-day response, Monday–Friday</span>
            </div>
          </motion.div>

          <div className="flex flex-col gap-4">
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
                  className={`group relative flex flex-col gap-5 rounded-2xl border p-8 transition-all duration-500 ${accentBorder} ${accentBg} ${accentHover}`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${iconBg}`}
                    >
                      <Mail
                        className={`size-5 ${iconColor}`}
                        strokeWidth={1.5}
                      />
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
        </div>
      </div>
    </section>
  )
}
