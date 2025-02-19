/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
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
