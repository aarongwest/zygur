/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: true,
    loader: 'default',
    path: '/'
  },
  async redirects() {
    return [
      {
        source: '/services/defense-military',
        destination: '/services/b2b-marketing',
        permanent: true,
      },
      {
        source: '/services/agentic-ai',
        destination: '/services/ai-enhanced-marketing',
        permanent: true,
      },
      {
        source: '/services/research-development',
        destination: '/industries/b2b-fractional-cmo',
        permanent: true,
      },
      {
        source: '/company/about',
        destination: '/resources/what-is-a-fractional-cmo',
        permanent: true,
      },
      {
        source: '/company/partners',
        destination: '/compare/fractional-cmo-vs-agency',
        permanent: true,
      },
      {
        source: '/company/press',
        destination: '/results/case-studies',
        permanent: true,
      },
      {
        source: '/company/careers',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/company',
        destination: '/resources/what-is-a-fractional-cmo',
        permanent: true,
      },
    ];
  },
  output: 'standalone',
  experimental: {
    optimizeCss: false,
    serverComponentsExternalPackages: [],
  },
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
};

module.exports = nextConfig;
