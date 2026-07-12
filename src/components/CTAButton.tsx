'use client'
import { useState, useEffect, useRef } from 'react'
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator'

interface CTAButtonProps {
  className?: string
  trackingLabel?: string
}

export default function CTAButton({ className = '', trackingLabel }: CTAButtonProps) {
  const [referralUrl, setReferralUrl] = useState(FALLBACK_REFERRAL_URL)
  useEffect(() => { setReferralUrl(getRotatedReferralUrl()) }, [])

  const linkRef = useRef<HTMLAnchorElement>(null)
  const impressionFired = useRef(false)

  useEffect(() => {
    const el = linkRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (impressionFired.current) return
        if (!entries.some((entry) => entry.isIntersecting)) return
        impressionFired.current = true
        observer.disconnect()

        const code = (el.href.split('referral=')[1] ?? '')
        fetch('/api/log', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            label: `impression:${trackingLabel ?? 'unknown'}`,
            referralCode: code,
            page: window.location.pathname,
            site: window.location.hostname,
          }),
        }).catch(() => {})
      },
      { threshold: 0.5 }
    )
    observer.observe(el)

    return () => observer.disconnect()
  }, [trackingLabel])

  const handleClick = () => {
    const code = referralUrl.split('referral=')[1] ?? ''
    fetch('/api/log', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: 'CTAButton',
        referralCode: code,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
  }

  return (
    <a
      ref={linkRef}
      href={referralUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`inline-block bg-amber hover:bg-amber-dark text-midnight font-bold px-6 py-4 rounded-lg text-base md:text-lg transition-colors shadow-lg shadow-amber/20 text-center max-w-full ${className}`}
    >
      Create Your Account — Get 50,000 UEC Free
    </a>
  )
}
