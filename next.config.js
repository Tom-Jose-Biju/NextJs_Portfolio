/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
  distDir: 'out',
  trailingSlash: true,
}

module.exports = nextConfig 