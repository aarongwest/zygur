/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com'
      }
    ]
  },
  output: 'standalone',
  experimental: {
    optimizeCss: true,
    serverComponentsExternalPackages: [],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*/',
      },
      {
        source: '/',
        destination: '/index',
      },
    ]
  },
};

module.exports = nextConfig;
