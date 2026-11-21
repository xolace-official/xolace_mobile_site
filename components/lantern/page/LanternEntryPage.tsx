import { LanternGetApp } from "@/components/lantern/lantern-get-app"
import { LanternPreviewCard } from "@/components/lantern/lantern-preview-card"
import {
  DisplayHeading,
  Eyebrow,
  HeroGlow,
  Lead,
} from "@/components/shared/ledger"
import type { LanternPreview } from "@/lib/lantern-preview"

export const LANTERN_FALLBACK_TITLE = "This piece lives in the Xolace app"

type LanternEntryPageProps = {
  slug: string
  // null when the preview couldn't be read; the page still offers the app
  preview: LanternPreview | null
}

// A shared Lantern entry. Only the preview is on the web; the piece itself is read in the app.
export function LanternEntryPage({ slug, preview }: LanternEntryPageProps) {
  return (
    <main className="pt-16 md:pt-20">
      <section className="section-spacing relative">
        <HeroGlow />
        <div className="section-container-narrow relative z-10">
          <Eyebrow>Lantern, in the Xolace app</Eyebrow>

          {preview ? (
            <>
              <div className="mt-6">
                <LanternPreviewCard preview={preview} />
              </div>
              <div className="mt-10">
                <LanternGetApp
                  slug={slug}
                  line="The full piece is in the Xolace app, free to read."
                />
              </div>
            </>
          ) : (
            <>
              <DisplayHeading className="mt-6">
                {LANTERN_FALLBACK_TITLE}
              </DisplayHeading>
              <Lead className="mt-8 max-w-xl">
                Lantern is Xolace&rsquo;s library of explainers, advice and real
                stories. Open the app to read this one.
              </Lead>
              <div className="mt-10">
                <LanternGetApp slug={slug} />
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  )
}
