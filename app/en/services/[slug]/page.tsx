import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetail } from '@/components/service-detail'
import { englishServiceRouteSlugs, getEnglishLegalService } from '@/lib/data/services-en'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return englishServiceRouteSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getEnglishLegalService(slug)
  if (!service) return { title: 'Service Not Found', robots: { index: false, follow: true } }
  const title = `${service.title} — English-Speaking Lawyer in Thailand, Nationwide Representation`
  const description = `${service.description} Consultation and court representation across Thailand by Thiangtham Law Office, 19+ years of experience. Call +66 82 377 2404`
  const url = `https://www.thiangthamlaw.com/en/services/${slug}`
  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: {
        'th-TH': `https://www.thiangthamlaw.com/th/services/${slug}`,
        'en-US': url,
        'x-default': `https://www.thiangthamlaw.com/th/services/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'Thiangtham Law Office',
      locale: 'en_US',
      type: 'article',
      images: [{ url: '/law-office-hero.png', width: 1200, height: 630, alt: `${service.title} — Thiangtham Law Office` }],
    },
    twitter: { card: 'summary_large_image', title, description, images: ['/law-office-hero.png'] },
  }
}

export default async function EnglishServicePage({ params }: Props) {
  const { slug } = await params
  const service = getEnglishLegalService(slug)
  if (!service) notFound()
  return <ServiceDetail service={service} locale="en" />
}
