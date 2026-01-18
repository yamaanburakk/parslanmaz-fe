import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Static export için out klasörüne build (cPanel deployment)
  output: 'export',
  
  // cPanel için trailing slash ekle (URL sonunda / olsun)
  trailingSlash: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  
  // React compiler optimization
  reactStrictMode: true,
  
  // Production source maps (disabled for smaller bundle size)
  productionBrowserSourceMaps: false,
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['react', 'react-dom', 'next'],
    // Enable static generation optimization
    staticGenerationRetryCount: 3,
    // Performance monitoring
    gzipSize: true,
    scrollRestoration: true,
  },

  // Image optimization - Maximum Performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Quality settings - Required for Next.js 16+
    qualities: [75, 90, 100],
    // Loader optimization
    loader: 'default',
    // Static export için unoptimized olmalı
    unoptimized: true,
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Let Next.js handle most optimizations automatically
    return config;
  },

  // NOTE: Headers, redirects, and rewrites don't work with static export (output: 'export')
  // These should be configured on your web server:
  // - For Apache/cPanel: See public/.htaccess (ACTIVE - www.parslanmaz.com)
  // - For Nginx: See nginx.conf.example
};

export default withBundleAnalyzer(nextConfig);
