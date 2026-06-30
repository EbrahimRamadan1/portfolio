'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AnimatePresence, motion } from 'motion/react';
import { contactSchema } from '@/schemas/contact.schema';
import type { ContactFormValues } from '@/schemas/contact.schema';
import { fadeIn } from '@/lib/animations';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FieldConfig {
  name: keyof ContactFormValues;
  label: string;
  type?: string;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
}

const fields: FieldConfig[] = [
  { name: 'name', label: 'Full Name', placeholder: 'Your name' },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
  { name: 'subject', label: 'Subject', placeholder: 'What is this about?' },
  { name: 'message', label: 'Message', multiline: true, rows: 5, placeholder: 'Your message...' },
];

export default function ContactForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    setFormState('submitting');
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.message || 'Something went wrong. Please try again.');
        setFormState('error');
        return;
      }

      setFormState('success');
    } catch {
      setServerError('Network error. Please check your connection and try again.');
      setFormState('error');
    }
  };

  const handleReset = () => {
    setFormState('idle');
    setServerError('');
  };

  return (
    <AnimatePresence mode="wait">
      {formState === 'success' ? (
        <Box
          component={motion.div}
          key="success"
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
          sx={{
            textAlign: 'center',
            py: 6,
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              bgcolor: 'rgba(34, 197, 94, 0.1)',
              mx: 'auto',
              mb: 2,
            }}
          >
            <Box
              component="span"
              sx={{
                width: 24,
                height: 24,
                color: 'success.main',
                fontSize: 24,
                lineHeight: 1,
              }}
            >
              ✓
            </Box>
          </Box>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Message sent!
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Thank you for reaching out. I&apos;ll get back to you soon.
          </Typography>
          <Button variant="outlined" onClick={handleReset}>
            Send another message
          </Button>
        </Box>
      ) : (
        <Box
          component={motion.form}
          key="form"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          variants={fadeIn}
          initial="initial"
          animate="animate"
          exit="exit"
          sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
        >
          {formState === 'error' && serverError && (
            <motion.div variants={fadeIn} initial="initial" animate="animate">
              <Alert severity="error" sx={{ borderRadius: 2 }}>
                {serverError}
              </Alert>
            </motion.div>
          )}

          {fields.map((field) => (
            <TextField
              key={field.name}
              label={field.label}
              placeholder={field.placeholder}
              type={field.type || 'text'}
              multiline={field.multiline}
              rows={field.rows}
              error={!!errors[field.name]}
              helperText={errors[field.name]?.message || ' '}
              {...register(field.name)}
              fullWidth
              disabled={formState === 'submitting'}
              slotProps={{
                input: {
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    '&.Mui-focused': {
                      backgroundColor: 'rgba(129, 140, 248, 0.05)',
                    },
                  },
                },
              }}
            />
          ))}

          <Button
            type="submit"
            variant="contained"
            size="large"
            disabled={formState === 'submitting'}
            sx={{ mt: 1, py: 1.5, position: 'relative' }}
          >
            {formState === 'submitting' ? (
              <>
                Sending
                <CircularProgress
                  size={18}
                  thickness={3}
                  sx={{
                    color: 'inherit',
                    ml: 1.5,
                  }}
                />
              </>
            ) : (
              'Send message'
            )}
          </Button>
        </Box>
      )}
    </AnimatePresence>
  );
}
