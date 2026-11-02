"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import { IoArrowForward } from "react-icons/io5";

type SubmitStatus = {
  type: "idle" | "submitting" | "success" | "error";
  message: string;
};

const initialStatus: SubmitStatus = {
  type: "idle",
  message: "Your email address is only used to reply to your message.",
};

type ContactFormProps = {
  locale?: "en" | "de";
};

export function ContactForm({ locale = "en" }: ContactFormProps) {
  const isGerman = locale === "de";
  const [status, setStatus] = useState<SubmitStatus>(
    isGerman
      ? { type: "idle", message: "Ihre E-Mail-Adresse wird ausschließlich zur Beantwortung Ihrer Nachricht verwendet." }
      : initialStatus,
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const failureMessage = isGerman
      ? "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es in Kürze erneut."
      : "The message could not be sent. Please try again shortly.";

    setStatus({ type: "submitting", message: isGerman ? "Ihre Nachricht wird gesendet…" : "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        // Validation (400) and rate-limit (429) errors are localized by the server; use our own message otherwise.
        const serverMessage = response.status === 400 || response.status === 429 ? payload?.error : undefined;
        setStatus({ type: "error", message: serverMessage || failureMessage });
        return;
      }

      form.reset();
      setStatus({
        type: "success",
        message: isGerman ? "Nachricht erfolgreich gesendet. Vielen Dank. Ich melde mich zeitnah bei Ihnen." : "Message sent successfully. Thank you. I’ll get back to you soon.",
      });
    } catch {
      setStatus({ type: "error", message: failureMessage });
    }
  }

  return (
    <form className="tile contact-form-card" onSubmit={handleSubmit}>
      <p className="section-kicker">{isGerman ? "Kontaktformular" : "Contact form"}</p>
      <h2>{isGerman ? "Kontakt aufnehmen" : "Start a conversation"}</h2>
      <input name="locale" type="hidden" value={locale} />
      <div className="contact-form-grid">
        <label>
          <span>{isGerman ? "Name" : "Name"}</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>{isGerman ? "E-Mail" : "Email"}</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="contact-form-full">
          <span>{isGerman ? "Unternehmen" : "Company"} <small>({isGerman ? "optional" : "optional"})</small></span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label className="contact-form-full">
          <span>{isGerman ? "Nachricht" : "Message"}</span>
          <textarea name="message" rows={6} minLength={10} maxLength={5000} required />
        </label>
        <div className="contact-honeypot" aria-hidden="true">
          <label>
            <span>Website</span>
            <input name="website" type="text" autoComplete="off" tabIndex={-1} />
          </label>
        </div>
      </div>
      <div className="contact-form-footer">
        <button
          className="button button-primary"
          type="submit"
          aria-describedby="contact-form-note"
          disabled={status.type === "submitting"}
        >
          {status.type === "submitting" ? (isGerman ? "Wird gesendet…" : "Sending…") : (isGerman ? "Nachricht senden" : "Send message")}
          {status.type !== "submitting" && <IoArrowForward aria-hidden="true" />}
        </button>
        <p
          id="contact-form-note"
          data-status={status.type}
          role={status.type === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {status.message}
        </p>
      </div>
    </form>
  );
}
