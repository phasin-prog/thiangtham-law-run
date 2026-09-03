export type LeadNotification = {
  name: string
  phone: string
  message: string
  service: string
  locale: string
  sourcePath: string
  /** บันทึกลง DB สำเร็จ หรือเก็บสำรองไว้ใน log */
  saved: 'db' | 'log'
}

const serviceLabels: Record<string, string> = {
  civil: 'คดีแพ่งและพาณิชย์',
  criminal: 'คดีอาญา',
  family: 'คดีครอบครัว',
  inheritance: 'คดีมรดก',
  contract: 'สัญญาและธุรกิจ',
  land: 'คดีที่ดิน',
  other: 'เรื่องอื่น ๆ',
}

/**
 * แจ้งเตือนลูกความใหม่ผ่าน LINE Messaging API แบบ push หาผู้ดูแล
 * - ต้องตั้งค่า LINE_CHANNEL_ACCESS_TOKEN และ LINE_LEAD_NOTIFY_USER_ID ก่อนจึงจะส่ง
 * - ห้าม throw เด็ดขาด เพื่อไม่ให้กระทบการรับเรื่องของลูกความ
 */
export async function notifyNewLead(lead: LeadNotification): Promise<void> {
  const token = process.env.LINE_CHANNEL_ACCESS_TOKEN
  const to = process.env.LINE_LEAD_NOTIFY_USER_ID
  if (!token || !to) return

  const serviceLabel = serviceLabels[lead.service] ?? lead.service
  const brief = lead.message.length > 200 ? `${lead.message.slice(0, 200)}…` : lead.message
  const text = [
    '📩 ลูกความใหม่จากเว็บไซต์',
    `ชื่อ: ${lead.name}`,
    `โทร: ${lead.phone}`,
    `เรื่อง: ${serviceLabel}`,
    `ภาษา: ${lead.locale} | หน้า: ${lead.sourcePath}`,
    `รายละเอียด: ${brief}`,
    `บันทึก: ${lead.saved === 'db' ? 'ฐานข้อมูล' : 'สำรอง (ตรวจ log ด่วน)'}`,
  ].join('\n')

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 5000)
  try {
    await fetch('https://api.line.me/v2/bot/message/push', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ to, messages: [{ type: 'text', text }] }),
      signal: controller.signal,
    })
  } catch {
    // การแจ้งเตือนล้มเหลวต้องไม่กระทบลูกความ — เรื่องถูกบันทึกไว้แล้ว
  } finally {
    clearTimeout(timer)
  }
}
