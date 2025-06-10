import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {},
  plugins:[],
};

export default nextConfig;
