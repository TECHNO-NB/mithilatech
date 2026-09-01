import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Name, email and message are required.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: `"Mithila Tech Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: subject || `New Contact Message from ${name}`,

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

          <div style="
            padding: 25px;
            border: 1px solid #eee;
            border-top: 0;
          ">
            <p>
              <strong>Name:</strong><br />
              ${name}
            </p>

            <p>
              <strong>Email:</strong><br />
              ${email}
            </p>

            <p>
              <strong>Subject:</strong><br />
              ${subject || "No subject"}
            </p>

            <p>
              <strong>Message:</strong>
            </p>

            <div style="
              padding: 15px;
              background: #f5f5f5;
              border-radius: 8px;
              white-space: pre-wrap;
            ">
              ${message}
            </div>
          </div>
        </div>
      `,
    });

    return NextResponse.json(
      {
        message: "Your message has been sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("SMTP Error:", error);

    return NextResponse.json(
      {
        error: "Failed to send message. Please try again.",
      },
      { status: 500 }
    );
  }
}
