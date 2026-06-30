'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: { main: '#818cf8', light: '#a5b4fc', dark: '#6366f1' },
        secondary: { main: '#14b8a6', light: '#2dd4bf', dark: '#0d9488' },
        background: {
          default: '#0a0a0f',
          paper: '#12121a',
        },
        text: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
        },
        divider: '#1e293b',
        error: { main: '#f87171' },
        success: { main: '#22c55e' },
      },
    },
    light: {
      palette: {
        primary: { main: '#4f46e5', light: '#6366f1', dark: '#4338ca' },
        secondary: { main: '#0d9488', light: '#14b8a6', dark: '#0f766e' },
        background: {
          default: '#f8fafc',
          paper: '#ffffff',
        },
        text: {
          primary: '#0f172a',
          secondary: '#64748b',
        },
        divider: '#e2e8f0',
        error: { main: '#ef4444' },
        success: { main: '#22c55e' },
      },
    },
  },
  defaultColorScheme: 'dark',
  typography: {
    fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif',
    h1: {
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: 700,
      lineHeight: 1.05,
      letterSpacing: '-0.03em',
    },
    h2: {
      fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
      fontWeight: 600,
      lineHeight: 1.15,
      letterSpacing: '-0.02em',
    },
    h3: {
      fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '-0.015em',
    },
    h4: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      letterSpacing: '0em',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      letterSpacing: '0em',
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      letterSpacing: '0.05em',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
        '*': {
          scrollbarWidth: 'thin',
          scrollbarColor: '#1e293b transparent',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 10,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          letterSpacing: '-0.01em',
        },
        contained: {
          backgroundImage: 'linear-gradient(135deg, #6366f1, #818cf8)',
          '&:hover': {
            backgroundImage: 'linear-gradient(135deg, #4f46e5, #6366f1)',
          },
        },
        outlined: {
          borderColor: '#1e293b',
          '&:hover': {
            borderColor: '#6366f1',
            backgroundColor: 'rgba(99, 102, 241, 0.08)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          fontSize: '0.8125rem',
        },
        filled: {
          backgroundColor: 'rgba(129, 140, 248, 0.1)',
          color: '#a5b4fc',
          border: '1px solid rgba(129, 140, 248, 0.15)',
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'lg',
      },
    },
  },
});

export default theme;
