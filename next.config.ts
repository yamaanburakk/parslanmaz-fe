import type { NextConfig } from "next";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig: NextConfig = {
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
    // Quality settings
    // qualities: [75, 90, 100], // Removed - not compatible with Next.js 15.0.x
    // Remote patterns
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
    // Loader optimization
    loader: 'default',
    // Unoptimized for development
    unoptimized: false,
  },

  // Webpack optimizations (simplified for Vercel compatibility)
  webpack: (config, { dev, isServer }) => {
    // Simplified webpack config for better Vercel compatibility
    // Let Next.js handle most optimizations automatically
    
    return config;
  },

  // Headers for better caching and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600',
          },
        ],
      },
    ];
  },
};

export default withBundleAnalyzer(nextConfig);
