// Example passes for the hero pipeline, so each pass's words and its four lit Kindlings match.
// Illustrative copy, not real app output. Consecutive passes must light different sets.
import type { KindlingId } from "@/lib/kindlings"

type Scenario = {
  share: string
  mirror: string
  lit: KindlingId[]
}

const SCENARIOS: Scenario[] = [
  {
    share: "I keep saying I'm fine. I haven't slept properly in a week.",
    mirror:
      "It sounds like you're tired of holding everything together on your own.",
    lit: ["sit", "vessa", "lantern", "xolacers"],
  },
  {
    share: "Everyone at home thinks I'm coping. I'm not.",
    mirror:
      "There's a weight in keeping up a face for the people closest to you.",
    lit: ["bridge", "xolacers", "sit", "lantern"],
  },
  {
    share: "I did everything right this term and nobody noticed.",
    mirror:
      "Under the frustration, it sounds like you wanted someone to see the effort.",
    lit: ["lantern", "bridge", "vessa", "sit"],
  },
  {
    share: "Work, family, school. There's nothing left for me.",
    mirror: "It sounds like you've been giving from an empty cup for a while.",
    lit: ["vessa", "sit", "xolacers", "bridge"],
  },
]

export const scenarioFor = (pass: number) =>
  SCENARIOS[(pass - 1) % SCENARIOS.length]
