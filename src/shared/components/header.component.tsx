"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import HeaderStyle from "./header.style";
import { ChevronDown } from "lucide-react";
import Logo from "./logo";
import { NAV_ITEMS } from "../constants/header.link";
import { CONTACT } from "../constants/contact.info";
import type { NavItem } from "../types/shared.type";

/* On retire "/devis" du menu principal — il est déjà présent en bouton CTA */
const PRIMARY_NAV: NavItem[] = NAV_ITEMS.filter((i) => i.href !== "/devis");

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  if (pathname === item.href) return true;
  if (pathname.startsWith(`${item.href}/`)) return true;
  return (
    item.children?.some(
      (c) => pathname === c.href || pathname.startsWith(`${c.href}/`),
    ) ?? false
  );
}

export default function HeaderView() {
  const pathname = usePathname() ?? "/";
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  /* Ombre au scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Fermer le mobile au resize desktop */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Fermer au changement de route */
  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  /* Scroll lock quand drawer mobile ouvert */
  useEffect(() => {
    if (!mobileOpen) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [mobileOpen]);

  /* Échap ferme tout */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenDropdown(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ── Top bar ── */}
      <div className="sp-topbar">
        <div className="container sp-topbar__inner">
          <span>📍 {CONTACT.address.short}</span>
          <span className="sp-topbar__divider" />
          <a href={CONTACT.phone.href}>📞 {CONTACT.phone.label}</a>
          <span className="sp-topbar__divider" />
          <a href={CONTACT.email.href}>✉ {CONTACT.email.label}</a>
        </div>
      </div>

      {/* ── Header principal ── */}
      <header className={`sp-header ${scrolled ? "sp-header--scrolled" : ""}`}>
        <div className="container sp-header__inner">
          <Logo />

          {/* Desktop nav */}
          <nav className="sp-nav" aria-label="Navigation principale">
            {PRIMARY_NAV.map((item) => {
              const active = isActive(pathname, item);
              const hasChildren = !!item.children?.length;
              const isOpen = openDropdown === item.label;

              return (
                <div
                  key={item.label}
                  className="sp-nav__item"
                  onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                  onMouseLeave={() => hasChildren && setOpenDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className="sp-nav__link"
                    aria-current={active ? "page" : undefined}
                    aria-haspopup={hasChildren ? "menu" : undefined}
                    aria-expanded={hasChildren ? isOpen : undefined}
                  >
                    {item.label}
                    {hasChildren && <ChevronDown />}
                  </Link>

                  {hasChildren && (
                    <div
                      role="menu"
                      aria-label={item.label}
                      className={`sp-dropdown ${
                        isOpen ? "sp-dropdown--open" : ""
                      }`}
                    >
                      <div className="sp-dropdown__grid">
                        {item.children!.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            role="menuitem"
                            className="sp-dropdown__link"
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
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <Link href="/devis" className="sp-header__cta-btn">
            Devis Gratuit
          </Link>

          {/* Burger */}
          <button
            type="button"
            className={`sp-burger ${mobileOpen ? "sp-burger--open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
            aria-controls="sp-mobile-nav"
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {/* ── Mobile nav ── */}
        <div
          id="sp-mobile-nav"
          className={`sp-mobile-nav ${mobileOpen ? "sp-mobile-nav--open" : ""}`}
        >
          {PRIMARY_NAV.map((item) => {
            const active = isActive(pathname, item);
            return (
              <div key={item.label} className="sp-mobile-nav__group">
                <Link
                  href={item.href}
                  className="sp-mobile-nav__link"
                  aria-current={active ? "page" : undefined}
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
            );
          })}
          <Link
            href="/devis"
            onClick={() => setMobileOpen(false)}
            className="sp-header__cta-btn"
            style={{ display: "block", margin: "1.25rem 1.5rem", textAlign: "center" }}
          >
            Devis Gratuit
          </Link>
        </div>
      </header>

      {/* Backdrop mobile */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          aria-hidden
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(20, 32, 44, 0.55)",
            backdropFilter: "blur(2px)",
            zIndex: 35,
          }}
        />
      )}

      {/* Header styles */}
      <HeaderStyle />
    </>
  );
}
