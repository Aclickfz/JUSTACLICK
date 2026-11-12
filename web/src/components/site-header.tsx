"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const primaryLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/why-we-exist", label: "Why We Exist" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News" },
];

const moreLinks = [
  { href: "/esg", label: "ESG Strategy" },
  { href: "/innovation", label: "Supply Chain Innovation" },
  { href: "/investors", label: "Investors" },
  { href: "/media", label: "Media" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/careers", label: "Careers" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lightTop = pathname === "/login" || pathname === "/signup";
  const solid = scrolled || lightTop;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-background/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="section-shell flex min-h-[76px] items-center justify-between gap-4 py-3">
        <Link href="/" className="min-w-0 shrink-0">
          <span
            className={cn(
              "font-heading block text-xl font-bold tracking-tight sm:text-2xl md:text-[1.75rem]",
              solid ? "text-ink" : "text-white drop-shadow-sm"
            )}
          >
            Just A Click
          </span>
          <span
            className={cn(
              "mt-0.5 block text-[10px] font-medium tracking-[0.14em] uppercase sm:text-[11px]",
              solid ? "text-brand" : "text-white/75"
            )}
          >
            And Lets Grow Together
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {primaryLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-2.5 py-2 text-[13px] font-medium transition-colors",
                  solid
                    ? active
                      ? "text-ink"
                      : "text-muted-foreground hover:text-ink"
                    : active
                      ? "text-white"
                      : "text-white/70 hover:text-white"
                )}
              >
                {link.label}
                {active ? (
                  <span
                    className={cn(
                      "absolute inset-x-2 -bottom-0.5 h-px",
                      solid ? "bg-brand" : "bg-white"
                    )}
                  />
                ) : null}
              </Link>
            );
          })}
          <div className="group relative">
            <button
              type="button"
              className={cn(
                "flex items-center px-2.5 py-2 text-[13px] font-medium transition-colors",
                solid
                  ? "text-muted-foreground hover:text-ink"
                  : "text-white/70 hover:text-white"
              )}
            >
              More <ChevronDown className="ml-1 size-3.5 opacity-70" />
            </button>
            <div className="invisible absolute right-0 top-full z-50 mt-2 w-60 border border-border bg-card py-2 opacity-0 shadow-[0_20px_50px_rgba(15,23,42,0.12)] transition-all group-hover:visible group-hover:opacity-100">
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-mist hover:text-brand"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className={cn(
              buttonVariants({ size: "default" }),
              "hidden h-9 px-5 text-sm font-semibold sm:inline-flex",
              solid
                ? "btn-brand"
                : "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-ink"
            )}
          >
            Login
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "xl:hidden",
                !solid && "text-white hover:bg-white/10 hover:text-white"
              )}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="font-heading text-left text-2xl">
                  Just A Click
                </SheetTitle>
              </SheetHeader>
              <div className="mt-6 flex flex-col gap-1">
                {[...primaryLinks, ...moreLinks].map((link) => (
                  <Link
                    key={link.href}
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
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className={cn(
                    buttonVariants(),
                    "btn-brand mt-4 text-center"
                  )}
                >
                  Login
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
