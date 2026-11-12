import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ChatContactWidget } from "@/components/chat-contact-widget";
import { Providers } from "@/components/providers";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Just A Click - The Supply Chain of the Future",
    template: "%s | Just A Click",
  },
  description:
    "We Design, Manufacture & Deliver Worldwide. Your complete home furnishing partner.",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/logo/justaclick-logo.png", type: "image/png" },
    ],
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full`}>
      <body className="flex min-h-full flex-col font-sans antialiased">
        <Providers>
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
          <ChatContactWidget />
          <Toaster richColors position="top-right" />
        </Providers>
      </body>
    </html>
  );
}
