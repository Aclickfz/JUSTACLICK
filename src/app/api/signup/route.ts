import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { createUser, findUserByEmail, isMysqlConfigured } from "@/lib/db";
import type { UserRole } from "@/models/User";

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

    if (!isMysqlConfigured()) {
      return NextResponse.json(
        {
          error:
            "Database is not configured. Add MYSQL_* values in .env.local.",
        },
        { status: 503 }
      );
    }

    const existing = await findUserByEmail(String(email).toLowerCase());
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);
    await createUser({
      name,
      email: String(email).toLowerCase(),
      passwordHash,
      company,
      role: (role as UserRole) || "buyer",
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
