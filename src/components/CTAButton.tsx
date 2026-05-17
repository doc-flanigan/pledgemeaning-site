'use client'

const ENLIST_URL =
  'https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC'
const REFERRAL_CODE = 'STAR-GCQJ-N6NC'

interface CTAButtonProps {
  className?: string
}

export default function CTAButton({ className = '' }: CTAButtonProps) {
  const handleClick = () => {
    fetch('/api/track-click', {
      method: 'POST',
      keepalive: true,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        label: 'CTAButton',
        referralCode: REFERRAL_CODE,
        page: window.location.pathname,
        site: window.location.hostname,
      }),
    }).catch(() => {})
  }

  return (
    <a
      href={ENLIST_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onClick={handleClick}
      className={`inline-block bg-amber hover:bg-amber-dark text-midnight font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg shadow-amber/20 ${className}`}
    >
      Create Your Account — Get 50,000 UEC Free
    </a>
  )
}
