"use client"

import { useEffect, useState } from "react"
import { DownloadButtons } from "@/components/shared/download-buttons"

export function MobileDownloadBar() {
  const [visible, setVisible] = useState(false)
  const [atDownload, setAtDownload] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100)
    window.addEventListener("scroll", onScroll, { passive: true })

    // Hides when LaunchSection scrolls into view — avoids duplicate CTAs
    const target = document.getElementById("download")
    if (!target) return () => window.removeEventListener("scroll", onScroll)

    const observer = new IntersectionObserver(
      ([entry]) => setAtDownload(entry.isIntersecting),
      { threshold: 0.1 }
    )
    observer.observe(target)

    return () => {
      window.removeEventListener("scroll", onScroll)
      observer.disconnect()
    }
  }, [])

  if (!visible || atDownload) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/80 backdrop-blur-xl border-t border-border/40 px-6 py-3 flex items-center justify-center">
      <DownloadButtons align="center" />
    </div>
  )
}
