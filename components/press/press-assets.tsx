"use client"

import { motion } from "motion/react"
import { Download, ImageIcon, Smartphone, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type Asset = {
  label: string
  description: string
  Icon: LucideIcon
  files: { name: string; href: string }[]
  accentBorder: string
  accentBg: string
  iconBg: string
  iconColor: string
  dotColor: string
}

const assets: Asset[] = [
  {
    label: "Logo",
    description: "Wordmark and icon — light and dark variants.",
    Icon: ImageIcon,
    files: [
      { name: "Logo — Light (PNG)", href: "/press/assets/xolace-logo-light.png" },
      { name: "Logo — Dark (PNG)", href: "/press/assets/xolace-logo-dark.png" },
      { name: "Icon only (PNG)", href: "/press/assets/xolace-icon.png" },
    ],
    accentBorder: "border-primary/20",
    accentBg: "bg-primary/[0.05]",
    iconBg: "bg-primary/[0.12] border-primary/20",
    iconColor: "text-primary/80",
    dotColor: "bg-primary/50",
  },
  {
    label: "App Screenshots",
    description: "Key screens from the iOS and Android app.",
    Icon: Smartphone,
    files: [
      { name: "Mirror screen (PNG)", href: "/press/assets/screenshot-mirror.png" },
      { name: "Vent screen (PNG)", href: "/press/assets/screenshot-vent.png" },
      { name: "Home screen (PNG)", href: "/press/assets/screenshot-home.png" },
    ],
    accentBorder: "border-accent/20",
    accentBg: "bg-accent/[0.04]",
    iconBg: "bg-accent/[0.12] border-accent/20",
    iconColor: "text-accent/80",
    dotColor: "bg-accent/50",
  },
  {
    label: "Founder Photos",
    description: "High-resolution headshots for all four co-founders.",
    Icon: Users,
    files: [
      { name: "Nathaniel Edem Adama (JPG)", href: "/press/assets/headshot-nathaniel.jpg" },
      { name: "Andrew Nana Beniako (JPG)", href: "/press/assets/headshot-andrew.jpg" },
      { name: "Emmanuel Acquah (JPG)", href: "/press/assets/headshot-emmanuel-acquah.jpg" },
      { name: "Emmanuel Somuah (JPG)", href: "/press/assets/headshot-emmanuel-somuah.jpg" },
    ],
    accentBorder: "border-chart-2/20",
    accentBg: "bg-chart-2/[0.04]",
    iconBg: "bg-chart-2/[0.12] border-chart-2/20",
    iconColor: "text-chart-2/80",
    dotColor: "bg-chart-2/50",
  },
]

export function PressAssets() {
  return (
    <section className="section-spacing overflow-hidden relative">

      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/[0.05] blur-[150px] -top-20 left-1/2 -translate-x-1/2 animate-gentle-pulse" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-primary/[0.04] blur-[120px] bottom-0 right-0 animate-gentle-pulse [animation-delay:2.5s]" />
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
            Brand assets
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <h2 className="font-serif italic font-light text-foreground text-4xl md:text-5xl leading-[1.1]">
              Download everything.
            </h2>
            <p className="text-sm text-muted-foreground/40 font-light pb-1 max-w-xs sm:text-right">
              All assets are cleared for editorial use. Need a different format? Email us.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {assets.map(({ label, description, Icon, files, accentBorder, accentBg, iconBg, iconColor, dotColor }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-2xl border p-7 space-y-6 ${accentBorder} ${accentBg}`}
            >
              <div className="flex items-start gap-4">
                <div className={`size-11 rounded-xl border flex items-center justify-center shrink-0 ${iconBg}`}>
                  <Icon className={`size-5 ${iconColor}`} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`size-1.5 rounded-full ${dotColor}`} />
                    <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-muted-foreground/40">
                      {label}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground/50 font-light leading-snug">{description}</p>
                </div>
              </div>

              <div className="h-px bg-border/15" />

              <div className="space-y-1">
                {files.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    download
                    className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-xl hover:bg-background/50 transition-colors duration-200 group"
                  >
                    <span className="text-xs text-muted-foreground/55 group-hover:text-foreground/80 transition-colors duration-200 truncate">
                      {name}
                    </span>
                    <Download className={`size-3.5 text-muted-foreground/20 group-hover:${iconColor} shrink-0 transition-colors duration-200`} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
