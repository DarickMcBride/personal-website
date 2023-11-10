/** @type {import('next').NextConfig} */
const nextConfig = { images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        port: '',
        pathname: '/150',
      },
    ],
  },}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

