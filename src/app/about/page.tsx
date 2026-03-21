import { Metadata } from "next";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";

export const metadata: Metadata = {
  title: "About | Offensive Security Engineer, DEF CON Speaker",
  description:
    "15+ years hands-on offensive security. DEF CON and Infiltrate speaker. Former NFI, Bird, KPN. Web3 security specialist and penetration tester. Based in the Netherlands.",
};

const credentials = [
  "15+ years offensive security \u2014 embedded systems, Web3 protocol cores, enterprise networks, AI systems",
  "Presented at DEF CON and Infiltrate",
  "Former: Netherlands Forensic Institute, European unicorn security lead (Bird), national telecom security (KPN)",
  "Audited L1/L2 cores: ZetaChain (Cosmos SDK, Evmos, IBC), RootStock (RSKj VM, two-way peg), Linea L2 bridge (ZK-SNARK circuits, proof aggregation), TON, Solana, and Sui consensus and state transition logic",
  "Cryptographic primitive audits: Noise protocol, ephemeral key exchange, ratcheting \u2014 for Codex, Waku, Nomos, and Status Wallet (Rust, Nim, JS)",
  "Custom tooling: Slither detectors, Echidna, Medusa, Halmos, Certora \u2014 across EVM, Rust, and Cairo",
  "Registered: England & Wales \u00B7 Operating from the Netherlands",
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
                Viper Offensive Security is run by a hands-on offensive security
                engineer with over 15 years of practical attack experience&nbsp;&mdash;
                across embedded systems, Web3 protocols, enterprise networks,
                and AI systems.
              </p>
              <p>
                We work with a small number of clients at a time&nbsp;&mdash; by design.
                Every engagement is led by a senior engineer, not handed off to a junior
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
          <ul className="space-y-3 text-zinc-400 text-sm">
            {credentials.map((cred, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <li className="flex gap-3">
                  <span className="text-emerald-400 font-mono mt-0.5">&rarr;</span>
                  <span>{cred}</span>
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
