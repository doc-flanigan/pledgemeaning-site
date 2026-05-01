import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const BASE_URL = "https://pledgemeaning.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "What Does Pledge Mean in Star Citizen? | pledgemeaning.com",
    template: "%s | pledgemeaning.com",
  },
  description:
    "In Star Citizen, a 'pledge' is a purchase from the RSI store that funds game development. Here's everything you need to know.",
  openGraph: {
    type: "website",
    siteName: "pledgemeaning.com",
    locale: "en_US",
    url: BASE_URL,
    title: "What Does Pledge Mean in Star Citizen?",
    description:
      "In Star Citizen, a 'pledge' is a purchase from the RSI store that funds game development. Here's everything you need to know.",
  },
  twitter: {
    card: "summary_large_image",
    title: "What Does Pledge Mean in Star Citizen?",
    description:
      "In Star Citizen, a 'pledge' is a purchase from the RSI store that funds game development. Here's everything you need to know.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-midnight text-cream`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
