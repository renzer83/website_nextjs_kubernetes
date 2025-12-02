/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  basePath: '/about',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ui-avatars.com',
      },
    ],
  },
}

module.exports = nextConfig
