'use client'

import { Star } from 'lucide-react'
import { officeContact } from '@/lib/data/office'
import { useTranslation } from '@/lib/i18n'

/**
 * การ์ดเชิญรีวิว Google — ไม่แสดงคะแนนสมมติ
 * เชื่อมกับ Google Business Profile ผ่าน mapUrl จริงของสำนักงาน
 */
export function ReviewsCard() {
  const { t } = useTranslation()
  return (
    <div className="rounded-[2.5rem] border border-gold/25 bg-white p-10 shadow-sm">
      <div className="flex items-center gap-4">
        <div className="flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold-ink">
          <Star className="size-6" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-primary">
          {t('รีวิวจากลูกความ', 'Client Reviews')}
        </h3>
      </div>
      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        {t(
          'ความเห็นของท่านช่วยให้ลูกความท่านอื่นตัดสินใจได้ง่ายขึ้น อ่านรีวิวจริงบน Google หรือร่วมเขียนรีวิวประสบการณ์ของท่านได้ที่นี่',
          'Your feedback helps future clients choose with confidence. Read genuine Google reviews or share your own experience here.',
        )}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={officeContact.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white transition hover:bg-primary-dark"
        >
          {t('อ่านรีวิวบน Google', 'Read Google Reviews')}
        </a>
        <a
          href={officeContact.mapUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-xl border border-gold/50 px-6 py-3 text-sm font-bold text-gold-ink transition hover:bg-gold/10"
        >
          {t('เขียนรีวิว', 'Write a Review')}
        </a>
      </div>
    </div>
  )
}
