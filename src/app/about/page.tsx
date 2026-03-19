import { Metadata } from "next";
import { Shield, Mic, Building, Globe, FileCheck } from "lucide-react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About",
  description:
    "Viper Offensive Security is a boutique Web3 security consultancy specializing in smart contract audits, red team operations, and blockchain infrastructure security. Every engagement is led by a senior researcher.",
};

const credentials = [
  { icon: Shield, text: "15+ years offensive security experience" },
  { icon: Mic, text: "Presented at DEF CON and Infiltrate" },
  {
    icon: Building,
    text: "Former: Netherlands Forensic Institute, European unicorn security lead, national telecom security",
  },
  {
    icon: Globe,
    text: "Web3 clients: L1/L2 chains, DeFi protocols, cross-chain bridges, wallets",
  },
  { icon: FileCheck, text: "Registered: England & Estonia" },
];

export default function AboutPage() {
  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Built <span className="text-viper-green">Different.</span>
          </h1>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="max-w-3xl">
          <FadeIn>
            <div className="space-y-6 text-lg text-viper-gray-light leading-relaxed">
              <p>
                Viper Offensive Security is a boutique security consultancy specializing in
                Web3, blockchain infrastructure, and offensive security. We work with a small
                number of clients at a time&nbsp;&mdash; by design.
              </p>
              <p>
                Every engagement is led by a senior researcher, not handed off to a junior
                team. No account managers, no revolving door of analysts. When you hire Viper,
                you get the person who actually does the work.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="border-t border-viper-dark-border">
        <div className="max-w-3xl">
          <FadeIn>
            <h2 className="text-2xl font-bold text-foreground mb-8">Credentials</h2>
          </FadeIn>
          <ul className="space-y-5">
            {credentials.map((cred, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <li className="flex items-start gap-4">
                  <cred.icon className="h-5 w-5 text-viper-green mt-0.5 shrink-0" />
                  <span className="text-foreground">{cred.text}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="border-t border-viper-dark-border">
        <FadeIn>
          <div className="max-w-3xl">
            <div className="border-l-2 border-viper-green pl-6 md:pl-8">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed font-light italic">
                &ldquo;Most audits find what automated tools catch. We find what they
                miss.&rdquo;
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
