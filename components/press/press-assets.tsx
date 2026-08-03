"use client"

import Image from "next/image"
import { m as motion } from "motion/react"
import { Download, ImageIcon, Smartphone, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { founders } from "@/lib/team"

type AssetFile = { name: string; href: string }

type Asset = {
  label: string
  description: string
  Icon: LucideIcon
  files: AssetFile[]
  fit: "contain" | "cover"
  accentBorder: string
  accentBg: string
  iconBg: string
  iconColor: string
  dotColor: string
}

const assets: Asset[] = [
  {
    label: "Logo",
    description: "Wordmark and icon mark, on a transparent background.",
    Icon: ImageIcon,
    fit: "contain",
    files: [
      { name: "Wordmark (PNG)", href: "/logo/main-logo.png" },
      { name: "Icon mark (PNG)", href: "/logo/favicon.png" },
    ],
    accentBorder: "border-primary/20",
    accentBg: "bg-primary/[0.05]",
    iconBg: "bg-primary/[0.12] border-primary/20",
    iconColor: "text-primary/80",
    dotColor: "bg-primary/50",
  },
  {
    label: "App Screens",
    description: "Real screens from the three-step Mirror flow.",
    Icon: Smartphone,
    fit: "cover",
    files: [
      { name: "Say what's true (JPG)", href: "/app-images/say-whats-true.jpeg" },
      { name: "See it clearly (JPG)", href: "/app-images/see-it-clearly.jpeg" },
      {
        name: "Choose what's next (JPG)",
        href: "/app-images/choose-whats-next.jpeg",
      },
    ],
    accentBorder: "border-accent/20",
    accentBg: "bg-accent/[0.04]",
    iconBg: "bg-accent/[0.12] border-accent/20",
    iconColor: "text-accent/80",
    dotColor: "bg-accent/50",
  },
  {
    label: "Founder Photos",
    description: "Headshots for on-record co-founders.",
    Icon: Users,
    fit: "cover",
    files: founders
      .filter((founder) => founder.image)
      .map((founder) => ({
        name: `${founder.name} (JPG)`,
        href: founder.image as string,
      })),
    accentBorder: "border-chart-2/20",
    accentBg: "bg-chart-2/[0.04]",
    iconBg: "bg-chart-2/[0.12] border-chart-2/20",
    iconColor: "text-chart-2/80",
    dotColor: "bg-chart-2/50",
  },
]

function AssetThumbnail({
  file,
  fit,
  iconColor,
}: {
  file: AssetFile
  fit: "contain" | "cover"
  iconColor: string
}) {
  return (
    <a
      href={file.href}
      download
      className="group/thumb block space-y-2"
      aria-label={`Download ${file.name}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-xl border border-border/15 bg-xo-surface-low">
        <Image
          src={file.href}
          alt=""
          fill
          className={
            fit === "contain"
              ? "object-contain p-4"
              : "object-cover transition-transform duration-500 group-hover/thumb:scale-105"
          }
          sizes="(min-width: 768px) 33vw, 50vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-background/0 opacity-0 backdrop-blur-[1px] transition-all duration-300 group-hover/thumb:bg-background/40 group-hover/thumb:opacity-100">
          <div className="flex size-9 items-center justify-center rounded-full border border-border/30 bg-background/80">
            <Download className={`size-4 ${iconColor}`} strokeWidth={1.5} />
          </div>
        </div>
      </div>
      <p className="truncate text-xs text-muted-foreground/55 transition-colors duration-200 group-hover/thumb:text-foreground/80">
        {file.name}
      </p>
    </a>
  )
}

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
            <h2 className="font-serif text-5xl leading-[1.1] font-semibold text-foreground md:text-6xl lg:text-[4.25rem]">
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
                fit,
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

                <div className="grid grid-cols-2 gap-3">
                  {files.map((file) => (
                    <AssetThumbnail
                      key={file.href}
                      file={file}
                      fit={fit}
                      iconColor={iconColor}
                    />
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
