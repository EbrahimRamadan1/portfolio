'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import { motion } from 'motion/react';
import { portfolio } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import AnimatedSection from '@/components/ui/AnimatedSection';

function TimelineDot() {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: { xs: 0, md: 0 },
        top: 6,
        width: 14,
        height: 14,
        borderRadius: '50%',
        bgcolor: 'primary.main',
        border: 3,
        borderColor: 'background.default',
        boxShadow: '0 0 0 2px rgba(129, 140, 248, 0.3)',
        zIndex: 1,
      }}
    />
  );
}

function TimelineLine() {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: 6,
        top: 20,
        bottom: 0,
        width: 2,
        bgcolor: 'divider',
        transform: 'translateX(-50%)',
      }}
    />
  );
}

export default function ExperienceTimeline() {
  const experience = portfolio.experience[0];

  return (
    <Box component="section" id="experience" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            number="03"
            title="Experience"
            subtitle="Engineering critical financial systems at enterprise scale."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Box
            sx={{
              position: 'relative',
              pl: { xs: 5, md: 5 },
              ml: { xs: 0, md: 0 },
            }}
          >
            <TimelineDot />
            <TimelineLine />

            <Box
              component={motion.div}
              variants={{
                initial: { opacity: 0, x: -10 },
                animate: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
                },
              }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Typography
                variant="caption"
                sx={{ color: 'primary.main', mb: 0.5, display: 'block' }}
              >
                {experience.startDate} — {experience.endDate}
              </Typography>

              <Typography variant="h3" component="h3" sx={{ mb: 0.5 }}>
                {experience.role}
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: 'text.secondary', mb: 3, fontWeight: 500 }}
              >
                {experience.company} · {experience.location}
              </Typography>

              <Box
                component="ul"
                sx={{
                  listStyle: 'none',
                  p: 0,
                  m: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 1.5,
                  mb: 3,
                }}
              >
                {experience.achievements.map((achievement, i) => (
                  <Box
                    component="li"
                    key={i}
                    sx={{
                      display: 'flex',
                      gap: 1.5,
                      '&::before': {
                        content: '""',
                        flexShrink: 0,
                        width: 6,
                        height: 6,
                        mt: 1.75,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        opacity: 0.6,
                      },
                    }}
                  >
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {achievement}
                    </Typography>
                  </Box>
                ))}
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {experience.techStack.map((tech) => (
                  <Chip
                    key={tech}
                    label={tech}
                    variant="filled"
                    size="small"
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </AnimatedSection>
      </Container>
    </Box>
  );
}
