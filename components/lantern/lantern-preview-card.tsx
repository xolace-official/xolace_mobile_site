import Image from "next/image"
import { BookOpen, Clock } from "lucide-react"
import { Body, DisplayHeading, Lead } from "@/components/shared/ledger"
import {
  LANTERN_KIND_LABEL,
  readTimeLabel,
  type LanternPreview,
} from "@/lib/lantern-preview"

export function LanternPreviewCard({ preview }: { preview: LanternPreview }) {
  const { kind, title, dek, storyDescriptor, coverUrl, readMin } = preview

  return (
    <article className="overflow-hidden rounded-2xl bg-xo-surface-lowest">
      {coverUrl ? (
        <div className="relative aspect-[16/9] bg-xo-surface-bright">
          {/* unoptimized: covers come from the app's storage, whose host this site doesn't whitelist */}
          <Image
            src={coverUrl}
            alt=""
            fill
            unoptimized
            priority
            sizes="(min-width: 768px) 48rem, 100vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden
          className="flex aspect-[16/5] items-center justify-center bg-primary/[0.04]"
        >
          <BookOpen className="size-8 text-primary/60" strokeWidth={1.5} />
        </div>
      )}

      <div className="p-6 md:p-10">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
          <span className="rounded-full border border-border px-3 py-1 text-xs tracking-[0.08em] uppercase">
            {LANTERN_KIND_LABEL[kind]}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" strokeWidth={1.75} aria-hidden />
            {readTimeLabel(readMin)}
          </span>
        </div>

        <DisplayHeading className="mt-6 text-[2rem] leading-[1.08] md:text-[2.5rem] lg:text-[2.75rem]">
          {title}
        </DisplayHeading>

        {dek && <Lead className="mt-5">{dek}</Lead>}

        {storyDescriptor && (
          <Body className="mt-5 italic">{storyDescriptor}</Body>
        )}
      </div>
    </article>
  )
}
