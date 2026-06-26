import type { MetadataRoute } from 'next'
import { profileSlugs } from '@/features/profile'
import { serviceRouteSlugs } from '@/lib/data/services'
import { legalArticles } from '@/lib/data/articles'
import { englishLegalArticles } from '@/lib/data/articles-en'

const baseUrl = 'https://www.thiangthamlaw.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  // Base paths (excluding dynamic segments)
  const thBasePaths = [
    { path: '/th', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/th/lawyer-det-udom', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/th/lawyer-ubon-ratchathani', priority: 0.95, changeFrequency: 'weekly' as const },
    { path: '/th/contact', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/th/services', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/th/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/lawyers', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/process', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/case-studies', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/consultation', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/privacy', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/terms', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/team', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/advisors', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/dika', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/legal-knowledge', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/th/articles', priority: 0.6, changeFrequency: 'weekly' as const },
  ]

  const enBasePaths = [
    { path: '/en', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/en/about', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/services', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/lawyers', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/articles', priority: 0.5, changeFrequency: 'weekly' as const },
    { path: '/en/process', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/case-studies', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/contact', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/consultation', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/privacy', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/terms', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/team', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/advisors', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/dika', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/en/legal-knowledge', priority: 0.5, changeFrequency: 'monthly' as const },
  ]

  // Add dynamic paths
  const thDynamicPaths: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = []
  const enDynamicPaths: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' | 'yearly' }[] = []

  // 1. Team profiles
  profileSlugs.forEach((slug) => {
    thDynamicPaths.push({ path: `/th/team/${slug}`, priority: 0.7, changeFrequency: 'monthly' })
    enDynamicPaths.push({ path: `/en/team/${slug}`, priority: 0.5, changeFrequency: 'monthly' })
  })

  // 2. Services
  serviceRouteSlugs.forEach((slug) => {
    thDynamicPaths.push({ path: `/th/services/${slug}`, priority: 0.7, changeFrequency: 'monthly' })
    enDynamicPaths.push({ path: `/en/services/${slug}`, priority: 0.5, changeFrequency: 'monthly' })
  })

  // 3. Articles
  legalArticles.forEach((article) => {
    thDynamicPaths.push({ path: `/th/articles/${article.slug}`, priority: 0.6, changeFrequency: 'monthly' })
    thDynamicPaths.push({ path: `/th/legal-knowledge/${article.slug}`, priority: 0.6, changeFrequency: 'monthly' })
  })
  englishLegalArticles.forEach((article) => {
    enDynamicPaths.push({ path: `/en/articles/${article.slug}`, priority: 0.5, changeFrequency: 'monthly' })
    enDynamicPaths.push({ path: `/en/legal-knowledge/${article.slug}`, priority: 0.5, changeFrequency: 'monthly' })
  })

  const allRoutes = [
    ...thBasePaths,
    ...thDynamicPaths,
    ...enBasePaths,
    ...enDynamicPaths,
  ]

  function toLanguagePath(pathStr: string, locale: 'th' | 'en') {
    return pathStr.replace(/^\/(th|en)/, `/${locale}`)
  }

  return allRoutes.map((route) => {
    return {
      url: `${baseUrl}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
      alternates: {
        languages: {
          th: `${baseUrl}${toLanguagePath(route.path, 'th')}`,
          en: `${baseUrl}${toLanguagePath(route.path, 'en')}`,
          'x-default': `${baseUrl}${toLanguagePath(route.path, 'th')}`,
        },
      },
    }
  })
}