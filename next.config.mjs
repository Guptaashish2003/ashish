/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "portfolio-image-store.s3.ap-south-1.amazonaws.com",
      },
      {
        hostname: "images.pexels.com",
      },
      {
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
