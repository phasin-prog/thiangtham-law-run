import { BadgeCheck } from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'

const rowsTh = [
  { item: 'แจ้งข้อเท็จจริง + ประเมินแนวทางเบื้องต้น', price: 'ฟรี' },
  { item: 'ปรึกษาเชิงลึก / ตรวจเอกสารชุดใหญ่', price: 'เริ่ม 1,000–3,000 บาท/ครั้ง' },
  { item: 'หนังสือบอกกล่าวทวงถาม', price: 'เริ่ม 3,000 บาท' },
  { item: 'ร่าง / ตรวจสัญญา', price: 'เริ่ม 5,000 บาท' },
  { item: 'ร้องขอตั้งผู้จัดการมรดก (ไม่มีข้อพิพาท)', price: 'เริ่ม 15,000 บาท' },
  { item: 'ฟ้องคดีแพ่ง / อาญา / ครอบครัว / ที่ดิน', price: 'ประเมินรายคดี' },
]

const rowsEn = [
  { item: 'Initial facts + preliminary assessment', price: 'Free' },
  { item: 'In-depth consultation / full document review', price: 'from ฿1,000–3,000/session' },
  { item: 'Demand / notice letter', price: 'from ฿3,000' },
  { item: 'Contract drafting / review', price: 'from ฿5,000' },
  { item: 'Uncontested estate administrator petition', price: 'from ฿15,000' },
  { item: 'Civil / criminal / family / land litigation', price: 'Assessed per case' },
]

/**
 * ตารางราคาชี้แนะ (โดยประมาณ) — สอดคล้องกับนโยบายประเมินเบื้องต้นฟรี
 * ยืนยันเป็นหนังสือก่อนเริ่มงานทุกครั้ง
 */
export function FeeGuide({ locale = 'th' }: { locale?: 'th' | 'en' }) {
  const isEnglish = locale === 'en'
  const rows = isEnglish ? rowsEn : rowsTh
  return (
    <section className="py-14 md:py-20">
      <Container className="max-w-4xl">
        <SectionHeading
          align="center"
          eyebrow={isEnglish ? 'Fees' : 'ค่าบริการ'}
          title={isEnglish ? 'Indicative Fees — Confirmed in Writing First' : 'อัตราชี้แนะ — ยืนยันเป็นหนังสือก่อนเริ่มงาน'}
          description={
            isEnglish
              ? 'Initial assessment is free. Any further work is quoted and confirmed in writing before it begins.'
              : 'ประเมินแนวทางเบื้องต้นฟรีทุกช่องทาง งานขั้นต่อไปจะแจ้งราคาและยืนยันเป็นหนังสือก่อนเริ่มงานทุกครั้ง'
          }
        />
        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          {rows.map((row, index) => (
            <div
              key={row.item}
              className={`flex flex-wrap items-center justify-between gap-2 px-6 py-4 ${index > 0 ? 'border-t border-border' : ''} ${index === 0 ? 'bg-secondary/60' : ''}`}
            >
              <p className="flex items-center gap-2 text-sm font-semibold leading-7 text-primary">
                {index === 0 && <BadgeCheck className="size-4 shrink-0 text-gold" aria-hidden="true" />}
                {row.item}
              </p>
              <p className={`font-serif text-lg font-bold ${index === 0 ? 'text-gold-ink' : 'text-primary'}`}>
                {row.price}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-5 text-center text-xs leading-6 text-muted-foreground">
          {isEnglish
            ? 'Indicative starting rates only. The final fee depends on the facts, documents, court level, and agreed scope, confirmed in writing before work begins.'
            : 'อัตราเริ่มต้นโดยประมาณ ค่าบริการจริงขึ้นกับข้อเท็จจริง เอกสาร ชั้นศาล และขอบเขตงาน โดยยืนยันเป็นหนังสือก่อนเริ่มงานทุกครั้ง'}
        </p>
      </Container>
    </section>
  )
}
