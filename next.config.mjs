/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "viper-offsec.com" }],
        destination: "https://www.viper-offsec.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
