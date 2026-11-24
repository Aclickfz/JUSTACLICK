import { randomBytes } from "crypto";
import { NextResponse } from "next/server";
import {
  createAuthToken,
  findUserByEmail,
  findUserById,
  findValidAuthToken,
  invalidateUserTokens,
  isMysqlConfigured,
  markAuthTokenUsed,
  markUserEmailVerified,
} from "@/lib/db";
import {
  isSmtpConfigured,
  sendVerificationEmail,
  sendWelcomeVerifiedEmail,
} from "@/lib/mail";
import { absoluteUrl } from "@/lib/site";

export async function GET(request: Request) {
  try {
    if (!isMysqlConfigured()) {
      return NextResponse.json(
        { error: "Database is not configured." },
        { status: 503 }
      );
    }

    const token = new URL(request.url).searchParams.get("token")?.trim();
    if (!token) {
      return NextResponse.json({ error: "Missing token." }, { status: 400 });
    }

    const record = await findValidAuthToken(token, "email_verify");
    if (!record) {
      return NextResponse.json(
        { error: "Invalid or expired verification link." },
        { status: 400 }
      );
    }

    await markUserEmailVerified(record.userId);
    await markAuthTokenUsed(record.id);
    await invalidateUserTokens(record.userId, "email_verify");

    const user = await findUserById(record.userId);
    if (user && isSmtpConfigured()) {
      try {
        await sendWelcomeVerifiedEmail({
          name: user.name,
          email: user.email,
        });
      } catch (welcomeError) {
        console.error("Welcome email failed:", welcomeError);
      }
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to verify email right now." },
      { status: 500 }
    );
  }
}

/** Resend verification email */
export async function POST(request: Request) {
  try {
    if (!isMysqlConfigured()) {
      return NextResponse.json(
        { error: "Database is not configured." },
        { status: 503 }
      );
    }

    const body = await request.json();
    const email = String(body.email || "")
      .toLowerCase()
      .trim();
    if (!email) {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const user = await findUserByEmail(email);
    if (!user) {
      return NextResponse.json({ ok: true });
    }

    if (user.emailVerified) {
      return NextResponse.json({
        ok: true,
        message: "Email is already verified. You can sign in.",
      });
    }

    if (!isSmtpConfigured()) {
      return NextResponse.json(
        { error: "Email sending is not configured." },
        { status: 503 }
      );
    }

    await invalidateUserTokens(Number(user.id), "email_verify");
    const token = randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    await createAuthToken({
      userId: Number(user.id),
      token,
      type: "email_verify",
      expiresAt,
    });

    await sendVerificationEmail({
      name: user.name,
      email: user.email,
      verifyUrl: absoluteUrl(`/verify-email?token=${token}`),
    });

    return NextResponse.json({
      ok: true,
      message: "Verification email sent.",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Unable to resend verification email." },
      { status: 500 }
    );
  }
}
