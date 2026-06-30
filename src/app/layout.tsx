import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/app/theme-registry';
import Providers from '@/app/providers';
import PageTransition from '@/components/shared/PageTransition';
import { portfolioMetadata } from '@/lib/content';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: portfolioMetadata.title,
    template: '%s | Ebrahim Ramadan',
  },
  description: portfolioMetadata.description,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || portfolioMetadata.url,
  ),
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: portfolioMetadata.title,
    description: portfolioMetadata.description,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: portfolioMetadata.title,
    description: portfolioMetadata.description,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#6366f1',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <ThemeRegistry>
          <Providers>
            <PageTransition>
              {children}
            </PageTransition>
          </Providers>
        </ThemeRegistry>
      </body>
    </html>
  );
}
