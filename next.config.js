const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Next.js sudah support import images secara native
  images: {
    domains: [], // tambahkan domain external image jika perlu
  },

  webpack(config, options) {
    // Konfigurasi untuk SVG
    config.module.rules.push({
      test: /\.png$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = nextConfig;
