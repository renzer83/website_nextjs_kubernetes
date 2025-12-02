import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  basePath: '/contact',
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
