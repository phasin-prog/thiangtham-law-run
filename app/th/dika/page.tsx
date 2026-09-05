import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpenCheck, ChevronRight, FileSearch, Gavel, Scale } from 'lucide-react'
import { Container } from '@/components/container'
import { CTASection } from '@/components/cta-section'
import { PageHero } from '@/components/page-hero'
import { dikaCategories, dikaKnowledge } from '@/lib/data/dika-knowledge'

export const metadata: Metadata = {
  title: 'ฎีกาน่ารู้ 100 ข้อ ฟ้องชู้ มรดก ที่ดิน เช็คเด้ง กู้ยืม | คำพิพากษาศาลฎีกา',
  description:
    'คลังความรู้กฎหมาย 100 ข้อพร้อมคำพิพากษาศาลฎีกา ฟ้องชู้ ฟ้องหย่า สินสมรส ผู้จัดการมรดก พินัยกรรม ครอบครองปรปักษ์ เช็คเด้ง กู้ยืม ฉ้อโกง หมิ่นประมาท เลิกจ้าง ปรึกษาทนาย โทร 082-377-2404',
  keywords: [
    'คำพิพากษาศาลฎีกา',
    'ฎีกาน่ารู้',
    'ทนายโจทก์',
    'ทนายจำเลย',
    'อยากฟ้องคดี',
    'โดนฟ้องทำยังไง',
    'จัดการมรดกทำยังไง',
    'ฟ้องชู้ ฎีกา',
    'มรดก ฎีกา',
    'ครอบครองปรปักษ์ ฎีกา',
    'เช็คเด้ง ฎีกา',
    'กู้ยืม ฎีกา',
    'กฎหมายน่ารู้',
    'ปรึกษาทนาย',
  ],
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/th/dika',
  },
  openGraph: {
    title: 'ฎีกาน่ารู้ 100 ข้อ พร้อมคำพิพากษาศาลฎีกา',
    description: 'ฟ้องชู้ มรดก ที่ดิน เช็คเด้ง กู้ยืม ฉ้อโกง หมิ่นประมาท เลิกจ้าง อ่านฟรีพร้อมหลักกฎหมาย',
    url: 'https://www.thiangthamlaw.com/th/dika',
    siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
    locale: 'th_TH',
    type: 'website',
  },
}

const principles = [
  {
    icon: FileSearch,
    title: 'ตรวจข้อเท็จจริงของคดี',
    description:
      'คำพิพากษาแต่ละเรื่องอ้างอิงข้อเท็จจริงและพยานหลักฐานเฉพาะกรณี จึงต้องเปรียบเทียบอย่างระมัดระวัง',
  },
  {
    icon: BookOpenCheck,
    title: 'ตรวจบทกฎหมายและแนววินิจฉัย',
    description:
      'พิจารณาบทบัญญัติที่ใช้บังคับ ประเด็นที่ศาลวินิจฉัย และเหตุผลประกอบคำพิพากษา',
  },
  {
    icon: Scale,
    title: 'ใช้ประกอบการวางแนวทาง',
    description:
      'แนวคำพิพากษาเป็นข้อมูลประกอบการวิเคราะห์ ไม่ใช่คำรับรองว่าคดีอื่นจะมีผลเช่นเดียวกัน',
  },
]

export default function DikaPage() {
  return (
    <main>
      <PageHero
        title="ฎีกาและแนวคำพิพากษา 100 ข้อ"
        description="คลังความรู้กฎหมายพร้อมคำพิพากษาศาลฎีกา ครอบคลุมคดีแพ่ง อาญา ครอบครัว มรดก ที่ดิน เช็ค และแรงงาน"
        crumbs={[{ href: '/', label: 'หน้าแรก' }, { label: 'ฎีกา' }]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <item.icon className="size-7 text-gold" aria-hidden="true" />
                <h2 className="mt-4 font-serif text-xl font-bold text-primary">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>

          <nav aria-label="หมวดกฎหมาย" className="mt-14 flex flex-wrap gap-2">
            {dikaCategories.map((category) => (
              <a
                key={category.key}
                href={`#dika-${category.key}`}
                className="rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-primary transition hover:border-gold/50 hover:text-gold-ink"
              >
                {category.label}
              </a>
            ))}
          </nav>

          {dikaCategories.map((category) => {
            const items = dikaKnowledge.filter((entry) => entry.category === category.key)
            return (
              <div key={category.key} id={`dika-${category.key}`} className="mt-14 scroll-mt-28">
                <div className="flex items-center gap-3">
                  <Gavel className="size-6 text-gold" aria-hidden="true" />
                  <h2 className="font-serif text-2xl font-bold text-primary">
                    {category.label} ({items.length} ข้อ)
                  </h2>
                </div>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">{category.description}</p>
                <div className="mt-6 grid gap-4">
                  {items.map((entry) => (
                    <Link
                      key={entry.slug}
                      href={`/th/dika/${entry.slug}`}
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-gold/30 hover:shadow-md"
                    >
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-navy-soft px-3 py-1 text-xs font-bold text-primary">
                            ข้อที่ {entry.no}
                          </span>
                          {entry.dika && (
                            <span className="text-xs font-bold text-gold-ink">{entry.dika}</span>
                          )}
                        </div>
                        <h3 className="font-serif text-lg font-bold leading-8 text-primary transition-colors group-hover:text-gold-ink">
                          {entry.question}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-7 text-muted-foreground">
                          {entry.principle}
                        </p>
                      </div>
                      <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition group-hover:bg-gold group-hover:text-navy">
                        <ChevronRight className="size-5" aria-hidden="true" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )
          })}

          <div className="mt-16 rounded-2xl border border-gold/10 bg-secondary/70 p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-primary">ข้อควรทราบในการใช้แนวคำพิพากษา</h2>
            <div className="mt-5 space-y-4 text-sm leading-7 text-muted-foreground">
              <p>
                1. <strong>ข้อเท็จจริงต่างกัน ผลอาจต่างกัน:</strong> คำพิพากษาฎีกาแต่ละเรื่องวินิจฉัยบนพื้นฐานของพยานหลักฐานในคดีนั้นๆ หากข้อเท็จจริงในเรื่องของคุณต่างออกไปเพียงเล็กน้อย ผลทางกฎหมายอาจเปลี่ยนแปลงได้
              </p>
              <p>
                2. <strong>กฎหมายมีการแก้ไข:</strong> ต้องตรวจสอบว่ากฎหมายที่ใช้ในขณะที่ศาลมีคำพิพากษานั้น ยังคงมีผลบังคับใช้อยู่หรือมีการแก้ไขเปลี่ยนแปลงในภายหลังหรือไม่
              </p>
              <p>
                3. <strong>แนววินิจฉัยอาจมีการเปลี่ยนแปลง:</strong> แม้คำพิพากษาฎีกาจะเป็นแนวทางที่สำคัญ แต่ศาลอาจมีการวางแนววินิจฉัยใหม่ที่ต่างจากเดิมได้ตามความเหมาะสมของยุคสมัยและเหตุการณ์
              </p>
            </div>
          </div>
        </Container>
      </section>
      <CTASection title="ต้องการวิเคราะห์แนวคำพิพากษาที่เกี่ยวข้องกับเรื่องของคุณ?" />
    </main>
  )
}
