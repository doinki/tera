/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  compress: process.env.NODE_ENV === 'development',
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: 'standalone',
  poweredByHeader: false,
};

export default nextConfig;
