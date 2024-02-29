/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "jashtechperu.com.pe",
      },
    ],
  },
};

export default nextConfig;
