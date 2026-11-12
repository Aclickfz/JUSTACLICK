"use client";

import { SectionHeading } from "@/components/section-heading";
import { ContactFields } from "@/components/contact-fields";

export function ContactForm() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="section-shell relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <SectionHeading
          title="Get in"
          accent="Touch"
          description="Have a question or want to learn more about our services? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."
        />
        <div className="surface-panel p-6 sm:p-8">
          <ContactFields idPrefix="page-contact" />
        </div>
      </div>
    </section>
  );
}
