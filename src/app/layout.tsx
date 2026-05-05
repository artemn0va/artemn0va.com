import { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import * as React from 'react';
import { ReactNode } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';

import '@/styles/globals.css';
import '@/styles/grid.css';

import { cn } from '@/lib/utils';

import ThemeProvider from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

import { siteConfig } from '@/constant/config';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.title}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
  icons: {
    icon: '/favicon/favicon.ico',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/apple-touch-icon.png',
  },
  manifest: `/favicon/site.webmanifest`,
  openGraph: {
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.title,
    images: [`${siteConfig.url}/images/og.jpg`],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}/images/og.jpg`],
    // creator: '@artemnova',
  },
  // authors: [
  //   {
  //     name: 'Artem Nova',
  //     url: 'https://github.com/artemn0va',
  //   },
  // ],
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-page dark:bg-page-dark font-sans antialiased',
          fontSans.variable,
        )}
      >
        <ThemeProvider>
          <main>{children}</main>
          <Toaster />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
