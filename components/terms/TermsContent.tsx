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

function Notice({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "warning" }) {
  return (
    <div className={cn(
      "border-l-4 rounded-r-lg px-5 py-4 my-2",
      variant === "warning"
        ? "border-destructive bg-destructive/5"
        : "border-primary bg-primary/5"
    )}>
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

export function TermsContent() {
  return (
    <div className="space-y-14">
      {/* Crisis Notice — always first */}
      <div className="border-l-4 border-destructive bg-destructive/5 rounded-r-lg px-5 py-5 -mt-2 mb-2">
        <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-destructive mb-2">
          Important Notice
        </p>
        <p className="font-serif text-[14px] leading-relaxed text-foreground/80">
          Xolace does not provide medical, mental health, or crisis services. If you are experiencing
          a crisis, feel unsafe, or need immediate support, contact your local emergency services or a
          licensed professional immediately. Xolace is designed for self-reflection and emotional
          processing — not diagnosis, treatment, or intervention.
        </p>
      </div>

      {/* 1. Acceptance of Terms */}
      <Section id="acceptance" index="01" title="Acceptance of Terms">
        <Body>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Xolace
          application, website, and related services (collectively, the &ldquo;Service&rdquo;), operated
          by Xolace (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
        </Body>
        <Body>
          By accessing or using Xolace, you agree to these Terms. If you do not agree, do not use
          the Service.
        </Body>
      </Section>

      {/* 2. What Xolace Is */}
      <Section id="what-xolace-is" index="02" title="What Xolace Is (and Is Not)">
        <SubHeading>What Xolace Is</SubHeading>
        <Body>Xolace is a personal emotional processing tool that helps you:</Body>
        <List
          items={[
            "Express what you're feeling",
            "Receive AI-generated reflections",
            "Engage in optional guided exercises",
            "See anonymized emotional patterns from others",
          ]}
        />

        <SubHeading>What Xolace Is NOT</SubHeading>
        <List
          items={[
            "A healthcare provider",
            "A therapist, counselor, or medical service",
            "A crisis intervention tool",
            "A social network or public platform",
            "A chatbot or conversational AI companion",
          ]}
        />
        <Notice>
          Use of Xolace does not create a doctor-patient or therapist-client relationship.
        </Notice>
      </Section>

      {/* 3. Eligibility */}
      <Section id="eligibility" index="03" title="Eligibility">
        <Body>To use Xolace, you must:</Body>
        <List
          items={[
            "Be at least 13 years old (or the minimum age required in your jurisdiction)",
            "Have the legal capacity to agree to these Terms",
          ]}
        />
        <Body>
          If you are under the age of majority in your jurisdiction, you must have parental or
          guardian consent to use Xolace.
        </Body>
      </Section>

      {/* 4. User Responsibilities */}
      <Section id="user-responsibilities" index="04" title="User Responsibilities">
        <Body>You agree to:</Body>
        <List
          items={[
            "Use Xolace only for lawful, personal purposes",
            "Provide accurate information when required",
            "Not misuse the Service or attempt to disrupt it",
            "Not use automated systems (bots, scrapers, etc.)",
            "Not attempt to reverse-engineer or exploit the platform",
          ]}
        />
        <Body>You are responsible for all activity under your account.</Body>
      </Section>

      {/* 5. Emotional Safety */}
      <Section id="emotional-safety" index="05" title="Emotional Safety & Acknowledgement">
        <Body>By using Xolace, you acknowledge:</Body>
        <List
          items={[
            "The Service may surface difficult or intense emotions",
            "AI-generated reflections may not always be accurate",
            "You are responsible for how you interpret and act on any output",
          ]}
        />
        <Body>You agree not to rely on Xolace for:</Body>
        <List
          items={[
            "Medical or mental health advice",
            "Crisis support",
            "Diagnosis or treatment decisions",
          ]}
        />
      </Section>

      {/* 6. AI-Generated Content */}
      <Section id="ai-content" index="06" title="AI-Generated Content Disclaimer">
        <Body>Xolace uses artificial intelligence to generate reflections.</Body>
        <Body>You understand and agree that:</Body>
        <List
          items={[
            "Outputs may be incomplete, imperfect, or incorrect",
            "AI reflections are not factual assertions or professional advice",
            "You should not rely on them for decision-making without independent judgment",
          ]}
        />
      </Section>

      {/* 7. Privacy & User Data */}
      <Section id="privacy-data" index="07" title="Privacy & User Data">
        <Body>
          Your use of Xolace is also governed by our{" "}
          <a href="/privacy" className="text-primary underline-offset-4 hover:underline">
            Privacy Policy
          </a>
          , which is incorporated into these Terms by reference.
        </Body>

        <SubHeading>Key Principles</SubHeading>
        <List
          items={[
            "Your entries belong to you",
            "We process data to provide and improve the Service",
            "Some data may be anonymized for system improvement",
          ]}
        />

        <SubHeading>By Using Xolace, You Consent To</SubHeading>
        <List
          items={[
            "Processing of your inputs to generate reflections",
            "Optional anonymized use of data for improving the system",
          ]}
        />
      </Section>

      {/* 8. License */}
      <Section id="license" index="08" title="License to Use the Service">
        <Body>
          We grant you a limited, non-exclusive, non-transferable license to use Xolace for personal,
          non-commercial use.
        </Body>
        <Body>You may not:</Body>
        <List
          items={[
            "Copy, modify, or distribute the Service",
            "Use it for commercial purposes",
            "Create derivative works",
          ]}
        />
        <Body>All rights not expressly granted remain with Xolace.</Body>
      </Section>

      {/* 9. User Content */}
      <Section id="user-content" index="09" title="User Content">
        <Body>
          You retain ownership of what you write (&ldquo;User Content&rdquo;). By using Xolace, you
          grant us a limited license to:
        </Body>
        <List
          items={[
            "Process your content to operate the Service",
            "Generate reflections and insights from your input",
            "Improve the system (only if you opt in)",
          ]}
        />
        <Notice>
          We do not treat your entries as public content. Your reflections are private by default.
        </Notice>
      </Section>

      {/* 10. Subscription & Payments */}
      <Section id="payments" index="10" title="Subscription & Payments">
        <Body>Some features may require payment. If applicable:</Body>
        <List
          items={[
            "Fees will be clearly disclosed before purchase",
            "Subscriptions may auto-renew unless cancelled before the renewal date",
            "Payments are generally non-refundable unless required by law",
          ]}
        />
      </Section>

      {/* 11. Termination */}
      <Section id="termination" index="11" title="Termination">
        <Body>We may suspend or terminate your access if:</Body>
        <List
          items={[
            "You violate these Terms",
            "Your use poses risk to the platform or other users",
          ]}
        />
        <Body>You may stop using Xolace at any time. Upon termination:</Body>
        <List
          items={[
            "Your access ends immediately",
            "Some data may be retained as required by law or system integrity",
          ]}
        />
      </Section>

      {/* 12. Disclaimer of Warranties */}
      <Section id="disclaimers" index="12" title="Disclaimer of Warranties">
        <Body>
          The Service is provided &ldquo;as is&rdquo; and &ldquo;as available.&rdquo; We do not guarantee that:
        </Body>
        <List
          items={[
            "The Service will be uninterrupted or error-free",
            "Outputs will be accurate or reliable",
            "The Service will meet your specific expectations",
          ]}
        />
        <Body>
          To the fullest extent permitted by law, we disclaim all warranties, express or implied,
          including implied warranties of merchantability and fitness for a particular purpose.
        </Body>
      </Section>

      {/* 13. Limitation of Liability */}
      <Section id="liability" index="13" title="Limitation of Liability">
        <Body>To the maximum extent permitted by law, Xolace shall not be liable for:</Body>
        <List
          items={[
            "Emotional distress arising from use of the Service",
            "Decisions made based on AI-generated reflections",
            "Indirect, incidental, or consequential damages",
          ]}
        />
        <Body>
          Our total liability will not exceed the amount you paid (if any) in the twelve months
          preceding the claim.
        </Body>
      </Section>

      {/* 14. Indemnification */}
      <Section id="indemnification" index="14" title="Indemnification">
        <Body>
          You agree to indemnify and hold Xolace harmless from any claims, damages, or expenses
          arising from:
        </Body>
        <List
          items={[
            "Your use of the Service",
            "Your violation of these Terms",
            "Your misuse of AI-generated outputs",
          ]}
        />
      </Section>

      {/* 15. Governing Law */}
      <Section id="governing-law" index="15" title="Governing Law">
        <Body>
          These Terms are governed by applicable law, without regard to conflict of law principles.
          We will specify the governing jurisdiction as Xolace establishes its legal entity.
        </Body>
      </Section>

      {/* 16. Dispute Resolution */}
      <Section id="disputes" index="16" title="Dispute Resolution">
        <Body>
          Any disputes will be resolved through binding arbitration on an individual basis, unless
          prohibited by law.
        </Body>
        <Body>By agreeing to these Terms, you waive the right to:</Body>
        <List items={["Jury trials", "Class action lawsuits"]} />
      </Section>

      {/* 17. Changes */}
      <Section id="changes" index="17" title="Changes to These Terms">
        <Body>
          We may update these Terms at any time. If we do, we will update the &ldquo;Last Updated&rdquo; date
          at the top of this page. Continued use of Xolace after changes take effect constitutes
          your acceptance of the updated Terms.
        </Body>
      </Section>

      {/* 18. Contact */}
      <Section id="contact" index="18" title="Contact">
        <Body>If you have questions about these Terms, we&apos;re here to help.</Body>
        <div className="mt-2 p-5 border border-border rounded-xl space-y-2 bg-card">
          <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-muted-foreground">
            Get in touch
          </p>
          <a
            href="mailto:legal@xolace.app"
            className="block text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors"
          >
            legal@xolace.app
          </a>
          <p className="text-xs text-muted-foreground font-serif">
            Xolace — a tool for seeing what you&apos;re carrying more clearly.
          </p>
        </div>
      </Section>
    </div>
  )
}
