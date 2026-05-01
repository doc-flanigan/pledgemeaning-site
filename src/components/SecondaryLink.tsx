interface SecondaryLinkProps {
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SecondaryLink({
  href = "https://dayonecitizen.com",
  children,
  className = "",
}: SecondaryLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block border border-amber/40 text-amber hover:bg-amber/10 px-6 py-3 rounded-lg transition-colors ${className}`}
    >
      {children}
    </a>
  );
}
