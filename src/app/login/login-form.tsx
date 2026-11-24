"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);

  const presetEmail = useMemo(
    () => searchParams.get("email") || "",
    [searchParams]
  );
  const needsVerifyHint = searchParams.get("verify") === "1";

  async function resendVerification(email: string) {
    setResending(true);
    try {
      const res = await fetch("/api/verify-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unable to resend email");
      toast.success(json.message || "Verification email sent.");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Unable to resend email"
      );
    } finally {
      setResending(false);
    }
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = String(data.get("email") || "");
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email,
        password: String(data.get("password") || ""),
        redirect: false,
      });
      if (!result || result.error) {
        const code = result?.code || result?.error || "";
        if (
          String(code).includes("EMAIL_NOT_VERIFIED") ||
          String(result?.error).includes("EMAIL_NOT_VERIFIED")
        ) {
          toast.error("Please verify your email before signing in.");
          await resendVerification(email);
          return;
        }
        toast.error("Invalid email or password.");
        return;
      }
      toast.success("Welcome back!");
      router.push("/");
      router.refresh();
    } catch {
      toast.error("Unable to sign in right now. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      {needsVerifyHint ? (
        <div className="rounded-lg border border-border bg-mist px-4 py-3 text-sm text-muted-foreground">
          Check your inbox for a verification link, then sign in here.
        </div>
      ) : null}
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          defaultValue={presetEmail}
          placeholder="you@company.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          placeholder="••••••••"
        />
      </div>
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 text-muted-foreground">
          <input
            type="checkbox"
            name="remember"
            className="size-4 rounded border-border accent-brand"
          />
          Remember me
        </label>
        <button
          type="button"
          disabled={resending}
          className="font-medium text-brand hover:underline disabled:opacity-60"
          onClick={() => {
            const emailInput = document.getElementById(
              "email"
            ) as HTMLInputElement | null;
            const email = emailInput?.value?.trim();
            if (!email) {
              toast.error("Enter your email first.");
              return;
            }
            void resendVerification(email);
          }}
        >
          {resending ? "Sending…" : "Resend verification"}
        </button>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-11 w-full btn-brand"
      >
        {loading ? "Signing in..." : "Sign In"}
      </Button>
      <p className="text-center text-sm text-muted-foreground">
        Need help?{" "}
        <Link href="/#contact" className="font-medium text-brand hover:underline">
          Contact us
        </Link>
      </p>
    </form>
  );
}
