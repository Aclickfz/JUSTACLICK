import { NextResponse } from "next/server";
import { connectDB, isMongoConfigured } from "@/lib/mongodb";
import { ContactLead } from "@/models/Contact";

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

    if (!isMongoConfigured()) {
      return NextResponse.json(
        {
          error:
            "Database is not configured. Add your MONGODB_URI in web/.env.local.",
        },
        { status: 503 }
      );
    }

    await connectDB();
    await ContactLead.create({
      firstName,
      lastName,
      email,
      phone,
      company,
      subject,
      message,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to save your message right now." },
      { status: 500 }
    );
  }
}
