import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB, isMongoConfigured } from "@/lib/mongodb";
import { User } from "@/models/User";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, password, company, role } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Name, email, and password are required." },
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
    const existing = await User.findOne({ email: String(email).toLowerCase() });
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await User.create({
      name,
      email: String(email).toLowerCase(),
      passwordHash,
      company,
      role: role || "buyer",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to create account right now." },
      { status: 500 }
    );
  }
}
