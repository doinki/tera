import '@fontsource-variable/noto-sans-kr';
import './tailwind.css';

import { type HeadersFunction } from '@remix-run/node';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { type ReactNode } from 'react';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ThemeScript } from './components/ThemeSwitch';

export const headers: HeadersFunction = () => ({
  'Cache-Control': 'max-age=300',
});

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta content="light dark" name="color-scheme" />
        <link href="/favicon.ico" rel="icon" />
        <link href="/icon-192x192.png" rel="icon" sizes="192x192" />
        <link
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <title>Tera</title>
        <meta content="Welcome to Tera!" name="description" />
        <Meta />
        <Links />
        <ThemeScript />
      </head>
      <body>
        <Header />
        {children}
        <Footer className="mt-6" />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
