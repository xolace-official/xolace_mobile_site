"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { toast } from "sonner"

export function ShareXolaceButton() {
  const [isSharing, setIsSharing] = useState(false)

  async function share() {
    if (isSharing) return
    setIsSharing(true)

    try {
      const shareData = {
        title: "Xolace",
        text: "A quiet place for the moments that do not have a name yet.",
        url: window.location.href,
      }

      if (navigator.share) {
        await navigator.share(shareData)
      } else {
        await navigator.clipboard.writeText(shareData.url)
        toast.success("Xolace link copied")
      }
    } catch {
      // A cancelled native share is not an error worth showing to the visitor.
    } finally {
      setIsSharing(false)
    }
  }

  return (
    <button
      type="button"
      onClick={share}
      disabled={isSharing}
      className="mt-7 flex size-9 items-center justify-center rounded-full border border-border/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary disabled:opacity-50"
      aria-label="Share Xolace"
    >
      <ArrowUpRight className="size-4" />
    </button>
  )
}
