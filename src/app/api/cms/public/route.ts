import { NextResponse } from "next/server";
import { getSettings } from "@/lib/cms/store";

// Public endpoint — no auth required, returns settings for the frontend
export async function GET() {
  const settings = getSettings();
  return NextResponse.json({ success: true, settings });
}
