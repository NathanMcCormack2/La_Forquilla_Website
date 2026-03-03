import { useEffect, useRef } from "react";
import config from "../config";
import { useLanguage } from "../contexts/LanguageContext";

// ─── REPLACE THIS URL with the client's hero image ──────────────────────────
// Tip: Use a high-quality food/interior photo, ideally 1920×1080 or larger.
// You can use Unsplash for placeholder images: https://unsplash.com
const HERO_IMAGE = "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=85";
// ─────────────────────────────────────────────────────────────────────────────

export default function Hero() {
  const bgRef = useRef(null);
  const { t } = useLanguage();

  // Trigger the subtle zoom-out on load
  useEffect(() => {
    const el = bgRef.current;
    if (el) {
      const img = new Image();
      img.src = HERO_IMAGE;
      img.onload = () => el.classList.add("loaded");
    }
  }, []);

  return (
    <section id="hero" className="hero">
      {/* Background image */}
      <div
        ref={bgRef}
        className="hero-bg"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />

      {/* Dark overlay for readability */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">
        <p className="section-label" style={{ color: "var(--color-primary)", marginBottom: "0.75rem" }}>
          {config.restaurant.cuisine}
        </p>

        <h1 className="hero-title">{config.restaurant.name}</h1>

        <p className="hero-tagline">{config.restaurant.tagline}</p>

        <div className="hero-buttons">
          <a href="#menu"   className="btn-primary">{t.hero.viewMenu}</a>
          <a href="#findus" className="btn-outline">{t.hero.getDirections}</a>
        </div>
      </div>

      {/* Scroll hint arrow */}
      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          animation: "bounce 2s infinite",
          opacity: 0.5,
        }}
      >
        <span style={{ width: "1px", height: "40px", background: "var(--color-text)", display: "block" }} />
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
      `}</style>
    </section>
  );
}
