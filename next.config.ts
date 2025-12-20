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
  

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['react', 'react-dom', 'next'],
    // Enable static generation optimization
    staticGenerationRetryCount: 3,
    // Enable modern bundling
    esmExternals: true,
    // Performance monitoring
    gzipSize: true,
    scrollRestoration: true,
    // Note: Disabled parallel compilation features for Vercel compatibility
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
    // Quality settings for Next.js 16 compatibility
    qualities: [75, 90, 100],
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

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: false,
          vendors: false,
          // Framework chunk
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          // Vendor chunk
          vendor: {
            name: 'vendor',
            chunks: 'all',
            test: /node_modules/,
            priority: 30,
            enforce: true,
          },
          // Common chunk
          common: {
            name: 'common',
            minChunks: 2,
            chunks: 'all',
            priority: 20,
            reuseExistingChunk: true,
            enforce: true,
          },
          // Product pages chunk
          productPages: {
            name: 'product-pages',
            chunks: 'all',
            test: /[\\/]app[\\/]urun-kategori[\\/]/,
            priority: 15,
            enforce: true,
          },
        },
      };
    }

    // SVG optimization - only if @svgr/webpack is installed
    // config.module.rules.push({
    //   test: /\.svg$/,
    //   use: ['@svgr/webpack'],
    // });

    // Better error handling for chunk loading
    // Note: runtimeChunk is handled by Next.js by default, only override if needed
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        runtimeChunk: {
          name: 'runtime',
        },
      };
    }

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
