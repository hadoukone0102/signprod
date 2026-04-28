export default function HeaderStyle() {
  return (
    <style>{`
      /* ─────────────────────────────────────────
         PALETTE — alignée sur le fond du logo
         #14202C = navy logo SignProd
         #0F1A24 = navy plus profond (top bar)
         #1abcbc = cyan brillant (accent visible sur sombre)
      ───────────────────────────────────────── */

      /* ─────────────────────────────────────────
         TOP BAR — barre fine sombre supérieure
      ───────────────────────────────────────── */
      .sp-topbar {
        background: #0F1A24;
        color: rgba(255, 255, 255, 0.65);
        font-size: 12px;
        line-height: 1;
      }
      .sp-topbar__inner {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.75rem 1.5rem;
        padding: 10px 0;
      }
      .sp-topbar__inner a {
        color: rgba(255, 255, 255, 0.65);
        text-decoration: none;
        transition: color 0.2s ease;
      }
      .sp-topbar__inner a:hover {
        color: #1abcbc;
      }
      .sp-topbar__divider {
        width: 1px;
        height: 12px;
        background: rgba(255, 255, 255, 0.12);
      }
      @media (max-width: 640px) {
        .sp-topbar { font-size: 11px; }
        .sp-topbar__divider { display: none; }
      }

      /* ─────────────────────────────────────────
         HEADER PRINCIPAL — sticky, fond NAVY (= logo)
      ───────────────────────────────────────── */
      .sp-header {
        position: sticky;
        top: 0;
        z-index: 50;
        background: #14202C;
        border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        transition: box-shadow 0.3s ease, padding 0.3s ease, background 0.3s ease;
      }
      .sp-header--scrolled {
        background: rgba(20, 32, 44, 0.96);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        box-shadow: 0 8px 24px -16px rgba(0, 0, 0, 0.6);
      }
      .sp-header__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1.5rem;
        padding: 14px 0;
      }
      .sp-header--scrolled .sp-header__inner {
        padding: 10px 0;
      }

      /* ─────────────────────────────────────────
         NAVIGATION DESKTOP
      ───────────────────────────────────────── */
      .sp-nav {
        display: flex;
        align-items: center;
        gap: 0.25rem;
        flex: 1;
        justify-content: center;
      }
      .sp-nav__item {
        position: relative;
      }
      .sp-nav__link {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        padding: 12px 16px;
        font-size: 12px;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        color: rgba(255, 255, 255, 0.85);
        text-decoration: none;
        position: relative;
        transition: color 0.2s ease;
        cursor: pointer;
      }
      .sp-nav__link svg {
        width: 14px;
        height: 14px;
        stroke-width: 2.2;
        transition: transform 0.25s ease;
      }
      .sp-nav__link:hover,
      .sp-nav__link[aria-current="page"] {
        color: #1abcbc;
      }
      .sp-nav__link:hover svg {
        transform: rotate(180deg);
      }
      /* Soulignement animé sous le lien hover/actif */
      .sp-nav__link::after {
        content: "";
        position: absolute;
        left: 16px;
        right: 16px;
        bottom: 6px;
        height: 2px;
        background: #1abcbc;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 0.3s ease;
      }
      .sp-nav__link:hover::after,
      .sp-nav__link[aria-current="page"]::after {
        transform: scaleX(1);
      }

      /* CTA dans la nav (variante) — masqué en desktop, on a déjà sp-header__cta-btn */
      .sp-nav__link--cta {
        display: none;
      }

      /* ─────────────────────────────────────────
         DROPDOWN — menu déroulant au hover
         (reste clair pour rester lisible)
      ───────────────────────────────────────── */
      .sp-dropdown {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-8px);
        min-width: 320px;
        background: #ffffff;
        border-top: 3px solid #1abcbc;
        box-shadow: 0 24px 48px -16px rgba(0, 0, 0, 0.35);
        opacity: 0;
        pointer-events: none;
        transition: all 0.25s ease;
        z-index: 60;
      }
      .sp-dropdown::before {
        content: "";
        position: absolute;
        top: -10px;
        left: 0;
        right: 0;
        height: 10px;
      }
      .sp-dropdown--open {
        opacity: 1;
        pointer-events: auto;
        transform: translateX(-50%) translateY(0);
      }
      .sp-dropdown__grid {
        display: flex;
        flex-direction: column;
        padding: 8px;
      }
      .sp-dropdown__link {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        padding: 12px 16px;
        text-decoration: none;
        color: #14202C;
        transition: background 0.2s ease;
        border-radius: 2px;
      }
      .sp-dropdown__link:hover {
        background: #F4F7FA;
      }
      .sp-dropdown__arrow {
        color: #0097B2;
        font-weight: 700;
        font-size: 16px;
        line-height: 1.5;
        transition: transform 0.25s ease;
        flex-shrink: 0;
      }
      .sp-dropdown__link:hover .sp-dropdown__arrow {
        transform: translateX(4px);
      }
      .sp-dropdown__link strong {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: #14202C;
        margin-bottom: 2px;
      }
      .sp-dropdown__link em {
        display: block;
        font-style: normal;
        font-size: 11px;
        color: rgba(20, 32, 44, 0.55);
        line-height: 1.4;
      }

      /* ─────────────────────────────────────────
         CTA HEADER — bouton "Devis Gratuit"
      ───────────────────────────────────────── */
      .sp-header__cta-btn {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 12px 22px;
        background: #0097B2;
        color: #ffffff !important;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        text-decoration: none;
        border-radius: 0;
        transition: background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        white-space: nowrap;
        flex-shrink: 0;
      }
      .sp-header__cta-btn:hover {
        background: #1abcbc;
        transform: translateY(-1px);
        box-shadow: 0 8px 20px -6px rgba(26, 188, 188, 0.55);
      }

      /* ─────────────────────────────────────────
         BURGER MOBILE — barres blanches
      ───────────────────────────────────────── */
      .sp-burger {
        display: none;
        position: relative;
        width: 40px;
        height: 40px;
        background: transparent;
        border: 0;
        cursor: pointer;
        padding: 0;
      }
      .sp-burger span {
        position: absolute;
        left: 8px;
        right: 8px;
        height: 2px;
        background: #ffffff;
        transition: all 0.3s ease;
      }
      .sp-burger span:nth-child(1) { top: 12px; }
      .sp-burger span:nth-child(2) { top: 19px; }
      .sp-burger span:nth-child(3) { top: 26px; }
      .sp-burger--open span:nth-child(1) {
        top: 19px;
        transform: rotate(45deg);
      }
      .sp-burger--open span:nth-child(2) {
        opacity: 0;
      }
      .sp-burger--open span:nth-child(3) {
        top: 19px;
        transform: rotate(-45deg);
      }

      /* ─────────────────────────────────────────
         NAV MOBILE — drawer slide (fond navy)
      ───────────────────────────────────────── */
      .sp-mobile-nav {
        display: none;
      }

      /* ─────────────────────────────────────────
         RESPONSIVE — passage mobile sous 1024px
      ───────────────────────────────────────── */
      @media (max-width: 1023px) {
        .sp-nav,
        .sp-header__cta-btn {
          display: none;
        }
        .sp-burger {
          display: block;
        }

        .sp-mobile-nav {
          display: block;
          position: fixed;
          top: 0;
          right: 0;
          width: min(360px, 88vw);
          height: 100vh;
          background: #14202C;
          box-shadow: -24px 0 48px -16px rgba(0, 0, 0, 0.55);
          padding: 80px 0 24px;
          transform: translateX(100%);
          transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          overflow-y: auto;
          z-index: 40;
        }
        .sp-mobile-nav--open {
          transform: translateX(0);
        }
        .sp-mobile-nav__group {
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }
        .sp-mobile-nav__link {
          display: block;
          padding: 18px 24px;
          font-size: 13px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          color: rgba(255, 255, 255, 0.9);
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .sp-mobile-nav__link:hover,
        .sp-mobile-nav__link[aria-current="page"] {
          background: rgba(255, 255, 255, 0.04);
          color: #1abcbc;
        }
        .sp-mobile-nav__children {
          padding: 0 24px 16px;
          background: rgba(0, 0, 0, 0.2);
        }
        .sp-mobile-nav__child {
          display: block;
          padding: 10px 12px;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          transition: color 0.2s ease;
          position: relative;
          padding-left: 18px;
        }
        .sp-mobile-nav__child::before {
          content: "→";
          position: absolute;
          left: 0;
          color: #1abcbc;
          font-weight: 700;
          opacity: 0.7;
        }
        .sp-mobile-nav__child:hover {
          color: #1abcbc;
        }
      }

      @media (min-width: 1024px) {
        .sp-mobile-nav {
          display: none !important;
        }
      }
    `}</style>
  );
}
