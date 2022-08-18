/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["platform-lookaside.fbsbx.com", "lh3.googleusercontent.com"],
  },
};

module.exports = nextConfig;
