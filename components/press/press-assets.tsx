"use client"

import { m as motion } from "motion/react"
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
      {
        name: "Logo — Light (PNG)",
        href: "/press/assets/xolace-logo-light.png",
      },
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
      {
        name: "Mirror screen (PNG)",
        href: "/press/assets/screenshot-mirror.png",
      },
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
      {
        name: "Nathaniel Edem Adama (JPG)",
        href: "/press/assets/headshot-nathaniel.jpg",
      },
      {
        name: "Andrew Nana Beniako (JPG)",
        href: "/press/assets/headshot-andrew.jpg",
      },
      {
        name: "Emmanuel Acquah (JPG)",
        href: "/press/assets/headshot-emmanuel-acquah.jpg",
      },
      {
        name: "Emmanuel Somuah (JPG)",
        href: "/press/assets/headshot-emmanuel-somuah.jpg",
      },
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
    <section className="section-spacing relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-gentle-pulse absolute -top-20 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[150px]" />
        <div className="animate-gentle-pulse absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-primary/[0.04] blur-[120px] [animation-delay:2.5s]" />
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
            Brand assets
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-4xl leading-[1.1] font-light text-foreground italic md:text-5xl">
              Download everything.
            </h2>
            <p className="max-w-xs pb-1 text-sm font-light text-muted-foreground/40 sm:text-right">
              All assets are cleared for editorial use. Need a different format?
              Email us.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {assets.map(
            (
              {
                label,
                description,
                Icon,
                files,
                accentBorder,
                accentBg,
                iconBg,
                iconColor,
                dotColor,
              },
              i
            ) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`space-y-6 rounded-2xl border p-7 ${accentBorder} ${accentBg}`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl border ${iconBg}`}
                  >
                    <Icon className={`size-5 ${iconColor}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <span className={`size-1.5 rounded-full ${dotColor}`} />
                      <p className="font-mono text-[10px] tracking-[0.16em] text-muted-foreground/40 uppercase">
                        {label}
                      </p>
                    </div>
                    <p className="text-xs leading-snug font-light text-muted-foreground/50">
                      {description}
                    </p>
                  </div>
                </div>

                <div className="h-px bg-border/15" />

                <div className="space-y-1">
                  {files.map(({ name, href }) => (
                    <a
                      key={name}
                      href={href}
                      download
                      className="group flex items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-background/50"
                    >
                      <span className="truncate text-xs text-muted-foreground/55 transition-colors duration-200 group-hover:text-foreground/80">
                        {name}
                      </span>
                      <Download
                        className={`size-3.5 text-muted-foreground/20 group-hover:${iconColor} shrink-0 transition-colors duration-200`}
                        strokeWidth={1.5}
                      />
                    </a>
                  ))}
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  )
}
