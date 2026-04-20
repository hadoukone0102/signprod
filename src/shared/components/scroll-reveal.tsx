"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  /** Marge avant déclenchement (élément un peu plus bas dans le viewport) */
  rootMargin?: string;
};

/**
 * Révèle le contenu au scroll : léger fade + translation (respecte prefers-reduced-motion).
 */
export default function ScrollReveal({
  children,
  className = "",
  rootMargin = "0px 0px -10% 0px",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin]);

  return (
    <div
      ref={ref}
      className={[
        "will-change-transform",
        "transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:scale-100",
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-[0.97]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
