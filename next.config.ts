import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/noshtek-website",
  assetPrefix: "/noshtek-website",
  images: {
    unoptimized: true, // Required for static export / GitHub Pages
  },
};

export default nextConfig;
