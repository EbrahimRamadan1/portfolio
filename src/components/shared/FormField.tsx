'use client';

import type { InputHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  label: string;
  name: string;
  as?: 'input' | 'textarea';
}

export default function FormField({ label, name, as = 'input', ...props }: FormFieldProps) {
  const { register, formState: { errors } } = useFormContext();
  const error = errors[name];

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {as === 'textarea' ? (
        <textarea id={name} rows={4} {...register(name)} {...(props as InputHTMLAttributes<HTMLTextAreaElement>)} />
      ) : (
        <input id={name} {...register(name)} {...(props as InputHTMLAttributes<HTMLInputElement>)} />
      )}
      {error && <span role="alert">{String(error.message)}</span>}
    </div>
  );
}
