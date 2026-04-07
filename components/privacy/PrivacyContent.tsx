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
      className={cn("scroll-mt-32 pb-14 border-b border-border last:border-0 last:pb-0", className)}
    >
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-[10px] font-mono text-muted-foreground tracking-[0.15em] shrink-0 tabular-nums">
          {index}
        </span>
        <h2 className="text-xl md:text-2xl font-medium leading-snug">{title}</h2>
      </div>
      <div className="pl-10 space-y-4">{children}</div>
    </section>
  )
}

function Body({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("font-serif text-[15px] md:text-base text-muted-foreground leading-[1.85]", className)}>
      {children}
    </p>
  )
}

function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-[11px] font-mono uppercase tracking-[0.12em] text-foreground pt-4 pb-1">
      {children}
    </h3>
  )
}

function Notice({ children }: { children: ReactNode }) {
  return (
    <div className="border-l-4 border-primary bg-primary/5 rounded-r-lg px-5 py-4 my-2">
      <p className="font-serif text-[14px] leading-relaxed text-foreground/80">{children}</p>
    </div>
  )
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-[7px] size-1 rounded-full bg-primary shrink-0" />
          <span className="font-serif text-[15px] md:text-base text-muted-foreground leading-[1.85]">
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
          Xolace (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) provides a digital platform designed to help
          individuals process and better understand their emotions.
        </Body>
        <Body>
          Your privacy is central to how Xolace is designed and operated. This Privacy Policy explains
          what information we collect, how we use it, how we protect it, and your rights and choices.
        </Body>
        <Body>
          By using Xolace, you agree to the collection and use of information in accordance with this
          Privacy Policy.
        </Body>
      </Section>

      {/* 2. What Xolace Does */}
      <Section id="what-xolace-does" index="02" title="What Xolace Does">
        <Body>
          Xolace allows users to express what they are feeling and receive AI-generated reflections
          intended to help articulate those emotions.
        </Body>
        <Notice>
          Xolace is not a healthcare provider and does not provide medical advice, diagnosis, or
          treatment. Nothing within the platform should be interpreted as therapeutic guidance.
        </Notice>
      </Section>

      {/* 3. Information We Collect */}
      <Section id="information-we-collect" index="03" title="Information We Collect">
        <Body>We collect the following categories of information:</Body>

        <SubHeading>A. Account Information</SubHeading>
        <Body>When you create an account, we may collect:</Body>
        <List
          items={[
            "Name (if provided through authentication providers)",
            "Email address",
            "Authentication identifiers (e.g., Google account ID)",
          ]}
        />

        <SubHeading>B. Emotional Input ("Reflection Data")</SubHeading>
        <Body>
          When you use Xolace, we collect the information you choose to share, including:
        </Body>
        <List
          items={[
            "Text you write in response to prompts",
            "Selected emotion or \"texture\" tags",
            "Responses during refinement (e.g., \"Not quite,\" \"Say more\")",
          ]}
        />
        <Notice>
          This information may contain sensitive personal information depending on what you choose to
          share. We treat it with the highest level of care.
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
        <Body>We automatically collect information about how you use Xolace, including:</Body>
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
            "IP address (used to estimate general location)",
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
      </Section>

      {/* 4. How We Use Your Information */}
      <Section id="how-we-use-your-information" index="04" title="How We Use Your Information">
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
          Your input is processed using artificial intelligence systems to generate reflections and
          insights. This may involve automated analysis of text, classification of emotional themes, and
          generation of short reflective responses.
        </Body>
        <Notice>
          We do not use your data to make decisions that produce legal or similarly significant effects
          on you.
        </Notice>
      </Section>

      {/* 6. Data Sharing */}
      <Section id="data-sharing" index="06" title="Data Sharing">
        <Notice>We do not sell your personal data. Full stop.</Notice>
        <Body>We may share information only in the following limited cases:</Body>

        <SubHeading>A. Service Providers</SubHeading>
        <Body>
          We work with trusted third parties to operate Xolace — such as cloud hosting providers, AI
          processing providers, and analytics tools. These providers are contractually required to
          protect your data and may not use it for their own purposes.
        </Body>

        <SubHeading>B. Anonymized or Aggregated Data</SubHeading>
        <Body>
          We may use anonymized or aggregated data to improve the platform, conduct research, or
          understand general usage patterns. This data is processed to reduce the likelihood of
          identifying individuals.
        </Body>

        <SubHeading>C. Legal Requirements</SubHeading>
        <Body>
          We may disclose information if required to comply with applicable laws, respond to legal
          requests, or protect the rights and safety of users or others.
        </Body>
      </Section>

      {/* 7. Data Retention */}
      <Section id="data-retention" index="07" title="Data Retention">
        <Body>
          We retain your information only as long as necessary to provide the service and fulfill the
          purposes described in this policy.
        </Body>
        <List
          items={[
            "Session data may be retained according to your account settings",
            "Some anonymized data may be retained for research and system improvement",
            "Safety-related records may be retained to improve platform integrity",
          ]}
        />
        <Body>You may request deletion of your data at any time (see Section 10).</Body>
      </Section>

      {/* 8. Data Security */}
      <Section id="data-security" index="08" title="Data Security">
        <Body>We implement safeguards designed to protect your information, including:</Body>
        <List
          items={[
            "Encryption of sensitive data in transit and at rest",
            "Access controls and authentication measures",
            "Secure infrastructure practices",
          ]}
        />
        <Body>
          However, no system is completely secure, and we cannot guarantee absolute security. We will
          notify you promptly in the event of any breach that affects your data.
        </Body>
      </Section>

      {/* 9. Your Choices */}
      <Section id="your-choices" index="09" title="Your Choices">
        <SubHeading>A. Access & Deletion</SubHeading>
        <Body>You may request access to your data or request deletion of your account and associated data.</Body>

        <SubHeading>B. Contribution Control</SubHeading>
        <Body>
          You can choose whether your reflections are kept private or shared anonymously. This is
          entirely in your control.
        </Body>

        <SubHeading>C. Notifications</SubHeading>
        <Body>You can enable or disable notifications at any time in your settings.</Body>

        <SubHeading>D. Data Usage for Improvement</SubHeading>
        <Body>
          Where applicable, you may opt in or out of having your data used to improve the platform.
        </Body>
      </Section>

      {/* 10. Your Rights */}
      <Section id="your-rights" index="10" title="Your Rights">
        <Body>Depending on your location, you may have the right to:</Body>
        <List
          items={[
            "Access your personal data",
            "Correct inaccurate data",
            "Request deletion of your data",
            "Restrict or object to certain processing",
            "Request data portability",
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
          Xolace is not intended for individuals under the age of 13 (or the applicable minimum age in
          your jurisdiction). We do not knowingly collect personal data from children.
        </Body>
        <Body>
          If you believe we have inadvertently collected data from a child, please contact us
          immediately and we will take steps to delete it.
        </Body>
      </Section>

      {/* 12. International Data Transfers */}
      <Section id="international-transfers" index="12" title="International Data Transfers">
        <Body>
          Your information may be processed and stored in countries outside your own. We take steps to
          ensure appropriate safeguards are in place to protect your data in accordance with applicable
          data protection laws.
        </Body>
      </Section>

      {/* 13. Changes to This Policy */}
      <Section id="changes" index="13" title="Changes to This Policy">
        <Body>
          We may update this Privacy Policy from time to time. If we make significant changes, we will
          notify you through the app or by other appropriate means before the changes take effect.
        </Body>
        <Body>
          Your continued use of Xolace after changes become effective constitutes your acceptance of
          the updated policy.
        </Body>
      </Section>

      {/* 14. Contact Us */}
      <Section id="contact" index="14" title="Contact Us">
        <Body>
          If you have questions about this Privacy Policy or your data, we&apos;re here to help.
        </Body>
        <div className="mt-2 p-5 border border-border rounded-xl space-y-2 bg-card">
          <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">
            Get in touch
          </p>
          <a
            href="mailto:privacy@xolace.app"
            className="block text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
          >
            privacy@xolace.app
          </a>
          <p className="text-xs text-muted-foreground font-serif">
            We aim to respond to all privacy inquiries within 5 business days.
          </p>
        </div>
      </Section>
    </div>
  )
}
