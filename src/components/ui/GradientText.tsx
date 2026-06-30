'use client';

import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';

interface GradientTextProps extends TypographyProps {
  gradient?: string;
}

export default function GradientText({
  gradient = 'linear-gradient(135deg, #818cf8, #a5b4fc, #14b8a6)',
  children,
  sx,
  ...props
}: GradientTextProps) {
  return (
    <Typography
      sx={{
        background: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
