/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  debug: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
};

module.exports = nextConfig
