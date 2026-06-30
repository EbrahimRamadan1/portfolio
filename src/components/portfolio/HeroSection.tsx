'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { motion } from 'motion/react';
import { portfolio } from '@/lib/content';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function HeroSection() {
  return (
    <Box
      component="section"
      id="hero"
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-30%',
          width: '80%',
          height: '100%',
          background:
            'radial-gradient(circle at 70% 50%, rgba(99, 102, 241, 0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-30%',
          left: '-20%',
          width: '60%',
          height: '60%',
          background:
            'radial-gradient(circle at 30% 50%, rgba(20, 184, 166, 0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <AnimatedSection>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1.5,
              mb: 3,
            }}
          >
            <Box
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                bgcolor: 'success.main',
                boxShadow: '0 0 12px rgba(34, 197, 94, 0.4)',
                animation: 'pulse 2s infinite',
                '@keyframes pulse': {
                  '0%, 100%': { opacity: 1 },
                  '50%': { opacity: 0.5 },
                },
              }}
            />
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Available for opportunities
            </Typography>
          </Box>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ mb: 2, maxWidth: 900 }}
          >
            {portfolio.name}
            <Box
              component="span"
              sx={{
                display: 'block',
                background: 'linear-gradient(135deg, #818cf8, #a5b4fc, #14b8a6)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {portfolio.title}
            </Box>
          </Typography>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Typography
            variant="h3"
            component="p"
            sx={{
              color: 'text.secondary',
              maxWidth: 680,
              mb: 1,
              fontWeight: 400,
              fontSize: 'clamp(1.05rem, 2vw, 1.3rem)',
              lineHeight: 1.6,
            }}
          >
            {portfolio.tagline}
          </Typography>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <Box
            sx={{
              display: 'flex',
              gap: 1.5,
              flexWrap: 'wrap',
              alignItems: 'center',
              mt: 1,
              mb: 4,
            }}
          >
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              <Box component="span" sx={{ color: 'text.primary' }}>
                {portfolio.currentCompany}
              </Box>
              {' · '}
              {portfolio.location}
              {' · '}
              {portfolio.experienceYears} year
            </Typography>
          </Box>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              href="#contact"
              sx={{ px: 4, py: 1.5 }}
            >
              Get in touch
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#experience"
              sx={{ px: 4, py: 1.5 }}
            >
              View experience
            </Button>
          </Box>
        </AnimatedSection>
      </Container>

      <Box
        component={motion.div}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
          color: 'text.secondary',
        }}
      >
        <Typography variant="caption">Scroll</Typography>
        <Box
          sx={{
            width: 1,
            height: 24,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 4,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              top: 4,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 2,
              height: 6,
              borderRadius: 1,
              bgcolor: 'primary.main',
              animation: 'scrollDown 2s infinite',
              '@keyframes scrollDown': {
                '0%': { opacity: 1, transform: 'translateX(-50%) translateY(0)' },
                '100%': { opacity: 0, transform: 'translateX(-50%) translateY(12px)' },
              },
            },
          }}
        />
      </Box>
    </Box>
  );
}
