import type { Metadata, Viewport } from "next"
import { Geist_Mono, Lora, Space_Grotesk } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/shared/navbar"
import { Footer } from "@/components/shared/footer"
import { cn } from "@/lib/utils";
import { MotionProvider } from "@/providers/motion-provider";

export const viewport: Viewport = {
  maximumScale: 1,
};

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
      className={cn("antialiased", fontMono.variable, lora.variable, "font-sans", spaceGrotesk.variable)}
    >
      <body>
        <ThemeProvider>
          <MotionProvider>
            <Navbar />
            <div className="" />
            {children}
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
