"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LoginForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    setLoading(true);
    try {
      const result = await signIn("credentials", {
        email: String(data.get("email") || ""),
        password: String(data.get("password") || ""),
        redirect: false,
      });
      if (!result || result.error) {
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
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
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
        <Link href="/#contact" className="font-medium text-brand hover:underline">
          Forgot password?
        </Link>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-11 w-full btn-brand"
      >
        {loading ? "Signing in..." : "Sign In"}
      </Button>
    </form>
  );
}
