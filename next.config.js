// const { isPostfixUnaryExpression } = require('typescript')

/**
 * @type {import('next').NextConfig}
 */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,

  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  basePath: isProd ? '/currenteffect' : '',
  // output: 'export',
  distDir: 'dist',
  images: {
    loader: 'custom', // 使用你自定義的 loader
    unoptimized: true, // 禁用內建圖片優化功能
  },
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
  
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
  
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
   
module.exports = nextConfig

// import { NextConfig } from 'next';

// const isProd = process.env.NODE_ENV === 'production';

// const nextConfig: NextConfig = {
//   basePath: isProd ? '/artfestarg-1.github.io' : '',
//   output: 'export',
//   distDir: 'dist',
// };

// export default nextConfig;
