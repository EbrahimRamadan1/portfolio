import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register',
  description: 'Create a new account.',
};

export default function RegisterPage() {
  return (
    <div>
      <h1>Register</h1>
      <p>Create your account.</p>
    </div>
  );
}
