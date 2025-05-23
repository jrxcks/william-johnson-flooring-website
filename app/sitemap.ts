import { MetadataRoute } from 'next'
import servicesData from './data/services.json'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://williamjohnsonflooring.com'
  
  // Base pages
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]
  
  // Add service pages
  const serviceRoutes = servicesData.services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [...routes, ...serviceRoutes]
} 