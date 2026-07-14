import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    const immutableAssetHeaders = [
      {
        key: "Cache-Control",
        value: "public, max-age=31536000, immutable",
      },
    ];

    return [
      { source: "/gb.png", headers: immutableAssetHeaders },
      { source: "/de.png", headers: immutableAssetHeaders },
    ];
  },
};

export default nextConfig;
