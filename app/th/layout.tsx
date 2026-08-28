import type { Metadata } from 'next'
import { cookies } from 'next/headers'
import { FloatingContactButton } from '@/components/floating-contact-button'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { DocumentLocale } from '@/components/document-locale'
import { MotionShell } from '@/components/motion/motion-shell'
import { LanguageProvider } from '@/lib/i18n'
import { isLocale, localeCookieName } from '@/lib/i18n-config'
import { homeFaqs } from '@/lib/data/faqs'
import { officeContact, officeInfo } from '@/lib/data/office'

const description =
  'สำนักกฎหมายเที่ยงธรรมทนายความ ตั้งอยู่ที่อำเภอเดชอุดม จังหวัดอุบลราชธานี ให้บริการปรึกษากฎหมาย ดำเนินคดี และรับว่าความทั่วราชอาณาจักร โดยดูแลคดีแพ่ง คดีอาญา คดีครอบครัว มรดก ที่ดิน และข้อพิพาททั่วไป'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.thiangthamlaw.com'),
  title: {
    default: 'ทนายความเดชอุดม และทนายความอุบลราชธานี | สำนักกฎหมายเที่ยงธรรมทนายความ',
    template: '%s | สำนักกฎหมายเที่ยงธรรมทนายความ',
  },
  description,
  keywords: [
    'ทนาย',
    'ทนายความ',
    'หาทนาย',
    'จ้างทนาย',
    'ปรึกษาทนาย',
    'ทนายใกล้ฉัน',
    'ทนายความใกล้ฉัน',
    'ทนายทั่วประเทศ',
    'ทนายความทั่วไทย',
    'รับว่าความทั่วราชอาณาจักร',
    'ปรึกษากฎหมายออนไลน์',
    'ทนายรับทำคดีต่างจังหวัด',
    'ทนายเดชอุดม',
    'ทนายความเดชอุดม',
    'ทนายอุบล',
    'ทนายอุบลราชธานี',
    'ทนายความอุบล',
    'ทนายความอุบลราชธานี',
    'ทนายกรุงเทพ',
    'ทนายโคราช',
    'ทนายขอนแก่น',
    'ทนายอุดรธานี',
    'ทนายเชียงใหม่',
    'ทนายชลบุรี',
    'ทนายพัทยา',
    'ทนายระยอง',
    'ทนายภูเก็ต',
    'ทนายสงขลา',
    'ทนายหาดใหญ่',
    'ทนายสุราษฎร์ธานี',
    'ทนายศรีสะเกษ',
    'ทนายยโสธร',
    'ทนายอำนาจเจริญ',
    'ทนายภาคอีสาน',
    'ทนายภาคกลาง',
    'ทนายภาคเหนือ',
    'ทนายภาคใต้',
    'ทนายคดีแพ่ง',
    'ทนายคดีอาญา',
    'ทนายคดีที่ดิน',
    'ทนายคดีมรดก',
    'ทนายคดีครอบครัว',
    'ทนายฟ้องหย่า',
    'ทนายจัดการมรดก',
    'ทนายทวงหนี้',
    'ทนายสัญญา',
    'ทนายประกันตัว',
    'ปรึกษากฎหมายอุบลราชธานี',
    'รับว่าความอุบลราชธานี',
    'รับว่าความเดชอุดม',
    'รับว่าความอรรถคดีทั่วราชอาณาจักร',
    'สำนักกฎหมายเดชอุดม',
    'สำนักกฎหมายอุบลราชธานี',
    'สำนักกฎหมายเที่ยงธรรมทนายความ',
    'เที่ยงธรรมทนายความ',
  ],
  openGraph: {
    title: 'ทนายความเดชอุดม และทนายความอุบลราชธานี | สำนักกฎหมายเที่ยงธรรมทนายความ',
    description,
    url: 'https://www.thiangthamlaw.com/th',
    siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    images: [
      {
        url: '/law-office-hero.png',
        width: 1200,
        height: 630,
        alt: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
      },
    ],
    locale: 'th_TH',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ทนายความเดชอุดม และทนายความอุบลราชธานี | สำนักกฎหมายเที่ยงธรรมทนายความ',
    description,
    images: ['/law-office-hero.png'],
  },
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/th',
    languages: {
      'th-TH': 'https://www.thiangthamlaw.com/th',
      'en-US': 'https://www.thiangthamlaw.com/en',
      'x-default': 'https://www.thiangthamlaw.com/th',
    },
  },
}

