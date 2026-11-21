import type { Metadata } from "next"
import { notFound } from "next/navigation"
import {
  LANTERN_FALLBACK_TITLE,
  LanternEntryPage,
} from "@/components/lantern/page/LanternEntryPage"
import { getLanternPreview } from "@/lib/lantern-preview"
import { SITE_TAGLINE } from "@/lib/site"

type Props = { params: Promise<{ slug: string }> }

// Rendered per request (there's no list of slugs to prerender). The preview fetch is cached for an hour
// in Next's data cache, and a failed one isn't cached, so a fallback page never sticks.

// Previews unfurl in chats but stay out of search: the piece itself isn't on the web.
// Not disallowed in robots.txt, because link-preview bots (X's included) honour it and would stop unfurling.
const robots: Metadata["robots"] = { index: false, follow: true }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const result = await getLanternPreview(slug)
  const url = `/lantern/${slug}`

  if (result.status !== "ok") {
    return { title: LANTERN_FALLBACK_TITLE, robots }
  }

  const { title, dek, coverUrl } = result.preview
  // Setting openGraph here drops the inherited file image, so the site's own one is named as the fallback
  const images = coverUrl
    ? [{ url: coverUrl, alt: title }]
    : [{ url: "/opengraph-image", width: 1200, height: 630, alt: SITE_TAGLINE }]

  return {
    title,
    description: dek,
    alternates: { canonical: url },
    robots,
    openGraph: {
      type: "article",
      siteName: "Xolace",
      url,
      title,
      description: dek,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: dek,
      images,
    },
  }
}

export default async function LanternEntry({ params }: Props) {
  const { slug } = await params
  const result = await getLanternPreview(slug)
  if (result.status === "not_found") notFound()

  return (
    <LanternEntryPage
      slug={slug}
      preview={result.status === "ok" ? result.preview : null}
    />
  )
}
