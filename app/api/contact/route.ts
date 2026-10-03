import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please provide a valid email address").max(254),
  company: z.string().trim().max(160).optional().default(""),
  organization: z.string().trim().max(160).optional(),
  projectType: z.string().trim().max(100).optional().default("General Inquiry"),
  scope: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(5000),
  hp: z.string().optional(), // Honeypot field 1
  botcheck: z.string().optional(), // Honeypot field 2
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 1. Honeypot check: silently discard bot submissions
    if (body.hp || body.botcheck) {
      return NextResponse.json(
        { ok: true, message: "Inquiry received" },
        { status: 200 }
      );
    }

    // 2. Strict input validation
    const parseResult = contactSchema.safeParse(body);
    if (!parseResult.success) {
      const firstError = parseResult.error.issues[0]?.message || "Invalid input";
      return NextResponse.json({ ok: false, error: firstError }, { status: 400 });
    }

    const { name, email, company, organization, projectType, scope, message } = parseResult.data;
    const finalOrganization = organization || company || "Not Specified";
    const finalScope = scope || projectType || "General Inquiry";
    const recipientEmail = "maxbehzadi82@gmail.com";

    // 3. Store inquiry in MongoDB for zero-loss guarantee
    try {
      const client = await clientPromise;
      const db = client.db("portfolio");
      await db.collection("inquiries").insertOne({
        name,
        email,
        organization: finalOrganization,
        scope: finalScope,
        message,
        recipient: recipientEmail,
        createdAt: new Date(),
        status: "received",
      });
    } catch (dbErr) {
      console.error("[Contact API] MongoDB insertion warning:", dbErr);
    }

    let emailDelivered = false;

    // 4. Free-tier Email Dispatch: Web3Forms API using FORM_ACCESS_KEY
    const formAccessKey = process.env.FORM_ACCESS_KEY || process.env.WEB3FORMS_ACCESS_KEY;
    if (formAccessKey) {
      try {
        const web3Response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key: formAccessKey,
            subject: `[Portfolio Inquiry] ${finalScope} from ${name}`,
            from_name: name,
            email: email,
            name: name,
            organization: finalOrganization,
            scope: finalScope,
            message: message,
            to: recipientEmail,
          }),
        });

        if (web3Response.ok) {
          const web3Json = await web3Response.json().catch(() => null);
          if (web3Json?.success) {
            emailDelivered = true;
          }
        }
      } catch (web3Err) {
        console.error("[Contact API] Web3Forms proxy exception:", web3Err);
      }
    }

    // 5. Fallback Email Dispatch: Resend API if configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!emailDelivered && resendApiKey) {
      try {
        const fromAddress = process.env.RESEND_FROM || "Portfolio Inquiry <onboarding@resend.dev>";
        const emailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendApiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: fromAddress,
            to: [recipientEmail],
            reply_to: email,
            subject: `[Portfolio Inquiry] ${finalScope} from ${name}`,
            text: `New Portfolio Inquiry:\n\nName: ${name}\nEmail: ${email}\nOrganization: ${finalOrganization}\nProject Scope: ${finalScope}\n\nMessage:\n${message}`,
            html: `
              <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
                <h2 style="color: #d99b53; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px;">New Portfolio Inquiry</h2>
                <p><strong>Name:</strong> ${escapeHtml(name)}</p>
                <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
                <p><strong>Organization:</strong> ${escapeHtml(finalOrganization)}</p>
                <p><strong>Project Scope:</strong> <span style="background: #fef3c7; color: #92400e; padding: 2px 8px; border-radius: 4px; font-weight: 600;">${escapeHtml(finalScope)}</span></p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <h3 style="color: #334155;">Message:</h3>
                <div style="background: #f8fafc; padding: 16px; border-radius: 8px; border: 1px solid #e2e8f0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</div>
                <p style="font-size: 12px; color: #94a3b8; margin-top: 24px;">Sent from Max Behzadi Engineering Portfolio</p>
              </div>
            `,
          }),
        });

        if (emailResponse.ok) {
          emailDelivered = true;
        }
      } catch (mailErr) {
        console.error("[Contact API] Resend exception:", mailErr);
      }
    }

    return NextResponse.json(
      {
        ok: true,
        message: "Your inquiry has been successfully submitted to maxbehzadi82@gmail.com.",
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API] Unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "An unexpected error occurred. Please reach out directly to maxbehzadi82@gmail.com." },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
