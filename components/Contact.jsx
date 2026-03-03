import { useState } from "react";
import useReveal from "../hooks/useReveal";
import config from "../config";
import { useLanguage } from "../contexts/LanguageContext";

export default function Contact() {
  const [fields,   setFields]   = useState({ name: "", email: "", message: "" });
  const [status,   setStatus]   = useState("idle"); // idle | sending | success | error
  const ref = useReveal();
  const { t } = useLanguage();

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
          <span className="section-label">{t.contact.sectionLabel}</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>{t.contact.heading}</h2>
          <div className="gold-line gold-line--center" />
          <p style={{ color: "var(--color-muted)", fontSize: "0.95rem" }}>
            {t.contact.subheading}<br />
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
              {t.contact.successTitle}
            </div>
            <p style={{ color: "var(--color-muted)", fontSize: "0.9rem" }}>
              {t.contact.successBody}
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">{t.contact.name}</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="form-input"
                  placeholder= {t.contact.namePlaceholder}
                  value={fields.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">{t.contact.email}</label>
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
              <label className="form-label" htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                required
                className="form-textarea"
                placeholder= {t.contact.messagePlaceholder}
                value={fields.message}
                onChange={handleChange}
              />
            </div>

            {status === "error" && (
              <p style={{ color: "#e07070", fontSize: "0.85rem", marginBottom: "1rem" }}>
                {t.contact.errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="btn-primary"
              style={{ width: "100%", textAlign: "center", opacity: status === "sending" ? 0.6 : 1 }}
              disabled={status === "sending"}
            >
              {status === "sending" ? t.contact.sending : t.contact.send}
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
