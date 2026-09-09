import Image from "next/image"
import { cn } from "@/lib/utils"

const sizes = {
  sm: 40,
  md: 56,
  lg: 72,
  xl: 96,
}

// The source file (public/logo/main-logo.png) is 818x305 — keep this in
// sync with its real aspect ratio so next/image doesn't over-request.
const LOGO_ASPECT_RATIO = 818 / 305

interface XolaceLogoProps {
  size?: keyof typeof sizes
  className?: string
  priority?: boolean
}

export function XolaceLogo({
  size = "lg",
  className,
  priority = false,
}: XolaceLogoProps) {
  const px = sizes[size]
  return (
    <Image
      src="/logo/main-logo.png"
      alt="Xolace"
      height={px}
      width={Math.round(px * LOGO_ASPECT_RATIO)}
      style={{ height: px, width: "auto" }}
      className={cn("object-contain", className)}
      priority={priority}
    />
  )
}
