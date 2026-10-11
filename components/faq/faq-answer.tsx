import Link from "next/link"
import { CrisisLineInline } from "@/components/shared/crisis-lines"
import type { FaqItem } from "@/lib/faq-data"

export const faqLinkClass =
  "text-foreground underline underline-offset-4 transition-colors hover:text-primary"

export function FaqAnswer({
  item,
  className,
}: {
  item: FaqItem
  className?: string
}) {
  return (
    <p className={className}>
      {item.answer.map((segment, i) => {
        if (typeof segment === "string") return segment
        if ("href" in segment)
          return (
            <Link key={i} href={segment.href} className={faqLinkClass}>
              {segment.text}
            </Link>
          )
        return <CrisisLineInline key={i} linkClassName={faqLinkClass} />
      })}
    </p>
  )
}
