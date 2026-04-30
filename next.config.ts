import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    // Fichiers dans public/asset ; sans clé `search`, les query (?v=…) restent autorisées (cache-bust).
    localPatterns: [{ pathname: "/asset/**" }],
  },
  async redirects() {
    return [
      {
        source: "/produits/display",
        destination: "/produits/stands-sur-mesure",
        permanent: true,
      },
      {
        source: "/produits/revetement-facades",
        destination: "/produits/revetement",
        permanent: true,
      },
      {
        source: "/savoir-faire/signaletique-interieure",
        destination: "/savoir-faire/signaletique",
        permanent: true,
      },
      {
        source: "/savoir-faire/signaletique-exterieure",
        destination: "/savoir-faire/signaletique",
        permanent: true,
      },
      {
        source: "/savoir-faire/stands-evenementiel",
        destination: "/savoir-faire/stands-sur-mesure",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
