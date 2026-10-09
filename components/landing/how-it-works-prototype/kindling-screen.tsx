// PROTOTYPE (ticket #24): stand-in for the Kindling screen until a real screenshot exists.
// Styled to sit next to the real dark-mode captures: black ground, the app's warm accent.
import { cn } from "@/lib/utils"
import { KINDLINGS } from "@/components/landing/hero-prototype/kindlings"

const PICKS = ["sit", "vessa", "xolacers", "lantern"]

export function KindlingScreen({ className }: { className?: string }) {
  const picks = KINDLINGS.filter((k) => PICKS.includes(k.id))
  return (
    <div className={cn("@container size-full bg-black", className)}>
      <div className="flex size-full flex-col px-[7%] pt-[22%] font-sans text-white">
        {/* destructive is the closest token to the app's coral accent */}
        <p className="text-[4.2cqw] text-destructive">Kindling</p>
        <p className="mt-[3%] text-[7cqw] leading-tight">For today</p>
        <p className="mt-[2%] text-[3.8cqw] leading-snug text-white/40">
          Picked from what you shared tonight.
        </p>
        <ul className="mt-[9%] space-y-[7%]">
          {picks.map((k) => (
            <li key={k.id} className="flex gap-[5%]">
              <k.icon
                className="mt-[1%] size-[6cqw] shrink-0 text-destructive"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-[4.6cqw] leading-tight">{k.name}</p>
                <p className="mt-[2%] text-[3.4cqw] leading-snug text-white/40">
                  {k.why}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-auto mb-[14%] text-center text-[3.2cqw] text-white/25">
          A new set tomorrow
        </p>
      </div>
    </div>
  )
}
