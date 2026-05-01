import Link from "next/link";

const ENLIST_URL =
  "https://www.robertsspaceindustries.com/enlist?referral=STAR-GCQJ-N6NC";

interface CTAButtonProps {
  className?: string;
}

export default function CTAButton({ className = "" }: CTAButtonProps) {
  return (
    <Link
      href={ENLIST_URL}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className={`inline-block bg-amber hover:bg-amber-dark text-midnight font-bold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg shadow-amber/20 ${className}`}
    >
      Create Your Account — Get 50,000 UEC Free
    </Link>
  );
}
