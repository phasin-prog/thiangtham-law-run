import type { Metadata } from 'next'
import { Container } from '@/components/container'
import { ConsultAssurance } from '@/components/consult-assurance'

export const metadata: Metadata = {
  title: 'ปรึกษาทนายออนไลน์ โทร 082-377-2404 ประเมินเบื้องต้นฟรี',
  description:
    'ปรึกษาทนาย ปรึกษากฎหมายออนไลน์ ส่งข้อเท็จจริงและเอกสารเบื้องต้นให้ทีมทนายตรวจก่อนฟ้องหรือต่อสู้คดี แจ้งค่าบริการก่อนเริ่มงานทุกครั้ง โทร 082-377-2404 LINE ID kasemchimphlee',
  keywords: [
    'ปรึกษาทนาย',
    'ปรึกษากฎหมาย',
    'ปรึกษากฎหมายออนไลน์',
    'ปรึกษาทนายฟรีเบื้องต้น',
    'จ้างทนายราคาเท่าไหร่',
    'นัดหมายทนาย',
  ],
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/th/consultation',
    languages: {
      'th-TH': 'https://www.thiangthamlaw.com/th/consultation',
      'en-US': 'https://www.thiangthamlaw.com/en/consultation',
      'x-default': 'https://www.thiangthamlaw.com/th/consultation',
    },
  },
}
import { ConsultationForm } from '@/components/consultation-form'
import { FAQAccordion } from '@/components/faq-accordion'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { consultationFaqs } from '@/lib/data/faqs'

export default function ConsultationPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: consultationFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <PageHero
        title="ปรึกษาเบื้องต้น"
        description="ส่งรายละเอียดปัญหาเพื่อให้ทีมงานตรวจข้อมูลเบื้องต้นและติดต่อกลับตามช่องทางที่คุณสะดวก"
        crumbs={[{ href: '/', label: 'หน้าแรก' }, { label: 'ปรึกษาเบื้องต้น' }]}
      />
      <Container className="pt-8">
        <address className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-gold/35 bg-secondary/70 px-6 py-4 text-sm not-italic leading-7 text-muted-foreground">
          <span>ปรึกษาทนาย โทร <a className="font-bold text-primary" href="tel:0823772404">082-377-2404</a></span>
          <span>LINE ID: kasemchimphlee</span>
          <span>1005 หมู่ 24 ต.เมืองเดช อ.เดชอุดม จ.อุบลราชธานี 34160</span>
          <span>เปิดทุกวัน 08:30–17:30 น.</span>
        </address>
      </Container>
      <section className="py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.55fr]">
          <ConsultationForm />
          <aside>
            <SectionHeading
              eyebrow="ก่อนส่งข้อมูล"
              title="เล่าข้อเท็จจริงตามลำดับ"
              description="ระบุวัน เวลา คู่กรณี เหตุการณ์สำคัญ เอกสารที่มี และสิ่งที่ต้องการความช่วยเหลือ โดยไม่ต้องใช้ศัพท์กฎหมาย"
            />
            <div className="mt-7 rounded-2xl border border-gold/35 bg-secondary/70 p-6">
              <h2 className="font-serif text-xl font-bold text-primary">ความเป็นส่วนตัว</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                ข้อมูลจะใช้เพื่อประเมินเบื้องต้นและติดต่อกลับเท่านั้น
                การส่งแบบฟอร์มยังไม่ถือเป็นการรับว่าความจนกว่าจะตกลงขอบเขตงานอย่างชัดเจน
              </p>
            </div>
          </aside>
        </Container>
      </section>
      <ConsultAssurance locale="th" />
      <section className="bg-secondary/60 py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.6fr_1fr]">
          <SectionHeading eyebrow="คำถามเกี่ยวกับการปรึกษา" title="สิ่งที่ควรทราบก่อนส่งเรื่อง" />
          <FAQAccordion items={consultationFaqs} />
        </Container>
      </section>
    </main>
  )
}
