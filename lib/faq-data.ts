export type FaqItem = {
  question: string
  answer: string
}

export type FaqCategory = {
  label: string
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    label: "General",
    items: [
      {
        question: "What is Xolace?",
        answer:
          "Xolace is emotional processing infrastructure — built for the moments when you feel something you can't name. Heavy, anxious, numb, but not in crisis. Not therapy. Not a chatbot. The quiet space between fine and needing help.",
      },
      {
        question: "Is Xolace free?",
        answer:
          "Yes. Free to download on iOS and Android. The core experience — Mirror, Vent, and Glimpses — is free. We believe the thing that helps people should be available to everyone.",
      },
      {
        question: "Who is this for?",
        answer:
          "Anyone who feels something they can't name. If you've ever had a weight on your chest that you couldn't explain — and didn't think it was 'bad enough' to bring up — Xolace was built for that moment.",
      },
      {
        question: "Is this therapy?",
        answer:
          "No. Xolace sits in the space before therapy. It doesn't diagnose. It doesn't advise. It helps you hear yourself more clearly — so that when you do reach out for help, you know what you're reaching out about.",
      },
    ],
  },
  {
    label: "How it works",
    items: [
      {
        question: "What is Mirror?",
        answer:
          "You describe what you're feeling — fragments, words, whatever you have. Mirror reflects it back with more precision than you found on your own. 1–3 sentences. The goal: you read it and think, yes — that's exactly it.",
      },
      {
        question: "What is Vent?",
        answer:
          "For when you need to release, not understand. You open the mic and speak. Something listens — without advising, without judging. When you're done, it's gone. \"Gone.\" appears on screen. Nothing is stored.",
      },
      {
        question: "What are Glimpses?",
        answer:
          "Short videos from real people describing an emotion like yours. Not advice. Not diagnosis. Just: I felt this. I'm still here. Human recognition without clinical framing.",
      },
      {
        question: "Do I need an account?",
        answer:
          "No. Mirror and Vent work without one. An account is only needed to contribute your own Glimpses or save notes across devices. We ask for as little as possible.",
      },
    ],
  },
  {
    label: "Privacy",
    items: [
      {
        question: "What happens to what I share?",
        answer:
          "Your words are encrypted. Your name is never attached to what you write. No one at Xolace reads your Mirror sessions. Vent sessions are deleted immediately when they end — nothing is stored.",
      },
      {
        question: "Are my vent sessions recorded?",
        answer:
          "No. Voice sessions are processed in real time to generate a response, then deleted. There's no recording, no transcript, no storage of any kind after the session ends.",
      },
      {
        question: "Is my data sold?",
        answer:
          "Never. We don't run ads. We don't sell data. The only way this works is if people trust it enough to return — and they won't if we sell them out.",
      },
    ],
  },
  {
    label: "Crisis & Safety",
    items: [
      {
        question: "What if I'm in crisis?",
        answer:
          "Xolace is not designed for crisis. If you or someone you know is in immediate danger, contact your local emergency services. In the US, call or text 988 (Suicide & Crisis Lifeline) any time, day or night.",
      },
    ],
  },
]
