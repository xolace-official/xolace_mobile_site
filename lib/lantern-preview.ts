import { cache } from "react"
import { z } from "zod"

// A shared Lantern entry, as the app's Convex backend describes it at
// GET {XOLACE_CONVEX_SITE_URL}/lantern/preview?slug=<slug>. The body of the entry is never on the web.

export const LANTERN_KINDS = ["explainer", "advice", "story"] as const
export type LanternKind = (typeof LANTERN_KINDS)[number]

// Singular, matching the app's own labels
export const LANTERN_KIND_LABEL: Record<LanternKind, string> = {
  explainer: "Explainer",
  advice: "Advice",
  story: "Story",
}

const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const MAX_SLUG_LENGTH = 120

export function isLanternSlug(slug: string): boolean {
  return slug.length <= MAX_SLUG_LENGTH && SLUG.test(slug)
}

// The backend may send null for absent fields; both read as "not there"
const optionalText = z
  .string()
  .nullish()
  .transform((v) => v?.trim() || undefined)

const previewSchema = z.object({
  slug: z.string(),
  kind: z.enum(LANTERN_KINDS),
  title: z.string().trim().min(1),
  dek: z.string().trim(),
  storyDescriptor: optionalText,
  // Only https covers: an http image would be blocked on the page and in most unfurls
  coverUrl: z
    .string()
    .nullish()
    .transform((v) => (v && /^https:\/\//.test(v) ? v : undefined)),
  readMin: z
    .number()
    .positive()
    .transform((n) => Math.max(1, Math.round(n))),
})

export type LanternPreview = z.output<typeof previewSchema>

export type LanternPreviewResult =
  | { status: "ok"; preview: LanternPreview }
  | { status: "not_found" }
  // Endpoint down, slow, misconfigured or sent something unexpected: the page falls back, never errors
  | { status: "unavailable" }

export const PREVIEW_TIMEOUT_MS = 3000
export const PREVIEW_REVALIDATE_SECONDS = 3600

type FetchOptions = {
  baseUrl?: string
  fetcher?: typeof fetch
  timeoutMs?: number
}

export function previewUrl(baseUrl: string, slug: string): URL | null {
  let url: URL
  try {
    url = new URL("/lantern/preview", baseUrl)
  } catch {
    return null
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return null
  url.searchParams.set("slug", slug)
  return url
}

export async function fetchLanternPreview(
  slug: string,
  {
    baseUrl = process.env.XOLACE_CONVEX_SITE_URL,
    fetcher = fetch,
    timeoutMs = PREVIEW_TIMEOUT_MS,
  }: FetchOptions = {}
): Promise<LanternPreviewResult> {
  if (!isLanternSlug(slug)) return { status: "not_found" }
  if (!baseUrl) return { status: "unavailable" }

  const url = previewUrl(baseUrl, slug)
  if (!url) return { status: "unavailable" }

  try {
    const response = await fetcher(url, {
      headers: { Accept: "application/json" },
      next: { revalidate: PREVIEW_REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(timeoutMs),
    })

    // 400 means the backend rejected the slug, which a visitor sees the same as a missing entry
    if (response.status === 404 || response.status === 400) {
      return { status: "not_found" }
    }
    if (!response.ok) return { status: "unavailable" }

    const parsed = previewSchema.safeParse(await response.json())
    if (!parsed.success) return { status: "unavailable" }
    return { status: "ok", preview: parsed.data }
  } catch {
    return { status: "unavailable" }
  }
}

// generateMetadata and the page both ask for the same slug in one request; this makes it one fetch
export const getLanternPreview = cache((slug: string) =>
  fetchLanternPreview(slug)
)

export function readTimeLabel(readMin: number): string {
  return `${readMin} min read`
}
