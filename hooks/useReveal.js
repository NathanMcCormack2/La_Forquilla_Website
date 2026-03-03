import { useEffect, useRef } from "react";

/**
 * useReveal — attaches an IntersectionObserver to a ref.
 * When the element enters the viewport, adds the "visible" class
 * which triggers the CSS fade-up animation defined in globals.css.
 *
 * Usage:
 *   const ref = useReveal();
 *   <div ref={ref} className="reveal"> ... </div>
 */
export default function useReveal(threshold = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el); // only animate once
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
