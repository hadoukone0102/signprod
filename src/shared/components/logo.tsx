import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="SignProd — Accueil"
      className="inline-flex items-center transition-opacity hover:opacity-90"
    >
      <Image
        src="/asset/SignProd-logo.png"
        alt="SignProd"
        width={300}
        height={100}
        priority
        className="h-9 w-auto md:h-10 lg:h-11"
      />
    </Link>
  );
}
