import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: process.env.NODE_ENV === 'development',
  eslint: {
    ignoreDuringBuilds: true,
  },
  expireTime: 5 * 60,
  async headers() {
    return [
      {
        headers: [
          {
            key: 'X-Accel-Buffering',
            value: 'no',
          },
        ],
        source: '/:path*{/}?',
      },
    ];
  },
  output: 'standalone',
  poweredByHeader: false,
};

export default nextConfig;
