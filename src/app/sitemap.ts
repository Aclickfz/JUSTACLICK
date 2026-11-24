import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = [
  "/",
  "/about",
  "/services",
  "/products",
  "/portfolio",
  "/why-we-exist",
  "/news",
  "/team",
  "/commitment",
  "/purpose",
  "/we-manage-you-grow",
  "/innovation",
  "/suppliers",
  "/esg",
  "/investors",
  "/media",
  "/careers",
  "/login",
  "/signup",
  "/terms",
  "/privacy",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path === "/login" || path === "/signup" ? 0.4 : 0.7,
  }));
}
