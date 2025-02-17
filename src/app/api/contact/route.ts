import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: {
        name: name,
        address: process.env.EMAIL_USER as string,
      },
      replyTo: email,
      to: "aaron@zygur.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `
Contact Form Details:

Name: ${name}
Email: ${email}

Message:
${message}
      `,
      html: `
<h2>Contact Form Details</h2>

<p><strong>Name:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>

<h3>Message:</h3>
<p>${message || 'No message provided.'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    let errorMessage = "Failed to send email";
    
    if (error instanceof Error) {
      errorMessage = error.message;
      // Check for specific nodemailer errors
      if (error.message.includes('EAUTH')) {
        errorMessage = "Email authentication failed. Please check credentials.";
      } else if (error.message.includes('ESOCKET')) {
        errorMessage = "Network error. Please check your connection.";
      }
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
