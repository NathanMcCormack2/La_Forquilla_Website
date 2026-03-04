import { useState } from "react";
import useReveal from "../hooks/useReveal";
import config from "../config";
import { useLanguage } from "../contexts/LanguageContext";

export default function Menu() {
  const [activeTab, setActiveTab] = useState(0);
  const headerRef = useReveal();
  const { t } = useLanguage();

  const currentSection = config.menu[activeTab];

  return (
    <section
      id="menu"
      className="menu-section"
      style={{ background: "var(--color-surface)", borderTop: "1px solid var(--color-border)" }}
    >
      <div className="container">
        {/* Header */}
        <div
          ref={headerRef}
          className="reveal"
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-label">{t.menu.sectionLabel}</span>
          <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
            {t.menu.heading}
          </h2>
          <div className="gold-line gold-line--center" />
          <p style={{ color: "var(--color-muted)", maxWidth: "480px", margin: "0 auto", fontSize: "0.95rem" }}>
            All dishes are prepared fresh each day using locally sourced ingredients.
            Our menu changes seasonally — ask your server about today's specials.
          </p>
        </div>

        {/* Tabs */}
        <div className="menu-tabs">
          {config.menu.map((section, i) => (
            <button
              key={section.section}
              className={`menu-tab ${activeTab === i ? "active" : ""}`}
              onClick={() => setActiveTab(i)}
            >
              {section.section}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <div key={activeTab} className="menu-items" style={{ columnGap: "3rem" }}>
          {currentSection.items.map((item) => (
            <div key={item.name} className="menu-item">
              <div className="menu-item-info">
                <h4>{item.name}</h4>
                <p>{item.description}</p>
              </div>
              <span className="menu-item-price">{item.price}</span>
            </div>
          ))}
        </div>

        {/* Allergen note */}
        <p
          style={{
            textAlign: "center",
            color: "var(--color-muted)",
            fontSize: "0.75rem",
            marginTop: "3rem",
            letterSpacing: "0.05em",
          }}
        >
          {t.menu.allergen}
        </p>
      </div>
    </section>
  );
}