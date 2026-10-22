/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Volledig statische export naar /out (geen server nodig)
  images: { unoptimized: true },
};

export default nextConfig;
