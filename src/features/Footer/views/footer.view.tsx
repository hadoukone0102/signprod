import { FOOTER_LINKS } from "@/shared/constants/footer.link";
import Link from "next/link";
import { SOCIALS } from "../components/social-component";
import FooterStyle from "../components/footer.style";

export default function FooterView() {
  const year = new Date().getFullYear();

  return (
    <footer className="sp-footer">
      {/* ── CTA Banner ── */}
      <div className="sp-footer__cta-band">
        <div className="container sp-footer__cta-inner">
          <div className="sp-footer__cta-text">
            <h3>Un projet en tête ?</h3>
            <p>Obtenez un devis personnalisé sous 24h — sans engagement</p>
          </div>
          <div className="sp-footer__cta-actions">
            <a href="/devis" className="btn btn-primary">Demander un devis</a>
            <a href="tel:+2250000000000" className="btn btn-outline">📞 Nous appeler</a>
          </div>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="sp-footer__main">
        <div className="container sp-footer__grid">

          {/* Brand column */}
          <div className="sp-footer__brand">
            <div className="sp-footer__logo">
              <span className="sp-footer__logo-s">S</span>
              <span className="sp-footer__logo-word">
                <span>ign</span><span className="sp-footer__logo-dot">.</span><span className="sp-footer__logo-prod">Prod</span>
              </span>
            </div>
            <p className="sp-footer__tagline">
              Enseigne • Signalétique<br />Impression Grand Format • Concept Façade
            </p>
            <p className="sp-footer__desc">
              Votre partenaire expert en communication visuelle. Nous concevons, fabriquons et posons vos solutions d&apos;enseigne et signalétique sur mesure.
            </p>

            {/* Socials */}
            <div className="sp-footer__socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} className="sp-footer__social" aria-label={s.label} target="_blank" rel="noopener noreferrer">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="sp-footer__col">
            <h4 className="sp-footer__col-title">
              <span className="sp-footer__col-line" />
              Nos Services
            </h4>
            <ul className="sp-footer__list">
              {FOOTER_LINKS.services.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="sp-footer__link">
                    <span className="sp-footer__link-arrow">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Produits */}
          <div className="sp-footer__col">
            <h4 className="sp-footer__col-title">
              <span className="sp-footer__col-line" />
              Nos Produits
            </h4>
            <ul className="sp-footer__list">
              {FOOTER_LINKS.produits.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="sp-footer__link">
                    <span className="sp-footer__link-arrow">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations */}
          <div className="sp-footer__col">
            <h4 className="sp-footer__col-title">
              <span className="sp-footer__col-line" />
              Informations
            </h4>
            <ul className="sp-footer__list">
              {FOOTER_LINKS.infos.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="sp-footer__link">
                    <span className="sp-footer__link-arrow">›</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Contact bloc */}
            <div className="sp-footer__contact-bloc">
              <div className="sp-footer__contact-item">
                <span>📍</span>
                <span>Abidjan, Côte d&apos;Ivoire</span>
              </div>
              <div className="sp-footer__contact-item">
                <span>📞</span>
                <a href="tel:+2250000000000">+225 00 00 00 00</a>
              </div>
              <div className="sp-footer__contact-item">
                <span>✉</span>
                <a href="mailto:contact@signprod.com">contact@signprod.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="sp-footer__bottom">
        <div className="container sp-footer__bottom-inner">
          <p>© {year} Sign.Prod — Tous droits réservés</p>
          <div className="sp-footer__bottom-links">
            <Link href="/mentions-legales">Mentions légales</Link>
            <span>·</span>
            <Link href="/politique-confidentialite">Confidentialité</Link>
            <span>·</span>
            <Link href="/cgv">CGV</Link>
          </div>
        </div>
      </div>
      {/* ── Styles ── */}
     <FooterStyle/>
    </footer>
  );
}