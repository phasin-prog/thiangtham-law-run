'use client'

import Link from 'next/link'
import {
  FileText,
  MessageCircle,
  Phone,
  ShieldAlert,
} from 'lucide-react'
import { officeContact } from '@/lib/data/office'
import { getLocalePath, useTranslation } from '@/lib/i18n'

export function FloatingContactButton() {
  const { t, locale } = useTranslation()

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-50 border-t border-gold/40 bg-primary-dark/95 backdrop-blur-md px-3 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] text-primary-foreground shadow-[0_-10px_30px_rgba(0,0,0,0.35)] lg:hidden"
      aria-label={t('ติดต่อด่วนบนมือถือ', 'Mobile Quick Contact')}
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-2">
        {/* 1. โทรด่วน One-Tap Direct Call */}
        <a
          href={`tel:${officeContact.phones[0].replace(/-/g, '')}`}
          className="flex-1 flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-gold px-3 py-2 text-xs font-bold text-primary-dark shadow-md shadow-gold/20 transition-transform active:scale-95"
          aria-label={t('โทรหาทนายด่วน', 'Call Lawyer Immediately')}
        >
          <Phone className="size-4 shrink-0 text-primary-dark fill-primary-dark animate-pulse" aria-hidden="true" />
          <span className="truncate">{t('โทรหาทนายด่วน', 'Call Lawyer')}</span>
        </a>

        {/* 2. LINE Chat */}
        <a
          href={officeContact.lineUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-gold/40 bg-white/10 px-3 py-2 text-xs font-bold text-white transition-transform active:scale-95 hover:bg-white/15"
          aria-label={t('แอดไลน์ปรึกษา', 'Chat on LINE')}
        >
          <MessageCircle className="size-4 shrink-0 text-gold fill-gold/20" aria-hidden="true" />
          <span className="truncate">{t('แอดไลน์ปรึกษา', 'LINE Chat')}</span>
        </a>

        {/* 3. ฟอร์มขอคำปรึกษา */}
        <Link
          href={getLocalePath('/consultation', locale)}
          className="flex min-h-[48px] items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-primary-foreground/90 transition-transform active:scale-95 hover:text-gold"
          aria-label={t('ส่งเรื่องปรึกษา', 'Send Inquiry')}
        >
          <FileText className="size-4 shrink-0 text-gold-soft" aria-hidden="true" />
          <span className="truncate">{t('ส่งเรื่อง', 'Inquiry')}</span>
        </Link>
      </div>
    </nav>
  )
}

