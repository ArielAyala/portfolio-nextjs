/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/portfolio-nextjs",
  assetPrefix: "/portfolio-nextjs/",
  images: {
    loader: "imgix",
  },
};

export default nextConfig;
