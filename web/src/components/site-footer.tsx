import Image from "next/image";
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
    <footer className="border-t border-white/10 bg-ink text-white">
      <div className="section-shell grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" className="relative mb-4 block h-10 w-[170px] bg-transparent">
            <Image
              src="/logo/justaclick-logo.png"
              alt="JustAClick"
              fill
              sizes="170px"
              className="bg-transparent object-contain object-left brightness-0 invert"
            />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
            Your complete home furnishing partner — designing, manufacturing,
            and delivering worldwide with a supply chain built for growth.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">
            Company
          </h4>
          <ul className="space-y-3 text-sm text-white/65">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition-colors hover:text-brand"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-white/65">
            <li>Email:aclickfz@gmail.com</li>
            <li>Phone: +91 7088671662</li>
            <li>Global operations & partner network</li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-xs font-semibold tracking-[0.18em] text-white/40 uppercase">
            Grow With Us
          </h4>
          <p className="text-sm leading-relaxed text-white/65">
            Buyers, vendors, and partners — one platform to design, produce, and
            deliver with confidence.
          </p>
          <Link
            href="/signup"
            className="mt-5 inline-flex text-sm font-semibold text-brand hover:text-white"
          >
            Create an account →
          </Link>
        </div>
      </div>

      <Separator className="bg-white/10" />
      <div className="section-shell flex flex-col gap-2 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Just A Click. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Terms</span>
          <span>Privacy</span>
        </div>
      </div>
    </footer>
  );
}
