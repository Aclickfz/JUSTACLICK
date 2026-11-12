"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const mobileLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/why-we-exist", label: "Why We Exist" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About Us" },
  { href: "/news", label: "News" },
  { href: "/esg", label: "ESG Strategy" },
  { href: "/innovation", label: "Supply Chain Innovation" },
  { href: "/investors", label: "Investors" },
  { href: "/media", label: "Media" },
  { href: "/suppliers", label: "Suppliers" },
  { href: "/careers", label: "Careers" },
  { href: "/team", label: "Team" },
  { href: "/commitment", label: "Our Commitment" },
  { href: "/purpose", label: "Our Purpose" },
  { href: "/we-manage-you-grow", label: "We Manage You Grow" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const router = useRouter();
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

  function go(href: string) {
    router.push(href);
  }

  const triggerClass = cn(
    "flex-1 justify-center px-3 py-2 text-sm font-medium",
    !solid && "text-white hover:bg-white/15 aria-expanded:bg-white/15"
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-background/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="flex w-full min-h-[76px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="min-w-0 shrink-0">
          <span
            className={cn(
              "font-heading block text-xl font-bold tracking-tight sm:text-2xl",
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

        <Menubar
          className={cn(
            "hidden h-11 min-w-0 flex-1 items-stretch justify-between gap-1 rounded-none border px-1 lg:flex",
            solid
              ? "border-border/80 bg-card/90"
              : "border-white/20 bg-white/10 text-white backdrop-blur-md"
          )}
        >
          <MenubarMenu>
            <MenubarTrigger className={triggerClass}>Explore</MenubarTrigger>
            <MenubarContent className="min-w-56">
              <MenubarGroup>
                <MenubarItem onClick={() => go("/")}>Home</MenubarItem>
                <MenubarItem onClick={() => go("/services")}>
                  Services
                </MenubarItem>
                <MenubarItem onClick={() => go("/products")}>
                  Products
                </MenubarItem>
                <MenubarItem onClick={() => go("/portfolio")}>
                  Portfolio
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem onClick={() => go("/why-we-exist")}>
                  Why We Exist
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={triggerClass}>Company</MenubarTrigger>
            <MenubarContent className="min-w-56">
              <MenubarGroup>
                <MenubarItem onClick={() => go("/about")}>About Us</MenubarItem>
                <MenubarItem onClick={() => go("/news")}>News</MenubarItem>
                <MenubarItem onClick={() => go("/team")}>Team</MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarSub>
                  <MenubarSubTrigger>Our Story</MenubarSubTrigger>
                  <MenubarSubContent>
                    <MenubarGroup>
                      <MenubarItem onClick={() => go("/commitment")}>
                        Our Commitment
                      </MenubarItem>
                      <MenubarItem onClick={() => go("/purpose")}>
                        Our Purpose
                      </MenubarItem>
                      <MenubarItem onClick={() => go("/we-manage-you-grow")}>
                        We Manage You Grow
                      </MenubarItem>
                    </MenubarGroup>
                  </MenubarSubContent>
                </MenubarSub>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={triggerClass}>Network</MenubarTrigger>
            <MenubarContent className="min-w-60">
              <MenubarGroup>
                <MenubarItem onClick={() => go("/innovation")}>
                  Supply Chain Innovation
                </MenubarItem>
                <MenubarItem onClick={() => go("/suppliers")}>
                  Suppliers
                </MenubarItem>
                <MenubarItem onClick={() => go("/esg")}>
                  ESG Strategy
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem onClick={() => go("/investors")}>
                  Investors
                </MenubarItem>
                <MenubarItem onClick={() => go("/media")}>Media</MenubarItem>
                <MenubarItem onClick={() => go("/careers")}>
                  Careers
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>

          <MenubarMenu>
            <MenubarTrigger className={triggerClass}>Account</MenubarTrigger>
            <MenubarContent className="min-w-44">
              <MenubarGroup>
                <MenubarItem onClick={() => go("/login")}>Login</MenubarItem>
                <MenubarItem onClick={() => go("/signup")}>Sign Up</MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>

        <div className="ml-auto flex items-center lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon" }),
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
                {mobileLinks.map((link) => (
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
                  className="mt-3 rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-mist"
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-base font-medium text-foreground hover:bg-mist"
                >
                  Sign Up
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
