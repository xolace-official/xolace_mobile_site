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
        <TikTokLight className="size-[16px] block dark:hidden" />
        <TikTokDark className="size-[16px] hidden dark:block" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xolaceinc?utm_source=qr&igsh=anB2bTA4ZTJiM2tu",
    icon: <Instagram className="size-[16px]" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xolace-inc/",
    icon: <LinkedIn className="size-[16px]" />,
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb68RgXGpLHPmY1pL73s",
    icon: <WhatsApp className="size-[16px]" />,
  },
]

const contactLinks = [
  { label: "General enquiries", href: "mailto:hello@xolaceinc.com" },
  { label: "Privacy & data", href: "mailto:privacy@xolaceinc.com" },
  { label: "Press", href: "mailto:press@xolaceinc.com" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Support", href: "/support" },
]

export function Footer() {
  return (
    <footer className="bg-xo-surface-lowest w-full border-t border-border">

      {/* Top row — brand left, contact right */}
      <div className="px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto pt-16 pb-14">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">

          {/* Left — brand + nav + socials */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Image
                src="/images/use-x-remove-bg.png"
                alt="Xolace"
                width={28}
                height={28}
                className="size-7 object-contain"
              />
              <span className="text-sm font-medium tracking-tight">Xolace</span>
            </div>

            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/manifesto"
                className="text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Manifesto
              </Link>
              <Link
                href="/support"
                className="text-[11px] tracking-[0.08em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                Support
              </Link>
            </nav>

            <div className="flex items-center gap-1">
              {socials.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex items-center justify-center p-2 rounded-lg opacity-50 hover:opacity-100 hover:bg-muted transition-all duration-300"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Right — get in touch */}
          <div className="space-y-4">
            <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground">
              Get in touch
            </p>
            <div className="space-y-2">
              {contactLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link.href.replace("mailto:", "")}
                  </Link>
                  <p className="text-[10px] font-mono uppercase tracking-[0.08em] text-muted-foreground/60 mt-0.5">
                    {link.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Acknowledgment — crisis notice */}
      <div className="border-t border-border px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto py-8">
        <div className="max-w-2xl">
          <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-3">
            Acknowledgment
          </p>
          <p className="font-serif text-[13px] text-muted-foreground leading-relaxed">
            Xolace is not designed to be used in crisis. If you are experiencing a mental health
            emergency or feel unsafe, please contact your local emergency services or reach out to a
            crisis line. In the US, you can call or text{" "}
            <a
              href="tel:988"
              className="text-foreground underline underline-offset-4 hover:text-primary transition-colors duration-300"
            >
              988
            </a>{" "}
            at any time.
          </p>
        </div>
      </div>

      {/* Bottom bar — copyright + legal links */}
      <div className="border-t border-border px-8 md:px-12 lg:px-16 max-w-screen-2xl mx-auto py-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-[11px] tracking-[0.05em] text-muted-foreground">
            &copy; 2026 Xolace. Built by people who needed this to exist.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[11px] tracking-[0.05em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  )
}
