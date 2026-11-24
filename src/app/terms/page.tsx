import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the terms of use for Just A Click — the home furnishing supply chain platform for buyers, wholesalers, and vendors.",
  alternates: { canonical: "/terms" },
  openGraph: {
    title: "Terms of Use | Just A Click",
    description:
      "Terms governing use of the Just A Click website and services.",
    url: "/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description="These terms govern your use of the Just A Click website and related services."
        imageUrl="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=2000&q=80"
      />
      <section className="py-20">
        <div className="section-shell prose prose-neutral max-w-3xl dark:prose-invert">
          <p className="text-muted-foreground">
            By accessing justaclick.com and related services, you agree to use
            the site lawfully and respectfully. Content, branding, and materials
            on this site belong to Just A Click unless otherwise noted.
          </p>
          <h2 className="font-heading mt-10 text-2xl font-bold text-ink">
            Services
          </h2>
          <p className="text-muted-foreground">
            Just A Click provides information and tools related to home
            furnishing design, manufacturing, sourcing, and global delivery.
            Account features (buyer, vendor, wholesaler) may require
            registration and approval.
          </p>
          <h2 className="font-heading mt-10 text-2xl font-bold text-ink">
            Accounts
          </h2>
          <p className="text-muted-foreground">
            You are responsible for keeping login credentials secure and for
            activity under your account. Provide accurate information when
            signing up or contacting us.
          </p>
          <h2 className="font-heading mt-10 text-2xl font-bold text-ink">
            Contact
          </h2>
          <p className="text-muted-foreground">
            Questions about these terms:{" "}
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
