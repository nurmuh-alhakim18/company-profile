/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '/api/**',
      },
      {
        protocol: 'http',
        hostname: 'images.ctfassets.net',
        pathname: '/ip1zhjowyeys/**',
      },
    ],
  },
};

export default nextConfig;
