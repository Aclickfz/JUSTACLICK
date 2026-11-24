export const siteConfig = {
  name: "Just A Click",
  shortName: "Just A Click",
  tagline: "The Supply Chain of the Future",
  description:
    "We Design, Manufacture & Deliver Worldwide. Your complete home furnishing supply chain partner for buyers, wholesalers, and vendors.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://justaclick.com",
  email: "info@justaclick.com",
  phone: "+91 7088671662",
  phoneHref: "tel:+917088671662",
  locale: "en_US",
  ogImage: "/logo/justaclick-logo.png",
} as const;

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: absoluteUrl(siteConfig.ogImage),
    email: siteConfig.email,
    telephone: siteConfig.phone,
    description: siteConfig.description,
    sameAs: [] as string[],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: absoluteUrl(siteConfig.ogImage),
    },
  };
}
