/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "drive.google.com",
      "unsplash.com",
      "lh3.googleusercontent.com",
      "www.instagram.com",
    ],
  },
};
module.exports = nextConfig;
