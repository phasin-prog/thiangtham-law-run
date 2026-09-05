import { ExternalLink, Landmark } from 'lucide-react'

const courtsTh = [
  { name: 'ศาลจังหวัดอุบลราชธานี', href: 'https://ubtc.coj.go.th/' },
  { name: 'ศาลแขวงอุบลราชธานี', href: 'https://ubtmc.coj.go.th/' },
  { name: 'ศาลจังหวัดเดชอุดม', href: 'https://dudc.coj.go.th/' },
  { name: 'สำนักงานบังคับคดีจังหวัดอุบลราชธานี', href: 'https://www.led.go.th/' },
]

const courtsEn = [
  { name: 'Ubon Ratchathani Provincial Court', href: 'https://ubtc.coj.go.th/' },
  { name: 'Ubon Ratchathani Kwaeng Court', href: 'https://ubtmc.coj.go.th/' },
  { name: 'Det Udom Provincial Court', href: 'https://dudc.coj.go.th/' },
  { name: 'Ubon Ratchathani Legal Execution Office', href: 'https://www.led.go.th/' },
]

/**
 * กล่องลิงก์หน่วยงานยุติธรรมที่เกี่ยวข้องกับคดีในอุบลราชธานี
 * เสริม topical trust + ประโยชน์ผู้ใช้ (ตรวจหมายศาล/นัดพิจารณา)
 */
export function CourtLinks({
  locale = 'th',
  district,
  court,
}: {
  locale?: 'th' | 'en'
  district?: string
  court?: string
}) {
  const isEnglish = locale === 'en'
  const courts = isEnglish ? courtsEn : courtsTh
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      {district && court && (
        <div className="mb-5 rounded-xl border border-gold/40 bg-gold/10 p-4">
          <p className="text-sm font-bold text-primary">
            {isEnglish ? `Cases in ${district}` : `คดีของอำเภอ${district}`}
          </p>
          <p className="mt-1 text-sm leading-7 text-muted-foreground">
            {isEnglish
              ? `Filed at ${court} under its jurisdiction. Our team verifies the competent court before every filing.`
              : `ยื่นฟ้องที่${court}ตามเขตอำนาจ ทีมงานตรวจเขตศาลให้ก่อนยื่นทุกคดี`}
          </p>
        </div>
      )}
      <h2 className="flex items-center gap-2 font-serif text-xl font-bold text-primary">
        <Landmark className="size-5 shrink-0 text-gold" aria-hidden="true" />
        {isEnglish ? 'Relevant Courts & Offices' : 'ศาลและหน่วยงานที่เกี่ยวข้อง'}
      </h2>
      <p className="mt-2 text-sm leading-7 text-muted-foreground">
        {isEnglish
          ? 'Official channels for checking summons, hearing schedules, and enforcement matters in Ubon Ratchathani.'
          : 'ช่องทางราชการสำหรับตรวจหมายศาล นัดพิจารณา และเรื่องบังคับคดีในจังหวัดอุบลราชธานี'}
      </p>
      <ul className="mt-4 space-y-2">
        {courts.map((court) => (
          <li key={court.href}>
            <a
              href={court.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-gold-ink"
            >
              <ExternalLink className="size-4 shrink-0 text-gold" aria-hidden="true" />
              {court.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
