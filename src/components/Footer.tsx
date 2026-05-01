import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-midnight-mid border-t border-amber/20 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="text-amber font-bold mb-3">pledgemeaning.com</p>
            <p className="text-muted text-sm leading-relaxed">
              Your guide to Star Citizen terminology. Part of the Day One Citizen fan network.
            </p>
          </div>

          <div>
            <p className="text-cream font-semibold mb-3 text-sm uppercase tracking-wider">Related Terms</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/what-is-uec" className="text-muted hover:text-amber transition-colors">
                  What is UEC?
                </Link>
              </li>
              <li>
                <Link href="/what-is-lti" className="text-muted hover:text-amber transition-colors">
                  What is LTI?
                </Link>
              </li>
              <li>
                <Link href="/what-is-ccu" className="text-muted hover:text-amber transition-colors">
                  What is a CCU?
                </Link>
              </li>
              <li>
                <a
                  href="https://dayonecitizen.com/glossary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-amber transition-colors"
                >
                  Full SC Glossary →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-cream font-semibold mb-3 text-sm uppercase tracking-wider">Network</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://dayonecitizen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-amber transition-colors"
                >
                  Day One Citizen Hub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-amber/10 pt-8 space-y-4">
          <p className="text-muted text-xs leading-relaxed">
            <strong className="text-cream">Fan Disclaimer:</strong> pledgemeaning.com is an
            unofficial fan site and is not affiliated with, endorsed by, or connected to Cloud
            Imperium Games Corporation or Roberts Space Industries Corp. Star Citizen® is a
            registered trademark of Cloud Imperium Games Corporation. All game assets and
            trademarks are property of their respective owners.
          </p>

          <p className="text-muted text-xs leading-relaxed">
            <strong className="text-cream">FTC Disclosure:</strong> This site contains referral
            links. If you create an account using our referral code (STAR-GCQJ-N6NC), both you
            and the referrer receive in-game UEC bonuses at no additional cost to you. We may
            receive compensation for referrals.
          </p>

          <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
            <p className="text-muted text-xs">
              © {new Date().getFullYear()} pledgemeaning.com — Made by the community, for the community.
            </p>
            <a
              href="https://dayonecitizen.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/made-by-community.png"
                alt="Made by community badge"
                width={120}
                height={40}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
