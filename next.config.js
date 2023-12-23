/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sixirdkojnmbwmmuuzpe.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
