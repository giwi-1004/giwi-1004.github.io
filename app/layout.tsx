import type { Metadata, Viewport } from 'next'
import { Noto_Serif_KR } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '@fontsource/noto-sans-kr/300.css'
import '@fontsource/noto-sans-kr/400.css'
import '@fontsource/noto-sans-kr/500.css'
import '@fontsource/noto-sans-kr/700.css'
import './globals.css'

const notoSerif = Noto_Serif_KR({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '소비자선임권 안내 | 실손보험 손해사정',
  description: '보험금 청구 후 3영업일 이내 소비자선임권을 사용하여 객관적인 손해사정을 받으세요. 신체손해사정사가 직접 상담해드립니다.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${notoSerif.variable} bg-background`}>
      <body className="antialiased" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
