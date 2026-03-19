import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web3 & AI Security Services",
  description:
    "Smart contract audits, LLM red teaming, AI agent security, and blockchain infrastructure hardening. Offensive security research for Web3 and AI systems.",
  keywords: [
    "AI security audit",
    "LLM penetration testing",
    "prompt injection testing",
    "AI agent security",
    "web3 AI security",
    "smart contract audit",
    "RAG security audit",
    "on-chain AI agent audit",
    "MCP security review",
    "DeFi AI security",
  ],
  openGraph: {
    title: "Web3 & AI Security Services | Viper Offensive Security",
    description:
      "Smart contract audits, LLM red teaming, AI agent security, and blockchain infrastructure hardening. Offensive security research for Web3 and AI systems.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://viper-offsec.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://viper-offsec.com/services" },
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: { "@type": "Organization", name: "Viper Offensive Security Ltd" },
  serviceType: [
    "Smart Contract Auditing",
    "Red Team Operations",
    "Blockchain Infrastructure Security",
    "Security Architecture Review",
    "Vulnerability Research",
    "vCISO Advisory",
    "AI Security & LLM Red Teaming",
    "AI Agent Security",
    "AI-Augmented Smart Contract Audits",
    "Web3 AI Infrastructure Security",
  ],
  areaServed: "Worldwide",
  description: "Comprehensive offensive security services for the Web3 and AI ecosystems.",
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
