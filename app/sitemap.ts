import type { MetadataRoute } from 'next'

const BASE = 'https://www.ecoiti.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: BASE, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/technologies`, lastModified: now, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${BASE}/technologies/regenion`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/technologies/h2o-recover`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]
}
