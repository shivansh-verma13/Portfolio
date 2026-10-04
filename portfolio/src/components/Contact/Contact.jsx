import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { profile } from "../../data/profile";
import { contactConfig, sendContact } from "../../lib/contact";
import Arrow from "../shared/Arrow";
import "./contact.css";
export default function Contact() {
  const form = useRef(null);
  const pending = useRef(false);
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const configured = Object.values(contactConfig).every(Boolean);
  async function submit(event) {
    event.preventDefault();
    if (pending.current) return;
    if (!form.current.reportValidity()) return;
    const fields = new FormData(form.current);
    if (
      !String(fields.get("name")).trim() ||
      !String(fields.get("message")).trim()
    ) {
      setStatus("error");
      setMessage("Please include your name and a message.");
      return;
    }
    if (fields.get("website")) return;
    if (!configured) {
      setStatus("error");
      setMessage(
        "The contact form is not configured yet. Please use the email link instead.",
      );
      return;
    }
    pending.current = true;
    setStatus("sending");
    setMessage("Sending your message…");
    try {
      await sendContact(form.current, contactConfig);
      form.current.reset();
      setStatus("success");
      setMessage("Message sent. Thanks for reaching out.");
      toast.success("Message sent.");
    } catch {
      setStatus("error");
      setMessage(
        "Your message could not be sent. Please try again or email me directly.",
      );
      toast.error("Could not send your message.");
    } finally {
      pending.current = false;
    }
  }
  return (
    <section
      className="section contact-section"
      id="contact"
      tabIndex={-1}
      aria-labelledby="contact-heading"
    >
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">07 / LET’S CONNECT</p>
          <h2 id="contact-heading">
            Let’s build
            <br />
            something useful<span>.</span>
          </h2>
          <p>
            Have a software engineering role, a product to build, or a technical
            problem worth discussing? I’d like to hear about it.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <Arrow />
          </a>
          <div className="contact-social">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>
          </div>
          <span className="mono muted contact-location">
            Based in {profile.location}
          </span>
        </div>
        <form
          ref={form}
          onSubmit={submit}
          className="contact-form"
          aria-busy={status === "sending"}
        >
          <div className="form-heading">
            <h3>Send a message</h3>
            <span className="mono muted">SAY HELLO</span>
          </div>
          <label htmlFor="contact-name">Name</label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            required
            maxLength={100}
          />
          <label htmlFor="contact-email">Email</label>
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            placeholder="you@company.com"
            required
            maxLength={254}
          />
          <label htmlFor="contact-message">Message</label>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me a little about the opportunity…"
            rows={5}
            required
            maxLength={5000}
          />
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="contact-website">Website</label>
            <input
              id="contact-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
            />
          </div>
          <button
            className="button button-primary"
            type="submit"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"} <Arrow />
          </button>
          <p
            className={`form-status status-${status}`}
            role="status"
            aria-live="polite"
          >
            {message ||
              (configured
                ? "Your message goes directly to my inbox."
                : "Prefer email? Use the direct link to get in touch.")}
          </p>
        </form>
      </div>
    </section>
  );
}
