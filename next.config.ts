import type { NextConfig } from "next";

const JP_DOMAIN = process.env.JP_DOMAIN || '';
const PROTOCOL = process.env.NODE_ENV === 'development' ? 'http' : 'https';

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
};

export default nextConfig;
