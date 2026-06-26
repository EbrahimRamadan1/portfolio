import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings',
  description: 'Manage your account settings.',
};

export default function SettingsPage() {
  return (
    <div>
      <h1>Settings</h1>
      <p>Account settings page.</p>
    </div>
  );
}
