"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "").trim();
    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unable to subscribe");
      toast.success("You're subscribed. Thank you!");
      form.reset();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto flex w-full max-w-xl flex-col gap-3 sm:flex-row"
    >
      <Input
        name="email"
        type="email"
        required
        placeholder="Enter your email address"
        aria-label="Email address"
        className="h-11 flex-1 bg-white"
      />
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="h-11 bg-gradient-to-r from-red-500 to-red-600 px-6 text-white hover:from-red-600 hover:to-red-700"
      >
        {loading ? "Subscribing..." : "Subscribe"}
        <Send className="ml-1 size-4" />
      </Button>
    </form>
  );
}
