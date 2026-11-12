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
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : undefined,
      company: company ? String(company).trim() : undefined,
      subject: String(subject).trim(),
      message: String(message).trim(),
    };

    if (!isSmtpConfigured() && !isMysqlConfigured()) {
      return NextResponse.json(
        {
          error:
            "Contact is not configured. Add SMTP_* or MYSQL_* in .env.local.",
        },
        { status: 503 }
      );
    }

    if (isMysqlConfigured()) {
      try {
        await createContactLead(payload);
      } catch (dbError) {
        console.error("Contact DB save failed:", dbError);
      }
    }

    let mailMeta: Awaited<ReturnType<typeof sendContactEmails>> | null = null;
    if (isSmtpConfigured()) {
      try {
        mailMeta = await sendContactEmails(payload);
      } catch (mailError) {
        console.error("Contact email failed:", mailError);
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
