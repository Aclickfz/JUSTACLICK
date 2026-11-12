import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Login",
  description: "Sign in to your Just A Click account.",
};

export default function LoginPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-mist/80 pb-16 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,oklch(0.58 0.11 195 / 0.12),transparent_45%)]" />
      <div className="section-shell relative">
        <Card className="mx-auto w-full max-w-md border-border/70 shadow-xl">
          <CardHeader className="items-center text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand font-heading text-lg font-bold text-white shadow-md">
              JC
            </div>
            <CardTitle className="mt-2 font-heading text-3xl font-bold">
              Welcome <span className="text-gradient">Back</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Sign in to your Just A Click account
            </p>
          </CardHeader>
          <CardContent className="space-y-6 p-6 sm:px-8">
            <LoginForm />
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
