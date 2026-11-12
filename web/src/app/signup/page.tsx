import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SignupForm } from "./signup-form";

export const metadata: Metadata = {
  title: "Sign Up",
  description:
    "Create your Just A Click account as a buyer, wholesaler, vendor, or designer.",
};

export default function SignupPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-zinc-50 pb-16 pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(220,38,38,0.1),transparent_45%)]" />
      <div className="section-shell relative">
        <Card className="mx-auto w-full max-w-xl border-border/70 shadow-xl">
          <CardHeader className="items-center text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-700 font-heading text-lg font-bold text-white shadow-md">
              JC
            </div>
            <CardTitle className="mt-2 font-heading text-3xl font-bold">
              Join <span className="text-gradient">Just A Click</span>
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Create your account to get started
            </p>
          </CardHeader>
          <CardContent className="space-y-6 p-6 sm:px-8">
            <SignupForm />
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-red-700 hover:underline"
              >
                Sign in here
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
