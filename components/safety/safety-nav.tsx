"use client"

import { useActiveSection } from "@/hooks/use-active-section"
import { TOPICS } from "@/lib/safety"
import { cn } from "@/lib/utils"

const TOPIC_IDS = TOPICS.map((t) => t.id)

// Large screens only; phones read the topics in order without it.
export function SafetyNav() {
  const active = useActiveSection(TOPIC_IDS)

  return (
    <nav aria-label="On this page" className="hidden lg:block">
      <ul className="sticky top-28 flex flex-col border-l border-border text-sm text-muted-foreground">
        {TOPICS.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              aria-current={active === t.id ? "location" : undefined}
              className={cn(
                "-ml-px block border-l-2 border-transparent py-1.5 pl-4 transition-colors hover:text-foreground",
                active === t.id && "border-primary text-foreground"
              )}
            >
              {t.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
