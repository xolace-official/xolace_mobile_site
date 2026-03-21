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
        <TikTokLight className="size-[18px] block dark:hidden" />
        <TikTokDark className="size-[18px] hidden dark:block" />
      </>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/xolaceinc?utm_source=qr&igsh=anB2bTA4ZTJiM2tu",
    icon: <Instagram className="size-[18px]" />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/xolace-inc/",
    icon: <LinkedIn className="size-[18px]" />,
  },
  {
    label: "WhatsApp",
    href: "https://whatsapp.com/channel/0029Vb68RgXGpLHPmY1pL73s",
    icon: <WhatsApp className="size-[18px]" />,
  },
]

export function Footer() {
  return (
    <footer className="bg-xo-surface-lowest w-full pt-20 pb-12 border-t border-border">
      <div className="flex flex-col items-center text-center space-y-6 px-8 max-w-screen-2xl mx-auto">
        <Image
          src="/images/use-x-remove-bg.png"
          alt="Xolace mascot"
          width={48}
          height={48}
          className="size-12 object-contain mb-4"
        />
        <div className="flex flex-wrap justify-center gap-8 mb-4">
          <Link
            href="#"
            className="text-xs tracking-[0.05rem] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Manifesto
          </Link>
          <Link
            href="#"
            className="text-xs tracking-[0.05rem] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            Privacy Policy
          </Link>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-5">
          {socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center justify-center p-2.5 rounded-full opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <p className="text-xs tracking-[0.05rem] uppercase text-muted-foreground">
          &copy; 2026 Xolace. Built by people who needed this to exist.
        </p>
      </div>
    </footer>
  )
}
