"use client"

import { motion } from "motion/react"
import { Mail } from "lucide-react"

const contacts = [
  {
    label: "Press inquiries",
    email: "press@xolaceinc.com",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    label: "General",
    email: "hello@xolaceinc.com",
    color: "text-accent",
    bg: "bg-accent/10",
  },
]

export function PressContact() {
  return (
    <section className="section-spacing border-t border-border/10">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="section-label mb-5">Press & Media</span>
          <h2 className="text-3xl md:text-4xl text-foreground font-light mb-3 leading-snug">
            Writing about Xolace?
          </h2>
          <p className="font-serif text-muted-foreground/65 leading-relaxed">
            We&apos;ll respond the same day. Assets and boilerplate copy available on request - or visit the{" "}
            <a href="/press" className="underline underline-offset-4 hover:text-foreground transition-colors duration-200">
              press page
            </a>
            .
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-4">
          {contacts.map(({ label, email, color, bg }, i) => (
            <motion.a
              key={email}
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="group flex items-center gap-4 p-5 rounded-xl bg-xo-surface-low ring-1 ring-border/20 hover:ring-primary/25 transition-all duration-300"
            >
              <span className={`flex items-center justify-center size-10 rounded-lg ${bg} shrink-0`}>
                <Mail className={`size-4 ${color}`} strokeWidth={1.5} />
              </span>
              <div>
                <p className="section-label mb-0.5">{label}</p>
                <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors duration-300">
                  {email}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
