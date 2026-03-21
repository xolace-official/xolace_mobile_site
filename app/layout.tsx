import type { Metadata } from "next"
import { Geist_Mono, Lora, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"
import { cn } from "@/lib/utils";
import { MotionProvider } from "@/providers/motion-provider";

const spaceGrotesk = Space_Grotesk({subsets:['latin'],variable:'--font-sans'})

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
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
      className={cn("antialiased", fontMono.variable, lora.variable, "font-sans", spaceGrotesk.variable)}
    >
      <body>
        <ThemeProvider>
          <MotionProvider>
            <Navbar />
            <div className="texture" />
            {children}
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
