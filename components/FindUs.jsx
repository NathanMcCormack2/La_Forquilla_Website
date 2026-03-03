import useReveal from "../hooks/useReveal";
import config from "../config";
import { useLanguage } from "../contexts/LanguageContext";

const TODAY = new Date().toLocaleDateString("en-IE", { weekday: "long" });

export default function FindUs() {
  const leftRef  = useReveal();
  const rightRef = useReveal();
  const { t } = useLanguage();

  const { restaurant, hours } = config;

  return (
    <section
      id="findus"
      style={{
        padding: "8rem 0",
        background: "var(--color-surface)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "6rem",
          alignItems: "start",
        }}
      >
        {/* Left — info */}
        <div ref={leftRef} className="reveal">
          <span className="section-label">{t.findUs.sectionLabel}</span>
          <h2 style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}>{t.findUs.heading}</h2>
          <div className="gold-line" />

          {/* Address */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.5rem" }}>{t.findUs.address}</p>
            <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
              {restaurant.address.street}<br />
              {restaurant.address.city}<br />
              {restaurant.address.country}
            </p>
          </div>

          {/* Phone */}
          <div style={{ marginBottom: "2.5rem" }}>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "0.5rem" }}>{t.findUs.reservations}</p>
            <a
              href={`tel:${restaurant.phone}`}
              style={{ fontSize: "1.3rem", fontFamily: "'Playfair Display', serif", color: "var(--color-primary)" }}
            >
              {restaurant.phone}
            </a>
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1rem" }}>{t.findUs.openingHours}</p>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
              <tbody>
                {hours.map((h) => {
                  const isToday = h.day === TODAY;
                  return (
                    <tr
                      key={h.day}
                      style={{
                        borderBottom: "1px solid var(--color-border)",
                        background: isToday ? "rgba(201,169,110,0.07)" : "transparent",
                      }}
                    >
                      <td
                        style={{
                          padding: "0.6rem 0",
                          fontSize: "0.85rem",
                          fontWeight: isToday ? 500 : 300,
                          color: isToday ? "var(--color-primary)" : "var(--color-text)",
                          paddingRight: "2rem",
                        }}
                      >
                        {h.day}
                        {isToday && (
                          <span style={{ fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginLeft: "0.5rem" }}>
                            {t.findUs.today}
                          </span>
                        )}
                      </td>
                      <td
                        style={{
                          padding: "0.6rem 0",
                          fontSize: "0.85rem",
                          color: h.open === "Closed" ? "var(--color-muted)" : "var(--color-text)",
                          textAlign: "right",
                          fontWeight: 300,
                        }}
                      >
                        {h.open === "{t.findUs.closed}" ? "{t.findUs.closed}" : `${h.open} – ${h.close}`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right — map */}
        <div ref={rightRef} className="reveal">
          <div style={{ width: "100%", height: "480px", background: "var(--color-border)", overflow: "hidden" }}>
            <iframe
              src={config.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${restaurant.name} location map`}
            />
          </div>
          {/* Address under map for mobile */}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(restaurant.address.street + ', ' + restaurant.address.city)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            style={{ display: "block", textAlign: "center", marginTop: "1.5rem" }}
          >
            {t.findUs.openInMaps}
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
