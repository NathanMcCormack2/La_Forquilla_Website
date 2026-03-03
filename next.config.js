/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Add domains here if loading images from external URLs
    // e.g. domains: ['images.unsplash.com']
    domains: ["images.unsplash.com"],
  },
};

module.exports = nextConfig;
