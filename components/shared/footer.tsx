import Image from "next/image"
import Link from "next/link"
import { Instagram } from "@/components/socials/instagram-icon"
import { LinkedIn } from "@/components/socials/linkedin-icon"
import { WhatsApp } from "@/components/socials/whatsapp-icon"
import { TikTokDark } from "@/components/socials/tiktok-icon-dark"
import { TikTokLight } from "@/components/socials/tiktok-icon-light"

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@talk.with.xolace?_r=1&_t=ZS-93PtIXpzJAr",
    icon: (
      <>
        <TikTokLight className="size-[15px] block dark:hidden" />
        <TikTokDark className="size-[15px] hidden dark:block" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xolaceinc?utm_source=qr&igsh=anB2bTA4ZTJiM2tu",
    icon: <Instagram className="size-[15px]" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xolace-inc/",
    icon: <LinkedIn className="size-[15px]" />,
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb68RgXGpLHPmY1pL73s",
    icon: <WhatsApp className="size-[15px]" />,
  },
]

const links = {
  product: [
    { label: "Manifesto", href: "/manifesto" },
    { label: "Ambassadors", href: "https://ambassador.xolaceinc.com", external: true },
    { label: "Support", href: "/support" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
  contact: [
    { label: "hello@xolaceinc.com", href: "mailto:hello@xolaceinc.com" },
    { label: "press@xolaceinc.com", href: "mailto:press@xolaceinc.com" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-xo-surface-lowest border-t border-border/30">

      {/* Main content */}
      <div className="px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:justify-between gap-12 md:gap-20">

          {/* Brand */}
          <div className="space-y-6 md:max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 group w-fit">
              <Image
                src="/images/use-x-remove-bg.png"
                alt="Xolace"
                width={26}
                height={26}
                className="size-6 object-contain"
              />
              <span className="font-serif italic text-base text-foreground/70">Xolace</span>
            </Link>
            <p className="text-sm text-muted-foreground/70 leading-relaxed font-light">
              A quiet place to be human. Not a feed. Not a clinic.
              The space before, between, and outside therapy.
            </p>
            <div className="flex items-center gap-1">
              {socials.map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center p-2 rounded-lg opacity-40 hover:opacity-80 hover:bg-muted transition-all duration-300"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                Product
              </p>
              {links.product.map((l) => (
                <div key={l.label}>
                  <Link
                    href={l.href}
                    target={(l as { external?: boolean }).external ? "_blank" : undefined}
                    rel={(l as { external?: boolean }).external ? "noopener noreferrer" : undefined}
                    className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-300 font-light"
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                Legal
              </p>
              {links.legal.map((l) => (
                <div key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-300 font-light"
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>

            <div className="space-y-3">
              <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground/40">
                Contact
              </p>
              {links.contact.map((l) => (
                <div key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-muted-foreground/60 hover:text-foreground transition-colors duration-300 font-light"
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Crisis notice — always present for a mental-health-adjacent product */}
      <div className="px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto pb-8">
        <p className="font-serif text-[12px] text-muted-foreground/40 leading-relaxed italic max-w-2xl">
          Xolace is not designed for crisis. If you feel unsafe, contact your local emergency services
          or call/text{" "}
          <a href="tel:988" className="underline underline-offset-2 hover:text-muted-foreground/70 transition-colors duration-300">
            988
          </a>{" "}
          (US) at any time.
        </p>
      </div>

      {/* Copyright */}
      <div className="border-t border-border/20 px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto py-5">
        <p className="text-[11px] text-muted-foreground/35 tracking-[0.04em]">
          &copy; 2026 Xolace Inc. — Built by people who needed this to exist.
        </p>
      </div>

    </footer>
  )
}
