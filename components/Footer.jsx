import config from "../config";
import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { restaurant, hours, social } = config;
  const year = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        {/* Top grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "4rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid var(--color-border)",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontStyle: "italic", marginBottom: "1rem" }}>
              {restaurant.name}
            </div>
            <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", maxWidth: "300px", lineHeight: "1.8" }}>
              {restaurant.tagline}
            </p>
            {/* Social icons */}
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              {social?.instagram && (
                <a href={social.instagram} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-muted)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
                >
                  Instagram
                </a>
              )}
              {social?.facebook && (
                <a href={social.facebook} target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--color-muted)", transition: "color 0.3s" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
                >
                  Facebook
                </a>
              )}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1.25rem" }}>
             {t.footer.quickLinks}
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Menu",    href: "#menu" },
                { label: "About",   href: "#about" },
                { label: "Gallery", href: "#gallery" },
                { label: "Find Us", href: "#findus" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    style={{ color: "var(--color-muted)", fontSize: "0.9rem", transition: "color 0.3s" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: "1.25rem" }}>
              {t.footer.contact}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <p style={{ color: "var(--color-muted)", fontSize: "0.9rem", lineHeight: "1.6" }}>
                {restaurant.address.street}<br />
                {restaurant.address.city}
              </p>
              <a href={`tel:${restaurant.phone}`} style={{ color: "var(--color-muted)", fontSize: "0.9rem", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
              >
                {restaurant.phone}
              </a>
              <a href={`mailto:${restaurant.email}`} style={{ color: "var(--color-muted)", fontSize: "0.9rem", transition: "color 0.3s" }}
                onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
                onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
              >
                {restaurant.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "2rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p style={{ color: "var(--color-muted)", fontSize: "0.75rem", letterSpacing: "0.05em" }}>
            © {year} {restaurant.name}. {t.footer.rights}
          </p>
          <p style={{ color: "var(--color-border)", fontSize: "0.7rem", letterSpacing: "0.05em" }}>
            {/* Replace with your own brand if you want credit */}
            {t.footer.credit}
          </p>
        </div>
      </div>

      {/* Responsive */}
      <style jsx>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </footer>
  );
}
