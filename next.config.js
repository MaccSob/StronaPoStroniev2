/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// PODMIEN na dokladna nazwe swojego repozytorium (case-sensitive!)
const repoName = "StronaPoStroniev2";

const nextConfig = {
  output: "export", 
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    unoptimized: true, 
  },
};

module.exports = nextConfig;
