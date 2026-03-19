import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Viper Offensive Security for smart contract audits, red team operations, blockchain security assessments, and vulnerability research. Based in the Netherlands, serving clients globally.",
  openGraph: {
    title: "Contact | Viper Offensive Security",
    description:
      "Reach out for Web3 security audits, red team engagements, and blockchain security assessments.",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://viper-offsec.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://viper-offsec.com/contact" },
  ],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
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
