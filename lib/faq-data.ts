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
          "Xolace is emotional processing infrastructure, built for the moments when you feel something you can't name. Heavy, anxious, numb, but not in crisis. Not therapy. Not a chatbot. The quiet space between fine and needing help.",
      },
      {
        question: "Is Xolace free?",
        answer:
          "Yes. Free to download on iOS and Android. The core experience, Mirror and peer reflections is free. We believe the thing that helps people should be available to everyone.",
      },
      {
        question: "Who is this for?",
        answer:
          "Anyone who feels something they can't name. If you've ever had a weight on your chest that you couldn't explain and didn't think it was 'bad enough' to bring up. Xolace was built for that moment.",
      },
      {
        question: "Is this therapy?",
        answer:
          "No. Xolace sits in the space before therapy. It doesn't diagnose. It doesn't advise. It helps you hear yourself more clearly, so that when you do reach out for help, you know what you're reaching out about.",
      },
    ],
  },
  {
    label: "How it works",
    items: [
      {
        question: "What is Mirror?",
        answer:
          "You describe what you're feeling, fragments, words, whatever you have. Mirror reflects it back with more precision than you found on your own. 1-3 sentences. The goal: you read it and think, yes, that's exactly it.",
      },
      {
        question: "What happens after the mirror?",
        answer:
          "Once the mirror lands, you choose what comes next. Sit with a short breathing exercise. See an anonymous reflection from someone who felt something similar. Or simply close, knowing you were heard is sometimes enough.",
      },
      {
        question: "Can I speak instead of type?",
        answer:
          "Yes. Voice input is built in. Speak what's on your mind and it becomes text then Mirror works exactly the same. Some things are easier to say than to write.",
      },
      {
        question: "Do I need an account?",
        answer:
          "Yes. You sign in to save your session history and access your reflections across sessions. We keep the process quick and ask for as little as possible.",
      },
    ],
  },
  {
    label: "Privacy",
    items: [
      {
        question: "What happens to what I share?",
        answer:
          "Your words are encrypted. Your name is never attached to what you write. No one at Xolace reads your sessions. We built this for ourselves — we know what it feels like to need a space that won't sell you out.",
      },
      {
        question: "What happens to my voice if I speak instead of type?",
        answer:
          "Your voice is transcribed in real time and treated as text input — it goes into Mirror exactly as typed input would. The audio itself is not stored. What you said is yours.",
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
          'Xolace is not designed for crisis. If you or someone you know is in immediate danger, contact your local emergency services. The app has a quiet "Help" button — always accessible — with emergency numbers and crisis lines for Ghana, the US, UK, Australia, and Canada.',
      },
      {
        question: "What if what I'm feeling gets heavier?",
        answer:
          "At the end of a session, you can mark how you feel; lighter, same, heavier, or unsure. If you mark heavier, a gentle check-in appears. Xolace won't leave you alone in the harder moments.",
      },
    ],
  },
]
