import { cn } from "@/lib/utils"
import { ReactNode } from "react"

interface SectionProps {
  id: string
  index: string
  title: string
  children: ReactNode
  className?: string
}

function Section({ id, index, title, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-32 border-b border-border pb-14 last:border-0 last:pb-0",
        className
      )}
    >
      <div className="mb-6 flex items-baseline gap-4">
        <span className="shrink-0 font-mono text-[10px] tracking-[0.15em] text-muted-foreground tabular-nums">
          {index}
        </span>
        <h2 className="text-xl leading-snug font-medium md:text-2xl">
          {title}
        </h2>
      </div>
      <div className="space-y-4 pl-10">{children}</div>
    </section>
  )
}

function Body({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "font-serif text-[15px] leading-[1.85] text-muted-foreground md:text-base",
        className
      )}
    >
      {children}
    </p>
  )
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="pt-4 pb-1 font-mono text-[11px] tracking-[0.12em] text-foreground uppercase">
      {children}
    </h3>
  )
}

function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="my-2 rounded-r-lg border-l-4 border-primary bg-primary/5 px-5 py-4">
      <p className="font-serif text-[14px] leading-relaxed text-foreground/80">
        {children}
      </p>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-[7px] size-1 shrink-0 rounded-full bg-primary" />
          <span className="font-serif text-[15px] leading-[1.85] text-muted-foreground md:text-base">
            {item}
          </span>
        </li>
      ))}
    </ul>
  )
}

