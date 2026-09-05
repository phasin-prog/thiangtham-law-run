import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Landmark, Scale } from 'lucide-react'

import { Container } from '@/components/container'
import { PageHero } from '@/components/page-hero'
import { CTASection } from '@/components/cta-section'
import { FAQAccordion } from '@/components/faq-accordion'
import { courtJurisdictions, specialCourts } from '@/lib/data/court-jurisdiction'

const baseUrl = 'https://www.thiangthamlaw.com'

const title = 'เขตอำนาจศาลอุบลราชธานี อำเภอไหนขึ้นศาลใด | ศาลเดชอุดม ศาลอุบล'

const description =
  'ตารางเขตอำนาจศาลจังหวัดในอุบลราชธานี อำเภอเดชอุดม นาจะหลวย น้ำยืน น้ำขุ่น บุณฑริก ทุ่งศรีอุดม นาเยีย ขึ้นศาลจังหวัดเดชอุดม อีก 18 อำเภอขึ้นศาลจังหวัดอุบลราชธานี พร้อมศาลแขวงและศาลเยาวชนและครอบครัว'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'เขตอำนาจศาล',
    'เขตอำนาจศาลอุบลราชธานี',
    'ฟ้องศาลไหน',
    'ศาลจังหวัดเดชอุดม',
    'ศาลจังหวัดอุบลราชธานี',
    'ศาลแขวงอุบลราชธานี',
    'อำเภอไหนขึ้นศาลใด',
    'ฟ้องผิดศาล',
    'ปรึกษาทนายอุบล',
  ],
  alternates: {
    canonical: `${baseUrl}/th/court-jurisdiction`,
  },
  openGraph: {
    title,
    description,
    url: `${baseUrl}/th/court-jurisdiction`,
    siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    locale: 'th_TH',
    type: 'website',
  },
}

const jurisdictionFaqs = [
  {
    q: 'ฟ้องผิดศาลจะเกิดอะไรขึ้น?',
    a: 'ศาลที่ไม่มีเขตอำนาจอาจไม่รับฟ้องหรือมีคำสั่งโอนคดี ทำให้เสียเวลาและอาจกระทบอายุความได้ ก่อนยื่นฟ้องจึงต้องตรวจให้ชัดว่าเรื่องของคุณอยู่ในเขตศาลใด ทีมงานตรวจเขตศาลให้ก่อนยื่นทุกคดี',
    category: 'civil' as const,
  },
  {
    q: 'คดีเล็กน้อยต้องไปศาลจังหวัดหรือไม่?',
    a: 'คดีมโนสาเร่ คดีผู้บริโภค และคดีอาญาโทษเบาในจังหวัดอุบลราชธานียื่นที่ศาลแขวงอุบลราชธานี ซึ่งอยู่ตัวเมืองอุบล กระบวนพิจารณารวดเร็วกว่าศาลจังหวัด',
    category: 'civil' as const,
  },
  {
    q: 'คดีครอบครัวฟ้องที่ศาลไหน?',
    a: 'คดีหย่า อำนาจปกครองบุตร และคดีเยาวชนในจังหวัดอุบลราชธานีอยู่ในอำนาจศาลเยาวชนและครอบครัวจังหวัดอุบลราชธานี ไม่ใช่ศาลจังหวัดทั่วไป',
    category: 'family' as const,
  },
  {
    q: 'ไม่แน่ใจว่าเรื่องของตนขึ้นศาลใดทำอย่างไร?',
    a: 'ส่งข้อเท็จจริงและเอกสารเบื้องต้นมาให้สำนักงานตรวจก่อนได้ฟรี ทั้งเขตอำนาจศาล อายุความ และแนวทางคดี โทร 082-377-2404 หรือ LINE ID kasemchimphlee',
    category: 'general' as const,
  },
]

export default function CourtJurisdictionPage() {
  const url = `${baseUrl}/th/court-jurisdiction`
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: jurisdictionFaqs.map((faq) => ({
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
      { '@type': 'ListItem', position: 2, name: 'เขตอำนาจศาล', item: url },
    ],
  }

  return (
    <main id="main-content" className="overflow-x-hidden selection:bg-gold/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <PageHero
        title="เขตอำนาจศาลในอุบลราชธานี"
        description="อำเภอไหนขึ้นศาลใด ตรวจให้ชัดก่อนยื่นฟ้อง จะได้ไม่เสียเวลาและไม่เสี่ยงขาดอายุความ"
        crumbs={[{ href: '/th', label: 'หน้าแรก' }, { label: 'เขตอำนาจศาล' }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            {courtJurisdictions.map((court) => (
              <article key={court.court} className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8">
                <div className="flex items-center gap-3">
                  <Landmark className="size-6 text-gold" aria-hidden="true" />
                  <h2 className="font-serif text-2xl font-bold text-primary">{court.court}</h2>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{court.addressNote}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {court.districts.map((district) => (
                    <span
                      key={district}
                      className="inline-flex items-center rounded-full bg-secondary/70 px-4 py-1.5 text-sm font-bold text-primary"
                    >
                      {district}
                    </span>
                  ))}
                </div>
                <p className="mt-5 text-xs leading-6 text-muted-foreground">
                  ที่มา: {court.basis}
                </p>
                <a
                  href={court.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-gold-ink"
                >
                  เว็บไซต์ศาล
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {specialCourts.map((court) => (
              <div key={court.court} className="rounded-2xl border border-gold/30 bg-secondary/60 p-6">
                <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
                  <Scale className="size-5 text-gold" aria-hidden="true" />
                  {court.court}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{court.note}</p>
                <a
                  href={court.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-gold-ink"
                >
                  เว็บไซต์หน่วยงาน
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-8 rounded-xl border border-border bg-card p-5 text-sm leading-7 text-muted-foreground">
            ตรวจสอบเขตอำนาจด้วยตนเองได้ที่ระบบสืบค้นทางการของศาลยุติธรรม{' '}
            <a
              href="https://pubdata.coj.go.th/jurisdiction/"
              target="_blank"
              rel="noreferrer"
              className="font-bold text-primary underline decoration-gold/50 underline-offset-4 hover:text-gold-ink"
            >
              pubdata.coj.go.th/jurisdiction
            </a>{' '}
            หรือส่งเรื่องให้สำนักงานตรวจให้ฟรีก่อนยื่นฟ้อง
          </p>
        </Container>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="font-serif text-3xl font-bold text-white">
                คำถามเรื่องเขตศาลที่พบบ่อย
              </h2>
              <Link
                href="/th/consultation"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:text-white"
              >
                ให้สำนักงานตรวจเขตศาลให้ฟรี
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <div>
              <FAQAccordion items={jurisdictionFaqs} />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="ไม่แน่ใจว่าเรื่องของคุณขึ้นศาลไหน?"
        description="ส่งข้อเท็จจริงมาให้สำนักงานตรวจเขตศาล อายุความ และแนวทางคดีเบื้องต้นฟรี"
      />
    </main>
  )
}
