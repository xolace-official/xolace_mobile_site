import { ImageResponse } from "next/og"
import { SITE_DESCRIPTION, SITE_TAGLINE } from "@/lib/site"

export const alt = SITE_TAGLINE
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// The image renderer can't read CSS variables or oklch, so these are the dark
// tokens from app/globals.css converted to sRGB hex (primary and accent
// gamut-mapped). Change them there first, then here.
const ink = {
  background: "#08071a",
  foreground: "#eceff4",
  muted: "#8085a6",
  primary: "#f33cc1",
  accent: "#56fbce",
}

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        background: ink.background,
        backgroundImage: `radial-gradient(circle at 85% 15%, ${ink.primary}33, transparent 45%), radial-gradient(circle at 10% 95%, ${ink.accent}22, transparent 40%)`,
        color: ink.foreground,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          fontSize: 34,
          letterSpacing: "-0.02em",
        }}
      >
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: 999,
            background: ink.primary,
          }}
        />
        Xolace
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        <div
          style={{
            fontSize: 76,
            lineHeight: 1.08,
            letterSpacing: "-0.03em",
            maxWidth: 940,
          }}
        >
          {SITE_TAGLINE}
        </div>
        <div
          style={{
            fontSize: 30,
            lineHeight: 1.4,
            color: ink.muted,
            maxWidth: 900,
          }}
        >
          {SITE_DESCRIPTION}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 24, color: ink.muted }}>
        Free on iOS and Android · xolaceinc.com
      </div>
    </div>,
    size
  )
}
