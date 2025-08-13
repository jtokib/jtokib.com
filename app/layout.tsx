import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Vercel Analytics removed for Cloudflare Workers deployment
// import { Analytics } from '@vercel/analytics/react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://jtokib.com'),
  title: 'Toki Burke | AI-Driven Marketing Technologist',
  description: 'Toki Burke - Marketing Technology Team Lead specializing in AI, cloud platforms, and digital innovation. Expert in Tealium, Google Cloud, Firebase, and Vercel. Pacific Ocean surfer and California native plant enthusiast.',
  keywords: 'Toki Burke, Marketing Technology, AI, Firebase, Google Cloud, Tealium, Sitecore, Vercel, Cloudflare, Surfing, California Native Plants, Ceanothus, obsf.surf, Android Development',
  authors: [{ name: 'Toki Burke' }],
  creator: 'Toki Burke',
  publisher: 'Toki Burke',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jtokib.com',
    title: 'Toki Burke | AI-Driven Marketing Technologist',
    description: 'Marketing Technology Team Lead specializing in AI, cloud platforms, and digital innovation. Expert in Tealium, Google Cloud, Firebase, and Vercel.',
    siteName: 'Toki Burke Portfolio',
    images: [
      {
        url: '/apple-icon-180x180.png',
        width: 180,
        height: 180,
        alt: 'Toki Burke',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toki Burke | AI-Driven Marketing Technologist',
    description: 'Marketing Technology Team Lead specializing in AI, cloud platforms, and digital innovation. Expert in Tealium, Google Cloud, Firebase, and Vercel.',
    images: ['/apple-icon-180x180.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57' },
      { url: '/apple-icon-60x60.png', sizes: '60x60' },
      { url: '/apple-icon-72x72.png', sizes: '72x72' },
      { url: '/apple-icon-76x76.png', sizes: '76x76' },
      { url: '/apple-icon-114x114.png', sizes: '114x114' },
      { url: '/apple-icon-120x120.png', sizes: '120x120' },
      { url: '/apple-icon-144x144.png', sizes: '144x144' },
      { url: '/apple-icon-152x152.png', sizes: '152x152' },
      { url: '/apple-icon-180x180.png', sizes: '180x180' },
    ],
  },
  manifest: '/manifest.json',
  other: {
    'msapplication-TileColor': '#6366f1',
    'msapplication-TileImage': '/ms-icon-144x144.png',
    'theme-color': '#6366f1',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function (w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true; j.src = '//www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
              })(window, document, 'script', 'dataLayer', 'GTM-TM7DV4L');
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
        {/* <Analytics /> - Removed for Cloudflare Workers */}
      </body>
    </html>
  )
}