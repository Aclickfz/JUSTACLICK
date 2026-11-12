"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

export const contactSubjects = [
  { value: "general", label: "General Inquiry" },
  { value: "services", label: "Services Information" },
  { value: "products", label: "Product Information" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "support", label: "Customer Support" },
  { value: "other", label: "Other" },
];

type ContactFieldsProps = {
  idPrefix?: string;
  className?: string;
  onSuccess?: () => void;
};

export function ContactFields({
  idPrefix = "contact",
  className,
  onSuccess,
}: ContactFieldsProps) {
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!subject) {
      toast.error("Please select a subject.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          company: data.get("company"),
          subject,
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send message");
      toast.success("Message sent. We'll get back to you soon.");
      form.reset();
      setSubject("");
      onSuccess?.();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className={cn("space-y-5", className)} onSubmit={onSubmit}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-firstName`}>
            First Name <span className="text-brand">*</span>
          </Label>
          <Input id={`${idPrefix}-firstName`} name="firstName" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-lastName`}>
            Last Name <span className="text-brand">*</span>
          </Label>
          <Input id={`${idPrefix}-lastName`} name="lastName" required />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-email`}>
            Email Address <span className="text-brand">*</span>
          </Label>
          <Input
            id={`${idPrefix}-email`}
            name="email"
            type="email"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${idPrefix}-phone`}>Phone Number</Label>
          <Input id={`${idPrefix}-phone`} name="phone" type="tel" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-company`}>Company Name</Label>
        <Input id={`${idPrefix}-company`} name="company" />
      </div>
      <div className="space-y-2">
        <Label>
          Subject <span className="text-brand">*</span>
        </Label>
        <Select value={subject} onValueChange={(v) => setSubject(v ?? "")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a subject" />
          </SelectTrigger>
          <SelectContent>
            {contactSubjects.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${idPrefix}-message`}>
          Message <span className="text-brand">*</span>
        </Label>
        <Textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help you..."
        />
      </div>
      <Button
        type="submit"
        disabled={loading}
        className="btn-brand h-11 w-full"
        size="lg"
      >
        {loading ? "Sending..." : "Send Message"}
        <Send className="ml-1 size-4" />
      </Button>
    </form>
  );
}
