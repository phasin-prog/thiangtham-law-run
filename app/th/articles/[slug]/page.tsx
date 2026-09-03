import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { ArticleCard } from '@/components/article-card'
import { Container } from '@/components/container'
import { CTASection } from '@/components/cta-section'
import { PageHero } from '@/components/page-hero'
import { ShareButtons } from '@/components/share-buttons'
import { getLegalArticle, legalArticles } from '@/lib/data/articles'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return legalArticles.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getLegalArticle(slug)
  if (!article) return { title: 'ไม่พบบทความ', robots: { index: false, follow: true } }
  const title = `${article.title} | ปรึกษาทนาย สำนักกฎหมายเที่ยงธรรม`
  const url = `https://www.thiangthamlaw.com/th/articles/${slug}`
  return {
    title,
    description: `${article.excerpt} อ่านคู่มือเตรียมเอกสาร ขั้นตอน และแนวทางปรึกษาทนาย โทร 082-377-2404`,
    keywords: [article.title, article.category, 'ปรึกษาทนาย', 'หาทนาย', 'จ้างทนาย', 'สำนักกฎหมายเที่ยงธรรมทนายความ'],
    authors: [{ name: article.author }],
    alternates: {
      canonical: url,
      languages: { 'th-TH': url, 'x-default': url },
    },
    openGraph: {
      title,
      description: article.excerpt,
      url,
      siteName: 'สำนักกฎหมายเที่ยงธรรมทนายความ',
      locale: 'th_TH',
      type: 'article',
      images: [{ url: '/law-office-hero.png', width: 1200, height: 630, alt: article.title }],
    },
    twitter: { card: 'summary_large_image', title, description: article.excerpt, images: ['/law-office-hero.png'] },
  }
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params
  const article = getLegalArticle(slug)
  if (!article) notFound()
  const related = legalArticles.filter((item) => item.slug !== article.slug).slice(0, 3)

  const url = `https://www.thiangthamlaw.com/th/articles/${article.slug}`
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.excerpt,
    inLanguage: 'th-TH',
    author: { '@type': 'Organization', name: 'สำนักกฎหมายเที่ยงธรรมทนายความ', url: 'https://www.thiangthamlaw.com/th' },
    publisher: { '@type': 'Organization', name: 'สำนักกฎหมายเที่ยงธรรมทนายความ', url: 'https://www.thiangthamlaw.com/th' },
    mainEntityOfPage: url,
    about: article.category,
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'หน้าแรก', item: 'https://www.thiangthamlaw.com/th' },
      { '@type': 'ListItem', position: 2, name: 'บทความ', item: 'https://www.thiangthamlaw.com/th/articles' },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <PageHero
        title={article.title}
        description={`${article.category} · ${article.date} · ${article.author} · ${article.readTime}`}
        crumbs={[
          { href: '/', label: 'หน้าแรก' },
          { href: '/articles', label: 'บทความ' },
          { label: article.title },
        ]}
      />
      <article className="py-14 md:py-20">
        <Container className="max-w-4xl">
          <p className="text-lg leading-8 text-muted-foreground">{article.excerpt}</p>
          <div className="mt-10 space-y-10">
            {article.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="font-serif text-2xl font-bold text-primary">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 leading-8 text-muted-foreground">{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="mt-5 space-y-3">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3 leading-7 text-muted-foreground">
                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-gold" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-gold/35 bg-secondary/70 p-6 text-sm leading-7 text-muted-foreground">
            บทความนี้เป็นข้อมูลทั่วไป ไม่ใช่คำปรึกษาทางกฎหมายเฉพาะกรณี
            ข้อเท็จจริง เอกสาร และกำหนดเวลาของแต่ละเรื่องอาจทำให้แนวทางแตกต่างกัน
          </div>
          <div className="mt-8">
            <ShareButtons title={article.title} url={`https://www.thiangthamlaw.com/th/articles/${article.slug}`} />
          </div>
          <Link href="/th/articles" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            <ArrowLeft className="size-4" /> กลับไปหน้าบทความ
          </Link>
        </Container>
      </article>
      <section className="bg-secondary/60 py-14">
        <Container>
          <h2 className="font-serif text-2xl font-bold text-primary">บทความที่เกี่ยวข้อง</h2>
          <div className="mt-7 grid gap-5 md:grid-cols-3">
            {related.map((item) => <ArticleCard key={item.slug} article={item} />)}
          </div>
        </Container>
      </section>
      <CTASection />
    </main>
  )
}
