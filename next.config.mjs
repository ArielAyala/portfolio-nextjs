/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio-nextjs",
  assetPrefix: '/portfolio-nextjs/',
  images: {
    domains: ["arielayala.github.io"],
  },
};

export default nextConfig;
