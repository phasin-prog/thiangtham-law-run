'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'

const sessionStorageKey = 'site_analytics_session_id'
const heartbeatIntervalMs = 60_000

type AnalyticsEvent = 'pageview' | 'heartbeat' | 'tel_click' | 'line_click' | 'consult_submit'

function isTrackablePath(pathname: string) {
  return (
    pathname.startsWith('/') &&
    !pathname.startsWith('/admin') &&
    !pathname.startsWith('/api') &&
    !pathname.startsWith('/_next') &&
    !/\.[a-z0-9]{2,8}$/i.test(pathname)
  )
}

function getSessionId() {
  try {
    const existing = window.localStorage.getItem(sessionStorageKey)
    if (existing) return existing

    const sessionId = window.crypto.randomUUID()
    window.localStorage.setItem(sessionStorageKey, sessionId)
    return sessionId
  } catch {
    return null
  }
}

function sendAnalyticsEvent(path: string, event: AnalyticsEvent) {
  const sessionId = getSessionId()
  if (!sessionId) return

  const payload = JSON.stringify({
    event,
    path,
    sessionId,
  })

  if (navigator.sendBeacon) {
    const body = new Blob([payload], { type: 'application/json' })
    if (navigator.sendBeacon('/api/analytics/track', body)) return
  }

  fetch('/api/analytics/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true,
  }).catch(() => {
    // Analytics must never interrupt the public website.
  })
}

/** ส่ง event ประเภท conversion (เช่น ส่งฟอร์มสำเร็จ) ด้วย path ปัจจุบัน */
export function trackConversion(event: Extract<AnalyticsEvent, 'consult_submit'>) {
  try {
    sendAnalyticsEvent(window.location.pathname, event)
  } catch {
    // การวัดผลต้องไม่กระทบผู้ใช้
  }
}

export function AnalyticsTracker() {
  const pathname = usePathname()
  const lastTrackedPath = useRef<string | null>(null)

  // วัดคลิกช่องทางติดต่อ (โทร / LINE) ทุกหน้า — ใช้วัดว่าหน้าไหนขายได้
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest('a[href]')
      if (!(anchor instanceof HTMLAnchorElement)) return
      const href = anchor.getAttribute('href') ?? ''
      if (href.startsWith('tel:')) {
        sendAnalyticsEvent(window.location.pathname, 'tel_click')
      } else if (href.includes('line.me')) {
        sendAnalyticsEvent(window.location.pathname, 'line_click')
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  useEffect(() => {
    if (!pathname || !isTrackablePath(pathname)) return
    if (lastTrackedPath.current === pathname) return

    lastTrackedPath.current = pathname
    sendAnalyticsEvent(pathname, 'pageview')
  }, [pathname])

  useEffect(() => {
    if (!pathname || !isTrackablePath(pathname)) return

    const sendHeartbeat = () => {
      if (document.visibilityState === 'visible') {
        sendAnalyticsEvent(pathname, 'heartbeat')
      }
    }

    const interval = window.setInterval(sendHeartbeat, heartbeatIntervalMs)
    document.addEventListener('visibilitychange', sendHeartbeat)

    return () => {
      window.clearInterval(interval)
      document.removeEventListener('visibilitychange', sendHeartbeat)
    }
  }, [pathname])

  return null
}
