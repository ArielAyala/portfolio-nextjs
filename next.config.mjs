/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio-nextjs",
  assetPrefix: "/portfolio-nextjs/",
  images: {
    disableStaticImages: true,
  },
};

export default nextConfig;
