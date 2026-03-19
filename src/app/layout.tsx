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
    default: "Viper Offensive Security — Web3 Security & Smart Contract Audits",
    template: "%s | Viper Offensive Security",
  },
  description:
    "Viper Offensive Security — boutique Web3 security firm. Smart contract audits, red team operations, and blockchain infrastructure security. Based in Netherlands.",
  keywords: [
    "Web3 security audit",
    "smart contract audit",
    "blockchain penetration testing",
    "DeFi security",
    "Solidity audit",
    "offensive security Web3",
    "red team operations",
    "blockchain security",
  ],
  authors: [{ name: "Omer Coskun" }],
  creator: "Viper Offensive Security Ltd",
  metadataBase: new URL("https://viper-offsec.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://viper-offsec.com",
    siteName: "Viper Offensive Security",
    title: "Viper Offensive Security — Web3 Security & Smart Contract Audits",
    description:
      "Boutique Web3 security consultancy specializing in smart contract audits, blockchain penetration testing, and red team operations.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Viper Offensive Security" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Viper Offensive Security — Web3 Security & Smart Contract Audits",
    description:
      "Boutique Web3 security consultancy specializing in smart contract audits, blockchain penetration testing, and red team operations.",
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
        <link rel="alternate" hrefLang="en" href="https://viper-offsec.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Viper Offensive Security Ltd",
              url: "https://viper-offsec.com",
              logo: "https://viper-offsec.com/logo.svg",
              description:
                "Boutique Web3 security consultancy specializing in smart contract audits, blockchain penetration testing, red team operations, and DeFi security.",
              founder: {
                "@type": "Person",
                name: "Omer Coskun",
                jobTitle: "Founder & Principal Consultant",
              },
              address: {
                "@type": "PostalAddress",
                addressCountry: "NL",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "info@viper-offsec.com",
                contactType: "sales",
              },
              sameAs: [],
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
