import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Basic payload validation (lightweight email length check only)
const Schema = z.object({
  email: z.string().min(3).max(320),
  company: z.string().min(1).optional(),
  notes: z.string().max(2000).optional(),
});

export async function POST(req: NextRequest) {
  try {
    const { email, company, notes } = Schema.parse(await req.json());
    // eslint-disable-next-line no-console
    console.log("enterprise_quote_request", { email, company, notes });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Invalid payload" }, { status: 400 });
  }
}
