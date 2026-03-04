import useReveal from "../hooks/useReveal";
import config from "../config";
import { useLanguage } from "../contexts/LanguageContext";

// ─── REPLACE these with the client's actual photos ───────────────────────────
// Aim for a mix of: food close-ups, table settings, interior, team/chef shots
const GALLERY_IMAGES = [
  { src: "/images/HamCheesejpg.jpg"},
  { src: "/images/Dessert2.jpg"},
  { src: "/images/Octopus.jpg"},
  { src: "/images/Dessert.jpg"},
  { src: "/images/Sausages.jpg"},
];
// ─────────────────────────────────────────────────────────────────────────────

export default function Gallery() {
  const headerRef = useReveal();
  const gridRef   = useReveal();
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      style={{
        padding: "8rem 0",
        background: "var(--color-background)",
        borderTop: "1px solid var(--color-border)",
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-label">{t.gallery.sectionLabel}</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>{t.gallery.heading}</h2>
          <div className="gold-line gold-line--center" />
        </div>

        {/* Grid */}
        <div ref={gridRef} className="reveal gallery-grid">
          {GALLERY_IMAGES.map((img, i) => (
            <div key={i} className="gallery-item">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        {config.social?.instagram && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <a
              href={config.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "var(--color-muted)",
                borderBottom: "1px solid var(--color-border)",
                paddingBottom: "2px",
                transition: "color 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => { e.target.style.color = "var(--color-primary)"; e.target.style.borderColor = "var(--color-primary)"; }}
              onMouseLeave={(e) => { e.target.style.color = "var(--color-muted)"; e.target.style.borderColor = "var(--color-border)"; }}
            >
              Follow us on Instagram
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
