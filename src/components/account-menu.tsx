"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const guestLinks = [
  { href: "/login", label: "Login" },
  { href: "/signup", label: "Sign Up" },
];

export function AccountMenu({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const { data, status } = useSession();
  const user = data?.user;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        className={cn(
          "btn-brand inline-flex items-center gap-1 rounded-full font-bold tracking-[0.1em] uppercase outline-none",
          size === "md" ? "h-10 px-6 text-[12px]" : "px-3 py-2 text-[11px]",
          className
        )}
      >
        Account
        <ChevronDown className={size === "md" ? "size-3.5 opacity-90" : "size-3 opacity-90"} />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-[100] min-w-44">
        {status === "authenticated" && user ? (
          <>
            <div className="px-2 py-2">
              <p className="truncate text-sm font-semibold text-ink">
                {user.name || "Member"}
              </p>
              <p className="truncate text-xs text-muted-foreground">
                {user.email}
              </p>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem render={<Link href="/#contact" />}>
                Contact
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  void signOut({ callbackUrl: "/" });
                }}
              >
                Sign out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </>
        ) : (
          <DropdownMenuGroup>
            {guestLinks.map((link) => (
              <DropdownMenuItem
                key={link.href}
                render={<Link href={link.href} />}
              >
                {link.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuGroup>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
