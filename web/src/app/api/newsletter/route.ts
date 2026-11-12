import { NextResponse } from "next/server";
import { isMysqlConfigured, upsertNewsletterSubscriber } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    if (!isMysqlConfigured()) {
      return NextResponse.json(
        {
          error:
            "Database is not configured. Add MYSQL_* values in web/.env.local.",
        },
        { status: 503 }
      );
    }

    await upsertNewsletterSubscriber(String(email).toLowerCase());

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to subscribe right now." },
      { status: 500 }
    );
  }
}
