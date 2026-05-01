"use client";

import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-midnight-mid border-b border-amber/20 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-amber font-bold text-lg tracking-wide">
          pledgemeaning.com
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/what-is-uec" className="text-muted hover:text-cream transition-colors">
            UEC
          </Link>
          <Link href="/what-is-lti" className="text-muted hover:text-cream transition-colors">
            LTI
          </Link>
          <Link href="/what-is-ccu" className="text-muted hover:text-cream transition-colors">
            CCU
          </Link>
          <a
            href="https://dayonecitizen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber hover:text-amber-dark transition-colors font-medium"
          >
            Hub →
          </a>
        </div>
      </div>
    </nav>
  );
}
