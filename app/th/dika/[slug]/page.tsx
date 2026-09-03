import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Gavel, Scale } from 'lucide-react'
import { Container } from '@/components/container'
import { CTASection } from '@/components/cta-section'
import { PageHero } from '@/components/page-hero'
import { dikaKnowledge, getDikaEntry, getRelatedDika, dikaCategoryLabel } from '@/lib/data/dika-knowledge'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return dikaKnowledge.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const entry = getDikaEntry(slug)
  if (!entry) return { title: 'ไม่พบข้อมูล', robots: { index: false, follow: true } }
  const title = `${entry.question}${entry.dika ? ` (${entry.dika})` : ''}`
  const description = `${entry.principle} ${entry.answer[0]}`
  const url = `https://www.thiangthamlaw.com/th/dika/${entry.slug}`
  return {
    title: `${title} | ฎีกาและกฎหมายน่ารู้`,
    description: `${description.slice(0, 150)} ปรึกษาทนาย โทร 082-377-2404`,
    keywords: [
      entry.question,
      dikaCategoryLabel(entry.category),
      'คำพิพากษาศาลฎีกา',
      'ฎีกา',
      'กฎหมายน่ารู้',
      'ปรึกษาทนาย',
      'หาทนาย',
      ...entry.statutes,
    ],
    authors: [{ name: 'สำนักกฎหมายเที่ยงธรรมทนายความ' }],
    alternates: { canonical: url },
    openGraph: {
      title,
      description: entry.principle,
      url,
      siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
      locale: 'th_TH',
      type: 'article',
      images: [{ url: '/law-office-hero.png', width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description: entry.principle, images: ['/law-office-hero.png'] },
  }
}

export default async function DikaDetailPage({ params }: Props) {
  const { slug } = await params
  const entry = getDikaEntry(slug)
  if (!entry) notFound()
  const related = getRelatedDika(entry)
  const url = `https://www.thiangthamlaw.com/th/dika/${entry.slug}`

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.question,
    description: entry.principle,
    inLanguage: 'th-TH',
    author: { '@type': 'Organization', name: 'สำนักกฎหมายเที่ยงธรรมทนายความ', url: 'https://www.thiangthamlaw.com/th' },
    publisher: { '@type': 'Organization', name: 'สำนักกฎหมายเที่ยงธรรมทนายความ', url: 'https://www.thiangthamlaw.com/th' },
    mainEntityOfPage: url,
    about: dikaCategoryLabel(entry.category),
  }
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: entry.question,
        acceptedAnswer: { '@type': 'Answer', text: entry.answer.join(' ') },
      },
    ],
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.thiangthamlaw.com/th' },
      { '@type': 'ListItem', position: 2, name: 'ฎีกาและแนวคำพิพากษา', item: 'https://www.thiangthamlaw.com/th/dika' },
      { '@type': 'ListItem', position: 3, name: entry.question, item: url },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title={entry.question}
        description={`${dikaCategoryLabel(entry.category)} · ความรู้กฎหมายข้อที่ ${entry.no}/100`}
        crumbs={[
          { href: '/', label: 'หน้าแรก' },
          { href: '/dika', label: 'ฎีกา' },
          { label: `ข้อที่ ${entry.no}` },
        ]}
      />
      <article className="py-14 md:py-20">
        <Container className="max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary px-4 py-1 text-xs font-bold text-white">
              {dikaCategoryLabel(entry.category)}
            </span>
            {entry.dika && (
              <span className="rounded-full bg-gold/15 px-4 py-1 text-xs font-bold text-gold-ink">
                <Gavel className="mr-1 inline size-3" aria-hidden="true" />
                {entry.dika}
              </span>
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-gold/40 bg-secondary/70 p-6 md:p-8">
            <h2 className="font-serif text-xl font-bold text-primary">หลักกฎหมายสั้น ๆ</h2>
            <p className="mt-3 leading-8 text-muted-foreground">{entry.principle}</p>
          </div>

          <div className="mt-10 space-y-6">
            {entry.answer.map((paragraph, index) => (
              <p key={index} className="text-lg leading-9 text-muted-foreground">{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-primary">
                <Scale className="size-5 text-gold" aria-hidden="true" />
                บทกฎหมายที่เกี่ยวข้อง
              </h2>
              <ul className="mt-4 space-y-2">
                {entry.statutes.map((statute) => (
                  <li key={statute} className="flex items-start gap-2 text-sm leading-7 text-muted-foreground">
                    <span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold" />
                    {statute}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-primary">
                <Gavel className="size-5 text-gold" aria-hidden="true" />
                คำพิพากษาที่อ้างอิง
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {entry.dika ?? 'ข้อนี้อธิบายตามตัวบทกฎหมายและหลักทั่วไป ควรให้ทนายตรวจข้อเท็จจริงเป็นรายกรณี'}
              </p>
              <Link
                href={`/th/services/${entry.serviceSlug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-gold-ink"
              >
                ดูบริการที่เกี่ยวข้อง
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-gold/35 bg-secondary/70 p-6 text-sm leading-7 text-muted-foreground">
            บทความนี้สรุปหลักกฎหมายทั่วไปประกอบแนวคำพิพากษาศาลฎีกา ไม่ใช่คำปรึกษาเฉพาะกรณี
            ผลคดีจริงขึ้นกับข้อเท็จจริง พยานหลักฐาน และกฎหมายที่ใช้บังคับในขณะนั้น ควรปรึกษาทนายก่อนดำเนินการ
          </div>
          <Link href="/th/dika" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="size-4" /> กลับไปหน้าฎีกาทั้งหมด
          </Link>
        </Container>
      </article>
      <section className="bg-secondary/60 py-14">
        <Container>
          <h2 className="font-serif text-2xl font-bold text-primary">ข้อกฎหมายอื่นที่เกี่ยวข้อง</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/th/dika/${item.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:border-gold/40"
              >
                <p className="text-xs font-bold text-gold-ink">{dikaCategoryLabel(item.category)} · ข้อที่ {item.no}</p>
                <h3 className="mt-3 font-serif text-lg font-bold leading-8 text-primary group-hover:text-gold-ink">
                  {item.question}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-7 text-muted-foreground">{item.principle}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
      <CTASection title="เรื่องของคุณเข้าข่ายข้อไหน? ให้ทีมทนายช่วยประเมิน" />
    </main>
  )
}
