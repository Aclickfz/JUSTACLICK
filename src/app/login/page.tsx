import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login | Buyer & Vendor Account Access",
  description:
    "Sign in to your Just A Click account to manage buyer or vendor access to our home furnishing supply chain platform.",
  alternates: { canonical: "/login" },
  robots: { index: false, follow: true },
};

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-mist/80 pb-16 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(34_49_64_/_0.08),transparent_45%)]" />
      <div className="section-shell relative">
        <Card className="mx-auto w-full max-w-md border-border/70 shadow-xl">
          <CardHeader className="items-center text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand font-heading text-lg font-bold text-white shadow-md">
              JC
            </div>
            <h1 className="mt-2 font-heading text-3xl font-bold text-ink">
              Welcome <span className="text-gradient">Back</span>
            </h1>
            <p className="text-sm text-muted-foreground">
              Sign in to your verified Just A Click account
            </p>
          </CardHeader>
          <CardContent className="space-y-6 p-6 sm:px-8">
            <Suspense fallback={<p className="text-center text-sm text-muted-foreground">Loading…</p>}>
              <LoginForm />
            </Suspense>
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link
                href="/signup"
                className="font-semibold text-brand hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
