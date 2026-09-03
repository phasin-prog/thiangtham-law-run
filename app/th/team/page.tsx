import type { Metadata } from 'next'
import { TeamPage } from '@/features/team'
import { groupTeamMembersWithSupabase } from '@/lib/data/team-members-supabase'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'ทีมทนายความ ที่ปรึกษา และฝ่ายประสานงานคดี',
  description:
    'ทีมทนายความ ที่ปรึกษา และฝ่ายประสานงานคดีของสำนักกฎหมายเที่ยงธรรมทนายความ ทำงานร่วมกันในการตรวจข้อเท็จจริง วิเคราะห์เอกสาร วางแนวทางคดี และดูแลการประสานงานกับลูกความอย่างเป็นระบบ ภายใต้การนำของทนายความประสบการณ์กว่า 19 ปี',
  alternates: {
    canonical: 'https://www.thiangthamlaw.com/th/team',
    languages: {
      th: 'https://www.thiangthamlaw.com/th/team',
      en: 'https://www.thiangthamlaw.com/en/team',
    },
  },
}

export default async function TeamRoutePage() {
  const groups = await groupTeamMembersWithSupabase()

  return <TeamPage groups={groups} />
}
