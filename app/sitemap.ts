import type { MetadataRoute } from 'next';

const BASE = 'https://www.pilatesandmommy.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${BASE}/certification`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/classes`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/postpartum`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/community`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE}/shop`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${BASE}/contact`, changeFrequency: 'yearly', priority: 0.5 },
  ];
}
