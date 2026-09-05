import { CheckCircle2, FileText, Info, SearchCheck } from 'lucide-react'
import { Container } from '@/components/container'
import { CTASection } from '@/components/cta-section'
import { PageHero } from '@/components/page-hero'
import type { LegalService } from '@/lib/data/services'

export function ServiceDetail({
  service,
  locale = 'th',
}: {
  service: LegalService
  locale?: 'th' | 'en'
}) {
  const isEnglish = locale === 'en'
  const homeHref = isEnglish ? '/en' : '/'
  const servicesHref = isEnglish ? '/en/services' : '/services'

  return (
    <main>
      <PageHero
        title={service.title}
        description={service.description}
        crumbs={[
          { href: homeHref, label: isEnglish ? 'Home' : 'หน้าแรก' },
          { href: servicesHref, label: isEnglish ? 'Legal Services' : 'บริการกฎหมาย' },
          { label: service.title },
        ]}
      />

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            <div className="space-y-8">
              <section aria-label={isEnglish ? 'Summary' : 'สรุปสั้น'} className="rounded-2xl border border-gold/40 bg-secondary/70 p-6 md:p-8">
                <h2 className="font-serif text-2xl font-bold text-burgundy">
                  {isEnglish ? 'TL;DR' : 'สรุปสั้น'}
                </h2>
                <p className="mt-4 leading-8 text-muted-foreground">
                  {isEnglish
                    ? `Thiangtham Law Office (19+ years) advises and represents clients in ${service.title} across Thailand. Send your facts and documents for an initial assessment before filing or responding. Call +66 82 377 2404`
                    : `สำนักกฎหมายเที่ยงธรรมทนายความ (ประสบการณ์กว่า 19 ปี) ให้คำปรึกษาและรับว่าความเรื่อง${service.title}ทั่วราชอาณาจักร ส่งข้อเท็จจริงและเอกสารเพื่อประเมินเบื้องต้นก่อนฟ้องหรือต่อสู้คดี โทร 082-377-2404`}
                </p>
              </section>

              <section className="rounded-2xl border border-border bg-card p-6 md:p-8">
                <h2 className="font-serif text-2xl font-bold text-burgundy">
                  {isEnglish ? 'Service Overview' : 'ภาพรวมบริการ'}
                </h2>
                <p className="mt-4 leading-8 text-muted-foreground">{service.overview}</p>
              </section>

              <section aria-label={isEnglish ? 'Plaintiff and defendant' : 'ฝั่งโจทก์และจำเลย'} className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-gold/40 bg-secondary/70 p-5">
                  <h3 className="font-serif text-lg font-bold text-burgundy">
                    {isEnglish ? 'Plaintiff: want to file suit?' : `ฝั่งโจทก์: อยากฟ้อง${service.title}?`}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {isEnglish
                      ? 'We review facts and evidence, draft the complaint, file with the competent court, and pursue your claim through mediation, trial, and enforcement.'
                      : 'ทีมงานตรวจข้อเท็จจริงและพยานหลักฐาน ร่างคำฟ้อง ยื่นฟ้องต่อศาลที่มีเขตอำนาจ และดำเนินคดีตั้งแต่ไกล่เกลี่ย สืบพยาน จนถึงบังคับคดี'}
                  </p>
                </div>
                <div className="rounded-xl border border-gold/40 bg-secondary/70 p-5">
                  <h3 className="font-serif text-lg font-bold text-burgundy">
                    {isEnglish ? 'Defendant: being sued?' : `ฝั่งจำเลย: โดนฟ้อง${service.title}?`}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {isEnglish
                      ? 'We examine the complaint, file a timely answer, raise defenses, negotiate settlement, and fight the case in court within every deadline.'
                      : 'ทีมงานตรวจคำฟ้อง ยื่นคำให้การแก้ต่างให้ทันกำหนด ยกข้อต่อสู้ เจรจาไกล่เกลี่ย และสู้คดีในศาลทุกขั้นตอน ไม่ให้เสียสิทธิเพราะขาดนัด'}
                  </p>
                </div>
              </section>

              <section>
                <div className="flex items-center gap-3">
                  <SearchCheck className="size-6 text-gold" aria-hidden="true" />
                  <h2 className="font-serif text-2xl font-bold text-burgundy">
                    {isEnglish ? 'Common Legal Issues' : 'ปัญหาที่พบบ่อย'}
                  </h2>
                </div>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.topics.map((topic) => (
                    <div key={topic} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-burgundy" aria-hidden="true" />
                      <p className="text-sm leading-6">{topic}</p>
                    </div>
                  ))}
                </div>
              </section>

              {service.note && (
                <section className="rounded-2xl border border-gold/40 bg-secondary/70 p-6">
                  <div className="flex items-center gap-3">
                    <Info className="size-5 text-burgundy" aria-hidden="true" />
                    <h2 className="font-serif text-xl font-bold text-burgundy">{service.noteTitle}</h2>
                  </div>
                  <p className="mt-3 leading-7 text-muted-foreground">{service.note}</p>
                </section>
              )}

              <section aria-label={isEnglish ? 'Frequently asked questions' : 'คำถามที่พบบ่อย'}>
                <div className="flex items-center gap-3">
                  <Info className="size-6 text-gold" aria-hidden="true" />
                  <h2 className="font-serif text-2xl font-bold text-burgundy">
                    {isEnglish ? 'Frequently Asked Questions' : 'คำถามที่พบบ่อย'}
                  </h2>
                </div>
                <div className="mt-5 space-y-3">
                  <details className="rounded-xl border border-border bg-card p-5">
                    <summary className="cursor-pointer font-semibold leading-7">
                      {isEnglish
                        ? `What documents should I prepare for ${service.title}?`
                        : `ต้องเตรียมเอกสารอะไรก่อนปรึกษาเรื่อง${service.title}?`}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{service.documentsToPrepare.join(' ')}</p>
                  </details>
                  <details className="rounded-xl border border-border bg-card p-5">
                    <summary className="cursor-pointer font-semibold leading-7">
                      {isEnglish ? 'How much does it cost?' : 'ค่าบริการคิดอย่างไร?'}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {isEnglish
                        ? 'Initial consultation is free. Representation fees depend on case type, complexity, evidence, court level, and agreed scope. Our team always confirms the scope and fees before starting work.'
                        : 'ปรึกษาเบื้องต้นฟรี ส่วนค่าบริการรับว่าความขึ้นอยู่กับประเภทเรื่อง ความซับซ้อนของข้อเท็จจริง เอกสาร ชั้นศาล และขอบเขตงานที่ตกลงกัน ทีมงานจะแจ้งก่อนเริ่มงานทุกครั้ง'}
                    </p>
                  </details>
                  <details className="rounded-xl border border-border bg-card p-5">
                    <summary className="cursor-pointer font-semibold leading-7">
                      {isEnglish ? 'Do you take cases outside Ubon Ratchathani?' : 'รับทำคดีต่างจังหวัดหรือไม่?'}
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {isEnglish
                        ? 'Yes. The office is in Det Udom, Ubon Ratchathani, and represents clients in courts nationwide across all 77 provinces, including online consultation via phone and LINE.'
                        : 'สำนักงานตั้งอยู่ที่อำเภอเดชอุดม จังหวัดอุบลราชธานี และรับว่าความทั่วราชอาณาจักรทั้ง 77 จังหวัด พร้อมปรึกษากฎหมายออนไลน์ทางโทรศัพท์และ LINE'}
                    </p>
                  </details>
                </div>
              </section>

              <section className="rounded-2xl bg-burgundy p-6 text-burgundy-foreground md:p-8">
                <h2 className="font-serif text-2xl font-bold text-gold">
                  {isEnglish ? 'How Our Office Can Help' : 'สำนักงานช่วยอะไรได้บ้าง'}
                </h2>
                <div className="mt-5 grid gap-4">
                  {service.help.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                      <p className="leading-7 text-burgundy-foreground/85">{item}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-sm lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <FileText className="size-6 text-gold" aria-hidden="true" />
                <h2 className="font-serif text-xl font-bold text-burgundy">
                  {isEnglish ? 'Documents to Prepare' : 'เอกสารที่ควรเตรียม'}
                </h2>
              </div>
              <ul className="mt-5 space-y-4">
                {service.documentsToPrepare.map((document) => (
                  <li key={document} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                    {document}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">
                {isEnglish
                  ? 'If your documents are incomplete, send what you have and our team can advise what else may be needed.'
                  : 'หากเอกสารยังไม่ครบ สามารถส่งรายละเอียดที่มีเพื่อให้ทีมงานช่วยแนะนำรายการเพิ่มเติมได้'}
              </p>
            </aside>
          </div>
        </Container>
      </section>

      <CTASection
        title={isEnglish ? `Need advice about ${service.title}?` : `ต้องการปรึกษาเรื่อง${service.title}?`}
      />
    </main>
  )
}
