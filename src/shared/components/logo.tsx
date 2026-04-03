import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="sp-logo" aria-label="Sign.Prod — Accueil">
      <span className="sp-logo__s">S</span>
      <span className="sp-logo__wordmark">
        <span className="sp-logo__sign">ign</span>
        <span className="sp-logo__dot">.</span>
        <span className="sp-logo__prod">Prod</span>
      </span>
    </Link>
  );
}