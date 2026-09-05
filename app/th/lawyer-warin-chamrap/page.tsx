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

const title = 'ทนายความวารินชำราบ ทนายวาริน ปรึกษาฟรี รับว่าความทั่วราชอาณาจักร | สำนักกฎหมายเที่ยงธรรม (19+ ปี)'

const description =
  'ทนายความวารินชำราบ สำนักกฎหมายเที่ยงธรรมทนายความ ประสบการณ์กว่า 19 ปี ให้บริการปรึกษากฎหมายเบื้องต้นฟรี รับว่าความคดีแพ่ง คดีอาญา คดีครอบครัว คดีมรดก คดีที่ดิน ในอำเภอวารินชำราบ อุบลราชธานี และทั่วราชอาณาจักร'

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    'ทนายความวารินชำราบ',
    'ทนายวารินชำราบ',
    'ทนายวาริน',
    'หาทนายวาริน',
    'ปรึกษาทนายวารินชำราบ',
    'ทนายคดีแพ่งวาริน',
    'ทนายคดีอาญาวาริน',
    'ทนายมรดกวาริน',
    'ทนายที่ดินวาริน',
    'รับว่าความวาริน',
    'รับว่าความทั่วราชอาณาจักร',
  ],
  alternates: {
    canonical: `${baseUrl}/th/lawyer-warin-chamrap`,
  },
  openGraph: {
    title,
    description,
    url: `${baseUrl}/th/lawyer-warin-chamrap`,
    siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    locale: 'th_TH',
    type: 'website',
    images: [
      {
        url: '/law-office-hero.png',
        width: 1200,
        height: 630,
        alt: 'ทนายความวารินชำราบ สำนักกฎหมายเที่ยงธรรมทนายความ',
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
    title: 'คดีแพ่ง',
    description: 'ข้อพิพาทสัญญา หนี้สิน ค่าเสียหาย สิทธิเรียกร้อง และข้อพิพาททางแพ่ง',
  },
  {
    icon: ShieldCheck,
    title: 'คดีอาญา',
    description: 'ให้คำปรึกษาเกี่ยวกับการแจ้งความ การสอบสวน การแก้ข้อกล่าวหา และการต่อสู้คดี',
  },
  {
    icon: UsersRound,
    title: 'คดีครอบครัว',
    description: 'หย่า อำนาจปกครองบุตร ค่าอุปการะเลี้ยงดู และทรัพย์สินระหว่างคู่สมรส',
  },
  {
    icon: FileText,
    title: 'คดีมรดกและเอกสาร',
    description: 'ผู้จัดการมรดก พินัยกรรม การแบ่งทรัพย์มรดก และเอกสารทางกฎหมาย',
  },
  {
    icon: MapPin,
    title: 'คดีที่ดิน',
    description: 'ข้อพิพาทกรรมสิทธิ์ เขตที่ดิน การครอบครอง การรุกล้ำ และเอกสารสิทธิ',
  },
  {
    icon: Gavel,
    title: 'รับว่าความและดำเนินคดี',
    description: 'ประเมินแนวทาง เตรียมเอกสาร และดำเนินการตามขั้นตอนกฎหมาย',
  },
] as const

const preparationItems = [
  'สรุปข้อเท็จจริงและลำดับเหตุการณ์ของเรื่องที่เกิดขึ้น',
  'เตรียมเอกสารหลักฐาน เช่น สัญญา ใบเสร็จ แชทพูดคุย หรือภาพถ่าย',
  'ข้อมูลคู่กรณีและพยานบุคคลที่เกี่ยวข้อง (ถ้ามี)',
  'จัดเตรียมคำถามหรือประเด็นหลักที่ต้องการคำแนะนำ',
] as const

const nearbyDistricts = [
  { href: '/th/lawyer-det-udom', label: 'ทนายความเดชอุดม' },
  { href: '/th/lawyer-ubon-ratchathani', label: 'ทนายความอุบลราชธานี' },
  { href: '/th/lawyer-phibun-mangsahan', label: 'ทนายความพิบูลมังสาหาร' },
  { href: '/th/lawyer-muang-sam-sip', label: 'ทนายความม่วงสามสิบ' },
  { href: '/th/lawyer-trakan-phuet-phon', label: 'ทนายความตระการพืชผล' },
                  { href: '/th/lawyer-khueang-nai', label: 'ทนายความเขื่องใน' },
                  { href: '/th/lawyer-near-me', label: 'ทนายใกล้ฉัน 25 อำเภอ' },
] as const

export default function LawyerWarinChamrapPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    alternateName: 'Thiangtham Law Office',
    description,
    url: `${baseUrl}/th/lawyer-warin-chamrap`,
    areaServed: [
      {
        '@type': 'City',
        name: 'วารินชำราบ',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'อุบลราชธานี',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'เดชอุดม',
      addressRegion: 'อุบลราชธานี',
      postalCode: '34160',
      addressCountry: 'TH',
    },
    knowsAbout: [
      'ทนายความวารินชำราบ',
      'ทนายวารินชำราบ',
      'ทนายวาริน',
      'ปรึกษากฎหมายวารินชำราบ',
      'ทนายอุบลราชธานี',
      'คดีแพ่ง',
      'คดีอาญา',
      'คดีครอบครัว',
      'คดีมรดก',
      'คดีที่ดิน',
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
              { '@type': 'ListItem', position: 2, name: 'ทนายความวารินชำราบ', item: 'https://www.thiangthamlaw.com/th/lawyer-warin-chamrap' },
            ],
          }),
        }}
      />

      <PageHero
        title="ทนายความวารินชำราบ"
        description="สำนักกฎหมายเที่ยงธรรมทนายความ ประสบการณ์กว่า 19 ปี ให้บริการปรึกษากฎหมายเบื้องต้นฟรี ตรวจข้อเท็จจริง และประเมินแนวทางคดีแก่ประชาชนในอำเภอวารินชำราบ พร้อมรับว่าความทั่วราชอาณาจักร"
        crumbs={[{ href: '/th', label: 'หน้าแรก' }, { label: 'ทนายความวารินชำราบ' }]}
      />

      <section className="py-12 md:py-16 bg-secondary/10 border-b border-border">
        <Container>
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-muted-foreground md:text-lg">
              อำเภอวารินชำราบเป็นเมืองคู่ขนานฝั่งตะวันตกของแม่น้ำมูล ติดกับอำเภอเมืองอุบลราชธานี มีชุมชนเมืองขนาดใหญ่และข้อพิพาทหลากหลายรูปแบบ สำนักงานของเราซึ่งตั้งอยู่ที่อำเภอเดชอุดมพร้อมดูแลลูกความในวารินชำราบ ทั้งการปรึกษาออนไลน์ การนัดหมาย และการดำเนินคดีที่ศาลจังหวัดและศาลแขวงอุบลราชธานี โดยทีมทนายประสบการณ์กว่า 19 ปี
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
                Local Legal Support
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
                ปรึกษาทนายในพื้นที่วารินชำราบและอุบลราชธานี
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                หากคุณอยู่ในอำเภอวารินชำราบหรือพื้นที่ใกล้เคียง และต้องการปรึกษาทนายความเกี่ยวกับคดีแพ่ง คดีอาญา คดีครอบครัว
                คดีมรดก คดีที่ดิน หรือเอกสารทางกฎหมาย สามารถติดต่อสำนักงานเพื่อแจ้งข้อเท็จจริงเบื้องต้น
                และเตรียมเอกสารให้ทีมงานช่วยประเมินแนวทางได้ โดยไม่มีค่าใช้จ่ายในการประเมินเบื้องต้น
              </p>
              <p className="mt-4 text-base leading-8 text-muted-foreground">
                การปรึกษากฎหมายที่ดีควรเริ่มจากข้อเท็จจริง เอกสาร และลำดับเหตุการณ์ที่ชัดเจน
                เพื่อให้การประเมินทางเลือกทางกฎหมายเป็นไปอย่างรอบคอบและไม่สร้างความคาดหวังเกินจริง
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="font-serif text-2xl font-bold text-primary">
                ก่อนติดต่อทนาย ควรเตรียมอะไรบ้าง
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
              Practice Areas
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
              งานกฎหมายที่ปรึกษาและรับดำเนินการ
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-foreground">
              ภาพรวมหมวดงานที่ผู้ติดต่อในพื้นที่วารินชำราบและอุบลราชธานีมักสอบถามสำนักงาน
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
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">
              Common Questions
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
              ประเด็นที่ชาววารินชำราบถามบ่อย
            </h2>
            <p className="mt-4 text-base leading-8 text-muted-foreground">
              วารินชำราบเป็นชุมชนเมือง มีทั้งหอพัก ร้านค้า และการจราจรหนาแน่น ปัญหาที่พบมากคือคดีรถชน สัญญาเช่า หนี้สิน และการซื้อของออนไลน์ กดอ่านหลักกฎหมายพร้อมฎีกาประกอบได้เลย
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              { href: '/th/dika/rot-chon-reiak-kha-sia-hai', label: 'ถูกรถชนเรียกค่าเสียหายอะไรได้บ้าง' },
              { href: '/th/dika/chao-thidin-10-pi-mai-jot', label: 'สัญญาเช่าระยะยาวไม่จดทะเบียนมีผลอย่างไร' },
              { href: '/th/dika/gu-yuem-pak-plao-fong-dai-mai', label: 'ให้เพื่อนยืมเงินปากเปล่าฟ้องได้ไหม' },
              { href: '/th/dika/don-lok-on-ngoen-online', label: 'โดนหลอกโอนเงินซื้อของออนไลน์ทำอย่างไร' },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group flex items-center justify-between gap-4 rounded-xl border border-border bg-card p-5 shadow-sm transition hover:border-gold/40">
                <span className="text-sm font-bold leading-7 text-primary group-hover:text-gold-ink">{item.label}</span>
                <ArrowRight className="size-4 shrink-0 text-gold transition group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <div className="rounded-3xl border border-gold/25 bg-card p-6 md:p-8">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-ink">
                Warin Chamrap / Ubon Ratchathani
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary">
                ต้องการหาทนายใกล้ฉันในวารินชำราบ?
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                สามารถเริ่มจากการติดต่อสำนักงาน แจ้งพื้นที่ เหตุการณ์ และเอกสารที่มีอยู่
                เพื่อให้ทีมงานช่วยประเมินว่าควรเริ่มจากการเจรจา การทำหนังสือ
                การรวบรวมหลักฐาน หรือการดำเนินคดีตามขั้นตอนกฎหมาย
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {nearbyDistricts.map((district) => (
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
            <CourtLinks locale="th" district="วารินชำราบ" court="ศาลจังหวัดอุบลราชธานี" />
          </div>
        </Container>
      </section>

      <CTASection
        title="ต้องการปรึกษาทนายความในพื้นที่วารินชำราบ?"
        description="โทร Line หรือส่งรายละเอียดเบื้องต้นมาให้สำนักงานตรวจสอบก่อนนัดหมายได้"
      />
    </main>
  )
}
