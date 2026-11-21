import { ArrowUpRight } from "lucide-react"
import { DownloadButtons } from "@/components/shared/download-buttons"
import { ledgerButton } from "@/components/shared/ledger"
import { appSchemeUrl } from "@/lib/app-links"

type LanternGetAppProps = {
  slug: string
  // Shown above the buttons; the fallback page says it in its heading instead
  line?: string
}

// With the app installed the shared link usually opens it before this page loads.
// The button covers the cases it can't: a link typed or pasted into the browser, or an in-app browser.
export function LanternGetApp({ slug, line }: LanternGetAppProps) {
  return (
    <div className="flex flex-col gap-6">
      {line && (
        <p className="text-base leading-relaxed text-foreground md:text-[1.0625rem]">
          {line}
        </p>
      )}
      <div className="flex flex-col items-start gap-5">
        <a href={appSchemeUrl(slug)} className={ledgerButton.primary}>
          Open in Xolace
          <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
        </a>
        <DownloadButtons align="start" />
      </div>
    </div>
  )
}
