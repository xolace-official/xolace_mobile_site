"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export function MobileDownloadBar() {
  const [visible, setVisible] = useState(false)
  const [atDownload, setAtDownload] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100)
    window.addEventListener("scroll", onScroll, { passive: true })

    // Hides when LaunchSection (#download) scrolls into view — avoids duplicate CTAs
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
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/80 backdrop-blur-xl border-t border-border/40 px-6 py-3 flex items-center justify-center gap-4">
      <a
        href="https://apps.apple.com/gh/app/xolace/id6761601429"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Xolace on the App Store"
      >
        <Image src="/images/app-store-mobile.png" alt="App Store" width={120} height={40} className="h-10 w-auto dark:hidden" />
        <Image src="/images/app-store-mobile-dark.png" alt="App Store" width={120} height={40} className="h-10 w-auto hidden dark:block" />
      </a>
      <a
        href="https://play.google.com/store/apps/details?id=com.xolaceincorg.xolace"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Xolace on Google Play"
      >
        <Image src="/images/play-store-light.png" alt="Google Play" width={120} height={40} className="h-10 w-auto dark:hidden" />
        <Image src="/images/play-store-dark.png" alt="Google Play" width={120} height={40} className="h-10 w-auto hidden dark:block" />
      </a>
    </div>
  )
}
