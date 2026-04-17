"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import HeaderStyle from "./header.style";
import { ChevronDown } from "lucide-react";
import Logo from "./logo";
import { NAV_ITEMS } from "../constants/header.link";

export default function HeaderView() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const closeDropdownTimerRef = useRef<number | null>(null);

  const clearCloseDropdownTimer = () => {
    if (closeDropdownTimerRef.current !== null) {
      window.clearTimeout(closeDropdownTimerRef.current);
      closeDropdownTimerRef.current = null;
    }
  };

  const scheduleDropdownClose = () => {
    clearCloseDropdownTimer();
    closeDropdownTimerRef.current = window.setTimeout(() => {
      setOpenDropdown(null);
      closeDropdownTimerRef.current = null;
    }, 180);
  };

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

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => {
      if (!headerRef.current) return;
      if (!headerRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      clearCloseDropdownTimer();
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
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
      <header ref={headerRef} className={`sp-header ${scrolled ? "sp-header--scrolled" : ""}`}>
        <div className="container sp-header__inner">

          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="sp-nav" aria-label="Navigation principale">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="sp-nav__item"
                onMouseEnter={() => {
                  clearCloseDropdownTimer();
                  if (item.children) setOpenDropdown(item.label);
                }}
                onMouseLeave={() => {
                  if (item.children) scheduleDropdownClose();
                }}
              >
                <div className="sp-nav__link-wrap">
                  <Link
                    href={item.href}
                    className={`sp-nav__link ${item.href === "/devis" ? "sp-nav__link--cta" : ""}`}
                    onClick={() => setOpenDropdown(null)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      type="button"
                      className={`sp-nav__toggle ${openDropdown === item.label ? "sp-nav__toggle--open" : ""}`}
                      aria-label={`Afficher les sous-menus de ${item.label}`}
                      aria-expanded={openDropdown === item.label}
                      onClick={() => setOpenDropdown((prev) => (prev === item.label ? null : item.label))}
                    >
                      <ChevronDown className="sp-chevron" />
                    </button>
                  )}
                </div>

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`sp-dropdown ${openDropdown === item.label ? "sp-dropdown--open" : ""}`}
                    onMouseEnter={clearCloseDropdownTimer}
                    onMouseLeave={scheduleDropdownClose}
                  >
                    <div className="sp-dropdown__grid">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="sp-dropdown__link"
                          onClick={() => setOpenDropdown(null)}
                        >
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
            aria-controls="sp-mobile-nav"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── Mobile nav ── */}
        <div id="sp-mobile-nav" className={`sp-mobile-nav ${mobileOpen ? "sp-mobile-nav--open" : ""}`}>
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="sp-mobile-nav__group">
              <div className="sp-mobile-nav__row">
                <Link
                  href={item.href}
                  className="sp-mobile-nav__link"
                  onClick={() => {
                    setMobileOpen(false);
                    setOpenMobileGroup(null);
                  }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button
                    type="button"
                    className={`sp-mobile-nav__toggle ${openMobileGroup === item.label ? "sp-mobile-nav__toggle--open" : ""}`}
                    aria-label={`Afficher les sous-menus de ${item.label}`}
                    aria-expanded={openMobileGroup === item.label}
                    onClick={() => setOpenMobileGroup((prev) => (prev === item.label ? null : item.label))}
                  >
                    <ChevronDown className="sp-mobile-nav__toggle-icon" />
                  </button>
                )}
              </div>
              {item.children && (
                <div className={`sp-mobile-nav__children ${openMobileGroup === item.label ? "sp-mobile-nav__children--open" : ""}`}>
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      className="sp-mobile-nav__child"
                      onClick={() => {
                        setMobileOpen(false);
                        setOpenMobileGroup(null);
                      }}
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