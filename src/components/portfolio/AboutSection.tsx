import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { portfolio } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import StatBadge from '@/components/ui/StatBadge';
import AnimatedSection from '@/components/ui/AnimatedSection';

export default function AboutSection() {
  return (
    <Box component="section" id="about" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading number="01" title="About" />
        </AnimatedSection>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 4, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box sx={{ flex: '1 1 60%' }}>
            <AnimatedSection delay={0.1}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {portfolio.about.map((paragraph, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    sx={{ color: 'text.secondary', fontSize: '1.05rem' }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Box>
            </AnimatedSection>
          </Box>

          <Box sx={{ flex: '1 1 40%' }}>
            <AnimatedSection delay={0.2}>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: 2,
                }}
              >
                {portfolio.stats.map((stat) => (
                  <StatBadge
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                  />
                ))}
              </Box>
            </AnimatedSection>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
