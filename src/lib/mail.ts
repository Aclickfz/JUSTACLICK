import nodemailer from "nodemailer";

export type ContactPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
};

const subjectLabels: Record<string, string> = {
  general: "General Inquiry",
  services: "Services Information",
  products: "Product Information",
  partnership: "Partnership Opportunity",
  support: "Customer Support",
  other: "Other",
};

export function isSmtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASSWORD
  );
}

function getTransporter() {
  const port = Number(process.env.SMTP_PORT || 465);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function brandShell(title: string, body: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:#f9f9f9;font-family:DM Sans,Arial,sans-serif;color:#223140;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f9f9f9;padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:16px;overflow:hidden;border:1px solid #e4e9f1;">
          <tr>
            <td style="background:linear-gradient(135deg,#223140,#051423);padding:28px 32px;">
              <p style="margin:0;font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#223140;">Just A Click</p>
              <h1 style="margin:8px 0 0;font-size:24px;line-height:1.3;color:#ffffff;">${escapeHtml(title)}</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:20px 32px;background:#f8fafc;border-top:1px solid #e2e8f0;font-size:12px;color:#64748b;">
              © ${new Date().getFullYear()} Just A Click · Design, Manufacture &amp; Deliver Worldwide
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function fieldRow(label: string, value?: string) {
  if (!value) return "";
  return `<tr>
    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;width:140px;vertical-align:top;font-size:13px;color:#64748b;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #e2e8f0;font-size:14px;color:#0f172a;">${escapeHtml(value)}</td>
  </tr>`;
}

export function adminContactEmailHtml(data: ContactPayload) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;
  const body = `
    <p style="margin:0 0 20px;font-size:15px;line-height:1.6;">
      A new <strong>Get in Touch</strong> enquiry was submitted on the website.
      You can reply directly to this email to reach the visitor.
    </p>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin:0 0 20px;">
      ${fieldRow("Name", `${data.firstName} ${data.lastName}`)}
      ${fieldRow("Email", data.email)}
      ${fieldRow("Phone", data.phone)}
      ${fieldRow("Company", data.company)}
      ${fieldRow("Subject", subjectLabel)}
    </table>
    <p style="margin:0 0 8px;font-size:13px;color:#64748b;">Message</p>
    <div style="padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
  `;
  return brandShell("New contact enquiry — Admin", body);
}

export function userContactEmailHtml(data: ContactPayload) {
  const subjectLabel = subjectLabels[data.subject] || data.subject;
  const body = `
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      Hi ${escapeHtml(data.firstName)},
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      Thanks for reaching out to Just A Click. We received your message about
      <strong>${escapeHtml(subjectLabel)}</strong> and our team will get back to you soon.
    </p>
    <p style="margin:0 0 8px;font-size:13px;color:#64748b;">Your message</p>
    <div style="padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;font-size:14px;line-height:1.7;white-space:pre-wrap;">${escapeHtml(data.message)}</div>
    <p style="margin:24px 0 0;font-size:15px;line-height:1.6;">
      Warm regards,<br />
      <strong>Just A Click Team</strong>
    </p>
  `;
  return brandShell("We received your message", body);
}

function getAdminRecipients() {
  const raw =
    process.env.CONTACT_ADMIN_EMAIL || process.env.SMTP_USER || "";
  return raw
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
}

export async function sendContactEmails(data: ContactPayload) {
  if (!isSmtpConfigured()) {
    throw new Error("SMTP is not configured.");
  }

  const adminRecipients = getAdminRecipients();
  if (adminRecipients.length === 0) {
    throw new Error("CONTACT_ADMIN_EMAIL is missing.");
  }

  const transporter = getTransporter();
  const from =
    process.env.AUTH_EMAIL_FROM ||
    `Just A Click <${process.env.SMTP_USER}>`;
  const subjectLabel = subjectLabels[data.subject] || data.subject;

  // 1) Admin notification (required)
  const adminInfo = await transporter.sendMail({
    from,
    to: adminRecipients.join(", "),
    replyTo: `${data.firstName} ${data.lastName} <${data.email}>`,
    subject: `[Just A Click Admin] ${subjectLabel} — ${data.firstName} ${data.lastName}`,
    html: adminContactEmailHtml(data),
    text: `ADMIN ALERT — New enquiry from ${data.firstName} ${data.lastName} (${data.email})\nPhone: ${data.phone || "-"}\nCompany: ${data.company || "-"}\nSubject: ${subjectLabel}\n\n${data.message}`,
  });

  // 2) User confirmation (best-effort after admin succeeds)
  let userMessageId: string | undefined;
  try {
    const userInfo = await transporter.sendMail({
      from,
      to: data.email,
      subject: "We received your message — Just A Click",
      html: userContactEmailHtml(data),
      text: `Hi ${data.firstName},\n\nThanks for contacting Just A Click. We received your message about ${subjectLabel} and will reply soon.\n\nYour message:\n${data.message}\n\n— Just A Click Team`,
    });
    userMessageId = userInfo.messageId;
  } catch (userMailError) {
    console.error("User confirmation email failed:", userMailError);
  }

  return {
    adminTo: adminRecipients,
    adminMessageId: adminInfo.messageId,
    userMessageId,
  };
}

export async function sendVerificationEmail(input: {
  name: string;
  email: string;
  verifyUrl: string;
}) {
  if (!isSmtpConfigured()) {
    throw new Error("SMTP is not configured.");
  }

  const transporter = getTransporter();
  const from =
    process.env.AUTH_EMAIL_FROM ||
    `Just A Click <${process.env.SMTP_USER}>`;

  const body = `
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      Hi ${escapeHtml(input.name.split(" ")[0] || input.name)},
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      Thanks for creating your Just A Click account. Please verify your email
      address to activate login access.
    </p>
    <p style="margin:24px 0;">
      <a href="${escapeHtml(input.verifyUrl)}"
         style="display:inline-block;background:#223140;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:14px;">
        Verify email
      </a>
    </p>
    <p style="margin:0;font-size:13px;line-height:1.6;color:#64748b;">
      Or paste this link in your browser:<br />
      ${escapeHtml(input.verifyUrl)}
    </p>
    <p style="margin:24px 0 0;font-size:13px;color:#64748b;">
      This link expires in 24 hours. If you did not sign up, you can ignore this email.
    </p>
  `;

  const info = await transporter.sendMail({
    from,
    to: input.email,
    subject: "Verify your Just A Click account",
    html: brandShell("Verify your email", body),
    text: `Hi ${input.name},\n\nVerify your Just A Click account:\n${input.verifyUrl}\n\nThis link expires in 24 hours.`,
  });

  return info.messageId;
}

export async function sendWelcomeVerifiedEmail(input: {
  name: string;
  email: string;
}) {
  if (!isSmtpConfigured()) return;

  const transporter = getTransporter();
  const from =
    process.env.AUTH_EMAIL_FROM ||
    `Just A Click <${process.env.SMTP_USER}>`;
  const site = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const body = `
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      Hi ${escapeHtml(input.name.split(" ")[0] || input.name)},
    </p>
    <p style="margin:0 0 16px;font-size:15px;line-height:1.6;">
      Your email is verified. You can now sign in to Just A Click.
    </p>
    <p style="margin:24px 0;">
      <a href="${escapeHtml(`${site}/login`)}"
         style="display:inline-block;background:#223140;color:#ffffff;text-decoration:none;padding:12px 22px;border-radius:999px;font-weight:600;font-size:14px;">
        Sign in
      </a>
    </p>
  `;

  await transporter.sendMail({
    from,
    to: input.email,
    subject: "Email verified — Just A Click",
    html: brandShell("You're verified", body),
    text: `Hi ${input.name},\n\nYour email is verified. Sign in at ${site}/login`,
  });
}
