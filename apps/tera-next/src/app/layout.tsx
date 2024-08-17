import './tailwind.css';

import { type Metadata, type Viewport } from 'next';
import { Noto_Sans_KR } from 'next/font/google';

const notoSansKr = Noto_Sans_KR({
  adjustFontFallback: false,
  subsets: ['latin'],
  variable: '--font-noto-sans-kr',
});

export const metadata: Metadata = {
  description: 'Welcome to Tera!',
  icons: [
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
    {
      rel: 'icon',
      sizes: '192x192',
      url: '/icon-192x192.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/apple-touch-icon.png',
    },
  ],
  title: 'Tera',
};

export const viewport: Viewport = {
  colorScheme: 'light dark',
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={notoSansKr.variable} lang="ko">
      <body>{children}</body>
    </html>
  );
}
