import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Viper Offensive Security | Offensive Security Engineer — Web3, Pentesting & Red Team",
    template: "%s | Viper Offensive Security",
  },
  description:
    "Hands-on offensive security engineer with 15+ years experience. Smart contract audits, penetration testing, red team operations, and AI security — across Web3 protocols and Web2 infrastructure. DEF CON speaker. Based in the Netherlands.",
  keywords: [
    "offensive security engineer",
    "penetration testing",
    "red team operations",
    "smart contract audit",
    "web3 security",
    "web application penetration testing",
    "blockchain security",
    "AI security",
    "vulnerability research",
    "DEF CON",
    "TIBER-EU",
    "bug bounty",
  ],
  authors: [{ name: "Omer Coskun" }],
  creator: "Viper Offensive Security Ltd",
  metadataBase: new URL("https://www.viper-offsec.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.viper-offsec.com",
    siteName: "Viper Offensive Security",
    title: "Viper Offensive Security | Offensive Security Engineer",
    description:
      "Hands-on offensive security across Web3 and Web2. Smart contract audits, red team, pentesting, AI security.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Viper Offensive Security" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viper Offensive Security | Offensive Security Engineer",
    description:
      "Smart contract audits, red team, pentesting, AI security. Web3-native. Web2-capable.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="alternate" hrefLang="en" href="https://www.viper-offsec.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Viper Offensive Security",
                  url: "https://www.viper-offsec.com",
                  description:
                    "Hands-on offensive security engineering firm specialising in Web3 security, smart contract audits, penetration testing, red team operations, and AI security.",
                  foundingLocation: "Netherlands",
                  sameAs: ["https://github.com/viper-offsec"],
                  knowsAbout: [
                    "Offensive Security",
                    "Penetration Testing",
                    "Red Team Operations",
                    "Smart Contract Auditing",
                    "Web3 Security",
                    "AI Security",
                    "Vulnerability Research",
                    "Blockchain Infrastructure Security",
                  ],
                },
                {
                  "@type": "Person",
                  name: "Viper Offensive Security",
                  jobTitle: "Offensive Security Engineer",
                  worksFor: { "@type": "Organization", name: "Viper Offensive Security" },
                  knowsAbout: ["Web3 Security", "Penetration Testing", "Red Team", "Smart Contracts", "AI Security"],
                  hasCredential: ["DEF CON Speaker", "Infiltrate Speaker"],
                },
                {
                  "@type": "Service",
                  name: "Smart Contract Security Audit",
                  provider: { "@type": "Organization", name: "Viper Offensive Security" },
                  description:
                    "Manual smart contract audits for EVM, Rust, and Cairo. Covers Ethereum, Arbitrum, Base, Solana, and 10+ chains.",
                },
                {
                  "@type": "Service",
                  name: "Penetration Testing",
                  provider: { "@type": "Organization", name: "Viper Offensive Security" },
                  description:
                    "Web application, API, network, and mobile penetration testing for Web3 and Web2 organizations.",
                },
                {
                  "@type": "Service",
                  name: "Red Team Operations",
                  provider: { "@type": "Organization", name: "Viper Offensive Security" },
                  description:
                    "Full-scope adversary simulation including external network attacks, social engineering, and physical intrusion. TIBER-EU aligned.",
                },
                {
                  "@type": "Service",
                  name: "AI Security & LLM Red Teaming",
                  provider: { "@type": "Organization", name: "Viper Offensive Security" },
                  description:
                    "Offensive security assessment of LLM systems, AI agents, RAG pipelines, and on-chain AI infrastructure.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
