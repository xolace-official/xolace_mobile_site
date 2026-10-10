/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  // Keeps the whitepaper link on xolaceinc.com while the PDF is still published on GitHub Pages.
  async rewrites() {
    return [
      {
        source: "/whitepaper.pdf",
        destination: "https://xolace-official.github.io/wp.pdf",
      },
    ]
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // i.pravatar.cc — placeholder headshots for dummy advisor data only,
    // swap for real photos before launch.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "eleven-public-cdn.elevenlabs.io",
      },
    ],
  },
}

export default nextConfig
