/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  output: 'export',
  trailingSlash: true,
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Final-Portfolio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/Final-Portfolio' : '',
}

module.exports = nextConfig 