/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true,
};

export default nextConfig;
