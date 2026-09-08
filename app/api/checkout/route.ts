import { NextRequest, NextResponse } from "next/server";

const servicePrices: Record<string, { name: string; price: number }> = {
  "wash-blow": { name: "Wash & Blow-Dry", price: 220 },
  "silk-press": { name: "Silk Press", price: 350 },
  "knotless-braids": { name: "Knotless Braids", price: 650 },
  "gel-overlay": { name: "Gel Overlay", price: 280 },
  "acrylic-set": { name: "Acrylic Full Set", price: 420 },
};

export async function POST(request: NextRequest) {
  const secretKey = process.env.YOCO_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Online payment is not active yet. Please send your booking on WhatsApp." },
      { status: 503 },
    );
  }

  const body = await request.json();
  const service = servicePrices[body.serviceId];
  if (!service || !body.name || !body.phone || !body.date || !body.time) {
    return NextResponse.json({ error: "Please complete all booking details." }, { status: 400 });
  }
  if (body.paymentOption !== "full" && body.paymentOption !== "deposit") {
    return NextResponse.json({ error: "Please choose a valid online payment option." }, { status: 400 });
  }

  const amount = body.paymentOption === "deposit" ? Math.ceil(service.price * 0.3) : service.price;
  const origin = new URL(request.url).origin;
  const reference = crypto.randomUUID();
  const response = await fetch("https://payments.yoco.com/api/checkouts", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${secretKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": reference,
    },
    body: JSON.stringify({
      amount: amount * 100,
      currency: "ZAR",
      successUrl: `${origin}/?payment=success`,
      cancelUrl: `${origin}/?payment=cancelled`,
      failureUrl: `${origin}/?payment=failed`,
      clientReferenceId: reference,
      metadata: {
        customerName: String(body.name).slice(0, 100),
        customerPhone: String(body.phone).slice(0, 30),
        service: service.name,
        appointmentDate: String(body.date),
        appointmentTime: String(body.time),
        paymentType: body.paymentOption,
      },
    }),
  });

  const checkout = await response.json();
  if (!response.ok || !checkout.redirectUrl) {
    console.error("Yoco checkout error", response.status, checkout);
    return NextResponse.json({ error: "Payment could not be started. Please try again." }, { status: 502 });
  }
  return NextResponse.json({ redirectUrl: checkout.redirectUrl });
}
