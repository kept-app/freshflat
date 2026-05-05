import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreshFlat — AC Service for Hong Kong Flats',
  description: 'AC cleaning, repair, and installation across Hong Kong Island and Lamma. Same-day service, including Sundays. Transparent flat pricing. No surprise fees.',
  keywords: 'ac cleaning hong kong, ac repair hk, aircon service hong kong, split system cleaning',
  openGraph: {
    title: 'FreshFlat — AC Service for Hong Kong Flats',
    description: 'Same-day AC service across Hong Kong. Transparent pricing. English-speaking team.',
    type: 'website',
    locale: 'en_HK',
    siteName: 'FreshFlat',
  },
  twitter: {
    title: 'FreshFlat — AC Service for Hong Kong Flats',
    description: 'Same-day AC service across Hong Kong. Transparent pricing. English-speaking team.',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-cream text-graphite antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
