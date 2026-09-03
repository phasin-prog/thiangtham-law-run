import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ทนายความอุบลราชธานี ทนายเดชอุดม รับว่าความทั่วราชอาณาจักร | สำนักกฎหมายเที่ยงธรรม (19+ ปี)',
  description:
    'สำนักกฎหมายเที่ยงธรรมทนายความ นำโดยทนายเกษม ฉิมพลี ประสบการณ์กว่า 19 ปี ให้บริการปรึกษากฎหมาย รับว่าความ คดีแพ่ง คดีอาญา คดีที่ดิน คดีมรดก คดีครอบครัว ทั่วจังหวัดอุบลราชธานีและทั่วราชอาณาจักร',
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/th',
  },
}
import {
  ArrowRight,
  BriefcaseBusiness,
  Building2,
  CalendarCheck2,
  CheckCircle2,
  FileText,
  Gavel,
  Landmark,
  MessageCircle,
  Scale,
  ShieldCheck,
  UsersRound,
  MapPin,
} from 'lucide-react'
import { ArticleCard } from '@/components/article-card'
import { CTASection } from '@/components/cta-section'
import { Container } from '@/components/container'
import { FAQAccordion } from '@/components/faq-accordion'
import { HeroSection } from '@/components/hero-section'
import { SectionHeading } from '@/components/section-heading'
import { ServiceCard } from '@/components/service-card'
import { legalArticles } from '@/lib/data/articles'
import { homeFaqs } from '@/lib/data/faqs'
import { legalServices } from '@/lib/data/services'

const servicePreviewSlugs = ['contracts', 'business', 'tax', 'visa-foreign-documents', 'labor'] as const
const casePreviewItems = [
  {
    icon: Scale,
    title: 'คดีแพ่ง',
    description: 'ข้อพิพาทสัญญา หนี้สิน ค่าเสียหาย และสิทธิเรียกร้องทางแพ่ง',
  },
  {
    icon: ShieldCheck,
    title: 'คดีอาญา',
    description: 'การสอบสวน การแจ้งความ การแก้ข้อกล่าวหา และการต่อสู้คดี',
  },
  {
    icon: UsersRound,
    title: 'คดีครอบครัว',
    description: 'หย่า อำนาจปกครองบุตร ค่าอุปการะเลี้ยงดู และทรัพย์สินร่วม',
  },
  {
    icon: Landmark,
    title: 'คดีมรดก',
    description: 'ผู้จัดการมรดก พินัยกรรม การแบ่งทรัพย์ และสิทธิทายาท',
  },
  {
    icon: MapPin,
    title: 'คดีที่ดิน',
    description: 'เขตที่ดิน สิทธิครอบครอง การรุกล้ำ และข้อพิพาทเกี่ยวกับกรรมสิทธิ์',
  },
  {
    icon: FileText,
    title: 'คดีเช็ค',
    description: 'เช็คเด้ง การเรียกชำระหนี้ และเอกสารประกอบการดำเนินคดี',
  },
] as const

const trustIndicators = [
  {
    icon: Building2,
    title: 'ก่อตั้งเมื่อปี พ.ศ. 2550',
    description: 'สำนักงานที่ดำเนินงานต่อเนื่องและมีแนวทางทำงานชัดเจน',
  },
  {
    icon: CalendarCheck2,
    title: 'ประสบการณ์มากกว่า 19 ปี',
    description: 'ประสบการณ์ทำงานทางกฎหมายที่ใช้ประเมินเรื่องได้รอบด้าน',
  },
  {
    icon: BriefcaseBusiness,
    title: 'ทีมทนายความและที่ปรึกษา',
    description: 'ทำงานร่วมกันตามบทบาท เพื่อดูแลข้อเท็จจริงและเอกสารของแต่ละเรื่อง',
  },
  {
    icon: Gavel,
    title: 'รับว่าความทั่วราชอาณาจักร',
    description: 'รองรับงานคดีและงานให้คำปรึกษาตามลักษณะของเรื่องและพื้นที่ที่เกี่ยวข้อง',
  },
  {
    icon: ShieldCheck,
    title: 'รักษาความลับของลูกความ',
    description: 'ดูแลข้อมูลและเอกสารด้วยความระมัดระวังตามมาตรฐานวิชาชีพ',
  },
] as const

const processSteps = [
  {
    icon: MessageCircle,
    title: 'ติดต่อสำนักงาน',
    description: 'แจ้งช่องทางที่สะดวก โทรศัพท์ Line หรือแบบฟอร์มติดต่อ',
  },
  {
    icon: FileText,
    title: 'แจ้งข้อเท็จจริงเบื้องต้น',
    description: 'สรุปเหตุการณ์ คู่กรณี และเอกสารที่มีอยู่ในตอนนี้',
  },
  {
    icon: Scale,
    title: 'ตรวจเอกสารและประเมินแนวทาง',
    description: 'พิจารณาข้อเท็จจริง เอกสาร และประเด็นทางกฎหมายที่เกี่ยวข้อง',
  },
  {
    icon: BriefcaseBusiness,
    title: 'วางแผนการดำเนินงาน',
    description: 'กำหนดขอบเขตงาน ขั้นตอน และเอกสารที่ต้องเตรียมต่อ',
  },
  {
    icon: Gavel,
    title: 'ดำเนินการตามขั้นตอนกฎหมาย',
    description: 'ทำงานตามแนวทางที่ตกลงไว้และติดตามความคืบหน้าอย่างเป็นระบบ',
  },
] as const

