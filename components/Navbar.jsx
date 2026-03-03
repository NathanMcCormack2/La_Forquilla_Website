import { useState, useEffect } from "react";
import config from "../config";
import { useLanguage } from "../contexts/LanguageContext";

const NAV_LINKS = [
  { label: t.nav.menu,    href: "#menu"    },
  { label: t.nav.about,   href: "#about"   },
  { label: t.nav.gallery, href: "#gallery" },
  { label: t.nav.findUs,  href: "#findus"  },
  { label: t.nav.contact, href: "#contact" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          
          {/* Logo / Name */}
          <a href="#hero" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.35rem", fontStyle: "italic", letterSpacing: "0.02em", color: "var(--color-text)" }}>
            {config.restaurant.name}
          </a>

          {/* Desktop Nav Links */}
          <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }} className="hidden-mobile">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "var(--color-muted)",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--color-muted)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", border: "1px solid var(--color-border)", borderRadius: "2px", overflow: "hidden" }}>
            {["en", "es", "ca"].map((code) => (
              <button
                key={code}
                onClick={() => setLang(code)}
                style={{
                  padding: "0.3rem 0.65rem",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRight: code !== "ca" ? "1px solid var(--color-border)" : "none",
                  cursor: "pointer",
                  background: lang === code ? "var(--color-primary)" : "transparent",
                  color:      lang === code ? "var(--color-background)" : "var(--color-muted)",
                }}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Phone — desktop */}
          <a
            href={`tel:${config.restaurant.phone}`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              fontWeight: 500,
              color: "var(--color-primary)",
              letterSpacing: "0.05em",
            }}
            className="hidden-mobile"
          >
            {config.restaurant.phone}
          </a>

          {/* Hamburger — mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="show-mobile"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: "24px",
                  height: "1px",
                  background: "var(--color-text)",
                  transition: "transform 0.3s",
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99,
            background: "rgba(17,17,17,0.98)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          <button
            onClick={closeMenu}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "var(--color-muted)", fontSize: "1.5rem", cursor: "pointer" }}
          >
            ✕
          </button>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "2rem",
                fontStyle: "italic",
                color: "var(--color-text)",
                transition: "color 0.3s",
              }}
            >
              {link.label}
            </a>
          ))}
          <a href={`tel:${config.restaurant.phone}`} style={{ color: "var(--color-primary)", fontFamily: "'DM Sans', sans-serif", fontSize: "1rem", marginTop: "1rem" }}>
            {config.restaurant.phone}
          </a>
        </div>
      )}

      {/* Responsive helper styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
