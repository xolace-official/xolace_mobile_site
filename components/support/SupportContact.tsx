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
        <p className="mb-3 font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
          Contact & Resources
        </p>
        <h2 className="text-2xl font-light md:text-3xl">Still need help?</h2>
      </div>

      <div className="mb-16 grid grid-cols-1 gap-4 md:grid-cols-3">
        {quickLinks.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.label}
              href={item.href}
              className="group flex flex-col gap-3 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-primary/40 hover:bg-xo-surface-lowest"
            >
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors duration-300 group-hover:bg-primary/15">
                <Icon className="size-4 text-primary" />
              </div>
              <div>
                <p className="mb-1 text-sm font-medium">{item.label}</p>
                <p className="font-serif text-xs leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Link>
          )
        })}
      </div>

      {/* Crisis reminder */}
      <div className="rounded-r-lg border-l-4 border-destructive bg-destructive/5 px-5 py-5">
        <p className="mb-2 font-mono text-[10px] tracking-[0.12em] text-destructive uppercase">
          If you are in crisis
        </p>
        <p className="font-serif text-[14px] leading-relaxed text-foreground/80">
          Xolace is not a crisis service. If you or someone you know is in
          immediate danger, please contact your local emergency services. In the
          US, you can call or text{" "}
          <a
            href="tel:988"
            className="font-medium text-foreground underline underline-offset-4"
          >
            988
          </a>{" "}
          (Suicide & Crisis Lifeline) at any time.
        </p>
      </div>
    </section>
  )
}
