import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Parse form data (jQuery $.serialize sends URL-encoded data)
    const contentType = request.headers.get("content-type") || "";
    let name, email, phone, city, message;

    if (contentType.includes("application/x-www-form-urlencoded")) {
      const formData = await request.formData();
      name = formData.get("name");
      email = formData.get("email");
      phone = formData.get("phone");
      city = formData.get("city");
      message = formData.get("message");
    } else {
      const body = await request.json();
      name = body.name;
      email = body.email;
      phone = body.phone;
      city = body.city;
      message = body.message;
    }

    // Validation (same rules as original mail.php)
    if (!name || name.trim() === "") {
      return NextResponse.json({ error: "Please enter your name." });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." });
    }

    if (!message || message.trim() === "") {
      return NextResponse.json({ error: "The message field is required!" });
    }

    if (!phone || phone.trim() === "") {
      return NextResponse.json({ error: "Please enter your phone number." });
    }

    if (!city || city.trim() === "") {
      return NextResponse.json({ error: "Please enter your city." });
    }

    // TODO: Integrate Nodemailer or another email service here
    // Example with Nodemailer:
    //
    // const nodemailer = require('nodemailer');
    // const transporter = nodemailer.createTransport({
    //   host: 'smtp.gmail.com',
    //   port: 587,
    //   auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    //   },
    // });
    //
    // await transporter.sendMail({
    //   from: email,
    //   to: 'your_email@domain.com',
    //   subject: `Contact from ${name}`,
    //   text: `From: ${name}\nPhone: ${phone}\nCity: ${city}\nEmail: ${email}\nMessage: ${message}`,
    // });

    // Log the contact submission (for development)
    console.log("Contact form submission:", { name, email, phone, city, message });

    // Return success (same format as original mail.php)
    return NextResponse.json({ error: false });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Sorry, an error occurred!" });
  }
}
