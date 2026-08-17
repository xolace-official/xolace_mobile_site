"use client"

import Link from "next/link"
import { m as motion } from "motion/react"
import { Mail, FileText, Shield, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type QuickLink = {
  Icon: LucideIcon
  label: string
  description: string
  href: string
  accentBorder: string
  accentBg: string
  accentHover: string
  iconBg: string
  iconColor: string
  dotColor: string
}

const quickLinks: QuickLink[] = [
  {
    Icon: Shield,
    label: "Privacy Policy",
    description: "How we handle your data and protect your privacy.",
    href: "/privacy",
    accentBorder: "border-primary/20",
    accentBg: "bg-primary/[0.07]",
    accentHover: "hover:border-primary/40",
    iconBg: "bg-primary/[0.12] border-primary/20",
    iconColor: "text-primary/80",
    dotColor: "bg-primary/50",
  },
  {
    Icon: FileText,
    label: "Terms of Service",
    description: "The agreement that governs your use of Xolace.",
    href: "/terms",
    accentBorder: "border-accent/20",
    accentBg: "bg-accent/[0.06]",
    accentHover: "hover:border-accent/40",
    iconBg: "bg-accent/[0.12] border-accent/20",
    iconColor: "text-accent/80",
    dotColor: "bg-accent/50",
  },
  {
    Icon: Mail,
    label: "Email Us",
    description: "Send us a message — we read everything.",
    href: "mailto:hello@xolaceinc.com",
    accentBorder: "border-chart-2/20",
    accentBg: "bg-chart-2/[0.06]",
    accentHover: "hover:border-chart-2/40",
    iconBg: "bg-chart-2/[0.12] border-chart-2/20",
    iconColor: "text-chart-2/80",
    dotColor: "bg-chart-2/50",
  },
]

export function SupportContact() {
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
            Contact &amp; resources
          </p>
          <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
            Still need help?
          </h2>
        </motion.div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {quickLinks.map(
            (
              {
                Icon,
                label,
                description,
                href,
                accentBorder,
                accentBg,
                accentHover,
                iconBg,
                iconColor,
                dotColor,
              },
              i
            ) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link
                  href={href}
                  className={`group relative flex flex-col gap-5 rounded-2xl border p-7 transition-all duration-500 ${accentBorder} ${accentBg} ${accentHover}`}
                >
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${iconBg}`}
                    >
                      <Icon
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
                    <p className="text-sm font-light text-muted-foreground/60">
                      {description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* Crisis reminder */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-r-lg border-l-4 border-destructive bg-destructive/5 px-5 py-5"
        >
          <p className="mb-2 font-mono text-[10px] tracking-[0.12em] text-destructive uppercase">
            If you are in crisis
          </p>
          <p className="font-serif text-sm leading-relaxed text-foreground/80">
            Xolace is not a crisis service. If you or someone you know is in
            immediate danger, please contact your local emergency services. In
            the US, you can call or text{" "}
            <a
              href="tel:988"
              className="font-medium text-foreground underline underline-offset-4"
            >
              988
            </a>{" "}
            (Suicide &amp; Crisis Lifeline) at any time.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
