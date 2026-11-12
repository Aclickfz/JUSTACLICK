"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ChevronDown, Mail, Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState, type SVGProps } from "react";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/why-we-exist", label: "Why We Exist" },
];

const companyLinks = [
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News" },
  { href: "/team", label: "Team" },
];

const storyLinks = [
  { href: "/commitment", label: "Our Commitment" },
  { href: "/purpose", label: "Our Purpose" },
  { href: "/we-manage-you-grow", label: "We Manage You Grow" },
];

const networkLinks = [
  { href: "/innovation", label: "Supply Chain Innovation" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/esg", label: "ESG Strategy" },
  { href: "/investors", label: "Investors" },
  { href: "/media", label: "Media" },
  { href: "/careers", label: "Careers" },
];

const accountLinks = [
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
];

const mobileLinks = [
  ...exploreLinks,
  ...companyLinks,
  ...storyLinks,
  ...networkLinks,
  { href: "/#contact", label: "Contact" },
  ...accountLinks,
];

function IconX(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconFacebook(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.84c0-2.37 1.4-3.69 3.56-3.69 1.03 0 2.12.19 2.12.19v2.34h-1.2c-1.18 0-1.55.74-1.55 1.49v1.79h2.64l-.42 2.91h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93z" />
    </svg>
  );
}

function IconLinkedin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
    </svg>
  );
}

function IconInstagram(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://twitter.com", label: "X", Icon: IconX },
  { href: "https://facebook.com", label: "Facebook", Icon: IconFacebook },
  { href: "https://linkedin.com", label: "LinkedIn", Icon: IconLinkedin },
  { href: "https://instagram.com", label: "Instagram", Icon: IconInstagram },
];

function NavTrigger({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <DropdownMenuTrigger
      className={cn(
        "inline-flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-[0.08em] uppercase outline-none transition-colors",
        active ? "text-brand" : "text-white/85 hover:text-brand"
      )}
    >
      {label}
      <ChevronDown className="size-3.5 opacity-70" />
    </DropdownMenuTrigger>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);

  function go(href: string) {
    router.push(href);
  }

  const exploreActive = exploreLinks.some(
    (l) => l.href !== "/" && pathname.startsWith(l.href)
  ) || pathname === "/";
  const companyActive =
    companyLinks.some((l) => pathname.startsWith(l.href)) ||
    storyLinks.some((l) => pathname.startsWith(l.href));
  const networkActive = networkLinks.some((l) => pathname.startsWith(l.href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navy text-white shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
      <div className="border-b border-white/10 bg-navy-deep">
        <div className="flex w-full items-center justify-between gap-4 px-4 py-2.5 text-[12px] text-white/65 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-wrap items-center gap-x-5 gap-y-1">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="size-3.5 shrink-0 text-brand" />
              <span className="truncate">
                Phone: <span className="text-white/80">+91 7088671662</span>
              </span>
            </a>
            <a
              href="mailto:info@justaclick.com"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="size-3.5 shrink-0 text-brand" />
              <span className="truncate">
                Email:{" "}
                <span className="text-white/80">info@justaclick.com</span>
              </span>
            </a>
          </div>

          <div className="hidden items-center gap-1 sm:flex">
            {socialLinks.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex size-7 items-center justify-center rounded-sm text-white/55 transition-colors hover:bg-white/10 hover:text-white"
              >
                <Icon className="size-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex w-full min-h-[74px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="relative z-10 block h-10 w-[150px] shrink-0 bg-transparent sm:h-11 sm:w-[180px]"
        >
          <Image
            src="/logo/justaclick-logo.png"
            alt="JustAClick"
            fill
            priority
            sizes="180px"
            className="bg-transparent object-contain object-left brightness-0 invert"
          />
        </Link>

        <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
          <DropdownMenu>
            <NavTrigger label="Explore" active={exploreActive} />
            <DropdownMenuContent align="start" className="min-w-52 z-[100]">
              <DropdownMenuGroup>
                {exploreLinks.map((link) => (
                  <DropdownMenuItem key={link.href} onClick={() => go(link.href)}>
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <NavTrigger label="Company" active={companyActive} />
            <DropdownMenuContent align="start" className="min-w-56 z-[100]">
              <DropdownMenuGroup>
                {companyLinks.map((link) => (
                  <DropdownMenuItem key={link.href} onClick={() => go(link.href)}>
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Our Story</DropdownMenuSubTrigger>
                <DropdownMenuSubContent className="z-[110]">
                  {storyLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.href}
                      onClick={() => go(link.href)}
                    >
                      {link.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <NavTrigger label="Network" active={networkActive} />
            <DropdownMenuContent align="start" className="min-w-60 z-[100]">
              <DropdownMenuGroup>
                {networkLinks.map((link) => (
                  <DropdownMenuItem key={link.href} onClick={() => go(link.href)}>
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link
            href="/#contact"
            className={cn(
              "px-3 py-2 text-[13px] font-semibold tracking-[0.08em] uppercase transition-colors",
              "text-white/85 hover:text-brand"
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="hidden items-center lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="btn-brand inline-flex items-center gap-1 rounded-md px-5 py-2.5 text-[12px] font-bold tracking-[0.12em] uppercase outline-none">
              Account
              <ChevronDown className="size-3.5 opacity-90" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-40 z-[100]">
              <DropdownMenuGroup>
                {accountLinks.map((link) => (
                  <DropdownMenuItem key={link.href} onClick={() => go(link.href)}>
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger className="btn-brand inline-flex items-center gap-1 rounded-md px-3 py-2 text-[11px] font-bold tracking-[0.1em] uppercase outline-none">
              Account
              <ChevronDown className="size-3 opacity-90" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-40 z-[100]">
              <DropdownMenuGroup>
                {accountLinks.map((link) => (
                  <DropdownMenuItem key={link.href} onClick={() => go(link.href)}>
                    {link.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "text-white hover:bg-white/10 hover:text-white"
              )}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="sr-only">Just A Click menu</SheetTitle>
                <div className="relative h-9 w-[150px] bg-transparent">
                  <Image
                    src="/logo/justaclick-logo.png"
                    alt="JustAClick"
                    fill
                    className="bg-transparent object-contain object-left"
                  />
                </div>
              </SheetHeader>
              <div className="mt-6 flex max-h-[80vh] flex-col gap-1 overflow-y-auto">
                {mobileLinks.map((link) => (
                  <Link
                    key={link.href + link.label}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "rounded-md px-3 py-2.5 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-brand/10 text-brand"
                        : "text-foreground hover:bg-mist"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
