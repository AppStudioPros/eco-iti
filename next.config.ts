import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/home', destination: '/', permanent: true },
      { source: '/regenion', destination: '/technologies/regenion', permanent: true },
      { source: '/regenion/', destination: '/technologies/regenion', permanent: true },
      { source: '/h2o-recover', destination: '/technologies/h2o-recover', permanent: true },
      { source: '/h2o-recover/', destination: '/technologies/h2o-recover', permanent: true },
      { source: '/investor', destination: '/contact', permanent: false },
      { source: '/investor/', destination: '/contact', permanent: false },
    ]
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
  },
}

export default nextConfig
