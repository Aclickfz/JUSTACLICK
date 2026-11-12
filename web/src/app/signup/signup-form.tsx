"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const roles = [
  { value: "buyer", label: "Buyer" },
  { value: "wholesaler", label: "Wholesaler" },
  { value: "vendor", label: "Vendor/Supplier" },
  { value: "designer", label: "Designer" },
];

export function SignupForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    if (!role) {
      toast.error("Please select an account type.");
      return;
    }
    const password = String(data.get("password") || "");
    if (password.length < 8) {
      toast.error("Password must be at least 8 characters.");
      return;
    }
    if (password !== String(data.get("confirmPassword") || "")) {
      toast.error("Passwords do not match.");
      return;
    }
    if (!data.get("terms")) {
      toast.error("Please accept the Terms of Service and Privacy Policy.");
      return;
    }

    setLoading(true);
    try {
      const name = `${String(data.get("firstName") || "").trim()} ${String(
        data.get("lastName") || ""
      ).trim()}`.trim();
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: data.get("email"),
          password,
          company: data.get("company"),
          role,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unable to create account");
      toast.success("Account created. Please sign in.");
      router.push("/login");
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="firstName">First Name</Label>
          <Input id="firstName" name="firstName" autoComplete="given-name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Last Name</Label>
          <Input id="lastName" name="lastName" autoComplete="family-name" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" name="email" type="email" autoComplete="email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="company">Company (Optional)</Label>
        <Input id="company" name="company" autoComplete="organization" />
      </div>
      <div className="space-y-2">
        <Label>Account Type</Label>
        <Select value={role} onValueChange={(v) => setRole(v ?? "")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select your role" />
          </SelectTrigger>
          <SelectContent>
            {roles.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            minLength={8}
            required
          />
        </div>
      </div>
      <label className="flex items-start gap-2 text-sm text-muted-foreground">
        <input
          type="checkbox"
          name="terms"
          required
          className="mt-0.5 size-4 rounded border-border accent-red-600"
        />
        <span>
          I agree to the{" "}
          <span className="font-medium text-red-700">Terms of Service</span> and{" "}
          <span className="font-medium text-red-700">Privacy Policy</span>
        </span>
      </label>
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-11 w-full bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700"
      >
        {loading ? "Creating account..." : "Create Account"}
      </Button>
    </form>
  );
}
