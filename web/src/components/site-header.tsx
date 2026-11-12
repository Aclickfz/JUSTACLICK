"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useState } from "react";

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

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-white/90 backdrop-blur-md">
      <div className="section-shell flex min-h-[80px] items-center justify-between gap-4 py-3">
        <Link href="/" className="min-w-0 shrink-0">
          <span className="font-heading block text-xl font-bold tracking-tight text-foreground sm:text-2xl md:text-3xl">
            Just A Click
          </span>
          <span className="mt-0.5 block text-[10px] font-medium text-red-800 sm:text-xs">
            And Lets Grow Together
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-red-50 text-red-900"
                  : "text-muted-foreground hover:text-red-900"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-red-900"
            >
              More <ChevronDown className="ml-1 size-3" />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-border bg-white py-2 opacity-0 shadow-xl transition-all group-hover:visible group-hover:opacity-100">
              {moreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-red-50 hover:text-red-900"
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
              "hidden bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md hover:from-red-600 hover:to-red-700 sm:inline-flex"
            )}
          >
            Login
          </Link>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
                "lg:hidden"
              )}
            >
              <Menu className="size-5" />
              <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[340px]">
              <SheetHeader>
                <SheetTitle className="font-heading text-left">
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
                      "rounded-md px-3 py-2 text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-red-50 text-red-900"
                        : "text-foreground hover:bg-red-50 hover:text-red-900"
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
                    "mt-4 bg-gradient-to-r from-red-500 to-red-600 text-center text-white"
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
