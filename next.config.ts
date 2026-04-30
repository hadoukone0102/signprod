import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
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
    ];
  },
};

export default nextConfig;
