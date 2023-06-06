/** @type {import('next').NextConfig} */

const DEV_DOMAIN = 'localhost:8000'
const PROD_DOMAIN = '134.209.254.186:8000'

const DEV_API_BASE_URL = `http://${DEV_DOMAIN}/api`
const PROD_API_BASE_URL = `http://${PROD_DOMAIN}/api`

const DEV_WS_URL = `ws://${DEV_DOMAIN}`
const PROD_WS_URL = `ws://${PROD_DOMAIN}`

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development' ? DEV_API_BASE_URL : PROD_API_BASE_URL,
    wsUrl: process.env.NODE_ENV === 'development' ? DEV_WS_URL : PROD_WS_URL,
  },
}

module.exports = nextConfig
