import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import ThemeRegistry from '@/app/theme-registry';
import Providers from '@/app/providers';
import PageTransition from '@/components/shared/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'NextTemplate',
    template: '%s | NextTemplate',
  },
  description: 'Production-grade Next.js template with Material UI, TypeScript, and modern tooling.',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
  ),
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1976d2',
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
