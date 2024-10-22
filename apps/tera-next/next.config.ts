import { type NextConfig } from 'next';

const nextConfig: NextConfig = {
  compress: process.env.NODE_ENV === 'development',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  poweredByHeader: false,
};

export default nextConfig;
