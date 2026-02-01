/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.remodelcalculators.com',
          },
        ],
        destination: 'https://remodelcalculators.com/:path*',
        permanent: true,
      },
    ];
  },
  
  // Reasonable security headers for public calculator site
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN' // Prevents your site being embedded in iframes
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff' // Prevents MIME type sniffing
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin' // Privacy without breaking things
          }
        ],
      }
    ]
  }
};

export default nextConfig;