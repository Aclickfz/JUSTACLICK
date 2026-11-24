"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function VerifyEmailContent() {
  const params = useSearchParams();
  const token = params.get("token");
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const [message, setMessage] = useState("Verifying your email…");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Missing verification token.");
      return;
    }

    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(
          `/api/verify-email?token=${encodeURIComponent(token)}`
        );
        const json = await res.json();
        if (cancelled) return;
        if (!res.ok) {
          setStatus("error");
          setMessage(json.error || "Verification failed.");
          return;
        }
        setStatus("ok");
        setMessage("Your email is verified. You can sign in now.");
      } catch {
        if (cancelled) return;
        setStatus("error");
        setMessage("Unable to verify email right now.");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [token]);

  return (
    <section className="flex min-h-[70vh] items-center bg-mist/60 py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-[0_12px_40px_rgba(5,20,35,0.06)] sm:p-10">
          <p className="text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
            Email verification
          </p>
          <h1 className="font-heading mt-3 text-3xl font-bold text-ink">
            {status === "ok"
              ? "Verified"
              : status === "error"
                ? "Verification failed"
                : "Please wait"}
          </h1>
          <p className="mt-4 text-muted-foreground">{message}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            {status === "ok" ? (
              <Link
                href="/login"
                className={cn(buttonVariants({ size: "lg" }), "btn-brand")}
              >
                Sign in
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className={cn(buttonVariants({ size: "lg" }), "btn-brand")}
                >
                  Back to login
                </Link>
                <Link
                  href="/signup"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "rounded-full"
                  )}
                >
                  Sign up again
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense
      fallback={
        <section className="flex min-h-[70vh] items-center justify-center">
          <p className="text-muted-foreground">Loading…</p>
        </section>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
}
