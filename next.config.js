/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
    loader: 'default',
    path: '/'
  },
  output: 'standalone',
  experimental: {
    optimizeCss: true,
    serverComponentsExternalPackages: [],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
