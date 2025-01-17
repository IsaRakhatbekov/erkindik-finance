import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      {
        protocol: 'http',
        hostname: '2.58.16.6', // Добавляем ваш IP-адрес
      },
    ],
  },
};

export default nextConfig;
