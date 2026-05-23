/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.pledgemeaning.com' }],
        destination: 'https://pledgemeaning.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
