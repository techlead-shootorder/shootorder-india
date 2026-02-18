/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',

  SITE_URL: 'http://188.166.235.142/~shootordernew',
  assetPrefix: 'http://188.166.235.142/~shootordernew',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,

  generateBuildId: async () => 'static-build',

  env: {
    SITE_URL: 'http://188.166.235.142/~shootordernew',
  },
};

export default nextConfig;
