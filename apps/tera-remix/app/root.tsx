import '@fontsource-variable/noto-sans-kr';
import './tailwind.css';

import { type HeadersFunction } from '@remix-run/node';
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react';
import { Footer, Header, ThemeScript } from '@tera/ui';
import { ModoruScript } from 'modoru';
import { Outlined } from 'outlined';
import { type ReactNode } from 'react';

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
        {import.meta.env.PROD && (
          <>
            <script
              src="https://www.googletagmanager.com/gtag/js?id=G-PW50MG903L"
              async
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","G-PW50MG903L");`,
              }}
            />
          </>
        )}
        <ThemeScript />
        <ModoruScript />
      </head>
      <body>
        {import.meta.env.DEV && <Outlined />}
        <Header Link={Link} />
        {children}
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
