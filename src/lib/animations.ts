import type { Variants, Transition } from 'motion/react';

export const defaultTransition: Transition = {
  duration: 0.4,
  ease: [0.25, 0.1, 0.25, 1],
};

export const springTransition: Transition = {
  type: 'spring',
  stiffness: 100,
  damping: 20,
  mass: 1,
};

export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: defaultTransition },
  exit: { opacity: 0, transition: defaultTransition },
};

export const slideUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: defaultTransition },
  exit: { opacity: 0, y: -30, transition: defaultTransition },
};

export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: defaultTransition },
  exit: { opacity: 0, x: 30, transition: defaultTransition },
};

export const slideInRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: defaultTransition },
  exit: { opacity: 0, x: -30, transition: defaultTransition },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: defaultTransition },
  exit: { opacity: 0, scale: 0.95, transition: defaultTransition },
};

export const staggerContainer: Variants = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const scrollReveal: Variants = {
  initial: { opacity: 0, y: 40 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const scaleOnScroll: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export const lineGrow: Variants = {
  initial: { scaleX: 0 },
  animate: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};
