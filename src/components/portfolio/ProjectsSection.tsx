'use client';

import { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Collapse from '@mui/material/Collapse';
import { portfolio } from '@/lib/content';
import SectionHeading from '@/components/ui/SectionHeading';
import GlowCard from '@/components/ui/GlowCard';
import AnimatedSection from '@/components/ui/AnimatedSection';

function ProjectCard({
  project,
  index,
}: {
  project: (typeof portfolio.projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatedSection delay={0.05 * index}>
      <GlowCard sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="caption" sx={{ color: 'primary.main', mb: 1 }}>
          {project.subtitle}
        </Typography>

        <Typography variant="h4" component="h3" sx={{ mb: 2 }}>
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', mb: 2, flex: 1 }}
        >
          {project.problem}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2.5 }}>
          {project.stack.map((tech) => (
            <Chip key={tech} label={tech} variant="filled" size="small" />
          ))}
        </Box>

        <Button
          variant="text"
          onClick={() => setExpanded(!expanded)}
          sx={{
            alignSelf: 'flex-start',
            p: 0,
            color: 'primary.main',
            fontWeight: 600,
            fontSize: '0.875rem',
            '&:hover': { background: 'transparent', opacity: 0.8 },
          }}
        >
          {expanded ? 'Show less' : 'View case study'}
        </Button>

        <Collapse in={expanded}>
          <Box sx={{ mt: 2, pt: 2, borderTop: '1px solid', borderColor: 'divider' }}>
            <Typography
              variant="caption"
              sx={{ color: 'primary.main', mb: 0.5, display: 'block' }}
            >
              Solution
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              {project.solution}
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: 'primary.main', mb: 0.5, display: 'block' }}
            >
              Architecture
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              {project.architecture}
            </Typography>

            <Typography
              variant="caption"
              sx={{ color: 'primary.main', mb: 0.5, display: 'block' }}
            >
              Impact
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
              {project.impact}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {project.metrics.map((metric) => (
                <Chip
                  key={metric}
                  label={metric}
                  size="small"
                  sx={{
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    color: '#2dd4bf',
                    border: '1px solid rgba(20, 184, 166, 0.15)',
                  }}
                />
              ))}
            </Box>
          </Box>
        </Collapse>
      </GlowCard>
    </AnimatedSection>
  );
}

export default function ProjectsSection() {
  return (
    <Box component="section" id="projects" sx={{ py: { xs: 10, md: 16 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionHeading
            number="04"
            title="Featured Projects"
            subtitle="Enterprise systems I've architected and built for financial institutions."
          />
        </AnimatedSection>

        <Grid container spacing={3}>
          {portfolio.projects.map((project, index) => (
            <Grid key={project.title} size={{ xs: 12, md: 6 }}>
              <ProjectCard project={project} index={index} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
