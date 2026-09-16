import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    // The screenshots are type on glass: 75 softens the small labels in them.
    qualities: [75, 90],
  },
};

export default nextConfig;
