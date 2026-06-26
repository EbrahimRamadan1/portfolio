import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login',
  description: 'Sign in to your account.',
};

export default function LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <p>Sign in page.</p>
    </div>
  );
}
