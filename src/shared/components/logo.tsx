import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="sp-logo" aria-label="Sign.Prod — Accueil">
      <Image
        src="/SignProd-logo.png"
        alt="SignProd"
        width={340}
        height={96}
        className="sp-logo__image"
        priority
      />
    </Link>
  );
}