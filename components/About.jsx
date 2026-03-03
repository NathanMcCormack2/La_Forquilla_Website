import useReveal from "../hooks/useReveal";
import config from "../config";
import { useLanguage } from "../contexts/LanguageContext";

// ─── REPLACE with client's interior / team photo ────────────────────────────
const ABOUT_IMAGE = "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80";
// ─────────────────────────────────────────────────────────────────────────────

export default function About() {
  const leftRef  = useReveal();
  const rightRef = useReveal();
  const { t } = useLanguage();

  return (
    <section
      id="about"
      style={{
        padding: "8rem 0",
        background: "var(--color-background)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "center",
        }}
      >
        {/* Left — image */}
        <div
          ref={leftRef}
          className="reveal"
          style={{ position: "relative" }}
        >
          <img
            src={ABOUT_IMAGE}
            alt={`${config.restaurant.name} interior`}
            style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }}
          />
          {/* Founded badge */}
          <div
            style={{
              position: "absolute",
              bottom: "-1.5rem",
              right: "-1.5rem",
              background: "var(--color-primary)",
              color: "var(--color-background)",
              padding: "1.5rem",
              textAlign: "center",
              minWidth: "110px",
            }}
          >
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.8rem", fontWeight: 600, lineHeight: 1 }}>
              {config.restaurant.founded}
            </div>
            <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", marginTop: "0.3rem" }}>
              Est.
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div ref={rightRef} className="reveal">
          <span className="section-label">{t.about.sectionLabel}</span>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)", marginBottom: "0" }}>
            {t.about.heading1}<br />
            <em>{t.about.heading2}</em>
          </h2>
          <div className="gold-line" />
          <p style={{ color: "var(--color-muted)", fontSize: "1rem", marginBottom: "1.5rem", lineHeight: "1.85" }}>
            {config.restaurant.description}
          </p>

          {/* Key facts row */}
          <div style={{ display: "flex", gap: "2.5rem", marginBottom: "2.5rem" }}>
            {[
              { label: "{t.about.factCuisine}",     value: config.restaurant.cuisine },
              { label: "{t.about.factFounded}",     value: config.restaurant.founded },
              { label: "{t.about.factLocation}",    value: config.restaurant.address.city },
            ].map((fact) => (
              <div key={fact.label}>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.3rem" }}>
                  {fact.label}
                </div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.05rem" }}>
                  {fact.value}
                </div>
              </div>
            ))}
          </div>

          <a href="#menu" className="btn-primary">
            {t.about.cta}
          </a>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          .container {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
