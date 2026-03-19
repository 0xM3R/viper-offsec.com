import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, company, engagementType, scope, timeline, budget } = body;

    if (!name || !email || !company || !engagementType || !scope) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);

    await resend.emails.send({
      from: "Viper Contact Form <noreply@viper-offsec.com>",
      to: "info@viper-offsec.com",
      subject: `New Inquiry: ${engagementType} — ${company}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company / Protocol: ${company}`,
        `Engagement Type: ${engagementType}`,
        ``,
        `Scope:`,
        scope,
        ``,
        timeline ? `Timeline: ${timeline}` : null,
        budget ? `Budget Range: ${budget}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
      replyTo: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
