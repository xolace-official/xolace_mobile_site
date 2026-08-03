import type { Metadata, Viewport } from "next"
import { DM_Sans, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "sonner"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { cn } from "@/lib/utils"
import { MotionProvider } from "@/providers/motion-provider"

export const viewport: Viewport = {
  maximumScale: 1,
}

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
  title: {
    default: "Xolace",
    template: "Xolace | %s",
  },
  description:
    "A digital space for the moments between. Not a feed. Not a clinic. A quiet place to be human.",
  keywords: [
    "Xolace",
    "Social",
    "Platform",
    "Thoughts",
    "Stories",
    "Experiences",
    "Fostering",
    "Engagement",
    "Self-Expression",
    "Unique",
    "User-Centered",
    "Space",
    "Communities",
    "Mental healthcare",
    "Professional Support",
  ],
  creator: "Xolace Inc.",
  publisher: "Xolace Inc.",
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
