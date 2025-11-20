/** @type {import('next').NextConfig} */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  images: {
    domains: ['raw.githubusercontent.com', 'images.pokemontcg.io'],
    unoptimized: true
  },
  output: 'export',
  trailingSlash: true,
  basePath: basePath ? `/${basePath}` : '',
  assetPrefix: basePath ? `/${basePath}` : '',
}

module.exports = nextConfig

