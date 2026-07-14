import { Resend } from "resend";

type ContactEmailInput = {
  name: string;
  email: string;
  company: string;
  message: string;
  submittedAt: string;
};

let resendClient: Resend | null = null;

function getRequiredEnv(
  name: "RESEND_API_KEY" | "RESEND_FROM_EMAIL_CONTACT" | "RESEND_TO_EMAIL",
) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

function getResendClient() {
  if (!resendClient) {
    resendClient = new Resend(getRequiredEnv("RESEND_API_KEY"));
  }

  return resendClient;
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMessageHtml(value: string) {
  return escapeHtml(value).replace(/\r\n|\r|\n/g, "<br />");
}

function makeEmailText(input: ContactEmailInput) {
  return [
    "New portfolio contact message",
    "",
    `Name: ${input.name}`,
    `Email: ${input.email}`,
    `Company: ${input.company || "Not provided"}`,
    `Submitted at: ${input.submittedAt}`,
    "",
    "Message:",
    input.message,
  ].join("\n");
}

function makeEmailHtml(input: ContactEmailInput) {
  const rows = [
    ["Name", input.name],
    ["Email", input.email],
    ["Company", input.company || "Not provided"],
    ["Submitted at", input.submittedAt],
  ];

  return `
    <div style="font-family: Arial, sans-serif; color: #101827; line-height: 1.5;">
      <h2 style="margin: 0 0 12px; color: #101827;">New portfolio contact message</h2>
      <p style="margin: 0 0 20px;">A visitor submitted the contact form on davordenikj.com.</p>
      <table cellpadding="0" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 680px;">
        <tbody>
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th align="left" style="border-bottom: 1px solid #dfe5ec; color: #4c596b; font-size: 14px; padding: 9px 16px 9px 0; width: 120px;">
                    ${escapeHtml(label)}
                  </th>
                  <td style="border-bottom: 1px solid #dfe5ec; font-size: 14px; padding: 9px 0;">
                    ${escapeHtml(value)}
                  </td>
                </tr>
              `,
            )
            .join("")}
        </tbody>
      </table>
      <h3 style="margin: 22px 0 8px; color: #101827;">Message</h3>
      <div style="border-left: 4px solid #ff6347; padding: 2px 0 2px 14px;">${formatMessageHtml(input.message)}</div>
    </div>
  `;
}

export async function sendContactEmail(input: ContactEmailInput) {
  const response = await getResendClient().emails.send({
    from: getRequiredEnv("RESEND_FROM_EMAIL_CONTACT"),
    to: [getRequiredEnv("RESEND_TO_EMAIL")],
    replyTo: input.email,
    subject: `Portfolio contact from ${input.name.replace(/[\r\n]+/g, " ")}`,
    text: makeEmailText(input),
    html: makeEmailHtml(input),
  });

  if (response.error) {
    throw new Error(response.error.message || "Unable to send contact email.");
  }

  return response.data;
}
