/** @type {import('next').NextConfig} */

const nextConfig = {
  type: "module",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blogs",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
