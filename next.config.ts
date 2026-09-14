import type { NextConfig } from "next";
import type { RemotePattern } from "next/dist/shared/lib/image-config";

const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ?? "http://127.0.0.1:8000/api/v1";

const allowedImageHosts: RemotePattern[] = [];

try {
  const origin = new URL(apiUrl);
  allowedImageHosts.push({
    protocol: origin.protocol === "https:" ? "https" : "http",
    hostname: origin.hostname,
    port: origin.port || undefined,
  });
} catch {
  // Ignore a malformed NEXT_PUBLIC_API_URL; dev hosts are added below.
}

for (const hostname of ["localhost", "127.0.0.1"]) {
  if (!allowedImageHosts.some((host) => host.hostname === hostname)) {
    allowedImageHosts.push({ protocol: "http", hostname, port: undefined });
  }
}

const nextConfig: NextConfig = {
  allowedDevOrigins: ["http://192.168.0.104:3000"],
  images: {
    remotePatterns: allowedImageHosts,
    dangerouslyAllowLocalIP: true,
  },
  turbopack: {
    rules: {
      "*.mp4": {
        type: "asset",
        condition: {
          path: /src\/assets\/gallery/,
        },
      },
    },
  },
};

export default nextConfig;
