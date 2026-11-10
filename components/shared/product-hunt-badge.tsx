import { cn } from "@/lib/utils"
import {
  PRODUCT_HUNT_POST_ID,
  productHuntBadgeHref,
  productHuntBadgeSrc,
} from "@/lib/product-hunt"
import { SITE_TAGLINE } from "@/lib/site"

type ProductHuntBadgeProps = {
  // Becomes utm_medium, so Product Hunt's stats show which placement was clicked
  placement: string
  className?: string
}

export function ProductHuntBadge({
  placement,
  className,
}: ProductHuntBadgeProps) {
  if (!PRODUCT_HUNT_POST_ID) return null

  const alt = `Xolace - ${SITE_TAGLINE} | Product Hunt`

  return (
    <a
      href={productHuntBadgeHref(placement)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Support Xolace on Product Hunt"
      className={cn(
        "inline-block transition-all duration-300 hover:scale-105 hover:opacity-90 active:scale-95",
        className
      )}
    >
      {/* Plain img: the badge is a live SVG from Product Hunt (it shows the upvote count), which next/image won't proxy */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={productHuntBadgeSrc(PRODUCT_HUNT_POST_ID, "light")}
        alt={alt}
        width={250}
        height={54}
        className="h-11 w-auto dark:hidden"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={productHuntBadgeSrc(PRODUCT_HUNT_POST_ID, "dark")}
        alt={alt}
        width={250}
        height={54}
        className="hidden h-11 w-auto dark:block"
      />
    </a>
  )
}
