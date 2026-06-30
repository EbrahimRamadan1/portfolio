import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string({ error: 'Name is required' }).min(2, { error: 'Name must be at least 2 characters' }),
  email: z.string({ error: 'Email is required' }).email({ error: 'Please enter a valid email address' }),
  subject: z.string({ error: 'Subject is required' }).min(3, { error: 'Subject must be at least 3 characters' }),
  message: z.string({ error: 'Message is required' }).min(10, { error: 'Message must be at least 10 characters' }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
