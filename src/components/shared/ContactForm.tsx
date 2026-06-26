'use client';

import FormWrapper from '@/components/shared/FormWrapper';
import FormField from '@/components/shared/FormField';
import { contactSchema } from '@/schemas/contact.schema';
import type { ContactFormValues } from '@/schemas/contact.schema';

export default function ContactForm() {
  const handleSubmit = async (values: ContactFormValues) => {
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    });
  };

  return (
    <FormWrapper schema={contactSchema} onSubmit={handleSubmit}>
      <FormField
        label="Name"
        name="name"
        placeholder="Your name"
      />
      <FormField
        label="Email"
        name="email"
        type="email"
        placeholder="your@email.com"
      />
      <FormField
        label="Message"
        name="message"
        placeholder="Your message..."
      />
      <button type="submit">Send Message</button>
    </FormWrapper>
  );
}
