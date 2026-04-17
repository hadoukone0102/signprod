export default function HeaderStyle() {
  return (
   <style>{`
        /* ── Top bar ─────────────────────── */
        .sp-topbar {
          background: var(--color-secondary);
          color: rgba(255,255,255,0.65);
          font-size: 0.75rem;
          font-family: var(--font-poppins, sans-serif);
        }
        .sp-topbar__inner {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-top: 0.4rem;
          padding-bottom: 0.4rem;
        }
        .sp-topbar a { color: rgba(255,255,255,0.65); transition: color 0.2s; }
        .sp-topbar a:hover { color: var(--color-primary); }
        .sp-topbar__divider {
          width: 1px; height: 14px;
          background: rgba(255,255,255,0.2);
        }

        /* ── Header ─────────────────────── */
        .sp-header {
          position: sticky;
          top: 0;
          z-index: var(--z-header, 100);
          background: rgba(20, 34, 48, 0.94);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          font-family: var(--font-poppins, sans-serif);
          transition: box-shadow 0.3s, background 0.3s, border-color 0.3s;
        }
        .sp-header--scrolled {
          box-shadow: 0 10px 26px rgba(0,0,0,0.22);
          border-color: rgba(255,255,255,0.12);
        }
        .sp-header__inner {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
        }

        /* ── Logo ─────────────────────── */
        .sp-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .sp-logo__image {
          width: auto;
          height: 52px;
          object-fit: contain;
        }
        .sp-logo__s {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          background: var(--color-primary);
          color: white;
          font-family: var(--font-montserrat, sans-serif);
          font-size: 1.6rem;
          font-weight: 900;
          border-radius: 8px;
          box-shadow: 0 0 16px rgba(0,151,178,0.4);
          letter-spacing: -0.02em;
          transition: box-shadow 0.25s;
        }
        .sp-logo:hover .sp-logo__s { box-shadow: 0 0 28px rgba(0,151,178,0.7); }
        .sp-logo__wordmark {
          display: flex;
          align-items: baseline;
          gap: 0;
          font-family: var(--font-montserrat, sans-serif);
          font-weight: 800;
          font-size: 1.35rem;
          letter-spacing: -0.01em;
        }
        .sp-logo__sign { color: #fff; }
        .sp-logo__dot { color: var(--color-primary); }
        .sp-logo__prod { color: var(--color-primary); }

        /* ── Desktop nav ─────────────── */
        .sp-nav {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }
        .sp-nav__item { position: relative; }
        .sp-nav__link-wrap {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }
        .sp-nav__link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.6rem 0.8rem;
          color: rgba(255,255,255,0.80);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          border-radius: 999px;
          transition: color 0.2s, background 0.2s, transform 0.2s;
          white-space: nowrap;
        }
        .sp-nav__toggle {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 1.9rem;
          height: 1.9rem;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: rgba(255,255,255,0.8);
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
        }
        .sp-nav__toggle:hover,
        .sp-nav__toggle:focus-visible {
          color: #fff;
          background: rgba(255,255,255,0.10);
        }
        .sp-nav__toggle--open .sp-chevron { transform: rotate(180deg); }
        .sp-nav__link:hover,
        .sp-nav__link:focus-visible {
          color: #fff;
          background: rgba(255,255,255,0.10);
        }
        .sp-nav__link--cta {
          color: var(--color-primary) !important;
          font-weight: 700;
        }

        /* ── Chevron ─────────────────── */
        .sp-chevron {
          width: 10px; height: 10px;
          transition: transform 0.2s;
        }
        .sp-nav__item:hover .sp-chevron { transform: rotate(180deg); }

        /* ── Dropdown ────────────────── */
        .sp-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%) translateY(8px);
          min-width: 340px;
          background: rgba(36, 52, 72, 0.97);
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 14px;
          box-shadow: 0 14px 34px rgba(0,0,0,0.24);
          backdrop-filter: blur(6px);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.2s, transform 0.2s;
          z-index: var(--z-dropdown, 200);
        }
        .sp-dropdown--open {
          opacity: 1;
          pointer-events: all;
          transform: translateX(-50%) translateY(0);
        }
        .sp-dropdown__grid {
          display: flex;
          flex-direction: column;
          padding: 0.75rem;
          gap: 0.25rem;
        }
        .sp-dropdown__link {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.65rem 0.75rem;
          border-radius: 8px;
          color: rgba(255,255,255,0.75);
          font-size: 0.85rem;
          transition: background 0.15s, color 0.15s;
          text-decoration: none;
        }
        .sp-dropdown__link:hover {
          background: rgba(255,255,255,0.08);
          color: #fff;
        }
        .sp-dropdown__link strong { display: block; font-weight: 600; color: #fff; }
        .sp-dropdown__link em { display: block; font-size: 0.75rem; font-style: normal; color: rgba(255,255,255,0.45); margin-top: 1px; }
        .sp-dropdown__arrow {
          color: var(--color-primary);
          font-size: 0.9rem;
          margin-top: 1px;
          flex-shrink: 0;
          transition: transform 0.15s;
        }
        .sp-dropdown__link:hover .sp-dropdown__arrow { transform: translateX(3px); }

        /* ── Header CTA btn ──────────── */
        .sp-header__cta-btn {
          flex-shrink: 0;
          font-size: 0.8rem;
          padding: 0.6rem 1.25rem;
          border-radius: 999px;
        }

        /* ── Burger ──────────────────── */
        .sp-burger {
          display: none;
          flex-direction: column;
          justify-content: center;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          margin-left: auto;
        }
        .sp-burger span {
          display: block;
          width: 24px; height: 2px;
          background: #fff;
          border-radius: 2px;
          transition: transform 0.25s, opacity 0.25s;
          transform-origin: center;
        }
        .sp-burger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .sp-burger--open span:nth-child(2) { opacity: 0; }
        .sp-burger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* ── Mobile nav ──────────────── */
        .sp-mobile-nav {
          display: none;
          flex-direction: column;
          background: rgba(36, 52, 72, 0.98);
          border-top: 1px solid rgba(0,151,178,0.2);
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.4s ease;
        }
        .sp-mobile-nav--open { max-height: 100vh; }
        .sp-mobile-nav__group { border-bottom: 1px solid rgba(255,255,255,0.07); }
        .sp-mobile-nav__row {
          display: flex;
          align-items: center;
        }
        .sp-mobile-nav__link {
          display: block;
          padding: 0.85rem 1.5rem;
          color: rgba(255,255,255,0.85);
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          flex: 1;
        }
        .sp-mobile-nav__toggle {
          width: 44px;
          height: 44px;
          margin-right: 0.65rem;
          border: none;
          border-radius: 999px;
          background: transparent;
          color: rgba(255,255,255,0.8);
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .sp-mobile-nav__toggle-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.2s;
        }
        .sp-mobile-nav__toggle--open .sp-mobile-nav__toggle-icon { transform: rotate(180deg); }
        .sp-mobile-nav__link:hover { color: var(--color-primary); }
        .sp-mobile-nav__children {
          padding-bottom: 0;
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.25s ease;
        }
        .sp-mobile-nav__children--open { max-height: 280px; padding-bottom: 0.5rem; }
        .sp-mobile-nav__child {
          display: block;
          padding: 0.45rem 2rem;
          color: rgba(255,255,255,0.55);
          font-size: 0.85rem;
        }
        .sp-mobile-nav__child:hover { color: var(--color-primary); }

        /* ── Responsive ──────────────── */
        @media (max-width: 1024px) {
          .sp-nav, .sp-header__cta-btn { display: none; }
          .sp-burger { display: flex; }
          .sp-mobile-nav { display: flex; }
          .sp-logo__image { height: 46px; }
        }
        @media (max-width: 640px) {
          .sp-topbar { display: none; }
          .sp-logo__image { height: 40px; }
        }
      `}</style>
  );
}