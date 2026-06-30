import { Resend } from 'resend';
import { contactSchema } from '@/schemas/contact.schema';
import { apiError, apiSuccess, handleApiError } from '@/lib/api-helpers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const validationErrors = parsed.error.flatten().fieldErrors;
      return apiError('Validation failed', 400, 'VALIDATION_ERROR', validationErrors);
    }

    const { name, email, subject, message } = parsed.data;

    const { error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.CONTACT_RECEIVER_EMAIL || '',
      subject: `New Portfolio Contact — ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
    });

    if (error) {
      console.error('Resend error:', error);
      return apiError('Failed to send message. Please try again.', 500, 'EMAIL_ERROR');
    }

    return apiSuccess({ received: true }, 'Message sent successfully');
  } catch (error) {
    return handleApiError(error);
  }
}
