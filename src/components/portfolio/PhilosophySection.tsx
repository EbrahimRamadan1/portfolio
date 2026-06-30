'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { portfolio } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

const icons: Record<string, string> = {
  Scalability: '↑',
  Maintainability: '◈',
  'Developer Experience': '⚡',
  Performance: '→',
  'Reusable Systems': '⊞',
  Security: '◆',
};

export default function PhilosophySection() {
  return (
    <Box component="section" id="philosophy" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            number="05"
            title="Engineering Philosophy"
            subtitle="Principles that guide every system I build."
          />
        </AnimatedSection>

        <Grid container spacing={3}>
          {portfolio.philosophy.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <AnimatedSection delay={0.05 * index}>
                <GlowCard sx={{ height: '100%' }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: '1.5rem',
                      mb: 0.5,
                      fontWeight: 300,
                      color: 'primary.main',
                      lineHeight: 1,
                    }}
                  >
                    {icons[item.title] || '◇'}
                  </Typography>
                  <Typography variant="h4" component="h3" sx={{ mb: 1.5 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {item.description}
                  </Typography>
                </GlowCard>
              </AnimatedSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
