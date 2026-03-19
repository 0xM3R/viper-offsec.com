import { Metadata } from "next";
import { FileText, ArrowRight } from "lucide-react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { auditReports } from "@/data/reports";

export const metadata: Metadata = {
  title: "Public Audit Reports",
  description:
    "Published smart contract audit reports by Viper Offensive Security. Transparency is a security signal — view our full audit findings.",
};

export default function ReportsPage() {
  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Public Audit Reports
          </h1>
          <p className="text-lg text-viper-gray max-w-2xl">
            Transparency is a security signal. Where clients permit, we publish full audit
            reports so the community can verify the work.
          </p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {auditReports.map((report, i) => (
            <FadeIn key={i} delay={i * 0.07}>
              <div className="relative rounded-lg border border-viper-dark-border bg-viper-dark-card p-6 transition-all duration-300 hover:border-viper-green/30 border-l-2 border-l-viper-green/60 shadow-lg shadow-black/20">
                <FileText className="absolute top-4 right-4 h-5 w-5 text-viper-dark-border" />
                <div className="mb-3">
                  <h3 className="font-semibold text-foreground">
                    {report.protocol}
                    {report.confidential && (
                      <span className="text-xs text-viper-gray ml-1">[Confidential]</span>
                    )}
                  </h3>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-viper-green/40 text-viper-green/80 bg-viper-green/5">
                    {report.chain}
                  </span>
                  <span className="text-xs text-viper-gray">{report.date}</span>
                </div>
                <p className="text-xs text-viper-gray-light font-mono mb-4">{report.findings}</p>
                {!report.confidential ? (
                  <a
                    href={report.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-viper-green hover:gap-2 transition-all"
                  >
                    View Report
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                ) : (
                  <span className="text-sm text-viper-gray">Under NDA</span>
                )}
              </div>
            </FadeIn>
          ))}
        </div>

        {auditReports.length === 0 && (
          <p className="text-center text-viper-gray py-12">
            No public reports available yet.
          </p>
        )}
      </Section>
    </div>
  );
}
