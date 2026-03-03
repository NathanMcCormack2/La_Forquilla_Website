import { useState } from "react";
import useReveal from "../hooks/useReveal";
import config from "../config";

export default function Contact() {
  const [fields,   setFields]   = useState({ name: "", email: "", message: "" });
  const [status,   setStatus]   = useState("idle"); // idle | sending | success | error
  const ref = useReveal();

  const handleChange = (e) =>
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(config.formspreeEndpoint, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify(fields),
      });
      if (res.ok) {
        setStatus("success");
        setFields({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      style={{
        padding: "8rem 0",
        background: "var(--color-background)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container" style={{ maxWidth: "640px" }}>
        <div
          ref={ref}
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-label">Get in Touch</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>Contact Us</h2>
          <div className="gold-line gold-line--center" />
          <p style={{ color: "var(--color-muted)", fontSize: "0.95rem" }}>
            Have a question, a large group booking, or a special occasion?<br />
            We&apos;d love to hear from you.
          </p>
        </div>

        {status === "success" ? (
          <div
            style={{
              textAlign: "center",
              padding: "3rem",
              border: "1px solid var(--color-border)",
              background: "var(--color-surface)",
            }}
          >
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", marginBottom: "0.75rem", fontStyle: "italic" }}>
              Thank you!
            </div>
            <p style={{ color: "var(--color-muted)", fontSize: "0.9rem" }}>
              We&apos;ve received your message and will be in touch shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="form-input"
                  placeholder="Your name"
                  value={fields.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="form-input"
                  placeholder="your@email.com"
                  value={fields.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-textarea"
                placeholder="Tell us how we can help..."
                value={fields.message}
                onChange={handleChange}
              />
            </div>

            {status === "error" && (
              <p style={{ color: "#e07070", fontSize: "0.85rem", marginBottom: "1rem" }}>
                Something went wrong. Please try again or call us directly.
              </p>
            )}

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", textAlign: "center", opacity: status === "sending" ? 0.6 : 1 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        {/* Direct contact links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "3rem",
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid var(--color-border)",
          }}
        >
          <a
            href={`tel:${config.restaurant.phone}`}
            style={{ textAlign: "center" }}
          >
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.4rem" }}>
              Call
            </div>
            <div style={{ color: "var(--color-primary)", fontFamily: "'DM Sans', sans-serif" }}>
              {config.restaurant.phone}
            </div>
          </a>
          <a
            href={`mailto:${config.restaurant.email}`}
            style={{ textAlign: "center" }}
          >
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.4rem" }}>
              Email
            </div>
            <div style={{ color: "var(--color-primary)", fontFamily: "'DM Sans', sans-serif" }}>
              {config.restaurant.email}
            </div>
          </a>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 520px) {
          form > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
