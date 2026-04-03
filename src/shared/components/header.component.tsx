"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import HeaderStyle from "./header.style";
import { ChevronDown } from "lucide-react";
import Logo from "./logo";
import { NAV_ITEMS } from "../constants/header.link";

export default function HeaderView() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on resize */
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 1024) setMobileOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <>
      {/* ── Top bar ── */}
      <div className="sp-topbar">
        <div className="container sp-topbar__inner">
          <span>📍 Abidjan, Côte d&apos;Ivoire</span>
          <span className="sp-topbar__divider" />
          <a href="tel:+2250000000000">📞 +225 00 00 00 00</a>
          <span className="sp-topbar__divider" />
          <a href="mailto:contact@signprod.com">✉ contact@signprod.com</a>
        </div>
      </div>

      {/* ── Main header ── */}
      <header className={`sp-header ${scrolled ? "sp-header--scrolled" : ""}`}>
        <div className="container sp-header__inner">

          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="sp-nav" aria-label="Navigation principale">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="sp-nav__item"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`sp-nav__link ${item.href === "/devis" ? "sp-nav__link--cta" : ""}`}
                >
                  {item.label}
                  {item.children && <ChevronDown />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <div className={`sp-dropdown ${openDropdown === item.label ? "sp-dropdown--open" : ""}`}>
                    <div className="sp-dropdown__grid">
                      {item.children.map((child) => (
                        <Link key={child.label} href={child.href} className="sp-dropdown__link">
                          <span className="sp-dropdown__arrow">→</span>
                          <span>
                            <strong>{child.label}</strong>
                            {child.desc && <em>{child.desc}</em>}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Desktop */}
          <a href="/devis" className="btn btn-primary sp-header__cta-btn">
            Devis Gratuit
          </a>

          {/* Burger */}
          <button
            className={`sp-burger ${mobileOpen ? "sp-burger--open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── Mobile nav ── */}
        <div className={`sp-mobile-nav ${mobileOpen ? "sp-mobile-nav--open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="sp-mobile-nav__group">
              <Link
                href={item.href}
                className="sp-mobile-nav__link"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="sp-mobile-nav__children">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="sp-mobile-nav__child"
                      onClick={() => setMobileOpen(false)}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a href="/devis" className="btn btn-primary" style={{ margin: "1rem 1.5rem" }}>
            Devis Gratuit
          </a>
        </div>
      </header>

      {/* ── Header styles ── */}
      <HeaderStyle/>
    </>
  );
}