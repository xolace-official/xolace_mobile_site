import { Plus } from "lucide-react"
import { FaqAnswer } from "@/components/faq/faq-answer"
import { faqCategories } from "@/lib/faq-data"

// Native <details>, so every answer is in the server HTML for crawlers and AI search. The open
// animation is CSS (.faq-item in globals.css).
export function FaqList() {
  return (
    <section className="section-spacing border-t border-border/10">
      <div className="section-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[200px_1fr] lg:gap-24">
          <nav aria-label="FAQ topics" className="hidden lg:block">
            <ul className="sticky top-32 space-y-2">
              {faqCategories.map((cat) => (
                <li key={cat.id}>
                  <a
                    href={`#${cat.id}`}
                    className="block py-1 text-sm font-light text-muted-foreground/70 transition-colors duration-200 hover:text-foreground"
                  >
                    {cat.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-14">
            {faqCategories.map((cat) => (
              <section
                key={cat.id}
                id={cat.id}
                aria-labelledby={`${cat.id}-title`}
                className="scroll-mt-28"
              >
                <h2 id={`${cat.id}-title`} className="section-label mb-4">
                  {cat.label}
                </h2>

                {cat.items.map((item) => (
                  <details
                    key={item.id}
                    id={item.id}
                    className="faq-item group scroll-mt-28 border-b border-border/10 last:border-0"
                  >
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 text-left [&::-webkit-details-marker]:hidden">
                      <h3 className="text-lg leading-snug font-light text-foreground/75 transition-colors duration-300 group-open:text-foreground group-hover:text-foreground">
                        {item.question}
                      </h3>
                      <Plus
                        aria-hidden
                        strokeWidth={1.5}
                        className="mt-1 size-5 shrink-0 text-muted-foreground/40 transition-transform duration-300 group-open:rotate-45 group-open:text-primary group-hover:text-muted-foreground"
                      />
                    </summary>
                    <FaqAnswer
                      item={item}
                      className="max-w-2xl pb-7 font-serif text-base leading-relaxed text-muted-foreground md:text-lg"
                    />
                  </details>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
