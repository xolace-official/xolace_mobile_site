// Product Hunt launch, 11 November 2026. The ID comes from the maker dashboard's
// embed page; set it to null to hide every badge.
export const PRODUCT_HUNT_POST_ID: string | null = "1312054"

export const PRODUCT_HUNT_SLUG = "xolace"

export const PRODUCT_HUNT_URL = `https://www.producthunt.com/products/${PRODUCT_HUNT_SLUG}`

// Launch day runs 00:01 to 23:59 Pacific. The window is widened a little either
// side so the welcome note is up for early and late visitors in every timezone.
export const PRODUCT_HUNT_LAUNCH = {
  start: new Date("2026-11-11T00:00:00-08:00"),
  end: new Date("2026-11-13T00:00:00-08:00"),
}

export type ProductHuntBadgeTheme = "light" | "dark" | "neutral"

export function productHuntBadgeHref(medium: string) {
  const params = new URLSearchParams({
    embed: "true",
    utm_source: "badge-featured",
    utm_medium: medium,
    utm_campaign: `badge-${PRODUCT_HUNT_SLUG}`,
  })
  return `${PRODUCT_HUNT_URL}?${params}`
}

export function productHuntBadgeSrc(
  postId: string,
  theme: ProductHuntBadgeTheme
) {
  const params = new URLSearchParams({ post_id: postId, theme })
  return `https://api.producthunt.com/widgets/embed-image/v1/featured.svg?${params}`
}

// Product Hunt adds ?ref=producthunt to every outbound link on a post.
export function isFromProductHunt(search: string) {
  const params = new URLSearchParams(search)
  const ref = params.get("ref") ?? params.get("utm_source") ?? ""
  return ref.toLowerCase().includes("producthunt")
}

export function isProductHuntLaunchWindow(now: Date = new Date()) {
  return now >= PRODUCT_HUNT_LAUNCH.start && now < PRODUCT_HUNT_LAUNCH.end
}
