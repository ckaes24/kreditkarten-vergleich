import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.financeads.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "financeads.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "banner.bluesummit.de",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
