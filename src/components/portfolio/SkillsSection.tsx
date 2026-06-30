'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import { motion } from 'motion/react';
import { portfolio } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function SkillsSection() {
  return (
    <Box component="section" id="skills" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            number="02"
            title="Skills"
            subtitle="Technologies and methodologies I use to build enterprise-grade systems."
          />
        </AnimatedSection>

        <Grid container spacing={3}>
          {portfolio.skills.map((group, index) => (
            <Grid key={group.category} size={{ xs: 12, sm: 6, md: 3 }}>
              <AnimatedSection delay={0.05 * index}>
                <GlowCard sx={{ height: '100%' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: 'primary.main',
                      mb: 2,
                      display: 'block',
                    }}
                  >
                    {group.category}
                  </Typography>
                  <Box
                    component={motion.div}
                    variants={{
                      initial: { opacity: 0 },
                      animate: {
                        opacity: 1,
                        transition: { staggerChildren: 0.05 },
                      },
                    }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {group.skills.map((skill) => (
                      <Chip
                        key={skill}
                        label={skill}
                        variant="filled"
                        size="small"
                      />
                    ))}
                  </Box>
                </GlowCard>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