export function PrivacyContent() {
  return (
    <div className="space-y-14">
      {/* 1. Introduction */}
      <Section id="introduction" index="01" title="Introduction">
        <Body>
          Xolace (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
          provides a digital platform designed to help individuals process and
          better understand their emotions.
        </Body>
        <Body>
          Your privacy is central to how Xolace is designed and operated. This
          Privacy Policy explains what information we collect, how we use it,
          how we protect it, and your rights and choices.
        </Body>
        <Body>
          By using Xolace, you agree to the collection and use of information in
          accordance with this Privacy Policy.
        </Body>
      </Section>

      {/* 2. What Xolace Does */}
      <Section id="what-xolace-does" index="02" title="What Xolace Does">
        <Body>
          Xolace allows users to express what they are feeling and receive
          AI-generated reflections intended to help articulate those emotions.
        </Body>
        <Notice>
          Xolace is not a healthcare provider and does not provide medical
          advice, diagnosis, or treatment. Nothing within the platform should be
          interpreted as therapeutic guidance.
        </Notice>
      </Section>

      {/* 3. Information We Collect */}
      <Section
        id="information-we-collect"
        index="03"
        title="Information We Collect"
      >
        <Body>We collect the following categories of information:</Body>

        <SubHeading>A. Account Information</SubHeading>
        <Body>When you create an account, we may collect:</Body>
        <List
          items={["Authentication identifiers (e.g., Google account ID)"]}
        />

        <SubHeading>
          B. Emotional Input (&quot;Reflection Data&quot;)
        </SubHeading>
        <Body>
          When you use Xolace, we collect the information you choose to share,
          including:
        </Body>
        <List
          items={[
            "Text you write in response to prompts",
            'Selected emotion or "texture" tags',
            'Responses during refinement (e.g., "Not quite," "Say more")',
          ]}
        />
        <Notice>
          This information may contain sensitive personal information depending
          on what you choose to share. We treat it with the highest level of
          care.
        </Notice>

        <SubHeading>C. AI-Generated Data</SubHeading>
        <Body>We generate and store:</Body>
        <List
          items={[
            "AI reflections (mirrors of your input)",
            "Emotion classifications (e.g., themes, intensity levels)",
            "Session metadata (e.g., duration, interaction flow)",
          ]}
        />

        <SubHeading>D. Usage Data</SubHeading>
        <Body>
          We automatically collect information about how you use Xolace,
          including:
        </Body>
        <List
          items={[
            "Session frequency and duration",
            "Features used (e.g., exercises, peer reflections)",
            "Interaction patterns",
          ]}
        />

        <SubHeading>E. Device & Technical Information</SubHeading>
        <List
          items={[
            "Device type and operating system",
            "App version",
          ]}
        />

        <SubHeading>F. Optional Contributions (Peer Reflections)</SubHeading>
        <Body>If you choose to contribute content anonymously:</Body>
        <List
          items={[
            "Your reflection may be processed and included in a shared pool",
            "Direct identifiers are removed or reduced before inclusion",
          ]}
        />

        <SubHeading>G. Crash & Error Telemetry</SubHeading>
        <Body>
          We use Sentry to capture crashes and errors so we can diagnose and fix
          them. Sentry collects:
        </Body>
        <List
          items={[
            "Stack traces and error details",
            "Device type, OS version, and app version",
            "Interaction breadcrumbs leading up to a crash",
            "Session replays on production builds — all text and images are masked before transmission",
          ]}
        />
        <Body>
          Sentry&apos;s default IP address collection is disabled; your IP is
          not stored. This data is never used for advertising.
        </Body>
      </Section>

      {/* 4. How We Use Your Information */}
      <Section
        id="how-we-use-your-information"
        index="04"
        title="How We Use Your Information"
      >
        <SubHeading>Core Functionality</SubHeading>
        <List
          items={[
            "Process your emotional input",
            "Generate AI reflections",
            "Provide guided exercises and pathways",
          ]}
        />

        <SubHeading>Personalization</SubHeading>
        <List
          items={[
            "Improve relevance of reflections and exercises",
            "Understand general emotional patterns (at an aggregated level)",
          ]}
        />

        <SubHeading>Product Improvement</SubHeading>
        <List
          items={[
            "Improve AI models and system performance",
            "Analyze usage trends",
          ]}
        />

        <SubHeading>Safety & Integrity</SubHeading>
        <List
          items={[
            "Detect potentially harmful or high-risk situations",
            "Improve safeguards and system responses",
          ]}
        />

        <SubHeading>Communication</SubHeading>
        <List items={["Send service-related notifications (if enabled)"]} />
      </Section>

      {/* 5. AI Processing */}
      <Section id="ai-processing" index="05" title="AI Processing">
        <Body>
          Your text input is processed by{" "}
          <strong className="text-foreground">Anthropic (Claude)</strong> to
          generate reflections and insights, including automated analysis of
          text, classification of emotional themes, and generation of short
          reflective responses. Voice features use{" "}
          <strong className="text-foreground">ElevenLabs</strong> for audio
          generation. Your data is not used to train third-party AI models.
        </Body>
        <Notice>
          We do not use your data to make decisions that produce legal or
          similarly significant effects on you.
        </Notice>
      </Section>

      {/* 6. Data Sharing */}
      <Section id="data-sharing" index="06" title="Data Sharing">
        <Notice>We do not sell your personal data. Full stop.</Notice>
        <Body>
          We may share information only in the following limited cases:
        </Body>

        <SubHeading>A. Service Providers (Sub-processors)</SubHeading>
        <Body>
          We work with the following trusted third parties to operate Xolace.
          Each processes only the data necessary for their function and is
          contractually required to protect your data:
        </Body>
        <List
          items={[
            "Anthropic — AI reflection generation",
            "Convex — database and backend infrastructure",
            "Clerk — authentication",
            "ElevenLabs — voice audio generation",
            "PostHog — product analytics",
            "Sentry — crash and error monitoring",
            "Apple / Google — sign-in",
          ]}
        />

        <SubHeading>B. Anonymized or Aggregated Data</SubHeading>
        <Body>
          We may use anonymized or aggregated data to improve the platform,
          conduct research, or understand general usage patterns. This data is
          processed to reduce the likelihood of identifying individuals.
        </Body>

        <SubHeading>C. Legal Requirements</SubHeading>
        <Body>
          We may disclose information if required to comply with applicable
          laws, respond to legal requests, or protect the rights and safety of
          users or others.
        </Body>
      </Section>

      {/* 7. Data Retention */}
      <Section id="data-retention" index="07" title="Data Retention">
        <Body>
          We retain your information only as long as necessary to provide the
          service and fulfill the purposes described in this policy.
        </Body>
        <List
          items={[
            "Session data may be retained according to your account settings",
            "Some anonymized data may be retained for research and system improvement",
          ]}
        />
        <Notice>
          <strong>Safety event exception:</strong> If the app detected a
          potential safety concern during a session, a fully anonymised record
          of that event is retained indefinitely for safety auditing purposes.
          This record contains no text you wrote, no name, and no account
          reference — it cannot be linked back to you. It is the only data that
          survives account deletion.
        </Notice>
        <Body>
          You may request deletion of your account and all other associated data
          at any time (see Section 10).
        </Body>
      </Section>

      {/* 8. Data Security */}
      <Section id="data-security" index="08" title="Data Security">
        <Body>
          We implement safeguards designed to protect your information,
          including:
        </Body>
        <List
          items={[
            "Encryption of sensitive data in transit and at rest",
            "Access controls and authentication measures",
            "Secure infrastructure practices",
          ]}
        />
        <Body>
          However, no system is completely secure, and we cannot guarantee
          absolute security. We will notify you promptly in the event of any
          breach that affects your data.
        </Body>
      </Section>

      {/* 9. Your Choices */}
      <Section id="your-choices" index="09" title="Your Choices">
        <SubHeading>A. Access & Deletion</SubHeading>
        <Body>
          You may request access to your data or request deletion of your
          account and associated data.
        </Body>

        <SubHeading>B. Contribution Control</SubHeading>
        <Body>
          You can choose whether your reflections are kept private or shared
          anonymously. This is entirely in your control.
        </Body>

        <SubHeading>C. Notifications</SubHeading>
        <Body>
          You can enable or disable notifications at any time in your settings.
        </Body>

        <SubHeading>D. Data Usage for Improvement</SubHeading>
        <Body>
          Where applicable, you may opt in or out of having your data used to
          improve the platform.
        </Body>
      </Section>

      {/* 10. Your Rights */}
      <Section id="your-rights" index="10" title="Your Rights">
        <Body>Depending on your location, you may have the right to:</Body>
        <List
          items={[
            "Access or correct your personal data",
            "Delete your account and all associated data",
            "Withdraw optional consent (anonymous sharing, notifications) at any time from Settings",
            "Restrict or object to certain processing",
          ]}
        />
        <Body>
          To exercise your rights, contact us at{" "}
          <a
            href="mailto:privacy@xolace.app"
            className="text-primary underline-offset-4 hover:underline"
          >
            privacy@xolace.app
          </a>
          . We will respond within the timeframe required by applicable law.
        </Body>
      </Section>

      {/* 11. Children's Privacy */}
      <Section id="childrens-privacy" index="11" title="Children's Privacy">
        <Body>
          Xolace is not intended for individuals under the age of 13 (or the
          applicable minimum age in your jurisdiction). We do not knowingly
          collect personal data from children.
        </Body>
        <Body>
          If you believe we have inadvertently collected data from a child,
          please contact us immediately and we will take steps to delete it.
        </Body>
      </Section>

      {/* 12. International Data Transfers */}
      <Section
        id="international-transfers"
        index="12"
        title="International Data Transfers"
      >
        <Body>
          Your information may be processed and stored in countries outside your
          own. We take steps to ensure appropriate safeguards are in place to
          protect your data in accordance with applicable data protection laws.
        </Body>
      </Section>

      {/* 13. Changes to This Policy */}
      <Section id="changes" index="13" title="Changes to This Policy">
        <Body>
          We may update this Privacy Policy from time to time. If we make
          significant changes, we will notify you through the app or by other
          appropriate means before the changes take effect.
        </Body>
        <Body>
          Your continued use of Xolace after changes become effective
          constitutes your acceptance of the updated policy.
        </Body>
      </Section>

      {/* 14. Contact Us */}
      <Section id="contact" index="14" title="Contact Us">
        <Body>
          If you have questions about this Privacy Policy or your data,
          we&apos;re here to help.
        </Body>
        <div className="mt-2 space-y-2 rounded-xl border border-border bg-card p-5">
          <p className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
            Get in touch
          </p>
          <a
            href="mailto:privacy@xolace.app"
            className="block text-sm font-medium text-primary underline-offset-4 transition-colors hover:underline"
          >
            privacy@xolace.app
          </a>
          <p className="font-serif text-xs text-muted-foreground">
            We aim to respond to all privacy inquiries within 5 business days.
          </p>
        </div>
      </Section>
    </div>
  )
}
