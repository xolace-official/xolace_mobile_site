import Image from "next/image"
import { FadeIn } from "@/components/shared/fade-in"

type BadgeProps = {
  href: string
  ariaLabel: string
  lightSrc: string
  darkSrc: string
  alt: string
}

function StoreBadge({ href, ariaLabel, lightSrc, darkSrc, alt }: BadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group transition-all duration-300 hover:opacity-85 hover:scale-[1.03] active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary focus-visible:outline-offset-4"
    >
      <Image src={lightSrc} alt={alt} width={180} height={60} className="h-14 w-auto dark:hidden" />
      <Image src={darkSrc} alt={alt} width={180} height={60} className="h-14 w-auto hidden dark:block" />
    </a>
  )
}

export function DownloadSection() {
  return (
    <FadeIn id="download" className="py-24 md:py-40 px-6">
      <div className="max-w-[680px] mx-auto text-center space-y-10">

        <h2 className="font-serif font-normal text-[1.625rem] md:text-[2.25rem] text-foreground leading-[1.25]">
          When you&apos;re ready, it&apos;s here.
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <StoreBadge
            href="https://apps.apple.com/gh/app/xolace/id6761601429"
            ariaLabel="Download Xolace on the App Store"
            lightSrc="/images/app-store-mobile.png"
            darkSrc="/images/app-store-mobile-dark.png"
            alt="Download on the App Store"
          />
          <StoreBadge
            href="https://play.google.com/store/apps/details?id=com.xolaceincorg.xolace"
            ariaLabel="Get Xolace on Google Play"
            lightSrc="/images/play-store-light.png"
            darkSrc="/images/play-store-dark.png"
            alt="Get it on Google Play"
          />
        </div>

        <p className="text-sm text-muted-foreground/50 font-light italic">
          Free to download &middot; iOS &amp; Android
        </p>

      </div>
    </FadeIn>
  )
}
