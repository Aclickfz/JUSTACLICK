import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/careers", label: "Careers" },
  { href: "/investors", label: "Investors" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-zinc-950 text-zinc-200">
      <div className="section-shell grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-heading text-2xl font-bold text-white">
            Just A Click
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-400">
            Your complete home furnishing partner — designing, manufacturing,
            and delivering worldwide with a supply chain built for growth.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
            Company
          </h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-red-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>Email: info@justaclick.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Global operations & partner network</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-semibold tracking-wide text-white uppercase">
            Grow With Us
          </h4>
          <p className="text-sm text-zinc-400">
            Buyers, vendors, and partners — one platform to design, produce, and
            deliver with confidence.
          </p>
          <Link
            href="/signup"
            className="mt-4 inline-flex text-sm font-semibold text-red-400 hover:text-red-300"
          >
            Create an account →
          </Link>
        </div>
      </div>

      <Separator className="bg-zinc-800" />
      <div className="section-shell flex flex-col gap-2 py-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Just A Click. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Terms</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  );
}
