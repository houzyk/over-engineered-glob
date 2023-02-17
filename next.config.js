/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  publicRuntimeConfig: {
    CONTENTFUL_AUTH: process.env.CONTENTFUL_AUTH,
    CONTENTFUL_PREVIEW_AUTH: process.env.CONTENTFUL_PREVIEW_AUTH,
    CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
  }
}

module.exports = nextConfig;
