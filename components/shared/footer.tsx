import Link from "next/link"
import { XolaceLogo } from "@/components/shared/xolace-logo"
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaSnapchatGhost,
} from "react-icons/fa"
import { FaTiktok } from "react-icons/fa6"

type NavLink = { label: string; href: string; external?: boolean }

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xolace-inc/",
    icon: <FaLinkedinIn size={20} />,
    color: "#0A66C2",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xolaceinc?utm_source=qr&igsh=anB2bTA4ZTJiM2tu",
    icon: <FaInstagram size={20} />,
    color: "#E1306C",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@talk.with.xolace?_r=1&_t=ZS-93PtIXpzJAr",
    icon: <FaTiktok size={20} />,
    color: "currentColor",
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@xolace",
    icon: <FaYoutube size={20} />,
    color: "#FF0000",
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb68RgXGpLHPmY1pL73s",
    icon: <FaWhatsapp size={20} />,
    color: "#25D366",
  },
  {
    label: "Snapchat",
    href: "https://snapchat.com/add/xolace",
    icon: <FaSnapchatGhost size={20} />,
    color: "#FFFC00",
  },
]

const links: Record<"explore" | "legal" | "contact", NavLink[]> = {
  explore: [
    { label: "About", href: "/about" },
    { label: "Manifesto", href: "/manifesto" },
    {
      label: "Ambassadors",
      href: "https://ambassador.xolaceinc.com",
      external: true,
    },
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
      <div className="relative mx-auto flex max-w-screen-2xl flex-col gap-16 px-4 pt-16 pb-4 md:px-12 md:pt-20 md:pb-8 lg:px-16">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-16">
          {/* Brand column */}
          <div className="shrink-0 space-y-6 md:max-w-xs">
            <Link href="/" className="group flex w-fit">
              <XolaceLogo
                size="sm"
                className="opacity-70 transition-opacity duration-300 group-hover:opacity-100"
              />
            </Link>

            <p className="text-sm leading-relaxed font-light text-muted-foreground">
              A quiet place to be human. Not a feed. Not a clinic. The space
              before, between, and outside therapy.
            </p>

            {/* Social icons with brand colours */}
            <div className="flex flex-wrap items-center gap-1">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  style={{ color: s.color }}
                  className="flex size-11 items-center justify-center rounded-lg border bg-secondary transition-colors duration-300 hover:bg-xo-surface-bright"
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

        {/* Bottom bar */}
        <div className="flex flex-col items-start justify-between gap-3 border-t border-border/15 pb-10 sm:flex-row sm:items-center md:pb-0">
          <p className="max-w-xl font-serif text-[12px] leading-relaxed text-muted-foreground/55 italic">
            Xolace is not designed for crisis. If you feel unsafe, contact your
            local emergency services or call/text{" "}
            <a
              href="tel:988"
              className="underline underline-offset-2 transition-colors duration-300 hover:text-muted-foreground"
            >
              988
            </a>{" "}
            (US) at any time.
          </p>
          <p className="shrink-0 text-[11px] tracking-[0.04em] text-muted-foreground/55">
            &copy; 2026 Xolace Inc.
          </p>
        </div>
      </div>
    </footer>
  )
}
