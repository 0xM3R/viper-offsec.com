import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for Viper Offensive Security Ltd. How we collect, use, and protect your data in compliance with UK GDPR and EU GDPR.",
};

function Divider() {
  return <div className="border-t border-zinc-800 my-8" />;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-lg font-semibold text-zinc-100 mt-10 mb-3">
      {children}
    </h2>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2 text-zinc-400 text-sm">
      <span className="text-emerald-400 shrink-0">&ndash;</span>
      <span>{children}</span>
    </li>
  );
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">
          {"// legal"}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Privacy Policy
        </h1>
        <p className="text-zinc-500 text-sm">Last updated: March 2026</p>

        <Divider />

        <H2>1. Who we are</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            Viper Offensive Security Ltd is a cybersecurity company
            registered in both the UK and Estonia:
          </p>
          <ul className="space-y-1.5 pl-1">
            <Bullet>Registered in England &amp; Wales (UK company registration)</Bullet>
            <Bullet>Registered in Estonia (EU company registration)</Bullet>
            <Bullet>Operating base: Netherlands</Bullet>
          </ul>
          <p>
            Registered address (UK): {/* TODO: insert UK registered address */}
          </p>
          <p>
            Operating contact:{" "}
            <a href="mailto:info@viper-offsec.com" className="text-zinc-300 hover:text-zinc-100 underline underline-offset-2 transition-colors">
              info@viper-offsec.com
            </a>
          </p>
          <p>
            Website:{" "}
            <Link href="/" className="text-zinc-300 hover:text-zinc-100 underline underline-offset-2 transition-colors">
              https://www.viper-offsec.com
            </Link>
          </p>
          <p>
            As a company with a presence in both the UK and the EU (Estonia,
            Netherlands), we are subject to both UK GDPR (as retained in UK
            law post-Brexit) and EU GDPR (Regulation 2016/679).
          </p>
        </div>

        <Divider />

        <H2>2. What data we collect</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            We collect personal data only when you voluntarily provide it
            through our contact form at{" "}
            <Link href="/contact" className="text-zinc-300 hover:text-zinc-100 underline underline-offset-2 transition-colors">
              viper-offsec.com/contact
            </Link>.
          </p>
          <p>Data collected via the contact form:</p>
          <ul className="space-y-1.5 pl-1">
            <Bullet>Full name</Bullet>
            <Bullet>Email address</Bullet>
            <Bullet>Company or protocol name</Bullet>
            <Bullet>Type of engagement and scope description</Bullet>
            <Bullet>Optional: timeline and budget range</Bullet>
          </ul>
          <p>
            We do not use cookies, tracking pixels, analytics scripts, or
            any third-party data collection on this website.
            No data is collected passively from visitors.
          </p>
        </div>

        <Divider />

        <H2>3. Why we collect it (legal basis)</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            We process your contact form data for the following purposes,
            each with a legal basis under UK GDPR Article 6 and EU GDPR
            Article 6:
          </p>
          <p>
            <span className="text-zinc-200 font-medium">Responding to your enquiry</span>
            <br />
            Legal basis: Legitimate interests (Article 6(1)(f)) &mdash; we
            have a legitimate interest in communicating with prospective
            clients who contact us directly.
          </p>
          <p>
            <span className="text-zinc-200 font-medium">Fulfilling a contracted engagement</span>
            <br />
            Legal basis: Contract performance (Article 6(1)(b)) &mdash; where
            an engagement is agreed, processing your data is necessary
            to deliver the contracted service.
          </p>
          <p>
            We do not process your data for marketing, profiling, or any
            purpose beyond responding to your enquiry and delivering
            contracted work.
          </p>
        </div>

        <Divider />

        <H2>4. How long we keep your data</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            <span className="text-zinc-200 font-medium">Enquiry data</span> (contact form
            submissions that do not lead to an engagement) is retained for a
            maximum of 12 months, then deleted.
          </p>
          <p>
            <span className="text-zinc-200 font-medium">Engagement data</span> (data related
            to a contracted project) is retained for 5 years from project
            completion, in line with professional services record-keeping
            requirements under UK, Dutch, and Estonian law.
          </p>
          <p>
            You may request deletion at any time &mdash; see Your Rights below.
          </p>
        </div>

        <Divider />

        <H2>5. Who we share your data with</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            We do not sell, rent, or share your personal data with third
            parties for their own purposes.
          </p>
          <p>
            Your data may be processed by the following categories of
            service provider acting as data processors on our behalf:
          </p>
          <ul className="space-y-1.5 pl-1">
            <Bullet>
              Email service provider (for receiving and responding to
              contact form submissions)
            </Bullet>
            <Bullet>
              Secure document storage (for delivering audit reports and
              engagement materials)
            </Bullet>
          </ul>
          <p>
            All processors are contractually required to process data only
            on our instructions and in compliance with UK GDPR and EU GDPR.
          </p>
          <p>
            <span className="text-zinc-200 font-medium">Cross-border transfers:</span> As we
            operate across the UK, the Netherlands, and Estonia, your data
            may be processed within these jurisdictions. The UK and EU
            maintain mutual adequacy arrangements. We do not transfer data
            to countries outside the UK or EEA without appropriate safeguards.
          </p>
        </div>

        <Divider />

        <H2>6. Your rights</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            Under UK GDPR and EU GDPR, you have the following rights:
          </p>
          <ul className="space-y-1.5 pl-1">
            <Bullet><span className="text-zinc-200">Right of access</span> &mdash; Request a copy of personal data we hold.</Bullet>
            <Bullet><span className="text-zinc-200">Right to rectification</span> &mdash; Request correction of inaccurate data.</Bullet>
            <Bullet><span className="text-zinc-200">Right to erasure</span> &mdash; Request deletion of your data, subject to legal retention obligations.</Bullet>
            <Bullet><span className="text-zinc-200">Right to restriction</span> &mdash; Request restricted processing in certain circumstances.</Bullet>
            <Bullet><span className="text-zinc-200">Right to object</span> &mdash; Object to processing based on legitimate interests.</Bullet>
            <Bullet><span className="text-zinc-200">Right to data portability</span> &mdash; Request your data in a structured, machine-readable format.</Bullet>
          </ul>
          <p>
            To exercise any of these rights, email{" "}
            <a href="mailto:info@viper-offsec.com" className="text-zinc-300 hover:text-zinc-100 underline underline-offset-2 transition-colors">
              info@viper-offsec.com
            </a>
            . We will respond within 30 days.
          </p>
          <p>
            If you are unsatisfied with our response, you have the right
            to lodge a complaint with your relevant supervisory authority:
          </p>
          <ul className="space-y-1.5 pl-1">
            <Bullet>UK &mdash; Information Commissioner&rsquo;s Office (ICO) &mdash; ico.org.uk</Bullet>
            <Bullet>Netherlands &mdash; Autoriteit Persoonsgegevens &mdash; autoriteitpersoonsgegevens.nl</Bullet>
            <Bullet>Estonia &mdash; Andmekaitse Inspektsioon (AKI) &mdash; aki.ee</Bullet>
          </ul>
        </div>

        <Divider />

        <H2>7. Security</H2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          As an offensive security firm, we apply rigorous security
          standards to our own infrastructure. Contact form submissions
          are transmitted over TLS-encrypted connections. Stored data
          is access-controlled and encrypted at rest.
        </p>

        <Divider />

        <H2>8. Changes to this policy</H2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          We may update this policy from time to time. The date at the
          top of this page reflects the most recent revision.
        </p>

        <Divider />

        <H2>9. Contact</H2>
        <div className="text-zinc-400 text-sm leading-relaxed space-y-1">
          <p>Viper Offensive Security Ltd</p>
          <p>
            <a href="mailto:info@viper-offsec.com" className="text-zinc-300 hover:text-zinc-100 underline underline-offset-2 transition-colors">
              info@viper-offsec.com
            </a>
          </p>
          <p>
            <Link href="/" className="text-zinc-300 hover:text-zinc-100 underline underline-offset-2 transition-colors">
              https://www.viper-offsec.com
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
