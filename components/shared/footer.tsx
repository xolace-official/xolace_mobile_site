import Image from "next/image"
import Link from "next/link"
import { Instagram } from "@/components/socials/instagram-icon"
import { LinkedIn } from "@/components/socials/linkedin-icon"
import { WhatsApp } from "@/components/socials/whatsapp-icon"
import { TikTokDark } from "@/components/socials/tiktok-icon-dark"
import { TikTokLight } from "@/components/socials/tiktok-icon-light"

type NavLink = { label: string; href: string; external?: boolean }

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@talk.with.xolace?_r=1&_t=ZS-93PtIXpzJAr",
    icon: (
      <>
        <TikTokLight className="size-4 block dark:hidden" />
        <TikTokDark className="size-4 hidden dark:block" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xolaceinc?utm_source=qr&igsh=anB2bTA4ZTJiM2tu",
    icon: <Instagram className="size-4" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xolace-inc/",
    icon: <LinkedIn className="size-4" />,
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb68RgXGpLHPmY1pL73s",
    icon: <WhatsApp className="size-4" />,
  },
]

const links: Record<"explore" | "legal" | "contact", NavLink[]> = {
  explore: [
    { label: "About", href: "/about" },
    { label: "Manifesto", href: "/manifesto" },
    { label: "FAQ", href: "/faq" },
    { label: "Ambassadors", href: "https://ambassador.xolaceinc.com", external: true },
    { label: "Press", href: "/press" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Support", href: "/support" },
  ],
  contact: [
    { label: "hello@xolaceinc.com", href: "mailto:hello@xolaceinc.com" },
    { label: "press@xolaceinc.com", href: "mailto:press@xolaceinc.com" },
  ],
}

const sections = [
  { key: "explore" as const, label: "Explore" },
  { key: "legal" as const, label: "Legal" },
  { key: "contact" as const, label: "Contact" },
]

export function Footer() {
  return (
    <footer className="relative bg-xo-surface-lowest overflow-hidden">

      {/* Gradient top border */}
      <div className="h-px w-full cta-gradient opacity-40" />

      {/* Quiet download CTA */}
      <div className="relative px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto py-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-border/10">
        <p className="font-serif italic text-sm text-muted-foreground/55 tracking-wide">
          Free to download. Ready when you are.
        </p>
        <div className="flex items-center gap-4 shrink-0">
          <a
            href="https://apps.apple.com/gh/app/xolace/id6761601429"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download Xolace on the App Store"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <Image src="/images/app-store-mobile.png" alt="Download on the App Store" width={120} height={40} className="h-9 w-auto rounded-md dark:hidden" />
            <Image src="/images/app-store-mobile-dark.png" alt="Download on the App Store" width={120} height={40} className="h-9 w-auto rounded-md hidden dark:block" />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.xolaceincorg.xolace"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Get Xolace on Google Play"
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <Image src="/images/play-store-light.png" alt="Get it on Google Play" width={120} height={40} className="h-9 w-auto dark:hidden" />
            <Image src="/images/play-store-dark.png" alt="Get it on Google Play" width={120} height={40} className="h-9 w-auto hidden dark:block" />
          </a>
        </div>
      </div>

      {/* Decorative watermark */}
      <span
        aria-hidden
        className="pointer-events-none select-none absolute right-2 top-24 font-serif italic leading-none text-foreground/[0.025] text-[7rem] md:text-[11rem]"
      >
        Xolace
      </span>

      {/* Main columns */}
      <div className="relative px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto py-14 md:py-18">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-20">

          {/* Brand column */}
          <div className="space-y-6 md:max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <Image
                src="/images/use-x-remove-bg.png"
                alt="Xolace"
                width={26}
                height={26}
                className="size-6 object-contain"
              />
              <span className="font-serif italic text-base text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                Xolace
              </span>
            </Link>

            <p className="text-sm text-muted-foreground/65 leading-relaxed font-light">
              A quiet place to be human. Not a feed. Not a clinic.
              The space before, between, and outside therapy.
            </p>

            <div className="flex items-center gap-0.5">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center size-9 rounded-xl opacity-35 hover:opacity-90 hover:bg-muted transition-all duration-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
            {sections.map(({ key, label }) => (
              <div key={key} className="space-y-4">
                <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/35">
                  {label}
                </p>
                <div className="space-y-2.5">
                  {links[key].map((l) => (
                    <div key={l.label}>
                      <Link
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-muted-foreground/55 hover:text-foreground transition-colors duration-300 font-light"
                      >
                        {l.label}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Crisis notice */}
      <div className="relative px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto pb-8">
        <p className="font-serif text-[12px] text-muted-foreground/40 leading-relaxed italic max-w-2xl">
          Xolace is not designed for crisis. If you feel unsafe, contact your local emergency services
          or call/text{" "}
          <a
            href="tel:988"
            className="underline underline-offset-2 hover:text-muted-foreground/70 transition-colors duration-300"
          >
            988
          </a>{" "}
          (US) at any time.
        </p>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-border/15 px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-[11px] text-muted-foreground/35 tracking-[0.04em]">
          &copy; 2026 Xolace Inc. — Built by people who needed this to exist.
        </p>
        <p className="text-[10px] font-mono text-muted-foreground/25 tracking-[0.06em] uppercase">
          Emotional processing infrastructure
        </p>
      </div>

    </footer>
  )
}
