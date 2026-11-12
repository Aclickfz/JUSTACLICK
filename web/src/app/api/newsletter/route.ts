import { NextResponse } from "next/server";
import { connectDB, isMongoConfigured } from "@/lib/mongodb";
import { NewsletterSubscriber } from "@/models/Contact";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
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
    await NewsletterSubscriber.findOneAndUpdate(
      { email: String(email).toLowerCase() },
      { email: String(email).toLowerCase() },
      { upsert: true, new: true }
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to subscribe right now." },
      { status: 500 }
    );
  }
}
