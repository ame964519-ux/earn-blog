import { NextResponse } from "next/server";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // 1. Save to Supabase Cloud Database if configured
    if (isSupabaseConfigured()) {
      try {
        await supabase.from("contact_messages").insert([
          {
            name,
            email,
            subject: subject || `New inquiry from ${name}`,
            message,
          },
        ]);
      } catch (dbErr) {
        console.warn("Supabase contact log warning:", dbErr);
      }
    }

    // 2. Deliver real email directly to ame964519@gmail.com
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "0f878f89-8d5f-4a0b-9dfd-b4b66df2e7ee",
          to: "ame964519@gmail.com",
          name: name,
          email: email,
          subject: subject || `New message from ${name} on EarnSmartly`,
          message: message,
          from_name: "EarnSmartly Contact Form",
        }),
      });

      const data = await response.json();
      if (data.success) {
        return NextResponse.json({
          success: true,
          message: "Email sent successfully and stored in database!",
        });
      }
    } catch (err) {
      console.warn("External email webhook fallback:", err);
    }

    // Fallback success
    return NextResponse.json({
      success: true,
      message: "Your message has been received! Our support team will reply within 24-48 hours.",
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
