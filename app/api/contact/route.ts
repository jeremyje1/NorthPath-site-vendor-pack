import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const ContactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email").max(320),
  company: z.string().max(100).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, message } = ContactSchema.parse(body);

    // Log the contact form submission
    // eslint-disable-next-line no-console
    console.log("contact_form_submission", {
      name,
      email,
      company,
      message,
      timestamp: new Date().toISOString(),
      userAgent: req.headers.get("user-agent"),
    });

    // TODO: Replace with actual email sending service (SendGrid, AWS SES, etc.)
    // For now, we'll just log and return success

    // Example with SendGrid (commented out):
    // const sgMail = require('@sendgrid/mail');
    // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    //
    // const msg = {
    //   to: 'jeremy.estrella@gmail.com',
    //   from: 'noreply@campusapproval.com',
    //   subject: `Contact Form: ${name} from ${company || 'Unknown Company'}`,
    //   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\n\nMessage:\n${message}`,
    //   html: `
    //     <h3>New Contact Form Submission</h3>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Company:</strong> ${company || 'Not provided'}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `,
    // };
    //
    // await sgMail.send(msg);

    return NextResponse.json({
      success: true,
      message: "Message received. We'll get back to you within 24 hours on business days.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 },
    );
  }
}
