import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
  // Static export için out klasörüne build
  output: 'export',
  
  // cPanel için trailing slash ekle (URL sonunda / olsun)
  trailingSlash: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  // Note: Vercel handles output automatically, standalone is not needed
  
  // React compiler optimization
  reactStrictMode: true,
  
  // Production source maps
  productionBrowserSourceMaps: false,
  

  // Experimental features for better performance (Vercel optimized)
  experimental: {
    optimizePackageImports: ['react', 'react-dom', 'next'],
    // Enable static generation optimization
    staticGenerationRetryCount: 3,
    // Performance monitoring
    gzipSize: true,
    scrollRestoration: true,
    // Note: Disabled features that can cause Vercel deployment issues
    // esmExternals: true, (can cause issues on Vercel)
    // webpackBuildWorker: true, (can cause issues on Vercel)
    // parallelServerCompiles: true, (can cause issues on Vercel)
    // parallelServerBuildTraces: true, (can cause issues on Vercel)
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

  // Webpack optimizations (simplified for Vercel compatibility)
  webpack: (config, { dev, isServer }) => {
    // Simplified webpack config for better Vercel compatibility
    // Let Next.js handle most optimizations automatically
    
    return config;
  },

  // Note: Headers are managed via .htaccess for cPanel deployment
  // Static export mode doesn't support Next.js headers/redirects/rewrites
};

export default withBundleAnalyzer(nextConfig);
