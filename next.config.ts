import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  images: {
    domains: ["images.unsplash.com"], // لازم الدومين الخارجي هنا
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
