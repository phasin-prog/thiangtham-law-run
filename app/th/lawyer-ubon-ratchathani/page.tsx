import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Gavel,
  MapPin,
  MessageCircle,
  ShieldCheck,
  UsersRound,
} from 'lucide-react'

import { Container } from '@/components/container'
import { PageHero } from '@/components/page-hero'
import { CTASection } from '@/components/cta-section'
import { CourtLinks } from '@/components/court-links'

const baseUrl = 'https://www.thiangthamlaw.com'

const title = 'ทนายความอุบลราชธานี ทนายอุบล ปรึกษากฎหมาย รับว่าความทั่วราชอาณาจักร | สำนักกฎหมายเที่ยงธรรม (19+ ปี)'

const description =
  'ทนายความอุบลราชธานี สำนักกฎหมายเที่ยงธรรมทนายความ นำโดยทนายเกษม ฉิมพลี ประสบการณ์กว่า 19 ปี ให้คำปรึกษากฎหมายและรับว่าความคดีแพ่ง คดีอาญา คดีที่ดิน คดีมรดก คดีครอบครัว ทั่วจังหวัดอุบลราชธานีและทั่วราชอาณาจักร'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ทนายความอุบลราชธานี',
    'ทนายอุบลราชธานี',
    'ทนายอุบล',
    'ทนายความอุบล',
    'สำนักงานกฎหมายอุบลราชธานี',
    'สำนักกฎหมายอุบลราชธานี',
    'ปรึกษาทนายอุบลราชธานี',
    'หาทนายอุบล',
    'ทนายคดีแพ่งอุบล',
    'ทนายคดีอาญาอุบล',
    'ทนายที่ดินอุบล',
    'ทนายมรดกอุบล',
    'ทนายครอบครัวอุบล',
    'ทนายฟ้องหย่าอุบล',
    'ทนายเดชอุดม',
    'รับว่าความอุบลราชธานี',
    'รับว่าความทั่วราชอาณาจักร',
  ],
  alternates: {
    canonical: `${baseUrl}/th/lawyer-ubon-ratchathani`,
  },
  openGraph: {
    title,
    description,
    url: `${baseUrl}/th/lawyer-ubon-ratchathani`,
    siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: '/law-office-hero.png',
        width: 1200,
        height: 630,
        alt: 'ทนายความอุบลราชธานี สำนักกฎหมายเที่ยงธรรมทนายความ',
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

const services = [
  {
    icon: Gavel,
    title: 'คดีแพ่งและข้อพิพาท',
    description: 'ข้อพิพาทสัญญา ผิดสัญญาหนี้สิน ค่าเสียหาย เรียกค่าทดแทน และสิทธิเรียกร้องทางแพ่ง',
  },
  {
    icon: ShieldCheck,
    title: 'คดีอาญาและสิทธิเสรีภาพ',
    description: 'การแก้ข้อกล่าวหา ต่อสู้คดีอาญา สอบสวน แจ้งความร้องทุกข์ และคำร้องขอประกันตัว',
  },
  {
    icon: UsersRound,
    title: 'คดีครอบครัวและเยาวชน',
    description: 'การฟ้องหย่า สิทธิปกครองบุตร ค่าอุปการะเลี้ยงดู ทรัพย์สินระหว่างสามีภรรยา และคดีคุ้มครองสิทธิ',
  },
  {
    icon: FileText,
    title: 'คดีมรดกและจัดการทรัพย์สิน',
    description: 'คำร้องขอตั้งผู้จัดการมรดก ข้อพิพาทพินัยกรรม การแบ่งทรัพย์มรดกแก่ทายาทโดยธรรม',
  },
  {
    icon: MapPin,
    title: 'คดีที่ดินและกรรมสิทธิ์',
    description: 'ข้อพิพาทแนวเขตที่ดิน สิทธิครอบครองปรปักษ์ การขับไล่รุกล้ำ และสิทธิเหนือพื้นดิน',
  },
  {
    icon: Gavel,
    title: 'รับว่าความคดีความทั่วไป',
    description: 'การเรียบเรียงคำฟ้อง คำให้การ คำร้องต่าง ๆ และการทำหน้าที่ในชั้นศาลทั่วประเทศ',
  },
] as const

const preparationItems = [
  'เตรียมลำดับเหตุการณ์สำคัญและสรุปประเด็นที่เกิดขึ้น',
  'เอกสารหลักฐานสำคัญ เช่น โฉนดที่ดิน สัญญา แชทสนทนา หรือเอกสารทางการเงิน',
  'หมายศาล เอกสารราชการ หรือหนังสือบอกกล่าวทวงถาม (ถ้ามี)',
  'ข้อมูลคู่กรณีและพยานสำคัญในเรื่อง (ถ้ามี)',
] as const

export default function LawyerUbonRatchathaniPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    alternateName: 'Thiangtham Law Office',
    description,
    url: `${baseUrl}/th/lawyer-ubon-ratchathani`,
    telephone: '082-377-2404',
    areaServed: [
      {
        '@type': 'AdministrativeArea',
        name: 'อุบลราชธานี',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'ประเทศไทย',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1005 หมู่ 24 ตำบลเมืองเดช อำเภอเดชอุดม',
      addressLocality: 'เดชอุดม',
      addressRegion: 'อุบลราชธานี',
      postalCode: '34160',
      addressCountry: 'TH',
    },
    knowsAbout: [
      'ทนายความอุบลราชธานี',
      'ทนายอุบลราชธานี',
      'ทนายอุบล',
      'สำนักงานกฎหมายอุบลราชธานี',
      'ปรึกษากฎหมายอุบลราชธานี',
      'คดีแพ่ง',
      'คดีอาญา',
      'คดีครอบครัว',
      'คดีมรดก',
      'คดีที่ดิน',
      'รับว่าความอรรถคดีทั่วราชอาณาจักร',
    ],
  }

  return (
    <main id="main-content" className="overflow-x-hidden selection:bg-gold/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.thiangthamlaw.com/th' },
              { '@type': 'ListItem', position: 2, name: 'ทนายความอุบลราชธานี', item: 'https://www.thiangthamlaw.com/th/lawyer-ubon-ratchathani' },
            ],
          }),
        }}
      />

      <PageHero
        title="ทนายความอุบลราชธานี"
        description="สำนักกฎหมายเที่ยงธรรมทนายความ ตั้งอยู่ในอำเภอเดชอุดม จังหวัดอุบลราชธานี ให้บริการปรึกษากฎหมายและรับว่าความแก่ประชาชนทั่วจังหวัดอุบลราชธานีและพื้นที่ใกล้เคียง"
        crumbs={[{ href: '/th', label: 'หน้าแรก' }, { label: 'ทนายความอุบลราชธานี' }]}
      />

      <section className="py-12 md:py-16 bg-secondary/10 border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              สำนักกฎหมายเที่ยงธรรมทนายความ ให้บริการด้านคดีความแก่ประชาชนในจังหวัดอุบลราชธานีและพื้นที่ใกล้เคียง โดยสำนักงานตั้งอยู่ที่อำเภอเดชอุดม มุ่งเน้นกระบวนการวิเคราะห์พยานหลักฐานและกฎหมายอย่างตรงไปตรงมา และให้บริการรับว่าความคดีความอรรถคดีทั่วราชอาณาจักรตามลักษณะของเรื่องและขอบเขตวิชาชีพทนายความ
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/th/contact"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gold px-6 py-2.5 text-sm font-bold text-primary transition hover:bg-gold-soft"
              >
                ติดต่อสำนักงาน
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>

              <Link
                href="/th/consultation"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-6 py-2.5 text-sm font-bold text-primary transition hover:border-gold hover:text-gold"
              >
                นัดปรึกษากฎหมาย
                <MessageCircle className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">
                Ubon Ratchathani Legal Services
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
                สิทธิทางกฎหมายและการดำเนินคดีในอุบลราชธานี
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                การปรึกษากฎหมายและการต่อสู้คดีในศาลจังหวัดอุบลราชธานี ศาลแขวงอุบลราชธานี หรือศาลเยาวชนและครอบครัวจังหวัดอุบลราชธานี จำเป็นต้องมีการเตรียมความพร้อมทางด้านข้อมูลพยานหลักฐานและลำดับเวลาของเหตุการณ์ที่เกิดขึ้นอย่างชัดเจน เพื่อนำมาวิเคราะห์ประเด็นข้อกฎหมายและสิทธิทางศาลอย่างตรงจุด
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                สำนักงานให้ความสำคัญกับการประเมินข้อเท็จจริงอย่างยุติธรรม ไม่โฆษณาเกินจริง และชี้แจงขั้นตอนการทำงานอย่างเป็นระบบเพื่อให้ลูกความเข้าใจทิศทางของคดีอย่างโปร่งใส
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary">
                สิ่งที่ควรเตรียมก่อนพูดคุยกับทนายความ
              </h2>

              <ul className="mt-6 space-y-4">
                {preparationItems.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-muted-foreground">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/th/process"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-gold-ink"
              >
                ดูขั้นตอนการทำงานของสำนักงาน
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/25 py-16 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">
              Legal Services
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
              ขอบเขตคดีที่สำนักงานให้บริการในอุบลราชธานี
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              ภาพรวมหมวดคดีที่พบบ่อยและงานเอกสารด้านกฎหมายที่สำนักงานรับดำเนินการแก่ลูกความ
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-border bg-white p-6 shadow-sm"
              >
                <service.icon className="size-6 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-xl font-bold text-primary">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="rounded-3xl border border-gold/25 bg-card p-6 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">
                  Coverage Details
                </p>
                <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
                  รับว่าความคดีแพ่งและอาญา ทั่วราชอาณาจักร
                </h2>
                <p className="mt-5 text-base leading-8 text-muted-foreground">
                  แม้สำนักงานจะตั้งอยู่ที่อำเภอเดชอุดม จังหวัดอุบลราชธานี แต่ทีมงานทนายความและที่ปรึกษากฎหมายพร้อมให้คำปรึกษาและเดินทางไปดำเนินกระบวนพิจารณาในศาลต่างจังหวัด หรือหน่วยงานทางกฎหมายทั่วประเทศตามข้อตกลงและขอบเขตวิชาชีพทนายความ
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6">
                <p className="text-sm font-bold text-primary">
                  ขอบเขตการทำงานด้านพื้นที่
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>ศาลและหน่วยงานในจังหวัดอุบลราชธานี</li>
                  <li>ศาลและหน่วยงานในจังหวัดใกล้เคียง</li>
                  <li>งานว่าความและเอกสารอรรถคดีทั่วประเทศไทย</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/25 py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">
                Nearby Areas
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
                อำเภออื่นในอุบลราชธานีที่สำนักงานดูแล
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                นอกจากตัวเมืองอุบลราชธานี สำนักงานยังรับปรึกษาและว่าความในอำเภอต่าง ๆ ทั่วจังหวัด
                โดยทีมทนายประสบการณ์กว่า 19 ปี
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {[
                  { href: '/th/lawyer-det-udom', label: 'ทนายความเดชอุดม' },
                  { href: '/th/lawyer-warin-chamrap', label: 'ทนายความวารินชำราบ' },
                  { href: '/th/lawyer-phibun-mangsahan', label: 'ทนายความพิบูลมังสาหาร' },
                  { href: '/th/lawyer-muang-sam-sip', label: 'ทนายความม่วงสามสิบ' },
                  { href: '/th/lawyer-trakan-phuet-phon', label: 'ทนายความตระการพืชผล' },
                  { href: '/th/lawyer-khueang-nai', label: 'ทนายความเขื่องใน' },
                  { href: '/th/lawyer-near-me', label: 'ทนายใกล้ฉัน 25 อำเภอ' },
                ].map((district) => (
                  <Link
                    key={district.href}
                    href={district.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-white px-4 py-2 text-xs font-bold text-primary transition hover:border-gold/50 hover:text-gold-ink"
                  >
                    <MapPin className="size-3.5 text-gold" aria-hidden="true" />
                    {district.label}
                  </Link>
                ))}
              </div>
            </div>
            <CourtLinks locale="th" district="เมืองอุบลราชธานี" court="ศาลจังหวัดอุบลราชธานี" />
          </div>
        </Container>
      </section>

      <CTASection
        title="ต้องการปรึกษาทนายความในจังหวัดอุบลราชธานี?"
        description="โทร Line หรือส่งรายละเอียดเบื้องต้นมาให้สำนักงานตรวจสอบก่อนนัดหมายได้"
      />
    </main>
  )
}
