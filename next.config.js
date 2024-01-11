/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['lucide-react'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd1sag4ddilekf6.cloudfront.net',
        port: '',
        pathname: '/compressed_webp/**',
      },
    ],
  },
};

module.exports = nextConfig;
