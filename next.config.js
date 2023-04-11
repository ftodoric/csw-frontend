/** @type {import('next').NextConfig} */

const developmentAPI = 'http://localhost:8000/api'
const productionAPI = developmentAPI

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === 'development' ? productionAPI : developmentAPI,
  },
}

module.exports = nextConfig
