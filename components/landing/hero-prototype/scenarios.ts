// PROTOTYPE (ticket #23): example passes for variants E–H, so the words and the four Kindlings match.
// Illustrative copy for the founders to react to, not real app output.
import { KINDLINGS, type Kindling } from "./kindlings"

export type Pick = { kindling: Kindling; why: string }

export type Scenario = {
  feeling: string
  share: string
  mirror: string
  picks: Pick[]
}

const k = (id: string) => KINDLINGS.find((x) => x.id === id)!

export const SCENARIOS: Scenario[] = [
  {
    feeling: "restless",
    share: "I keep saying I'm fine. I haven't slept properly in a week.",
    mirror:
      "It sounds like you're tired of holding everything together on your own.",
    picks: [
      {
        kindling: k("sit"),
        why: "Two minutes to let your body catch up with you.",
      },
      {
        kindling: k("vessa"),
        why: "Something quiet for the hours you can't sleep.",
      },
      {
        kindling: k("lantern"),
        why: "A short read on why rest can feel out of reach.",
      },
      {
        kindling: k("xolacers"),
        why: "A person to talk it through with, if you want one.",
      },
    ],
  },
  {
    feeling: "heavy",
    share: "Everyone at home thinks I'm coping. I'm not.",
    mirror:
      "There's a weight in keeping up a face for the people closest to you.",
    picks: [
      {
        kindling: k("bridge"),
        why: "Help finding the first words to someone at home.",
      },
      {
        kindling: k("xolacers"),
        why: "Somewhere you don't have to keep the face on.",
      },
      { kindling: k("sit"), why: "A minute to put the weight down." },
      { kindling: k("lantern"), why: "On the cost of always seeming fine." },
    ],
  },
  {
    feeling: "unseen",
    share: "I did everything right this term and nobody noticed.",
    mirror:
      "Under the frustration, it sounds like you wanted someone to see the effort.",
    picks: [
      {
        kindling: k("lantern"),
        why: "On needing to be seen, and why it isn't vanity.",
      },
      {
        kindling: k("bridge"),
        why: "Help telling one person what this term took.",
      },
      { kindling: k("vessa"), why: "Something to sit with on the way home." },
      { kindling: k("sit"), why: "To notice the effort yourself, first." },
    ],
  },
  {
    feeling: "stretched thin",
    share: "Work, family, school. There's nothing left for me.",
    mirror: "It sounds like you've been giving from an empty cup for a while.",
    picks: [
      { kindling: k("vessa"), why: "Ten minutes that ask nothing of you." },
      { kindling: k("sit"), why: "A breath before the next thing." },
      {
        kindling: k("xolacers"),
        why: "Someone to say it to who isn't owed anything.",
      },
      {
        kindling: k("bridge"),
        why: "Help asking for one thing to come off your plate.",
      },
    ],
  },
]

export const scenarioFor = (pass: number) =>
  SCENARIOS[(pass - 1) % SCENARIOS.length]

export const DOT: Record<string, string> = {
  sit: "bg-primary",
  vessa: "bg-chart-2",
  xolacers: "bg-accent",
  lantern: "bg-chart-5",
  bridge: "bg-chart-3",
}

export const STROKE: Record<string, string> = {
  sit: "stroke-primary",
  vessa: "stroke-chart-2",
  xolacers: "stroke-accent",
  lantern: "stroke-chart-5",
  bridge: "stroke-chart-3",
}

// Raw token colours for SVG strokes and inline tints
export const COLOR: Record<string, string> = {
  sit: "var(--primary)",
  vessa: "var(--chart-2)",
  xolacers: "var(--accent)",
  lantern: "var(--chart-5)",
  bridge: "var(--chart-3)",
}

// Theme-aware inks for a colour set as --k on the element. The bright tokens (accent, chart-3,
// chart-5) wash out on the light background, so light mode keeps each hue but drops its lightness.
// Relative colour syntax, not color-mix toward the foreground, which drags hues round the wheel.
export const INK = {
  text: "text-[color:oklch(from_var(--k)_0.56_c_h)] dark:text-(--k)",
  label: "text-[color:oklch(from_var(--k)_0.5_c_h)] dark:text-(--k)",
  border:
    "border-[color:oklch(from_var(--k)_0.6_c_h_/_0.5)] dark:border-[color:oklch(from_var(--k)_l_c_h_/_0.45)]",
  bg: "bg-[color:oklch(from_var(--k)_l_c_h_/_0.2)] dark:bg-[color:oklch(from_var(--k)_l_c_h_/_0.18)]",
  stroke: "stroke-[color:oklch(from_var(--k)_0.6_c_h)] dark:stroke-(--k)",
}

export const inkVar = (color: string) =>
  ({ "--k": color }) as React.CSSProperties
