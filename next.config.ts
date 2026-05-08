import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-5aa87426ad334d0495bf29d914b5ce1b.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-df7a29ac929f4b26b7322c861440d59d.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-20a4177bffe64c589df64f56f79e9127.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-676f738e0a3948d19dc9defd954e36d5.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-3775c49696ac49478c024f66a3dbe50d.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-98e13baa8ca84d53b2e3ee903a8fce62.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-f821ec2a41964e44873680b9d87ddf19.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pub-57855d8f88704d1cafba485f1b715e8d.r2.dev",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