const whyPoints = [
  'วิเคราะห์ข้อเท็จจริงและพยานหลักฐาน',
  'ตรวจสอบเอกสารอย่างรอบคอบ',
  'สื่อสารขั้นตอนอย่างชัดเจน',
  'รักษาความลับของลูกความ',
  'ไม่รับประกันผลคดีเกินจริง',
] as const

const servicePreviewItems = legalServices.filter((service) =>
  servicePreviewSlugs.includes(service.slug as (typeof servicePreviewSlugs)[number]),
)

export default function HomePage() {
  return (
    <main className="overflow-x-hidden selection:bg-gold/30">
      <HeroSection />

      <section className="bg-secondary/15 py-16 md:py-20 border-b border-border">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Local Legal Counsel"
                title="ทนายความในเดชอุดม อุบลราชธานี"
                description="สำนักงานกฎหมายเที่ยงธรรมทนายความตั้งอยู่ในอำเภอเดชอุดม จังหวัดอุบลราชธานี ให้บริการปรึกษากฎหมาย ตรวจข้อเท็จจริง ประเมินแนวทางคดี และดำเนินคดีตามขั้นตอนของกฎหมาย สำหรับประชาชนในพื้นที่เดชอุดม อุบลราชธานี และพื้นที่ใกล้เคียง พร้อมทั้งรับว่าความทั่วราชอาณาจักรตามขอบเขตวิชาชีพทนายความ"
              />
              <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold">
                <Link
                  href="/th/lawyer-det-udom"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors"
                >
                  <MapPin className="size-4 text-gold" aria-hidden="true" />
                  ทนายความเดชอุดม
                </Link>
                <span className="text-muted-foreground/30">|</span>
                <Link
                  href="/th/lawyer-ubon-ratchathani"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors"
                >
                  <MapPin className="size-4 text-gold" aria-hidden="true" />
                  ทนายความอุบลราชธานี
                </Link>
                <span className="text-muted-foreground/30">|</span>
                <Link
                  href="/th/lawyer-near-me"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors"
                >
                  <MapPin className="size-4 text-gold" aria-hidden="true" />
                  ทนายใกล้ฉัน 25 อำเภอ
                </Link>
                <span className="text-muted-foreground/30">|</span>
                <Link
                  href="/th/services"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors"
                >
                  <Scale className="size-4 text-gold" aria-hidden="true" />
                  ปรึกษากฎหมาย
                </Link>
                <span className="text-muted-foreground/30">|</span>
                <Link
                  href="/th/contact"
                  className="inline-flex items-center gap-1.5 text-primary hover:text-gold transition-colors"
                >
                  <ArrowRight className="size-4 text-gold" aria-hidden="true" />
                  ติดต่อสำนักงาน
                </Link>
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-serif text-xl font-bold text-primary">ขอบเขตการดำเนินงานในพื้นที่เดชอุดม อุบลราชธานี</h3>
              <ul className="mt-6 space-y-4">
                <li className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <span><strong>ปรึกษากฎหมายเบื้องต้น:</strong> ตรวจสอบประเด็นและข้อกฎหมายก่อนเริ่มดำเนินคดี</span>
                </li>
                <li className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <span><strong>ตรวจเอกสารและข้อเท็จจริง:</strong> ประเมินพยานหลักฐานและเอกสารของลูกความอย่างรัดกุม</span>
                </li>
                <li className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <span><strong>วางแนวทางดำเนินคดี:</strong> กำหนดขั้นตอนและแผนการต่อสู้คดีหรือดำเนินงานด้านเอกสาร</span>
                </li>
                <li className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <span><strong>คดีแพ่ง คดีอาญา คดีครอบครัว มรดก ที่ดิน:</strong> รับว่าความคดีความครอบคลุมและอรรถคดีทั่วไป</span>
                </li>
                <li className="flex gap-3 text-sm leading-7 text-muted-foreground">
                  <CheckCircle2 className="mt-1 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <span><strong>รับว่าความทั่วราชอาณาจักร:</strong> อำนวยความสะดวกในพื้นที่ใกล้เคียงและทั่วประเทศตามลักษณะคดี</span>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            title="สิ่งที่ลูกความเห็นได้ทันทีจากสำนักงานนี้"
            description="ข้อมูลสำคัญที่ช่วยให้ผู้มาติดต่อเข้าใจตัวตนของสำนักงานและรูปแบบการทำงานก่อนเริ่มปรึกษา"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {trustIndicators.map((item) => (
              <article
                key={item.title}
                className="rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <item.icon className="size-6 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-lg font-bold text-primary">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/25 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                title="บริการหลักด้านงานเอกสารและที่ปรึกษา"
                description="งานที่ไม่ใช่การฟ้องคดีโดยตรง แต่มีผลต่อความพร้อมของข้อเท็จจริง สัญญา และเอกสารที่ใช้ในทางกฎหมาย"
              />
              <div className="mt-8 space-y-4 rounded-2xl border border-border bg-card p-6">
                <p className="text-sm font-semibold text-primary">
                  เหมาะสำหรับผู้ที่ต้องการ:
                </p>
                <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                    ตรวจร่างและตรวจเอกสารก่อนลงนาม
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                    จัดเตรียมเอกสารธุรกิจ ภาษี และเอกสารต่างประเทศ
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" aria-hidden="true" />
                    ได้แนวทางเบื้องต้นก่อนเริ่มดำเนินงานหรือเจรจา
                  </li>
                </ul>
                <div className="pt-2">
                  <Link
                    href="/th/services"
                    className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-gold-ink"
                  >
                    ดูบริการทั้งหมด
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {servicePreviewItems.map((service) => (
                <ServiceCard key={service.slug} service={service} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div>
              <SectionHeading
                title="หมวดคดีที่สำนักงานรับดำเนินการ"
                description="ภาพรวมหมวดคดีที่พบบ่อย เพื่อให้ผู้ติดต่อเลือกเส้นทางการปรึกษาได้ง่ายขึ้น"
              />
              <div className="mt-8 rounded-2xl border border-border bg-card p-6">
                <p className="text-sm leading-7 text-muted-foreground">
                  หากเรื่องของท่านเกี่ยวข้องกับข้อพิพาทหรือการดำเนินคดี กรุณาเตรียมข้อเท็จจริง เอกสาร
                  และลำดับเหตุการณ์ให้พร้อม เพื่อให้การประเมินแนวทางเป็นไปอย่างถูกต้อง
                </p>
                <Link
                  href="/th/case-studies"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-gold-ink"
                >
                  ดูแนวทางงานคดี
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {casePreviewItems.map((item) => (
                <article
                  key={item.title}
                  className="rounded-xl border border-border bg-white p-5 shadow-sm"
                >
                  <item.icon className="size-6 text-gold" aria-hidden="true" />
                  <h2 className="mt-4 font-serif text-xl font-bold text-primary">{item.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <Container>
          <SectionHeading
            light
            hideDivider
            title="เหตุผลที่ลูกความเลือกสำนักงานนี้"
            description="ใช้แนวทางที่เน้นข้อเท็จจริง เอกสาร และความชัดเจนของขั้นตอน มากกว่าคำโฆษณา"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {whyPoints.map((point) => (
              <div key={point} className="rounded-xl border border-white/10 bg-white/6 p-5">
                <CheckCircle2 className="size-5 text-gold" aria-hidden="true" />
                <p className="mt-4 text-sm font-medium leading-7 text-primary-foreground/85">{point}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-secondary/25 py-16 md:py-20">
        <Container>
          <SectionHeading
            align="center"
            title="ขั้นตอนการทำงาน"
            description="ลำดับการทำงานที่ทำให้ลูกความเห็นภาพตั้งแต่การติดต่อครั้งแรกจนถึงการดำเนินงานต่อเนื่อง"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step) => (
              <article key={step.title} className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <step.icon className="size-6 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-xl font-bold text-primary">{step.title}</h2>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading
              title="บทความล่าสุด"
              description="บทความและคู่มือสั้น ๆ ที่ช่วยให้ผู้ติดต่อเตรียมตัวก่อนปรึกษาสำนักงาน"
            />
            <Link href="/th/articles" className="inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-gold-ink">
              ดูบทความทั้งหมด
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {legalArticles.slice(0, 3).map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-primary-foreground md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <SectionHeading
                light
                hideDivider
                title="คำถามที่พบบ่อย"
                description="คำถามพื้นฐานที่ช่วยให้ผู้ติดต่อเตรียมข้อมูลให้พร้อมก่อนพูดคุยกับสำนักงาน"
              />
              <div className="mt-8 rounded-2xl border border-white/10 bg-white/6 p-6">
                <p className="text-sm leading-7 text-primary-foreground/80">
                  หากยังไม่แน่ใจว่าควรเริ่มจากตรงไหน สามารถโทรหรือส่ง Line มาสอบถามเบื้องต้นได้ก่อน
                </p>
                <Link
                  href="/th/contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-gold transition hover:text-white"
                >
                  ติดต่อสำนักงาน
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <div>
              <FAQAccordion items={homeFaqs} />
            </div>
          </div>
        </Container>
      </section>

      <CTASection
        title="ต้องการให้ทีมงานช่วยประเมินเรื่องของคุณ?"
        description="โทร Line หรือส่งรายละเอียดเบื้องต้นมาให้สำนักงานตรวจสอบก่อนนัดหมายได้"
      />
    </main>
  )
}
