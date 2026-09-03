import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  MessageCircle,
  Phone,
  Video,
} from 'lucide-react'

import { Container } from '@/components/container'
import { PageHero } from '@/components/page-hero'
import { CTASection } from '@/components/cta-section'
import { CourtLinks } from '@/components/court-links'
import { FAQAccordion } from '@/components/faq-accordion'

const baseUrl = 'https://www.thiangthamlaw.com'

const title = 'ทนายใกล้ฉันในอุบลราชธานี ครอบคลุม 25 อำเภอ ปรึกษาฟรี | สำนักกฎหมายเที่ยงธรรม (19+ ปี)'

const description =
  'หาทนายใกล้ฉันในอุบลราชธานี สำนักกฎหมายเที่ยงธรรมทนายความ ประสบการณ์กว่า 19 ปี รับปรึกษาออนไลน์ นัดหมาย และว่าความครอบคลุมทั้ง 25 อำเภอ ทั้งเมืองอุบล วารินชำราบ เดชอุดม พิบูลมังสาหาร และอำเภออื่นทั่วจังหวัด'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ทนายใกล้ฉัน',
    'ทนายความใกล้ฉัน',
    'หาทนายใกล้ฉัน',
    'ทนายใกล้ฉันอุบล',
    'ทนายใกล้ฉันอุบลราชธานี',
    'ทนายความอุบลราชธานี',
    'ทนายเดชอุดม',
    'ทนายวารินชำราบ',
    'ปรึกษาทนายออนไลน์',
    'รับว่าความทั่วราชอาณาจักร',
  ],
  alternates: {
    canonical: `${baseUrl}/th/lawyer-near-me`,
  },
  openGraph: {
    title,
    description,
    url: `${baseUrl}/th/lawyer-near-me`,
    siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: '/law-office-hero.png',
        width: 1200,
        height: 630,
        alt: 'ทนายใกล้ฉันในอุบลราชธานี สำนักกฎหมายเที่ยงธรรมทนายความ',
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

const featuredDistricts = [
  {
    href: '/th/lawyer-ubon-ratchathani',
    label: 'ทนายความอุบลราชธานี',
    note: 'ตัวเมือง ที่ตั้งศาลจังหวัดและศาลแขวงอุบลราชธานี',
  },
  {
    href: '/th/lawyer-det-udom',
    label: 'ทนายความเดชอุดม',
    note: 'ที่ตั้งสำนักงาน ที่ตั้งศาลจังหวัดเดชอุดม',
  },
  {
    href: '/th/lawyer-warin-chamrap',
    label: 'ทนายความวารินชำราบ',
    note: 'เมืองคู่ขนานฝั่งตะวันตกของแม่น้ำมูล',
  },
  {
    href: '/th/lawyer-phibun-mangsahan',
    label: 'ทนายความพิบูลมังสาหาร',
    note: 'อำเภอใหญ่ทางตอนเหนือของจังหวัด',
  },
  {
    href: '/th/lawyer-muang-sam-sip',
    label: 'ทนายความม่วงสามสิบ',
    note: 'บนเส้นทางเดชอุดมถึงตัวเมืองอุบล',
  },
  {
    href: '/th/lawyer-trakan-phuet-phon',
    label: 'ทนายความตระการพืชผล',
    note: 'อำเภอใหญ่ฝั่งตะวันออกของจังหวัด',
  },
  {
    href: '/th/lawyer-khueang-nai',
    label: 'ทนายความเขื่องใน',
    note: 'ตอนบนของจังหวัด ใกล้ตัวเมืองอุบล',
  },
] as const

const otherDistricts = [
  'เขมราฐ',
  'โขงเจียม',
  'นาจะหลวย',
  'บุณฑริก',
  'โพธิ์ไทร',
  'สำโรง',
  'ดอนมดแดง',
  'กุดข้าวปุ้น',
  'ตาลสุม',
  'น้ำยืน',
  'ศรีเมืองใหม่',
  'สิรินธร',
  'ทุ่งศรีอุดม',
  'นาตาล',
  'เหล่าเสือโก้ก',
  'สว่างวีระวงศ์',
  'น้ำขุ่น',
  'นาเยีย',
] as const

const steps = [
  {
    icon: MapPin,
    title: 'แจ้งอำเภอของคุณ',
    description: 'บอกว่าอยู่ที่อำเภอไหนในอุบลราชธานี พร้อมช่องทางติดต่อที่สะดวก ทั้งโทร LINE หรือแบบฟอร์ม',
  },
  {
    icon: Video,
    title: 'ส่งข้อเท็จจริงออนไลน์',
    description: 'เล่าเหตุการณ์ ส่งภาพเอกสารหรือหมายศาลทาง LINE เพื่อให้ทีมตรวจและประเมินแนวทางเบื้องต้นฟรี',
  },
  {
    icon: Phone,
    title: 'นัดพบหรือดำเนินคดี',
    description: 'นัดหมายที่สำนักงาน นัดพบนอกสถานที่ หรือให้ทีมเดินทางไปศาลตามเขตอำนาจโดยทนายประสบการณ์กว่า 19 ปี',
  },
] as const

const nearMeFaqs = [
  {
    q: 'อยู่ต่างอำเภอต้องเดินทางมาที่สำนักงานเสมอไหม?',
    a: 'ไม่จำเป็น ขั้นตอนแรกปรึกษาออนไลน์ทางโทรศัพท์หรือ LINE ได้ทั้งหมด ทั้งการเล่าเหตุการณ์ ส่งเอกสาร และการประเมินแนวทางเบื้องต้นฟรี จะเดินทางเฉพาะเมื่อต้องพบตัว ลงนามเอกสาร หรือขึ้นศาลเท่านั้น',
    category: 'general' as const,
  },
  {
    q: 'หาทนายใกล้ฉันในอุบลราชธานีควรดูอะไรเป็นหลัก?',
    a: 'ดูประสบการณ์ทำงานในคดีประเภทเดียวกับเรื่องของคุณ ความชัดเจนของขั้นตอนและค่าใช้จ่ายที่แจ้งล่วงหน้า ช่องทางติดต่อที่ตอบไว และความพร้อมเดินทางไปศาลตามเขตอำนาจ มากกว่าดูแค่ระยะทางใกล้ไกล',
    category: 'general' as const,
  },
  {
    q: 'คดีของคนต่างอำเภอขึ้นศาลไหน?',
    a: 'คดีในจังหวัดอุบลราชธานีขึ้นศาลจังหวัดอุบลราชธานี ศาลแขวงอุบลราชธานี หรือศาลจังหวัดเดชอุดมตามเขตอำนาจและประเภทคดี ทีมงานจะตรวจให้ตั้งแต่ขั้นปรึกษาว่าเรื่องของคุณอยู่ในเขตศาลใด',
    category: 'civil' as const,
  },
  {
    q: 'ปรึกษาออนไลน์มีผลเหมือนมาพบที่สำนักงานไหม?',
    a: 'การประเมินแนวทางเบื้องต้นทำออนไลน์ได้เต็มรูปแบบเท่ากัน เพราะใช้ข้อเท็จจริงและเอกสารชุดเดียวกัน ส่วนขั้นตอนที่กฎหมายบังคับให้พบตัว เช่น ลงนามแต่งทนายหรือสืบพยาน ทีมงานจะนัดหมายให้เป็นขั้นตอน',
    category: 'process' as const,
  },
]

const allDistrictNames = [
  'เมืองอุบลราชธานี',
  'วารินชำราบ',
  'เดชอุดม',
  'พิบูลมังสาหาร',
  'ม่วงสามสิบ',
  'ตระการพืชผล',
  'เขื่องใน',
  ...otherDistricts,
]

export default function LawyerNearMePage() {
  const url = `${baseUrl}/th/lawyer-near-me`
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'ทนายใกล้ฉันในอุบลราชธานี — สำนักกฎหมายเที่ยงธรรมทนายความ',
    description,
    url,
    inLanguage: 'th-TH',
    telephone: '082-377-2404',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1005 หมู่ 24 ตำบลเมืองเดช อำเภอเดชอุดม จังหวัดอุบลราชธานี 34160',
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
    areaServed: allDistrictNames.map((district) => ({
      '@type': 'City',
      name: district,
    })),
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: nearMeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.thiangthamlaw.com/th' },
      { '@type': 'ListItem', position: 2, name: 'ทนายใกล้ฉัน', item: url },
    ],
  }

  return (
    <main id="main-content" className="overflow-x-hidden selection:bg-gold/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        title="ทนายใกล้ฉันในอุบลราชธานี"
        description="ไม่ว่าคุณอยู่ตำบลไหนในอุบลราชธานี ปรึกษาทนายออนไลน์ได้ทันที นัดหมายได้ทั่วจังหวัด และรับว่าความครอบคลุมทั้ง 25 อำเภอ โดยทีมทนายประสบการณ์กว่า 19 ปี"
        crumbs={[{ href: '/th', label: 'หน้าแรก' }, { label: 'ทนายใกล้ฉัน' }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step) => (
              <article key={step.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <step.icon className="size-6 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-xl font-bold text-primary">{step.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/th/consultation"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-6 py-2.5 text-sm font-bold text-primary transition hover:bg-gold-soft"
            >
              ปรึกษาออนไลน์ฟรี
              <MessageCircle className="size-4" aria-hidden="true" />
            </Link>
            <a
              href="tel:0823772404"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-2.5 text-sm font-bold text-primary transition hover:border-gold hover:text-gold"
            >
              <Phone className="size-4" aria-hidden="true" />
              โทร 082-377-2404
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/25 py-16 md:py-20">
        <Container>
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">
            Service Areas
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
            อำเภอที่มีหน้าแนะนำเฉพาะ
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
            อำเภอเหล่านี้มีหน้าแนะนำแยกพร้อมรายละเอียดพื้นที่ ศาลที่เกี่ยวข้อง และแนวทางปรึกษา
            เลือกอำเภอของคุณเพื่อดูข้อมูลเฉพาะพื้นที่
          </p>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredDistricts.map((district) => (
              <Link
                key={district.href}
                href={district.href}
                className="group rounded-xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-md"
              >
                <MapPin className="size-6 text-gold" aria-hidden="true" />
                <h3 className="mt-4 font-serif text-xl font-bold text-primary group-hover:text-gold-ink">
                  {district.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{district.note}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  ดูข้อมูลอำเภอนี้
                  <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">
                All 25 Districts
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
                อำเภออื่น ๆ ปรึกษาออนไลน์และนัดหมายทั่วจังหวัด
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                นอกจาก 7 อำเภอด้านบน สำนักงานรับปรึกษาออนไลน์ นัดหมาย และรับว่าความในอำเภอที่เหลือทั้งหมดของอุบลราชธานี
                เลือกอำเภอของคุณเพื่อเริ่มปรึกษาได้ทันที
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {otherDistricts.map((district) => (
                  <Link
                    key={district}
                    href="/th/consultation"
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-primary transition hover:border-gold/50 hover:text-gold-ink"
                  >
                    <MapPin className="size-3.5 text-gold" aria-hidden="true" />
                    ทนายใกล้ฉัน{district}
                  </Link>
                ))}
              </div>
              <ul className="mt-8 space-y-3">
                {[
                  'ประเมินแนวทางเบื้องต้นฟรีทุกช่องทาง ไม่ต้องเดินทางมาก่อน',
                  'แจ้งค่าเดินทาง (ถ้ามี) ล่วงหน้าเป็นหนังสือก่อนเริ่มงานทุกครั้ง',
                  'ทีมทนายประสบการณ์กว่า 19 ปี ดูแลตั้งแต่ปรึกษาจนจบศาล',
                ].map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <CourtLinks locale="th" />
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white">
                คำถามเรื่องหาทนายใกล้ตัว
              </h2>
              <p className="mt-4 text-sm leading-7 text-primary-foreground/80">
                คำตอบสั้น ๆ สำหรับคนต่างอำเภอที่กำลังตัดสินใจติดต่อสำนักงาน
              </p>
              <Link
                href="/th/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:text-white"
              >
                ติดต่อสำนักงาน
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <FAQAccordion items={nearMeFaqs} />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="อยู่ไหนในอุบลก็ปรึกษาได้ เริ่มฟรีวันนี้"
        description="แจ้งอำเภอของคุณ โทร Line หรือส่งรายละเอียดมาให้สำนักงานประเมินเบื้องต้นก่อนนัดหมาย"
      />
    </main>
  )
}
