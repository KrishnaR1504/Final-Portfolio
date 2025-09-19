import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Krishna Raman',
  description: 'Computer Science and AI undergraduate student at Loughborough University, Software Engineering Industrial Placement at HubSpot, and passionate about building innovative tech solutions.',
  keywords: ['Software Engineer', 'AI', 'Machine Learning', 'React', 'Full Stack', 'HubSpot', 'Portfolio', 'Computer Science'],
  authors: [{ name: 'Krishna Venkata Raman' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'Krishna Raman',
    description: 'Computer Science and AI undergraduate student at Loughborough University, Software Engineering Industrial Placement at HubSpot, and passionate about building innovative tech solutions.',
    type: 'website',
    locale: 'en_GB',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Krishna Raman',
    description: 'Computer Science and AI undergraduate student at Loughborough University, Software Engineering Industrial Placement at HubSpot, and passionate about building innovative tech solutions.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-JJ65ZPP89Q`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JJ65ZPP89Q');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <CustomCursor />
        <div className="min-h-screen bg-dark-900">
          {children}
        </div>
      </body>
    </html>
  )
} 