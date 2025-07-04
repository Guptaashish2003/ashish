import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_RESEND_API_KEY);
console.log("Resend initialized with API key:", process.env.NEXT_RESEND_API_KEY);

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "Missing fields" });
  }
  console.log("Received data:", { name, email, subject, message });

  try {
    const data = await resend.emails.send({
      from: email || "",
      to: ["work.ar.gutpa@gmail.com"],
      subject: `New message from ${name}: ${subject}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ message: "Email sent", data:data,success:true });
  } catch (err) {
    console.error("Error sending with Resend:", err);
    return res.status(500).json({ message: "Failed to send email", success:false });
  }
}
