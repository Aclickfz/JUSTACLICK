import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Just A Click collects, uses, and protects personal information when you use our home furnishing supply chain platform.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    title: "Privacy Policy | Just A Click",
    description:
      "Privacy practices for Just A Click website visitors and account holders.",
    url: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="We respect your privacy and handle personal data with care."
        imageUrl="https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-20">
        <div className="section-shell max-w-3xl">
          <p className="text-muted-foreground">
            Just A Click collects information you provide (such as name, email,
            company, and message content) when you contact us, subscribe, or
            create an account. We use this data to respond to enquiries, operate
            the platform, and improve our home furnishing supply chain services.
          </p>
          <h2 className="font-heading mt-10 text-2xl font-bold text-ink">
            What we collect
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-muted-foreground">
            <li>Contact and account details you submit</li>
            <li>Messages sent through forms or chat</li>
            <li>Basic technical data such as browser and device type</li>
          </ul>
          <h2 className="font-heading mt-10 text-2xl font-bold text-ink">
            How we use it
          </h2>
          <p className="mt-4 text-muted-foreground">
            We use your information to fulfil requests, manage buyer/vendor
            accounts, send operational emails, and protect against misuse. We do
            not sell personal data.
          </p>
          <h2 className="font-heading mt-10 text-2xl font-bold text-ink">
            Contact
          </h2>
          <p className="mt-4 text-muted-foreground">
            Privacy requests:{" "}
            <a href="mailto:info@justaclick.com" className="text-brand">
              info@justaclick.com
            </a>
            .
          </p>
          <p className="mt-8 text-sm text-muted-foreground">
            Last updated: {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </>
  );
}
