import Image from "next/image"
import Link from "next/link"
import { Instagram } from "@/components/socials/instagram-icon"
import { LinkedIn } from "@/components/socials/linkedin-icon"
import { WhatsApp } from "@/components/socials/whatsapp-icon"
import { TikTokDark } from "@/components/socials/tiktok-icon-dark"
import { TikTokLight } from "@/components/socials/tiktok-icon-light"
import { YouTube } from "@/components/socials/youtube-icon"
import { Snapchat } from "@/components/socials/snapchat-icon"

type NavLink = { label: string; href: string; external?: boolean }

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xolace-inc/",
    icon: <LinkedIn className="size-4" />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xolaceinc?utm_source=qr&igsh=anB2bTA4ZTJiM2tu",
    icon: <Instagram className="size-4" />,
  },
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
    label: "YouTube",
    href: "https://youtube.com/@xolace",
    icon: <YouTube className="size-4" />,
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb68RgXGpLHPmY1pL73s",
    icon: <WhatsApp className="size-4" />,
  },
  {
    label: "Snapchat",
    href: "https://snapchat.com/add/xolace",
    icon: <Snapchat className="size-4" />,
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
    { label: "support@xolace.com", href: "mailto:support@xolace.com" },
  ],
}

const sections = [
  { key: "explore" as const, label: "Explore" },
  { key: "legal" as const, label: "Legal" },
  { key: "contact" as const, label: "Contact" },
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/20 bg-xo-surface-lowest">
      {/* Main columns */}
      <div className="relative mx-auto flex max-w-screen-2xl flex-col px-8 pt-16 pb-4 md:px-12 md:pt-20 md:pb-8 lg:px-16 gap-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-16">
          {/* Brand column */}
          <div className="shrink-0 space-y-6 md:max-w-xs">
            <Link href="/" className="group flex w-fit items-center gap-2.5">
              <Image
                src="/images/use-x-remove-bg.png"
                alt="Xolace"
                width={26}
                height={26}
                className="size-6 object-contain"
              />
              <span className="font-serif text-base italic">Xolace</span>
            </Link>

            <p className="text-sm leading-relaxed font-light">
              A quiet place to be human. Not a feed. Not a clinic. The space
              before, between, and outside therapy.
            </p>

            {/* Socials */}
            <div className="flex flex-wrap items-center gap-1">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex size-12 items-center justify-center rounded-lg transition-all duration-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 md:gap-12">
            {sections.map(({ key, label }) => (
              <div key={key} className="space-y-4">
                <p className="section-label">{label}</p>
                <div className="space-y-2.5">
                  {links[key].map((l) => (
                    <div key={l.label}>
                      <Link
                        href={l.href}
                        target={l.external ? "_blank" : undefined}
                        rel={l.external ? "noopener noreferrer" : undefined}
                        className="text-sm font-light text-muted-foreground/80 transition-colors duration-300 hover:text-foreground"
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

        {/* Crisis notice */}
        <div className="flex flex-row justify-between">
          <p className="font-serif text-[12px]">
            Xolace is not designed for crisis. If you feel unsafe, contact your
            local emergency services or call/text{" "}
            <a
              href="tel:988"
              className="underline underline-offset-2 transition-colors duration-300 hover:text-muted-foreground/70"
            >
              988
            </a>{" "}
            (US) at any time.
          </p>
          <p className="text-[11px] tracking-[0.04em] text-muted-foreground/55">
            &copy; 2026 Xolace Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
