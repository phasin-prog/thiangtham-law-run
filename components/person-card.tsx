'use client'

import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap } from 'lucide-react'
import { cn } from '@/lib/utils'
import { getLocalePath, useTranslation } from '@/lib/i18n'

type Education = {
  degree: string
  degreeEn: string
}

type Person = {
  slug: string
  name: string
  nameEn: string
  role: string
  roleEn: string
  education?: Education[]
  image?: string
}

type PersonCardProps = {
  person: Person
  featured?: boolean
  variant?: 'lawyer' | 'advisor' | 'staff'
  index?: number
}

export function PersonCard({
  person,
  featured = false,
}: PersonCardProps) {
  const { t, locale } = useTranslation()

  const name = t(person.name, person.nameEn)
  const role = t(person.role, person.roleEn)
  const highestEdu = person.education?.[person.education.length - 1]
  const eduText = highestEdu ? t(highestEdu.degree, highestEdu.degreeEn) : null

  return (
    <Link
      href={getLocalePath(`/team/${person.slug}`, locale)}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-500 hover:-translate-y-2 hover:border-gold/50 hover:shadow-2xl hover:shadow-gold/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold',
        featured && 'lg:grid lg:grid-cols-[0.9fr_1.1fr]'
      )}
    >
      {/* Top subtle gold accent line */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-500 group-hover:via-gold/70" />

      <div
        className={cn(
          'relative aspect-[4/5] w-full overflow-hidden bg-secondary',
          featured && 'lg:aspect-auto lg:min-h-[400px]'
        )}
      >
        <Image
          src={person.image || '/person-placeholder.svg'}
          alt={name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className={cn('flex flex-1 flex-col p-6', featured && 'lg:justify-center lg:p-10')}>
        <h3 className={cn('font-serif text-xl font-bold text-primary transition-colors group-hover:text-gold-ink leading-snug', featured && 'lg:text-3xl')}>
          {name}
        </h3>
        <div className="mt-2 inline-flex w-fit items-center rounded-md bg-gold/10 px-2.5 py-1 text-xs font-bold text-gold-ink tracking-wide">
          {role}
        </div>

        {eduText && (
          <div className="mt-5 flex items-start gap-2.5 border-t border-border/70 pt-5">
            <GraduationCap className="mt-0.5 size-4 shrink-0 text-gold-ink" aria-hidden="true" />
            <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
              {eduText}
            </p>
          </div>
        )}

        <div className="mt-auto pt-6 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-primary transition-colors group-hover:text-gold-ink">
          <span>{t('ดูบทบาทและประวัติ', 'View role and profile')}</span>
          <div className="h-px w-6 bg-gold transition-all duration-500 group-hover:w-12" />
        </div>
      </div>
    </Link>
  )
}

