import Link from "next/link"
import { MailIcon, FileTextIcon, ShieldIcon } from "lucide-react"

const quickLinks = [
  {
    icon: ShieldIcon,
    label: "Privacy Policy",
    description: "How we handle your data and protect your privacy.",
    href: "/privacy",
  },
  {
    icon: FileTextIcon,
    label: "Terms of Service",
    description: "The agreement that governs your use of Xolace.",
    href: "/terms",
  },
  {
    icon: MailIcon,
    label: "Email Us",
    description: "Send us a message — we read everything.",
    href: "mailto:hello@xolace.app",
  },
]

export function SupportContact() {
  return (
    <section>
      <div className="mb-10">
        <p className="text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground mb-3">
          Contact & Resources
        </p>
        <h2 className="text-2xl md:text-3xl font-light">Still need help?</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
        {quickLinks.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col gap-3 p-6 border border-border rounded-xl bg-card hover:border-primary/40 hover:bg-xo-surface-lowest transition-all duration-300"
            >
              <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/15 transition-colors duration-300">
                <Icon className="size-4 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium mb-1">{item.label}</p>
                <p className="text-xs font-serif text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Crisis reminder */}
      <div className="border-l-4 border-destructive bg-destructive/5 rounded-r-lg px-5 py-5">
        <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-destructive mb-2">
          If you are in crisis
        </p>
        <p className="font-serif text-[14px] leading-relaxed text-foreground/80">
          Xolace is not a crisis service. If you or someone you know is in immediate danger, please
          contact your local emergency services. In the US, you can call or text{" "}
          <a href="tel:988" className="text-foreground font-medium underline underline-offset-4">
            988
          </a>{" "}
          (Suicide & Crisis Lifeline) at any time.
        </p>
      </div>
    </section>
  )
}
