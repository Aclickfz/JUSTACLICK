import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { SignupForm } from "./signup-form";

export const metadata: Metadata = {
  title: "Sign Up | Create Buyer or Vendor Account",
  description:
    "Create your Just A Click account as a buyer, wholesaler, vendor, or designer and start building with our home furnishing supply chain.",
  alternates: { canonical: "/signup" },
  robots: { index: false, follow: true },
};

export default function SignupPage() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-mist/80 pb-16 pt-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgb(26_126_0_/_0.12),transparent_45%)]" />
      <div className="section-shell relative">
        <Card className="mx-auto w-full max-w-xl border-border/70 shadow-xl">
          <CardHeader className="items-center text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand to-brand font-heading text-lg font-bold text-white shadow-md">
              JC
            </div>
            <h1 className="mt-2 font-heading text-3xl font-bold text-ink">
              Join <span className="text-gradient">Just A Click</span>
            </h1>
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
                className="font-semibold text-brand hover:underline"
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
