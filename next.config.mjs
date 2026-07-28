/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    // SUNSET 2026-07-27: site retired per the 2026-07-28 kill review
    // (docs/seo/kill-review-2026-07-28.md — 0 Google clicks, 0 real referral
    // clicks, 0 AI-bot fetches in 7d, position worsening). The whole domain
    // now 301s to the hub's glossary, which carries the Pledge definition.
    return [
      {
        source: '/:path*',
        destination: 'https://dayonecitizen.com/glossary#letter-P',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
