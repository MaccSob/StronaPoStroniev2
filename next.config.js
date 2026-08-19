/** @type {import('next').NextConfig} */

// Ta sama wartosc jest ustawiana w workflow GitHub Actions (env: NEXT_PUBLIC_BASE_PATH)
// i uzywana zarowno tutaj (dla routingu/CSS/JS), jak i w komponentach (dla obrazkow z next/image).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : "",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
