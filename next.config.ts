import type { NextConfig } from "next";
import { env } from "@/src/common/utilities/env";

const nextConfig: NextConfig = {
  basePath: env.publicBasePath,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