export default async function ThaiLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies()
  const savedLocale = cookieStore.get(localeCookieName)?.value
  const initialLocale = isLocale(savedLocale) ? savedLocale : undefined

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: officeInfo.name,
    alternateName: [
      'สำนักกฎหมายเดชอุดม',
      'สำนักกฎหมายอุบลราชธานี',
      'เที่ยงธรรมทนายความ',
      'ทนายความเดชอุดม',
      'ทนายความอุบลราชธานี',
      'ทนายความทั่วราชอาณาจักร',
      officeInfo.englishName,
    ],
    description,
    url: 'https://www.thiangthamlaw.com/th',
    telephone: officeContact.phones[0],
    address: {
      '@type': 'PostalAddress',
      streetAddress: officeContact.address,
      addressLocality: 'เดชอุดม',
      addressRegion: 'อุบลราชธานี',
      postalCode: '34160',
      addressCountry: 'TH',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 14.904,
      longitude: 105.078,
    },
    areaServed: [
      { '@type': 'Country', name: 'ประเทศไทย' },
      { '@type': 'AdministrativeArea', name: 'ทั่วราชอาณาจักรไทย (All 77 Provinces)' },
      { '@type': 'AdministrativeArea', name: 'กรุงเทพมหานครและปริมณฑล' },
      { '@type': 'AdministrativeArea', name: 'ภาคตะวันออกเฉียงเหนือ (ภาคอีสาน)' },
      { '@type': 'AdministrativeArea', name: 'ภาคกลาง' },
      { '@type': 'AdministrativeArea', name: 'ภาคเหนือ' },
      { '@type': 'AdministrativeArea', name: 'ภาคใต้' },
      { '@type': 'AdministrativeArea', name: 'ภาคตะวันออก' },
      { '@type': 'AdministrativeArea', name: 'ภาคตะวันตก' },
      { '@type': 'AdministrativeArea', name: 'อุบลราชธานี' },
      { '@type': 'AdministrativeArea', name: 'เดชอุดม' },
      { '@type': 'AdministrativeArea', name: 'นครราชสีมา' },
      { '@type': 'AdministrativeArea', name: 'ขอนแก่น' },
      { '@type': 'AdministrativeArea', name: 'อุดรธานี' },
      { '@type': 'AdministrativeArea', name: 'เชียงใหม่' },
      { '@type': 'AdministrativeArea', name: 'ชลบุรี' },
      { '@type': 'AdministrativeArea', name: 'ภูเก็ต' },
      { '@type': 'AdministrativeArea', name: 'สงขลา' },
    ],
    serviceType: [
      'ทนายความ',
      'ปรึกษากฎหมาย',
      'ปรึกษากฎหมายออนไลน์',
      'รับว่าความทั่วราชอาณาจักร',
      'ดำเนินคดีทั่วประเทศ',
      'ร่างและตรวจสัญญา',
      'ทนายคดีแพ่ง',
      'ทนายคดีอาญา',
      'ทนายคดีครอบครัวและมรดก',
      'ทนายคดีที่ดิน',
      'ทนายประกันตัว',
    ],
    knowsAbout: [
      'ทนาย',
      'ทนายความ',
      'หาทนาย',
      'จ้างทนาย',
      'ปรึกษาทนาย',
      'ทนายใกล้ฉัน',
      'ทนายทั่วประเทศ',
      'ทนายความทั่วไทย',
      'รับว่าความทั่วราชอาณาจักร',
      'ปรึกษากฎหมายออนไลน์',
      'ทนายเดชอุดม',
      'ทนายความเดชอุดม',
      'ทนายอุบล',
      'ทนายอุบลราชธานี',
      'ทนายความอุบลราชธานี',
      'ทนายกรุงเทพ',
      'ทนายโคราช',
      'ทนายขอนแก่น',
      'ทนายอุดรธานี',
      'ทนายเชียงใหม่',
      'ทนายชลบุรี',
      'ทนายพัทยา',
      'ทนายภูเก็ต',
      'ทนายหาดใหญ่',
      'ทนายศรีสะเกษ',
      'ทนายยโสธร',
      'ทนายอำนาจเจริญ',
      'ทนายภาคอีสาน',
      'ทนายภาคกลาง',
      'ทนายภาคเหนือ',
      'ทนายภาคใต้',
      'คดีแพ่ง',
      'คดีอาญา',
      'คดีครอบครัว',
      'คดีมรดก',
      'คดีที่ดิน',
      'ฟ้องหย่า',
      'จัดการมรดก',
      'ขับไล่ที่ดิน',
      'ประกันตัว',
      'รับว่าความอรรถคดีทั่วราชอาณาจักร',
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '08:30',
        closes: '17:30',
      },
    ],
    priceRange: '฿฿',
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <LanguageProvider initialLocale={initialLocale ?? 'th'}>
      <DocumentLocale />
      <MotionShell
        header={<SiteHeader />}
        footer={<SiteFooter />}
        floating={<FloatingContactButton />}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        {children}
      </MotionShell>
    </LanguageProvider>
  )
}
