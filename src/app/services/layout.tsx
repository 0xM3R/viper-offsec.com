import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security Services | Penetration Testing, Red Team & Web3 Audits",
  description:
    "Offensive security services: smart contract audits, penetration testing, red team operations, AI security, and vulnerability research. Web3-native. Web2-capable. Hands-on engineer, not a checkbox report.",
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
    "penetration testing",
    "web application security",
    "red team operations",
  ],
  openGraph: {
    title: "Security Services | Viper Offensive Security",
    description:
      "Offensive security services: smart contract audits, penetration testing, red team operations, AI security, and vulnerability research.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.viper-offsec.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.viper-offsec.com/services" },
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
    "Web Application Penetration Testing",
    "Network Penetration Testing",
    "Mobile Application Security",
  ],
  areaServed: "Worldwide",
  description: "Hands-on offensive security services across Web3 and Web2.",
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
