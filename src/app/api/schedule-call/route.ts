import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, company, phone, message } = await request.json();

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
      subject: `New Call Request from ${name} at ${company}`,
      text: `
Call Request Details:

Name: ${name}
Company: ${company}
Email: ${email}
Phone: ${phone}

Additional Information:
${message}
      `,
      html: `
<h2>Call Request Details</h2>

<p><strong>Name:</strong> ${name}</p>
<p><strong>Company:</strong> ${company}</p>
<p><strong>Email:</strong> ${email}</p>
<p><strong>Phone:</strong> ${phone}</p>

<h3>Additional Information:</h3>
<p>${message || 'No additional information provided.'}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Call request submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    let errorMessage = "Failed to submit call request";
    
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
