"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

const LOGO = {
  light:
    "https://eleven-public-cdn.elevenlabs.io/payloadcms/pwsc4vchsqt-ElevenLabsGrants.webp",
  dark:
    "https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp",
}

export function ElevenLabsGrantsBadge() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), [])

  // Default to the dark-background (white) logo pre-mount since the footer's
  // dark-theme surface is the more common resolvedTheme for this audience.
  const src = mounted && resolvedTheme === "light" ? LOGO.light : LOGO.dark

  return (
    <a
      href="https://elevenlabs.io/startup-grants"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Backed by ElevenLabs Grants"
      className="shrink-0 opacity-70 transition-opacity duration-300 hover:opacity-100"
    >
      <Image
        src={src}
        alt="ElevenLabs Grants"
        width={1496}
        height={132}
        className="h-5 w-auto sm:h-[13px]"
      />
    </a>
  )
}
