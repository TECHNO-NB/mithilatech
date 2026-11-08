
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASSWORD,
      CONTACT_EMAIL,
    } = process.env;

    if (
      !SMTP_HOST ||
      !SMTP_PORT ||
      !SMTP_USER ||
      !SMTP_PASSWORD ||
      !CONTACT_EMAIL
    ) {
      throw new Error("SMTP environment variables are missing.");
    }

    const port = Number(SMTP_PORT);

   const transporter = nodemailer.createTransport({
        host: SMTP_HOST,
        port,
        secure: port === 465, 
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASSWORD,
        },
        tls: {
          servername: "mail.mithilatechsolutions.com",
        },
        connectionTimeout: 30000,
        greetingTimeout: 30000,
        socketTimeout: 60000,
});

    const safeName = escapeHtml(name.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeSubject = escapeHtml(subject?.trim() || "No subject");
    const safeMessage = escapeHtml(message.trim());

    await transporter.sendMail({
      from: `"Mithila Tech Website" <${SMTP_USER}>`,
      to: CONTACT_EMAIL,
      replyTo: email.trim(),
      subject: subject?.trim() || `New Contact Message from ${name}`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: auto;">
          <div style="
            background: linear-gradient(135deg, #7c3aed, #ec4899);
            padding: 20px;
            border-radius: 12px 12px 0 0;
            color: white;
          ">
            <h2 style="margin: 0;">New Contact Form Message</h2>
          </div>

          <div style="padding: 25px; border: 1px solid #eee;">
            <p><strong>Name:</strong><br />${safeName}</p>
            <p><strong>Email:</strong><br />${safeEmail}</p>
            <p><strong>Subject:</strong><br />${safeSubject}</p>

            <p><strong>Message:</strong></p>

            <div style="
              padding: 15px;
              background: #f5f5f5;
              border-radius: 8px;
              white-space: pre-wrap;
            ">${safeMessage}</div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      { message: "Your message has been sent successfully!" },
      { status: 200 }
    );

  } catch (error) {
    console.error("SMTP Error:", error);

    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
