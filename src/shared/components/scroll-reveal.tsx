"use client";

import {
  useEffect,
  useRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";

export type ScrollRevealVariant =
  | "fade-up"
  | "fade-in"
  | "fade-left"
  | "fade-right"
  | "zoom-in";

export interface ScrollRevealProps {
  children: ReactNode;
  /** Type d'animation. Défaut : "fade-up" */
  variant?: ScrollRevealVariant;
  /** Délai en ms avant déclenchement de l'animation */
  delay?: number;
  /** Active l'animation en cascade sur les enfants directs (overrides variant) */
  stagger?: boolean;
  /** Re-déclenche l'animation à chaque entrée dans le viewport (défaut : false) */
  repeat?: boolean;
  /** Élément HTML rendu (div par défaut) */
  as?: ElementType;
  /** Classes Tailwind/CSS additionnelles */
  className?: string;
  /** Seuil de visibilité (0-1) avant déclenchement. Défaut : 0.15 */
  threshold?: number;
  style?: CSSProperties;
}

export default function ScrollReveal({
  children,
  variant = "fade-up",
  delay = 0,
  stagger = false,
  repeat = false,
  as,
  className = "",
  threshold = 0.15,
  style,
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.setAttribute("data-visible", "true");
          if (!repeat) observer.unobserve(el);
        } else if (repeat) {
          el.setAttribute("data-visible", "false");
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [repeat, threshold]);

  const Component: ElementType = as ?? "div";
  const baseClass = stagger ? "sp-reveal-stagger" : "sp-reveal";

  return (
    <Component
      ref={ref}
      data-visible="false"
      data-variant={stagger ? undefined : variant}
      className={`${baseClass} ${className}`.trim()}
      style={
        delay
          ? { animationDelay: `${delay}ms`, ...style }
          : style
      }
    >
      {children}
    </Component>
  );
}
