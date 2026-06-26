'use client';

import type { ReactNode } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface FormWrapperProps<T extends z.ZodType> {
  schema: T;
  onSubmit: (values: z.infer<T>) => Promise<void> | void;
  children: ReactNode;
  defaultValues?: Partial<z.infer<T>>;
}

export default function FormWrapper<T extends z.ZodType>({
  schema,
  onSubmit,
  children,
  defaultValues,
}: FormWrapperProps<T>) {
  const methods = useForm({
    resolver: zodResolver(schema as never),
    defaultValues: defaultValues as Record<string, unknown>,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit as never)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}
