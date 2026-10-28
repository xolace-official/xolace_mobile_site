"use client"

import Image from "next/image"
import { m as motion } from "motion/react"
import { ClaudeIcon } from "@/components/socials/claude-icon"

const ELEVENLABS_LOGO = {
  light:
    "https://eleven-public-cdn.elevenlabs.io/payloadcms/pwsc4vchsqt-ElevenLabsGrants.webp",
  dark: "https://eleven-public-cdn.elevenlabs.io/payloadcms/cy7rxce8uki-IIElevenLabsGrants%201.webp",
}

function ClaudeLogo() {
  return (
    <span className="flex items-center gap-2 text-foreground">
      <ClaudeIcon className="size-6" />
      <span className="text-[1.65rem] leading-none tracking-tight">Claude</span>
    </span>
  )
}

// Both variants are rendered and swapped by the .dark class, so there's no theme flash before hydration
function ElevenLabsLogo() {
  return (
    <>
      <Image
        src={ELEVENLABS_LOGO.light}
        alt=""
        width={1496}
        height={132}
        className="h-5 w-auto dark:hidden"
      />
      <Image
        src={ELEVENLABS_LOGO.dark}
        alt=""
        width={1496}
        height={132}
        className="hidden h-5 w-auto dark:block"
      />
    </>
  )
}

function GoogleForStartupsLogo() {
  return (
    <Image
      src="/images/google-for-startups.png"
      alt=""
      width={810}
      height={101}
      className="h-6 w-auto"
    />
  )
}

const programs = [
  { name: "Claude Startups", Logo: ClaudeLogo },
  { name: "ElevenLabs Grants", Logo: ElevenLabsLogo },
  { name: "Google for Startups", Logo: GoogleForStartupsLogo },
]

export function StartupProgramsSection() {
  return (
    <section className="relative overflow-hidden bg-xo-surface-lowest pt-[var(--section-py)]">
      <div className="section-spacing-x section-container relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="section-label text-center text-xs! font-semibold md:text-[0.8125rem]!"
        >
          Member of these startup programs
        </motion.p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {programs.map(({ name, Logo }, i) => (
            <motion.li
              key={name}
              aria-label={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.85, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: 0.1 + i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex h-8 items-center"
            >
              <Logo />
            </motion.li>
          ))}
        </ul>
      </div>

      {/* The horizon: a warm glow rising behind a wide ellipse whose fill matches the FAQ below */}
      <div aria-hidden className="relative mt-10 h-44 md:mt-14 md:h-64">
        <div className="absolute inset-x-0 bottom-0 h-full bg-[radial-gradient(ellipse_40%_75%_at_50%_100%,oklch(from_var(--primary)_l_c_h/0.2),transparent)] dark:bg-[radial-gradient(ellipse_40%_75%_at_50%_100%,oklch(from_var(--primary)_l_c_h/0.35),transparent)]" />
        <div className="absolute top-[60%] left-1/2 aspect-[3/1] w-[260%] -translate-x-1/2 rounded-[50%] bg-background md:w-[150%]" />
        <div className="absolute top-[60%] left-1/2 aspect-[3/1] w-[260%] -translate-x-1/2 rounded-[50%] [mask-image:linear-gradient(to_right,transparent_20%,black_42%,black_58%,transparent_80%)] shadow-[inset_0_1px_0_0_oklch(from_var(--foreground)_l_c_h/0.4)] md:w-[150%]" />
      </div>
    </section>
  )
}
