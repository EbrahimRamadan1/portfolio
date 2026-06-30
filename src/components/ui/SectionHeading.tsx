'use client';

import type { ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function SectionHeading({
  number,
  title,
  subtitle,
  children,
}: SectionHeadingProps) {
  const theme = useTheme();

  return (
    <Box component="header" sx={{ mb: { xs: 5, md: 7 } }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          mb: 1.5,
        }}
      >
        <Typography
          variant="caption"
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            lineHeight: 1,
          }}
        >
          {number}
        </Typography>
        <Box
          sx={{
            flex: 1,
            height: '1px',
            maxWidth: 120,
            background: `linear-gradient(90deg, ${theme.palette.primary.main}, transparent)`,
          }}
        />
      </Box>
      <Typography variant="h2" component="h2" sx={{ mb: subtitle ? 1.5 : 0 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', maxWidth: 600 }}
        >
          {subtitle}
        </Typography>
      )}
      {children}
    </Box>
  );
}
