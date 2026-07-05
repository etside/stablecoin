import { NextRequest, NextResponse } from "next/server";
import { getSettings, updateSettings, resetSettings } from "@/lib/cms/store";
import { validateToken } from "@/lib/cms/auth";

function getAuthHeader(request: NextRequest): string | null {
  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) {
    return auth.slice(7);
  }
  return null;
}

export async function GET(request: NextRequest) {
  const token = getAuthHeader(request);
  if (!token || !validateToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const settings = getSettings();
  return NextResponse.json({ success: true, settings });
}

export async function PUT(request: NextRequest) {
  const token = getAuthHeader(request);
  if (!token || !validateToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const updated = updateSettings(body);
    return NextResponse.json({ success: true, settings: updated });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}

export async function DELETE(request: NextRequest) {
  const token = getAuthHeader(request);
  if (!token || !validateToken(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const settings = resetSettings();
  return NextResponse.json({ success: true, settings });
}
