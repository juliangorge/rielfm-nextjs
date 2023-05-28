/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@fullcalendar/common',
  '@babel/preset-react',
  '@fullcalendar/common',
  '@fullcalendar/daygrid',
  '@fullcalendar/react',
  '@fullcalendar/bootstrap5'
])

module.exports = withTM({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'rielfm.com.ar',
        pathname: '/files/images/**',
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:action/:slug*.htm',
        destination: '/:action/:slug*',
        //permanent: true
      }
    ]
  }
})