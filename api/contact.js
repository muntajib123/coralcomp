// api/contact.js
/* eslint-disable no-console */
const sendUsingSendGrid = async ({ name, email, message }) => {
  const sgMail = require("@sendgrid/mail");
  const key = process.env.SENDGRID_API_KEY;
  if (!key) throw new Error("No SENDGRID_API_KEY configured");
  sgMail.setApiKey(key);

  const msg = {
    to: process.env.CONTACT_TO_EMAIL || "bakthyar@coralcomp.com",
    from: process.env.CONTACT_FROM_EMAIL || "no-reply@coralcomp.com",
    subject: `Website contact form: ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
  };

  return sgMail.send(msg);
};

const sendUsingSMTP = async ({ name, email, message }) => {
  const nodemailer = require("nodemailer");
  const host = process.env.SMTP_HOST;
  if (!host) throw new Error("No SMTP_HOST configured for fallback");
  const transporter = nodemailer.createTransport({
    host,
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT, 10) : 587,
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.CONTACT_FROM_EMAIL || "no-reply@coralcomp.com",
    to: process.env.CONTACT_TO_EMAIL || "bakthyar@coralcomp.com",
    subject: `Website contact form: ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>`,
  };

  return transporter.sendMail(mailOptions);
};

module.exports = async (req, res) => {
  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Basic server-side validation
    const emailRe = /\S+@\S+\.\S+/;
    if (!emailRe.test(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    // Try SendGrid first (recommended)
    try {
      await sendUsingSendGrid({ name, email, message });
      return res.status(200).json({ ok: true });
    } catch (sgErr) {
      console.warn("SendGrid failed:", sgErr.message || sgErr);
      // Fallback to SMTP if configured
      try {
        await sendUsingSMTP({ name, email, message });
        return res.status(200).json({ ok: true, fallback: "smtp" });
      } catch (smtpErr) {
        console.error("SMTP fallback failed:", smtpErr);
        return res.status(500).json({ error: "Failed to send message" });
      }
    }
  } catch (err) {
    console.error("Contact API error:", err);
    return res.status(500).json({ error: "Server error" });
  }
};
