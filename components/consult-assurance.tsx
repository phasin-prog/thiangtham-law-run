import { BadgeCheck, MapPin, ShieldCheck, Users } from 'lucide-react'
import { Container } from '@/components/container'
import { SectionHeading } from '@/components/section-heading'

/**
 * แถบจุดยืนสำนักงาน: ปรึกษาเบื้องต้นฟรี + ประสบการณ์ 19+ ปี + ทีม 9 ทนาย
 * (ไม่มีตารางราคา — ค่าบริการแจ้งเป็นรายคดีก่อนเริ่มงาน)
 */
export function ConsultAssurance({ locale = 'th' }: { locale?: 'th' | 'en' }) {
  const isEnglish = locale === 'en'
  const points = isEnglish
    ? [
        { icon: BadgeCheck, title: 'Free initial assessment', description: 'Tell your story, send documents, and get a preliminary evaluation at no charge.' },
        { icon: ShieldCheck, title: '19+ years of experience', description: 'Established in 2007, led by a lawyer with over 19 years of practice.' },
        { icon: Users, title: '9 litigation lawyers', description: 'A team covering almost every type of court case, civil and criminal.' },
        { icon: MapPin, title: 'Nationwide representation', description: 'Online consultation and court representation across Thailand.' },
      ]
    : [
        { icon: BadgeCheck, title: 'ปรึกษาเบื้องต้นฟรี', description: 'เล่าเรื่อง ส่งเอกสาร รับการประเมินแนวทางเบื้องต้น ไม่เสียค่าใช้จ่าย' },
        { icon: ShieldCheck, title: 'ประสบการณ์กว่า 19 ปี', description: 'ก่อตั้ง พ.ศ. 2550 นำโดยทนายความประสบการณ์กว่า 19 ปี' },
        { icon: Users, title: 'ทีมทนาย 9 คน', description: 'เชี่ยวชาญงานอรรถคดีแทบทุกประเภทคดี ทั้งแพ่งและอาญา' },
        { icon: MapPin, title: 'รับว่าความทั่วราชอาณาจักร', description: 'ปรึกษาออนไลน์ นัดหมาย และว่าความทั่วประเทศ' },
      ]
  return (
    <section className="py-14 md:py-20">
      <Container className="max-w-5xl">
        <SectionHeading
          align="center"
          eyebrow={isEnglish ? 'Why Us' : 'จุดยืนสำนักงาน'}
          title={isEnglish ? 'Free First Advice From 19+ Years of Practice' : 'ปรึกษาฟรีก่อน ด้วยประสบการณ์กว่า 19 ปี'}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((point) => (
            <div key={point.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <point.icon className="size-6 text-gold" aria-hidden="true" />
              <h3 className="mt-3 font-serif text-lg font-bold text-primary">{point.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
