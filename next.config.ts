import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for a fully static site
  output: "export",
  // Use unoptimized images for static export and local images
  images: {
    unoptimized: true,
  },
  // experimental options removed to satisfy Next.js config types
};

export default nextConfig;
