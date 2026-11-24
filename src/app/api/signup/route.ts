import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {
  createAuthToken,
  createUser,
  findUserByEmail,
  isMysqlConfigured,
} from "@/lib/db";
import { isSmtpConfigured, sendVerificationEmail } from "@/lib/mail";
import type { UserRole } from "@/models/User";
import { absoluteUrl } from "@/lib/site";

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

    if (String(password).length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters." },
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

    const normalizedEmail = String(email).toLowerCase().trim();
    const existing = await findUserByEmail(normalizedEmail);
    if (existing) {
      return NextResponse.json(
        { error: "An account with this email already exists." },
        { status: 409 }
      );
    }

    const passwordHash = await bcrypt.hash(String(password), 10);
    const userId = await createUser({
      name: String(name).trim(),
      email: normalizedEmail,
      passwordHash,
      company: company ? String(company).trim() : undefined,
      role: (role as UserRole) || "buyer",
    });

    const token = randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await createAuthToken({
      userId,
      token,
      type: "email_verify",
      expiresAt,
    });

    const verifyUrl = absoluteUrl(`/verify-email?token=${token}`);
    let emailed = false;

    if (isSmtpConfigured()) {
      try {
        await sendVerificationEmail({
          name: String(name).trim(),
          email: normalizedEmail,
          verifyUrl,
        });
        emailed = true;
      } catch (mailError) {
        console.error("Verification email failed:", mailError);
      }
    }

    return NextResponse.json({
      ok: true,
      emailed,
      message: emailed
        ? "Account created. Check your email to verify before signing in."
        : "Account created. Email could not be sent — use the verify link from support or resend later.",
      // Only expose token when SMTP is off (local/dev convenience)
      verifyUrl: emailed ? undefined : verifyUrl,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to create account right now." },
      { status: 500 }
    );
  }
}
