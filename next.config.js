/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['*'], // Tüm domainlerden resim yüklemeye izin ver
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
    MONGODB_PASSWORD: process.env.MONGODB_PASSWORD,
  },
}

module.exports = nextConfig 