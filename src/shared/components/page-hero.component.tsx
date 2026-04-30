import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: ReactNode;
  breadcrumbs?: BreadcrumbItem[];
}

export default function PageHero({
  eyebrow,
  title,
  highlight,
  description,
  breadcrumbs,
}: PageHeroProps) {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a1628]">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 60px,#2ac4c4 60px,#2ac4c4 61px),repeating-linear-gradient(90deg,transparent,transparent 60px,#2ac4c4 60px,#2ac4c4 61px)",
        }}
      />
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.18)_0%,transparent_70%)]" />
      <div className="absolute -bottom-24 -left-24 h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(26,188,188,0.10)_0%,transparent_70%)]" />

      <div className="container relative z-10 py-10 md:py-12 lg:py-14">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav
            aria-label="Fil d'Ariane"
            className="mb-4 flex flex-wrap items-center gap-1 text-xs uppercase tracking-[2px] text-white/55"
          >
            {breadcrumbs.map((crumb, i) => (
              <span key={`${crumb.label}-${i}`} className="flex items-center gap-1">
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="transition-colors hover:text-[#1abcbc]"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#1abcbc]">{crumb.label}</span>
                )}
                {i < breadcrumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 text-white/30" aria-hidden />
                )}
              </span>
            ))}
          </nav>
        )}

        {eyebrow && (
          <div className="mb-4 inline-flex items-center gap-2 rounded-[2px] border border-[rgba(26,188,188,0.4)] bg-[rgba(26,188,188,0.15)] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[2px] text-[#1abcbc]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#1abcbc]" aria-hidden />
            {eyebrow}
          </div>
        )}

        <h1
          className="font-black uppercase leading-[1.05] tracking-tight text-white text-[clamp(34px,5vw,60px)]"
          style={{ fontFamily: "'Barlow Condensed', sans-serif" }}
        >
          {title}
          {highlight && (
            <>
              <br />
              <span className="text-[#1abcbc]">{highlight}</span>
            </>
          )}
        </h1>

        {description && (
          <div className="mt-4 max-w-2xl text-[15px] leading-relaxed text-white/70 md:text-base">
            {description}
          </div>
        )}
      </div>
    </section>
  );
}
