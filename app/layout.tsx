import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AnimationProvider from '@/components/AnimationProvider'

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'ECO Integrated Technologies — Sustainable Innovations Powering Change',
    template: '%s | ECO Integrated Technologies',
  },
  description:
    'ECO Integrated Technologies delivers chemical-free, sustainable cleantech solutions for water recovery and waste-to-energy. Serving commercial, industrial, and oil & gas sectors.',
  metadataBase: new URL('https://www.ecoiti.com'),
  openGraph: {
    type: 'website',
    siteName: 'ECO Integrated Technologies',
    locale: 'en_US',
    images: [{ url: '/images/og-default.jpg', width: 1200, height: 630, alt: 'ECO Integrated Technologies' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body>
        <Navbar />
        <AnimationProvider />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
