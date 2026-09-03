'use client'

import { useState } from 'react'
import { Check, Globe, Link2, Send, Share2 } from 'lucide-react'
import { useTranslation } from '@/lib/i18n'

/**
 * ปุ่มแชร์บทความ/ฎีกา — LINE, Facebook, X, คัดลอกลิงก์, แชร์ผ่านเครื่อง
 * ช่วยให้ลูกความส่งต่อความรู้ให้คนอื่น = คนรู้จักสำนักงานเพิ่ม
 */
export function ShareButtons({ title, url }: { title: string; url: string }) {
  const { t } = useTranslation()
  const [copied, setCopied] = useState(false)

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url)
    } catch {
      const input = document.createElement('input')
      input.value = url
      document.body.appendChild(input)
      input.select()
      document.execCommand('copy')
      document.body.removeChild(input)
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2000)
  }

  async function nativeShare() {
    try {
      if (navigator.share) await navigator.share({ title, url })
      else await copyLink()
    } catch {
      // ผู้ใช้กดยกเลิก — ไม่ต้องทำอะไร
    }
  }

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)
  const buttons = [
    {
      label: 'LINE',
      href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
      icon: Send,
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Globe,
    },
    {
      label: 'X',
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      icon: Share2,
    },
  ]

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-sm font-bold text-primary">
        {t('แชร์ให้คนอื่นอ่าน', 'Share this article')}
      </span>
      {buttons.map((button) => (
        <a
          key={button.label}
          href={button.href}
          target="_blank"
          rel="noreferrer"
          aria-label={`${t('แชร์ทาง', 'Share via')} ${button.label}`}
          className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-primary transition hover:border-gold/50 hover:text-gold-ink"
        >
          <button.icon className="size-4 text-gold" aria-hidden="true" />
          {button.label}
        </a>
      ))}
      <button
        type="button"
        onClick={copyLink}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-primary transition hover:border-gold/50 hover:text-gold-ink"
      >
        {copied ? (
          <Check className="size-4 text-green-600" aria-hidden="true" />
        ) : (
          <Link2 className="size-4 text-gold" aria-hidden="true" />
        )}
        {copied ? t('คัดลอกแล้ว', 'Copied!') : t('คัดลอกลิงก์', 'Copy link')}
      </button>
      <button
        type="button"
        onClick={nativeShare}
        className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold text-primary transition hover:border-gold/50 hover:text-gold-ink"
      >
        <Share2 className="size-4 text-gold" aria-hidden="true" />
        {t('แชร์', 'Share')}
      </button>
    </div>
  )
}
