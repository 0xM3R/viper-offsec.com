"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Link from "next/link";
import { Send, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email is required"),
  company: z.string().min(1, "Company / protocol name is required"),
  engagementType: z.string().min(1, "Please select an engagement type"),
  scope: z.string().min(10, "Please describe the scope (at least 10 characters)"),
  timeline: z.string().optional(),
  budget: z.string().optional(),
});

type ContactForm = z.infer<typeof contactSchema>;

const engagementTypes = [
  "Smart Contract Audit",
  "AI Security",
  "AI Security × Web3",
  "Red Team",
  "Infrastructure Review",
  "Security Architecture Review",
  "Vulnerability Research",
  "vCISO / Advisory",
  "Other",
];

const budgetRanges = [
  "< $10k",
  "$10k - $25k",
  "$25k - $50k",
  "$50k - $100k",
  "$100k+",
  "Not sure yet",
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactForm) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="pt-24">
      <Section>
        <FadeIn>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-viper-gray max-w-2xl">
            Tell us about your project and we&rsquo;ll get back to you with an approach
            and timeline.
          </p>
        </FadeIn>
      </Section>

      <Section className="pt-0">
        <div className="grid lg:grid-cols-3 gap-12">
          <FadeIn className="lg:col-span-2">
            {status === "success" ? (
              <div className="rounded-lg border border-viper-green/30 bg-viper-green/5 p-8 text-center">
                <ShieldCheck className="h-12 w-12 text-viper-green mx-auto mb-4" />
                <h2 className="text-xl font-bold text-foreground mb-2">Message Sent</h2>
                <p className="text-viper-gray">
                  We&rsquo;ll review your inquiry and respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      {...register("name")}
                      className={cn(
                        "w-full rounded-lg border bg-viper-dark-card px-4 py-2.5 text-sm text-foreground placeholder:text-viper-gray focus:outline-none focus:ring-1 focus:ring-viper-green focus:border-viper-green transition-colors",
                        errors.name ? "border-viper-red" : "border-viper-dark-border"
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-viper-red">{errors.name.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      className={cn(
                        "w-full rounded-lg border bg-viper-dark-card px-4 py-2.5 text-sm text-foreground placeholder:text-viper-gray focus:outline-none focus:ring-1 focus:ring-viper-green focus:border-viper-green transition-colors",
                        errors.email ? "border-viper-red" : "border-viper-dark-border"
                      )}
                      placeholder="you@company.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-viper-red">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company / Protocol *
                  </label>
                  <input
                    {...register("company")}
                    className={cn(
                      "w-full rounded-lg border bg-viper-dark-card px-4 py-2.5 text-sm text-foreground placeholder:text-viper-gray focus:outline-none focus:ring-1 focus:ring-viper-green focus:border-viper-green transition-colors",
                      errors.company ? "border-viper-red" : "border-viper-dark-border"
                    )}
                    placeholder="Protocol or company name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-viper-red">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Type of Engagement *
                  </label>
                  <select
                    {...register("engagementType")}
                    className={cn(
                      "w-full rounded-lg border bg-viper-dark-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-viper-green focus:border-viper-green transition-colors",
                      errors.engagementType ? "border-viper-red" : "border-viper-dark-border"
                    )}
                  >
                    <option value="">Select engagement type</option>
                    {engagementTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                  {errors.engagementType && (
                    <p className="mt-1 text-xs text-viper-red">
                      {errors.engagementType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Brief Description of Scope *
                  </label>
                  <textarea
                    {...register("scope")}
                    rows={4}
                    className={cn(
                      "w-full rounded-lg border bg-viper-dark-card px-4 py-2.5 text-sm text-foreground placeholder:text-viper-gray focus:outline-none focus:ring-1 focus:ring-viper-green focus:border-viper-green transition-colors resize-none",
                      errors.scope ? "border-viper-red" : "border-viper-dark-border"
                    )}
                    placeholder="Describe your project, what you need reviewed, and any relevant context..."
                  />
                  {errors.scope && (
                    <p className="mt-1 text-xs text-viper-red">{errors.scope.message}</p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Timeline
                    </label>
                    <input
                      {...register("timeline")}
                      className="w-full rounded-lg border border-viper-dark-border bg-viper-dark-card px-4 py-2.5 text-sm text-foreground placeholder:text-viper-gray focus:outline-none focus:ring-1 focus:ring-viper-green focus:border-viper-green transition-colors"
                      placeholder="When do you need this?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Budget Range (optional)
                    </label>
                    <select
                      {...register("budget")}
                      className="w-full rounded-lg border border-viper-dark-border bg-viper-dark-card px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-viper-green focus:border-viper-green transition-colors"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {status === "error" && (
                  <div className="rounded-lg border border-viper-red/30 bg-viper-red/5 p-4 text-sm text-viper-red">
                    Something went wrong. Please email us directly at info@viper-offsec.com.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex items-center gap-2 rounded-lg bg-viper-green px-6 py-3 text-sm font-medium text-viper-dark hover:bg-viper-green-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
                <p className="text-zinc-600 text-xs font-mono mt-3 leading-relaxed">
                  By submitting this form you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-zinc-500 hover:text-zinc-300 underline underline-offset-2 transition-colors"
                  >
                    privacy policy
                  </Link>
                  . We operate under UK GDPR and EU GDPR. Your data is not
                  shared with third parties.
                </p>
              </form>
            )}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-6">
              <div className="rounded-lg border border-viper-dark-border bg-viper-dark-card p-6">
                <h3 className="text-sm font-semibold text-foreground mb-4">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Mail className="h-4 w-4 text-viper-green mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground">Email</p>
                      <a
                        href="mailto:info@viper-offsec.com"
                        className="text-sm text-viper-gray hover:text-viper-green transition-colors"
                      >
                        info@viper-offsec.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-4 w-4 text-viper-green mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground">Location</p>
                      <p className="text-sm text-viper-gray">
                        Netherlands (remote-first, global clients)
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="h-4 w-4 text-viper-green mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground">Response Time</p>
                      <p className="text-sm text-viper-gray">
                        Within 48 hours. For urgent matters, mention it in your message.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg border border-viper-dark-border bg-viper-dark-card p-6">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="h-4 w-4 text-viper-green mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-foreground mb-1">
                      Confidentiality
                    </p>
                    <p className="text-sm text-viper-gray">
                      We maintain strict confidentiality. NDAs available on request.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </div>
  );
}
