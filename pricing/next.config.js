/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/pricing',
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
