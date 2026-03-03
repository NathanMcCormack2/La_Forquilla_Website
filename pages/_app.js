import "../styles/globals.css";
import config from "../config";
import { useEffect } from "react";
import { LanguageProvider } from "../contexts/LanguageContext";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const root = document.documentElement;
    const { theme } = config;
    root.style.setProperty("--color-primary",    theme.primary);
    root.style.setProperty("--color-background", theme.background);
    root.style.setProperty("--color-surface",    theme.surface);
    root.style.setProperty("--color-text",       theme.text);
    root.style.setProperty("--color-muted",      theme.muted);
    root.style.setProperty("--color-border",     theme.border);
  }, []);

  return (
    <LanguageProvider>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}