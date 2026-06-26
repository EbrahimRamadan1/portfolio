import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Your personal dashboard.',
  openGraph: {
    title: 'Dashboard | NextTemplate',
    description: 'Your personal dashboard.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dashboard | NextTemplate',
    description: 'Your personal dashboard.',
  },
};

export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard. This is a protected route.</p>
    </div>
  );
}
