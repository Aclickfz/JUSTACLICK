import { NextResponse } from "next/server";
import { getJobOpenings } from "@/lib/data";

export async function GET() {
  const jobs = await getJobOpenings();
  return NextResponse.json({ jobs });
}
