import Link from "next/link"
import { faqLinkClass } from "@/components/faq/faq-answer"

export function FaqContact() {
  return (
    <section className="section-spacing-x pb-(--section-py)">
      <div className="section-container flex flex-col gap-3 text-center">
        <h2 className="font-serif text-3xl font-light text-foreground italic md:text-4xl">
          Still have a question?
        </h2>
        <p className="text-base font-light text-muted-foreground">
          <Link href="/support" className={faqLinkClass}>
            Get in touch
          </Link>
          , or write to us at support@xolaceinc.com.
        </p>
      </div>
    </section>
  )
}
