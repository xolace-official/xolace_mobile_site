"use client"

import { motion } from "motion/react"
import { Download, ImageIcon, Smartphone, Users } from "lucide-react"

type Asset = {
  label: string
  description: string
  Icon: React.ElementType
  files: { name: string; href: string }[]
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
  },
]

export function PressAssets() {
  return (
    <section className="section-spacing border-t border-border/10">
      <div className="section-container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10"
        >
          <span className="section-label mb-5">Brand Assets</span>
          <h2 className="text-3xl md:text-4xl text-foreground font-light mb-3">
            Download everything.
          </h2>
          <p className="font-serif text-muted-foreground/60 leading-relaxed max-w-lg">
            All assets are cleared for editorial use. Need a different format or size? Email us.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {assets.map(({ label, description, Icon, files }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl bg-xo-surface-low ring-1 ring-border/15 p-6 space-y-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex items-center justify-center size-9 rounded-lg bg-primary/10 shrink-0">
                  <Icon className="size-4 text-primary" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground/85 mb-0.5">{label}</p>
                  <p className="text-xs text-muted-foreground/50 font-light leading-snug">{description}</p>
                </div>
              </div>

              <div className="space-y-1">
                {files.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    download
                    className="flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg hover:bg-xo-surface-bright transition-colors duration-200 group"
                  >
                    <span className="text-xs text-muted-foreground/55 group-hover:text-foreground/80 transition-colors duration-200 truncate">
                      {name}
                    </span>
                    <Download className="size-3 text-muted-foreground/25 group-hover:text-primary shrink-0 transition-colors duration-200" />
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
