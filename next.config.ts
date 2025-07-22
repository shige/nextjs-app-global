import type { NextConfig } from "next";

const JP_DOMAIN = process.env.JP_DOMAIN || '';
const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
const PROTOCOL = IS_DEVELOPMENT ? 'http' : 'https';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/jp',
        destination: `${PROTOCOL}://${JP_DOMAIN}/jp`,
      },
      {
        source: '/jp/:path*',
        destination: `${PROTOCOL}://${JP_DOMAIN}/jp/:path*`,
      },
    ]
  },
  images: {
    ...(IS_DEVELOPMENT && { domains: ['localhost'] }),
    remotePatterns: [
      {
        protocol: PROTOCOL as 'http' | 'https',
        hostname: JP_DOMAIN,
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
