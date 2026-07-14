import { NextResponse } from "next/server";
import { sendContactEmail } from "../../../lib/server/contactEmail";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_REQUEST_BYTES = 20_000;

function asTrimmedString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function formatSubmittedAt(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Berlin",
    timeZoneName: "short",
  }).format(date);
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(request.headers.get("content-length") || 0);

    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json({ error: "The message is too large." }, { status: 413 });
    }

    const formData = await request.formData();
    const website = asTrimmedString(formData.get("website"));
    const isGerman = asTrimmedString(formData.get("locale")) === "de";

    // Silently accept bot submissions that fill the hidden honeypot field.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    const name = asTrimmedString(formData.get("name"));
    const email = asTrimmedString(formData.get("email"));
    const company = asTrimmedString(formData.get("company"));
    const message = asTrimmedString(formData.get("message"));

    if (name.length < 2 || name.length > 100) {
      return NextResponse.json(
        { error: isGerman ? "Geben Sie einen Namen mit 2 bis 100 Zeichen ein." : "Enter a name between 2 and 100 characters." },
        { status: 400 },
      );
    }

    if (email.length > 254 || !EMAIL_PATTERN.test(email)) {
      return NextResponse.json({ error: isGerman ? "Geben Sie eine gültige E-Mail-Adresse ein." : "Enter a valid email address." }, { status: 400 });
    }

    if (company.length > 120) {
      return NextResponse.json(
        { error: isGerman ? "Der Unternehmensname darf höchstens 120 Zeichen lang sein." : "Company must be 120 characters or fewer." },
        { status: 400 },
      );
    }

    if (message.length < 10 || message.length > 5_000) {
      return NextResponse.json(
        { error: isGerman ? "Geben Sie eine Nachricht mit 10 bis 5.000 Zeichen ein." : "Enter a message between 10 and 5,000 characters." },
        { status: 400 },
      );
    }

    await sendContactEmail({
      name,
      email,
      company,
      message,
      submittedAt: formatSubmittedAt(new Date()),
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send portfolio contact message", error);
    return NextResponse.json(
      { error: "The message could not be sent. Please try again shortly." },
      { status: 500 },
    );
  }
}
