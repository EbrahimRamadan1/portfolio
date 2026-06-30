'use client';

import { useRef } from 'react';
import type { ReactNode } from 'react';
import { motion, useInView } from 'motion/react';
import type { Variants } from 'motion/react';
import Box from '@mui/material/Box';

interface AnimatedSectionProps {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  sx?: Record<string, unknown>;
}

export default function AnimatedSection({
  children,
  variants,
  delay = 0,
  sx,
}: AnimatedSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const defaultVariants: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const animVariants = variants || defaultVariants;

  return (
    <Box
      ref={ref}
      component={motion.div}
      variants={animVariants}
      initial="initial"
      animate={isInView ? 'animate' : 'initial'}
      sx={sx}
    >
      {children}
    </Box>
  );
}
