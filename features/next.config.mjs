/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/features',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
