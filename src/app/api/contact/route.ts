import { NextResponse } from "next/server";
import { createContactLead, isMysqlConfigured } from "@/lib/db";
import { sendContactEmails, isSmtpConfigured } from "@/lib/mail";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, company, subject, message } =
      body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const payload = {
      firstName: String(firstName).trim(),
      lastName: String(lastName).trim(),
      email: String(email).trim().toLowerCase(),
      phone: phone ? String(phone).trim() : undefined,
      company: company ? String(company).trim() : undefined,
      subject: String(subject).trim(),
      message: String(message).trim(),
    };

    if (!isSmtpConfigured() && !isMysqlConfigured()) {
      return NextResponse.json(
        {
          error:
            "Contact is not configured. Add MYSQL_* (and optionally SMTP_*) in .env.local.",
        },
        { status: 503 }
      );
    }

    let leadId: number | null = null;

    // Prefer storing every enquiry in MySQL when configured
    if (isMysqlConfigured()) {
      try {
        leadId = await createContactLead(payload);
      } catch (dbError) {
        console.error("Contact DB save failed:", dbError);
        return NextResponse.json(
          {
            error:
              "Unable to save your enquiry in the database. Please try again.",
          },
          { status: 500 }
        );
      }
    }

    let mailMeta: Awaited<ReturnType<typeof sendContactEmails>> | null = null;
    if (isSmtpConfigured()) {
      try {
        mailMeta = await sendContactEmails(payload);
      } catch (mailError) {
        console.error("Contact email failed:", mailError);
        // DB already saved — report partial success
        if (leadId) {
          return NextResponse.json({
            ok: true,
            saved: true,
            leadId,
            emailed: { admin: false, user: false },
            warning:
              "Enquiry saved, but email notification failed. Our team still has your message.",
          });
        }
        return NextResponse.json(
          {
            error:
              "Unable to send admin/user email right now. Please try again.",
          },
          { status: 502 }
        );
      }
    }

    return NextResponse.json({
      ok: true,
      saved: Boolean(leadId),
      leadId,
      emailed: {
        admin: Boolean(mailMeta?.adminMessageId),
        adminTo: mailMeta?.adminTo ?? [],
        user: Boolean(mailMeta?.userMessageId),
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 500 }
    );
  }
}
