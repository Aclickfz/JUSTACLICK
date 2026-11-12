import { NextResponse } from "next/server";
import { getNewsPosts, getPressReleases } from "@/lib/data";

export async function GET() {
  const [posts, press] = await Promise.all([
    getNewsPosts(),
    getPressReleases(),
  ]);
  return NextResponse.json({ posts, press });
}
