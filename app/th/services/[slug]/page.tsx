import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceDetail } from '@/components/service-detail'
import { getLegalService, serviceRouteSlugs } from '@/lib/data/services'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return serviceRouteSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getLegalService(slug)
  if (!service) return { title: 'ไม่พบบริการ', robots: { index: false, follow: true } }
  const title = `หาทนาย${service.title} จ้างทนาย ปรึกษากฎหมายออนไลน์ รับว่าความทั่วราชอาณาจักร`
  const description = `${service.description} ตรวจข้อเท็จจริง ประเมินแนวทาง จัดทำเอกสารและดำเนินคดีโดยทีมทนายประสบการณ์กว่า 19 ปี ปรึกษาเบื้องต้น โทร 082-377-2404`
  const url = `https://www.thiangthamlaw.com/th/services/${slug}`
  return {
    title,
    description,
    keywords: [
      `หาทนาย${service.title}`,
      `จ้างทนาย${service.title}`,
      `ปรึกษาทนาย${service.title}`,
      service.title,
      'ปรึกษากฎหมายออนไลน์',
      'รับว่าความทั่วราชอาณาจักร',
      ...service.topics.slice(0, 6),
    ],
    alternates: {
      canonical: url,
      languages: {
        'th-TH': url,
        'en-US': `https://www.thiangthamlaw.com/en/services/${slug}`,
        'x-default': url,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
      locale: 'th_TH',
      type: 'article',
      images: [
        {
          url: '/law-office-hero.png',
          width: 1200,
          height: 630,
          alt: `หาทนาย${service.title} — สำนักกฎหมายเที่ยงธรรมทนายความ`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/law-office-hero.png'],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getLegalService(slug)
  if (!service) notFound()
  const url = `https://www.thiangthamlaw.com/th/services/${slug}`
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `หาทนาย${service.title} — สำนักกฎหมายเที่ยงธรรมทนายความ`,
    description: service.description,
    url,
    inLanguage: 'th-TH',
    provider: {
      '@type': 'LegalService',
      name: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
      telephone: '082-377-2404',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1005 หมู่ 24 ตำบลเมืองเดช อำเภอเดชอุดม จังหวัดอุบลราชธานี 34160',
        addressLocality: 'เดชอุดม',
        addressRegion: 'อุบลราชธานี',
        postalCode: '34160',
        addressCountry: 'TH',
      },
    },
    areaServed: { '@type': 'Country', name: 'ประเทศไทย' },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.title,
      itemListElement: service.topics.slice(0, 8).map((topic) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: topic },
      })),
    },
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `ต้องเตรียมเอกสารอะไรก่อนปรึกษาทนายเรื่อง${service.title}?`,
        acceptedAnswer: { '@type': 'Answer', text: service.documentsToPrepare.join(' ') },
      },
      {
        '@type': 'Question',
        name: `สำนักงานช่วยเรื่อง${service.title}อย่างไรบ้าง?`,
        acceptedAnswer: { '@type': 'Answer', text: service.help.join(' ') },
      },
    ],
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.thiangthamlaw.com/th' },
      { '@type': 'ListItem', position: 2, name: 'บริการกฎหมาย', item: 'https://www.thiangthamlaw.com/th/services' },
      { '@type': 'ListItem', position: 3, name: service.title, item: url },
    ],
  }
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <ServiceDetail service={service} />
    </>
  )
}
