import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/', '/_next/'],
        crawlDelay: 0,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: [],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Yandex',
        allow: '/',
        disallow: ['/private/', '/admin/', '/api/'],
        crawlDelay: 2,
      },
    ],
    sitemap: [
      'https://www.parslanmaz.com/sitemap-index.xml',
      'https://www.parslanmaz.com/sitemap.xml',
      'https://www.parslanmaz.com/image-sitemap.xml',
    ],
    host: 'https://www.parslanmaz.com',
  }
}
