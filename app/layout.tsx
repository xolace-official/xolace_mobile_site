import type { Metadata } from "next"
import { DM_Sans, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { cn } from "@/lib/utils"
import { MotionProvider } from "@/providers/motion-provider"
import { SHARE_TITLE, SITE_DESCRIPTION, SITE_URL } from "@/lib/site"

const dmSans = DM_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "variable",
  variable: "--font-sans",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Xolace",
    template: "%s | Xolace",
  },
  description: SITE_DESCRIPTION,
  // The image comes from app/opengraph-image.tsx; X falls back to it for its card
  openGraph: {
    type: "website",
    siteName: "Xolace",
    title: SHARE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: SHARE_TITLE,
    description: SITE_DESCRIPTION,
  },
  creator: "XOLACEINC LTD",
  publisher: "XOLACEINC LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        dmSans.variable
      )}
    >
      <body>
        <ThemeProvider>
          <MotionProvider>
            <Navbar />
            {/*<div className="texture" />*/}
            {children}
            <Footer />
            <Toaster position="top-center" richColors />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
