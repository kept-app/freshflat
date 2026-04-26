import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FreshFlat — Deep Cleaning for Hong Kong Flats',
  description: 'Move-out cleaning, Airbnb turnovers, post-renovation deep cleans. Vetted independent cleaners dispatched across Hong Kong. Quoted in 90 seconds.',
  keywords: 'deep cleaning hong kong, move out cleaning hk, airbnb turnover cleaning, post renovation cleaning hong kong',
  openGraph: {
    title: 'FreshFlat — Deep Cleaning, Considered',
    description: 'Vetted independent cleaners for Hong Kong flats. Move-outs, turnovers, post-renovation. Quoted in 90 seconds.',
    type: 'website',
    locale: 'en_HK',
    siteName: 'FreshFlat',
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
