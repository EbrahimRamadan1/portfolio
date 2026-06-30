import type { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface GlowCardProps {
  children: ReactNode;
  sx?: Record<string, unknown>;
  hoverEffect?: boolean;
}

export default function GlowCard({
  children,
  sx,
  hoverEffect = true,
}: GlowCardProps) {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: 3,
        background: 'rgba(18, 18, 26, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        p: { xs: 3, md: 4 },
        transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
        ...(hoverEffect && {
          '&:hover': {
            borderColor: 'rgba(129, 140, 248, 0.2)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 32px rgba(99, 102, 241, 0.1)',
          },
        }),
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
