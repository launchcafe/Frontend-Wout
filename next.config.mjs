/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    runtime: 'edge',  // Dit is noodzakelijk voor Netlify Forms en edge-functies
  },
};

export default nextConfig;
