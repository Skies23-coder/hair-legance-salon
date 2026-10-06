import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const respond = (error: string, status: number) =>
    NextResponse.json({ error }, { status, headers: { "Cache-Control": "no-store" } });
  if (request.headers.get("origin") !== new URL(request.url).origin) {
    return respond("Please submit your booking from the salon website.", 403);
  }
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;
  if (!url || !key) return respond("Online booking is not ready yet. Contact the salon on WhatsApp.", 503);
  let body: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 8000) return respond("Booking details are too long.", 413);
    body = JSON.parse(raw);
    if (!body || typeof body !== "object" || Array.isArray(body)) throw new Error();
  } catch {
    return respond("Please complete the booking form.", 400);
  }
  if (body.website) return respond("Unable to send this booking.", 400);
  const fields = ["requestId", "name", "phone", "service", "date", "time", "payment", "notes"];
  if (fields.some(field => typeof body[field] !== "string")) return respond("Please complete all booking details.", 400);
  const value = (field: string) => (body[field] as string).trim();
  if (!/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value("requestId")) ||
      !/^\d{4}-\d{2}-\d{2}$/.test(value("date")) ||
      !/^([01]\d|2[0-3]):[0-5]\d$/.test(value("time")) ||
      value("service").length > 100 || value("name").length > 100 ||
      value("phone").length > 30 || value("notes").length > 1000) {
    return respond("Check your booking details and try again.", 400);
  }
  try {
    const headers: Record<string, string> = { apikey: key, "Content-Type": "application/json" };
    // Legacy service_role JWTs also require bearer authorization. New secret
    // keys use the apikey header and must never be used in browser code.
    if (key.startsWith("eyJ")) headers.Authorization = `Bearer ${key}`;
    const result = await fetch(`${url.replace(/\/$/, "")}/rest/v1/rpc/submit_website_booking`, {
      method: "POST", headers, cache: "no-store", signal: AbortSignal.timeout(15000),
      body: JSON.stringify({ p_request_id: value("requestId"), p_name: value("name"),
        p_phone: value("phone"), p_service: value("service"), p_date: value("date"),
        p_time: value("time"), p_payment: value("payment"), p_notes: value("notes") }),
    });
    if (!result.ok) {
      const error = await result.json().catch(() => ({}));
      // Only deliberately raised validation messages are safe to show.
      if (error.code === "P0001" && typeof error.message === "string") {
        return respond(error.message, error.message.includes("wait a minute") ? 429 : 400);
      }
      return respond("The booking could not be saved. Please try again or contact the salon.", 502);
    }
    return NextResponse.json({ success: true }, { headers: { "Cache-Control": "no-store" } });
  } catch {
    return respond("The connection timed out. Try again with the same form to avoid duplicates.", 503);
  }
}
