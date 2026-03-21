import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of service for Viper Offensive Security Ltd. Governing law, engagement terms, confidentiality, and authorisation for security testing services.",
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

export default function TermsPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-6">
        <p className="font-mono text-xs tracking-widest text-zinc-500 uppercase mb-3">
          {"// legal"}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight mb-2">
          Terms of Service
        </h1>
        <p className="text-zinc-500 text-sm">Last updated: March 2026</p>

        <Divider />

        <H2>1. Overview</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            These terms govern use of viper-offsec.com and any engagement
            of security services provided by Viper Offensive Security Ltd.
          </p>
          <p>
            Viper Offensive Security Ltd is registered in both England &amp; Wales
            and Estonia, with operational presence in the Netherlands.
          </p>
          <p>
            By using this website or engaging our services, you agree to
            these terms.
          </p>
        </div>

        <Divider />

        <H2>2. Website use</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>This website is provided for informational purposes. You may not use it to:</p>
          <ul className="space-y-1.5 pl-1">
            <Bullet>Attempt to gain unauthorised access to any system</Bullet>
            <Bullet>Scrape, harvest, or index content without permission</Bullet>
            <Bullet>Misrepresent your identity when using the contact form</Bullet>
          </ul>
          <p>
            We reserve the right to block access to users who violate
            these terms.
          </p>
        </div>

        <Divider />

        <H2>3. Security services</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            All security engagements are governed by a written Statement
            of Work (SoW) agreed and signed before any work begins.
          </p>
          <p>The SoW defines:</p>
          <ul className="space-y-1.5 pl-1">
            <Bullet>Scope &mdash; systems, networks, or codebases in scope</Bullet>
            <Bullet>Out-of-scope &mdash; explicitly excluded targets</Bullet>
            <Bullet>Duration and timeline</Bullet>
            <Bullet>Deliverables and reporting format</Bullet>
            <Bullet>Fees and payment terms</Bullet>
          </ul>
          <p>
            No testing activity takes place outside the agreed scope.
            All findings are reported to the client. We do not disclose
            client findings to third parties without explicit written
            consent.
          </p>
        </div>

        <Divider />

        <H2>4. Authorisation</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            All penetration testing, red team operations, and security
            assessments are conducted only with explicit written
            authorisation from the system owner or their authorised
            representative.
          </p>
          <p>
            Viper Offensive Security Ltd operates within the legal
            frameworks of:
          </p>
          <ul className="space-y-1.5 pl-1">
            <Bullet>UK Computer Misuse Act 1990 (England &amp; Wales)</Bullet>
            <Bullet>Dutch Computer Crime Act &mdash; Wet Computercriminaliteit (Netherlands)</Bullet>
            <Bullet>Estonian Penal Code &sect; 206&ndash;217 &mdash; computer-related offences (Estonia)</Bullet>
            <Bullet>Any applicable local laws in the client&rsquo;s jurisdiction</Bullet>
          </ul>
          <p>
            Clients are responsible for ensuring they hold the authority
            to commission testing on all systems within the agreed scope.
          </p>
        </div>

        <Divider />

        <H2>5. Confidentiality</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            All client information, codebases, findings, and engagement
            details are treated as strictly confidential.
          </p>
          <p>
            We do not disclose client names, project details, or findings
            without explicit written permission.
          </p>
          <p>
            NDAs are available on request and are standard practice for
            all engagements.
          </p>
          <p>
            Publication of any audit report requires the client&rsquo;s written
            consent. Where reports are published, client-specific
            operational details are redacted at the client&rsquo;s discretion.
          </p>
        </div>

        <Divider />

        <H2>6. Intellectual property</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            Research, tools, and methodologies developed by Viper
            Offensive Security Ltd remain our intellectual property
            unless explicitly transferred in a signed written agreement.
          </p>
          <p>
            Audit reports delivered to clients are licensed to the client
            for their internal use. Clients may publish reports publicly
            with our prior written consent.
          </p>
          <p>
            Custom tooling developed specifically for a client engagement
            is governed by the relevant SoW.
          </p>
        </div>

        <Divider />

        <H2>7. Liability</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            Our liability for any engagement is limited to the fees paid
            for that specific engagement, to the maximum extent permitted
            by applicable law.
          </p>
          <p>
            Security testing carries inherent operational risk. We take
            all reasonable precautions to minimise disruption. Scope,
            rules of engagement, and risk mitigation procedures are agreed
            in writing before testing begins.
          </p>
          <p>
            We are not liable for pre-existing vulnerabilities, third-party
            system failures, or consequences arising from vulnerabilities
            that were in scope but not discovered during the engagement.
          </p>
        </div>

        <Divider />

        <H2>8. Governing law and jurisdiction</H2>
        <div className="space-y-3 text-zinc-400 text-sm leading-relaxed">
          <p>
            These terms are governed by the laws of England &amp; Wales.
          </p>
          <p>
            For clients based in the European Union, EU consumer and
            contract law may apply in addition to these terms where
            required by mandatory local law. Our EU operational presence
            is in Estonia and the Netherlands.
          </p>
          <p>
            Any disputes shall be subject to the jurisdiction of the
            courts of England &amp; Wales as the primary forum, unless
            otherwise agreed in writing or required by mandatory EU law.
          </p>
        </div>

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
