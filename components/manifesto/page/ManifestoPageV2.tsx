import { OpeningV2 } from "@/components/manifesto/v2/opening"
import { SpaceBetween } from "@/components/manifesto/v2/space-between"
import { Experience } from "@/components/manifesto/v2/experience"
import { WhyAI } from "@/components/manifesto/v2/why-ai"
import { Beliefs } from "@/components/manifesto/v2/beliefs"
import { Never } from "@/components/manifesto/v2/never"
import { QuietPart } from "@/components/manifesto/v2/quiet-part"
import { Invitation } from "@/components/manifesto/invitation"

export function ManifestoPageV2() {
  return (
    <main className="pt-40">
      <OpeningV2 />
      <SpaceBetween />
      <Experience />
      <WhyAI />
      <Beliefs />
      <Never />
      <QuietPart />
      <Invitation />
    </main>
  )
}
