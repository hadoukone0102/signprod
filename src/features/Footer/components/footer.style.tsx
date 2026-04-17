export default function FooterStyle() {
  return (
     <style>{`
        .sp-footer {
          font-family: var(--font-poppins, sans-serif);
          background: #142334;
          color: rgba(255,255,255,0.70);
        }

        /* CTA band */
        .sp-footer__cta-band {
          background: #0f1d2c;
          padding: 2.25rem 0;
          border-top: 1px solid rgba(255,255,255,0.08);
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .sp-footer__cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
        }
        .sp-footer__cta-text h3 {
          font-family: var(--font-montserrat, sans-serif);
          font-size: 1.5rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 0.25rem;
        }
        .sp-footer__cta-text p {
          color: rgba(255,255,255,0.80);
          font-size: 0.9rem;
        }
        .sp-footer__cta-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .sp-footer__cta-actions .btn-primary {
          background: #ffffff;
          color: #102132;
          border: 1px solid #ffffff;
          box-shadow: none;
        }
        .sp-footer__cta-actions .btn-primary:hover {
          background: #f3f6f9;
          color: #102132;
        }
        .sp-footer__cta-actions .btn-outline {
          border-color: rgba(255,255,255,0.35);
        }

        /* Main footer */
        .sp-footer__main {
          padding: 4rem 0 2rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .sp-footer__grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1fr;
          gap: 3rem;
        }

        /* Brand */
        .sp-footer__logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }
        .sp-footer__logo-s {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px; height: 38px;
          background: var(--color-primary, #0097B2);
          color: #fff;
          font-family: var(--font-montserrat, sans-serif);
          font-weight: 900;
          font-size: 1.4rem;
          border-radius: 6px;
        }
        .sp-footer__logo-word {
          font-family: var(--font-montserrat, sans-serif);
          font-weight: 800;
          font-size: 1.2rem;
          color: #fff;
        }
        .sp-footer__logo-dot,
        .sp-footer__logo-prod { color: var(--color-primary, #0097B2); }

        .sp-footer__tagline {
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--color-primary, #0097B2);
          margin-bottom: 0.75rem;
          line-height: 1.6;
        }
        .sp-footer__desc {
          font-size: 0.85rem;
          line-height: 1.7;
          color: rgba(255,255,255,0.50);
          margin-bottom: 1.5rem;
        }
        .sp-footer__socials {
          display: flex;
          gap: 0.5rem;
        }
        .sp-footer__social {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px; height: 36px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          color: rgba(255,255,255,0.60);
          transition: background 0.2s, color 0.2s, transform 0.2s;
        }
        .sp-footer__social:hover {
          background: rgba(255,255,255,0.15);
          color: #fff;
          transform: none;
        }

        /* Columns */
        .sp-footer__col-title {
          font-family: var(--font-montserrat, sans-serif);
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #fff;
          margin-bottom: 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .sp-footer__col-line {
          display: block;
          width: 20px; height: 2px;
          background: var(--color-primary, #0097B2);
          flex-shrink: 0;
        }
        .sp-footer__list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.45rem;
        }
        .sp-footer__link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.55);
          transition: color 0.2s, gap 0.2s, transform 0.2s;
          text-decoration: none;
        }
        .sp-footer__link:hover { color: #ffffff; gap: 0.5rem; transform: none; }
        .sp-footer__link-arrow {
          color: var(--color-primary, #0097B2);
          font-size: 1rem;
          line-height: 1;
        }

        /* Contact bloc */
        .sp-footer__contact-bloc {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          padding: 0.9rem;
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 12px;
          background: rgba(255,255,255,0.03);
        }
        .sp-footer__contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.55);
        }
        .sp-footer__contact-item a {
          color: rgba(255,255,255,0.55);
          transition: color 0.2s;
        }
        .sp-footer__contact-item a:hover { color: var(--color-primary, #0097B2); }

        /* Bottom bar */
        .sp-footer__bottom {
          padding: 1.25rem 0;
          background: rgba(8, 17, 26, 0.34);
        }
        .sp-footer__bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .sp-footer__bottom-inner p {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
        }
        .sp-footer__bottom-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.35);
        }
        .sp-footer__bottom-links a {
          color: rgba(255,255,255,0.35);
          transition: color 0.2s;
        }
        .sp-footer__bottom-links a:hover { color: var(--color-primary, #0097B2); }

        /* Responsive */
        @media (max-width: 1024px) {
          .sp-footer__grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .sp-footer__brand { grid-column: 1 / -1; }
        }
        @media (max-width: 640px) {
          .sp-footer__grid { grid-template-columns: 1fr; gap: 1.5rem; }
          .sp-footer__cta-inner { flex-direction: column; text-align: center; }
          .sp-footer__cta-actions { justify-content: center; }
          .sp-footer__bottom-inner { flex-direction: column; text-align: center; }
        }
      `}</style>
  );
}