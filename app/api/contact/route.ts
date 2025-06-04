import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { z } from "zod";

// Contact form schema
const contactSchema = z.object({
  name: z.string().min(2).regex(/^[a-zA-Z\s]*$/, "Name must contain only letters"),
  email: z.string().email("Invalid email format"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10).max(1000),
  timestamp: z.string().datetime(),
  token: z.string(), // reCAPTCHA token
});

export async function POST(request: Request) {
  try {
    const limiter = await rateLimit(request);
    
    if (!limiter.success) {
      return NextResponse.json(
        { error: "Rate limit exceeded. Please try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();
    
    // Validate the request data
    const validatedData = contactSchema.parse(data);

    // Verify reCAPTCHA token
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${validatedData.token}`,
      { method: "POST" }
    );

    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: "Invalid reCAPTCHA. Please try again." },
        { status: 400 }
      );
    }

    // Here you would typically send the email or store the contact form data
    // For now, we'll simulate a successful submission
    
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}