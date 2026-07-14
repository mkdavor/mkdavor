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

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>(initialStatus);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    setStatus({ type: "submitting", message: "Sending your message…" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: new FormData(form),
      });
      const payload = (await response.json().catch(() => null)) as { error?: string } | null;

      if (!response.ok) {
        throw new Error(payload?.error || "The message could not be sent.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. Thank you — I’ll get back to you soon.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "The message could not be sent.",
      });
    }
  }

  return (
    <form className="tile contact-form-card" onSubmit={handleSubmit}>
      <p className="section-kicker">Contact form</p>
      <h2>Start a conversation</h2>
      <div className="contact-form-grid">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="contact-form-full">
          <span>Company <small>(optional)</small></span>
          <input name="company" type="text" autoComplete="organization" />
        </label>
        <label className="contact-form-full">
          <span>Message</span>
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
          {status.type === "submitting" ? "Sending…" : "Send message"}
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
