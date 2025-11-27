import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface InquiryPayload {
  type: "INSERT";
  table: "inquiries";
  record: {
    id: string;
    full_name: string;
    email: string;
    phone: string | null;
    service_interest: string | null;
    message: string;
    created_at: string;
  };
}

serve(async (req) => {
  try {
    const payload: InquiryPayload = await req.json();

    // Only process INSERT events
    if (payload.type !== "INSERT") {
      return new Response(JSON.stringify({ message: "Ignored non-INSERT event" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }

    const { full_name, email, phone, service_interest, message, created_at } = payload.record;

    // Format the email content
    const emailHtml = `
      <h2>New Inquiry from Afritop Ventures Website</h2>
      <p><strong>From:</strong> ${full_name}</p>
      <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service Interest:</strong> ${service_interest || "Not specified"}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="background: #f5f5f5; padding: 15px; border-left: 4px solid #f59e0b;">
        ${message.replace(/\n/g, "<br>")}
      </blockquote>
      <p style="color: #666; font-size: 12px;">Received: ${new Date(created_at).toLocaleString()}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This email was sent automatically from your Afritop Ventures website contact form.</p>
    `;

    // Send email via Resend
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Afritop Ventures <notifications@afritopventures.com>",
        to: ["info@afritopventures.com"],
        subject: `New Inquiry: ${service_interest || "General"} - ${full_name}`,
        html: emailHtml,
        reply_to: email,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error("Resend error:", data);
      return new Response(JSON.stringify({ error: data }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
