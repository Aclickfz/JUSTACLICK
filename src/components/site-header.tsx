"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { AccountMenu } from "@/components/account-menu";
import { useEffect, useState, type SVGProps } from "react";

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
        "inline-flex items-center gap-1 px-3 py-2 text-[13px] font-semibold tracking-[0.06em] uppercase outline-none transition-colors",
        active ? "text-navy-deep" : "text-ink/80 hover:text-navy-deep"
      )}
    >
      {label}
      <ChevronDown className="size-3.5 opacity-70" />
    </DropdownMenuTrigger>
  );
}

function MenuLink({
  href,
  label,
  onNavigate,
  active,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  active?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={cn(
        "block rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
        active ? "bg-mist text-navy-deep" : "text-foreground hover:bg-mist"
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const goingDown = y > lastY;
      if (goingDown && y > 64) {
        setHidden(true);
        setOpen(false);
      } else {
        setHidden(false);
      }
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const exploreActive =
    exploreLinks.some((l) => l.href !== "/" && pathname.startsWith(l.href)) ||
    pathname === "/";
  const companyActive =
    companyLinks.some((l) => pathname.startsWith(l.href)) ||
    storyLinks.some((l) => pathname.startsWith(l.href));
  const networkActive = networkLinks.some((l) => pathname.startsWith(l.href));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-transform duration-300 will-change-transform",
        hidden && "-translate-y-full"
      )}
    >
      {/* Finanzia-style dark topbar */}
      <div className="hidden bg-navy-deep sm:block">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-4 px-4 py-2.5 text-[12px] text-white/70 sm:px-6 lg:px-8">
          <p className="min-w-0 truncate">
            Committed to clients, focused on results!{" "}
            <Link
              href="/login"
              className="font-semibold text-white underline-offset-2 hover:underline"
            >
              Account →
            </Link>
          </p>
          <div className="flex shrink-0 items-center gap-4">
            <a
              href="tel:+917088671662"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Phone className="size-3.5 shrink-0" />
              <span>+91 7088671662</span>
            </a>
            <a
              href="mailto:info@justaclick.com"
              className="hidden items-center gap-1.5 transition-colors hover:text-white md:inline-flex"
            >
              <Mail className="size-3.5 shrink-0" />
              <span>info@justaclick.com</span>
            </a>
            <div className="flex items-center gap-0.5 border-l border-white/15 pl-3">
              {socialLinks.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="inline-flex size-7 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon className="size-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* White main nav like Finanzia */}
      <div
        className={cn(
          "border-b border-border/80 bg-white text-ink transition-shadow",
          scrolled && "shadow-[0_8px_30px_rgba(5,20,35,0.08)]"
        )}
      >
        <div className="mx-auto flex w-full max-w-[1400px] min-h-[64px] items-center gap-2 px-3 py-2.5 sm:min-h-[78px] sm:gap-3 sm:px-6 sm:py-3 lg:px-8">
          <Link
            href="/"
            className="relative z-10 block h-9 w-[130px] shrink-0 bg-transparent sm:h-11 sm:w-[180px]"
          >
            <Image
              src="/logo/justaclick-logo.png"
              alt="Just A Click"
              fill
              priority
              sizes="180px"
              className="bg-transparent object-contain object-left"
            />
          </Link>

          <nav className="ml-auto hidden items-center gap-0.5 lg:flex">
            <DropdownMenu>
              <NavTrigger label="Explore" active={exploreActive} />
              <DropdownMenuContent align="start" className="z-[100] min-w-52">
                <DropdownMenuGroup>
                  {exploreLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.href}
                      render={<Link href={link.href} />}
                    >
                      {link.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <NavTrigger label="Company" active={companyActive} />
              <DropdownMenuContent align="start" className="z-[100] min-w-56">
                <DropdownMenuGroup>
                  {companyLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.href}
                      render={<Link href={link.href} />}
                    >
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
                        render={<Link href={link.href} />}
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
              <DropdownMenuContent align="start" className="z-[100] min-w-60">
                <DropdownMenuGroup>
                  {networkLinks.map((link) => (
                    <DropdownMenuItem
                      key={link.href}
                      render={<Link href={link.href} />}
                    >
                      {link.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/#contact"
              className="px-3 py-2 text-[13px] font-semibold tracking-[0.06em] text-ink/80 uppercase transition-colors hover:text-navy-deep"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center lg:flex">
            <AccountMenu size="md" />
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <AccountMenu size="sm" />
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "text-ink hover:bg-mist"
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
                      alt="Just A Click"
                      fill
                      className="bg-transparent object-contain object-left"
                    />
                  </div>
                </SheetHeader>
                <div className="mt-4 flex max-h-[80vh] flex-col gap-2 overflow-y-auto pb-8">
                  <Accordion>
                    <AccordionItem value="explore">
                      <AccordionTrigger className="px-1 text-sm font-semibold tracking-wide uppercase">
                        Explore
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-0.5 pb-2">
                          {exploreLinks.map((link) => (
                            <MenuLink
                              key={link.href}
                              {...link}
                              active={pathname === link.href}
                              onNavigate={() => setOpen(false)}
                            />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="company">
                      <AccordionTrigger className="px-1 text-sm font-semibold tracking-wide uppercase">
                        Company
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-0.5 pb-2">
                          {[...companyLinks, ...storyLinks].map((link) => (
                            <MenuLink
                              key={link.href}
                              {...link}
                              active={pathname === link.href}
                              onNavigate={() => setOpen(false)}
                            />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="network">
                      <AccordionTrigger className="px-1 text-sm font-semibold tracking-wide uppercase">
                        Network
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col gap-0.5 pb-2">
                          {networkLinks.map((link) => (
                            <MenuLink
                              key={link.href}
                              {...link}
                              active={pathname === link.href}
                              onNavigate={() => setOpen(false)}
                            />
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  <MenuLink
                    href="/#contact"
                    label="Contact"
                    onNavigate={() => setOpen(false)}
                  />
                  <div className="mt-3 grid gap-2 border-t border-border pt-4">
                    <Link
                      href="/login"
                      onClick={() => setOpen(false)}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "lg" }),
                        "w-full rounded-full"
                      )}
                    >
                      Login
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setOpen(false)}
                      className={cn(
                        buttonVariants({ size: "lg" }),
                        "btn-brand w-full"
                      )}
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
