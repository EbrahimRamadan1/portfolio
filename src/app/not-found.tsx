import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Box
      sx={{
        minHeight: '100dvh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ maxWidth: 480 }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              fontWeight: 800,
              lineHeight: 1,
              mb: 1,
              background: 'linear-gradient(135deg, #818cf8, #14b8a6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            404
          </Typography>
          <Typography variant="h3" component="h2" sx={{ mb: 2 }}>
            Page not found
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </Typography>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" size="large" sx={{ px: 4 }}>
              Back home
            </Button>
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

