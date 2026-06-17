"use client"

import { Button } from "@/components/ui/button"
import { DownloadButtons } from "@/components/shared/download-buttons"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import type { Teaser } from "./pricing/pricing-data"

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
  teaser: Teaser | null
  onWaitlistInstead: () => void
}

// Honest by design (strategy §6): the CTA must match the claim. A live insight
export function InsightDetailDialog({
  open,
  onOpenChange,
  teaser,
  onWaitlistInstead,
}: Props) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        showCloseButton
        className="max-w-md gap-0 rounded-2xl border-border/60 bg-background p-8 sm:max-w-md"
      >
        {teaser &&
          (teaser.ready ? (
            <>
              <DialogHeader className="mb-6">
                <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground/35 uppercase">
                  Xolace+ — live now
                </p>
                <DialogTitle className="font-serif text-2xl leading-snug font-light text-foreground italic">
                  This is already live.
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm leading-relaxed font-light text-muted-foreground/60">
                  {teaser.caption} Open the app — it&apos;s there right now.
                </DialogDescription>
              </DialogHeader>

              <DownloadButtons />
            </>
          ) : (
            <>
              <DialogHeader className="mb-6">
                <p className="mb-3 font-mono text-[10px] tracking-[0.22em] text-muted-foreground/35 uppercase">
                  Xolace+ — still being built
                </p>
                <DialogTitle className="font-serif text-2xl leading-snug font-light text-foreground italic">
                  Not yet. But it&apos;s coming.
                </DialogTitle>
                <DialogDescription className="mt-2 text-sm leading-relaxed font-light text-muted-foreground/60">
                  {teaser.caption} This part isn&apos;t built yet — we
                  won&apos;t dress it up as ready. Want to know the moment it
                  ships?
                </DialogDescription>
              </DialogHeader>

              <Button
                onClick={onWaitlistInstead}
                className="h-10 w-full rounded-lg text-sm"
              >
                Join the Xolace+ waitlist
              </Button>
            </>
          ))}
      </DialogContent>
    </Dialog>
  )
}
