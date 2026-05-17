'use client'
import { useState, useEffect } from 'react'
import { getRotatedReferralUrl, FALLBACK_REFERRAL_URL } from '@/lib/referral-rotator'

interface CTAButtonProps {
  className?: string
}

export default function CTAButton({ className = '' }: CTAButtonProps) {
  const [referralUrl, setReferralUrl] = useState(FALLBACK_REFERRAL_URL)
  useEffect(() => { setReferralUrl(getRotatedReferralUrl()) }, [])

  const handleClick = () => {
    const code = referralUrl.split('referral=')[1] ?? ''
    fetch('/api/track-click', {
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
      href={referralUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`inline-block bg-amber hover:bg-amber-dark text-midnight font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg shadow-amber/20 ${className}`}
    >
      Create Your Account — Get 50,000 UEC Free
    </a>
  )
}
