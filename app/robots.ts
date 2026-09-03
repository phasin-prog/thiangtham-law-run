import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'OAI-SearchBot',
          'PerplexityBot',
          'ClaudeBot',
          'anthropic-ai',
          'Google-Extended',
          'GoogleOther',
          'Applebot-Extended',
          'CCBot',
          'Bytespider',
          'Diffbot',
          'YouBot',
        ],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/admin/', '/api/'],
      },
    ],
    sitemap: 'https://www.thiangthamlaw.com/sitemap.xml',
    host: 'https://www.thiangthamlaw.com',
  }
}