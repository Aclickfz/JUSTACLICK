import { NextResponse } from "next/server";
import { getFeaturedProducts, getProductCategories } from "@/lib/data";

export async function GET() {
  const [categories, products] = await Promise.all([
    getProductCategories(),
    getFeaturedProducts(),
  ]);
  return NextResponse.json({ categories, products });
}
