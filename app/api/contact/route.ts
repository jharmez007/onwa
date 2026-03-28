import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, company, message, type } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing name, email, or message" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    const inquiryLabels: Record<string, string> = {
      general: "General Inquiry",
      quote:   "Quote Request",
      support: "Existing Client Support",
    };

    const inquiryLabel = inquiryLabels[type] ?? "General Inquiry";

    // ── 1. ADMIN NOTIFICATION ──────────────────────────────────────────────
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "cajetanemeka@yahoo.com",
      subject: `New ${inquiryLabel} from ${name}`,
      html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#F0EDE8;font-family:Georgia,serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0EDE8;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border:1px solid rgba(26,24,20,0.1);">

        <!-- Header -->
        <tr>
          <td style="background:#1A1814;padding:36px 40px;">
            <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#C4873A;">
              Onwa-na Aku
            </p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#F7F5F0;letter-spacing:-0.02em;line-height:1.1;">
              New Client Inquiry
            </h1>
          </td>
        </tr>

        <!-- Inquiry type badge -->
        <tr>
          <td style="background:#F7F5F0;padding:16px 40px;border-bottom:1px solid rgba(26,24,20,0.08);">
            <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:#C4873A;">
              ${inquiryLabel}
            </span>
          </td>
        </tr>

        <!-- Sender details -->
        <tr>
          <td style="padding:32px 40px 0;">
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                ["Full Name",   name],
                ["Email",       email],
                ["Company",     company || "—"],
                ["Inquiry Type", inquiryLabel],
              ].map(([label, value]) => `
              <tr>
                <td style="padding:12px 0;border-bottom:1px solid rgba(26,24,20,0.06);vertical-align:top;width:140px;">
                  <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#B0ADA8;">
                    ${label}
                  </span>
                </td>
                <td style="padding:12px 0 12px 16px;border-bottom:1px solid rgba(26,24,20,0.06);vertical-align:top;">
                  <span style="font-family:Arial,sans-serif;font-size:13px;color:#1A1814;">
                    ${value}
                  </span>
                </td>
              </tr>`).join("")}
            </table>
          </td>
        </tr>

        <!-- Message -->
        <tr>
          <td style="padding:28px 40px 0;">
            <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#B0ADA8;">
              Message
            </p>
            <div style="background:#F7F5F0;border-left:2px solid #C4873A;padding:16px 20px;">
              <p style="margin:0;font-family:Georgia,serif;font-size:14px;line-height:1.75;color:#1A1814;font-style:italic;">
                "${message}"
              </p>
            </div>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:32px 40px;">
            <a href="mailto:${email}"
               style="display:inline-block;background:#1A1814;color:#F7F5F0;font-family:Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;padding:14px 28px;">
              Reply to ${name}
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F7F5F0;padding:20px 40px;border-top:1px solid rgba(26,24,20,0.08);">
            <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#B0ADA8;">
              © ${new Date().getFullYear()} Onwa-na Aku · Lagos, Nigeria
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>
      `,
    });

    // ── 2. CLIENT CONFIRMATION ─────────────────────────────────────────────
    try {
      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: email,
        subject: "We've received your message — Onwa-na Aku",
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/></head>
<body style="margin:0;padding:0;background:#F0EDE8;font-family:Georgia,serif;">

  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F0EDE8;padding:40px 16px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#FFFFFF;border:1px solid rgba(26,24,20,0.1);">

        <!-- Header -->
        <tr>
          <td style="background:#1A1814;padding:36px 40px;">
            <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#C4873A;">
              Onwa-na Aku
            </p>
            <h1 style="margin:0;font-family:Georgia,serif;font-size:26px;font-weight:400;color:#F7F5F0;letter-spacing:-0.02em;line-height:1.1;">
              We've Received Your Message
            </h1>
          </td>
        </tr>

        <!-- Subheader -->
        <tr>
          <td style="background:#F7F5F0;padding:16px 40px;border-bottom:1px solid rgba(26,24,20,0.08);">
            <span style="font-family:Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.1em;text-transform:uppercase;color:#C4873A;">
              ${inquiryLabel}
            </span>
          </td>
        </tr>

        <!-- Greeting -->
        <tr>
          <td style="padding:36px 40px 0;">
            <h2 style="margin:0 0 16px;font-family:Georgia,serif;font-size:20px;font-weight:400;color:#1A1814;letter-spacing:-0.01em;">
              Hello ${name},
            </h2>
            <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:13px;line-height:1.8;color:#6B6860;font-weight:300;">
              Thank you for reaching out to Onwa-na Aku. Your inquiry has been received and a member of our team will respond within one business day.
            </p>
            <p style="margin:0;font-family:Arial,sans-serif;font-size:13px;line-height:1.8;color:#6B6860;font-weight:300;">
              If your request is time-sensitive, please reply directly to this email and we will prioritize your case.
            </p>
          </td>
        </tr>

        <!-- Divider -->
        <tr>
          <td style="padding:28px 40px 0;">
            <div style="width:32px;height:1px;background:#C4873A;"></div>
          </td>
        </tr>

        <!-- Message recap -->
        <tr>
          <td style="padding:20px 40px 0;">
            <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#B0ADA8;">
              Your Message
            </p>
            <div style="background:#F7F5F0;border-left:2px solid #C4873A;padding:16px 20px;">
              <p style="margin:0;font-family:Georgia,serif;font-size:14px;line-height:1.75;color:#1A1814;font-style:italic;">
                "${message}"
              </p>
            </div>
          </td>
        </tr>

        <!-- What happens next -->
        <tr>
          <td style="padding:28px 40px 0;">
            <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:10px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;color:#B0ADA8;">
              What Happens Next
            </p>
            <table width="100%" cellpadding="0" cellspacing="0">
              ${[
                ["Within 24 hours",  "A logistics advisor will review your inquiry and reach out directly."],
                ["Strategy Session", "We'll schedule a free consultation to understand your exact needs."],
                ["Custom Proposal",  "You'll receive a tailored solution with transparent pricing."],
              ].map(([title, desc]) => `
              <tr>
                <td style="padding:10px 0;border-bottom:1px solid rgba(26,24,20,0.06);vertical-align:top;">
                  <span style="display:inline-block;width:6px;height:6px;background:#C4873A;border-radius:50%;margin-right:12px;vertical-align:middle;"></span>
                  <span style="font-family:Arial,sans-serif;font-size:12px;font-weight:500;color:#1A1814;">${title}</span>
                  <p style="margin:4px 0 0 18px;font-family:Arial,sans-serif;font-size:12px;line-height:1.6;color:#6B6860;font-weight:300;">${desc}</p>
                </td>
              </tr>`).join("")}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:32px 40px;">
            <a href="https://onwa-iota.vercel.app/contact"
               style="display:inline-block;background:#1A1814;color:#F7F5F0;font-family:Arial,sans-serif;font-size:11px;font-weight:500;letter-spacing:0.08em;text-transform:uppercase;text-decoration:none;padding:14px 28px;">
              Visit Our Website
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="background:#F7F5F0;padding:20px 40px;border-top:1px solid rgba(26,24,20,0.08);">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td>
                  <p style="margin:0 0 4px;font-family:Arial,sans-serif;font-size:11px;color:#B0ADA8;">
                    © ${new Date().getFullYear()} Onwa-na Aku. All rights reserved.
                  </p>
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#B0ADA8;">
                    21 Road, 2nd Avenue, Festac Town, Lagos, Nigeria
                  </p>
                </td>
                <td align="right" style="vertical-align:top;">
                  <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#B0ADA8;">
                    cajetanemeka@yahoo.com
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>

</body>
</html>
        `,
      });

      return NextResponse.json({ success: true });
    } catch (error) {
      console.error("Confirmation email error:", error);
      return NextResponse.json({
        success: true,
        warning: "Confirmation email failed",
        error: String(error),
      });
    }
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}