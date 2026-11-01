"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/manifesto/v2/shared/scroll-reveal"
import { DownloadButtons } from "@/components/shared/download-buttons"
import { Lead } from "@/components/shared/ledger"

export function Invitation() {
  return (
    <section className="section-spacing" id="download">
      <div className="section-container-wide">
        <ScrollReveal>
          <div className="relative flex flex-col gap-10 overflow-hidden rounded-3xl border border-primary/15 bg-primary/[0.04] p-8 md:p-12 lg:flex-row lg:items-center lg:justify-between lg:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -left-20 size-[28rem] rounded-full bg-primary/[0.12] blur-[110px]"
            />
            <div className="relative z-10 max-w-lg">
              <h2 className="text-5xl leading-[1.03] font-medium tracking-[-0.03em] text-foreground md:text-[4rem]">
                Come home.
              </h2>
              <Lead className="mt-5">
                The fire is lit. The mirror is free, and always will be.
              </Lead>
              <div className="mt-10">
                <DownloadButtons align="start" />
              </div>
            </div>

            <div className="relative z-10 size-40 shrink-0 overflow-hidden rounded-2xl border border-primary/30 md:size-48">
              <Image
                src="/hero/the-fire.jpeg"
                alt=""
                fill
                sizes="192px"
                className="object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
