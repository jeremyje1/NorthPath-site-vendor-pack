export const runtime = "edge";
export const dynamic = "force-dynamic";

export function GET() {
  return new Response(JSON.stringify({ ok: true, ts: Date.now() }), {
    headers: { "content-type": "application/json" },
  });
}
