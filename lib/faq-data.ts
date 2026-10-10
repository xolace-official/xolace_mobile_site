import { DANGER_LINE, getCrisisTier } from "@/lib/crisis-resources"
import { billingSummary, plusPrices, type PlusPrice } from "@/lib/pricing"

// Wording settled in #31 and checked against docs/xolace.md §7, §9, §11 and xolace-technical.md §8.
// /faq, the landing FAQ and the FAQPage JSON-LD all render this array, so schema and text can't drift.

export type FaqLink = { text: string; href: string }

// The crisis lines are the only regional part of the FAQ: the global tier in the HTML and JSON-LD,
// swapped in the browser like /safety.
export type FaqCrisisLines = { crisisLines: true }

export type FaqSegment = string | FaqLink | FaqCrisisLines

export type FaqItem = {
  id: string
  question: string
  answer: FaqSegment[]
}

export type FaqCategory = {
  id: string
  label: string
  items: FaqItem[]
}

export function buildFaqCategories(
  price: PlusPrice = plusPrices.global
): FaqCategory[] {
  const monthly = billingSummary(price, "monthly").amount
  const annual = billingSummary(price, "annual").amount

  return [
    {
      id: "getting-started",
      label: "Getting started",
      items: [
        {
          id: "what",
          question: "What is Xolace?",
          answer: [
            "An app for when you feel something you can't quite name. You say what's going on, Xolace writes back what it hears underneath, then finds support that fits the moment.",
          ],
        },
        {
          id: "therapy",
          question: "Is this therapy?",
          answer: [
            "No. Xolace sits in the space before therapy and doesn't diagnose or treat anything; read ",
            { text: "what Xolace is not", href: "/safety#not" },
            ".",
          ],
        },
        {
          id: "who",
          question: "Who is it for?",
          answer: [
            "Anyone carrying something heavy, anxious or numb that doesn't feel bad enough to bring up. It was built for that moment, before you'd think of asking for help.",
          ],
        },
        {
          id: "account",
          question: "Do I need an account?",
          answer: [
            "Yes. You sign in so Xolace can remember what you've shared and keep your reflections from one session to the next.",
          ],
        },
        {
          id: "age",
          question: "How old do I need to be?",
          answer: [
            "You need to be 13 or older, and chatting with Xolacers is for people 18 and over. The app doesn't check your age yet, as ",
            { text: "our age policy", href: "/safety#age" },
            " explains.",
          ],
        },
        {
          id: "outside-ghana",
          question: "Does it work outside Ghana?",
          answer: [
            "Yes. Xolace is on iOS and Android and works anywhere, and its crisis screen links to help wherever you are; ",
            { text: "see what it shows", href: "/safety#crisis" },
            ".",
          ],
        },
      ],
    },
    {
      id: "how-it-works",
      label: "How it works",
      items: [
        {
          id: "mirror",
          question: "What is a Mirror?",
          answer: [
            'You say what\'s going on, and the Fire writes back a short Mirror of what it hears underneath. If it\'s off, say "Not quite" or "Say more" and it tries again, up to twice.',
          ],
        },
        {
          id: "after-mirror",
          question: "What happens after the Mirror?",
          answer: [
            "You can sit with a short exercise, see reflections from people who felt something similar, or close. If the session shows you could use support, that's where Kindling comes in, as part of Xolace Plus.",
          ],
        },
        {
          id: "kindling",
          question: "What is Kindling?",
          answer: [
            "Kindling builds a set of three or four supports for your day from the supports we made, each with the reason it's there. It's part of ",
            { text: "Xolace Plus", href: "/pricing" },
            ".",
          ],
        },
        {
          id: "vent",
          question: "What is Vent?",
          answer: [
            "A place to say it out loud, where Xolace listens and answers without advising. We don't store a transcript or your audio.",
          ],
        },
        {
          id: "speak",
          question: "Can I speak instead of type?",
          answer: [
            "Yes. Speak your reflection and it's turned into text, then the Fire answers it just like typed words.",
          ],
        },
      ],
    },
    {
      id: "free-and-plus",
      label: "Free and Plus",
      items: [
        {
          id: "free",
          question: "Is Xolace free?",
          answer: [
            "Yes, reflecting and getting your Mirror is free, always, within fair-use limits. ",
            { text: "Xolace Plus", href: "/pricing" },
            " adds Kindling, more room and your full history.",
          ],
        },
        {
          id: "plus-cost",
          question: "What does Plus cost?",
          answer: [
            `Xolace Plus is ${monthly} a month or ${annual} a year, and taxes may apply where you live. See `,
            { text: "pricing", href: "/pricing" },
            ".",
          ],
        },
        {
          id: "trial",
          question: "How does the free trial work?",
          answer: [
            `The yearly plan starts with a ${price.trialDays}-day free trial. Cancel anytime in your App Store or Google Play subscription settings, and if you cancel before the trial ends you won't be charged.`,
          ],
        },
        {
          id: "crisis-plus",
          question: "Is crisis support behind Plus?",
          answer: [
            "Never. Crisis resources are there for everyone, on Free and on Plus.",
          ],
        },
      ],
    },
    {
      id: "privacy",
      label: "Privacy and your data",
      items: [
        {
          id: "share",
          question: "What happens to what I share?",
          answer: [
            "Your reflections are private by default, and nothing containing your words is shown to anyone else unless you choose to share it. Xolace keeps your history so the Fire can remember you, and you can set it to auto-delete after six months or a year.",
          ],
        },
        {
          id: "sell-train",
          question: "Do you sell my data or train AI on it?",
          answer: [
            "No. There are no ads, we never sell or license your data, and we don't train AI on your words; the AI services that write your Mirror receive your text to do that.",
          ],
        },
        {
          id: "voice",
          question: "What happens to my voice?",
          answer: [
            "When you speak a reflection, it's turned into text and kept like anything you type. In Vent, we don't store a transcript or your audio.",
          ],
        },
        {
          id: "delete",
          question: "Can I delete my data?",
          answer: [
            "Yes: in the app, go to Settings, then Privacy & Data, to delete all your data or your whole account. Some records are handled separately, such as those at our sign-in, subscription and analytics services and reflections you shared anonymously, so ",
            { text: "contact us", href: "/support" },
            " about those.",
          ],
        },
      ],
    },
    {
      id: "safety",
      label: "Safety",
      items: [
        {
          id: "crisis",
          question: "What if I'm in crisis?",
          answer: [
            `${DANGER_LINE} Xolace isn't a crisis service, but you can talk to someone now: `,
            { crisisLines: true },
            ".",
          ],
        },
        {
          id: "heavier",
          question: "What if what I feel gets heavier?",
          answer: [
            "At the end of a session you can say how you're feeling, and Xolace checks in with you later, sooner after a heavier session. Read ",
            { text: "how Xolace keeps you safe", href: "/safety" },
            ".",
          ],
        },
        {
          id: "xolacers",
          question: "Who are Xolacers?",
          answer: [
            "Volunteer peer listeners trained by a partner organisation, not therapists, each vetted in person by our founders and supervised by our team. In a chat you can report or block anyone, and ",
            { text: "our safety page", href: "/safety#xolacers" },
            " says more.",
          ],
        },
      ],
    },
  ]
}

export const faqCategories = buildFaqCategories()

// Plain text of an answer, the way the server HTML reads before the region swap.
export function faqAnswerText(item: FaqItem): string {
  return item.answer
    .map((segment) => {
      if (typeof segment === "string") return segment
      if ("href" in segment) return segment.text
      return getCrisisTier("global")
        .lines.map((line) => `${line.label}, ${line.display}`)
        .join("; ")
    })
    .join("")
}

export function faqJsonLd(categories: FaqCategory[] = faqCategories) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories
      .flatMap((c) => c.items)
      .map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item) },
      })),
  }
}
