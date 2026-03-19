import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Security research, vulnerability analysis, conference talks, and insights from Viper Offensive Security. Covering smart contracts, DeFi, Web3 infrastructure, and offensive security.",
  openGraph: {
    title: "Research | Viper Offensive Security",
    description:
      "Security research, vulnerability analysis, and insights from real-world Web3 security engagements.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://viper-offsec.com" },
    { "@type": "ListItem", position: 2, name: "Research", item: "https://viper-offsec.com/research" },
  ],
};

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
