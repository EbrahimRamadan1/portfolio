'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'motion/react';

interface StatBadgeProps {
  value: string;
  label: string;
}

export default function StatBadge({ value, label }: StatBadgeProps) {
  return (
    <Box
      component={motion.div}
      whileHover={{ scale: 1.05 }}
      sx={{
        textAlign: 'center',
        p: 3,
        borderRadius: 2,
        background: 'rgba(129, 140, 248, 0.05)',
        border: '1px solid rgba(129, 140, 248, 0.1)',
      }}
    >
      <Typography
        variant="h3"
        component="div"
        sx={{
          background: 'linear-gradient(135deg, #818cf8, #14b8a6)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        {value}
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {label}
      </Typography>
    </Box>
  );
}
