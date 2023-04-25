/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["img1.picmix.com"],
  },
};

module.exports = nextConfig;
